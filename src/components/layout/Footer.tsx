import Link from 'next/link';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const footerLinks = {
    products: [
        { name: 'Tổ Yến Thô', href: '/san-pham?category=to-yen-tho' },
        { name: 'Yến Chưng Sẵn', href: '/san-pham?category=yen-chung-san' },
        { name: 'Set Quà Cao Cấp', href: '/san-pham?category=set-qua-tang' },
        { name: 'Yến Tinh Chế', href: '/san-pham?category=yen-tinh-che' },
    ],
    info: [
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Blog', href: '/tin-tuc' },
        { name: 'Liên hệ', href: '/lien-he' },
        { name: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' },
        { name: 'Chính sách vận chuyển', href: '/chinh-sach-van-chuyen' },
    ],
};

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#2D3436' }}>
            {/* Main footer - 12-column grid */}
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

                    {/* Column 1: About - 3 columns */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: '#8B4513' }}
                            >
                                <span className="text-white text-xl font-bold font-heading">Y</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold font-heading text-white">Yến Sào</h2>
                                <p className="text-xs" style={{ color: '#D4AF37' }}>Hòn Nội</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed" style={{ color: '#E5E5E5' }}>
                            Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ đảo Hòn Nội, Khánh Hòa.
                            Cam kết chất lượng, nguồn gốc rõ ràng. 20 năm kinh nghiệm.
                        </p>

                        {/* Social icons */}
                        <div className="flex space-x-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-normal cursor-pointer"
                                style={{ backgroundColor: '#3F3F46' }}
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                                </svg>
                            </a>
                            <a
                                href="https://zalo.me/0901234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-normal cursor-pointer"
                                style={{ backgroundColor: '#3F3F46' }}
                                aria-label="Zalo"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.5,15.18a1.48,1.48,0,0,1-1.5,1.32H8a1.48,1.48,0,0,1-1.5-1.32V8.82A1.48,1.48,0,0,1,8,7.5h8a1.48,1.48,0,0,1,1.5,1.32Z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-normal cursor-pointer"
                                style={{ backgroundColor: '#3F3F46' }}
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Products - 3 columns */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold mb-4">Sản phẩm</h3>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-normal cursor-pointer hover:text-white"
                                        style={{ color: '#E5E5E5' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Information - 3 columns */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold mb-4">Thông tin</h3>
                        <ul className="space-y-2">
                            {footerLinks.info.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-normal cursor-pointer hover:text-white"
                                        style={{ color: '#E5E5E5' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact - 3 columns */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
                        <ul className="space-y-3 text-sm" style={{ color: '#E5E5E5' }}>
                            <li className="flex items-start space-x-3">
                                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                                <span>123 Đường Trần Phú, TP. Nha Trang, Khánh Hòa</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <PhoneIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                                <a
                                    href="tel:0901234567"
                                    className="hover:text-white transition-colors duration-normal cursor-pointer"
                                >
                                    0901.234.567
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                                <a
                                    href="mailto:info@yensaohonnoi.vn"
                                    className="hover:text-white transition-colors duration-normal cursor-pointer"
                                >
                                    info@yensaohonnoi.vn
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <ClockIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                                <span>8:00 - 21:00 (Thứ 2 - CN)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid #3F3F46' }}>
                <div className="container mx-auto py-6">
                    <p className="text-center text-sm" style={{ color: '#999999' }}>
                        © 2026 Yến Sào Hòn Nội. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
