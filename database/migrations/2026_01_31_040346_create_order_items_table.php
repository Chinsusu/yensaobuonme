<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();
            
            // Snapshot of product at time of order
            $table->string('product_name');
            $table->string('product_sku', 100)->nullable();
            $table->string('variant_name')->nullable();
            
            $table->integer('quantity')->default(1);
            $table->decimal('price', 15, 2)->comment('Unit price at time of purchase');
            $table->decimal('subtotal', 15, 2)->comment('quantity × price');
            
            $table->timestamps();
            
            $table->index('order_id');
            $table->index('product_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
