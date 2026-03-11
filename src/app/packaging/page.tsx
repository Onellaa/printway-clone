"use client";

import { motion } from "framer-motion";
import { Check, Package, Sparkles, Box } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

export default function PackagingPage() {
  return (
    <div className="pt-32 pb-0 bg-[#141214] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mb-8 backdrop-blur-md">
              <Package className="w-3 h-3" />
              <span>Bespoke Solutions</span>
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.05]">
              Custom Box <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#fbbf24]">Packaging</span>
            </h1>
            
            <p className="text-xl text-white/50 font-light leading-relaxed mb-10 max-w-xl">
              Your packaging is the first physical interaction a customer has with your brand. We engineer structurally sound, visually stunning bespoke boxes that protect your product and elevate your brand&apos;s prestige.
            </p>
            
            <div className="space-y-5">
              {[
                "Cosmetic & Skincare Packaging",
                "Gourmet Food & Beverage Boxes",
                "High-End Luxury Rigid Boxes",
                "Branded Corrugated Mailer Boxes",
                "Custom Engineered Inserts & Sleeves"
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-4 text-lg font-medium text-white/80"
                >
                  <div className="w-8 h-8 rounded-full bg-[#ef4444]/10 flex items-center justify-center shrink-0 border border-[#ef4444]/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <Check size={14} className="text-[#ef4444]" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative perspective-1000"
          >
            {/* Ambient glows behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#ef4444]/30 via-[#fbbf24]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
            
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl z-10 transform-gpu transition-all duration-700 hover:scale-[1.02] hover:shadow-[#ef4444]/20 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
              <img src="/images/packaging_boxes.png" alt="Premium Packaging Boxes" className="w-full h-auto object-cover aspect-[4/5] md:aspect-square filter brightness-110 contrast-125" />
              
              {/* Highlight sweep */}
              <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out z-20 pointer-events-none -rotate-45" />
            </div>
            
            {/* Floating indicator badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl z-30"
            >
              <div className="flex items-center gap-4">
                <Box className="w-10 h-10 text-[#fbbf24]" />
                <div>
                  <p className="text-white font-bold text-lg leading-tight">100% Custom</p>
                  <p className="text-white/50 text-sm">Structural Design</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Finishes Section */}
      <section className="py-32 relative overflow-hidden bg-[#181316] border-y border-white/5">
        {/* Abstract background */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ef4444]/50 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3" />
              <span>The Details Matter</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white"
            >
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#fbbf24]">Finishes</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Make your custom packaging demand attention on the retail shelf with our specialized high-end post-press enhancements.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 cursor-default">
            {[
              { title: "Hot Foil Stamping", desc: "Add luxurious metallic gold, silver, rose-gold, or holographic accents to critical typography and logos.", color: "group-hover:text-[#fbbf24]" },
              { title: "Embossing & Debossing", desc: "Create a highly engaging tactile 3D effect that customers can physically feel when they touch your product.", color: "group-hover:text-[#ef4444]" },
              { title: "Spot UV Coating", desc: "Highlight specific design elements with a high-gloss, raised finish that pops vividly against a matte background.", color: "group-hover:text-[#f87171]" },
              { title: "Soft Touch Lamination", desc: "Cover your rigid boxes in a smooth, velvety premium feel that instantly signifies extreme luxury and quality.", color: "group-hover:text-white" },
            ].map((finish, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-[#1f171b] border border-white/5 p-10 md:p-12 rounded-[2rem] hover:bg-white/5 hover:border-[#ef4444]/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Number mark */}
               <div className="absolute top-6 right-8 text-6xl font-black text-[#fbbf24]/20 group-hover:text-[#ef4444]/30 transition-colors duration-500 pointer-events-none">
  0{i + 1}
</div>
                
                <h3 className={`text-2xl font-bold mb-4 text-white transition-colors duration-500 relative z-10 ${finish.color}`}>
                  {finish.title}
                </h3>
                
                <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-500 relative z-10">
                  {finish.desc}
                </p>
                
                {/* Subtle gradient underneath */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-50 z-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}