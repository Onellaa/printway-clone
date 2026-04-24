import Image from "next/image";
import { Customer } from "@/lib/customers";

type CustomerLogoCardProps = {
  customer: Customer;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-32 px-3 py-3.5 text-xs md:w-36",
  md: "w-36 px-3.5 py-4 text-sm md:w-40",
  lg: "w-40 px-4 py-4.5 text-sm md:w-48",
};

const logoWrapClasses = {
  sm: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]",
  md: "h-[4.5rem] w-[4.5rem] md:h-20 md:w-20",
  lg: "h-[5.5rem] w-[5.5rem] md:h-28 md:w-28",
};

export function CustomerLogoCard({
  customer,
  size = "md",
  className = "",
}: CustomerLogoCardProps) {
  return (
    <div
      className={`flex flex-col items-center rounded-[1.5rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,235,239,0.94))] text-center shadow-[0_24px_55px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-transform duration-300 ${sizeClasses[size]} ${className}`}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-[#ead6dc] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ${logoWrapClasses[size]}`}
      >
        {customer.logoSrc ? (
          <Image
            src={customer.logoSrc}
            alt={customer.name}
            width={120}
            height={120}
            className="h-auto max-h-[76%] w-auto max-w-[76%] object-contain"
          />
        ) : (
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#8f2744]">
            Logo
          </span>
        )}
      </div>

      <span className="mt-3.5 max-w-full text-balance text-[0.95em] font-semibold leading-tight text-[#3a262d] md:text-[1em]">
        {customer.name}
      </span>
    </div>
  );
}
