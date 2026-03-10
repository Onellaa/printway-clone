"use client";

import { motion } from "framer-motion";
import { Package, Layers, Image as ImageIcon, Briefcase, Stamp, Tag, Printer, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    title: "Commercial Offset Printing",
    description: "High-volume, superior quality printing for brochures, flyers, catalogs, and books with precise color matching.",
    icon: <Layers className="text-[#00AEEF] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#offset",
    bgAccent: "from-[#00AEEF]/20 to-transparent",
    image: "/images/offset_bg.png" // placeholder for any background abstract
  },
  {
    title: "Custom Packaging",
    description: "Bespoke structural design and printing for retail, cosmetic, food, and premium product boxes.",
    icon: <Package className="text-[#EC008C] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/packaging",
    bgAccent: "from-[#EC008C]/20 to-transparent",
    image: "/images/packaging_bg.png"
  },
  {
    title: "Labels & Stickers",
    description: "Durable, high-quality product labels with premium finishes like foil stamping and embossing.",
    icon: <Tag className="text-[#FFF200] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#labels",
    bgAccent: "from-[#FFF200]/20 to-transparent",
    image: "/images/labels_bg.png"
  },
  {
    title: "Digital Printing",
    description: "Fast turnaround printing for short runs, business cards, menus, and personalized materials.",
    icon: <Printer className="text-white relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#digital",
    bgAccent: "from-white/20 to-transparent",
    image: "/images/digital_bg.png"
  },
  {
    title: "Branding Materials",
    description: "Letterheads, envelopes, presentation folders, and corporate identity stationery.",
    icon: <Briefcase className="text-[#00AEEF] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#branding",
    bgAccent: "from-[#00AEEF]/20 to-transparent",
    image: "/images/branding_bg.png"
  },
  {
    title: "Large Format Printing",
    description: "High-resolution banners, posters, hoardings, and indoor/outdoor signage solutions.",
    icon: <ImageIcon className="text-[#EC008C] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#large-format",
    bgAccent: "from-[#EC008C]/20 to-transparent",
    image: "/images/largeformat_bg.png"
  },
];

const TiltCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Decrease the multiplier for a more subtle effect
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <Link href={service.href} className="block w-full h-full cursor-pointer group">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
          className="relative h-full border border-white/5 bg-[#0a0a0a] rounded-[2rem] overflow-hidden p-8 flex flex-col items-start gap-6 transform-gpu shadow-xl"
        >
          {/* Animated Background Gradients & Effects */}
          <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl ${service.bgAccent} rounded-full mix-blend-screen filter blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

          {/* Icon Container */}
          <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl z-20 group-hover:bg-white/10 group-hover:scale-105">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgAccent} opacity-20`} />
            {service.icon}
          </div>

          <div className="relative z-20 flex-1 flex flex-col mt-4">
            <h3 className="text-2xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300 flex-1">
              {service.description}
            </p>
          </div>

          {/* Call to action arrow */}
          <div className="relative z-20 mt-6 overflow-hidden flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </div>

          {/* Shimmer effect on hover */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export function ServicesGrid() {
  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none border-t border-white/5" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#00AEEF] mb-6 backdrop-blur-md"
          >
            <span>Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white"
          >
            Capabilities That <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/10">Defy Limits</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed"
          >
            We provide end-to-end premium print and packaging solutions, engineered exactly to elevate your brand prestige in the market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
