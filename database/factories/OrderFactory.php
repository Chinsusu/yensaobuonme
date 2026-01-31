<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition(): array
    {
        $subtotal = $this->faker->numberBetween(200000, 5000000);
        $shippingFee = $subtotal >= 500000 ? 0 : 30000;
        
        return [
            'order_number' => 'YS' . now()->format('Ymd') . '-' . $this->faker->unique()->numberBetween(1, 9999),
            'customer_name' => $this->faker->name(),
            'customer_email' => $this->faker->email(),
            'customer_phone' => '0' . $this->faker->numberBetween(900000000, 999999999),
            'shipping_address' => $this->faker->streetAddress(),
            'shipping_ward' => 'Phường ' . $this->faker->numberBetween(1, 15),
            'shipping_district' => 'Quận ' . $this->faker->numberBetween(1, 12),
            'shipping_city' => $this->faker->randomElement(['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng']),
            'subtotal' => $subtotal,
            'shipping_fee' => $shippingFee,
            'tax' => 0,
            'discount' => 0,
            'total' => $subtotal + $shippingFee,
            'status' => $this->faker->randomElement(['pending', 'confirmed', 'processing', 'shipping', 'delivered']),
            'payment_status' => $this->faker->randomElement(['unpaid', 'paid']),
            'payment_method' => $this->faker->randomElement(['cod', 'bank_transfer']),
            'notes' => $this->faker->optional()->sentence(),
        ];
    }

    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'pending',
            'payment_status' => 'unpaid',
        ]);
    }

    public function delivered(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'delivered',
            'payment_status' => 'paid',
            'delivered_at' => now(),
        ]);
    }
}
