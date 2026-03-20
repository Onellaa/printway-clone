"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Box, BriefcaseBusiness, BookOpenText, FileText, Package, ShoppingBag, Sticker, Newspaper } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const packagingServices = [
  {
    name: "Any Type of Box Packaging",
    description: "Custom box packaging solutions for retail, product display, gifting, shipping, and branded presentation.",
    image: "/images/packaging_boxes.png",
    icon: Box,
  },
  {
    name: "Shoe Boxes",
    description: "Durable and clean-finished shoe boxes designed for retail presentation and product protection.",
    image: "/images/l1.png",
    icon: Package,
  },
  {
    name: "Paint Brush Boxes",
    description: "Specialized boxes for paint brushes and hardware products with strong structure and shelf appeal.",
    image: "/images/p2.png",
    icon: BriefcaseBusiness,
  },
  {
    name: "Bags",
    description: "Paper and branded carry bag options for stores, promotions, events, and packaging support.",
    image: "/images/w1.png",
    icon: ShoppingBag,
  },
];

const printingServices = [
  {
    name: "Business Cards",
    description: "Professional business cards with clean printing, quality stock, and premium finishing options.",
    image: "/images/b1.png",
    icon: BriefcaseBusiness,
  },
  {
    name: "Leaflets",
    description: "Promotional leaflets for campaigns, launches, menus, and marketing handouts.",
    image: "/images/b3.png",
    icon: FileText,
  },
  {
    name: "Posters",
    description: "High-visibility posters for indoor and outdoor promotional use with sharp color reproduction.",
    image: "/images/b4.png",
    icon: FileText,
  },
  {
    name: "Stickers",
    description: "Custom stickers for product labeling, promotions, packaging, and branding applications.",
    image: "/images/s1.png",
    icon: Sticker,
  },
  {
    name: "Books",
    description: "Book printing for educational, commercial, and corporate projects with dependable finishing.",
    image: "/images/s2.png",
    icon: BookOpenText,
  },
  {
    name: "Magazines",
    description: "Magazine printing with crisp detail, smooth paper handling, and consistent large-run quality.",
    image: "/images/s3.png",
    icon: Newspaper,
  },
  {
    name: "Other Related Printing Items",
    description: "We also produce a wide range of custom printed materials based on client requirements.",
    image: "/images/branding_visuals.png",
    icon: FileText,
  },
];

type ServiceItem = {
  name: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
};

function ServiceGroup({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}) {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#fbbf24] backdrop-blur-md">
              {title}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/55 md:text-right">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
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
                <div className="relative  h-100 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-fill transition-transform duration-700 group-hover:scale-105"
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
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#141214] pb-0 pt-32">
      <div className="relative overflow-hidden border-b border-white/5 pb-16">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#ef4444]/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#fbbf24]/10 blur-[110px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#fbbf24] backdrop-blur-md"
          >
            Printing & Packaging Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black tracking-tight text-white md:text-7xl"
          >
            Clean, professional solutions for print and packaging needs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/55 md:text-xl"
          >
            We offer packaging services and printing services for boxes, business materials,
            promotional items, and other related custom print products.
          </motion.p>
        </div>
      </div>

      <ServiceGroup
        title="Packaging Services"
        subtitle="Box and bag packaging options grouped clearly for retail, product presentation, and protective packaging requirements."
        items={packagingServices}
      />

      <ServiceGroup
        title="Printing Services"
        subtitle="Printed materials for branding, promotion, publishing, and everyday business use."
        items={printingServices}
      />

      <CTASection />
    </div>
  );
}
