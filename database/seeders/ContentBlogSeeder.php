<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Database\Seeder;

class ContentBlogSeeder extends Seeder
{
    public function run(): void
    {
        // Create categories if not exist
        $kienThuc = PostCategory::firstOrCreate(
            ['slug' => 'kien-thuc-yen-sao'],
            ['name' => 'Kiến thức yến sào', 'is_active' => true]
        );
        $huongDan = PostCategory::firstOrCreate(
            ['slug' => 'huong-dan-che-bien'],
            ['name' => 'Hướng dẫn chế biến', 'is_active' => true]
        );
        $sucKhoe = PostCategory::firstOrCreate(
            ['slug' => 'suc-khoe-dinh-duong'],
            ['name' => 'Sức khỏe & Dinh dưỡng', 'is_active' => true]
        );
        $tinTuc = PostCategory::firstOrCreate(
            ['slug' => 'tin-tuc'],
            ['name' => 'Tin tức', 'is_active' => true]
        );

        $posts = [
            // Kiến thức yến sào
            [
                'category' => $kienThuc,
                'title' => 'Yến Sào Là Gì? Tổng Quan Về Loại Thực Phẩm Quý Hiếm Này',
                'slug' => 'yen-sao-la-gi-tong-quan',
                'excerpt' => 'Tìm hiểu về yến sào - tổ của chim yến được làm từ nước bọt. Nguồn gốc, phân loại, và giá trị dinh dưỡng của yến sào.',
                'content' => $this->getPostContent('yen-sao-la-gi'),
            ],
            [
                'category' => $kienThuc,
                'title' => 'Cách Phân Biệt Yến Sào Thật Và Giả - Hướng Dẫn Chi Tiết',
                'slug' => 'cach-phan-biet-yen-sao-that-gia',
                'excerpt' => 'Học cách nhận biết yến sào thật và yến sào giả qua màu sắc, mùi vị, độ nở và các phương pháp kiểm tra đơn giản.',
                'content' => $this->getPostContent('phan-biet-yen-that-gia'),
            ],
            [
                'category' => $kienThuc,
                'title' => 'Phân Loại Yến Sào: Yến Đảo, Yến Nhà, Yến Huyết - Sự Khác Biệt',
                'slug' => 'phan-loai-yen-sao-yen-dao-yen-nha',
                'excerpt' => 'So sánh chi tiết các loại yến sào phổ biến: yến đảo, yến nhà, yến huyết. Ưu nhược điểm và cách chọn mua phù hợp.',
                'content' => $this->getPostContent('phan-loai-yen'),
            ],
            [
                'category' => $kienThuc,
                'title' => 'Thành Phần Dinh Dưỡng Trong Yến Sào - Phân Tích Khoa Học',
                'slug' => 'thanh-phan-dinh-duong-yen-sao',
                'excerpt' => 'Phân tích khoa học về protein, axit amin, khoáng chất và các dưỡng chất quý giá trong tổ yến.',
                'content' => $this->getPostContent('thanh-phan-dinh-duong'),
            ],

            // Hướng dẫn chế biến
            [
                'category' => $huongDan,
                'title' => 'Cách Chưng Yến Sào Đúng Cách - Giữ Nguyên Dưỡng Chất',
                'slug' => 'cach-chung-yen-sao-dung-cach',
                'excerpt' => 'Hướng dẫn chi tiết từ A-Z cách chưng yến sào: ngâm, làm sạch, chưng và các lưu ý quan trọng.',
                'content' => $this->getPostContent('cach-chung-yen'),
            ],
            [
                'category' => $huongDan,
                'title' => '10 Công Thức Chế Biến Yến Sào Thơm Ngon, Bổ Dưỡng',
                'slug' => '10-cong-thuc-che-bien-yen-sao',
                'excerpt' => 'Tổng hợp 10 món yến sào hấp dẫn: yến chưng đường phèn, yến hạnh nhân, yến táo đỏ, yến gừng...',
                'content' => $this->getPostContent('10-cong-thuc'),
            ],
            [
                'category' => $huongDan,
                'title' => 'Cách Làm Sạch Tổ Yến Thô - Hướng Dẫn Cho Người Mới',
                'slug' => 'cach-lam-sach-to-yen-tho',
                'excerpt' => 'Bí quyết làm sạch tổ yến thô nhanh chóng, loại bỏ lông và tạp chất mà không làm vỡ sợi yến.',
                'content' => $this->getPostContent('lam-sach-yen-tho'),
            ],
            [
                'category' => $huongDan,
                'title' => 'Cách Bảo Quản Yến Sào Đúng Cách - Tươi Ngon Cả Năm',
                'slug' => 'cach-bao-quan-yen-sao-dung-cach',
                'excerpt' => 'Hướng dẫn bảo quản yến khô và yến chưng sẵn đúng cách để giữ chất lượng lâu dài.',
                'content' => $this->getPostContent('bao-quan-yen'),
            ],

            // Sức khỏe & Dinh dưỡng
            [
                'category' => $sucKhoe,
                'title' => 'Công Dụng Của Yến Sào Đối Với Sức Khỏe - Nghiên Cứu Khoa Học',
                'slug' => 'cong-dung-yen-sao-doi-voi-suc-khoe',
                'excerpt' => 'Tổng hợp các nghiên cứu khoa học về tác dụng của yến sào: tăng miễn dịch, đẹp da, bổ phổi...',
                'content' => $this->getPostContent('cong-dung-yen-sao'),
            ],
            [
                'category' => $sucKhoe,
                'title' => 'Yến Sào Cho Bà Bầu - Lợi Ích Và Lưu Ý Khi Sử Dụng',
                'slug' => 'yen-sao-cho-ba-bau-loi-ich',
                'excerpt' => 'Hướng dẫn bà bầu sử dụng yến sào an toàn: liều lượng, thời điểm, và những lưu ý quan trọng.',
                'content' => $this->getPostContent('yen-sao-ba-bau'),
            ],
            [
                'category' => $sucKhoe,
                'title' => 'Yến Sào Cho Trẻ Em - Độ Tuổi Phù Hợp Và Cách Dùng',
                'slug' => 'yen-sao-cho-tre-em-do-tuoi-phu-hop',
                'excerpt' => 'Trẻ em bao nhiêu tuổi có thể ăn yến? Liều lượng và cách chế biến yến phù hợp cho bé.',
                'content' => $this->getPostContent('yen-sao-tre-em'),
            ],
            [
                'category' => $sucKhoe,
                'title' => 'Yến Sào Cho Người Cao Tuổi - Bồi Bổ Sức Khỏe Hiệu Quả',
                'slug' => 'yen-sao-cho-nguoi-cao-tuoi',
                'excerpt' => 'Lợi ích của yến sào cho người lớn tuổi và cách sử dụng phù hợp với hệ tiêu hóa.',
                'content' => $this->getPostContent('yen-sao-nguoi-gia'),
            ],

            // Tin tức
            [
                'category' => $tinTuc,
                'title' => 'Thị Trường Yến Sào Việt Nam 2024 - Xu Hướng Và Tiềm Năng',
                'slug' => 'thi-truong-yen-sao-viet-nam-2024',
                'excerpt' => 'Phân tích thị trường yến sào Việt Nam: quy mô, xu hướng tiêu dùng và tiềm năng xuất khẩu.',
                'content' => $this->getPostContent('thi-truong-yen'),
            ],
            [
                'category' => $tinTuc,
                'title' => 'Quy Trình Sản Xuất Yến Sào Tại Yến Sào Đắk Lắk',
                'slug' => 'quy-trinh-san-xuat-yen-sao-dak-lak',
                'excerpt' => 'Khám phá quy trình sản xuất yến sào chuẩn chất lượng tại nhà máy Yến Sào Đắk Lắk.',
                'content' => $this->getPostContent('quy-trinh-san-xuat'),
            ],
            [
                'category' => $tinTuc,
                'title' => 'Chương Trình Khuyến Mãi Tháng 2/2024 - Ưu Đãi Lớn',
                'slug' => 'chuong-trinh-khuyen-mai-thang-2-2024',
                'excerpt' => 'Cập nhật chương trình khuyến mãi mới nhất: giảm giá, quà tặng, freeship cho đơn hàng.',
                'content' => $this->getPostContent('khuyen-mai'),
            ],
        ];

        foreach ($posts as $postData) {
            $category = $postData['category'];
            unset($postData['category']);

            $postData['status'] = 'published'; $postData['author_id'] = 1; $postData['published_at'] = now();

            $post = Post::updateOrCreate(
                ['slug' => $postData['slug']],
                $postData
            );

            // Attach category
            $post->categories()->syncWithoutDetaching([$category->id]);
        }

        $this->command->info('Created/Updated ' . count($posts) . ' blog posts.');
    }

