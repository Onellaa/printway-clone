import { CustomerLogoCard } from "@/components/customers/CustomerLogoCard";
import { customers, featuredCustomers, supportingCustomers } from "@/lib/customers";

export default function CustomersPage() {
  return (
    <div className="bg-[#141214] pt-28 text-white">
      <section className="relative overflow-hidden px-4 pb-14 pt-10 md:px-6 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,39,68,0.24),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(192,138,152,0.12),transparent_22%),linear-gradient(180deg,#141214_0%,#181316_100%)]" />

        <div className="container relative z-10 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[#c08a98]">
              Our Customers
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Trusted by Leading Brands
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              HD Printing &amp; Packaging supports established brands with
              precision printing, packaging production, and presentation quality
              built for retail shelves and large-scale distribution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {featuredCustomers.map((customer) => (
              <div
                key={customer.slug}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c08a98]">
                  Featured Client
                </p>
                <div className="mt-5 flex justify-center">
                  <CustomerLogoCard customer={customer} size="lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-24 pt-2 md:px-6">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c08a98]">
              Featured Brands
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Main customers with the strongest visual emphasis.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              These brands are highlighted throughout the orbit section and the
              home page preview to create a stronger trust signal at first glance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {featuredCustomers.map((customer) => (
                <div
                  key={customer.slug}
                  className="rounded-[1.75rem] border border-white/10 bg-[#1d171a] p-4"
                >
                  <CustomerLogoCard customer={customer} size="md" className="mx-auto" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c08a98]">
                  Extended Customer List
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight">
                  Additional brands in our customer network.
                </h2>
              </div>
              <p className="text-sm text-white/45">
                {customers.length} brands shown
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {supportingCustomers.map((customer) => (
                <div
                  key={customer.slug}
                  className="rounded-[1.75rem] border border-white/10 bg-[#1d171a] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
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
