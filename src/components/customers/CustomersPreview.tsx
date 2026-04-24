import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CustomerOrbit } from "@/components/customers/CustomerOrbit";
import { CustomerLogoCard } from "@/components/customers/CustomerLogoCard";
import { featuredCustomers, supportingCustomers } from "@/lib/customers";

type CustomersPreviewProps = {
  preview?: boolean;
};

export function CustomersPreview({
  preview = false,
}: CustomersPreviewProps) {
  if (preview) {
    return (
      <section className="relative overflow-hidden bg-[#141214] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(143,39,68,0.22),transparent_26%),radial-gradient(circle_at_82%_20%,rgba(192,138,152,0.12),transparent_22%),linear-gradient(180deg,#141214_0%,#181316_100%)]" />
        <div className="absolute left-[12%] top-24 h-44 w-44 rounded-full bg-[#8f2744]/18 blur-[90px]" />
        <div className="absolute bottom-10 right-[10%] h-52 w-52 rounded-full bg-[#6f102f]/14 blur-[110px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#c08a98]">
                Trusted Clients
              </p>
              <h2 className="mt-5 max-w-xl text-balance text-4xl font-black tracking-tight md:text-5xl">
                Brands that trust us when the finish has to look right the first time.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              Some of our main clients who trust us for their printing work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Offset Printing", "Packaging Runs", "Retail Presentation"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/customers"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8f2744]/40 bg-[#20171b] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:border-[#c08a98] hover:text-[#f2d7de]"
                >
                  See More Customers
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/6 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_34%)]" />
              <div className="grid grid-cols-2 gap-4 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl md:gap-5 md:p-7">
                {featuredCustomers.map((customer, index) => (
                  <div
                    key={customer.slug}
                    className={`flex h-full flex-col rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3.5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:rounded-[2rem] md:p-4 ${
                      index === 0
                        ? "md:translate-y-3"
                        : index === 1
                          ? "md:-translate-y-2"
                          : index === 2
                            ? "md:translate-y-1"
                            : "md:-translate-y-4"
                    }`}
                    style={{
                      animationDelay: `${index * 0.4}s`,
                    }}
                  >
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c08a98] md:text-[11px] md:tracking-[0.24em]">
                      Featured Brand
                    </div>
                    <div
                      className="mx-auto animate-[customer-card-float_5.8s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * 0.45}s` }}
                    >
                      <CustomerLogoCard customer={customer} size="lg" className="mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const eyebrow = "Our Customers";
  const title = "A customer network that spans household names and high-volume brands.";
  const description =
    "From FMCG and paints to lifestyle and manufacturing, our work supports brands that need dependable quality in every run.";

  return (
    <section className="relative overflow-hidden bg-[#141214] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,39,68,0.22),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(192,138,152,0.12),transparent_22%),linear-gradient(180deg,#141214_0%,#181316_100%)]" />
      <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-[#8f2744]/18 blur-[90px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#c08a98]">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-8">
          <CustomerOrbit
            featuredCustomers={featuredCustomers}
            supportingCustomers={preview ? [] : supportingCustomers}
            preview={preview}
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/customers"
            className="inline-flex items-center gap-2 rounded-full border border-[#8f2744]/40 bg-[#20171b] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:border-[#c08a98] hover:text-[#f2d7de]"
          >
            See More Customers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
