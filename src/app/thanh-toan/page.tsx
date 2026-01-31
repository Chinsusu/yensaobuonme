'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';

export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        shipping_address: '',
        shipping_ward: '',
        shipping_district: '',
        shipping_city: 'Hồ Chí Minh',
        payment_method: 'cod',
        notes: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mock order data
    const orderItems = [
        { name: 'Tổ yến sào cao cấp 100g', quantity: 1, price: 5500000 },
        { name: 'Tổ yến sào cao cấp 50g', quantity: 2, price: 2800000 },
    ];
    const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = subtotal >= 500000 ? 0 : 30000;
    const total = subtotal + shippingFee;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Redirect to success page
        window.location.href = '/dat-hang-thanh-cong?order=YS20260131-0001';
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Thanh toán</h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Customer Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin liên hệ</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Họ và tên <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.customer_name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, customer_name: e.target.value }))}
                                            className="input"
                                            placeholder="Nguyễn Văn A"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Số điện thoại <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.customer_phone}
                                            onChange={(e) => setFormData(prev => ({ ...prev, customer_phone: e.target.value }))}
                                            className="input"
                                            placeholder="0909 123 456"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.customer_email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, customer_email: e.target.value }))}
                                            className="input"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Địa chỉ giao hàng</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Địa chỉ <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.shipping_address}
                                            onChange={(e) => setFormData(prev => ({ ...prev, shipping_address: e.target.value }))}
                                            className="input"
                                            placeholder="Số nhà, tên đường"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phường/Xã</label>
                                            <input
                                                type="text"
                                                value={formData.shipping_ward}
                                                onChange={(e) => setFormData(prev => ({ ...prev, shipping_ward: e.target.value }))}
                                                className="input"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Quận/Huyện</label>
                                            <input
                                                type="text"
                                                value={formData.shipping_district}
                                                onChange={(e) => setFormData(prev => ({ ...prev, shipping_district: e.target.value }))}
                                                className="input"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Tỉnh/Thành <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                value={formData.shipping_city}
                                                onChange={(e) => setFormData(prev => ({ ...prev, shipping_city: e.target.value }))}
                                                className="input"
                                                required
                                            >
                                                <option>Hồ Chí Minh</option>
                                                <option>Hà Nội</option>
                                                <option>Đà Nẵng</option>
                                                <option>Khánh Hòa</option>
                                                <option>Cần Thơ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                                        <textarea
                                            value={formData.notes}
                                            onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                                            className="input min-h-[100px]"
                                            placeholder="Ghi chú về đơn hàng, thời gian giao hàng..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Phương thức thanh toán</h2>
                                <div className="space-y-3">
                                    <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:border-amber-500 transition-colors">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={formData.payment_method === 'cod'}
                                            onChange={(e) => setFormData(prev => ({ ...prev, payment_method: e.target.value }))}
                                            className="w-4 h-4 text-amber-500"
                                        />
                                        <span className="ml-3">
                                            <span className="font-medium">Thanh toán khi nhận hàng (COD)</span>
                                            <span className="block text-sm text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</span>
                                        </span>
                                    </label>
                                    <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:border-amber-500 transition-colors">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="bank_transfer"
                                            checked={formData.payment_method === 'bank_transfer'}
                                            onChange={(e) => setFormData(prev => ({ ...prev, payment_method: e.target.value }))}
                                            className="w-4 h-4 text-amber-500"
                                        />
                                        <span className="ml-3">
                                            <span className="font-medium">Chuyển khoản ngân hàng</span>
                                            <span className="block text-sm text-gray-500">Chuyển khoản vào tài khoản của chúng tôi</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Đơn hàng của bạn</h2>

                                {/* Items */}
                                <div className="space-y-3 mb-4">
                                    {orderItems.map((item, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span className="text-gray-600">
                                                {item.name} × {item.quantity}
                                            </span>
                                            <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-4 space-y-3 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Tạm tính</span>
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

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Đang xử lý...' : 'Đặt hàng'}
                                </button>

                                <Link href="/gio-hang" className="block text-center text-amber-600 hover:underline mt-4">
                                    ← Quay lại giỏ hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
