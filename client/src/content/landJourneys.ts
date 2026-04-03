/**
 * BTA Land Journeys Page — Content Configuration
 *
 * PURPOSE: Single source of truth for all Land Journeys page content.
 * To update text, photos, or links — edit ONLY this file.
 * Never modify component files for content changes.
 *
 * SEO: Title and meta description preserved from travelbta.com audit.
 */

export const landJourneysSeo = {
  title: "Land Journeys | Boutique Travel Advisors — Luxury Virtuoso Travel Agency",
  metaDescription:
    "Discover bespoke land journey experiences crafted by Boutique Travel Advisors. From African safaris to European immersions, our Virtuoso travel experts design once-in-a-lifetime itineraries tailored to you.",
  canonical: "https://travelbta.com/land-journeys/",
};

export const landJourneysHero = {
  // Full-width cinematic hero — replace with your own CDN image
  backgroundImage:
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85&auto=format&fit=crop",
  eyebrow: "Land Journeys",
  headline: "EXTRAORDINARY\nJOURNEYS BY LAND",
  subheadline:
    "From the sweeping plains of Africa to the ancient cities of Europe, every journey is crafted around you.",
};

export const landJourneysIntro = {
  eyebrow: "Bespoke by Design",
  headline: "Travel That Moves You",
  body: "Are you a discerning traveler seeking to explore the world's most incredible destinations? Whether you dream of adventure on the African plains, a life-changing expedition through the Arctic, or a tranquil escape to a private island, Boutique Travel Advisors designs once-in-a-lifetime experiences for individuals, families, and teams. Stop settling for uninspired vacations. Discover how bespoke travel, explicitly crafted for you, will transform the way you see the world.",
  cta: { label: "Begin Planning", href: "/book" },
};

export const landJourneysCategories = [
  {
    title: "Safari & Wildlife",
    description:
      "Immersive encounters with the natural world — from the Serengeti to the Okavango Delta.",
    imageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80&auto=format&fit=crop",
    href: "/land-journeys/safari",
  },
  {
    title: "European Immersions",
    description:
      "Private access to the continent's most storied cities, countryside estates, and cultural treasures.",
    imageUrl:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format&fit=crop",
    href: "/land-journeys/europe",
  },
  {
    title: "Expedition Travel",
    description:
      "Remote destinations for the curious — Antarctica, the Galápagos, Patagonia, and beyond.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/patagonia-guanaco_6307f230.webp",
    href: "/land-journeys/expedition",
  },
  {
    title: "Cultural Journeys",
    description:
      "Authentic connections to local customs, traditions, and the people who define a destination.",
    imageUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/kyoto-geisha_b1a8b6d7.webp",
    href: "/land-journeys/cultural",
  },
];

export const landJourneysProcess = {
  eyebrow: "How We Work",
  headline: "Your Journey, Designed Around You",
  steps: [
    {
      number: "01",
      title: "Discovery Consultation",
      description:
        "We begin with a conversation — understanding your travel style, interests, pace, and vision for the perfect journey.",
    },
    {
      number: "02",
      title: "Bespoke Itinerary Design",
      description:
        "Our Virtuoso advisors craft a fully customized itinerary, selecting every property, experience, and transfer with intention.",
    },
    {
      number: "03",
      title: "VIP Arrangements",
      description:
        "We handle every detail — from private transfers and exclusive access to dining reservations and on-the-ground support.",
    },
    {
      number: "04",
      title: "Journey & Beyond",
      description:
        "Travel with confidence knowing our team is available throughout your trip, and ready to plan your next adventure on your return.",
    },
  ],
};

export const landJourneysExperiences = {
  eyebrow: "Elevated Experiences",
  headline: "What Sets Our Journeys Apart",
  items: [
    {
      title: "Virtuoso Access",
      description:
        "As a Virtuoso agency, we unlock exclusive amenities, VIP welcomes, and complimentary upgrades at the world's finest properties.",
    },
    {
      title: "Custom Itineraries",
      description:
        "No two journeys are alike. Every itinerary is built from scratch to reflect your unique interests, pace, and budget.",
    },
    {
      title: "Expert Advisors",
      description:
        "Our advisors travel extensively and maintain deep relationships with the suppliers who make extraordinary experiences possible.",
    },
    {
      title: "Responsible Travel",
      description:
        "We are committed to eco-stewardship and responsible travel, partnering with operators who share our values.",
    },
    {
      title: "Seamless Logistics",
      description:
        "From the moment you depart to the moment you return, every detail is managed with precision and care.",
    },
    {
      title: "On-Trip Support",
      description:
        "Our team is available throughout your journey — a trusted contact whenever you need us, wherever you are.",
    },
  ],
};

export const landJourneysFeaturedJourney = {
  eyebrow: "Featured Journey",
  headline: "Africa: The Great Migration",
  description:
    "Witness one of nature's most spectacular events — the annual wildebeest migration across the Serengeti and Masai Mara. Private camps, expert guides, and moments that stay with you for a lifetime.",
  imageUrl:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/masai-mara-balloon_fbd18a64.webp",
  details: [
    { label: "Duration", value: "10–14 Days" },
    { label: "Best Season", value: "July – October" },
    { label: "Style", value: "Private & Small Group" },
    { label: "Level", value: "Moderate" },
  ],
  cta: { label: "Enquire About This Journey", href: "/book" },
};

export const landJourneysCta = {
  // Dark, atmospheric background — replace with your own CDN image
  backgroundImage:
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=85&auto=format&fit=crop",
  headline: "Ready to Begin?",
  subheadline:
    "Tell us where you want to go. We will design the rest.",
  cta: { label: "Start Planning", href: "/book" },
};
