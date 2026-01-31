'use client';

import {
    ShieldCheckIcon,
    TruckIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    DocumentCheckIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

const trustItems = [
    {
        icon: SparklesIcon,
        title: '100% Nguyên chất',
        description: 'Không pha trộn',
    },
    {
        icon: ClockIcon,
        title: '20 năm',
        description: 'Kinh nghiệm',
    },
    {
        icon: TruckIcon,
        title: 'Giao toàn quốc',
        description: 'Nhanh chóng',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Đổi trả 7 ngày',
        description: 'Hoàn tiền 100%',
    },
    {
        icon: ChatBubbleLeftRightIcon,
        title: 'Tư vấn miễn phí',
        description: '24/7 hỗ trợ',
    },
    {
        icon: DocumentCheckIcon,
        title: 'Chứng nhận ATTP',
        description: 'Đạt chuẩn',
    },
];

export default function TrustSignals() {
    return (
        <section className="py-6 md:py-8" style={{ backgroundColor: '#F5F5DC' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-3 md:p-4"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)' }}>
                                <item.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#8B4513' }} />
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 mt-1">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
