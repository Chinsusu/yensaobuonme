<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        // Parent categories
        $toYen = Category::create([
            'name' => 'Tổ yến sào',
            'slug' => 'to-yen-sao',
            'description' => 'Các loại tổ yến sào nguyên chất',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        $yenChung = Category::create([
            'name' => 'Yến chưng sẵn',
            'slug' => 'yen-chung-san',
            'description' => 'Yến sào đã chế biến sẵn',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        $yenTinhChe = Category::create([
            'name' => 'Yến tinh chế',
            'slug' => 'yen-tinh-che',
            'description' => 'Yến sào tinh chế cao cấp',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        // Child categories
        Category::create([
            'parent_id' => $toYen->id,
            'name' => 'Tổ yến nguyên chất',
            'slug' => 'to-yen-nguyen-chat',
            'description' => 'Tổ yến 100% nguyên chất',
            'sort_order' => 1,
        ]);

        Category::create([
            'parent_id' => $toYen->id,
            'name' => 'Tổ yến vụn',
            'slug' => 'to-yen-vun',
            'description' => 'Yến vụn giá tốt',
            'sort_order' => 2,
        ]);

        Category::create([
            'parent_id' => $yenChung->id,
            'name' => 'Yến chưng đường phèn',
            'slug' => 'yen-chung-duong-phen',
            'description' => 'Yến chưng với đường phèn',
            'sort_order' => 1,
        ]);

        Category::create([
            'parent_id' => $yenChung->id,
            'name' => 'Yến chưng collagen',
            'slug' => 'yen-chung-collagen',
            'description' => 'Yến chưng bổ sung collagen',
            'sort_order' => 2,
        ]);
    }
}
