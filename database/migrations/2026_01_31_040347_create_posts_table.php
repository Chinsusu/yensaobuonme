<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('author_id')->constrained('users')->restrictOnDelete();
            
            $table->string('title', 500);
            $table->string('slug', 500)->unique();
            $table->text('excerpt')->nullable()->comment('Tóm tắt ngắn');
            $table->longText('content');
            
            $table->string('featured_image', 500)->nullable();
            
            $table->enum('status', ['draft', 'published', 'scheduled'])->default('draft');
            $table->timestamp('published_at')->nullable();
            
            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            
            // Stats
            $table->integer('view_count')->default(0);
            
            $table->timestamps();
            
            $table->index('status');
            $table->index('published_at');
            $table->fullText(['title', 'excerpt', 'content']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
