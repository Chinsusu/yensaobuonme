import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaobanme.vn';

export const metadata: Metadata = {
  title: {
    default: "Yến Sào Ban Mê - Tổ Yến Nguyên Chất 100% Tại Buôn Ma Thuột",
    template: "%s | Yến Sào Ban Mê",
  },
  description: "Yến sào nguyên chất cao cấp tại Buôn Ma Thuột, Đắk Lắk. 20 năm uy tín, thủ công 100%, không hóa chất. Giá từ 48.000đ. Giao toàn quốc. Hotline: 0355.246.245",
  keywords: [
    "yến sào",
    "yến sào Buôn Ma Thuột",
    "yến sào Đắk Lắk",
    "tổ yến",
    "yến chưng",
    "yến sào cao cấp",
    "yến sào Ban Mê",
    "yến sào nguyên chất",
    "mua yến sào",
    "yến sào giá tốt"
  ],
  authors: [{ name: "Yến Sào Ban Mê" }],
  creator: "Yến Sào Ban Mê",
  publisher: "Yến Sào Ban Mê",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yến Sào Ban Mê - Tổ Yến Nguyên Chất 100% Tại Buôn Ma Thuột",
    description: "Yến sào nguyên chất cao cấp tại Buôn Ma Thuột. 20 năm uy tín, thủ công 100%, không hóa chất.",
    url: siteUrl,
    siteName: "Yến Sào Ban Mê",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yến Sào Ban Mê - Tổ Yến Nguyên Chất Buôn Ma Thuột",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yến Sào Ban Mê - Tổ Yến Nguyên Chất 100% Tại Buôn Ma Thuột",
    description: "Yến sào nguyên chất tại Buôn Ma Thuột. 20 năm uy tín.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B4513' },
    { media: '(prefers-color-scheme: dark)', color: '#8B4513' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd data={[generateOrganizationSchema(), generateWebsiteSchema()]} />
      </head>
      <body className="min-h-screen flex flex-col font-body">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Chuyển đến nội dung chính
        </a>

        <Header />

        <main id="main-content" className="flex-1 pt-28">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
