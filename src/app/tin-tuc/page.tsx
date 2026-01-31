import { getPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tin tức',
    description: 'Tin tức, bài viết về yến sào và sức khỏe từ Yến Sào Hòn Nội',
};

interface PageProps {
    searchParams: { category?: string; page?: string };
}

export default async function BlogPage({ searchParams }: PageProps) {
    const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;

    const postsRes = await getPosts({ category, page }).catch(() => ({
        success: false,
        data: [],
        meta: undefined
    }));

    const posts = postsRes.data || [];
    const meta = postsRes.meta;

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Tin tức</h1>
                    <p className="text-amber-100">Kiến thức về yến sào và sức khỏe</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {posts.length > 0 ? (
                    <>
                        {/* Featured Post */}
                        {posts[0] && (
                            <Link
                                href={`/tin-tuc/${posts[0].slug}`}
                                className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow mb-12"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative aspect-video md:aspect-auto">
                                        {posts[0].featured_image ? (
                                            <Image
                                                src={posts[0].featured_image}
                                                alt={posts[0].title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="h-full min-h-[250px] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                                <span className="text-6xl opacity-30">📰</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col justify-center">
                                        <span className="text-amber-600 text-sm font-medium mb-2">
                                            {formatDate(posts[0].published_at)}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-amber-600 transition-colors">
                                            {posts[0].title}
                                        </h2>
                                        {posts[0].excerpt && (
                                            <p className="text-gray-600 line-clamp-3 mb-4">{posts[0].excerpt}</p>
                                        )}
                                        <span className="text-amber-600 font-medium">Đọc tiếp →</span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Posts Grid */}
                        {posts.length > 1 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.slice(1).map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/tin-tuc/${post.slug}`}
                                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                                    >
                                        <div className="relative aspect-video">
                                            {post.featured_image ? (
                                                <Image
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                                    <span className="text-4xl opacity-30">📰</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <span className="text-amber-600 text-sm font-medium">
                                                {formatDate(post.published_at)}
                                            </span>
                                            <h3 className="font-semibold text-gray-800 mt-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {meta && meta.last_page > 1 && (
                            <div className="flex justify-center gap-2 mt-12">
                                {Array.from({ length: meta.last_page }, (_, i) => i + 1).map((p) => (
                                    <Link
                                        key={p}
                                        href={`/tin-tuc?${new URLSearchParams({
                                            ...(category && { category }),
                                            page: p.toString(),
                                        }).toString()}`}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${p === page
                                                ? 'bg-amber-500 text-white'
                                                : 'bg-white hover:bg-amber-100'
                                            }`}
                                    >
                                        {p}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="bg-white rounded-2xl p-12 text-center max-w-lg mx-auto">
                        <div className="text-6xl mb-4">📰</div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Chưa có bài viết</h2>
                        <p className="text-gray-600 mb-6">Chúng tôi đang cập nhật nội dung, vui lòng quay lại sau!</p>
                        <Link href="/" className="btn-primary">Về trang chủ</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
