"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/home/CTASection";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0">
      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#fbbf24] font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Pioneering Print Excellence in Sri Lanka</h1>
            <div className="space-y-6 text-lg text-white/90">
              <p>
                Founded with a vision to revolutionize the commercial printing landscape, HD Printing &amp; Packaging has grown to become Sri Lanka&apos;s most trusted name in premium printing and custom packaging solutions.
              </p>
              
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="/images/printing_machine.png" 
              alt="HD Printing & Packaging Factory" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex gap-6 items-center">
                {/* <div className="text-[#ef4444]">
                  <span className="block text-4xl font-black">20+</span>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Years Exp.</span>
                </div> */}
                <div className="w-[1px] h-12 bg-white/20" />
                <div className="text-[#fbbf24]">
                  <span className="block text-4xl font-black">100+</span>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Happy Clients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
