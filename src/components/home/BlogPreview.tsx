import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { PlaceholderIcon } from '@/components/icons';

// Placeholder blog posts (will be replaced with API data)
const blogPosts = [
    {
        id: 1,
        slug: '10-cong-dung-tuyet-voi-cua-yen-sao',
        title: '10 công dụng tuyệt vời của yến sào',
        excerpt: 'Yến sào là thực phẩm bổ dưỡng cao cấp, được biết đến với nhiều công dụng tuyệt vời cho sức khỏe. Cùng tìm hiểu chi tiết...',
        category: 'Kiến thức',
        date: '2026-01-15',
        image: null,
    },
    {
        id: 2,
        slug: 'cach-phan-biet-yen-sao-that-gia',
        title: 'Cách phân biệt yến sào thật giả',
        excerpt: 'Hướng dẫn chi tiết cách nhận biết yến sào thật và yến sào giả, giúp bạn lựa chọn sản phẩm chất lượng...',
        category: 'Hướng dẫn',
        date: '2026-01-10',
        image: null,
    },
    {
        id: 3,
        slug: 'yen-sao-cho-ba-bau-nen-an-nhu-the-nao',
        title: 'Yến sào cho bà bầu - Nên ăn như thế nào?',
        excerpt: 'Yến sào rất tốt cho bà bầu, nhưng cần sử dụng đúng cách để đảm bảo an toàn và hiệu quả tối đa...',
        category: 'Sức khỏe',
        date: '2026-01-05',
        image: null,
    },
];

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

export default function BlogPreview() {
    return (
        <section
            className="py-20 bg-white"
            aria-labelledby="blog-preview-heading"
        >
            <div className="container mx-auto">
                {/* Section header */}
                <div className="flex items-center justify-between mb-12">
                    <h2
                        id="blog-preview-heading"
                        className="text-2xl md:text-3xl font-bold font-heading"
                        style={{ color: '#333333' }}
                    >
                        Tin tức & Kiến thức
                    </h2>
                    <Link
                        href="/tin-tuc"
                        className="hidden md:inline-flex items-center font-medium transition-colors duration-normal cursor-pointer hover:underline"
                        style={{ color: '#8B4513' }}
                    >
                        Xem tất cả
                        <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
                    </Link>
                </div>

                {/* 12-column grid: 3 posts × 4 columns each */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group card overflow-hidden"
                        >
                            {/* Image - 16:9 aspect ratio */}
                            <div
                                className="relative aspect-video overflow-hidden"
                                style={{ backgroundColor: '#F5F5DC' }}
                            >
                                {post.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <PlaceholderIcon className="w-16 h-16 text-text-muted opacity-30" />
                                    </div>
                                )}

                                {/* Category badge */}
                                <span
                                    className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full"
                                    style={{
                                        backgroundColor: '#F5F5DC',
                                        color: '#8B4513',
                                    }}
                                >
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-normal">
                                    <Link
                                        href={`/tin-tuc/${post.slug}`}
                                        className="cursor-pointer"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>

                                {/* Excerpt */}
                                <p
                                    className="text-sm mb-4 line-clamp-3"
                                    style={{ color: '#666666' }}
                                >
                                    {post.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={`/tin-tuc/${post.slug}`}
                                        className="inline-flex items-center text-sm font-medium transition-colors duration-normal cursor-pointer"
                                        style={{ color: '#8B4513' }}
                                    >
                                        Đọc tiếp
                                        <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
                                    </Link>
                                    <span
                                        className="text-xs"
                                        style={{ color: '#999999' }}
                                    >
                                        {formatDate(post.date)}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile: View all link */}
                <div className="text-center mt-8 md:hidden">
                    <Link
                        href="/tin-tuc"
                        className="inline-flex items-center font-medium cursor-pointer"
                        style={{ color: '#8B4513' }}
                    >
                        Xem tất cả bài viết
                        <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
