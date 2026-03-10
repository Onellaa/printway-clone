"use client";

import { useActionState } from "react";
import { submitQuote } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, UploadCloud, CheckCircle2 } from "lucide-react";

export default function QuotePage() {
  const [state, formAction, isPending] = useActionState(submitQuote, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message, {
        icon: <CheckCircle2 className="text-green-400" />,
        style: { background: "#050505", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }
      });
    } else if (state?.success === false) {
      toast.error(state.message);
    }
  }, [state]);

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-32 pb-24 bg-[#020202] min-h-screen relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#EC008C]/10 via-[#FFF200]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#00AEEF]/10 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#EC008C] mb-8 backdrop-blur-md"
          >
            <Calculator className="w-3 h-3" />
            <span>Comprehensive Pricing</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white"
          >
            Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC008C] to-[#FFF200]">Quote</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Detail your specifications below. Our estimators will engineer a tailored proposal optimizing cost without compromising prestige.
          </motion.p>
        </div>

        <motion.div 
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative"
        >
          {/* Subtle inner highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <form action={formAction} className="space-y-10">
            
            {/* Section 1 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white/70 ml-1">Full Name *</Label>
                  <Input type="text" id="name" name="name" required className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-white/70 ml-1">Company Name</Label>
                  <Input type="text" id="company" name="company" className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="Your Brand Ltd." />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white/70 ml-1">Email Address *</Label>
                  <Input type="email" id="email" name="email" required className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="john@company.com" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-white/70 ml-1">Phone Number *</Label>
                  <Input type="tel" id="phone" name="phone" required className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="+94 77 XXX XXXX" />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-2xl font-bold text-white">Project Specifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="service_type" className="text-white/70 ml-1">Primary Requirement *</Label>
                  <Select name="service_type" required>
                    <SelectTrigger className="bg-[#111] border-white/5 focus:border-white/20 h-14 rounded-xl px-5 text-lg text-white">
                      <SelectValue placeholder="Select service..." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/10 text-white">
                      <SelectItem value="Offset Printing">Commercial Offset Printing</SelectItem>
                      <SelectItem value="Digital Printing">Digital Short Run</SelectItem>
                      <SelectItem value="Custom Packaging">Custom Box Packaging</SelectItem>
                      <SelectItem value="Labels & Stickers">Premium Labels & Stickers</SelectItem>
                      <SelectItem value="Branding Materials">Corporate Stationery / Branding</SelectItem>
                      <SelectItem value="Large Format">Large Format / Signage</SelectItem>
                      <SelectItem value="Other">Custom / Multi-service project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="quantity" className="text-white/70 ml-1">Estimated Quantity</Label>
                  <Input type="number" id="quantity" name="quantity" min="1" className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="e.g. 5000" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="dimensions" className="text-white/70 ml-1">Dimensions / Open Size</Label>
                  <Input type="text" id="dimensions" name="dimensions" className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="e.g. A4, 10x10x5cm" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="material" className="text-white/70 ml-1">Preferred Stock / Material</Label>
                  <Input type="text" id="material" name="material" className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 h-14 rounded-xl px-5 text-lg" placeholder="e.g. 350gsm Artboard, Kraft" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-white/70 ml-1">Detailed Technical Specifications *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="bg-[#111] border-white/5 focus-visible:border-white/20 focus-visible:ring-0 min-h-[160px] rounded-xl p-5 text-lg resize-y" 
                  placeholder="Detail binding types, finishing needs (foil, spot UV, lamination), special die-cuts, timeline constraints..." 
                />
              </div>

              {/* Advanced Upload Area - Visual mockup behavior */}
              <div className="space-y-3">
                <Label htmlFor="file" className="text-white/70 ml-1">Artwork or Reference File</Label>
                <div className="relative group rounded-xl border-2 border-dashed border-white/10 hover:border-white/30 bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300">
                  <Input type="file" id="file" name="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                      <UploadCloud className="w-6 h-6 text-white/50 group-hover:text-white/80" />
                    </div>
                    <p className="text-base text-white/70 mb-1 font-medium">Click or drag file to upload</p>
                    <p className="text-sm text-white/40">PDF, AI, PSD, ZIP up to 25MB</p>
                  </div>
                </div>
              </div>
            </div>

            <Button disabled={isPending} className="w-full h-16 text-lg font-bold bg-[#EC008C] text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(236,0,140,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-xl mt-8 group flex items-center justify-center overflow-hidden relative">
              <span className="relative z-10 flex items-center">
                {isPending ? "Transmitting Requirements..." : "Submit Quote Request"}
                {!isPending && <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </span>
              
              {/* Shimmer effect inside button */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            </Button>
            
            {state?.success && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mt-6 flex flex-col items-center text-center gap-3"
              >
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <p className="text-green-400 text-lg font-medium">
                  Specifications received.
                </p>
                <p className="text-green-400/70 text-sm">
                  A print specialist will review your brief and contact you within 24 hours.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
