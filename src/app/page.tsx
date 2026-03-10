import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <ProcessSection />
      <FeaturedPortfolio />
      <Testimonials />
      <CTASection />
    </div>
  );
}
