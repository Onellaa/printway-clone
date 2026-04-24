import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#1f171b] border-t border-white/10 pt-16 pb-8 text-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <BrandLogo iconClassName="h-12" />
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Sri Lanka&apos;s premier printing and packaging solutions
              provider. We deliver premium quality prints that elevate your
              brand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packaging"
                  className="hover:text-white transition-colors"
                >
                  Packaging Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/customers"
                  className="hover:text-white transition-colors"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services#offset-printing"
                  className="hover:text-white transition-colors"
                >
                  Offset Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital-printing"
                  className="hover:text-white transition-colors"
                >
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#packaging"
                  className="hover:text-white transition-colors"
                >
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/services#labels"
                  className="hover:text-white transition-colors"
                >
                  Labels & Stickers
                </Link>
              </li>
              <li>
                <Link
                  href="/services#branding"
                  className="hover:text-white transition-colors"
                >
                  Branding Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#8f2744] shrink-0 mt-0.5" />
                <span>
                  {" "}
                  341/1/112/C, Mihidupura, Palenwatta, Pannipitiya. Sri Lanka
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-[#8f2744] shrink-0" />
                <span>+94 72 888 8509</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-[#8f2744] shrink-0" />
                <span>hdprintingandpackaging@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} HD Printing &amp; Packaging. All
            rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
