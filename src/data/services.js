export const services = [
  {
    slug: "websites",
    title: "Websites",
    need: "A website",
    summary: "A clear website for the farm or agricultural business, readable on a phone.",
    body: "What you offer, where you are, and how to get in touch, written in the language of the business. We can start from a blank brief, or replace a site that is out of date.",
  },
  {
    slug: "social-media",
    title: "Social media marketing",
    need: "Social media marketing",
    summary: "A consistent presence through the season, in the voice of the business.",
    body: "We help you present the work, the livestock, and what is for sale. This can be a plan you manage yourself, or content we publish on your behalf.",
  },
  {
    slug: "business-cards",
    title: "Business cards",
    need: "Business cards",
    summary: "A card consistent with the rest of the brand, for the mart, the market, and the show.",
    body: "Your name, what you do, and a direct way to reach you. Designed to sit with the website and the show branding as one identity.",
  },
  {
    slug: "show-branding",
    title: "Show branding",
    need: "Show branding and merchandise",
    summary: "Banners, tablecloths, shirts, hats, and merchandise such as mugs.",
    body: "The materials a stand needs so it reads as one business from across the aisle. Banners, tablecloths, shirts, hats, and other merchandise such as mugs.",
    items: ["Banners", "Tablecloths", "Shirts", "Hats", "Mugs and other merchandise"],
  },
];

export function serviceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
