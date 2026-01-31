<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_number',
        'customer_name',
        'customer_email',
        'customer_phone',
        'shipping_address',
        'shipping_ward',
        'shipping_district',
        'shipping_city',
        'shipping_postcode',
        'billing_address',
        'billing_ward',
        'billing_district',
        'billing_city',
        'billing_postcode',
        'subtotal',
        'shipping_fee',
        'tax',
        'discount',
        'total',
        'status',
        'payment_status',
        'payment_method',
        'notes',
        'admin_notes',
        'tracking_number',
        'shipped_at',
        'delivered_at',
        'cancelled_at',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'shipping_fee' => 'decimal:2',
        'tax' => 'decimal:2',
        'discount' => 'decimal:2',
        'total' => 'decimal:2',
        'shipped_at' => 'datetime',
        'delivered_at' => 'datetime',
        'cancelled_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($order) {
            if (empty($order->order_number)) {
                $order->order_number = static::generateOrderNumber();
            }
        });
    }

    public static function generateOrderNumber(): string
    {
        $date = now()->format('Ymd');
        $lastOrder = static::whereDate('created_at', today())->latest()->first();
        $sequence = $lastOrder ? ((int) Str::afterLast($lastOrder->order_number, '-') + 1) : 1;
        
        return sprintf('YS%s-%04d', $date, $sequence);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopePaid($query)
    {
        return $query->where('payment_status', 'paid');
    }

    public function getStatusLabelAttribute(): string
    {
        return match ($this->status) {
            'pending' => 'Chờ xác nhận',
            'confirmed' => 'Đã xác nhận',
            'processing' => 'Đang xử lý',
            'shipping' => 'Đang giao hàng',
            'delivered' => 'Đã giao hàng',
            'cancelled' => 'Đã hủy',
            'refunded' => 'Đã hoàn tiền',
            default => $this->status,
        };
    }

    public function getPaymentStatusLabelAttribute(): string
    {
        return match ($this->payment_status) {
            'unpaid' => 'Chưa thanh toán',
            'paid' => 'Đã thanh toán',
            'refunded' => 'Đã hoàn tiền',
            default => $this->payment_status,
        };
    }
}
