<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    /**
     * GET /api/categories
     * List all active categories with children
     */
    public function index(): JsonResponse
    {
        $categories = Category::with(['children' => function ($query) {
                $query->where('is_active', true)->orderBy('sort_order');
            }])
            ->whereNull('parent_id')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $categories,
        ]);
    }

    /**
     * GET /api/categories/{slug}
     * Get category detail with products
     */
    public function show(string $slug): JsonResponse
    {
        $category = Category::with(['children', 'products' => function ($query) {
                $query->where('is_active', true)
                    ->orderBy('created_at', 'desc')
                    ->limit(20);
            }])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $category,
        ]);
    }
}
