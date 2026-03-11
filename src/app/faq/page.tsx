"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your standard turnaround time for print orders?",
    answer: "For standard digital printing (business cards, flyers), our turnaround is typically 2-3 business days. For complex offset printing runs or custom packaging requiring structural design, die-cutting, and specialized finishes (foil, spot UV), it natively takes 7-14 business days following final digital proof approval.",
  },
  {
    question: "Do you have a Minimum Order Quantity (MOQ)?",
    answer: "Our Minimum Order Quantity varies by service. For short-run digital printing, we accept orders as small as 50 units. For premium custom packaging and complex offset printing, we highly recommend a minimum of 500-1000 units to guarantee maximum cost-effectiveness for your brand.",
  },
  {
    question: "Does HD Printing & Packaging offer pre-press structural or graphic design support?",
    answer: "Yes, absolutely. We command an elite in-house team of structural engineers and visual designers. From auditing and optimizing your existing artwork for print, to engineering completely custom 3D box dielines from scratch, our pre-press support is comprehensive.",
  },
  {
    question: "What specific file formats are required for high-end printing?",
    answer: "We strongly prefer print-ready PDF files with fonts outlined and high-resolution images embedded (minimum 300dpi). We also accept raw Adobe Illustrator (.ai), Photoshop (.psd), and InDesign packages. Ensure your document color mode is strictly set to CMYK for accurate color reproduction.",
  },
  {
    question: "Can I review a physical sample or mockup before mass production?",
    answer: "Yes. For large structural packaging or premium offset orders, we highly recommend reviewing a digital proof or an unprinted physical dummy (for structural integrity checks) prior to the full production run. Fully printed and enhanced physical prototypes can be requested for an additional sampling investment.",
  },
  {
    question: "How does HD Printing & Packaging handle delivery across Sri Lanka?",
    answer: "Within Colombo and its immediate suburbs, we operate our own trusted fleet for highly secure and prompt delivery. For comprehensive island-wide distribution across Sri Lanka, we have established partnerships with premium courier services to secure your printed assets in transit.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-0 bg-[#141214] min-h-screen relative overflow-hidden">
      {/* Cinematic ambient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#7f1d1d]/10 via-[#ef4444]/10 to-[#fbbf24]/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 mb-32 relative z-10 max-w-4xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mb-6 backdrop-blur-md"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Knowledge Base</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#fbbf24]">Questions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Clarity is crucial. Explore our detailed responses regarding technical print processes, packaging engineering, and production timelines.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#1f171b]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle inner top highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ef4444]/50 to-transparent" />
          
          <Accordion className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-white/5 bg-[#241b20] hover:bg-[#151515] transition-colors rounded-2xl px-6 data-[state=open]:bg-white/5 data-[state=open]:border-[#ef4444]/20"
              >
                <AccordionTrigger className="text-lg md:text-xl font-bold py-6 text-white hover:text-[#fbbf24] data-[state=open]:text-[#ef4444] transition-colors hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-base md:text-lg leading-relaxed pb-6 pt-0 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      <CTASection />
    </div>
  );
}