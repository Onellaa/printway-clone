export type Customer = {
  name: string;
  slug: string;
  logoSrc?: string;
  featured?: boolean;
};

// Replace each `logoSrc` value with the real logo asset path when files are available.
// Example: logoSrc: "/images/customers/ranpa.png"
export const customers: Customer[] = [
  { name: "Ranpa", slug: "ranpa", logoSrc: "/images/ranpa.png", featured: true },
  { name: "Hayleys Aventura", slug: "hayleys-aventura", logoSrc: "/images/HayleysAventura.png" },
  { name: "Raigam", slug: "raigam", logoSrc: "/images/raigam.png", featured: true },
  { name: "Dreamlife Science", slug: "dreamlife-science", logoSrc: "/images/DreamLifeScience.png" },
  { name: "Shaw Wallace", slug: "shaw-wallace", logoSrc: "/images/ShawWallace.png", featured: true },
  { name: "Multilac", slug: "multilac", logoSrc: "/images/multilac.png", featured: true },
  { name: "Nippon Paints", slug: "nippon-paints", logoSrc: "/images/NipponPaint.png" },
  { name: "Sunshine Holdings", slug: "sunshine-holdings", logoSrc: "/images/SunshineHoldings.png" },
  { name: "Hemas", slug: "hemas", logoSrc: "/images/hemas.png" },
  { name: "Caltex", slug: "caltex", logoSrc: "/images/caltex.png" },
  { name: "Richlife Dairies", slug: "richlife-dairies", logoSrc: "/images/richlife.png" },
  { name: "Janet Lanka", slug: "janet-lanka", logoSrc: "/images/Janet1.png" },
  { name: "Spa Ceylon", slug: "spa-ceylon", logoSrc: "/images/spaceylon.png" },
  // No matching Harris Ceylon logo file was found in public/images yet.
  { name: "Harris Ceylon", slug: "harris-ceylon",logoSrc: "/images/Harrisholdings.png" },
  { name: "DSI", slug: "dsi", logoSrc: "/images/DSI.png" },
  { name: "Orel Corporation", slug: "orel-corporation", logoSrc: "/images/orecorporations.png" },
  { name: "Orel IT", slug: "orel-it", logoSrc: "/images/orelit.png" },
  { name: "Diana", slug: "diana", logoSrc: "/images/diana.png" },
];

export const featuredCustomers = customers.filter((customer) => customer.featured);
export const supportingCustomers = customers.filter((customer) => !customer.featured);
