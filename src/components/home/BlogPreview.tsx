import Link from 'next/link';
import Image from 'next/image';
import { getPosts, type Post } from '@/lib/api';

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

async function BlogPosts() {
    let posts: Post[] = [];

    try {
        const response = await getPosts({ page: 1 });
        posts = response.data?.slice(0, 3) || [];
    } catch {
        // Return empty if API fails
    }

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
                <Link
                    key={post.id}
                    href={`/tin-tuc/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                        {post.featured_image ? (
                            <Image
                                src={post.featured_image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <span className="text-5xl opacity-30">📰</span>
                            </div>
                        )}
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <time className="text-xs text-gray-500">
                            {formatDate(post.published_at)}
                        </time>
                        <h3 className="font-bold text-gray-800 mt-2 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                            {post.title}
                        </h3>
                        {post.excerpt && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {post.excerpt}
                            </p>
                        )}
                        <span
                            className="inline-flex items-center mt-4 text-sm font-medium transition-colors"
                            style={{ color: '#8B4513' }}
                        >
                            Đọc tiếp
                            <svg
                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default function BlogPreview() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                            Tin tức & Kiến thức
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Cập nhật thông tin hữu ích về yến sào
                        </p>
                    </div>
                    <Link
                        href="/tin-tuc"
                        className="hidden md:inline-flex items-center font-medium hover:underline"
                        style={{ color: '#8B4513' }}
                    >
                        Xem tất cả
                        <svg
                            className="w-5 h-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>

                <BlogPosts />

                <div className="text-center mt-8 md:hidden">
                    <Link
                        href="/tin-tuc"
                        className="inline-flex items-center font-medium"
                        style={{ color: '#8B4513' }}
                    >
                        Xem tất cả bài viết →
                    </Link>
                </div>
            </div>
        </section>
    );
}
