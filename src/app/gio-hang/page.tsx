'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
    const { items: cartItems, updateQuantity, removeItem, subtotal, isLoaded } = useCart();

    const freeShippingThreshold = 500000;
    const shippingFee = subtotal >= freeShippingThreshold ? 0 : 30000;
    const total = subtotal + shippingFee;
    const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

    if (!isLoaded) {
        return (
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto px-4">
                    <div className="animate-pulse">
                        <div className="h-10 bg-gray-200 rounded w-48 mb-8"></div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-4">
                                <div className="h-32 bg-gray-200 rounded-2xl"></div>
                                <div className="h-32 bg-gray-200 rounded-2xl"></div>
                            </div>
                            <div className="h-64 bg-gray-200 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Giỏ hàng</h1>

                {cartItems.length > 0 ? (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Free shipping progress */}
                            {remainingForFreeShipping > 0 && (
                                <div className="bg-amber-50 p-4 rounded-xl">
                                    <p className="text-amber-700 text-sm mb-2">
                                        Mua thêm <strong>{formatPrice(remainingForFreeShipping)}</strong> để được miễn phí vận chuyển
                                    </p>
                                    <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-amber-500 transition-all"
                                            style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Items */}
                            {cartItems.map((item) => (
                                <div key={item.product_id} className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
                                    {/* Image */}
                                    <Link href={`/san-pham/${item.slug}`} className="relative w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-4xl opacity-30">🥚</div>
                                        )}
                                    </Link>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/san-pham/${item.slug}`} className="font-semibold text-gray-800 hover:text-amber-600 line-clamp-2">
                                            {item.name}
                                        </Link>
                                        <p className="text-amber-600 font-bold mt-1">{formatPrice(item.price)}</p>

                                        <div className="flex items-center justify-between mt-3">
                                            {/* Quantity */}
                                            <div className="flex items-center border rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <MinusIcon className="w-4 h-4" />
                                                </button>
                                                <span className="px-4 py-2 border-x min-w-[50px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <PlusIcon className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Subtotal & Remove */}
                                            <div className="flex items-center gap-4">
                                                <span className="font-bold text-gray-800">
                                                    {formatPrice(parseFloat(item.price) * item.quantity)}
                                                </span>
                                                <button
                                                    onClick={() => removeItem(item.product_id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <TrashIcon className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Tóm tắt đơn hàng</h2>

                                <div className="space-y-3 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Tạm tính ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} sản phẩm)</span>
                                        <span className="font-medium text-gray-800">{formatPrice(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Phí vận chuyển</span>
                                        <span className={`font-medium ${shippingFee === 0 ? 'text-green-600' : 'text-gray-800'}`}>
                                            {shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee)}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t my-4" />

                                <div className="flex justify-between text-lg font-bold">
                                    <span>Tổng cộng</span>
                                    <span className="text-amber-600">{formatPrice(total)}</span>
                                </div>

                                <Link href="/thanh-toan" className="btn-primary w-full mt-6 text-center">
                                    Tiến hành thanh toán
                                </Link>

                                <Link href="/san-pham" className="block text-center text-amber-600 hover:underline mt-4">
                                    ← Tiếp tục mua sắm
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl p-12 text-center max-w-lg mx-auto">
                        <div className="text-8xl mb-6">🛒</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Giỏ hàng trống</h2>
                        <p className="text-gray-600 mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link href="/san-pham" className="btn-primary">
                            Xem sản phẩm
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
