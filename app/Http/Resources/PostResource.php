<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'content' => $this->when($request->routeIs('api.posts.show'), $this->content),
            'featured_image' => $this->featured_image_url,
            'author' => $this->whenLoaded('author', fn() => [
                'id' => $this->author->id,
                'name' => $this->author->name,
            ]),
            'categories' => $this->whenLoaded('categories', fn() => $this->categories->map(fn($cat) => [
                'id' => $cat->id,
                'name' => $cat->name,
                'slug' => $cat->slug,
            ])),
            'tags' => $this->whenLoaded('tags', fn() => $this->tags->map(fn($tag) => [
                'id' => $tag->id,
                'name' => $tag->name,
                'slug' => $tag->slug,
            ])),
            'meta' => [
                'title' => $this->meta_title ?? $this->title,
                'description' => $this->meta_description ?? $this->excerpt,
                'keywords' => $this->meta_keywords,
            ],
            'view_count' => $this->view_count,
            'published_at' => $this->published_at?->toISOString(),
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
