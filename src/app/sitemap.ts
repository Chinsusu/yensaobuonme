import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaohonnoi.vn';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static pages
    const staticPages = [
        '',
        '/san-pham',
        '/tin-tuc',
        '/gioi-thieu',
        '/lien-he',
        '/huong-dan-mua-hang',
        '/chinh-sach-doi-tra',
        '/chinh-sach-van-chuyen',
        '/phuong-thuc-thanh-toan',
    ].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic pages - fetch from API
    let productPages: MetadataRoute.Sitemap = [];
    let postPages: MetadataRoute.Sitemap = [];

    try {
        // Fetch products
        const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?per_page=100`);
        if (productsRes.ok) {
            const data = await productsRes.json();
            productPages = (data.data || []).map((product: { slug: string; updated_at?: string }) => ({
                url: `${siteUrl}/san-pham/${product.slug}`,
                lastModified: product.updated_at ? new Date(product.updated_at) : new Date(),
                changeFrequency: 'daily' as const,
                priority: 0.9,
            }));
        }
    } catch (error) {
        console.error('Failed to fetch products for sitemap:', error);
    }

    try {
        // Fetch posts
        const postsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=100`);
        if (postsRes.ok) {
            const data = await postsRes.json();
            postPages = (data.data || []).map((post: { slug: string; updated_at?: string }) => ({
                url: `${siteUrl}/tin-tuc/${post.slug}`,
                lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error('Failed to fetch posts for sitemap:', error);
    }

    // Fetch categories
    let categoryPages: MetadataRoute.Sitemap = [];
    try {
        const categoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        if (categoriesRes.ok) {
            const data = await categoriesRes.json();
            categoryPages = (data.data || []).map((cat: { slug: string }) => ({
                url: `${siteUrl}/san-pham?category=${cat.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            }));
        }
    } catch (error) {
        console.error('Failed to fetch categories for sitemap:', error);
    }

    return [...staticPages, ...productPages, ...postPages, ...categoryPages];
}
