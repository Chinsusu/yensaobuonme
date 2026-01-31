<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Categories
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);

// Products
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/featured', [ProductController::class, 'featured']);
Route::get('/products/{slug}', [ProductController::class, 'show']);
Route::post('/products/{id}/view', [ProductController::class, 'incrementView']);

// Blog/Posts
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{slug}', [PostController::class, 'show']);
Route::get('/post-categories', [PostController::class, 'categories']);

// Content & Settings
Route::get('/pages/{slug}', [ContentController::class, 'page']);
Route::get('/settings', [ContentController::class, 'settings']);

// Cart (session-based)
Route::middleware('web')->group(function () {
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/cart/add', [CartController::class, 'add']);
    Route::put('/cart/{productId}', [CartController::class, 'update']);
    Route::delete('/cart/{productId}', [CartController::class, 'remove']);
    Route::delete('/cart', [CartController::class, 'clear']);
});

// Orders
Route::middleware('web')->group(function () {
    Route::post('/orders', [OrderController::class, 'store']);
});
Route::get('/orders/{orderNumber}', [OrderController::class, 'show']);
Route::post('/orders/track', [OrderController::class, 'track']);

// Health check
Route::get('/health', fn() => response()->json(['status' => 'ok', 'timestamp' => now()]));
