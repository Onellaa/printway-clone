// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useRef } from "react";
// import { ArrowRight } from "lucide-react";

// const portfolioItems = [
//   {
//     title: "Eco-Luxe Cosmetics",
//     category: "Sustainable Packaging",
//     image: "/images/packaging_boxes.png",
//     description: "Premium biodegradable packaging made with sustainable materials and soy-based inks.",
//     color: "from-[#8f2744]/20 to-transparent",
//   },
//   {
//     title: "Aura Corporate Identity",
//     category: "Branding & Stationery",
//     image: "/images/branding_visuals.png",
//     description: "Complete corporate identity suite including embossed letterheads and soft-touch business cards.",
//     color: "from-[#6f102f]/20 to-transparent",
//   },
//   {
//     title: "Botanica Artisanal Spirits",
//     category: "Foil-Stamped Labels",
//     image: "/images/label_printing.png",
//     description: "Textured estate paper labels featuring complex multi-layered hot foil stamping.",
//     color: "from-[#c08a98]/20 to-transparent",
//   },
//   {
//     title: "Gourmet Confections",
//     category: "Custom Box Design",
//     image: "/images/packaging_boxes.png",
//     description: "Rigid box manufacturing with custom die-cut inserts and magnetic closures.",
//     color: "from-[#8f2744]/20 to-transparent",
//   },
// ];

// export function FeaturedPortfolio() {
//   const targetRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-[#141214]">
//       <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
//         <div className="container mx-auto px-4 md:px-6 mb-10 w-full shrink-0 flex flex-col md:flex-row items-end justify-between gap-6 z-10">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#c08a98] mb-6 backdrop-blur-md"
//             >
//               <span>Our Masterpieces</span>
//             </motion.div>
            
//             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
//               Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Projects</span>
//             </h2>
//             <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl">
//               Scroll to explore a curated selection of our finest printing and packaging marvels.
//             </p>
//           </div>
          
//           <Link href="/portfolio" className="shrink-0 mb-4 hidden md:block">
//             <Button size="lg" className="group rounded-full bg-[#6f102f] text-white hover:bg-[#8f2744] font-semibold px-8 h-14">
//               View Entire Gallery
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </div>

//         <motion.div style={{ x }} className="flex gap-8 px-4 md:px-6 w-[300vw] lg:w-[200vw]">
//           {portfolioItems.map((item, index) => (
//             <div
//               key={index}
//               className="group relative w-[85vw] sm:w-[500px] lg:w-[700px] rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-[#181316] border border-white/10 shrink-0"
//             >
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />
              
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
//               />
              
//               {/* Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
//               <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none`} />

//               {/* Content box */}
//               <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end p-8 md:p-12">
//                 <div className="overflow-hidden mb-3">
//                   <span className="block text-sm font-bold tracking-[0.2em] text-white/50 uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                     {item.category}
//                   </span>
//                 </div>
                
//                 <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
//                   {item.title}
//                 </h3>
                
//                 <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
//                   <p className="text-white/70 text-lg line-clamp-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           {/* Final Call to Action Card in the scroll */}
//           <div className="group relative w-[85vw] sm:w-[400px] lg:w-[500px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#181316] to-[#241b20] border border-white/10 shrink-0 flex flex-col items-center justify-center text-center p-12">
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#8f2744]/10 via-[#6f102f]/10 to-[#c08a98]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
//             <h3 className="text-3xl font-bold text-white mb-6 relative z-10">See What Else We Conceived</h3>
//             <Link href="/portfolio" className="relative z-10">
//               <Button size="lg" className="rounded-full bg-[#6f102f] text-white hover:bg-[#8f2744] hover:scale-105 transition-all w-16 h-16 p-0 flex items-center justify-center shadow-[0_0_30px_rgba(111,16,47,0.28)]">
//                 <ArrowRight className="w-8 h-8" />
//               </Button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Eco-Luxe Cosmetics",
    category: "Sustainable Packaging",
    image: "/images/b1.png",
    description: "Premium biodegradable packaging made with sustainable materials and soy-based inks.",
    color: "from-[#7f1d1d]/25 to-transparent",
  },
  {
    title: "Aura Corporate Identity",
    category: "Branding & Stationery",
    image: "/images/branding_visuals.png",
    description: "Complete corporate identity suite including embossed letterheads and soft-touch business cards.",
    color: "from-[#ef4444]/20 to-transparent",
  },
  {
    title: "Botanica Artisanal Spirits",
    category: "Foil-Stamped Labels",
    image: "/images/label_printing.png",
    description: "Textured estate paper labels featuring complex multi-layered hot foil stamping.",
    color: "from-[#fbbf24]/20 to-transparent",
  },
  {
    title: "Gourmet Confections",
    category: "Custom Box Design",
    image: "/images/b1.png",
    description: "Rigid box manufacturing with custom die-cut inserts and magnetic closures.",
    color: "from-[#7f1d1d]/25 to-transparent",
  },
];

export function FeaturedPortfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#141214]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-4 md:px-6 mb-10 w-full shrink-0 flex flex-col md:flex-row items-end justify-between gap-6 z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] font-bold text-[#fbbf24] mt-10 mb-6 backdrop-blur-md"
            >
              <span>Our Masterpieces</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#fbbf24]">Projects</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl">
              Scroll to explore a curated selection of our finest printing and packaging marvels.
            </p>
          </div>
          
          <Link href="/portfolio" className="shrink-0 mb-4 hidden md:block">
            <Button size="lg" className="group rounded-full bg-[#7f1d1d] text-white hover:bg-[#ef4444] font-semibold px-8 h-14 shadow-[0_0_30px_rgba(239,68,68,0.22)]">
              View Entire Gallery
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-6 w-[300vw] lg:w-[200vw]">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative w-[85vw] sm:w-[500px] lg:w-[700px] rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-[#181316] border border-white/10 hover:border-[#ef4444]/30 shrink-0 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />
              
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none`} />

              {/* Content box */}
              <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end p-8 md:p-12">
                <div className="overflow-hidden mb-3">
                  <span className="block text-sm font-bold tracking-[0.2em] text-[#fbbf24] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                  {item.title}
                </h3>
                
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-white/70 text-lg line-clamp-2 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Final Call to Action Card in the scroll */}
          <div className="group relative w-[85vw] sm:w-[400px] lg:w-[500px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#181316] to-[#241b20] border border-white/10 hover:border-[#fbbf24]/30 shrink-0 flex flex-col items-center justify-center text-center p-12 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f1d1d]/10 via-[#ef4444]/10 to-[#fbbf24]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">See What Else We Conceived</h3>
            <Link href="/portfolio" className="relative z-10">
              <Button size="lg" className="rounded-full bg-[#7f1d1d] text-white hover:bg-[#ef4444] hover:scale-105 transition-all w-16 h-16 p-0 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.28)]">
                <ArrowRight className="w-8 h-8" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}