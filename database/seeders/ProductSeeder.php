<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $toYenNguyenChat = Category::where('slug', 'to-yen-nguyen-chat')->first();
        $yenChungDuongPhen = Category::where('slug', 'yen-chung-duong-phen')->first();

        if ($toYenNguyenChat) {
            Product::create([
                'category_id' => $toYenNguyenChat->id,
                'name' => 'Tổ yến sào cao cấp 100g',
                'slug' => 'to-yen-sao-cao-cap-100g',
                'sku' => 'TY-100G-01',
                'short_description' => 'Tổ yến sào nguyên chất 100% từ Khánh Hòa',
                'description' => '<p>Tổ yến sào cao cấp được thu hoạch từ các đảo tự nhiên tại Khánh Hòa. Sản phẩm giữ nguyên 100% độ tinh khiết, không chất bảo quản.</p>',
                'price' => 5500000,
                'compare_at_price' => 6000000,
                'stock_quantity' => 50,
                'weight' => 100,
                'origin' => 'Khánh Hòa, Việt Nam',
                'is_active' => true,
                'is_featured' => true,
            ]);

            Product::create([
                'category_id' => $toYenNguyenChat->id,
                'name' => 'Tổ yến sào cao cấp 50g',
                'slug' => 'to-yen-sao-cao-cap-50g',
                'sku' => 'TY-50G-01',
                'short_description' => 'Tổ yến sào nguyên chất 50g - size vừa phải',
                'description' => '<p>Tổ yến sào cao cấp 50g phù hợp cho người mới bắt đầu sử dụng.</p>',
                'price' => 2800000,
                'compare_at_price' => 3000000,
                'stock_quantity' => 80,
                'weight' => 50,
                'origin' => 'Khánh Hòa, Việt Nam',
                'is_active' => true,
                'is_featured' => true,
            ]);
        }

        if ($yenChungDuongPhen) {
            Product::create([
                'category_id' => $yenChungDuongPhen->id,
                'name' => 'Yến chưng đường phèn 70ml',
                'slug' => 'yen-chung-duong-phen-70ml',
                'sku' => 'YC-DP-70',
                'short_description' => 'Yến chưng sẵn với đường phèn tự nhiên',
                'description' => '<p>Yến chưng sẵn tiện lợi, chỉ cần mở nắp là dùng được ngay. Bảo quản lạnh.</p>',
                'price' => 85000,
                'compare_at_price' => 95000,
                'stock_quantity' => 200,
                'weight' => 70,
                'origin' => 'Việt Nam',
                'is_active' => true,
                'is_featured' => true,
            ]);

            Product::create([
                'category_id' => $yenChungDuongPhen->id,
                'name' => 'Yến chưng đường phèn lốc 6 chai',
                'slug' => 'yen-chung-duong-phen-loc-6',
                'sku' => 'YC-DP-6LOC',
                'short_description' => 'Combo 6 chai yến chưng đường phèn tiết kiệm',
                'description' => '<p>Combo 6 chai yến chưng đường phèn 70ml. Tiết kiệm 15% so với mua lẻ.</p>',
                'price' => 450000,
                'compare_at_price' => 510000,
                'stock_quantity' => 100,
                'weight' => 420,
                'origin' => 'Việt Nam',
                'is_active' => true,
            ]);
        }
    }
}
