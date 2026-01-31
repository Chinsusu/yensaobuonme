import { getProductBySlug, Product, ProductDetail } from '@/lib/api';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProductCard from '@/components/products/ProductCard';

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const res = await getProductBySlug(params.slug);
        const product = res.data;
        return {
            title: product.meta_title || product.name,
            description: product.meta_description || product.short_description || '',
        };
    } catch {
        return { title: 'Sản phẩm không tồn tại' };
    }
}

export default async function ProductDetailPage({ params }: PageProps) {
    let product: ProductDetail;
    let relatedProducts: Product[] = [];

    try {
        const res = await getProductBySlug(params.slug);
        product = res.data;
        relatedProducts = ((res as unknown) as { related: Product[] }).related || [];
    } catch {
        notFound();
    }

    const discount = calculateDiscount(product.price, product.compare_at_price);

    return (
        <div className="bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-amber-600">Trang chủ</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/san-pham" className="text-gray-500 hover:text-amber-600">Sản phẩm</Link>
                        {product.category && (
                            <>
                                <span className="text-gray-300">/</span>
                                <Link
                                    href={`/san-pham?category=${product.category.slug}`}
                                    className="text-gray-500 hover:text-amber-600"
                                >
                                    {product.category.name}
                                </Link>
                            </>
                        )}
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-800 font-medium">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Detail */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
                            {product.images && product.images.length > 0 ? (
                                <Image
                                    src={product.images[0].url}
                                    alt={product.images[0].alt || product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full bg-gradient-to-br from-amber-50 to-orange-50">
                                    <div className="text-8xl opacity-30">🥚</div>
                                </div>
                            )}
                            {discount && (
                                <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                                    -{discount}%
                                </span>
                            )}
                        </div>
                        {/* Thumbnails */}
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-5 gap-2">
                                {product.images.slice(0, 5).map((img, index) => (
                                    <button
                                        key={img.id}
                                        className="relative aspect-square bg-white rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-500 transition-colors"
                                    >
                                        <Image
                                            src={img.url}
                                            alt={img.alt || `${product.name} - ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        {product.category && (
                            <Link
                                href={`/san-pham?category=${product.category.slug}`}
                                className="text-amber-600 font-medium hover:underline"
                            >
                                {product.category.name}
                            </Link>
                        )}

                        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-amber-600">
                                {formatPrice(product.price)}
                            </span>
                            {product.compare_at_price && (
                                <span className="text-xl text-gray-400 line-through">
                                    {formatPrice(product.compare_at_price)}
                                </span>
                            )}
                            {discount && (
                                <span className="badge-danger">Tiết kiệm {discount}%</span>
                            )}
                        </div>

                        {/* Short description */}
                        {product.short_description && (
                            <p className="text-gray-600 leading-relaxed">{product.short_description}</p>
                        )}

                        {/* Meta info */}
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-xl">
                            {product.sku && (
                                <div>
                                    <span className="text-gray-500 text-sm">Mã SP:</span>
                                    <span className="ml-2 font-medium">{product.sku}</span>
                                </div>
                            )}
                            {product.weight && (
                                <div>
                                    <span className="text-gray-500 text-sm">Khối lượng:</span>
                                    <span className="ml-2 font-medium">{product.weight}g</span>
                                </div>
                            )}
                            {product.origin && (
                                <div>
                                    <span className="text-gray-500 text-sm">Xuất xứ:</span>
                                    <span className="ml-2 font-medium">{product.origin}</span>
                                </div>
                            )}
                            <div>
                                <span className="text-gray-500 text-sm">Tình trạng:</span>
                                <span className={`ml-2 font-medium ${product.stock_quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.stock_quantity > 0 ? 'Còn hàng' : 'Hết hàng'}
                                </span>
                            </div>
                        </div>

                        {/* Quantity & Add to cart */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded-lg">
                                <button className="px-4 py-3 hover:bg-gray-100 transition-colors">-</button>
                                <input
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    className="w-16 text-center py-3 border-x outline-none"
                                />
                                <button className="px-4 py-3 hover:bg-gray-100 transition-colors">+</button>
                            </div>
                            <button
                                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={product.stock_quantity <= 0}
                            >
                                {product.stock_quantity > 0 ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
                            </button>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🚚</span>
                                <div>
                                    <p className="font-medium text-sm">Miễn phí vận chuyển</p>
                                    <p className="text-xs text-gray-500">Đơn từ 500.000đ</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">💯</span>
                                <div>
                                    <p className="font-medium text-sm">Đảm bảo chất lượng</p>
                                    <p className="text-xs text-gray-500">100% nguyên chất</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🔄</span>
                                <div>
                                    <p className="font-medium text-sm">Đổi trả dễ dàng</p>
                                    <p className="text-xs text-gray-500">Trong 7 ngày</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-medium text-sm">Hỗ trợ 24/7</p>
                                    <p className="text-xs text-gray-500">0909.123.456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description tabs */}
                {product.description && (
                    <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mô tả sản phẩm</h2>
                        <div
                            className="prose prose-amber max-w-none"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    </div>
                )}

                {/* Related products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sản phẩm liên quan</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
