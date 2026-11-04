const sample = "Sample presentation. Maple Row is an example, not a client.";

export const products = [
  {
    slug: "agri-scale-farm",
    title: "Agri Scale Farm",
    need: "Agri Scale Farm",
    summary: "Livestock records for the office and the field, with three yearly packages.",
    kicker: "Product · Livestock system",
    lede: "Agri Scale Farm is a livestock management system for the office and the field. The same herd opens in a browser and on the phone. Each farm is on one yearly package: Entry, Intermediate, or Unlimited.",
    proof: ["Cattle, sheep, and goats", "One workspace per farm", "Yearly packages"],
    external: { href: "https://agriscalefarm.netlify.app", label: "Open the web app" },
    hero: {
      src: "/images/agri-scale-hero.jpg",
      alt: "A phone showing Agri Scale Farm, with herd, animals, breeding, health, camps, and weight screens behind it.",
      caption: "The herd, the animals, and the health record, on one screen.",
    },
    sections: [
      {
        kicker: "Purpose",
        title: "A record the next season can still use.",
        paragraphs: [
          "Breeding decisions, treatment dates, and camp movements are easy to lose when they live in a notebook, a spreadsheet, and someone’s memory. Agri Scale Farm keeps those facts against the animal they belong to.",
          "Each farm has its own workspace. A farm administrator invites the team by email. Staff can record what they see in the field without sharing a single login.",
        ],
      },
      {
        image: {
          src: "/images/agri-scale-field.jpg",
          alt: "A phone showing tag 1842, with screens for the ear tag, the animal, the camp, the weight, and a camera scan.",
          caption: "The camera reads the ear tag on the device, so the animal can be opened without typing the number.",
        },
      },
      {
        kicker: "Platforms",
        title: "Office and field use the same records.",
        items: [
          ["Web application", "Open it in a browser from the office. The dashboard, analytics, stamboek, family trees, breeding, births, locations, backups, and the team are managed here."],
          ["Mobile application", "There is no separate app-store download. Add Agri Scale Farm to the phone home screen and it opens full screen, with its own icon. The herd can be opened without a connection. New records are saved when the connection returns."],
        ],
      },
      {
        kicker: "Capabilities",
        title: "What the system keeps.",
        items: [
          ["Herd dashboard", "Active animals, males and females, parent links, and animals not yet in a camp. Headcount is shown by place."],
          ["Analytics", "Herd makeup as it stands today, then births, sales, breeding, health, weights, and show results for the period you choose."],
          ["Health", "Vaccinations and treatments, with what is overdue and what is due within 30 days. The list can be exported."],
          ["Breeding and births", "A service, the expected birth, and the offspring when they arrive. Cattle, sheep, and goats keep their own gestation length."],
          ["Family trees", "Dam and sire stay on the animal, including a sire outside the herd or on another farm."],
          ["Stamboek", "Stud book identity and schedule, and a lookup when the related animal is on another farm."],
          ["Animal file", "Tag and stud identity, status, a recorded sale, photographs, documents, weights, and show results. The camera can read an ear tag."],
          ["Locations and backups", "Places and the camps inside them. A backup is a saved copy of the herd, which you can download later."],
        ],
      },
      {
        image: {
          src: "/images/agri-scale-record.jpg",
          alt: "A phone showing one animal, with screens for identity, pedigree, health, camp, and weight.",
          caption: "Identity, pedigree, health, camp, and weight stay on the same animal.",
        },
      },
      {
        kicker: "Pricing",
        title: "A yearly package for the farm.",
        intro: "The price is for the year. A package is assigned to the farm. Health records, weights, breeding, and show results follow the animals you already keep and are not capped on their own. Existing records stay if a farm is over a limit; new ones wait until the count drops or the package changes.",
        plans: [
          {
            name: "Entry",
            price: "R5,000",
            period: "per year",
            summary: "A small herd and a small team.",
            limits: ["3 team members", "300 animals", "1 location", "15 camps", "500 photos", "500 documents", "10 backups"],
          },
          {
            name: "Intermediate",
            price: "R8,500",
            period: "per year",
            summary: "A growing stud, with higher caps.",
            limits: ["10 team members", "500 animals", "20 locations", "80 camps", "2,000 photos", "500 documents", "24 backups"],
          },
          {
            name: "Unlimited",
            price: "R12,000",
            period: "per year",
            summary: "No caps on the herd, the team, or the records.",
            limits: ["Unlimited team members", "Unlimited animals", "Unlimited locations and camps", "Unlimited photos and documents", "Unlimited backups"],
          },
        ],
      },
    ],
  },
  {
    slug: "websites",
    title: "Websites",
    need: "A website",
    summary: "A clear website for the farm or agricultural business, readable on a phone.",
    kicker: "Product · Websites",
    lede: "A website that states what the business offers, where it is, and how to make contact. Written for the customer who arrives from a search, a card, or a sign at the gate, and comfortable to read on a phone.",
    proof: ["Phone and desktop", "Written with you", "Yours to keep"],
    hero: {
      src: "/images/product-websites.jpg",
      alt: "A phone showing a farm website, with home, season, visit, and contact screens behind it.",
      caption: sample,
    },
    sections: [
      {
        kicker: "Purpose",
        title: "The address customers can rely on.",
        paragraphs: [
          "A social post disappears. A website remains the place that holds the hours, the directions, the products, and the way to enquire. We build that page so a first-time visitor can understand the business without a phone call.",
          "The work can start from a blank brief, or replace a site that is out of date. If an address is already known to customers, we can keep it. The finished site belongs to you, and hosting can sit on an account in your name.",
        ],
      },
      {
        image: {
          src: "/images/product-websites-desk.jpg",
          alt: "A laptop on a desk showing a sample farm website named Maple Row.",
          caption: sample,
        },
      },
      {
        kicker: "What is included",
        title: "A site with a job to do.",
        items: [
          ["The offer", "What you sell or provide, in the language of the business, not a generic template."],
          ["The place", "Where you are, when you are open, and how a visitor actually arrives."],
          ["The enquiry", "A direct way to call, email, or send a message, visible on a phone."],
          ["The photographs", "Pictures of the real operation. We help you choose a small set that carries the page."],
          ["The structure", "A short set of pages, so the important facts are not buried."],
          ["The handover", "You review the wording and the facts before the site is treated as complete."],
        ],
      },
      {
        kicker: "Engagement",
        title: "How a website proceeds.",
        steps: [
          ["01", "Consultation", "We establish who the site is for, what must be on it, and what can wait."],
          ["02", "Draft", "You see the pages before they are published, and correct anything that is wrong."],
          ["03", "Handover", "The site goes live on an account you control. Further changes can be quoted separately."],
        ],
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social media marketing",
    need: "Social media marketing",
    summary: "A consistent presence through the season, in the voice of the business.",
    kicker: "Product · Social media",
    lede: "A planned presence for the season: the work, the livestock, and what is for sale, published in a voice that matches the rest of the business. This can be a plan you manage, or content we publish on your behalf.",
    proof: ["A plan for the season", "Your photographs", "One voice with the website"],
    hero: {
      src: "/images/product-social.jpg",
      alt: "A phone showing farm social posts, with herd, market, season, and update screens behind it.",
      caption: sample,
    },
    sections: [
      {
        kicker: "Purpose",
        title: "Presence that continues after the busy week.",
        paragraphs: [
          "Most agricultural businesses already have the material: a herd, a stall, a delivery, a field in good condition. What is usually missing is a rhythm. Posts appear when someone remembers, and stop when the season gets heavy.",
          "We set the subjects, the frequency, and the standard, so the account looks like the same business as the website and the show stand. You approve the facts. We do not invent a personality the business does not have.",
        ],
      },
      {
        image: {
          src: "/images/product-social-plan.jpg",
          alt: "A monthly content plan beside a phone, with posts labelled herd, season, visit, and market.",
          caption: sample,
        },
      },
      {
        kicker: "What is included",
        title: "A plan, not a pile of posts.",
        items: [
          ["Subjects", "The livestock, the season, the product, and the practical information customers actually need."],
          ["Photographs", "Pictures from the business. We select and sequence them rather than relying on stock."],
          ["Voice", "Wording that matches the website, so the account does not sound like a different company."],
          ["Calendar", "A month laid out in advance, so publishing does not depend on a spare evening."],
          ["Two ways to run it", "A plan and templates you keep, or publishing we handle for an agreed period."],
          ["Review", "You see the material before it represents the business in public."],
        ],
      },
      {
        kicker: "Engagement",
        title: "How the work is scoped.",
        steps: [
          ["01", "The account", "We look at what already exists and who it is meant to reach."],
          ["02", "The plan", "You receive the subjects and the wording for the first period."],
          ["03", "The choice", "You publish it, or we publish it. Either way, the standard is written down."],
        ],
      },
    ],
  },
  {
    slug: "business-cards",
    title: "Business cards",
    need: "Business cards",
    summary: "A card consistent with the rest of the brand, for the mart, the market, and the show.",
    kicker: "Product · Business cards",
    lede: "A card that carries the name, the work, and a direct way to make contact. Designed to sit with the website and the show branding as one identity, for the mart, the market, and the show.",
    proof: ["Name and contact", "Matches the brand", "Print-ready files"],
    hero: {
      src: "/images/product-cards.jpg",
      alt: "A fan of dark green and cream sample business cards.",
      caption: sample,
    },
    sections: [
      {
        kicker: "Purpose",
        title: "The introduction that leaves with the other person.",
        paragraphs: [
          "At a mart or a show, a conversation ends when someone walks away. The card is what remains: who you are, what you do, and how to reach you without searching.",
          "We design it as part of the same identity as the website and the stand, so the card does not introduce a second look. You receive print-ready files and can reprint them for the next season.",
        ],
      },
      {
        image: {
          src: "/images/product-cards-detail.jpg",
          alt: "A close view of a dark green sample business card on a cream card.",
          caption: sample,
        },
      },
      {
        kicker: "What is included",
        title: "A card with the facts, and nothing competing with them.",
        items: [
          ["Identity", "The business name and a mark that can also live on the website and the banner."],
          ["The work", "A short line that says what you do, specific enough to be useful."],
          ["Contact", "The phone number, email, or address you actually want used."],
          ["Two sides", "A front for the name, and a back that can hold a second fact or stay quiet."],
          ["Files", "Print-ready artwork, so a later reprint does not require the design to be rebuilt."],
          ["Review", "You confirm the spelling, the number, and the colours before anything is sent to print."],
        ],
      },
      {
        kicker: "Engagement",
        title: "How a card is produced.",
        steps: [
          ["01", "The facts", "Name, role, contact details, and any line that must appear."],
          ["02", "The design", "You see the card with the rest of the identity before it is approved."],
          ["03", "The files", "You receive artwork you can reprint. Printing can be arranged or left with you."],
        ],
      },
    ],
  },
  {
    slug: "show-branding",
    title: "Show branding",
    need: "Show branding and merchandise",
    summary: "Banners, tablecloths, shirts, hats, and merchandise such as mugs.",
    kicker: "Product · Show branding",
    lede: "The materials a stand needs so it reads as one business from across the aisle: banners, tablecloths, shirts, hats, and merchandise such as mugs. Designed together, so the stall, the card, and the website agree.",
    proof: ["Banner and table", "Clothing and merchandise", "One identity"],
    hero: {
      src: "/images/product-show.jpg",
      alt: "A sample show set: banner, tablecloth, shirts, caps, and mugs in one green identity.",
      caption: sample,
    },
    sections: [
      {
        kicker: "Purpose",
        title: "A stand that can be recognised before the conversation starts.",
        paragraphs: [
          "A show aisle is decided at a distance. The banner, the cloth, and the clothing are what a visitor sees before they read a word. When those pieces match, the stand looks prepared. When they do not, the business looks assembled from leftovers.",
          "We design the set as one identity. You can commission the full stand or begin with the pieces you need this season. The artwork is yours to reprint.",
        ],
      },
      {
        image: {
          src: "/images/product-show-stand.jpg",
          alt: "A sample exhibition stand with a green banner, tablecloth, and caps.",
          caption: sample,
        },
      },
      {
        kicker: "What can be produced",
        title: "The pieces of a stand.",
        items: [
          ["Banners", "A pull-up or hanging banner with the name large enough to read from the aisle."],
          ["Tablecloths", "A fitted cloth so the table reads as part of the stand, not a borrowed surface."],
          ["Shirts", "A small run for the people on the stand, in the same mark and colour."],
          ["Hats", "Caps that carry the identity without competing with the banner."],
          ["Mugs and merchandise", "A small item a visitor can take, marked the same way as the rest."],
          ["The set", "Designed together, so a later piece can be added without starting again."],
        ],
      },
      {
        kicker: "Engagement",
        title: "How a show set is scoped.",
        steps: [
          ["01", "The stand", "We confirm which pieces you need and the name and mark that must appear."],
          ["02", "The artwork", "You review the banner, the cloth, and the merchandise before production."],
          ["03", "The files", "You receive print-ready artwork for this season and the next."],
        ],
      },
    ],
  },
];

export function productBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
