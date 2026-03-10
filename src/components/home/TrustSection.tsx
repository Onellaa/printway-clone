"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, Clock, Award } from "lucide-react";

const trustFeatures = [
  {
    icon: <Factory size={28} className="text-[#00AEEF]" />,
    title: "State-of-the-art Machinery",
    description: "Equipped with the latest Heidelberg and Komori presses.",
  },
  {
    icon: <Clock size={28} className="text-[#EC008C]" />,
    title: "Fast Turnaround",
    description: "Reliable delivery schedules for urgent corporate needs.",
  },
  {
    icon: <CheckCircle2 size={28} className="text-[#FFF200]" />,
    title: "Uncompromising Quality",
    description: "Rigorous ISO-standard quality checks at every stage.",
  },
  {
    icon: <Award size={28} className="text-white" />,
    title: "Expert Craftsmanship",
    description: "20+ years of industry experience across Sri Lanka.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EC008C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="shrink-0 rounded-xl bg-black/50 p-3 shadow-inner">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
