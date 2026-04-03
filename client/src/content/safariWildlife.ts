/**
 * Safari & Wildlife. Content Configuration
 * Edit text, images, and links here. Do not touch the page component.
 * Route: /land-journeys/safari
 */

import type { JourneySubPageData } from "@/components/JourneySubPage";

export const safariWildlifeData: JourneySubPageData = {
  seo: {
    title: "Safari & Wildlife Journeys | Boutique Travel Advisors",
    metaDescription:
      "Experience Africa's most extraordinary wildlife encounters. BTA curates private safari camps, exclusive game drives, and bespoke itineraries across the Serengeti, Okavango Delta, and beyond.",
  },
  hero: {
    backgroundImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg",
    eyebrow: "Land Journeys. Safari & Wildlife",
    headline: "Where the Wild\nStill Reigns",
    subheadline:
      "Private camps, expert guides, and encounters with nature that redefine what travel can be.",
  },
  intro: {
    eyebrow: "The BTA Safari Experience",
    headline: "Africa, Curated\nfor the Discerning Traveler",
    body: "A safari is not simply a trip. it is a transformation. We design each journey around your pace, your interests, and the moments that matter most to you. From the sweeping plains of the Serengeti to the waterways of the Okavango Delta, every camp, every guide, and every sunrise has been personally vetted by our team. As Virtuoso members, we secure access to the most coveted private conservancies and exclusive camps that are simply unavailable to the general public.",
    imageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=85&auto=format&fit=crop",
  },
  destinations: [
    {
      name: "Serengeti, Tanzania",
      country: "Tanzania",
      description:
        "Witness the Great Migration. over two million wildebeest and zebra crossing the plains in one of nature's most breathtaking spectacles. We position you at the river crossings when it matters most.",
      imageUrl:
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Okavango Delta, Botswana",
      country: "Botswana",
      description:
        "Navigate the world's largest inland delta by mokoro canoe and private boat. Exclusive-use camps, exceptional guiding, and wildlife density that rivals anywhere on the continent.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/okavango-delta-5U29fRfhTJZooJsxx6vyY2.webp",
    },
    {
      name: "Kruger & Sabi Sand, South Africa",
      country: "South Africa",
      description:
        "The Big Five in one of Africa's most celebrated private game reserves. Intimate lodges, twice-daily drives with expert rangers, and the rare opportunity to track leopard on foot.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/kruger-sabi-sand-Xej2Krv3UcWYLjtmNwsCJC.webp",
    },
  ],
  featuredItinerary: {
    eyebrow: "Featured Journey",
    headline: "Tanzania: The Great\nMigration. 10 Days",
    description:
      "Begin in the Ngorongoro Crater, one of the world's great wildlife amphitheatres, before moving north into the central Serengeti to follow the migration. Your final nights are spent at a luxury tented camp on the Mara River. front-row seats to the most dramatic river crossings on earth.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg",
    details: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      { label: "Best Season", value: "July – October" },
      { label: "Style", value: "Luxury Tented Camps" },
      { label: "Access", value: "Virtuoso Exclusive" },
    ],
  },
  whyBta: {
    eyebrow: "The BTA Difference",
    headline: "Safari Planning\nDone Properly",
    items: [
      {
        title: "Virtuoso Access",
        description:
          "As Virtuoso members, we secure allocations at the most sought-after private camps. often fully booked to the public. and negotiate exclusive inclusions on your behalf.",
      },
      {
        title: "Expert Advisors",
        description:
          "Our team has walked the Serengeti, paddled the Okavango, and tracked lion in the Sabi Sand. We plan from personal experience, not brochures.",
      },
      {
        title: "Bespoke Design",
        description:
          "No two itineraries are alike. We design your safari around your travel style, interests, and the specific wildlife experiences that matter most to you.",
      },
    ],
  },
  cta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=85&auto=format&fit=crop",
    headline: "Your Safari Awaits",
    subheadline:
      "Let us design an African journey that exceeds every expectation.",
  },
};
