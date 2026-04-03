/**
 * Cultural Journeys — Content Configuration
 * Edit text, images, and links here. Do not touch the page component.
 * Route: /land-journeys/cultural
 */

import type { JourneySubPageData } from "@/components/JourneySubPage";

export const culturalJourneysData: JourneySubPageData = {
  seo: {
    title: "Cultural Journeys | Boutique Travel Advisors",
    metaDescription:
      "Japan, Morocco, India, Peru — BTA designs immersive cultural journeys with private access to UNESCO sites, local artisans, and experiences that reveal the true soul of a destination.",
  },
  hero: {
    backgroundImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/kyoto-geisha_b1a8b6d7.webp",
    eyebrow: "Land Journeys — Cultural Journeys",
    headline: "Travel That\nGoes Deeper",
    subheadline:
      "Private access, local connections, and experiences that reveal the true soul of a destination.",
  },
  intro: {
    eyebrow: "The BTA Cultural Experience",
    headline: "Immersion, Not\nObservation",
    body: "The most meaningful travel experiences come from genuine connection — with a place, its people, and its history. We design cultural journeys that move beyond the surface: a private tea ceremony in Kyoto with a master who has practiced for forty years, a dawn visit to Angkor Wat before the crowds arrive, a cooking lesson in a Marrakech riad with a family who has lived there for generations. These are the moments that stay with you long after you return home.",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=85&auto=format&fit=crop",
  },
  destinations: [
    {
      name: "Kyoto & Tokyo, Japan",
      country: "Japan",
      description:
        "Ancient temples, Michelin-starred dining, and the precise beauty of Japanese aesthetics. Private tea ceremonies, after-hours access to Fushimi Inari, and a ryokan stay in the mountains of Hakone.",
      imageUrl:
        "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/kyoto-geisha_b1a8b6d7.webp",
    },
    {
      name: "Marrakech & the Atlas, Morocco",
      country: "Morocco",
      description:
        "The medina's labyrinthine souks, riads of extraordinary beauty, and the silence of the Sahara at dawn. Private artisan workshops, a night in a luxury desert camp, and a private hammam experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Sacred Valley & Machu Picchu, Peru",
      country: "Peru",
      description:
        "The Inca heartland — Machu Picchu at sunrise before the crowds, the salt pans of Maras, and a private visit to a weaving community that has preserved ancient Andean traditions for centuries.",
      imageUrl:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80&auto=format&fit=crop",
    },
  ],
  featuredItinerary: {
    eyebrow: "Featured Journey",
    headline: "Japan: Ancient &\nModern — 11 Days",
    description:
      "Begin in Tokyo with three days of contemporary culture, world-class dining, and neighborhoods that continue to inspire. Travel by shinkansen to Kyoto for four nights: a private geisha dinner, a dawn walk through the bamboo groves of Arashiyama, and an afternoon with a master ceramicist. End in the mountain onsen town of Hakone with views of Fuji across the lake.",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=85&auto=format&fit=crop",
    details: [
      { label: "Duration", value: "11 Days / 10 Nights" },
      { label: "Best Season", value: "March – May, October – November" },
      { label: "Style", value: "Luxury Hotels & Ryokan" },
      { label: "Access", value: "Virtuoso Exclusive" },
    ],
  },
  whyBta: {
    eyebrow: "The BTA Difference",
    headline: "Cultural Travel\nWith Depth",
    items: [
      {
        title: "Virtuoso Access",
        description:
          "Private after-hours access to UNESCO sites, exclusive cultural experiences, and introductions to local experts that are simply not available through standard travel channels.",
      },
      {
        title: "Expert Advisors",
        description:
          "Our team has walked the streets of Kyoto, navigated the Marrakech medina, and stood at sunrise on the Sun Gate above Machu Picchu. Every recommendation is personal.",
      },
      {
        title: "Bespoke Design",
        description:
          "We match the depth and pace of your journey to your interests — whether you are drawn to art, architecture, cuisine, history, or the simple pleasure of being fully present in a remarkable place.",
      },
    ],
  },
  cta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=85&auto=format&fit=crop",
    headline: "Begin Your\nCultural Journey",
    subheadline:
      "Let us design an immersive experience that reveals the true soul of a destination.",
  },
};
