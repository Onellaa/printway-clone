"use client";

import { motion } from "framer-motion";
import {
  Package,
  Layers,
  Image as ImageIcon,
  Briefcase,
  Tag,
  Printer,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    title: "Commercial Offset Printing",
    description:
      "High-volume, superior quality printing for brochures, flyers, catalogs, and books with precise color matching.",
    icon: <Layers className="text-[#ef4444] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#offset",
    bgAccent: "from-[#7f1d1d]/30 via-[#ef4444]/20 to-[#fbbf24]/10",
  },
  {
    title: "Custom Packaging",
    description:
      "Bespoke structural design and printing for retail, cosmetic, food, and premium product boxes.",
    icon: <Package className="text-[#fbbf24] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/packaging",
    bgAccent: "from-[#ef4444]/25 via-[#7f1d1d]/20 to-[#fbbf24]/10",
  },
  {
    title: "Labels & Stickers",
    description:
      "Durable, high-quality product labels with premium finishes like foil stamping and embossing.",
    icon: <Tag className="text-[#fca5a5] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#labels",
    bgAccent: "from-[#7f1d1d]/25 via-[#ef4444]/15 to-[#fca5a5]/10",
  },
  {
    title: "Digital Printing",
    description:
      "Fast turnaround printing for short runs, business cards, menus, and personalized materials.",
    icon: <Printer className="text-white relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#digital",
    bgAccent: "from-[#fbbf24]/20 via-[#ef4444]/15 to-transparent",
  },
  {
    title: "Branding Materials",
    description:
      "Letterheads, envelopes, presentation folders, and corporate identity stationery.",
    icon: <Briefcase className="text-[#ef4444] relative z-20" size={40} strokeWidth={1.5} />,
    href: "/services#branding",
    bgAccent: "from-[#7f1d1d]/30 via-[#ef4444]/20 to-[#fbbf24]/10",
  },
  {
  title: "Printed Box Solutions",
  description:
    "Professional printed box solutions for shoe boxes, craft boxes, paint brush boxes, and other custom box types.",
  icon: <ImageIcon className="text-[#fbbf24] relative z-20" size={40} strokeWidth={1.5} />,
  href: "/services#printed-box-solutions",
  bgAccent: "from-[#ef4444]/25 via-[#7f1d1d]/20 to-[#fbbf24]/10",
},
];

type ServiceCard = (typeof services)[number];

const TiltCard = ({ service, index }: { service: ServiceCard; index: number }) => {
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

    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;

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
          className="relative h-full rounded-[2rem] overflow-hidden p-8 flex flex-col items-start gap-6 transform-gpu
                     border border-white/10 bg-white/[0.03] backdrop-blur-md
                     shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                     hover:border-[#ef4444]/30 hover:bg-white/[0.05] transition-all duration-500"
        >
          {/* subtle glow */}
          <div
            className={`absolute top-0 right-0 w-[280px] h-[280px] bg-gradient-to-bl ${service.bgAccent} rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10" />

          {/* icon */}
          <div className="relative z-20 w-20 h-20 rounded-2xl p-[1px] bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#fbbf24] shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <div className="w-full h-full rounded-2xl flex items-center justify-center bg-[#140f10] border border-white/5 group-hover:bg-[#1b1314] transition-all duration-500">
              {service.icon}
            </div>
          </div>

          <div className="relative z-20 flex-1 flex flex-col mt-2">
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-white/60 text-base leading-relaxed group-hover:text-white/75 transition-colors duration-300 flex-1">
              {service.description}
            </p>
          </div>

          <div className="relative z-20 mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#fbbf24] group-hover:text-white transition-colors duration-300">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 transform -translate-x-1 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-32 bg-black">
      {/* premium dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#ef4444]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fbbf24]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mb-6 backdrop-blur-md"
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
            Capabilities That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-[#f87171] to-[#fbbf24]">
              Defy Limits
            </span>
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