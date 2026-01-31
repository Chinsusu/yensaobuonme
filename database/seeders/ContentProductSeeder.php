<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ContentProductSeeder extends Seeder
{
    public function run(): void
    {
        // Get categories
        $toYenNguyenChat = Category::where('slug', 'to-yen-nguyen-chat')->first();
        $yenChungDuongPhen = Category::where('slug', 'yen-chung-duong-phen')->first();
        $yenTho = Category::firstOrCreate(
            ['slug' => 'yen-tho'],
            ['name' => 'Yến thô', 'description' => 'Yến sào thô chưa qua sơ chế', 'is_active' => true]
        );
        $quatang = Category::firstOrCreate(
            ['slug' => 'qua-tang'],
            ['name' => 'Quà tặng', 'description' => 'Hộp quà yến sào cao cấp', 'is_active' => true]
        );

        // Tổ Yến Nguyên Chất Products
        $products = [
            [
                'category' => $toYenNguyenChat,
                'name' => 'Tổ Yến Sào Tinh Chế Cao Cấp 100g',
                'slug' => 'to-yen-sao-tinh-che-cao-cap-100g',
                'sku' => 'TY-TC-100',
                'short_description' => 'Tổ yến sào tinh chế 100% nguyên chất, đã làm sạch lông và tạp chất, sẵn sàng chế biến.',
                'description' => $this->getProductDescription('tinh-che'),
                'price' => 5800000,
                'compare_at_price' => 6500000,
                'stock_quantity' => 30,
                'weight' => 100,
                'origin' => 'Đắk Lắk, Việt Nam',
                'is_featured' => true,
            ],
            [
                'category' => $toYenNguyenChat,
                'name' => 'Tổ Yến Sào Tinh Chế 50g',
                'slug' => 'to-yen-sao-tinh-che-50g',
                'sku' => 'TY-TC-50',
                'short_description' => 'Tổ yến tinh chế 50g - phù hợp sử dụng cá nhân trong 2-3 tuần.',
                'description' => $this->getProductDescription('tinh-che-50'),
                'price' => 2950000,
                'compare_at_price' => 3300000,
                'stock_quantity' => 50,
                'weight' => 50,
                'origin' => 'Đắk Lắk, Việt Nam',
                'is_featured' => true,
            ],
            [
                'category' => $yenTho,
                'name' => 'Yến Thô Nguyên Tổ Đặc Biệt 100g',
                'slug' => 'yen-tho-nguyen-to-dac-biet-100g',
                'sku' => 'YT-NT-100',
                'short_description' => 'Yến thô nguyên tổ chưa qua sơ chế, giữ nguyên hình dáng tự nhiên.',
                'description' => $this->getProductDescription('yen-tho'),
                'price' => 4200000,
                'compare_at_price' => 4800000,
                'stock_quantity' => 20,
                'weight' => 100,
                'origin' => 'Đắk Lắk, Việt Nam',
                'is_featured' => false,
            ],
            [
                'category' => $yenChungDuongPhen,
                'name' => 'Yến Chưng Đường Phèn 70ml - Hộp 6 Lọ',
                'slug' => 'yen-chung-duong-phen-70ml-hop-6-lo',
                'sku' => 'YC-DP-6L',
                'short_description' => 'Yến chưng sẵn với đường phèn tự nhiên, tiện lợi sử dụng hàng ngày.',
                'description' => $this->getProductDescription('yen-chung'),
                'price' => 450000,
                'compare_at_price' => 540000,
                'stock_quantity' => 100,
                'weight' => 420,
                'origin' => 'Việt Nam',
                'is_featured' => true,
            ],
            [
                'category' => $yenChungDuongPhen,
                'name' => 'Yến Chưng Đông Trùng Hạ Thảo 70ml - Hộp 6 Lọ',
                'slug' => 'yen-chung-dong-trung-ha-thao-70ml',
                'sku' => 'YC-DTHT-6L',
                'short_description' => 'Kết hợp yến sào và đông trùng hạ thảo, bổ dưỡng gấp đôi.',
                'description' => $this->getProductDescription('yen-dong-trung'),
                'price' => 580000,
                'compare_at_price' => 690000,
                'stock_quantity' => 80,
                'weight' => 420,
                'origin' => 'Việt Nam',
                'is_featured' => true,
            ],
            [
                'category' => $yenChungDuongPhen,
                'name' => 'Yến Chưng Nhân Sâm 70ml - Hộp 6 Lọ',
                'slug' => 'yen-chung-nhan-sam-70ml',
                'sku' => 'YC-NS-6L',
                'short_description' => 'Yến chưng kết hợp nhân sâm Hàn Quốc, tăng cường sức khỏe.',
                'description' => $this->getProductDescription('yen-nhan-sam'),
                'price' => 520000,
                'compare_at_price' => 620000,
                'stock_quantity' => 60,
                'weight' => 420,
                'origin' => 'Việt Nam',
                'is_featured' => false,
            ],
            [
                'category' => $quatang,
                'name' => 'Hộp Quà Yến Sào Cao Cấp - Premium Gift',
                'slug' => 'hop-qua-yen-sao-cao-cap-premium',
                'sku' => 'HQ-PREMIUM',
                'short_description' => 'Hộp quà cao cấp chứa 100g yến tinh chế + 6 lọ yến chưng, hoàn hảo làm quà biếu.',
                'description' => $this->getProductDescription('hop-qua'),
                'price' => 6500000,
                'compare_at_price' => 7800000,
                'stock_quantity' => 15,
                'weight' => 520,
                'origin' => 'Việt Nam',
                'is_featured' => true,
            ],
            [
                'category' => $quatang,
                'name' => 'Set Quà Tết Yến Sào - Phú Quý',
                'slug' => 'set-qua-tet-yen-sao-phu-quy',
                'sku' => 'HQ-TET-PQ',
                'short_description' => 'Set quà Tết sang trọng với yến sào và các sản phẩm bổ dưỡng.',
                'description' => $this->getProductDescription('qua-tet'),
                'price' => 8900000,
                'compare_at_price' => 10500000,
                'stock_quantity' => 10,
                'weight' => 800,
                'origin' => 'Việt Nam',
                'is_featured' => true,
            ],
        ];

        foreach ($products as $productData) {
            $category = $productData['category'];
            unset($productData['category']);

            if ($category) {
                $productData['category_id'] = $category->id;
                $productData['is_active'] = true;

                Product::updateOrCreate(
                    ['slug' => $productData['slug']],
                    $productData
                );
            }
        }

        $this->command->info('Created/Updated ' . count($products) . ' products with detailed descriptions.');
    }

    private function getProductDescription(string $type): string
    {
        $descriptions = [
            'tinh-che' => '
<h3>🏆 Tổ Yến Tinh Chế Cao Cấp - Chất Lượng Hàng Đầu</h3>

<p>Tổ yến sào tinh chế cao cấp từ <strong>Yến Sào Đắk Lắk</strong> được thu hoạch từ các nhà yến tự nhiên tại vùng cao nguyên Đắk Lắk, nơi có khí hậu trong lành và nguồn thức ăn phong phú cho chim yến.</p>

<h4>✨ Đặc điểm nổi bật:</h4>
<ul>
    <li><strong>100% nguyên chất:</strong> Không pha trộn, không chất bảo quản</li>
    <li><strong>Tinh chế kỹ lưỡng:</strong> Đã làm sạch lông và tạp chất bằng tay</li>
    <li><strong>Hàm lượng protein cao:</strong> 45-55% protein tự nhiên</li>
    <li><strong>Giàu axit amin:</strong> 18 loại axit amin thiết yếu</li>
</ul>

<h4>💪 Công dụng:</h4>
<ul>
    <li>Tăng cường hệ miễn dịch</li>
    <li>Đẹp da, chống lão hóa</li>
    <li>Bổ phổi, thanh nhiệt</li>
    <li>Tốt cho phụ nữ mang thai và cho con bú</li>
    <li>Hỗ trợ phục hồi sức khỏe sau ốm</li>
</ul>

<h4>📋 Hướng dẫn sử dụng:</h4>
<ol>
    <li>Ngâm yến trong nước ấm 30-45 phút</li>
    <li>Nhặt sạch lông li ti còn sót (nếu có)</li>
    <li>Chưng cách thủy 20-30 phút với đường phèn</li>
    <li>Dùng 3-5g/ngày để đạt hiệu quả tốt nhất</li>
</ol>

<h4>📦 Bảo quản:</h4>
<p>Bảo quản nơi khô ráo, thoáng mát. Sau khi mở hộp, nên đậy kín và sử dụng trong vòng 12 tháng.</p>
',
            'tinh-che-50' => '
<h3>🌟 Tổ Yến Tinh Chế 50g - Phù Hợp Sử Dụng Cá Nhân</h3>

<p>Sản phẩm <strong>50g yến tinh chế</strong> là lựa chọn hoàn hảo cho người mới bắt đầu hoặc muốn dùng thử trước khi mua số lượng lớn.</p>

<h4>✨ Ưu điểm:</h4>
<ul>
    <li>Dùng được 2-3 tuần với liều 3g/ngày</li>
    <li>Tiện lợi, dễ bảo quản</li>
    <li>Chất lượng tương đương sản phẩm 100g</li>
    <li>Giá thành phù hợp túi tiền</li>
</ul>

<h4>💪 Đối tượng phù hợp:</h4>
<ul>
    <li>Người mới sử dụng yến sào</li>
    <li>Người độc thân hoặc gia đình nhỏ</li>
    <li>Muốn trải nghiệm trước khi mua giá trị lớn</li>
</ul>
',
            'yen-tho' => '
<h3>🌿 Yến Thô Nguyên Tổ - Giữ Nguyên Vẹn Tự Nhiên</h3>

<p>Yến thô nguyên tổ là sản phẩm yến sào <strong>chưa qua sơ chế</strong>, giữ nguyên hình dáng và cấu trúc ban đầu của tổ yến.</p>

<h4>✨ Đặc điểm:</h4>
<ul>
    <li><strong>Nguyên bản 100%:</strong> Chưa qua bất kỳ công đoạn xử lý nào</li>
    <li><strong>Xác minh chất lượng:</strong> Dễ dàng kiểm tra độ nguyên chất</li>
    <li><strong>Bảo quản lâu hơn:</strong> Thời hạn sử dụng dài hơn yến tinh chế</li>
</ul>

<h4>⚠️ Lưu ý:</h4>
<p>Yến thô cần được làm sạch lông và tạp chất trước khi sử dụng. Quá trình này mất khoảng 1-2 giờ cho 10g yến.</p>

<h4>👥 Phù hợp với:</h4>
<ul>
    <li>Người có kinh nghiệm chế biến yến</li>
    <li>Muốn kiểm tra độ nguyên chất</li>
    <li>Tiết kiệm chi phí (tự sơ chế)</li>
</ul>
',
            'yen-chung' => '
<h3>🍯 Yến Chưng Đường Phèn - Tiện Lợi Mỗi Ngày</h3>

<p>Yến chưng sẵn với <strong>đường phèn tự nhiên</strong>, chỉ cần mở nắp là thưởng thức ngay - giải pháp hoàn hảo cho cuộc sống bận rộn.</p>

<h4>✨ Ưu điểm:</h4>
<ul>
    <li><strong>Tiện lợi tối đa:</strong> Không cần chế biến</li>
    <li><strong>Hương vị chuẩn:</strong> Được chưng bởi đầu bếp chuyên nghiệp</li>
    <li><strong>Định lượng chuẩn:</strong> Mỗi lọ 70ml = 1 lần dùng</li>
    <li><strong>Bảo quản dễ dàng:</strong> Để tủ lạnh dùng được 30 ngày</li>
</ul>

<h4>📋 Hướng dẫn sử dụng:</h4>
<ul>
    <li><strong>Dùng lạnh:</strong> Lấy ra khỏi tủ lạnh, mở nắp và thưởng thức</li>
    <li><strong>Dùng ấm:</strong> Ngâm lọ trong nước ấm 5 phút</li>
    <li><strong>Liều dùng:</strong> 1 lọ/ngày vào buổi sáng hoặc tối</li>
</ul>

<h4>📦 Thành phần:</h4>
<p>Yến sào tinh chế (10%), đường phèn, nước tinh khiết.</p>
',
            'yen-dong-trung' => '
<h3>🍄 Yến Chưng Đông Trùng Hạ Thảo - Bổ Dưỡng Gấp Đôi</h3>

<p>Sự kết hợp hoàn hảo giữa <strong>yến sào</strong> và <strong>đông trùng hạ thảo</strong> - hai siêu thực phẩm quý giá nhất của thiên nhiên.</p>

<h4>✨ Công dụng vượt trội:</h4>
<ul>
    <li><strong>Tăng cường sinh lực:</strong> Đông trùng hạ thảo nổi tiếng bổ thận tráng dương</li>
    <li><strong>Hệ miễn dịch:</strong> Yến sào + ĐTHT = miễn dịch khỏe mạnh</li>
    <li><strong>Chống mệt mỏi:</strong> Phục hồi năng lượng nhanh chóng</li>
    <li><strong>Làm đẹp da:</strong> Collagen từ yến + dưỡng chất từ ĐTHT</li>
</ul>

<h4>👥 Đối tượng phù hợp:</h4>
<ul>
    <li>Người làm việc căng thẳng, áp lực</li>
    <li>Người lớn tuổi cần bồi bổ</li>
    <li>Phụ nữ muốn đẹp da, chống lão hóa</li>
    <li>Người mới ốm dậy cần phục hồi</li>
</ul>
',
            'yen-nhan-sam' => '
<h3>🌿 Yến Chưng Nhân Sâm - Sức Khỏe Dẻo Dai</h3>

<p>Kết hợp <strong>yến sào cao cấp</strong> với <strong>nhân sâm Hàn Quốc</strong> - bí quyết sống khỏe từ phương Đông.</p>

<h4>✨ Lợi ích sức khỏe:</h4>
<ul>
    <li><strong>Bổ khí huyết:</strong> Nhân sâm giúp tăng cường tuần hoàn máu</li>
    <li><strong>Tăng trí nhớ:</strong> Ginsenoside trong nhân sâm tốt cho não bộ</li>
    <li><strong>Giảm stress:</strong> Cân bằng hormone, giảm căng thẳng</li>
    <li><strong>Tăng sức đề kháng:</strong> Kết hợp miễn dịch từ cả hai nguyên liệu</li>
</ul>
',
            'hop-qua' => '
<h3>🎁 Hộp Quà Yến Sào Premium - Quà Tặng Ý Nghĩa</h3>

<p>Hộp quà cao cấp từ <strong>Yến Sào Đắk Lắk</strong> - lựa chọn hoàn hảo để thể hiện sự quan tâm và trân trọng.</p>

<h4>📦 Bao gồm:</h4>
<ul>
    <li>100g Tổ yến tinh chế cao cấp</li>
    <li>6 lọ Yến chưng đường phèn 70ml</li>
    <li>Hộp gỗ cao cấp thiết kế sang trọng</li>
    <li>Túi giấy sang trọng</li>
    <li>Thiệp chúc mừng</li>
</ul>

<h4>🎯 Phù hợp làm quà:</h4>
<ul>
    <li>Biếu bố mẹ, ông bà</li>
    <li>Thăm người ốm</li>
    <li>Quà tặng đối tác, khách hàng VIP</li>
    <li>Quà cưới, tân gia</li>
</ul>

<h4>💝 Cam kết:</h4>
<p>Đóng gói cẩn thận, hộp quà đẹp, phù hợp làm quà biếu trang trọng.</p>
',
            'qua-tet' => '
<h3>🧧 Set Quà Tết Phú Quý - Đón Xuân Thịnh Vượng</h3>

<p>Set quà Tết sang trọng nhất từ <strong>Yến Sào Đắk Lắk</strong> - gửi trọn yêu thương đến người thân.</p>

<h4>📦 Bao gồm:</h4>
<ul>
    <li>150g Tổ yến tinh chế đặc biệt</li>
    <li>12 lọ Yến chưng cao cấp (mix 3 vị)</li>
    <li>Hộp gỗ sơn mài cao cấp</li>
    <li>Ribbon & thiệp chúc Tết</li>
    <li>Túi xách sang trọng</li>
</ul>

<h4>🎊 Ý nghĩa:</h4>
<p>Set quà "Phú Quý" mang ý nghĩa chúc người nhận một năm mới <strong>giàu có, sung túc, sức khỏe dồi dào</strong>.</p>

<h4>⏰ Lưu ý đặt hàng Tết:</h4>
<p>Số lượng có hạn, vui lòng đặt trước 2 tuần để đảm bảo có hàng.</p>
',
        ];

        return $descriptions[$type] ?? '<p>Mô tả sản phẩm đang được cập nhật.</p>';
    }
}
