'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ</h1>
                    <p className="text-amber-100">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Thông tin liên hệ</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPinIcon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Địa chỉ</h3>
                                        <p className="text-gray-600 text-sm">123 Đường Trần Phú, TP. Nha Trang, Khánh Hòa</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <PhoneIcon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Điện thoại</h3>
                                        <a href="tel:0909123456" className="text-amber-600 text-sm hover:underline">0909.123.456</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <EnvelopeIcon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Email</h3>
                                        <a href="mailto:info@yensaohonnoi.vn" className="text-amber-600 text-sm hover:underline">info@yensaohonnoi.vn</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <ClockIcon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Giờ làm việc</h3>
                                        <p className="text-gray-600 text-sm">8:00 - 21:00 (Thứ 2 - CN)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Bản đồ</h2>
                            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                                <p className="text-gray-500 text-sm">Google Maps</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Gửi tin nhắn cho chúng tôi</h2>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-3xl">✓</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Gửi thành công!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-outline"
                                    >
                                        Gửi tin nhắn khác
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Họ và tên <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                className="input"
                                                placeholder="Nguyễn Văn A"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Số điện thoại <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                                className="input"
                                                placeholder="0909 123 456"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className="input"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                            className="input"
                                        >
                                            <option value="">Chọn chủ đề</option>
                                            <option value="product">Hỏi về sản phẩm</option>
                                            <option value="order">Thắc mắc đơn hàng</option>
                                            <option value="partnership">Hợp tác kinh doanh</option>
                                            <option value="feedback">Góp ý, khiếu nại</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nội dung <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                            className="input min-h-[150px]"
                                            placeholder="Nhập nội dung tin nhắn..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full md:w-auto disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
