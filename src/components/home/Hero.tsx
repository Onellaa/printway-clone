"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/v1.mp4"
          className="object-cover w-full h-full opacity-60"
        >
          {/* A generic tech/abstract placeholder video, but suggest replacing with actual print video */}
          <source src="/images/v1.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlays for readability and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* CMYK Accent Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EC008C] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-32 pb-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left column: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF200] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFF200]"></span>
            </span>
            <span className="text-white/90 font-medium tracking-wide">
              Premier Printing & Packaging
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05]"
          >
            <span className="block text-white">Precision.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              Excellence.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-[#EC008C] to-[#FFF200] animate-gradient-x">
              Impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light"
          >
            We don't just print boxes and labels; we architect brand
            experiences. Industry-leading offset and digital printing for Sri
            Lanka's finest brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto text-base font-semibold h-14 px-8 bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto text-base font-semibold h-14 px-8 border-white/20 hover:bg-white/10 text-white rounded-full bg-black/20 backdrop-blur-md transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4 fill-white group-hover:scale-110 transition-transform" />
                View Showreel
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right column: Floating Glass Card (Optional Stats) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="hidden lg:flex flex-1 justify-end"
        >
          <div className="relative w-full max-w-sm">
            {/* Glassmorphism Card */}
            <div className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-4xl font-black text-white mb-1">15+</h3>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-semibold">
                    Years Experience
                  </p>
                </div>
                <div className="h-[1px] w-full bg-white/10" />
                <div>
                  <h3 className="text-4xl font-black text-white mb-1">10M+</h3>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-semibold">
                    Units Printed
                  </p>
                </div>
                <div className="h-[1px] w-full bg-white/10" />
                <div>
                  <h3 className="text-4xl font-black text-white mb-1">200+</h3>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-semibold">
                    Brand Partners
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background blur for card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] blur-xl opacity-50 z-0" />
          </div>
        </motion.div>
      </div>

      {/* Modern Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
