<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->restrictOnDelete();
            
            // Basic info
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('sku', 100)->nullable()->unique();
            
            // Descriptions
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            
            // Pricing
            $table->decimal('price', 15, 2);
            $table->decimal('compare_at_price', 15, 2)->nullable();
            $table->decimal('cost_price', 15, 2)->nullable();
            
            // Inventory
            $table->integer('stock_quantity')->default(0);
            $table->integer('low_stock_threshold')->default(10);
            $table->boolean('track_inventory')->default(true);
            
            // Product attributes
            $table->decimal('weight', 10, 2)->nullable()->comment('Trọng lượng (gram)');
            $table->string('origin', 100)->nullable()->comment('Xuất xứ');
            
            // Status
            $table->boolean('is_active')->default(true);
            $table->boolean('is_featured')->default(false);
            
            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            
            // Stats
            $table->integer('view_count')->default(0);
            $table->integer('order_count')->default(0);
            
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('category_id');
            $table->index('is_active');
            $table->index('is_featured');
            $table->fullText(['name', 'short_description']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
