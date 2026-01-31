import Link from 'next/link';

const footerLinks = {
    products: [
        { name: 'Tổ yến sào', href: '/san-pham?category=to-yen-sao' },
        { name: 'Yến chưng sẵn', href: '/san-pham?category=yen-chung-san' },
        { name: 'Yến tinh chế', href: '/san-pham?category=yen-tinh-che' },
        { name: 'Combo ưu đãi', href: '/san-pham?combo=true' },
    ],
    support: [
        { name: 'Hướng dẫn mua hàng', href: '/huong-dan-mua-hang' },
        { name: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' },
        { name: 'Chính sách vận chuyển', href: '/chinh-sach-van-chuyen' },
        { name: 'Phương thức thanh toán', href: '/phuong-thuc-thanh-toan' },
    ],
    about: [
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Tin tức', href: '/tin-tuc' },
        { name: 'Liên hệ', href: '/lien-he' },
        { name: 'Tuyển dụng', href: '/tuyen-dung' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-500">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-white text-center md:text-left">
                            <h3 className="text-xl font-bold">Đăng ký nhận tin khuyến mãi</h3>
                            <p className="text-amber-100">Nhận ngay voucher giảm 10% cho đơn hàng đầu tiên</p>
                        </div>
                        <form className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="px-4 py-3 rounded-l-lg w-full md:w-64 text-gray-800 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-r-lg hover:bg-gray-800 transition-colors"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">Y</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">Yến Sào Hòn Nội</h2>
                                <p className="text-sm text-amber-500">Tinh hoa từ thiên nhiên</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ đảo Hòn Nội, Khánh Hòa.
                            Cam kết chất lượng, nguồn gốc rõ ràng.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <span className="sr-only">Zalo</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.5,15.18a1.48,1.48,0,0,1-1.5,1.32H8a1.48,1.48,0,0,1-1.5-1.32V8.82A1.48,1.48,0,0,1,8,7.5h8a1.48,1.48,0,0,1,1.5,1.32Z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Sản phẩm</h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-amber-500 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Hỗ trợ</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-amber-500 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <span>📍</span>
                                <span>123 Đường Trần Phú, TP. Nha Trang, Khánh Hòa</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>📞</span>
                                <a href="tel:0909123456" className="hover:text-amber-500">0909.123.456</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>✉️</span>
                                <a href="mailto:info@yensaohonnoi.vn" className="hover:text-amber-500">info@yensaohonnoi.vn</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>🕐</span>
                                <span>8:00 - 21:00 (Thứ 2 - CN)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>© 2026 Yến Sào Hòn Nội. Bảo lưu mọi quyền.</p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <img src="/payment-visa.svg" alt="Visa" className="h-8" />
                        <img src="/payment-mastercard.svg" alt="Mastercard" className="h-8" />
                        <img src="/payment-momo.svg" alt="MoMo" className="h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
