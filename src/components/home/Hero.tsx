import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { PlaceholderIcon } from '@/components/icons';

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden"
            style={{ minHeight: '600px' }}
            aria-label="Giới thiệu Yến Sào Ban Mê"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-pattern"
                style={{ backgroundColor: '#FFFFF8' }}
            />

            <div className="container mx-auto py-16 md:py-20 relative">
                {/* 12-column grid: 6 cols text + 6 cols image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left side: Content - 6 columns */}
                    <div className="lg:col-span-6 order-2 lg:order-1 text-center lg:text-left space-y-6">
                        {/* H1 Title */}
                        <h1
                            className="font-heading font-bold leading-tight"
                            style={{ color: '#8B4513' }}
                        >
                            Yến Sào Ban Mê
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="text-xl md:text-2xl font-medium"
                            style={{ color: '#333333' }}
                        >
                            Tổ Yến Nguyên Chất 100% Tự Nhiên
                        </p>

                        {/* Benefits list */}
                        <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                            {[
                                '20 năm uy tín trong ngành',
                                'Quy trình thủ công 100%',
                                'Cam kết không hóa chất, không tẩy trắng',
                            ].map((benefit, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                    style={{ color: '#333333' }}
                                >
                                    <CheckCircleIcon
                                        className="w-6 h-6 flex-shrink-0"
                                        style={{ color: '#22C55E' }}
                                        aria-hidden="true"
                                    />
                                    <span className="text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link
                                href="/san-pham"
                                className="btn-primary text-lg px-8 py-4"
                            >
                                Xem sản phẩm
                            </Link>
                            <a
                                href="tel:0355246245"
                                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
                            >
                                <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                                Hotline: 0355.246.245
                            </a>
                        </div>
                    </div>

                    {/* Right side: Image - 6 columns */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <div
                            className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-lg overflow-hidden"
                            style={{ backgroundColor: '#F5F5DC' }}
                        >
                            {/* Placeholder for hero image */}
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center p-8">
                                    <PlaceholderIcon className="w-24 h-24 mx-auto mb-4 text-text-muted opacity-30" />
                                    <p className="text-sm text-text-muted">
                                        Hình ảnh tổ yến nguyên chất
                                    </p>
                                </div>
                            </div>

                            {/* When you add real image, use this: */}
                            {/* 
                            <Image
                                src="/images/hero-bird-nest.webp"
                                alt="Tổ yến nguyên chất Yến Sào Ban Mê tại Buôn Ma Thuột"
                                fill
                                className="object-cover rounded-lg"
                                priority  // CRITICAL: Eager load for LCP optimization
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
