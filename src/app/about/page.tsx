"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, Users, Zap } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0">
      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00AEEF] font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Pioneering Print Excellence in Sri Lanka</h1>
            <div className="space-y-6 text-lg text-white/70">
              <p>
                Founded with a vision to revolutionize the commercial printing landscape, Printway has grown to become Sri Lanka's most trusted name in premium printing and custom packaging solutions.
              </p>
              <p>
                From massive offset production runs to intricate, foil-stamped cosmetic packaging, our state-of-the-art facility is equipped to handle the most demanding creative requirements. We don't just print ink on paper; we craft tactile experiences that elevate your brand's physical presence.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="/images/printing_machine.png" 
              alt="Printway Factory" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex gap-6 items-center">
                <div className="text-[#00AEEF]">
                  <span className="block text-4xl font-black">20+</span>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Years Exp.</span>
                </div>
                <div className="w-[1px] h-12 bg-white/20" />
                <div className="text-[#EC008C]">
                  <span className="block text-4xl font-black">5K+</span>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Happy Clients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Award Winning Quality", desc: "Recognized for excellence in precision offset printing." },
              { icon: <ShieldCheck size={32} />, title: "ISO Certified Process", desc: "Strict quality control at every stage of production." },
              { icon: <Zap size={32} />, title: "Rapid Turnaround", desc: "Equipped to handle high-volume rush orders efficiently." },
              { icon: <Users size={32} />, title: "Dedicated Specialists", desc: "Expert pre-press and structural design teams." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-colors"
              >
                <div className="text-[#FFF200] mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
