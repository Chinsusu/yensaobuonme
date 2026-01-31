<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'sku' => $this->sku,
            'short_description' => $this->short_description,
            'description' => $this->when($request->routeIs('api.products.show'), $this->description),
            'price' => $this->price,
            'compare_at_price' => $this->compare_at_price,
            'discount_percentage' => $this->discount_percentage,
            'is_on_sale' => $this->isOnSale(),
            'stock_quantity' => $this->stock_quantity,
            'in_stock' => $this->stock_quantity > 0,
            'is_low_stock' => $this->isLowStock(),
            'weight' => $this->weight,
            'origin' => $this->origin,
            'is_featured' => $this->is_featured,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'primary_image' => $this->whenLoaded('primaryImage', fn() => $this->primaryImage?->url),
            'images' => $this->whenLoaded('images', fn() => $this->images->map(fn($img) => [
                'id' => $img->id,
                'url' => $img->url,
                'alt' => $img->alt_text,
            ])),
            'meta' => [
                'title' => $this->meta_title ?? $this->name,
                'description' => $this->meta_description ?? $this->short_description,
                'keywords' => $this->meta_keywords,
            ],
            'view_count' => $this->view_count,
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
