import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Đặt hàng thành công',
};

interface PageProps {
    searchParams: { order?: string };
}

export default function OrderSuccessPage({ searchParams }: PageProps) {
    const orderNumber = searchParams.order || 'YS20260131-XXXX';

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircleIcon className="w-12 h-12 text-green-500" />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Đặt hàng thành công!
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Cảm ơn bạn đã tin tưởng và mua hàng tại Yến Sào Hòn Nội
                    </p>

                    {/* Order Info */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                        <p className="text-sm text-gray-500 mb-1">Mã đơn hàng</p>
                        <p className="text-2xl font-bold text-amber-600">{orderNumber}</p>
                    </div>

                    {/* Next Steps */}
                    <div className="text-left bg-amber-50 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-gray-800 mb-3">Bước tiếp theo:</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                Chúng tôi sẽ gọi điện xác nhận đơn hàng trong vòng 30 phút
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                Email xác nhận đã được gửi đến địa chỉ email của bạn
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-500">✓</span>
                                Đơn hàng sẽ được giao trong 2-4 ngày làm việc
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <p className="text-sm text-gray-500 mb-6">
                        Nếu có thắc mắc, vui lòng liên hệ hotline: <a href="tel:0909123456" className="text-amber-600 font-medium">0909.123.456</a>
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={`/tra-cuu-don-hang?order=${orderNumber}`} className="btn-outline">
                            Theo dõi đơn hàng
                        </Link>
                        <Link href="/san-pham" className="btn-primary">
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
