import {
    MapPinIcon,
    ShieldCheckIcon,
    HandRaisedIcon,
} from '@heroicons/react/24/outline';

const usps = [
    {
        icon: MapPinIcon,
        title: 'Nguồn gốc rõ ràng',
        description: 'Trực tiếp từ trang trại yến tại Hòn Nội, Khánh Hòa. Quy trình nuôi yến tự nhiên, không can thiệp hóa chất.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Chất lượng đảm bảo',
        description: '100% tổ yến thật, không tẩy trắng. Có chứng nhận ATTP, kiểm định chất lượng bởi cơ quan có thẩm quyền.',
    },
    {
        icon: HandRaisedIcon,
        title: 'Quy trình thủ công',
        description: 'Thu hoạch và chế biến thủ công 100%. Chỉ thu hoạch khi tổ yến đủ già, đảm bảo giá trị dinh dưỡng cao nhất.',
    },
];

export default function WhyChooseUs() {
    return (
        <section
            className="py-20"
            style={{ backgroundColor: '#F5F5DC' }}
            aria-labelledby="why-choose-us-heading"
        >
            <div className="container mx-auto">
                {/* Section header */}
                <h2
                    id="why-choose-us-heading"
                    className="section-title mb-16"
                >
                    Tại sao khách hàng tin tưởng chúng tôi
                </h2>

                {/* 12-column grid: 3 items × 4 columns each */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {usps.map((usp, index) => {
                        const Icon = usp.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center px-4"
                            >
                                {/* Icon - 80x80 */}
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ color: '#8B4513' }}
                                >
                                    <Icon className="w-16 h-16" aria-hidden="true" />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-bold mb-4"
                                    style={{ color: '#8B4513' }}
                                >
                                    {usp.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-base leading-relaxed"
                                    style={{ color: '#666666', lineHeight: '1.7' }}
                                >
                                    {usp.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
