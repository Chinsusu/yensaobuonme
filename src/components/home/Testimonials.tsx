'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { RatingStars } from '@/components/icons';

const testimonials = [
    {
        id: 1,
        quote: 'Sản phẩm rất tốt, con tôi uống yến rất thích. Chất lượng đảm bảo, sẽ ủng hộ lâu dài.',
        author: 'Chị Lan',
        location: 'TP. Hồ Chí Minh',
        rating: 5,
    },
    {
        id: 2,
        quote: 'Tổ yến rất sạch, không mùi lạ. Nhân viên tư vấn nhiệt tình, giải đáp mọi thắc mắc.',
        author: 'Anh Minh',
        location: 'Hà Nội',
        rating: 5,
    },
    {
        id: 3,
        quote: 'Giao hàng nhanh, đóng gói cẩn thận. Giá cả hợp lý so với chất lượng sản phẩm.',
        author: 'Chị Hương',
        location: 'Đà Nẵng',
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section
            className="py-20 bg-white"
            aria-labelledby="testimonials-heading"
        >
            <div className="container mx-auto">
                {/* Section header */}
                <h2
                    id="testimonials-heading"
                    className="section-title mb-16"
                >
                    Khách hàng nói gì về chúng tôi
                </h2>

                {/* Testimonial carousel */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Navigation - Previous */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-normal cursor-pointer z-10"
                        style={{
                            backgroundColor: '#F5F5DC',
                            color: '#8B4513',
                        }}
                        aria-label="Xem đánh giá trước"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    {/* Testimonial content */}
                    <div
                        className="text-center px-8 lg:px-16"
                        role="region"
                        aria-live="polite"
                    >
                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                            <RatingStars rating={currentTestimonial.rating} size="md" />
                        </div>

                        {/* Quote */}
                        <blockquote>
                            <p
                                className="text-xl md:text-2xl italic mb-6 leading-relaxed"
                                style={{ color: '#333333' }}
                            >
                                &ldquo;{currentTestimonial.quote}&rdquo;
                            </p>
                        </blockquote>

                        {/* Author */}
                        <p
                            className="text-base font-medium"
                            style={{ color: '#666666' }}
                        >
                            {currentTestimonial.author}, {currentTestimonial.location}
                        </p>
                    </div>

                    {/* Navigation - Next */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-normal cursor-pointer z-10"
                        style={{
                            backgroundColor: '#F5F5DC',
                            color: '#8B4513',
                        }}
                        aria-label="Xem đánh giá tiếp theo"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-normal cursor-pointer`}
                                style={{
                                    backgroundColor: index === currentIndex ? '#8B4513' : '#E5E5E5',
                                }}
                                aria-label={`Xem đánh giá ${index + 1}`}
                                aria-current={index === currentIndex ? 'true' : 'false'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
