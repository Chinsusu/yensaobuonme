<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'sku',
        'short_description',
        'description',
        'price',
        'compare_at_price',
        'cost_price',
        'stock_quantity',
        'low_stock_threshold',
        'track_inventory',
        'weight',
        'origin',
        'is_active',
        'is_featured',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'view_count',
        'order_count',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'compare_at_price' => 'decimal:2',
        'cost_price' => 'decimal:2',
        'weight' => 'decimal:2',
        'stock_quantity' => 'integer',
        'low_stock_threshold' => 'integer',
        'track_inventory' => 'boolean',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
        'view_count' => 'integer',
        'order_count' => 'integer',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($product) {
            if (empty($product->slug)) {
                $product->slug = Str::slug($product->name);
            }
        });
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class)->orderBy('sort_order');
    }

    public function primaryImage()
    {
        return $this->hasOne(ProductImage::class)->where('is_primary', true);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeInStock($query)
    {
        return $query->where('stock_quantity', '>', 0);
    }

    public function isLowStock(): bool
    {
        return $this->track_inventory && $this->stock_quantity <= $this->low_stock_threshold;
    }

    public function isOnSale(): bool
    {
        return $this->compare_at_price && $this->compare_at_price > $this->price;
    }

    public function getDiscountPercentageAttribute(): ?int
    {
        if (!$this->isOnSale()) {
            return null;
        }
        return (int) round((($this->compare_at_price - $this->price) / $this->compare_at_price) * 100);
    }
}
