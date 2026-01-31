import { getPageBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// Static pages mapping
const pageMapping: Record<string, string> = {
    'huong-dan-mua-hang': 'huong-dan-mua-hang',
    'chinh-sach-doi-tra': 'chinh-sach-doi-tra',
    'chinh-sach-van-chuyen': 'chinh-sach-van-chuyen',
    'phuong-thuc-thanh-toan': 'phuong-thuc-thanh-toan',
    'chinh-sach-bao-mat': 'chinh-sach-bao-mat',
    'dieu-khoan-su-dung': 'dieu-khoan-su-dung',
};

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const res = await getPageBySlug(params.slug);
        const page = res.data;
        return {
            title: page.meta_title || page.title,
            description: page.meta_description || '',
        };
    } catch {
        return { title: 'Trang không tồn tại' };
    }
}

export default async function StaticPage({ params }: PageProps) {
    // Check if valid page
    if (!pageMapping[params.slug]) {
        notFound();
    }

    let page;
    try {
        const res = await getPageBySlug(params.slug);
        page = res.data;
    } catch {
        // Fallback content for demo
        page = {
            title: getFallbackTitle(params.slug),
            content: getFallbackContent(params.slug),
        };
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">{page.title}</h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-amber-600">Trang chủ</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-800 font-medium">{page.title}</span>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm">
                    <div
                        className="prose prose-amber prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                </div>
            </div>
        </div>
    );
}

function getFallbackTitle(slug: string): string {
    const titles: Record<string, string> = {
        'huong-dan-mua-hang': 'Hướng dẫn mua hàng',
        'chinh-sach-doi-tra': 'Chính sách đổi trả',
        'chinh-sach-van-chuyen': 'Chính sách vận chuyển',
        'phuong-thuc-thanh-toan': 'Phương thức thanh toán',
        'chinh-sach-bao-mat': 'Chính sách bảo mật',
        'dieu-khoan-su-dung': 'Điều khoản sử dụng',
    };
    return titles[slug] || 'Trang thông tin';
}

function getFallbackContent(slug: string): string {
    const contents: Record<string, string> = {
        'huong-dan-mua-hang': `
      <h2>Cách đặt hàng tại Yến Sào Hòn Nội</h2>
      <p>Bạn có thể đặt hàng theo các cách sau:</p>
      <h3>1. Đặt hàng trực tuyến</h3>
      <ul>
        <li>Chọn sản phẩm và thêm vào giỏ hàng</li>
        <li>Tiến hành thanh toán</li>
        <li>Điền thông tin giao hàng</li>
        <li>Chọn phương thức thanh toán</li>
        <li>Xác nhận đơn hàng</li>
      </ul>
      <h3>2. Đặt hàng qua điện thoại</h3>
      <p>Gọi Hotline: <strong>0909.123.456</strong> (8:00 - 21:00)</p>
      <h3>3. Đặt hàng qua Zalo</h3>
      <p>Chat trực tiếp với chúng tôi qua Zalo: 0909.123.456</p>
    `,
        'chinh-sach-doi-tra': `
      <h2>Chính sách đổi trả hàng</h2>
      <h3>1. Điều kiện đổi trả</h3>
      <ul>
        <li>Sản phẩm còn nguyên tem, nhãn mác</li>
        <li>Trong vòng 7 ngày kể từ ngày nhận hàng</li>
        <li>Có hóa đơn mua hàng</li>
      </ul>
      <h3>2. Trường hợp được đổi/trả</h3>
      <ul>
        <li>Sản phẩm bị lỗi do nhà sản xuất</li>
        <li>Sản phẩm không đúng như đơn đặt hàng</li>
        <li>Sản phẩm hết hạn sử dụng</li>
      </ul>
      <h3>3. Quy trình đổi trả</h3>
      <p>Liên hệ hotline 0909.123.456 để được hướng dẫn cụ thể</p>
    `,
        'chinh-sach-van-chuyen': `
      <h2>Chính sách vận chuyển</h2>
      <h3>1. Phí vận chuyển</h3>
      <ul>
        <li><strong>Miễn phí</strong> cho đơn hàng từ 500.000đ</li>
        <li>Đơn dưới 500.000đ: phí 30.000đ</li>
      </ul>
      <h3>2. Thời gian giao hàng</h3>
      <ul>
        <li>Nội thành HCM, Hà Nội: 1-2 ngày</li>
        <li>Các tỉnh khác: 2-4 ngày</li>
        <li>Vùng sâu vùng xa: 4-7 ngày</li>
      </ul>
      <h3>3. Đơn vị vận chuyển</h3>
      <p>Chúng tôi hợp tác với các đơn vị: GHTK, GHN, Viettel Post</p>
    `,
        'phuong-thuc-thanh-toan': `
      <h2>Phương thức thanh toán</h2>
      <h3>1. Thanh toán khi nhận hàng (COD)</h3>
      <p>Thanh toán tiền mặt trực tiếp cho nhân viên giao hàng</p>
      <h3>2. Chuyển khoản ngân hàng</h3>
      <p>Thông tin tài khoản:</p>
      <ul>
        <li>Ngân hàng: Vietcombank</li>
        <li>Số TK: 1234567890</li>
        <li>Chủ TK: CÔNG TY TNHH YẾN SÀO HÒN NỘI</li>
      </ul>
      <h3>3. Ví điện tử</h3>
      <p>Hỗ trợ: MoMo, ZaloPay, VNPay</p>
    `,
    };
    return contents[slug] || '<p>Nội dung đang được cập nhật...</p>';
}

export function generateStaticParams() {
    return Object.keys(pageMapping).map((slug) => ({ slug }));
}
