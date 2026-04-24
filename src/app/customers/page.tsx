import { CustomerLogoCard } from "@/components/customers/CustomerLogoCard";
import { customers, featuredCustomers, supportingCustomers } from "@/lib/customers";

export default function CustomersPage() {
  return (
    <div className="bg-[#141214] pt-24 text-white md:pt-28">
      <section className="relative overflow-hidden px-4 pb-10 pt-8 md:px-6 md:pb-20 md:pt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,39,68,0.24),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(192,138,152,0.12),transparent_22%),linear-gradient(180deg,#141214_0%,#181316_100%)]" />

        <div className="container relative z-10 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c08a98] md:text-sm md:tracking-[0.36em]">
              Our Clients
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black tracking-tight md:mt-6 md:text-6xl lg:text-7xl">
              Trusted by Leading Brands
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:mt-6 md:text-xl">
              HD Printing &amp; Packaging supports established brands with
              precision printing, packaging production, and presentation quality
              built for retail shelves and large-scale distribution.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
            {featuredCustomers.map((customer, index) => (
              <div
                key={customer.slug}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl animate-[customer-card-float_6.2s_ease-in-out_infinite] md:rounded-[2rem] md:p-6"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c08a98] md:text-xs md:tracking-[0.28em]">
                  Featured Client
                </p>
                <div className="mt-3 flex justify-center md:mt-5">
                  <CustomerLogoCard customer={customer} size="lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 pt-1 md:px-6 md:pb-24 md:pt-2">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl md:rounded-[2.5rem] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c08a98] md:text-sm md:tracking-[0.3em]">
              Featured Brands
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight md:mt-4 md:text-3xl">
              Main clients with the strongest visual emphasis.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 md:mt-4 md:text-base">
              These brands are highlighted throughout the orbit section and the
              home page preview to create a stronger trust signal at first glance.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4">
              {featuredCustomers.map((customer, index) => (
                <div
                  key={customer.slug}
                  className="rounded-[1.35rem] border border-white/10 bg-[#1d171a] p-3 animate-[customer-card-float_5.7s_ease-in-out_infinite] md:rounded-[1.75rem] md:p-4"
                  style={{ animationDelay: `${index * 0.28}s` }}
                >
                  <CustomerLogoCard customer={customer} size="md" className="mx-auto" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl md:rounded-[2.5rem] md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c08a98] md:text-sm md:tracking-[0.3em]">
                  Extended Client List
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight md:mt-4 md:text-3xl">
                  Additional brands in our client network.
                </h2>
              </div>
              <p className="text-xs text-white/45 md:text-sm">
                {customers.length} brands shown
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4 xl:grid-cols-4">
              {supportingCustomers.map((customer, index) => (
                <div
                  key={customer.slug}
                  className="rounded-[1.35rem] border border-white/10 bg-[#1d171a] p-3 shadow-[0_16px_32px_rgba(0,0,0,0.16)] animate-[customer-card-float_6.4s_ease-in-out_infinite] md:rounded-[1.75rem] md:p-4 md:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                  style={{ animationDelay: `${index * 0.14}s` }}
                >
                  <CustomerLogoCard customer={customer} size="md" className="mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
