import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yensaohonnoi.vn';

export const metadata: Metadata = {
  title: {
    default: "Yến Sào Hòn Nội - Yến sào cao cấp từ Khánh Hòa",
    template: "%s | Yến Sào Hòn Nội",
  },
  description: "Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ đảo Hòn Nội, Khánh Hòa. Cam kết chất lượng, nguồn gốc rõ ràng.",
  keywords: ["yến sào", "yến sào khánh hòa", "tổ yến", "yến chưng", "yến sào cao cấp", "yến sào hòn nội", "yến sào nguyên chất"],
  authors: [{ name: "Yến Sào Hòn Nội" }],
  creator: "Yến Sào Hòn Nội",
  publisher: "Yến Sào Hòn Nội",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yến Sào Hòn Nội - Yến sào cao cấp từ Khánh Hòa",
    description: "Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ đảo Hòn Nội, Khánh Hòa",
    url: siteUrl,
    siteName: "Yến Sào Hòn Nội",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yến Sào Hòn Nội",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yến Sào Hòn Nội - Yến sào cao cấp từ Khánh Hòa",
    description: "Chuyên cung cấp yến sào cao cấp 100% nguyên chất",
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
    { media: '(prefers-color-scheme: light)', color: '#f59e0b' },
    { media: '(prefers-color-scheme: dark)', color: '#d97706' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <JsonLd data={[generateOrganizationSchema(), generateWebsiteSchema()]} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
