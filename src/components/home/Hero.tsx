"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-[#141214]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/v11.mp4"
          className="object-cover w-full h-full opacity-60"
        >
          {/* A generic tech/abstract placeholder video, but suggest replacing with actual print video */}
          <source src="/images/v11.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlays for readability and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* CMYK Accent Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8f2744] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6f102f] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse-slow delay-1000" />
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c08a98] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c08a98]"></span>
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#fbbf24] animate-gradient-x">
              Impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light"
          >
            We don&apos;t just print boxes and labels; we architect brand
            experiences. Industry-leading offset and digital printing for Sri
            Lanka&apos;s finest brands.
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
                className="group w-full sm:w-auto text-base font-semibold h-14 px-8 text-white bg-gradient-to-r from-[#5d1515] via-[#ff4040] to-[#f8b91b] bg-[length:150%_150%] animate-gradient-x hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.35)]"
              >
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="relative hidden flex-1 lg:flex items-center justify-center"
        >
          <div className="relative h-[560px] w-full max-w-[520px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border border-dashed border-[#ef4444]/20"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-10 w-[220px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <Image
                  src="/images/packaging_boxes.png"
                  alt="Packaging sample"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 top-24 w-[210px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <Image
                  src="/images/label_printing.png"
                  alt="Label sample"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-1/2 w-[250px] -translate-x-1/2"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <Image
                  src="/images/l1.png"
                  alt="Printing sample"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-14 top-8 h-6 w-6 rounded-full bg-[#ef4444] shadow-[0_0_28px_rgba(239,68,68,0.8)]"
            />
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 bottom-28 h-4 w-4 rounded-full bg-[#fbbf24] shadow-[0_0_24px_rgba(251,191,36,0.75)]"
            />
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-24 right-0 h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            />
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
