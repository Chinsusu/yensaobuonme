import {
    CheckCircleIcon,
    TrophyIcon,
    TruckIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const trustItems = [
    {
        icon: CheckCircleIcon,
        title: '100% Nguyên chất',
        description: 'Không tẩy trắng',
    },
    {
        icon: TrophyIcon,
        title: '20 năm',
        description: 'Kinh nghiệm',
    },
    {
        icon: TruckIcon,
        title: 'Giao toàn quốc',
        description: 'Nhanh chóng',
    },
    {
        icon: ArrowPathIcon,
        title: 'Đổi trả 7 ngày',
        description: 'Nếu không hài lòng',
    },
    {
        icon: ChatBubbleLeftRightIcon,
        title: 'Tư vấn miễn phí',
        description: 'Hỗ trợ 24/7',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Chứng nhận ATTP',
        description: 'Đảm bảo an toàn',
    },
];

export default function TrustSignals() {
    return (
        <section
            className="py-10"
            style={{ backgroundColor: '#F5F5DC' }}
            aria-label="Cam kết của chúng tôi"
        >
            <div className="container mx-auto">
                {/* 12-column grid: 6 items × 2 columns each */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-4"
                            >
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 flex items-center justify-center mb-3"
                                    style={{ color: '#8B4513' }}
                                >
                                    <Icon className="w-10 h-10" aria-hidden="true" />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-sm font-bold"
                                    style={{ color: '#333333' }}
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-xs mt-1"
                                    style={{ color: '#666666' }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
