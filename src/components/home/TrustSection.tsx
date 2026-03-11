// "use client";

// import { motion } from "framer-motion";
// import { CheckCircle2, Factory, Clock, Award } from "lucide-react";

// const trustFeatures = [
//   {
//     icon: <Factory size={28} className="text-[#8f2727]" />,
//     title: "State-of-the-art Machinery",
//     description: "Equipped with the latest Heidelberg and Komori presses.",
//   },
//   {
//     icon: <Clock size={28} className="text-[#6f1010]" />,
//     title: "Fast Turnaround",
//     description: "Reliable delivery schedules for urgent corporate needs.",
//   },
//   {
//     icon: <CheckCircle2 size={28} className="text-[#c08a8a]" />,
//     title: "Uncompromising Quality",
//     description: "Rigorous ISO-standard quality checks at every stage.",
//   },
//   {
//     icon: <Award size={28} className="text-white" />,
//     title: "Expert Craftsmanship",
//     description: "20+ years of industry experience across Sri Lanka.",
//   },
// ];

// export function TrustSection() {
//   return (
//     <section className="py-20 bg-[#1f171b] border-y border-white/5 relative overflow-hidden">
//       {/* Decorative gradient blur */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8f2744]/5 rounded-full blur-[100px] pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6f102f]/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="container relative z-10 mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {trustFeatures.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 10, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10"
//             >
//               <div className="shrink-0 rounded-xl bg-black/50 p-3 shadow-inner">
//                 {feature.icon}
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
//                 <p className="text-sm text-white/60 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, Clock, Award } from "lucide-react";

const trustFeatures = [
  {
    icon: <Factory size={28} className="text-[#f87171]" />,
    title: "State-of-the-art Machinery",
    description: "Equipped with the latest Heidelberg and Komori presses.",
  },
  {
    icon: <Clock size={28} className="text-[#fb7185]" />,
    title: "Fast Turnaround",
    description: "Reliable delivery schedules for urgent corporate needs.",
  },
  {
    icon: <CheckCircle2 size={28} className="text-[#fbbf24]" />,
    title: "Uncompromising Quality",
    description: "Rigorous ISO-standard quality checks at every stage.",
  },
  {
    icon: <Award size={28} className="text-[#fca5a5]" />,
    title: "Expert Craftsmanship",
    description: "20+ years of industry experience across Sri Lanka.",
  },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden py-20 border-y border-white/10 bg-black">
      {/* soft premium background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#140707] via-black to-[#1a0d0d]" />
      
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#ef4444]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#7f1d1d]/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-[#ef4444]/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="shrink-0 rounded-xl p-[1px] bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#fbbf24]">
                <div className="rounded-xl bg-black/80 p-3">
                  {feature.icon}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
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