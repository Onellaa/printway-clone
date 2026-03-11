"use client";

import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTASection } from "@/components/home/CTASection";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-0 bg-[#141214] min-h-screen">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#ef4444]/10 to-transparent rounded-[100%] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#fbbf24]/10 to-transparent rounded-[100%] blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mb-8 backdrop-blur-md"
          >
            <span>Our Capabilities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.05]"
          >
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#fbbf24]">Prestige</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto"
          >
            From massive offset runs to bespoke luxury packaging, we provide end-to-end, world-class printed solutions.
          </motion.p>
        </div>
      </div>

      <ServicesGrid />

      <section className="py-32 bg-[#181316] relative" id="details">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-40">
            
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="offset-printing">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <img src="/images/printing_machine.png" alt="Offset Printing" className="relative rounded-[2.5rem] border border-white/10 w-full object-cover aspect-square shadow-2xl" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                  <span className="block text-[#ef4444] text-2xl tracking-widest uppercase mb-2 font-bold">01</span>
                  Offset Printing
                </h2>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-8">
                  Our core strength lies in ultra-precise, high-volume offset printing. Using state-of-the-art European machinery, we guarantee perfect CMYK color reproduction and impeccable consistency across thousands of copies.
                </p>
                <ul className="space-y-4 text-white/80 font-medium text-lg">
                  {[
                    "Corporate Brochures & Premium Catalogs",
                    "Coffee Table Books & Magazines",
                    "Mass Market Quality Flyers",
                    "Posters & Branded Calendars"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#ef4444]/10 flex items-center justify-center border border-[#ef4444]/20 text-[#ef4444]">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="labels">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                  <span className="block text-[#fbbf24] text-2xl tracking-widest uppercase mb-2 font-bold">02</span>
                  Labels & Stickers
                </h2>
                <p className="text-xl text-white/50 font-light leading-relaxed mb-8">
                  Enhance your product&apos;s shelf appeal with luxurious custom labels. We specialize in die-cut, roll, and sheet labels, elevated with cold foil, embossing, and spot UV finishes.
                </p>
                <ul className="space-y-4 text-white/80 font-medium text-lg">
                  {[
                    "Artisanal Product Packaging Labels",
                    "Ultra-Clear / Transparent Stickers",
                    "Foil-stamped Premium Beverage Labels",
                    "Highly Durable Weatherproof Vinyl"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#fbbf24]/10 flex items-center justify-center border border-[#fbbf24]/20 text-[#fbbf24]">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fbbf24]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <img src="/images/label_printing.png" alt="Labels and Stickers" className="relative rounded-[2.5rem] border border-white/10 w-full object-cover aspect-[4/3] shadow-2xl" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}