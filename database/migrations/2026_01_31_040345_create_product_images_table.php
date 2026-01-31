<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            
            $table->string('file_path', 500);
            $table->string('file_name');
            $table->integer('file_size')->nullable()->comment('Bytes');
            $table->string('mime_type', 100)->nullable();
            
            $table->string('alt_text')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_primary')->default(false);
            
            $table->timestamps();
            
            $table->index('product_id');
            $table->index('is_primary');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_images');
    }
};
