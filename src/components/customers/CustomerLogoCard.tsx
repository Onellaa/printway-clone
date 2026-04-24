import Image from "next/image";
import { Customer } from "@/lib/customers";

type CustomerLogoCardProps = {
  customer: Customer;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "min-h-[7.25rem] w-full max-w-[7rem] px-2.5 py-2.5 text-[11px] md:min-h-[9.25rem] md:max-w-none md:w-36 md:px-3 md:py-3.5 md:text-xs",
  md: "min-h-[8.25rem] w-full max-w-[8.5rem] px-3 py-3 text-[12px] md:min-h-[10.25rem] md:max-w-none md:w-40 md:px-3.5 md:py-4 md:text-sm",
  lg: "min-h-[9rem] w-full max-w-[9rem] px-3 py-3.5 text-[12px] md:min-h-[11.75rem] md:max-w-none md:w-48 md:px-4 md:py-4.5 md:text-sm",
};

const logoWrapClasses = {
  sm: "h-12 w-12 md:h-[4.5rem] md:w-[4.5rem]",
  md: "h-14 w-14 md:h-20 md:w-20",
  lg: "h-16 w-16 md:h-28 md:w-28",
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

      <span className="mt-2.5 max-w-full text-balance text-[0.92em] font-semibold leading-tight text-[#3a262d] md:mt-3.5 md:text-[1em]">
        {customer.name}
      </span>
    </div>
  );
}
