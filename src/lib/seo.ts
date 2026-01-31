import { Metadata } from 'next';

const siteName = 'Yến Sào Hòn Nội';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaohonnoi.vn';
const defaultDescription = 'Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ đảo Hòn Nội, Khánh Hòa. Cam kết chất lượng, nguồn gốc rõ ràng.';

interface SEOConfig {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'product';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    keywords?: string[];
}

export function generateSEO({
    title,
    description = defaultDescription,
    image = '/og-image.jpg',
    url = siteUrl,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    keywords = [],
}: SEOConfig = {}): Metadata {
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const defaultKeywords = [
        'yến sào',
        'yến sào khánh hòa',
        'tổ yến',
        'yến chưng',
        'yến sào cao cấp',
        'yến sào hòn nội',
        'yến sào nguyên chất',
    ];

    return {
        title: fullTitle,
        description,
        keywords: [...defaultKeywords, ...keywords],
        authors: author ? [{ name: author }] : [{ name: siteName }],
        creator: siteName,
        publisher: siteName,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: 'vi_VN',
            type: type === 'product' ? 'website' : type,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [imageUrl],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            // Add your verification codes here
            // google: 'your-google-verification-code',
        },
    };
}

// Schema.org JSON-LD generators
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description: defaultDescription,
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Đường Trần Phú',
            addressLocality: 'Nha Trang',
            addressRegion: 'Khánh Hòa',
            postalCode: '650000',
            addressCountry: 'VN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+84909123456',
            contactType: 'customer service',
            availableLanguage: ['Vietnamese'],
        },
        sameAs: [
            'https://facebook.com/yensaohonnoi',
            'https://instagram.com/yensaohonnoi',
        ],
    };
}

export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        description: defaultDescription,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteUrl}/san-pham?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

interface ProductSchemaProps {
    name: string;
    description: string;
    image: string;
    sku: string;
    price: number;
    currency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    url: string;
    brand?: string;
}

export function generateProductSchema({
    name,
    description,
    image,
    sku,
    price,
    currency = 'VND',
    availability = 'InStock',
    url,
    brand = siteName,
}: ProductSchemaProps) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image,
        sku,
        brand: {
            '@type': 'Brand',
            name: brand,
        },
        offers: {
            '@type': 'Offer',
            url,
            priceCurrency: currency,
            price,
            availability: `https://schema.org/${availability}`,
            seller: {
                '@type': 'Organization',
                name: siteName,
            },
        },
    };
}

interface ArticleSchemaProps {
    title: string;
    description: string;
    image: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    author: string;
}

export function generateArticleSchema({
    title,
    description,
    image,
    url,
    datePublished,
    dateModified,
    author,
}: ArticleSchemaProps) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        url,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png`,
            },
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
