"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const visualCards = [
  {
    title: "Offset",
    image: "/images/printing_machine.png",
    className: "col-span-2 row-span-2",
  },
  {
    title: "Labels",
    image: "/images/label_printing.png",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Packaging",
    image: "/images/packaging_boxes.png",
    className: "col-span-1 row-span-1",
  },
];

const statOrbs = [
  { value: "Quality", label: "Offset Printing", position: "top-6 right-8" },
  { value: "CMYK", label: "Color Precision", position: "bottom-10 left-0" },
  { value: "HD", label: "Premium Finish", position: "bottom-0 right-14" },
];

export function PrecisionShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#120f10] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,29,29,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.16),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none [mask-image:radial-gradient(circle_at_center,#000_55%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto grid grid-cols-1 gap-14 px-4 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid auto-rows-[180px] grid-cols-2 gap-5 md:auto-rows-[220px]"
        >
          {visualCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -8, rotate: index === 0 ? -1.5 : 1.5 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${card.className}`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                  {card.title}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#ef4444] shadow-[0_0_18px_rgba(239,68,68,0.8)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#fbbf24] backdrop-blur-md">
            Visual Precision
          </div>
          <h2 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Built to feel premium before a single word is read.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            A sharper, more visual homepage that shows production quality,
            material finish, and scale through motion rather than long blocks of copy.
          </p>

          <div className="relative mt-10 h-[360px]">
            <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_62%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-[#ef4444]/25"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-14 rounded-full border border-dashed border-[#fbbf24]/15"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-white/10 bg-[#171214]/80 px-10 py-10 text-center shadow-[0_0_60px_rgba(127,29,29,0.22)] backdrop-blur-xl">
                <div className="text-sm uppercase tracking-[0.35em] text-white/40">
                  Studio Motion
                </div>
                <div className="mt-3 bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#fbbf24] bg-clip-text text-5xl font-black text-transparent">
                  HD
                </div>
              </div>
            </div>

            {statOrbs.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  delay: 0.25 + index * 0.12,
                  y: {
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    type: "spring",
                    stiffness: 130,
                  },
                  opacity: {
                    duration: 0.35,
                  },
                }}
                className={`absolute ${item.position} rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md`}
              >
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
