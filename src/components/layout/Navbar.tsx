"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packaging", href: "/packaging" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141214]/85 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <BrandLogo
            iconClassName="h-11 md:h-12 transition-transform duration-300 group-hover:scale-[1.03]"
            textClassName="hidden sm:block"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? "text-[#fbbf24]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                    isActive
                      ? "w-full bg-[#ef4444]"
                      : "w-0 bg-[#ef4444] group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/quote">
            <Button className="bg-[#7f1d1d] text-white hover:bg-[#ef4444] shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#141214]/95 backdrop-blur-lg border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium border-b border-white/5 pb-2 transition-colors ${
                      isActive ? "text-[#fbbf24]" : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4"
              >
                <Button className="w-full bg-[#7f1d1d] text-white hover:bg-[#ef4444] shadow-[0_0_20px_rgba(239,68,68,0.25)]">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
