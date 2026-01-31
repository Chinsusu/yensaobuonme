import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import type { Product } from '@/lib/api';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const discount = calculateDiscount(product.price, product.compare_at_price);

    return (
        <Link
            href={`/san-pham/${product.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            {/* Image */}
            <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                {product.primary_image ? (
                    <Image
                        src={product.primary_image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-6xl opacity-30">🥚</div>
                    </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {discount && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                            -{discount}%
                        </span>
                    )}
                    {product.is_featured && (
                        <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                            Nổi bật
                        </span>
                    )}
                </div>

                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Xem chi tiết
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
                {/* Category */}
                {product.category && (
                    <span className="text-xs text-amber-600 font-medium">
                        {product.category.name}
                    </span>
                )}

                {/* Name */}
                <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-amber-600">
                        {formatPrice(product.price)}
                    </span>
                    {product.compare_at_price && (
                        <span className="text-sm text-gray-400 line-through">
                            {formatPrice(product.compare_at_price)}
                        </span>
                    )}
                </div>

                {/* Stock */}
                {product.stock_quantity <= 0 ? (
                    <span className="text-xs text-red-500">Hết hàng</span>
                ) : product.stock_quantity <= 10 ? (
                    <span className="text-xs text-orange-500">Còn {product.stock_quantity} sản phẩm</span>
                ) : null}
            </div>
        </Link>
    );
}
