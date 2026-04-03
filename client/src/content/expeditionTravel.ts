/**
 * Expedition Travel — Content Configuration
 * Edit text, images, and links here. Do not touch the page component.
 * Route: /land-journeys/expedition
 */

import type { JourneySubPageData } from "@/components/JourneySubPage";

export const expeditionTravelData: JourneySubPageData = {
  seo: {
    title: "Expedition Travel | Boutique Travel Advisors",
    metaDescription:
      "Antarctica, Galápagos, Patagonia, and the Arctic — BTA designs expedition journeys to the world's most remote and extraordinary destinations for discerning travelers.",
  },
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=85&auto=format&fit=crop",
    eyebrow: "Land Journeys — Expedition Travel",
    headline: "The World's Last\nWild Places",
    subheadline:
      "Antarctica, Patagonia, the Galápagos — journeys to the edges of the earth, designed for those who seek the extraordinary.",
  },
  intro: {
    eyebrow: "The BTA Expedition Experience",
    headline: "Adventure Without\nCompromise",
    body: "Expedition travel is not about roughing it — it is about reaching places of profound natural beauty with the comfort, expertise, and access that only the best operators provide. We partner with the world's leading expedition companies to place you aboard the finest small ships, in the most exclusive lodges, and in the hands of the most knowledgeable naturalist guides on earth. These are journeys that change your perspective permanently.",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85&auto=format&fit=crop",
  },
  destinations: [
    {
      name: "Antarctica",
      country: "The White Continent",
      description:
        "The most remote and pristine wilderness on earth. We arrange passage aboard expedition vessels with the finest naturalist teams, Zodiac landings among penguin colonies, and nights under the southern lights.",
      imageUrl:
        "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Galápagos Islands",
      country: "Ecuador",
      description:
        "Darwin's living laboratory — wildlife that shows no fear of humans, volcanic landscapes, and crystal waters teeming with marine life. We secure space on the most intimate small-ship expeditions.",
      imageUrl:
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80&auto=format&fit=crop",
    },
    {
      name: "Patagonia",
      country: "Chile & Argentina",
      description:
        "Torres del Paine, Los Glaciares, and the Carretera Austral — a landscape of staggering scale and beauty. Private estancias, expert trekking guides, and fly-fishing on rivers few visitors ever reach.",
      imageUrl:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80&auto=format&fit=crop",
    },
  ],
  featuredItinerary: {
    eyebrow: "Featured Journey",
    headline: "Antarctica: White\nWilderness — 14 Days",
    description:
      "Embark from Ushuaia aboard a 100-guest expedition vessel — small enough to access bays that larger ships cannot reach. Cross the Drake Passage, land among half a million penguins at South Georgia, and witness calving glaciers from a Zodiac. Expert naturalists lead every excursion, and evenings are spent in the ship's library with a glass of wine and a sky full of stars.",
    imageUrl:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=85&auto=format&fit=crop",
    details: [
      { label: "Duration", value: "14 Days / 13 Nights" },
      { label: "Best Season", value: "November – March" },
      { label: "Style", value: "Luxury Expedition Ship" },
      { label: "Group Size", value: "Max 100 Guests" },
    ],
  },
  whyBta: {
    eyebrow: "The BTA Difference",
    headline: "Expedition Travel\nDone Right",
    items: [
      {
        title: "Virtuoso Access",
        description:
          "We hold allocations with the world's leading expedition operators — Abercrombie & Kent, Silversea Expeditions, Lindblad — and secure the best cabins before they reach the public.",
      },
      {
        title: "Expert Advisors",
        description:
          "Our team has traveled to Antarctica, the Galápagos, and Patagonia. We know which operators deliver and which ships to avoid. Your journey is built on firsthand knowledge.",
      },
      {
        title: "Bespoke Design",
        description:
          "We combine expedition travel with luxury extensions — a private estancia in Patagonia before your ship, or a night in a glass-domed lodge under the northern lights after.",
      },
    ],
  },
  cta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85&auto=format&fit=crop",
    headline: "The Edge of the\nEarth Is Calling",
    subheadline:
      "Let us design an expedition journey that goes beyond the expected.",
  },
};
