import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  stacked?: boolean;
};

export function BrandLogo({
  className,
  iconClassName,
  textClassName,
  stacked = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        stacked && "flex-col items-start gap-2",
        className
      )}
    >
      <Image
        src="/images/Logo.png"
        alt="HD Printing & Packaging Logo"
        width={140}
        height={60}
        className={cn("h-12 w-auto shrink-0", iconClassName)}
      />

      <div className={cn("leading-none", textClassName)}>
        <p className="text-lg font-black tracking-tight text-white md:text-xl">
          HD Printing &amp; Packaging
        </p>
      </div>
    </div>
  );
}