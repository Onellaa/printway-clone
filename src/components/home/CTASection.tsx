"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-black/80 group"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            {/* <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full opacity-40 group-hover:opacity-50 transition-opacity duration-1000 group-hover:scale-105"
            >
              <source src="/images/v1.mp4" type="video/mp4" />
            </video> */}

            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full group-hover:opacity-90 transition-opacity duration-1000 group-hover:scale-105"
            >
              <source src="/images/v1.mp4" type="video/mp4" />
            </video>

            {/* Color Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00AEEF] mix-blend-screen opacity-20 blur-[100px] z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC008C] mix-blend-screen opacity-20 blur-[100px] z-10 animate-pulse delay-1000" />
          </div>

          <div className="relative z-20 p-12 md:p-24 w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-1 max-w-2xl text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[#FFF200] shadow-[0_0_15px_rgba(255,242,0,0.2)]">
                Start Your Project
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] text-white">
                Ready to Print <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                  Perfection?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 mb-0 font-light max-w-xl">
                Elevate your brand with award-winning offset and custom
                packaging solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row shrink-0 gap-4 mt-8 md:mt-0 w-full md:w-auto">
              <Link
                href="/quote"
                className="w-full sm:w-auto relative group/btn"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-16 px-8 text-lg font-bold bg-[#0a0a0a] text-white border border-white/20 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  Request a Quote
                  <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-16 px-8 text-lg font-bold border-white/10 hover:bg-white/5 text-white bg-white/5 backdrop-blur-md rounded-full transition-colors duration-300"
                >
                  <MessageSquare className="mr-3 w-5 h-5 opacity-70" />
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
