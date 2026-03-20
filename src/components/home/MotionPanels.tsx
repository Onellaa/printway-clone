"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const panels = [
  {
    title: "Packaging Boxes",
    image: "/images/packaging_boxes.png",
    accent: "from-[#7f1d1d] via-[#ef4444] to-[#fbbf24]",
  },
  {
    title: "Machine Finish",
    image: "/images/printing_machine.png",
    accent: "from-[#591926] via-[#ef4444] to-[#fca5a5]",
  },
  {
    title: "Label Detail",
    image: "/images/label_printing.png",
    accent: "from-[#7f1d1d] via-[#dc2626] to-[#fbbf24]",
  },
  {
    title: "Brand Assets",
    image: "/images/branding_visuals.png",
    accent: "from-[#3f1010] via-[#ef4444] to-[#fde68a]",
  },
];

export function MotionPanels() {
  return (
    <section className="relative overflow-hidden bg-[#161214] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,68,68,0.14),transparent_26%),radial-gradient(circle_at_80%_100%,rgba(251,191,36,0.08),transparent_24%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#ef4444] backdrop-blur-md">
              Motion Surfaces
            </div>
            <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Cleaner. More visual. Still unmistakably premium.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/50 md:text-right">
            Subtle movement, strong color control, and visual rhythm that keeps the page interesting without feeling noisy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${panel.accent}`} />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute -right-10 top-10 h-36 w-36 rounded-full bg-gradient-to-br ${panel.accent} opacity-25 blur-3xl`}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className={`h-[2px] w-10 bg-gradient-to-r ${panel.accent}`} />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    HD Printing
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{panel.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
