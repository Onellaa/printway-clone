"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, MoveDown } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Consultation & Design",
    description: "Discuss material, sizing, and design requirements with our experts. We bridge the gap between creative vision and technical execution.",
    color: "text-[#00AEEF]",
    bgColor: "from-[#00AEEF]/20 to-transparent",
    align: "left",
  },
  {
    num: "02",
    title: "Pre-press & Proofing",
    description: "Digital proofs, color matching, and 3D mockups before mass production. We ensure every CMYK dot is exactly where it belongs.",
    color: "text-[#EC008C]",
    bgColor: "from-[#EC008C]/20 to-transparent",
    align: "right",
  },
  {
    num: "03",
    title: "Production & Finishing",
    description: "High-quality precision printing followed by luxury finishes—embossing, foil stamping, lamination, or complex die-cutting.",
    color: "text-[#FFF200]",
    bgColor: "from-[#FFF200]/20 to-transparent",
    align: "left",
  },
  {
    num: "04",
    title: "Quality Check & Delivery",
    description: "Stringent manual QC by print masters followed by securely packed, climate-controlled delivery to your doorstep anywhere in Sri Lanka.",
    color: "text-white",
    bgColor: "from-white/20 to-transparent",
    align: "right",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col flex-wrap lg:flex-nowrap lg:flex-row items-start justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#EC008C] mb-6 backdrop-blur-md"
            >
              <span>Our Methodology</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
              The Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Execution</span>
            </h2>
          </div>
          <p className="max-w-xl text-white/60 text-lg md:text-xl font-light leading-relaxed pt-2 lg:pt-16">
            A seamless, precision-driven process engineered to take your brand from a concept to a tangible, luxury reality quickly.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Central Timeline Line (Desktop View) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }} 
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#00AEEF] via-[#EC008C] to-[#FFF200] origin-top" 
            />
          </div>

          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center w-full ${step.align === 'right' ? 'lg:justify-end' : 'lg:justify-start'}`}>
                
                {/* Timeline node marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className={`w-6 h-6 rounded-full bg-black border-4 shadow-[0_0_20px_rgba(255,255,255,0.3)] ${index === 0 ? "border-[#00AEEF]" : index === 1 ? "border-[#EC008C]" : index === 2 ? "border-[#FFF200]" : "border-white"}`} 
                  />
                </div>

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative w-full lg:w-[45%] group ${step.align === 'right' ? 'lg:pl-12' : 'lg:pr-12'} mb-8 lg:mb-32 last:mb-0`}
                >
                  <div className="relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl">
                    {/* Animated background glow */}
                    <div className={`absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl ${step.bgColor} rounded-full mix-blend-screen filter blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                    
                    <div className="relative z-10 flex flex-col items-start">
                      <div className={`text-6xl md:text-8xl font-black opacity-10 mb-6 drop-shadow-2xl ${step.color} transition-all duration-300 group-hover:opacity-30 group-hover:translate-x-4`}>
                        {step.num}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/50 text-base md:text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Shimmer line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  </div>
                  
                  {/* Small connector line to the central timeline (Desktop) */}
                  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-white/10 ${step.align === 'left' ? 'right-0' : 'left-0'}`} />
                </motion.div>

                {/* Mobile downward arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center w-full my-6 text-white/20">
                    <MoveDown size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
