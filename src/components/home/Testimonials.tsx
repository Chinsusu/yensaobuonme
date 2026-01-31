'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
    {
        id: 1,
        content:
            'Sản phẩm rất tốt, con tôi uống yến rất thích. Chất lượng đảm bảo, sẽ ủng hộ lâu dài!',
        author: 'Chị Lan',
        location: 'TP. Hồ Chí Minh',
        rating: 5,
    },
    {
        id: 2,
        content:
            'Đã mua nhiều lần, lần nào cũng hài lòng. Yến nguyên sợi, không pha trộn. Giao hàng nhanh, đóng gói cẩn thận.',
        author: 'Anh Minh',
        location: 'Hà Nội',
        rating: 5,
    },
    {
        id: 3,
        content:
            'Mình mua tặng mẹ, mẹ rất thích vì yến thơm, nở đều. Giá cả hợp lý so với chất lượng.',
        author: 'Chị Hương',
        location: 'Đà Nẵng',
        rating: 5,
    },
    {
        id: 4,
        content:
            'Đặt hàng online, nhận hàng nhanh, sản phẩm đúng như mô tả. Sẽ giới thiệu cho bạn bè.',
        author: 'Anh Tuấn',
        location: 'Cần Thơ',
        rating: 5,
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
                    Khách hàng nói gì về chúng tôi
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Hơn 10.000 khách hàng đã tin tưởng và sử dụng sản phẩm của chúng tôi
                </p>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
                        style={{ color: '#8B4513' }}
                    >
                        <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
                        style={{ color: '#8B4513' }}
                    >
                        <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Testimonial card */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
                        <StarRating rating={testimonials[currentIndex].rating} />

                        <blockquote className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                            &ldquo;{testimonials[currentIndex].content}&rdquo;
                        </blockquote>

                        <div className="mt-8">
                            <p className="font-bold text-gray-800">
                                {testimonials[currentIndex].author}
                            </p>
                            <p className="text-sm text-gray-500">
                                {testimonials[currentIndex].location}
                            </p>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                        ? 'w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                style={index === currentIndex ? { backgroundColor: '#8B4513' } : {}}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
