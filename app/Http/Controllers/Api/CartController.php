<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{
    /**
     * GET /api/cart
     * Get cart items
     */
    public function index(Request $request): JsonResponse
    {
        $cart = $this->getCart($request);
        $items = $this->getCartItems($cart);

        return response()->json([
            'success' => true,
            'data' => [
                'items' => $items,
                'summary' => $this->calculateSummary($items),
            ],
        ]);
    }

    /**
     * POST /api/cart/add
     * Add item to cart
     */
    public function add(Request $request): JsonResponse
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1|max:99',
        ]);

        $product = Product::where('id', $request->product_id)
            ->where('is_active', true)
            ->firstOrFail();

        if ($product->track_inventory && $product->stock_quantity < $request->quantity) {
            return response()->json([
                'success' => false,
                'message' => 'Số lượng sản phẩm trong kho không đủ',
            ], 400);
        }

        $cart = $this->getCart($request);
        $productId = (string) $request->product_id;

        if (isset($cart[$productId])) {
            $cart[$productId]['quantity'] += $request->quantity;
        } else {
            $cart[$productId] = [
                'product_id' => $product->id,
                'quantity' => $request->quantity,
            ];
        }

        $this->saveCart($request, $cart);
        $items = $this->getCartItems($cart);

        return response()->json([
            'success' => true,
            'message' => 'Đã thêm vào giỏ hàng',
            'data' => [
                'items' => $items,
                'summary' => $this->calculateSummary($items),
            ],
        ]);
    }

    /**
     * PUT /api/cart/{productId}
     * Update item quantity
     */
    public function update(Request $request, int $productId): JsonResponse
    {
        $request->validate([
            'quantity' => 'required|integer|min:1|max:99',
        ]);

        $cart = $this->getCart($request);
        $productKey = (string) $productId;

        if (!isset($cart[$productKey])) {
            return response()->json([
                'success' => false,
                'message' => 'Sản phẩm không có trong giỏ hàng',
            ], 404);
        }

        $product = Product::find($productId);
        if ($product && $product->track_inventory && $product->stock_quantity < $request->quantity) {
            return response()->json([
                'success' => false,
                'message' => 'Số lượng sản phẩm trong kho không đủ',
            ], 400);
        }

        $cart[$productKey]['quantity'] = $request->quantity;
        $this->saveCart($request, $cart);
        $items = $this->getCartItems($cart);

        return response()->json([
            'success' => true,
            'message' => 'Đã cập nhật giỏ hàng',
            'data' => [
                'items' => $items,
                'summary' => $this->calculateSummary($items),
            ],
        ]);
    }

    /**
     * DELETE /api/cart/{productId}
     * Remove item from cart
     */
    public function remove(Request $request, int $productId): JsonResponse
    {
        $cart = $this->getCart($request);
        $productKey = (string) $productId;

        unset($cart[$productKey]);
        $this->saveCart($request, $cart);
        $items = $this->getCartItems($cart);

        return response()->json([
            'success' => true,
            'message' => 'Đã xóa khỏi giỏ hàng',
            'data' => [
                'items' => $items,
                'summary' => $this->calculateSummary($items),
            ],
        ]);
    }

    /**
     * DELETE /api/cart
     * Clear cart
     */
    public function clear(Request $request): JsonResponse
    {
        $this->saveCart($request, []);

        return response()->json([
            'success' => true,
            'message' => 'Đã xóa giỏ hàng',
            'data' => [
                'items' => [],
                'summary' => $this->calculateSummary([]),
            ],
        ]);
    }

    // Helper methods
    private function getCart(Request $request): array
    {
        return $request->session()->get('cart', []);
    }

    private function saveCart(Request $request, array $cart): void
    {
        $request->session()->put('cart', $cart);
    }

    private function getCartItems(array $cart): array
    {
        if (empty($cart)) {
            return [];
        }

        $productIds = array_keys($cart);
        $products = Product::with('primaryImage')
            ->whereIn('id', $productIds)
            ->where('is_active', true)
            ->get()
            ->keyBy('id');

        $items = [];
        foreach ($cart as $productId => $item) {
            if (isset($products[$productId])) {
                $product = $products[$productId];
                $items[] = [
                    'product_id' => $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'price' => $product->price,
                    'image' => $product->primaryImage?->url,
                    'quantity' => $item['quantity'],
                    'subtotal' => $product->price * $item['quantity'],
                    'in_stock' => !$product->track_inventory || $product->stock_quantity >= $item['quantity'],
                ];
            }
        }

        return $items;
    }

    private function calculateSummary(array $items): array
    {
        $subtotal = array_sum(array_column($items, 'subtotal'));
        $freeShippingThreshold = 500000;
        $shippingFee = $subtotal >= $freeShippingThreshold ? 0 : 30000;

        return [
            'item_count' => count($items),
            'total_quantity' => array_sum(array_column($items, 'quantity')),
            'subtotal' => $subtotal,
            'shipping_fee' => $shippingFee,
            'total' => $subtotal + $shippingFee,
            'free_shipping_threshold' => $freeShippingThreshold,
            'remaining_for_free_shipping' => max(0, $freeShippingThreshold - $subtotal),
        ];
    }
}
