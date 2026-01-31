import Link from 'next/link';
import { getCategories, getFeaturedProducts } from '@/lib/api';
import ProductCard from '@/components/products/ProductCard';
import TrustSignals from '@/components/home/TrustSignals';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import QualityProcess from '@/components/home/QualityProcess';
import BlogPreview from '@/components/home/BlogPreview';
import Testimonials from '@/components/home/Testimonials';
import Hero from '@/components/home/Hero';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { PlaceholderIcon } from '@/components/icons';

export default async function HomePage() {
  const [, featuredRes] = await Promise.all([
    getCategories().catch(() => ({ success: false, data: [] })),
    getFeaturedProducts().catch(() => ({ success: false, data: [] })),
  ]);

  const featuredProducts = featuredRes.data || [];

  // Main categories
  const mainCategories = [
    {
      name: 'Tổ Yến Thô',
      slug: 'to-yen-tho',
      description: 'Tổ yến nguyên chất chưa qua chế biến',
      priceFrom: 'Từ 2.500.000đ',
    },
    {
      name: 'Yến Chưng Sẵn',
      slug: 'yen-chung-san',
      description: 'Yến chưng tươi cao cấp, tiện lợi',
      priceFrom: 'Từ 48.000đ',
    },
    {
      name: 'Set Quà Cao Cấp',
      slug: 'set-qua-tang',
      description: 'Hộp quà tặng sang trọng',
      priceFrom: 'Từ 300.000đ',
    },
  ];

  return (
    <>
      {/* ========== SECTION 1: HERO ========== */}
      <Hero />

      {/* ========== SECTION 2: TRUST SIGNALS ========== */}
      <TrustSignals />

      {/* ========== SECTION 3: CATEGORY CARDS ========== */}
      <section
        className="py-20 bg-white"
        aria-labelledby="categories-heading"
      >
        <div className="container mx-auto">
          {/* Section header */}
          <h2
            id="categories-heading"
            className="section-title mb-12"
          >
            Danh mục sản phẩm
          </h2>

          {/* 12-column grid: 3 cards × 4 columns each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mainCategories.map((category, index) => (
              <Link
                key={index}
                href={`/san-pham?category=${category.slug}`}
                className="group card overflow-hidden cursor-pointer"
              >
                {/* Image - 1:1 aspect ratio */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ backgroundColor: '#F5F5DC' }}
                >
                  {/* Placeholder */}
                  <div className="flex items-center justify-center h-full">
                    <PlaceholderIcon className="w-20 h-20 text-text-muted opacity-30 group-hover:scale-110 transition-transform duration-slow" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-normal"
                    style={{ color: '#8B4513' }}
                  >
                    {category.name}
                  </h3>
                  <p
                    className="text-sm mb-3 line-clamp-2"
                    style={{ color: '#666666' }}
                  >
                    {category.description}
                  </p>
                  <p
                    className="text-lg font-bold"
                    style={{ color: '#8B4513' }}
                  >
                    {category.priceFrom}
                  </p>
                  <span
                    className="inline-flex items-center mt-4 text-sm font-medium"
                    style={{ color: '#8B4513' }}
                  >
                    Xem sản phẩm
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-normal" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: FEATURED PRODUCTS ========== */}
      <section
        className="py-20"
        style={{ backgroundColor: '#FAFAFA' }}
        aria-labelledby="featured-products-heading"
      >
        <div className="container mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2
                id="featured-products-heading"
                className="text-2xl md:text-3xl font-bold font-heading"
                style={{ color: '#333333' }}
              >
                Sản phẩm bán chạy nhất
              </h2>
              <p
                className="mt-2"
                style={{ color: '#666666' }}
              >
                Những sản phẩm được yêu thích và đặt hàng nhiều nhất
              </p>
            </div>
            <Link
              href="/san-pham"
              className="hidden md:inline-flex items-center font-medium transition-colors duration-normal cursor-pointer hover:underline"
              style={{ color: '#8B4513' }}
            >
              Xem tất cả
              <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Products grid - 12 columns: 4 products × 3 cols each */}
          {featuredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {featuredProducts.slice(0, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Mobile: View all link */}
              <div className="text-center mt-8 md:hidden">
                <Link
                  href="/san-pham"
                  className="inline-flex items-center font-medium cursor-pointer"
                  style={{ color: '#8B4513' }}
                >
                  Xem tất cả sản phẩm
                  <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-light">Chưa có sản phẩm nào.</p>
            </div>
          )}
        </div>
      </section>

      {/* ========== SECTION 5: WHY CHOOSE US ========== */}
      <WhyChooseUs />

      {/* ========== SECTION 6: QUALITY PROCESS ========== */}
      <QualityProcess />

      {/* ========== SECTION 7: BLOG PREVIEW ========== */}
      <BlogPreview />

      {/* ========== SECTION 8: TESTIMONIALS ========== */}
      <Testimonials />

      {/* ========== SECTION 9: CTA SECTION ========== */}
      <section
        className="py-20"
        style={{ backgroundColor: '#8B4513' }}
        aria-label="Liên hệ tư vấn"
      >
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white mb-4"
          >
            Bạn cần tư vấn sản phẩm phù hợp?
          </h2>

          {/* Subtext */}
          <p
            className="text-lg text-white/80 mb-8"
          >
            Liên hệ với chúng tôi để được tư vấn miễn phí
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0901234567"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-normal cursor-pointer gap-2"
              style={{
                backgroundColor: 'white',
                color: '#8B4513',
              }}
            >
              <PhoneIcon className="w-5 h-5" aria-hidden="true" />
              Hotline: 0901234567
            </a>
            <a
              href="https://zalo.me/0901234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-normal cursor-pointer border-2 border-white text-white hover:bg-white/10"
            >
              Chat Zalo
            </a>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-normal cursor-pointer"
              style={{
                backgroundColor: '#D4AF37',
                color: 'white',
              }}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
