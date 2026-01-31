<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
    {
        $name = $this->faker->unique()->words(3, true);
        $price = $this->faker->numberBetween(100000, 5000000);
        
        return [
            'category_id' => Category::factory(),
            'name' => ucfirst($name),
            'slug' => Str::slug($name),
            'sku' => strtoupper($this->faker->unique()->bothify('YS-####-??')),
            'short_description' => $this->faker->sentence(),
            'description' => $this->faker->paragraphs(3, true),
            'price' => $price,
            'compare_at_price' => $this->faker->optional(0.5)->numberBetween($price, $price * 1.3),
            'cost_price' => $price * 0.6,
            'stock_quantity' => $this->faker->numberBetween(0, 100),
            'low_stock_threshold' => 10,
            'track_inventory' => true,
            'weight' => $this->faker->numberBetween(50, 500),
            'origin' => $this->faker->randomElement(['Khánh Hòa', 'Ninh Thuận', 'Bình Thuận']),
            'is_active' => true,
            'is_featured' => $this->faker->boolean(20),
            'meta_title' => ucfirst($name),
            'meta_description' => $this->faker->sentence(),
            'view_count' => $this->faker->numberBetween(0, 1000),
            'order_count' => $this->faker->numberBetween(0, 50),
        ];
    }

    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    public function outOfStock(): static
    {
        return $this->state(fn (array $attributes) => [
            'stock_quantity' => 0,
        ]);
    }
}
