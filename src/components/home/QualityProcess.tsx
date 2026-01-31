const steps = [
    {
        number: 1,
        title: 'Thu hoạch',
        description: 'Chỉ thu hoạch khi tổ yến đủ già, đảm bảo chất lượng cao nhất',
        icon: '🌿',
    },
    {
        number: 2,
        title: 'Làm sạch',
        description: 'Thủ công 100% loại bỏ tạp chất, giữ nguyên sợi yến tự nhiên',
        icon: '✨',
    },
    {
        number: 3,
        title: 'Tinh chế',
        description: 'Không hóa chất phụ gia, không tẩy trắng, 100% nguyên chất',
        icon: '💎',
    },
    {
        number: 4,
        title: 'Sấy khô',
        description: 'Bảo quản trong môi trường khô ráo, đóng gói chân không',
        icon: '📦',
    },
];

export default function QualityProcess() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
                    Quy trình sản xuất nghiêm ngặt
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Mỗi sản phẩm đều trải qua quy trình kiểm soát chất lượng khắt khe
                </p>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                    {/* Connecting line */}
                    <div
                        className="absolute top-12 left-0 right-0 h-1 rounded-full"
                        style={{ backgroundColor: 'rgba(139, 69, 19, 0.2)' }}
                    />

                    <div className="grid grid-cols-4 gap-6 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center relative">
                                {/* Step circle */}
                                <div
                                    className="w-24 h-24 mx-auto rounded-full flex flex-col items-center justify-center text-white relative z-10 shadow-lg"
                                    style={{ backgroundColor: '#8B4513' }}
                                >
                                    <span className="text-3xl mb-1">{step.icon}</span>
                                    <span className="text-xs font-medium">Bước {step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="mt-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile vertical timeline */}
                <div className="md:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                            <div
                                className="w-16 h-16 flex-shrink-0 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
                                style={{ backgroundColor: '#8B4513' }}
                            >
                                <span className="text-2xl">{step.icon}</span>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="font-bold text-gray-800 mb-1">
                                    Bước {step.number}: {step.title}
                                </h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
