<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class ContentPageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [
            [
                'title' => 'Giới Thiệu Yến Sào Đắk Lắk',
                'slug' => 'gioi-thieu',
                'content' => $this->getAboutContent(),
                'is_active' => true,
                'meta_title' => 'Giới Thiệu - Yến Sào Đắk Lắk | Yến Sào Tây Nguyên Cao Cấp',
                'meta_description' => 'Yến Sào Đắk Lắk - Thương hiệu yến sào uy tín từ vùng cao nguyên Tây Nguyên. Cam kết 100% yến sào nguyên chất, chất lượng hàng đầu.',
            ],
            [
                'title' => 'Chính Sách Bảo Mật',
                'slug' => 'chinh-sach-bao-mat',
                'content' => $this->getPrivacyContent(),
                'is_active' => true,
                'meta_title' => 'Chính Sách Bảo Mật - Yến Sào Đắk Lắk',
                'meta_description' => 'Chính sách bảo mật thông tin khách hàng tại Yến Sào Đắk Lắk. Cam kết bảo vệ dữ liệu cá nhân của bạn.',
            ],
            [
                'title' => 'Điều Khoản Sử Dụng',
                'slug' => 'dieu-khoan-su-dung',
                'content' => $this->getTermsContent(),
                'is_active' => true,
                'meta_title' => 'Điều Khoản Sử Dụng - Yến Sào Đắk Lắk',
                'meta_description' => 'Điều khoản và điều kiện sử dụng website Yến Sào Đắk Lắk. Vui lòng đọc kỹ trước khi mua hàng.',
            ],
            [
                'title' => 'Chính Sách Vận Chuyển',
                'slug' => 'chinh-sach-van-chuyen',
                'content' => $this->getShippingContent(),
                'is_active' => true,
                'meta_title' => 'Chính Sách Vận Chuyển - Yến Sào Đắk Lắk',
                'meta_description' => 'Thông tin về chính sách giao hàng, phí ship và thời gian giao hàng tại Yến Sào Đắk Lắk.',
            ],
            [
                'title' => 'Chính Sách Đổi Trả',
                'slug' => 'chinh-sach-doi-tra',
                'content' => $this->getReturnContent(),
                'is_active' => true,
                'meta_title' => 'Chính Sách Đổi Trả - Yến Sào Đắk Lắk',
                'meta_description' => 'Chính sách đổi trả, hoàn tiền khi mua hàng tại Yến Sào Đắk Lắk. Đảm bảo quyền lợi khách hàng.',
            ],
            [
                'title' => 'Phương Thức Thanh Toán',
                'slug' => 'phuong-thuc-thanh-toan',
                'content' => $this->getPaymentContent(),
                'is_active' => true,
                'meta_title' => 'Phương Thức Thanh Toán - Yến Sào Đắk Lắk',
                'meta_description' => 'Các phương thức thanh toán được hỗ trợ: COD, chuyển khoản, ví điện tử tại Yến Sào Đắk Lắk.',
            ],
            [
                'title' => 'Hướng Dẫn Mua Hàng',
                'slug' => 'huong-dan-mua-hang',
                'content' => $this->getGuideContent(),
                'is_active' => true,
                'meta_title' => 'Hướng Dẫn Mua Hàng - Yến Sào Đắk Lắk',
                'meta_description' => 'Hướng dẫn chi tiết cách đặt hàng online tại Yến Sào Đắk Lắk. Đơn giản, nhanh chóng, an toàn.',
            ],
        ];

        foreach ($pages as $pageData) {
            Page::updateOrCreate(
                ['slug' => $pageData['slug']],
                $pageData
            );
        }

        $this->command->info('Created/Updated ' . count($pages) . ' policy pages.');
    }

    private function getAboutContent(): string
    {
        return '
<div class="about-page">
    <h2>🏠 Về Yến Sào Đắk Lắk</h2>
    
    <p class="lead">Chào mừng bạn đến với <strong>Yến Sào Đắk Lắk</strong> - thương hiệu yến sào uy tín đến từ vùng cao nguyên Tây Nguyên.</p>

    <h3>📜 Câu Chuyện Của Chúng Tôi</h3>
    <p>
        Ra đời từ niềm đam mê với nghề nuôi yến truyền thống, Yến Sào Đắk Lắk được thành lập với sứ mệnh 
        mang đến những sản phẩm yến sào <strong>nguyên chất, chất lượng cao</strong> với giá thành hợp lý 
        cho người tiêu dùng Việt Nam.
    </p>

    <h3>🌟 Tại Sao Chọn Chúng Tôi?</h3>
    <ul>
        <li><strong>100% Yến Sào Nguyên Chất:</strong> Không pha trộn, không hóa chất</li>
        <li><strong>Nguồn Gốc Rõ Ràng:</strong> Thu hoạch từ các nhà yến đạt chuẩn tại Đắk Lắk</li>
        <li><strong>Giá Cả Minh Bạch:</strong> Giá cạnh tranh, không qua trung gian</li>
        <li><strong>Bảo Hành Chất Lượng:</strong> Cam kết hoàn tiền nếu phát hiện không đạt chất lượng</li>
        <li><strong>Giao Hàng Toàn Quốc:</strong> Freeship cho đơn hàng từ 1 triệu đồng</li>
    </ul>

    <h3>📍 Thông Tin Liên Hệ</h3>
    <ul>
        <li><strong>Địa chỉ:</strong> 123 Đường Nguyễn Văn Cừ, TP. Buôn Ma Thuột, Đắk Lắk</li>
        <li><strong>Hotline:</strong> 0909 123 456</li>
        <li><strong>Email:</strong> info@yensaodaklak.vn</li>
        <li><strong>Giờ làm việc:</strong> 8:00 - 20:00 (Thứ 2 - Chủ nhật)</li>
    </ul>

    <h3>📋 Giấy Phép Kinh Doanh</h3>
    <p>
        Giấy CNĐKKD số: 6001234567<br>
        Ngày cấp: 01/01/2024<br>
        Nơi cấp: Sở KH&ĐT tỉnh Đắk Lắk
    </p>
</div>
';
    }

    private function getPrivacyContent(): string
    {
        return '
<h2>Chính Sách Bảo Mật Thông Tin</h2>

<p><em>Cập nhật lần cuối: 31/01/2024</em></p>

<h3>1. Thu Thập Thông Tin</h3>
<p>Chúng tôi thu thập các thông tin sau khi bạn đặt hàng:</p>
<ul>
    <li>Họ tên</li>
    <li>Số điện thoại</li>
    <li>Địa chỉ giao hàng</li>
    <li>Email (nếu có)</li>
</ul>

<h3>2. Mục Đích Sử Dụng</h3>
<p>Thông tin của bạn được sử dụng để:</p>
<ul>
    <li>Xử lý và giao đơn hàng</li>
    <li>Liên hệ xác nhận đơn hàng</li>
    <li>Hỗ trợ khách hàng</li>
    <li>Gửi thông tin khuyến mãi (nếu bạn đồng ý)</li>
</ul>

<h3>3. Bảo Vệ Thông Tin</h3>
<p>
    Chúng tôi cam kết bảo mật thông tin của bạn. Dữ liệu được mã hóa và lưu trữ 
    an toàn trên hệ thống bảo mật cao.
</p>

<h3>4. Chia Sẻ Thông Tin</h3>
<p>
    Chúng tôi <strong>KHÔNG</strong> bán hoặc chia sẻ thông tin của bạn cho bên thứ ba, 
    ngoại trừ đơn vị vận chuyển để giao hàng.
</p>

<h3>5. Quyền Của Bạn</h3>
<p>Bạn có quyền:</p>
<ul>
    <li>Yêu cầu xem thông tin chúng tôi lưu trữ</li>
    <li>Yêu cầu chỉnh sửa thông tin</li>
    <li>Yêu cầu xóa thông tin (trừ thông tin cần lưu theo quy định)</li>
</ul>

<h3>6. Liên Hệ</h3>
<p>Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ: <strong>0909 123 456</strong></p>
';
    }

    private function getTermsContent(): string
    {
        return '
<h2>Điều Khoản Sử Dụng</h2>

<p><em>Cập nhật lần cuối: 31/01/2024</em></p>

<h3>1. Chấp Nhận Điều Khoản</h3>
<p>
    Khi sử dụng website yensaodaklak.vn, bạn đồng ý với các điều khoản và điều kiện sau đây.
</p>

<h3>2. Sản Phẩm Và Giá Cả</h3>
<ul>
    <li>Giá sản phẩm có thể thay đổi mà không cần báo trước</li>
    <li>Hình ảnh sản phẩm mang tính chất minh họa</li>
    <li>Chúng tôi nỗ lực cập nhật thông tin chính xác nhất</li>
</ul>

<h3>3. Đặt Hàng</h3>
<ul>
    <li>Đơn hàng được xác nhận khi chúng tôi liên hệ lại với bạn</li>
    <li>Chúng tôi có quyền từ chối đơn hàng nếu nghi ngờ gian lận</li>
    <li>Số lượng sản phẩm phụ thuộc vào tồn kho thực tế</li>
</ul>

<h3>4. Trách Nhiệm</h3>
<p>
    Yến Sào Đắk Lắk cam kết cung cấp sản phẩm chất lượng. Tuy nhiên, chúng tôi không chịu 
    trách nhiệm về những thiệt hại phát sinh từ việc sử dụng không đúng cách.
</p>

<h3>5. Sở Hữu Trí Tuệ</h3>
<p>
    Tất cả nội dung trên website thuộc quyền sở hữu của Yến Sào Đắk Lắk. 
    Không được sao chép, phân phối khi chưa có sự đồng ý.
</p>
';
    }

    private function getShippingContent(): string
    {
        return '
<h2>Chính Sách Vận Chuyển</h2>

<h3>📦 Phí Vận Chuyển</h3>
<table>
    <tr>
        <th>Giá Trị Đơn Hàng</th>
        <th>Phí Ship</th>
    </tr>
    <tr>
        <td>Dưới 500.000đ</td>
        <td>30.000đ</td>
    </tr>
    <tr>
        <td>500.000đ - 1.000.000đ</td>
        <td>20.000đ</td>
    </tr>
    <tr>
        <td>Trên 1.000.000đ</td>
        <td><strong>MIỄN PHÍ</strong></td>
    </tr>
</table>

<h3>⏰ Thời Gian Giao Hàng</h3>
<ul>
    <li><strong>TP.HCM, Hà Nội:</strong> 2-3 ngày làm việc</li>
    <li><strong>Các tỉnh thành khác:</strong> 3-5 ngày làm việc</li>
    <li><strong>Vùng sâu, vùng xa:</strong> 5-7 ngày làm việc</li>
</ul>

<h3>🚚 Đơn Vị Vận Chuyển</h3>
<p>Chúng tôi hợp tác với các đơn vị uy tín:</p>
<ul>
    <li>Giao Hàng Nhanh (GHN)</li>
    <li>Giao Hàng Tiết Kiệm (GHTK)</li>
    <li>J&T Express</li>
</ul>

<h3>📋 Lưu Ý</h3>
<ul>
    <li>Kiểm tra hàng trước khi thanh toán (COD)</li>
    <li>Từ chối nhận nếu hàng bị hư hỏng, không đúng mô tả</li>
    <li>Liên hệ hotline ngay khi có vấn đề: <strong>0909 123 456</strong></li>
</ul>
';
    }

    private function getReturnContent(): string
    {
        return '
<h2>Chính Sách Đổi Trả</h2>

<h3>✅ Điều Kiện Đổi Trả</h3>
<p>Chúng tôi chấp nhận đổi trả trong các trường hợp:</p>
<ul>
    <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển</li>
    <li>Sản phẩm không đúng với đơn đặt hàng</li>
    <li>Sản phẩm bị lỗi do nhà sản xuất</li>
</ul>

<h3>⏰ Thời Hạn</h3>
<ul>
    <li><strong>Đổi hàng:</strong> Trong vòng 7 ngày kể từ ngày nhận</li>
    <li><strong>Hoàn tiền:</strong> Trong vòng 3 ngày kể từ ngày nhận</li>
</ul>

<h3>📋 Yêu Cầu</h3>
<ul>
    <li>Sản phẩm còn nguyên seal, bao bì</li>
    <li>Có hóa đơn mua hàng hoặc mã đơn hàng</li>
    <li>Có hình ảnh/video chứng minh lỗi sản phẩm</li>
</ul>

<h3>💰 Hoàn Tiền</h3>
<p>
    Tiền sẽ được hoàn trong vòng 3-5 ngày làm việc sau khi nhận lại hàng 
    và kiểm tra sản phẩm.
</p>

<h3>❌ Không Chấp Nhận Đổi Trả</h3>
<ul>
    <li>Sản phẩm đã mở seal, qua sử dụng</li>
    <li>Quá thời hạn đổi trả</li>
    <li>Không có bằng chứng lỗi sản phẩm</li>
</ul>
';
    }

    private function getPaymentContent(): string
    {
        return '
<h2>Phương Thức Thanh Toán</h2>

<h3>💵 1. Thanh Toán Khi Nhận Hàng (COD)</h3>
<p>
    Trả tiền mặt trực tiếp cho shipper khi nhận hàng. 
    Bạn được kiểm tra hàng trước khi thanh toán.
</p>

<h3>🏦 2. Chuyển Khoản Ngân Hàng</h3>
<p><strong>Thông tin tài khoản:</strong></p>
<ul>
    <li>Ngân hàng: Vietcombank</li>
    <li>Số TK: 1234567890</li>
    <li>Chủ TK: CÔNG TY TNHH YẾN SÀO ĐẮK LẮK</li>
    <li>Nội dung: [Mã đơn hàng] - [Họ tên]</li>
</ul>

<h3>📱 3. Ví Điện Tử</h3>
<ul>
    <li><strong>MoMo:</strong> 0909 123 456</li>
    <li><strong>ZaloPay:</strong> 0909 123 456</li>
</ul>

<h3>💳 4. Thẻ ATM / Visa / Mastercard</h3>
<p>Thanh toán online qua cổng thanh toán VNPay (đang cập nhật).</p>

<h3>📋 Lưu Ý</h3>
<ul>
    <li>Đơn hàng sẽ được xử lý sau khi xác nhận thanh toán</li>
    <li>Với chuyển khoản, vui lòng ghi đúng nội dung để đơn được xử lý nhanh</li>
</ul>
';
    }

    private function getGuideContent(): string
    {
        return '
<h2>Hướng Dẫn Mua Hàng</h2>

<h3>📝 Bước 1: Chọn Sản Phẩm</h3>
<ul>
    <li>Duyệt danh mục hoặc tìm kiếm sản phẩm</li>
    <li>Xem thông tin chi tiết sản phẩm</li>
    <li>Chọn số lượng mong muốn</li>
</ul>

<h3>🛒 Bước 2: Thêm Vào Giỏ Hàng</h3>
<ul>
    <li>Nhấn nút "Thêm vào giỏ hàng"</li>
    <li>Kiểm tra giỏ hàng (góc phải trên)</li>
    <li>Điều chỉnh số lượng nếu cần</li>
</ul>

<h3>📋 Bước 3: Điền Thông Tin</h3>
<ul>
    <li>Nhấn "Thanh toán"</li>
    <li>Điền đầy đủ thông tin: Họ tên, SĐT, Địa chỉ</li>
    <li>Chọn phương thức thanh toán</li>
</ul>

<h3>✅ Bước 4: Xác Nhận Đơn Hàng</h3>
<ul>
    <li>Kiểm tra lại thông tin đơn hàng</li>
    <li>Nhấn "Đặt hàng"</li>
    <li>Chờ nhân viên liên hệ xác nhận (trong 2 giờ làm việc)</li>
</ul>

<h3>📦 Bước 5: Nhận Hàng</h3>
<ul>
    <li>Theo dõi đơn hàng qua mã vận đơn</li>
    <li>Kiểm tra hàng khi nhận</li>
    <li>Thanh toán (nếu COD) và nhận hóa đơn</li>
</ul>

<h3>📞 Cần Hỗ Trợ?</h3>
<p>
    Hotline: <strong>0909 123 456</strong> (8:00 - 20:00 hàng ngày)<br>
    Email: hotro@yensaodaklak.vn
</p>
';
    }
}
