import { ArrowRightIcon } from '@heroicons/react/24/outline';

const steps = [
    {
        number: 1,
        title: 'Thu hoạch',
        description: 'Chỉ thu hoạch khi tổ yến đủ già',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
    },
    {
        number: 2,
        title: 'Làm sạch',
        description: 'Thủ công 100% loại bỏ tạp chất',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.628.105a9.06 9.06 0 01-9.014 0l-.628-.105c-1.717-.293-2.299-2.379-1.067-3.611L5 14.5" />
            </svg>
        ),
    },
    {
        number: 3,
        title: 'Tinh chế',
        description: 'Không hóa chất phụ gia',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
            </svg>
        ),
    },
    {
        number: 4,
        title: 'Sấy khô',
        description: 'Bảo quản môi trường khô ráo',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
    },
];

export default function QualityProcess() {
    return (
        <section
            className="py-20 bg-white"
            aria-labelledby="quality-process-heading"
        >
            <div className="container mx-auto">
                {/* Section header */}
                <h2
                    id="quality-process-heading"
                    className="section-title mb-16"
                >
                    Quy trình sản xuất nghiêm ngặt
                </h2>

                {/* Desktop: Horizontal timeline */}
                <div className="hidden lg:flex items-start justify-between">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex items-center">
                            {/* Step */}
                            <div className="flex flex-col items-center text-center" style={{ width: '200px' }}>
                                {/* Number badge */}
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4"
                                    style={{ backgroundColor: '#8B4513' }}
                                >
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 flex items-center justify-center mb-4"
                                    style={{ color: '#8B4513' }}
                                >
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg font-bold mb-2"
                                    style={{ color: '#333333' }}
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-sm"
                                    style={{ color: '#666666' }}
                                >
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow (not after last step) */}
                            {index < steps.length - 1 && (
                                <div className="mx-4" style={{ color: '#8B4513' }}>
                                    <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet: Vertical timeline */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex flex-col items-center text-center">
                            {/* Step content */}
                            <div className="flex flex-col items-center">
                                {/* Number badge */}
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4"
                                    style={{ backgroundColor: '#8B4513' }}
                                >
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 flex items-center justify-center mb-4"
                                    style={{ color: '#8B4513' }}
                                >
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg font-bold mb-2"
                                    style={{ color: '#333333' }}
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-sm"
                                    style={{ color: '#666666' }}
                                >
                                    {step.description}
                                </p>
                            </div>

                            {/* Down arrow (not after last step) */}
                            {index < steps.length - 1 && (
                                <div className="my-4 rotate-90" style={{ color: '#8B4513' }}>
                                    <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
