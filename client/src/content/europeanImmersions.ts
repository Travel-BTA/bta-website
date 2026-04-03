/**
 * European Immersions — Content Configuration
 * Edit text, images, and links here. Do not touch the page component.
 * Route: /land-journeys/europe
 */

import type { JourneySubPageData } from "@/components/JourneySubPage";

export const europeanImmersionsData: JourneySubPageData = {
  seo: {
    title: "European Immersions | Boutique Travel Advisors",
    metaDescription:
      "Private villa stays, castle estates, and curated cultural access across Europe's most extraordinary destinations. BTA designs European journeys of rare depth and beauty.",
  },
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=85&auto=format&fit=crop",
    eyebrow: "Land Journeys — European Immersions",
    headline: "Europe, Beyond\nthe Ordinary",
    subheadline:
      "Private villas, castle estates, and cultural access that most travelers never discover.",
  },
  intro: {
    eyebrow: "The BTA European Experience",
    headline: "A Continent Reimagined\nfor the Curious Traveler",
    body: "Europe rewards those who travel slowly and with intention. We design journeys that move beyond the famous landmarks into the private gardens, family-owned wineries, and centuries-old estates that define a destination's true character. Whether you are tracing the Amalfi coastline by private boat, dining with a Tuscan winemaker at harvest, or exploring the Greek islands on a chartered yacht, every detail is arranged with the care and access that only a Virtuoso advisor can provide.",
    imageUrl:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=900&q=85&auto=format&fit=crop",
  },
  destinations: [
    {
      name: "Amalfi Coast, Italy",
      country: "Italy",
      description:
        "Cliffside villages, cerulean waters, and the finest private villa estates in the Mediterranean. We arrange private boat transfers, exclusive restaurant access, and day trips to Capri and Positano.",
      imageUrl:
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Tuscany, Italy",
      country: "Italy",
      description:
        "Rolling hills, Renaissance art, and world-class wine. Private villa rentals, harvest season visits to family estates, and exclusive access to Florence's most celebrated collections.",
      imageUrl:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Santorini, Greece",
      country: "Greece",
      description:
        "The iconic caldera views, private cave suites, and sunset dinners that define the Aegean. We extend your journey to lesser-known islands — Folegandros, Milos — for a Greece few visitors ever see.",
      imageUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80&auto=format&fit=crop",
    },
  ],
  featuredItinerary: {
    eyebrow: "Featured Journey",
    headline: "Italy: Amalfi &\nTuscany — 12 Days",
    description:
      "Begin with three nights in a private clifftop villa above Positano, exploring the coast by private boat. Transfer north to a restored farmhouse estate in the Chianti hills for the harvest season — private winery visits, truffle hunting, and a cooking lesson with a local chef. End in Florence with after-hours access to the Uffizi Gallery.",
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&q=85&auto=format&fit=crop",
    details: [
      { label: "Duration", value: "12 Days / 11 Nights" },
      { label: "Best Season", value: "May – June, September – October" },
      { label: "Style", value: "Private Villa & Estate" },
      { label: "Access", value: "Virtuoso Exclusive" },
    ],
  },
  whyBta: {
    eyebrow: "The BTA Difference",
    headline: "European Travel\nAt Its Finest",
    items: [
      {
        title: "Virtuoso Access",
        description:
          "Preferred rates and exclusive amenities at Europe's finest properties — from Relais & Châteaux estates to Leading Hotels of the World — available only through Virtuoso advisors.",
      },
      {
        title: "Expert Advisors",
        description:
          "Our team has stayed in the villas, dined at the tables, and walked the cobblestone streets we recommend. Every suggestion comes from personal experience.",
      },
      {
        title: "Bespoke Design",
        description:
          "Whether you want a slow, restorative journey through one region or a curated multi-country itinerary, we design every detail around how you want to travel.",
      },
    ],
  },
  cta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&q=85&auto=format&fit=crop",
    headline: "Your European\nJourney Begins Here",
    subheadline:
      "Let us design a European experience of rare depth and beauty.",
  },
};
