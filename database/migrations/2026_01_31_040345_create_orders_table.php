<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number', 50)->unique();
            
            // Customer info
            $table->string('customer_name');
            $table->string('customer_email')->nullable();
            $table->string('customer_phone', 20);
            
            // Shipping address
            $table->text('shipping_address');
            $table->string('shipping_ward', 100)->nullable();
            $table->string('shipping_district', 100)->nullable();
            $table->string('shipping_city', 100);
            $table->string('shipping_postcode', 20)->nullable();
            
            // Billing address
            $table->text('billing_address')->nullable();
            $table->string('billing_ward', 100)->nullable();
            $table->string('billing_district', 100)->nullable();
            $table->string('billing_city', 100)->nullable();
            $table->string('billing_postcode', 20)->nullable();
            
            // Order totals
            $table->decimal('subtotal', 15, 2);
            $table->decimal('shipping_fee', 15, 2)->default(0);
            $table->decimal('tax', 15, 2)->default(0);
            $table->decimal('discount', 15, 2)->default(0);
            $table->decimal('total', 15, 2);
            
            // Status
            $table->enum('status', ['pending', 'confirmed', 'processing', 'shipping', 'delivered', 'cancelled', 'refunded'])->default('pending');
            $table->enum('payment_status', ['unpaid', 'paid', 'refunded'])->default('unpaid');
            $table->enum('payment_method', ['cod', 'bank_transfer', 'vnpay', 'momo'])->default('cod');
            
            // Notes
            $table->text('notes')->nullable()->comment('Ghi chú của khách hàng');
            $table->text('admin_notes')->nullable()->comment('Ghi chú nội bộ');
            
            // Tracking
            $table->string('tracking_number', 100)->nullable();
            $table->timestamp('shipped_at')->nullable();
            $table->timestamp('delivered_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            
            $table->timestamps();
            
            $table->index('status');
            $table->index('payment_status');
            $table->index('customer_phone');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
