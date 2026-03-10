"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kasun Silva",
    company: "Tea Leaves Ceylon",
    role: "Marketing Director",
    text: "Printway elevated our packaging completely. Their premium foil stamping on our tea boxes increased our retail appeal immensely. Exceptional quality and fast delivery.",
  },
  {
    name: "Amandi Perera",
    company: "Luxe Cosmetics LK",
    role: "Founder",
    text: "We needed custom structural boxes for our fragile glass bottles. The team at Printway designed a secure yet elegant solution that our customers absolutely love.",
  },
  {
    name: "Dilshan Fernando",
    company: "TechHub Solutions",
    role: "CEO",
    text: "From our corporate brochures to business cards, Printway handles everything. Their offset printing is flawless, and the colors always match our brand guidelines.",
  },
  {
    name: "Nimesh Rajakaruna",
    company: "Aura Apparel",
    role: "Creative Head",
    text: "Their attention to detail with our clothing tags and branded tissue paper was incredible. They truly understand luxury print requirements.",
  },
  {
    name: "Shamali de Silva",
    company: "Gourmet Bakery",
    role: "Owner",
    text: "Our custom cake boxes not only look beautiful but hold up structurally, a rare combination. Printway's mockups before final printing gave me huge peace of mind.",
  },
];

export function Testimonials() {
  // Duplicate array for seamless infinite scrolling
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00AEEF]/5 via-[#EC008C]/5 to-[#FFF200]/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#FFF200] mb-6 backdrop-blur-md"
          >
            <span>Client Feedback</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Industry Leaders</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden flex z-10 before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#020202] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#020202] after:to-transparent after:z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4 w-max"
        >
          {scrollItems.map((testimonial, index) => (
            <div
              key={index}
              className="group relative w-[350px] md:w-[450px] bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 rounded-[2rem] p-8 md:p-10 shrink-0 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00AEEF]/5"
            >
              <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors w-16 h-16 transform group-hover:scale-110 duration-500" />
              
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#FFF200] text-[#FFF200] drop-shadow-[0_0_5px_rgba(255,242,0,0.5)]" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed mb-10 min-h-[140px] italic font-light relative z-10 group-hover:text-white transition-colors">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00AEEF] to-[#EC008C] p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center font-bold text-lg text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                  <p className="text-sm text-white/50">{testimonial.role}, <span className="text-[#EC008C] font-semibold">{testimonial.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
