export const services = [
  {
    slug: "websites",
    title: "Websites",
    need: "A website",
    summary: "A clear site for the farm or the agricultural business, comfortable to read on a phone.",
    body: "What you offer, where you are, and how to get in touch. Written the way you would explain it at the gate. We can start from nothing, or replace a site that is already out of date.",
  },
  {
    slug: "social-media",
    title: "Social media marketing",
    need: "Social media marketing",
    summary: "Posts that sound like the farm, and keep going through the season.",
    body: "We help you show the work, the animals, and what is for sale. This can be a plan you keep yourself, or posts we publish for you.",
  },
  {
    slug: "business-cards",
    title: "Business cards",
    need: "Business cards",
    summary: "A card that matches the rest of the brand, for the mart, the market, and the show.",
    body: "Your name, what you do, and a clear way to reach you. Designed to sit with the website and the show branding, not as a separate look.",
  },
  {
    slug: "show-branding",
    title: "Show branding",
    need: "Show branding and merchandise",
    summary: "Banners, tablecloths, shirts, hats, and merchandise such as mugs.",
    body: "Everything the stall needs so it looks like one business from across the aisle. Banners, tablecloths, shirts, hats, and other merchandise such as mugs.",
    items: ["Banners", "Tablecloths", "Shirts", "Hats", "Mugs and other merchandise"],
  },
];

export function serviceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
