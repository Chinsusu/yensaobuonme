import {
    MapPinIcon,
    ShieldCheckIcon,
    HandRaisedIcon,
} from '@heroicons/react/24/outline';

const features = [
    {
        icon: MapPinIcon,
        title: 'Nguồn gốc rõ ràng',
        description:
            'Trực tiếp từ trang trại Hòn Nội, Khánh Hòa. Mỗi sản phẩm đều có truy xuất nguồn gốc rõ ràng.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Chất lượng đảm bảo',
        description:
            '100% nguyên chất, không tẩy trắng, không hóa chất. Có chứng nhận ATTP và kiểm định định kỳ.',
    },
    {
        icon: HandRaisedIcon,
        title: 'Quy trình thủ công',
        description:
            'Thu hoạch và chế biến thủ công 100%. Đảm bảo giữ nguyên giá trị dinh dưỡng cao nhất.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 md:py-20" style={{ backgroundColor: '#F5F5DC' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
                    Tại sao khách hàng tin tưởng chúng tôi
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang đến sản phẩm yến sào chất lượng nhất
                </p>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div
                                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
                                style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)' }}
                            >
                                <feature.icon className="w-8 h-8" style={{ color: '#8B4513' }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
