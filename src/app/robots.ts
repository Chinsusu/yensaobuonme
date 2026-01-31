import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaohonnoi.vn';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/gio-hang',
                    '/thanh-toan',
                    '/dat-hang-thanh-cong',
                    '/tra-cuu-don-hang',
                ],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
