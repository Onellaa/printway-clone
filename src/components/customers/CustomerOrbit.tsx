import { Customer } from "@/lib/customers";
import { CustomerLogoCard } from "@/components/customers/CustomerLogoCard";

type PositionedCustomer = {
  customer: Customer;
  top: string;
  left: string;
  size: "sm" | "md" | "lg";
};

type CustomerOrbitProps = {
  featuredCustomers: Customer[];
  supportingCustomers?: Customer[];
  preview?: boolean;
};

const featuredPositions = [
  { top: "18%", left: "50%", size: "lg" as const },
  { top: "48%", left: "76%", size: "lg" as const },
  { top: "79%", left: "50%", size: "lg" as const },
  { top: "48%", left: "24%", size: "lg" as const },
];

const supportingPositions = [
  { top: "6%", left: "33%", size: "sm" as const },
  { top: "10%", left: "67%", size: "sm" as const },
  { top: "24%", left: "86%", size: "sm" as const },
  { top: "39%", left: "93%", size: "md" as const },
  { top: "66%", left: "89%", size: "sm" as const },
  { top: "83%", left: "76%", size: "sm" as const },
  { top: "92%", left: "57%", size: "sm" as const },
  { top: "92%", left: "43%", size: "sm" as const },
  { top: "83%", left: "24%", size: "sm" as const },
  { top: "66%", left: "11%", size: "sm" as const },
  { top: "39%", left: "8%", size: "md" as const },
  { top: "24%", left: "14%", size: "sm" as const },
  { top: "13%", left: "21%", size: "sm" as const },
  { top: "53%", left: "6%", size: "sm" as const },
];

function buildPositionedCustomers(
  items: Customer[],
  positions: Array<{ top: string; left: string; size: "sm" | "md" | "lg" }>
): PositionedCustomer[] {
  return items.slice(0, positions.length).map((customer, index) => ({
    customer,
    ...positions[index],
  }));
}

export function CustomerOrbit({
  featuredCustomers,
  supportingCustomers = [],
  preview = false,
}: CustomerOrbitProps) {
  const featured = buildPositionedCustomers(featuredCustomers, featuredPositions);
  const supporting = preview
    ? []
    : buildPositionedCustomers(supportingCustomers, supportingPositions);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[920px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#181316] shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(143,39,68,0.24),transparent_26%),radial-gradient(circle_at_78%_20%,rgba(192,138,152,0.12),transparent_18%),radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_52%)]" />

      <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8f2744]/18" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8f2744]/20" />
      <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c08a98]/20" />

      {!preview && (
        <>
          <div className="absolute left-[16%] top-[18%] h-[26%] w-[26%] rounded-full border border-white/6" />
          <div className="absolute right-[12%] top-[16%] h-[30%] w-[30%] rounded-full border border-white/6" />
          <div className="absolute bottom-[11%] left-[22%] h-[24%] w-[24%] rounded-full border border-white/6" />
        </>
      )}

      <div className="absolute left-1/2 top-1/2 z-10 w-[34%] min-w-[180px] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full border border-white/12 bg-[#21191d]/85 px-6 py-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="mx-auto h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f7d7df,#8f2744_55%,#21191d)] shadow-[0_10px_35px_rgba(143,39,68,0.45)]" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c08a98]">
            Trusted Network
          </p>
          <h3 className="mt-2 text-balance text-lg font-black leading-tight text-white md:text-2xl">
            Our Trusted Customers
          </h3>
        </div>
      </div>

      {[...supporting, ...featured].map((item) => (
        <div
          key={item.customer.slug}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:z-20 hover:scale-105"
          style={{ top: item.top, left: item.left }}
        >
          <CustomerLogoCard customer={item.customer} size={item.size} />
        </div>
      ))}
    </div>
  );
}
