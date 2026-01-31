import { Metadata } from 'next';

const siteName = 'Yến Sào Ban Mê';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaobanme.vn';
const defaultDescription = 'Chuyên cung cấp yến sào nguyên chất cao cấp tại Buôn Ma Thuột, Đắk Lắk. 20 năm kinh nghiệm, quy trình thủ công 100%.';

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
        'yến sào Buôn Ma Thuột',
        'yến sào Đắk Lắk',
        'tổ yến',
        'yến chưng',
        'yến sào cao cấp',
        'yến sào Ban Mê',
        'yến sào nguyên chất',
        'mua yến sào',
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
        alternateName: 'Yen Sao Ban Me',
        url: siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
            width: 250,
            height: 250,
        },
        description: defaultDescription,
        address: {
            '@type': 'PostalAddress',
            streetAddress: '431 Phan Bội Châu, Thành Nhất',
            addressLocality: 'Buôn Ma Thuột',
            addressRegion: 'Đắk Lắk',
            postalCode: '630000',
            addressCountry: 'VN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 12.6676,
            longitude: 108.0371,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+84-355-246-245',
            contactType: 'customer service',
            availableLanguage: ['Vietnamese'],
            areaServed: 'VN',
        },
        email: 'info@yensaobanme.vn',
        sameAs: [
            'https://facebook.com/yensaobanme',
            'https://zalo.me/0355246245',
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '150',
        },
        priceRange: '₫₫₫',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '20:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '08:00',
                closes: '18:00',
            },
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
