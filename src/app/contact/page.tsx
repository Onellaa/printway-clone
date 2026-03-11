"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-32 pb-24 bg-[#141214] min-h-screen relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#ef4444]/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#fbbf24]/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mb-8 backdrop-blur-md"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
          >
            Let&apos;s create something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#fbbf24]">
              extraordinary.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Whether it&apos;s a massive offset run or bespoke luxury packaging,
            our print masters are here to guide you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Information Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="group flex gap-6 p-8 rounded-3xl bg-[#1f171b] border border-white/5 hover:bg-white/5 hover:border-[#ef4444]/20 transition-all duration-500 text-left"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ef4444] to-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Our Print House
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  238/10, Samagi Mawatha,
                  <br />
                  Hirana,
                  <br />
                  Panadura
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group flex gap-6 p-8 rounded-3xl bg-[#1f171b] border border-white/5 hover:bg-white/5 hover:border-[#ef4444]/20 transition-all duration-500 text-left"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7f1d1d] to-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Reach Us</h3>
                <p className="text-white/60 leading-relaxed mb-3 group-hover:text-white/80 transition-colors">
                  Main: +94 11 296 8326
                  <br />
                  Sales: +94 76 252 4819
                </p>
                <a
                  href="https://wa.me/94762524819"
                  className="text-sm font-bold text-[#fbbf24] uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1 group/link"
                >
                  Chat on WhatsApp{" "}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group flex gap-6 p-8 rounded-3xl bg-[#1f171b] border border-white/5 hover:bg-white/5 hover:border-[#ef4444]/20 transition-all duration-500 text-left"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fbbf24] to-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.3)] text-black">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Digital Mail
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  info@ranpa.lk
                  <br />
                  quotes@ranpa.lk
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#181316] border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#ef4444]/10 to-transparent rounded-full blur-[60px] pointer-events-none" />

              <h2 className="text-3xl font-bold mb-8 text-white">
                Send a Direct Message
              </h2>

              <form action={formAction} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-white/70 ml-1">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="bg-[#241b20] border-white/10 focus-visible:ring-[#ef4444] h-14 rounded-xl px-5 text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-white/70 ml-1">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="bg-[#241b20] border-white/10 focus-visible:ring-[#ef4444] h-14 rounded-xl px-5 text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-white/70 ml-1">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="bg-[#241b20] border-white/10 focus-visible:ring-[#ef4444] h-14 rounded-xl px-5 text-lg"
                    placeholder="+94 77 XXXXXXX"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-white/70 ml-1">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="bg-[#241b20] border-white/10 focus-visible:ring-[#ef4444] min-h-[160px] rounded-xl p-5 text-lg resize-y"
                    placeholder="Tell us how we can assist you with your print project..."
                  />
                </div>

                <Button
                  disabled={isPending}
                  className="w-full h-16 text-lg font-bold bg-[#7f1d1d] text-white hover:bg-[#ef4444] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.28)] rounded-xl mt-4 group"
                >
                  {isPending ? "Sending Pulse..." : "Transmit Message"}
                  {!isPending && (
                    <Send className="ml-3 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>

                {state?.success && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm font-medium mt-4 text-center bg-green-400/10 py-3 rounded-lg border border-green-400/20"
                  >
                    Message received loud and clear. We&apos;ll be in touch.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}