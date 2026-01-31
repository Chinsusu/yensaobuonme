'use client';

import Link from 'next/link';

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="text-6xl mb-6">😢</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Đã xảy ra lỗi
                </h1>
                <p className="text-gray-600 mb-8">
                    Xin lỗi, đã có sự cố xảy ra. Vui lòng thử lại hoặc quay về trang chủ.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="btn-outline"
                    >
                        Thử lại
                    </button>
                    <Link href="/" className="btn-primary">
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
}
