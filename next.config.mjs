/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        // Modern formats
        formats: ['image/avif', 'image/webp'],
        // Remote image domains (add your CDN/storage domains)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yensaohonnoi.vn',
            },
            {
                protocol: 'https',
                hostname: '*.yensaohonnoi.vn',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
        // Device sizes for responsive images
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Minimize image size
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },

    // Compression
    compress: true,

    // Production optimizations
    poweredByHeader: false,

    // Strict mode for better debugging
    reactStrictMode: true,

    // Experimental features for performance
    experimental: {
        // Optimize package imports
        optimizePackageImports: ['@heroicons/react'],
    },

    // Headers for caching and security
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/:all*(js|css)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },

    // Redirects
    async redirects() {
        return [
            // Example: redirect old URLs
            {
                source: '/product/:slug',
                destination: '/san-pham/:slug',
                permanent: true,
            },
            {
                source: '/blog/:slug',
                destination: '/tin-tuc/:slug',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
