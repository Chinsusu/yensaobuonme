import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Không tìm thấy trang',
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="text-8xl font-bold text-amber-500 mb-4">404</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Không tìm thấy trang
                </h1>
                <p className="text-gray-600 mb-8">
                    Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/san-pham" className="btn-outline">
                        Xem sản phẩm
                    </Link>
                    <Link href="/" className="btn-primary">
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}
