import Link from "next/link";
import { Printer, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 text-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">
                <Printer size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Printway</span>
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Sri Lanka's premier printing and packaging solutions provider. We deliver premium quality prints that elevate your brand.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00AEEF] hover:text-white transition-all text-white"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EC008C] hover:text-white transition-all text-white"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-white"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/packaging" className="hover:text-white transition-colors">Packaging Solutions</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#offset-printing" className="hover:text-white transition-colors">Offset Printing</Link></li>
              <li><Link href="/services#digital-printing" className="hover:text-white transition-colors">Digital Printing</Link></li>
              <li><Link href="/services#packaging" className="hover:text-white transition-colors">Custom Packaging</Link></li>
              <li><Link href="/services#labels" className="hover:text-white transition-colors">Labels & Stickers</Link></li>
              <li><Link href="/services#branding" className="hover:text-white transition-colors">Branding Materials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#00AEEF] shrink-0 mt-0.5" />
                <span>123 Printway Avenue, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-[#00AEEF] shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-[#00AEEF] shrink-0" />
                <span>info@printway.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Printway Printers (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
