<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    /**
     * GET /api/products
     * List products with filters, sorting, pagination
     */
    public function index(Request $request): JsonResponse
    {
        $query = Product::with(['category', 'primaryImage'])
            ->where('is_active', true);

        // Filter by category
        if ($request->filled('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by featured
        if ($request->boolean('featured')) {
            $query->where('is_featured', true);
        }

        // Filter by price range
        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }
        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        // Filter by in stock
        if ($request->boolean('in_stock')) {
            $query->where('stock_quantity', '>', 0);
        }

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('short_description', 'like', "%{$search}%");
            });
        }

        // Sorting
        $sortBy = $request->get('sort', 'created_at');
        $sortDir = $request->get('order', 'desc');
        
        $allowedSorts = ['created_at', 'price', 'name', 'order_count', 'view_count'];
        if (in_array($sortBy, $allowedSorts)) {
            $query->orderBy($sortBy, $sortDir === 'asc' ? 'asc' : 'desc');
        }

        // Pagination
        $perPage = min($request->get('per_page', 12), 50);
        $products = $query->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => $products->items(),
            'meta' => [
                'current_page' => $products->currentPage(),
                'last_page' => $products->lastPage(),
                'per_page' => $products->perPage(),
                'total' => $products->total(),
            ],
        ]);
    }

    /**
     * GET /api/products/featured
     * Get featured products (cached)
     */
    public function featured(): JsonResponse
    {
        $products = Cache::remember('featured_products', 300, function () {
            return Product::with(['category', 'primaryImage'])
                ->where('is_active', true)
                ->where('is_featured', true)
                ->orderBy('updated_at', 'desc')
                ->limit(8)
                ->get();
        });

        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }

    /**
     * GET /api/products/{slug}
     * Get product detail
     */
    public function show(string $slug): JsonResponse
    {
        $product = Product::with(['category', 'images'])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        // Get related products
        $related = Product::with(['primaryImage'])
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->where('is_active', true)
            ->limit(4)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $product,
            'related' => $related,
        ]);
    }

    /**
     * POST /api/products/{id}/view
     * Increment view count
     */
    public function incrementView(int $id): JsonResponse
    {
        $product = Product::findOrFail($id);
        $product->increment('view_count');

        return response()->json([
            'success' => true,
            'view_count' => $product->view_count,
        ]);
    }
}
