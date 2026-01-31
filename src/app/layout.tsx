import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: {
    default: "Yến Sào Hòn Nội - Yến sào cao cấp từ Khánh Hòa",
    template: "%s | Yến Sào Hòn Nội",
  },
  description: "Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ đảo Hòn Nội, Khánh Hòa. Cam kết chất lượng, nguồn gốc rõ ràng.",
  keywords: ["yến sào", "yến sào khánh hòa", "tổ yến", "yến chưng", "yến sào cao cấp"],
  openGraph: {
    title: "Yến Sào Hòn Nội - Yến sào cao cấp từ Khánh Hòa",
    description: "Chuyên cung cấp yến sào cao cấp 100% nguyên chất",
    url: "https://yensaohonnoi.vn",
    siteName: "Yến Sào Hòn Nội",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
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
