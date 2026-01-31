<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    /**
     * POST /api/orders
     * Create new order from cart
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'nullable|email|max:255',
            'customer_phone' => 'required|string|max:20',
            'shipping_address' => 'required|string|max:500',
            'shipping_ward' => 'nullable|string|max:100',
            'shipping_district' => 'nullable|string|max:100',
            'shipping_city' => 'required|string|max:100',
            'payment_method' => 'required|in:cod,bank_transfer',
            'notes' => 'nullable|string|max:1000',
        ]);

        $cart = $request->session()->get('cart', []);
        
        if (empty($cart)) {
            return response()->json([
                'success' => false,
                'message' => 'Giỏ hàng trống',
            ], 400);
        }

        // Get products and validate stock
        $productIds = array_keys($cart);
        $products = Product::whereIn('id', $productIds)
            ->where('is_active', true)
            ->get()
            ->keyBy('id');

        $orderItems = [];
        $subtotal = 0;

        foreach ($cart as $productId => $item) {
            if (!isset($products[$productId])) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sản phẩm không tồn tại hoặc đã ngừng kinh doanh',
                ], 400);
            }

            $product = $products[$productId];
            
            if ($product->track_inventory && $product->stock_quantity < $item['quantity']) {
                return response()->json([
                    'success' => false,
                    'message' => "Sản phẩm '{$product->name}' không đủ số lượng trong kho",
                ], 400);
            }

            $itemSubtotal = $product->price * $item['quantity'];
            $subtotal += $itemSubtotal;

            $orderItems[] = [
                'product_id' => $product->id,
                'product_name' => $product->name,
                'product_sku' => $product->sku,
                'quantity' => $item['quantity'],
                'price' => $product->price,
                'subtotal' => $itemSubtotal,
            ];
        }

        // Calculate totals
        $freeShippingThreshold = Setting::get('free_shipping_threshold', 500000);
        $shippingFee = $subtotal >= $freeShippingThreshold ? 0 : (float) Setting::get('shipping_fee', 30000);
        $total = $subtotal + $shippingFee;

        try {
            DB::beginTransaction();

            // Create order
            $order = Order::create([
                'customer_name' => $request->customer_name,
                'customer_email' => $request->customer_email,
                'customer_phone' => $request->customer_phone,
                'shipping_address' => $request->shipping_address,
                'shipping_ward' => $request->shipping_ward,
                'shipping_district' => $request->shipping_district,
                'shipping_city' => $request->shipping_city,
                'subtotal' => $subtotal,
                'shipping_fee' => $shippingFee,
                'total' => $total,
                'payment_method' => $request->payment_method,
                'notes' => $request->notes,
                'status' => 'pending',
                'payment_status' => 'unpaid',
            ]);

            // Create order items
            foreach ($orderItems as $item) {
                $order->items()->create($item);
            }

            // Update product stock and order count
            foreach ($cart as $productId => $item) {
                $product = $products[$productId];
                if ($product->track_inventory) {
                    $product->decrement('stock_quantity', $item['quantity']);
                }
                $product->increment('order_count');
            }

            // Clear cart
            $request->session()->forget('cart');

            DB::commit();

            // TODO: Send email notification (queue)
            // Mail::to($request->customer_email)->queue(new OrderConfirmation($order));

            return response()->json([
                'success' => true,
                'message' => 'Đặt hàng thành công',
                'data' => [
                    'order_number' => $order->order_number,
                    'total' => $order->total,
                    'status' => $order->status,
                    'payment_method' => $order->payment_method,
                ],
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra, vui lòng thử lại',
            ], 500);
        }
    }

    /**
     * GET /api/orders/{orderNumber}
     * Get order details by order number
     */
    public function show(string $orderNumber): JsonResponse
    {
        $order = Order::with('items')
            ->where('order_number', $orderNumber)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => [
                'order_number' => $order->order_number,
                'customer_name' => $order->customer_name,
                'customer_phone' => $order->customer_phone,
                'shipping_address' => $order->shipping_address,
                'shipping_city' => $order->shipping_city,
                'items' => $order->items->map(fn ($item) => [
                    'product_name' => $item->product_name,
                    'quantity' => $item->quantity,
                    'price' => $item->price,
                    'subtotal' => $item->subtotal,
                ]),
                'subtotal' => $order->subtotal,
                'shipping_fee' => $order->shipping_fee,
                'total' => $order->total,
                'status' => $order->status,
                'status_label' => $order->status_label,
                'payment_status' => $order->payment_status,
                'payment_status_label' => $order->payment_status_label,
                'payment_method' => $order->payment_method,
                'tracking_number' => $order->tracking_number,
                'created_at' => $order->created_at->format('d/m/Y H:i'),
            ],
        ]);
    }

    /**
     * GET /api/orders/track
     * Track order by phone and order number
     */
    public function track(Request $request): JsonResponse
    {
        $request->validate([
            'order_number' => 'required|string',
            'phone' => 'required|string',
        ]);

        $order = Order::with('items')
            ->where('order_number', $request->order_number)
            ->where('customer_phone', $request->phone)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Không tìm thấy đơn hàng',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'order_number' => $order->order_number,
                'status' => $order->status,
                'status_label' => $order->status_label,
                'payment_status' => $order->payment_status,
                'payment_status_label' => $order->payment_status_label,
                'total' => $order->total,
                'tracking_number' => $order->tracking_number,
                'shipped_at' => $order->shipped_at?->format('d/m/Y H:i'),
                'delivered_at' => $order->delivered_at?->format('d/m/Y H:i'),
                'created_at' => $order->created_at->format('d/m/Y H:i'),
            ],
        ]);
    }
}
