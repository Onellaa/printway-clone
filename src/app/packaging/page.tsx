"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Package, ShoppingBag, BriefcaseBusiness } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const packagingItems = [
  {
    name: "Any Type of Box Packaging",
    description: "Custom-made packaging boxes for retail products, gifts, shipping, and branded presentation needs.",
    image: "/images/packaging_boxes.png",
    icon: Box,
  },
  {
    name: "Shoe Boxes",
    description: "Clean and durable shoe box packaging built for display, storage, and transport.",
    image: "/images/l1.png",
    icon: Package,
  },
  {
    name: "Paint Brush Boxes",
    description: "Product boxes designed to protect paint brushes and support a neat retail shelf appearance.",
    image: "/images/p2.png",
    icon: BriefcaseBusiness,
  },
  {
    name: "Custom Product Boxes",
    description: "Flexible box packaging for cosmetics, tools, food items, accessories, and general merchandise.",
    image: "/images/c89.png",
    icon: Box,
  },
  {
    name: "Paper Bags",
    description: "Branded bags for shopping, events, giveaways, and carry packaging requirements.",
    image: "/images/p1.png",
    icon: ShoppingBag,
  },
  {
    name: "Retail Packaging Support",
    description: "Matching packaging items and finishing support for products that need a complete presentation set.",
    image: "/images/c10.png",
    icon: Package,
  },
];

export default function PackagingPage() {
  return (
    <div className="min-h-screen bg-[#141214] pb-0 pt-32">
      <div className="relative overflow-hidden border-b border-white/5 pb-18">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#ef4444]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#fbbf24]/8 blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#fbbf24] backdrop-blur-md">
              Packaging Services
            </div>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Box packaging solutions for different product types.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
              We provide packaging for shoe boxes, product boxes, bags, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03]"
          >
            <div className="relative aspect-[16/11]">
              <Image
                src="/images/packaging_boxes.png"
                alt="Packaging showcase"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-4 p-6 md:grid-cols-3">
              {["Custom Boxes", "Retail Finish", "Bag Packaging"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm font-semibold text-white/80 backdrop-blur-md"
                >
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="relative py-24">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ef4444] backdrop-blur-md">
                Box Types & Packaging
              </div>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                Packaging items we offer
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-white/55 md:text-right">
              Our packaging options.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packagingItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_18px_60px_rgba(0,0,0,0.34)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-black/30 p-3 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-[#ef4444]" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
