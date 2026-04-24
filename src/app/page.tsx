import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTASection } from "@/components/home/CTASection";
import { PrecisionShowcase } from "@/components/home/PrecisionShowcase";
import { MotionPanels } from "@/components/home/MotionPanels";
import { CustomersPreview } from "@/components/customers/CustomersPreview";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <PrecisionShowcase />
      <ServicesGrid />
      <MotionPanels />
      <CustomersPreview preview />
      <CTASection />
    </div>
  );
}
