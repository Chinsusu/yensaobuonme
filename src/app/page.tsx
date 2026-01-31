import Link from 'next/link';
import { getCategories, getFeaturedProducts } from '@/lib/api';
import ProductCard from '@/components/products/ProductCard';
import TrustSignals from '@/components/home/TrustSignals';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import QualityProcess from '@/components/home/QualityProcess';
import BlogPreview from '@/components/home/BlogPreview';
import Testimonials from '@/components/home/Testimonials';

export default async function HomePage() {
  const [, featuredRes] = await Promise.all([
    getCategories().catch(() => ({ success: false, data: [] })),
    getFeaturedProducts().catch(() => ({ success: false, data: [] })),
  ]);

  const featuredProducts = featuredRes.data || [];

  // Define main categories with fallback
  const mainCategories = [
    {
      name: 'Tổ Yến Thô',
      slug: 'to-yen-tho',
      description: 'Tổ yến nguyên chất từ thiên nhiên',
      priceFrom: 'Từ 2.500.000đ',
      image: '/images/categories/to-yen-tho.jpg',
      icon: '🥚',
    },
    {
      name: 'Yến Chưng Sẵn',
      slug: 'yen-chung-san',
      description: 'Tiện lợi, bổ dưỡng mỗi ngày',
      priceFrom: 'Từ 48.000đ',
      image: '/images/categories/yen-chung.jpg',
      icon: '🍯',
    },
    {
      name: 'Set Quà Cao Cấp',
      slug: 'set-qua-tang',
      description: 'Ý nghĩa và sang trọng',
      priceFrom: 'Từ 300.000đ',
      image: '/images/categories/set-qua.jpg',
      icon: '🎁',
    },
  ];

  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="text-gradient">Yến Sào Hòn Nội</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700">
                  Tổ Yến Nguyên Chất 100% Tự Nhiên
                </span>
              </h1>

              <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                {[
                  { icon: '🏆', text: '20 năm uy tín trong ngành' },
                  { icon: '✋', text: 'Thủ công 100%, không máy móc' },
                  { icon: '🌿', text: 'Không hóa chất, không tẩy trắng' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="/san-pham" className="btn-primary text-lg px-8 py-4">
                  Xem sản phẩm
                </Link>
                <a
                  href="tel:0901234567"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                >
                  📞 Hotline: 0901.234.567
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Main image circle */}
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  {/* Placeholder - replace with actual image */}
                  <div className="text-center p-8">
                    <div className="text-9xl mb-4">🥚</div>
                    <p className="text-amber-700 font-semibold text-xl">
                      Premium Bird&apos;s Nest
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 -left-4 bg-white px-4 py-3 rounded-xl shadow-lg animate-bounce">
                  <span className="text-2xl">✨</span>
                  <p className="text-sm font-medium text-gray-800">100% Tự nhiên</p>
                </div>
                <div className="absolute bottom-8 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg animate-bounce delay-150">
                  <span className="text-2xl">🚚</span>
                  <p className="text-sm font-medium text-gray-800">Giao toàn quốc</p>
                </div>
                <div className="absolute top-1/2 -right-8 bg-amber-500 text-white px-4 py-3 rounded-xl shadow-lg">
                  <p className="text-sm font-bold">FREESHIP</p>
                  <p className="text-xs">Đơn từ 500k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Trust Signals */}
      <TrustSignals />

      {/* SECTION 3: Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Danh mục sản phẩm</h2>
          <p className="section-subtitle">
            Khám phá các dòng sản phẩm yến sào cao cấp của chúng tôi
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {mainCategories.map((category, index) => (
              <Link
                key={index}
                href={`/san-pham?category=${category.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-8xl group-hover:scale-110 transition-transform duration-500">
                      {category.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{category.description}</p>
                  <p className="font-semibold mt-3" style={{ color: '#8B4513' }}>
                    {category.priceFrom}
                  </p>
                  <span className="inline-flex items-center mt-4 text-sm font-medium text-amber-600 group-hover:text-amber-700">
                    Xem ngay
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  Sản phẩm bán chạy nhất
                </h2>
                <p className="text-gray-600 mt-2">
                  Những sản phẩm được yêu thích và đặt hàng nhiều nhất
                </p>
              </div>
              <Link
                href="/san-pham"
                className="hidden md:inline-flex items-center font-medium hover:underline"
                style={{ color: '#8B4513' }}
              >
                Xem tất cả
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
              {featuredProducts.slice(0, 8).map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[280px] md:w-auto snap-start"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link
                href="/san-pham"
                className="inline-flex items-center font-medium"
                style={{ color: '#8B4513' }}
              >
                Xem tất cả sản phẩm →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Why Choose Us */}
      <WhyChooseUs />

      {/* SECTION 6: Quality Process */}
      <QualityProcess />

      {/* SECTION 7: Blog Preview */}
      <BlogPreview />

      {/* SECTION 8: Testimonials */}
      <Testimonials />

      {/* SECTION 9: CTA Final */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#8B4513' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Bạn cần tư vấn sản phẩm phù hợp?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0901234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 Hotline: 0901.234.567
            </a>
            <a
              href="https://zalo.me/0901234567"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              💬 Chat Zalo
            </a>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              ✉️ Liên hệ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
