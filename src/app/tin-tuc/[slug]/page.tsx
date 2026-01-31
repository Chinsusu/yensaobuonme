import { getPostBySlug } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const res = await getPostBySlug(params.slug);
        const post = res.data;
        return {
            title: post.title,
            description: post.excerpt || '',
        };
    } catch {
        return { title: 'Bài viết không tồn tại' };
    }
}

export default async function BlogDetailPage({ params }: PageProps) {
    let post;

    try {
        const res = await getPostBySlug(params.slug);
        post = res.data;
    } catch {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-amber-600">Trang chủ</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/tin-tuc" className="text-gray-500 hover:text-amber-600">Tin tức</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-800 font-medium line-clamp-1">{post.title}</span>
                    </nav>
                </div>
            </div>

            <article className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-8">
                        {post.categories && post.categories.length > 0 && (
                            <div className="flex justify-center gap-2 mb-4">
                                {post.categories.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        href={`/tin-tuc?category=${cat.slug}`}
                                        className="badge-primary"
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                            {post.author && (
                                <span>Bởi <strong className="text-gray-700">{post.author.name}</strong></span>
                            )}
                            <span>•</span>
                            <time>{formatDate(post.published_at)}</time>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.featured_image && (
                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                            <Image
                                src={post.featured_image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
                        <div
                            className="prose prose-amber prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center gap-2 mt-8 flex-wrap">
                            <span className="text-gray-500 text-sm">Tags:</span>
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag.id}
                                    href={`/tin-tuc?tag=${tag.slug}`}
                                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-amber-100 hover:text-amber-600 transition-colors"
                                >
                                    #{tag.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Share */}
                    <div className="border-t mt-8 pt-8">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <span className="text-gray-600 font-medium">Chia sẻ bài viết:</span>
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                >
                                    f
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                >
                                    z
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="mt-8 text-center">
                        <Link href="/tin-tuc" className="btn-outline">
                            ← Xem tất cả tin tức
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
