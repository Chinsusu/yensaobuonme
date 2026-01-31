<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class ContentController extends Controller
{
    /**
     * GET /api/pages/{slug}
     * Get static page content
     */
    public function page(string $slug): JsonResponse
    {
        $page = Page::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $page,
        ]);
    }

    /**
     * GET /api/settings
     * Get public settings
     */
    public function settings(): JsonResponse
    {
        $settings = Cache::remember('public_settings', 600, function () {
            return Setting::whereIn('group_name', ['general', 'contact', 'social'])
                ->get()
                ->pluck('value', 'key');
        });

        return response()->json([
            'success' => true,
            'data' => $settings,
        ]);
    }
}
