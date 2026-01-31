import Link from 'next/link';
import { getCategories, getFeaturedProducts } from '@/lib/api';
import ProductCard from '@/components/products/ProductCard';

export default async function HomePage() {
  const [categoriesRes, featuredRes] = await Promise.all([
    getCategories().catch(() => ({ success: false, data: [] })),
    getFeaturedProducts().catch(() => ({ success: false, data: [] })),
  ]);

  const categories = categoriesRes.data || [];
  const featuredProducts = featuredRes.data || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                🏆 100% Nguyên chất từ Khánh Hòa
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Tinh hoa <span className="text-gradient">Yến Sào</span>
                <br />từ đảo Hòn Nội
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Yến sào cao cấp được thu hoạch từ thiên nhiên, đảm bảo 100% nguyên chất.
                Nguồn gốc rõ ràng, chất lượng vượt trội.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/san-pham" className="btn-primary">
                  Khám phá sản phẩm
                </Link>
                <Link href="/gioi-thieu" className="btn-outline">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🥚</div>
                  <p className="text-xl font-semibold">Premium Quality</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute top-10 -left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                <span className="text-2xl">✨</span>
                <p className="text-sm font-medium">100% Tự nhiên</p>
              </div>
              <div className="absolute bottom-10 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-100">
                <span className="text-2xl">🚚</span>
                <p className="text-sm font-medium">Giao hàng nhanh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Danh mục sản phẩm</h2>
            <p className="section-subtitle">
              Khám phá các dòng sản phẩm yến sào cao cấp của chúng tôi
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.id}
                  href={`/san-pham?category=${category.slug}`}
                  className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl text-white">🥚</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                    {category.name}
                  </h3>
                  {category.children && category.children.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      {category.children.length} danh mục con
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <p className="section-subtitle">
              Những sản phẩm bán chạy và được yêu thích nhất
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/san-pham" className="btn-primary">
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tại sao chọn chúng tôi?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            {[
              { icon: '🏆', title: '100% Nguyên chất', desc: 'Yến sào được thu hoạch từ thiên nhiên, không pha trộn' },
              { icon: '🔬', title: 'Kiểm định chất lượng', desc: 'Đạt tiêu chuẩn an toàn vệ sinh thực phẩm' },
              { icon: '🚚', title: 'Giao hàng toàn quốc', desc: 'Miễn phí vận chuyển cho đơn từ 500.000đ' },
              { icon: '💯', title: 'Cam kết hoàn tiền', desc: 'Hoàn tiền 100% nếu không hài lòng' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bạn cần tư vấn?
          </h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0909123456"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              📞 0909.123.456
            </a>
            <a
              href="https://zalo.me/0909123456"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Chat Zalo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
