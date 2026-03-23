import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HD Printing & Packaging | Printing & Packaging Services in Sri Lanka",
  description:
    "HD Printing & Packaging offers high-quality printing, packaging, labels, stickers, business cards, and custom box solutions in Sri Lanka. Contact us for professional printing services.",
  keywords: [
    "HD Printing & Packaging",
    "printing Sri Lanka",
    "packaging Sri Lanka",
    "custom labels",
    "stickers Sri Lanka",
    "offset printing",
    "digital printing",
    "business cards",
    "box packaging",
  ],
  metadataBase: new URL("https://www.hdprintingandpackaging.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HD Printing & Packaging",
    description:
      "Premium printing and packaging services in Sri Lanka. Custom labels, boxes, stickers, business cards, and more.",
    url: "https://www.hdprintingandpackaging.com",
    siteName: "HD Printing & Packaging",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HD Printing & Packaging",
    description: "Premium printing and packaging services in Sri Lanka.",
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
