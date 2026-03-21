import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "HD Printing & Packaging | Premium Commercial Printing & Packaging Solutions",
  description:
    "HD Printing & Packaging is Sri Lanka's premier printing and packaging company offering custom design, digital printing, offset printing, labels, stickers, and box packaging solutions.",
  keywords:
    "printing Sri Lanka, packaging Sri Lanka, custom labels, offset printing, digital printing, business cards, boxes",
  icons: {
    icon: "app/Logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased bg-[#141214] text-white`}
      >
        <Navbar />
        <main className="flex-grow flex flex-col bg-[#141214]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