    private function getPostContent(string $type): string
    {
        $contents = [
            'yen-sao-la-gi' => '
<h2>Yến Sào Là Gì?</h2>
<p>Yến sào (hay tổ yến) là tổ của chim yến, được làm chủ yếu từ nước bọt của chim. Đây là một trong những thực phẩm bổ dưỡng quý hiếm nhất thế giới, được sử dụng trong y học cổ truyền Trung Hoa hàng nghìn năm.</p>

<h3>Nguồn Gốc</h3>
<p>Chim yến làm tổ chủ yếu ở các vách đá ven biển và các hang động tại Đông Nam Á. Tại Việt Nam, yến sào nổi tiếng nhất đến từ Khánh Hòa, Ninh Thuận, và gần đây là các tỉnh Tây Nguyên như Đắk Lắk.</p>

<h3>Phân Loại Theo Nguồn Gốc</h3>
<ul>
<li><strong>Yến đảo:</strong> Thu hoạch từ các đảo tự nhiên, chất lượng cao nhất</li>
<li><strong>Yến nhà:</strong> Từ các nhà nuôi yến nhân tạo, sản lượng ổn định</li>
<li><strong>Yến hang:</strong> Từ các hang động tự nhiên, hiếm và đắt</li>
</ul>

<h3>Giá Trị Dinh Dưỡng</h3>
<p>Yến sào chứa:</p>
<ul>
<li>45-55% Protein hòa tan</li>
<li>18 loại axit amin thiết yếu</li>
<li>Các khoáng chất: Canxi, Sắt, Kali</li>
<li>Glycoprotein và Sialic acid</li>
</ul>
',
            'phan-biet-yen-that-gia' => '
<h2>Cách Phân Biệt Yến Thật Và Yến Giả</h2>

<h3>1. Quan Sát Màu Sắc</h3>
<p><strong>Yến thật:</strong> Màu trắng ngà hoặc vàng nhạt tự nhiên, không đều màu hoàn toàn.</p>
<p><strong>Yến giả:</strong> Màu trắng đều, bóng bẩy không tự nhiên hoặc tẩy trắng.</p>

<h3>2. Kiểm Tra Mùi</h3>
<p><strong>Yến thật:</strong> Có mùi tanh nhẹ đặc trưng của protein, khi ngâm nước mùi tanh giảm đi.</p>
<p><strong>Yến giả:</strong> Không có mùi hoặc có mùi hóa chất lạ.</p>

<h3>3. Độ Nở</h3>
<p><strong>Yến thật:</strong> Nở 6-10 lần sau khi ngâm 30-45 phút.</p>
<p><strong>Yến giả:</strong> Nở ít, tan nhanh hoặc nở quá nhiều bất thường.</p>

<h3>4. Thử Đốt</h3>
<ul>
<li>Yến thật: Cháy có mùi protein (như đốt tóc)</li>
<li>Yến giả: Cháy có mùi nhựa hoặc hóa chất</li>
</ul>

<h3>5. Mua Từ Nguồn Uy Tín</h3>
<p>Cách an toàn nhất là mua từ các thương hiệu uy tín, có giấy chứng nhận xuất xứ và kiểm định chất lượng.</p>
',
            'cach-chung-yen' => '
<h2>Hướng Dẫn Chưng Yến Sào Đúng Cách</h2>

<h3>Bước 1: Ngâm Yến</h3>
<p>Ngâm yến trong nước sạch ở nhiệt độ phòng khoảng 30-45 phút cho đến khi yến nở mềm hoàn toàn.</p>

<h3>Bước 2: Làm Sạch</h3>
<p>Dùng nhíp nhặt sạch lông li ti và tạp chất. Rửa nhẹ nhàng dưới vòi nước.</p>

<h3>Bước 3: Chuẩn Bị Chưng</h3>
<ul>
<li>Cho yến vào thố nhỏ</li>
<li>Thêm nước vừa ngập yến</li>
<li>Thêm đường phèn hoặc đường phèn + táo đỏ tùy khẩu vị</li>
</ul>

<h3>Bước 4: Chưng Cách Thủy</h3>
<p>Đặt thố yến vào nồi nước, chưng cách thủy trong 20-30 phút ở lửa nhỏ. <strong>Không chưng quá lâu</strong> sẽ làm tan sợi yến.</p>

<h3>Lưu Ý Quan Trọng</h3>
<ul>
<li>Không dùng nước đá hoặc nước sôi để ngâm</li>
<li>Không chưng trực tiếp trên lửa</li>
<li>Dùng ngay sau khi chưng, không để qua đêm</li>
</ul>
',
            '10-cong-thuc' => '
<h2>10 Công Thức Chế Biến Yến Sào Ngon</h2>

<h3>1. Yến Chưng Đường Phèn (Cơ bản)</h3>
<p>Yến 5g + đường phèn 20g + nước 100ml. Chưng cách thủy 25 phút.</p>

<h3>2. Yến Táo Đỏ Kỷ Tử</h3>
<p>Thêm 3-5 quả táo đỏ và 10 hạt kỷ tử vào công thức cơ bản. Bổ máu, đẹp da.</p>

<h3>3. Yến Hạt Sen Bạch Quả</h3>
<p>Yến + hạt sen + bạch quả. An thần, ngủ ngon.</p>

<h3>4. Yến Sữa Tươi</h3>
<p>Yến chưng xong trộn với sữa tươi nguội. Thơm béo, bổ dưỡng.</p>

<h3>5. Yến Hạnh Nhân</h3>
<p>Yến + sữa hạnh nhân. Đẹp da, sáng mắt.</p>

<h3>6. Yến Gừng Mật Ong</h3>
<p>Yến + gừng tươi + mật ong. Giữ ấm cơ thể, tốt cho mùa đông.</p>

<h3>7. Yến Dừa Tươi</h3>
<p>Yến chưng trong vỏ dừa non. Thanh mát, giải nhiệt.</p>

<h3>8. Yến Nhân Sâm</h3>
<p>Yến + nhân sâm tươi. Tăng cường sinh lực.</p>

<h3>9. Yến Đông Trùng Hạ Thảo</h3>
<p>Yến + ĐTHT. Bổ thận, tăng đề kháng.</p>

<h3>10. Yến Đậu Xanh</h3>
<p>Yến + đậu xanh nấu nhuyễn. Thanh nhiệt, giải độc.</p>
',
            'cong-dung-yen-sao' => '
<h2>Công Dụng Của Yến Sào Theo Nghiên Cứu Khoa Học</h2>

<h3>1. Tăng Cường Hệ Miễn Dịch</h3>
<p>Glycoprotein trong yến sào kích thích sản xuất tế bào miễn dịch, giúp cơ thể chống lại bệnh tật.</p>

<h3>2. Làm Đẹp Da, Chống Lão Hóa</h3>
<p>Epidermal Growth Factor (EGF) trong yến sào thúc đẩy tái tạo tế bào da, giảm nếp nhăn.</p>

<h3>3. Bổ Phổi, Thanh Nhiệt</h3>
<p>Theo y học cổ truyền, yến sào có tính bình, vị ngọt, tác dụng bổ phổi, dưỡng âm.</p>

<h3>4. Hỗ Trợ Phục Hồi Sức Khỏe</h3>
<p>Protein dễ hấp thụ giúp người ốm dậy, người mới phẫu thuật phục hồi nhanh chóng.</p>

<h3>5. Tốt Cho Phát Triển Não Bộ</h3>
<p>Sialic acid (N-acetylneuraminic acid) trong yến sào hỗ trợ phát triển não bộ và trí nhớ.</p>

<h3>Nghiên Cứu Khoa Học</h3>
<p>Nhiều nghiên cứu từ các trường đại học tại Singapore, Hong Kong và Trung Quốc đã chứng minh các công dụng này.</p>
',
            'yen-sao-ba-bau' => '
<h2>Yến Sào Cho Bà Bầu - Hướng Dẫn An Toàn</h2>

<h3>Lợi Ích Cho Mẹ Bầu</h3>
<ul>
<li>Tăng sức đề kháng cho mẹ</li>
<li>Hỗ trợ phát triển não bộ thai nhi</li>
<li>Giúp da mẹ bầu đẹp hơn</li>
<li>Bổ sung protein chất lượng cao</li>
</ul>

<h3>Thời Điểm Sử Dụng</h3>
<p><strong>3 tháng đầu:</strong> Nên tham khảo ý kiến bác sĩ.</p>
<p><strong>3 tháng giữa:</strong> Giai đoạn vàng, an toàn để sử dụng.</p>
<p><strong>3 tháng cuối:</strong> Tiếp tục dùng nhưng giảm liều nếu lo ngại thai to.</p>

<h3>Liều Lượng Khuyến Nghị</h3>
<p>3-5g yến khô/lần, 2-3 lần/tuần. Không nên dùng quá nhiều.</p>

<h3>Lưu Ý</h3>
<ul>
<li>Chọn yến sạch, nguồn gốc rõ ràng</li>
<li>Không ăn yến chưng có rượu</li>
<li>Nếu có tiền sử dị ứng, thử một lượng nhỏ trước</li>
</ul>
',
            'yen-sao-tre-em' => '
<h2>Yến Sào Cho Trẻ Em</h2>

<h3>Độ Tuổi Phù Hợp</h3>
<ul>
<li><strong>Dưới 1 tuổi:</strong> Không nên dùng</li>
<li><strong>1-3 tuổi:</strong> Có thể bắt đầu với lượng rất nhỏ (1-2g/lần)</li>
<li><strong>Trên 3 tuổi:</strong> Có thể dùng liều 2-3g, 2-3 lần/tuần</li>
</ul>

<h3>Lợi Ích Cho Trẻ</h3>
<ul>
<li>Hỗ trợ phát triển chiều cao</li>
<li>Tăng cường hệ miễn dịch</li>
<li>Phát triển trí não</li>
<li>Cải thiện hệ tiêu hóa</li>
</ul>

<h3>Cách Chế Biến Cho Bé</h3>
<p>Chưng yến với đường phèn hoặc mật ong (cho trẻ trên 1 tuổi). Có thể trộn với cháo hoặc sữa.</p>
',
            'quy-trinh-san-xuat' => '
<h2>Quy Trình Sản Xuất Tại Yến Sào Đắk Lắk</h2>

<h3>1. Thu Hoạch</h3>
<p>Yến được thu hoạch từ các nhà yến đạt tiêu chuẩn an toàn thực phẩm tại Đắk Lắk.</p>

<h3>2. Phân Loại</h3>
<p>Tổ yến được phân loại theo hình dáng, màu sắc và chất lượng.</p>

<h3>3. Làm Sạch</h3>
<p>100% làm sạch thủ công bằng tay, không dùng hóa chất. Loại bỏ lông và tạp chất.</p>

<h3>4. Kiểm Định</h3>
<p>Mỗi lô hàng được kiểm định chất lượng trước khi đóng gói.</p>

<h3>5. Đóng Gói</h3>
<p>Đóng gói trong điều kiện vô trùng, hút chân không để bảo quản lâu dài.</p>

<h3>Chứng Nhận</h3>
<ul>
<li>ISO 22000 - An toàn thực phẩm</li>
<li>HACCP</li>
<li>Chứng nhận xuất xứ Việt Nam</li>
</ul>
',
            // Default content for other posts
            'phan-loai-yen' => '<h2>Phân Loại Yến Sào</h2><p>Nội dung chi tiết về các loại yến sào khác nhau...</p>',
            'thanh-phan-dinh-duong' => '<h2>Thành Phần Dinh Dưỡng</h2><p>Phân tích chi tiết thành phần dinh dưỡng trong yến...</p>',
            'lam-sach-yen-tho' => '<h2>Làm Sạch Yến Thô</h2><p>Hướng dẫn chi tiết cách làm sạch tổ yến thô...</p>',
            'bao-quan-yen' => '<h2>Bảo Quản Yến Sào</h2><p>Hướng dẫn bảo quản yến đúng cách...</p>',
            'yen-sao-nguoi-gia' => '<h2>Yến Sào Cho Người Cao Tuổi</h2><p>Lợi ích và cách sử dụng yến cho người lớn tuổi...</p>',
            'thi-truong-yen' => '<h2>Thị Trường Yến Sào</h2><p>Phân tích thị trường yến sào Việt Nam...</p>',
            'khuyen-mai' => '<h2>Chương Trình Khuyến Mãi</h2><p>Thông tin về các chương trình ưu đãi...</p>',
        ];

        return $contents[$type] ?? '<p>Nội dung đang được cập nhật.</p>';
    }
}
