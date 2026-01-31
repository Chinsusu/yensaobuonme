import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import type { Product } from '@/lib/api';
import { PlaceholderIcon, RatingStars } from '@/components/icons';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const discount = calculateDiscount(product.price, product.compare_at_price);

    return (
        <Link
            href={`/san-pham/${product.slug}`}
            className="group card overflow-hidden cursor-pointer"
        >
            {/* Image - 1:1 aspect ratio */}
            <div
                className="relative aspect-square overflow-hidden"
                style={{ backgroundColor: '#F5F5DC' }}
            >
                {product.primary_image ? (
                    <Image
                        src={product.primary_image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-slow"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <PlaceholderIcon className="w-16 h-16 text-text-muted opacity-30" />
                    </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {discount && (
                        <span className="badge-hot">
                            -{discount}%
                        </span>
                    )}
                    {product.is_featured && (
                        <span
                            className="px-2 py-1 text-xs font-bold rounded-full text-white"
                            style={{ backgroundColor: '#D4AF37' }}
                        >
                            Bán chạy
                        </span>
                    )}
                </div>

                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-normal flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-normal">
                        Xem chi tiết
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
                {/* Category */}
                {product.category && (
                    <span
                        className="text-xs font-medium"
                        style={{ color: '#8B4513' }}
                    >
                        {product.category.name}
                    </span>
                )}

                {/* Name */}
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-normal">
                    {product.name}
                </h3>

                {/* Rating */}
                <RatingStars rating={5} reviewCount={45} size="sm" />

                {/* Price */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span
                        className="text-lg font-bold"
                        style={{ color: '#8B4513' }}
                    >
                        {formatPrice(product.price)}
                    </span>
                    {product.compare_at_price && (
                        <span className="text-sm line-through" style={{ color: '#999999' }}>
                            {formatPrice(product.compare_at_price)}
                        </span>
                    )}
                </div>

                {/* Stock status */}
                {product.stock_quantity <= 0 ? (
                    <span className="text-xs text-red-500">Hết hàng</span>
                ) : product.stock_quantity <= 10 ? (
                    <span className="text-xs text-orange-500">Còn {product.stock_quantity} sản phẩm</span>
                ) : null}
            </div>
        </Link>
    );
}
