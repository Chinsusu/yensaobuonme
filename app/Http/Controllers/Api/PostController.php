<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * GET /api/posts
     * List published posts with pagination
     */
    public function index(Request $request): JsonResponse
    {
        $query = Post::with(['author:id,name', 'categories'])
            ->where('status', 'published')
            ->where('published_at', '<=', now());

        // Filter by category
        if ($request->filled('category')) {
            $query->whereHas('categories', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        $perPage = min($request->get('per_page', 10), 30);
        $posts = $query->orderBy('published_at', 'desc')
            ->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => $posts->items(),
            'meta' => [
                'current_page' => $posts->currentPage(),
                'last_page' => $posts->lastPage(),
                'per_page' => $posts->perPage(),
                'total' => $posts->total(),
            ],
        ]);
    }

    /**
     * GET /api/posts/{slug}
     * Get post detail
     */
    public function show(string $slug): JsonResponse
    {
        $post = Post::with(['author:id,name', 'categories', 'tags'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->where('published_at', '<=', now())
            ->firstOrFail();

        // Increment view
        $post->increment('view_count');

        // Get related posts
        $categoryIds = $post->categories->pluck('id');
        $related = Post::with(['author:id,name'])
            ->whereHas('categories', function ($q) use ($categoryIds) {
                $q->whereIn('post_categories.id', $categoryIds);
            })
            ->where('id', '!=', $post->id)
            ->where('status', 'published')
            ->where('published_at', '<=', now())
            ->limit(3)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $post,
            'related' => $related,
        ]);
    }

    /**
     * GET /api/post-categories
     * List post categories
     */
    public function categories(): JsonResponse
    {
        $categories = PostCategory::withCount(['posts' => function ($q) {
                $q->where('status', 'published')
                  ->where('published_at', '<=', now());
            }])
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $categories,
        ]);
    }
}
