"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTASection } from "@/components/home/CTASection";
import { ExternalLink, Search } from "lucide-react";

const categories = ["All Work", "Packaging", "Stickers & Labels", "Branding", "Offset Printing"];

const portfolioData = [
  { id: 1, title: "Luxe Skincare Box", category: "Packaging", image: "/images/packaging_boxes.png", color: "from-[#EC008C]" },
  { id: 2, title: "Corporate Brochure", category: "Offset Printing", image: "/images/printing_machine.png", color: "from-[#00AEEF]" },
  { id: 3, title: "Premium Foil Labels", category: "Stickers & Labels", image: "/images/label_printing.png", color: "from-[#FFF200]" },
  { id: 4, title: "Aurélia Botanicals", category: "Stickers & Labels", image: "/images/label_printing.png", color: "from-[#FFF200]" },
  { id: 5, title: "Aurora Financial Identity", category: "Branding", image: "/images/branding_visuals.png", color: "from-[#EC008C]" },
  { id: 6, title: "Artisan Chocolate Packaging", category: "Packaging", image: "/images/packaging_boxes.png", color: "from-[#00AEEF]" },
  { id: 7, title: "Tech Hardware Sleeves", category: "Packaging", image: "/images/packaging_boxes.png", color: "from-[#EC008C]" },
  { id: 8, title: "Real Estate Portfolios", category: "Offset Printing", image: "/images/printing_machine.png", color: "from-[#00AEEF]" },
  { id: 9, title: "Brewery Can Labels", category: "Stickers & Labels", image: "/images/label_printing.png", color: "from-[#FFF200]" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredData = activeCategory === "All Work" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-0 bg-[#020202] min-h-screen">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[#00AEEF]/10 via-[#EC008C]/10 to-[#FFF200]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#FFF200] mb-8 backdrop-blur-md"
          >
            <Search className="w-3 h-3" />
            <span>Our Masterpieces</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.05]"
          >
            The Print <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/10">Archive</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto"
          >
            A curated exposition of our finest commercial printing and custom packaging accomplishments.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-32 relative z-10">
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105" 
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10 backdrop-blur-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry / Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl ${
                  i % 3 === 0 ? "md:col-span-2 lg:col-span-1 aspect-[4/3] lg:aspect-[3/4]" : "aspect-[4/3] lg:aspect-square"
                }`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700 z-10" />
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Advanced Gradients */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 mix-blend-screen pointer-events-none`} />

                <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 md:p-10">
                  <div className="overflow-hidden mb-3">
                    <span className="block text-xs font-bold tracking-[0.3em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out text-white/50">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out max-w-[80%]">
                      {item.title}
                    </h3>
                    
                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out hover:bg-white hover:text-black">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-32 text-white/40 text-xl font-light">
            No projects found in this category.
          </div>
        )}
      </div>

      <CTASection />
    </div>
  );
}
