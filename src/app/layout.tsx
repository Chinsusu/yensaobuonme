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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaohonnoi.vn';

export const metadata: Metadata = {
  title: {
    default: "Yến Sào Hòn Nội - Tổ Yến Nguyên Chất 100% Tự Nhiên",
    template: "%s | Yến Sào Hòn Nội",
  },
  description: "Yến sào nguyên chất từ Hòn Nội, Khánh Hòa. 20 năm uy tín, thủ công 100%, không hóa chất. Giá từ 48k. Giao toàn quốc.",
  keywords: [
    "yến sào",
    "yến sào khánh hòa",
    "tổ yến",
    "yến chưng",
    "yến sào cao cấp",
    "yến sào hòn nội",
    "yến sào nguyên chất",
    "yến sào đắk lắk",
    "mua yến sào",
    "yến sào giá tốt"
  ],
  authors: [{ name: "Yến Sào Hòn Nội" }],
  creator: "Yến Sào Hòn Nội",
  publisher: "Yến Sào Hòn Nội",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yến Sào Hòn Nội - Tổ Yến Nguyên Chất 100% Tự Nhiên",
    description: "Yến sào nguyên chất từ Hòn Nội, Khánh Hòa. 20 năm uy tín, thủ công 100%, không hóa chất.",
    url: siteUrl,
    siteName: "Yến Sào Hòn Nội",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yến Sào Hòn Nội - Tổ Yến Nguyên Chất",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yến Sào Hòn Nội - Tổ Yến Nguyên Chất 100% Tự Nhiên",
    description: "Yến sào nguyên chất từ Hòn Nội, Khánh Hòa. 20 năm uy tín.",
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
