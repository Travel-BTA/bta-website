/**
 * preferredPartners.ts
 *
 * Content configuration for the BTA Preferred Partners hub and individual
 * partner landing pages. Keeping content separate from presentation logic
 * makes it trivial to update partner details, add properties, or adjust
 * benefits without touching any component code.
 *
 * Partners: Hyatt Privé · SLH Within · IHG Lifestyle & Luxury ·
 *           Meliá Bravos · Virtuoso · Shangri-La · JMak
 */

// ─── Hub page ────────────────────────────────────────────────────────────────

export const partnersHero = {
  eyebrow: "Exclusive Access",
  heading: "Preferred Partners",
  subheading:
    "BTA holds direct preferred-partner status with the world's most coveted hotel programs — unlocking benefits, amenities, and access that simply cannot be booked any other way.",
  imageUrl:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85&auto=format&fit=crop",
};

export const partnersIntro = {
  heading: "Why Book Through BTA",
  body: "As a Virtuoso member agency and certified preferred partner with seven of the world's leading hotel programs, BTA advisors carry rate codes and direct relationships that translate into tangible, bookable value for every client. From daily breakfast and resort credits to suite upgrades and early check-in, these are not aspirational perks — they are guaranteed inclusions on every qualifying stay.",
  stats: [
    { value: "7", label: "Preferred Programs" },
    { value: "5,000+", label: "Partner Properties" },
    { value: "$500+", label: "Avg. Added Value Per Stay" },
  ],
};

// ─── Partner cards (hub grid) ─────────────────────────────────────────────────

export type Partner = {
  id: string;           // URL slug
  name: string;
  tagline: string;
  description: string;
  category: "Hotels" | "Networks" | "Collections";
  heroImage: string;    // used on individual page hero
  cardImage: string;    // used on hub card (can be same)
  accentColor: string;  // brand accent for individual page
  benefits: string[];
  properties?: PartnerProperty[];
};

export type PartnerProperty = {
  name: string;
  location: string;
  imageUrl: string;
};

export const partners: Partner[] = [
  {
    id: "hyatt-prive",
    name: "Hyatt Privé",
    tagline: "The upper echelon of Hyatt, unlocked.",
    description:
      "Hyatt Privé is an exclusive membership program for select travel agencies, granting BTA clients top-tier status across Park Hyatt, Andaz, Grand Hyatt, Thompson Hotels, and more. These are the perks that money alone cannot buy.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&auto=format&fit=crop",
    accentColor: "#1a1a2e",
    benefits: [
      "Daily breakfast for two guests",
      "USD 100 hotel credit per stay",
      "Priority room upgrade upon arrival (subject to availability)",
      "Early check-in and late check-out (subject to availability)",
      "Complimentary welcome amenity",
    ],
    properties: [
      {
        name: "Park Hyatt New York",
        location: "New York, USA",
        imageUrl:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Andaz Maui at Wailea",
        location: "Maui, Hawaii",
        imageUrl:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Grand Hyatt Bali",
        location: "Bali, Indonesia",
        imageUrl:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Thompson Chicago",
        location: "Chicago, USA",
        imageUrl:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Andaz Tokyo Toranomon Hills",
        location: "Tokyo, Japan",
        imageUrl:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Park Hyatt Sydney",
        location: "Sydney, Australia",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "slh-within",
    name: "SLH Within",
    tagline: "Independent luxury, intimately curated.",
    description:
      "Small Luxury Hotels of the World's Within program connects BTA clients to over 500 independently owned luxury hotels across 90 countries. Each property is individually vetted — no two are alike, and every stay comes with exclusive amenities reserved for BTA bookings.",
    category: "Collections",
    heroImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80&auto=format&fit=crop",
    accentColor: "#2c3e50",
    benefits: [
      "Daily breakfast for two guests",
      "USD 100 property credit per stay",
      "Priority room upgrade upon arrival (subject to availability)",
      "Early check-in and late check-out (subject to availability)",
    ],
    properties: [
      {
        name: "Amangiri",
        location: "Canyon Point, Utah",
        imageUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Singita Grumeti",
        location: "Serengeti, Tanzania",
        imageUrl:
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Borgo Egnazia",
        location: "Puglia, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "The Brando",
        location: "Tetiaroa, French Polynesia",
        imageUrl:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "ihg-lifestyle-luxury",
    name: "IHG Lifestyle & Luxury",
    tagline: "Six Senses, Regent, and Kimpton — elevated.",
    description:
      "IHG's Lifestyle & Luxury division encompasses Six Senses, Regent Hotels & Resorts, InterContinental, and Kimpton. BTA's preferred partnership unlocks exclusive amenity packages across all four brands, ensuring every client is recognized and rewarded from arrival.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format&fit=crop",
    accentColor: "#1b4332",
    benefits: [
      "Daily breakfast for two guests",
      "USD 100 value-added amenity (varies by property)",
      "Priority room upgrade upon arrival (subject to availability)",
      "Early check-in and late check-out (subject to availability)",
      "Complimentary welcome gift",
    ],
    properties: [
      {
        name: "Six Senses Ibiza",
        location: "Ibiza, Spain",
        imageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Regent Hong Kong",
        location: "Hong Kong",
        imageUrl:
          "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Six Senses Yao Noi",
        location: "Phang Nga Bay, Thailand",
        imageUrl:
          "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Kimpton De Witt",
        location: "Amsterdam, Netherlands",
        imageUrl:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "melia-bravos",
    name: "Meliá Bravos",
    tagline: "European sophistication, global reach.",
    description:
      "Meliá's Bravos program is an invitation-only preferred partnership for elite travel agencies. BTA clients enjoy exclusive benefits at Gran Meliá, ME by Meliá, and The Meliá Collection properties — from the Balearic Islands to the Caribbean.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&auto=format&fit=crop",
    accentColor: "#7b2d8b",
    benefits: [
      "Daily breakfast for two guests",
      "Complimentary lunch or dinner for two (stays of 3+ nights)",
      "Room upgrade upon arrival (subject to availability)",
      "Guaranteed early check-in from 10am or late check-out to 4pm",
      "VIP welcome amenity",
    ],
    properties: [
      {
        name: "Gran Meliá Palacio de Isora",
        location: "Tenerife, Spain",
        imageUrl:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "ME Ibiza",
        location: "Ibiza, Spain",
        imageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Gran Meliá Rome",
        location: "Rome, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "virtuoso",
    name: "Virtuoso",
    tagline: "The world's leading luxury travel network.",
    description:
      "As a Virtuoso member agency, BTA sits within an exclusive global network of the finest travel advisors and suppliers. Virtuoso membership unlocks preferred rates, amenity programs, and direct access to the world's most sought-after hotels, cruises, and experiences.",
    category: "Networks",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80&auto=format&fit=crop",
    accentColor: "#0d1b2a",
    benefits: [
      "Daily breakfast for two guests",
      "USD 100 hotel credit per stay",
      "Priority room upgrade upon arrival (subject to availability)",
      "Early check-in and late check-out (subject to availability)",
    ],
    properties: [
      {
        name: "Four Seasons Resort Bora Bora",
        location: "Bora Bora, French Polynesia",
        imageUrl:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Aman Tokyo",
        location: "Tokyo, Japan",
        imageUrl:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "The Brando",
        location: "Tetiaroa, French Polynesia",
        imageUrl:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Belmond Le Manoir aux Quat'Saisons",
        location: "Oxfordshire, England",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "shangri-la",
    name: "Shangri-La",
    tagline: "Asian hospitality at its most refined.",
    description:
      "BTA's preferred partnership with Shangri-La Hotels and Resorts grants clients exclusive access to one of Asia's most iconic luxury brands — spanning 100+ properties across 22 countries. From the Maldives to Paris, every Shangri-La stay through BTA is elevated with guaranteed amenities.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format&fit=crop",
    accentColor: "#8b1a1a",
    benefits: [
      "Daily complimentary breakfast for two guests",
      "USD 100 property credit per stay (dining, spa, or activities)",
      "Room upgrade upon arrival (subject to availability)",
      "Early check-in and late check-out (subject to availability)",
      "Complimentary welcome amenity",
    ],
    properties: [
      {
        name: "Shangri-La Paris",
        location: "Paris, France",
        imageUrl:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Shangri-La Maldives",
        location: "Villingili, Maldives",
        imageUrl:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Shangri-La Dubai",
        location: "Dubai, UAE",
        imageUrl:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Island Shangri-La Hong Kong",
        location: "Hong Kong",
        imageUrl:
          "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "jmak",
    name: "JMak",
    tagline: "Bespoke luxury, personally delivered.",
    description:
      "JMak is BTA's exclusive in-house concierge and luxury experience partner — providing clients with white-glove ground services, private transfers, curated dining reservations, and bespoke experiences at destinations worldwide. Every JMak experience is personally arranged by a BTA advisor.",
    category: "Collections",
    heroImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop",
    accentColor: "#2d4a22",
    benefits: [
      "Exclusive J.MAK welcome amenity upon arrival (varies by property)",
      "Curated on-property experiences and activities",
      "Access to a portfolio of 200+ independently vetted luxury properties",
      "Direct relationship with property general managers",
      "10% commission passed through to BTA clients as added value",
    ],
    properties: [
      {
        name: "Private Villa, Tuscany",
        location: "Tuscany, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Exclusive Safari, Botswana",
        location: "Okavango Delta, Botswana",
        imageUrl:
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Private Yacht Charter, Greece",
        location: "Aegean Sea, Greece",
        imageUrl:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
];

// ─── Favourite properties (hub page — 2 rows of 3) ──────────────────────────────

export const favouriteProperties = [
  {
    name: "Park Hyatt New York",
    partner: "Hyatt Privé",
    location: "New York, USA",
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&auto=format&fit=crop",
    partnerId: "hyatt-prive",
  },
  {
    name: "Shangri-La Paris",
    partner: "Shangri-La",
    location: "Paris, France",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80&auto=format&fit=crop",
    partnerId: "shangri-la",
  },
  {
    name: "Six Senses Ibiza",
    partner: "IHG Lifestyle & Luxury",
    location: "Ibiza, Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop",
    partnerId: "ihg-lifestyle-luxury",
  },
  {
    name: "Amangiri",
    partner: "SLH Within",
    location: "Canyon Point, Utah",
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop",
    partnerId: "slh-within",
  },
  {
    name: "Andaz Maui at Wailea",
    partner: "Hyatt Privé",
    location: "Maui, Hawaii",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&auto=format&fit=crop",
    partnerId: "hyatt-prive",
  },
  {
    name: "Shangri-La Maldives",
    partner: "Shangri-La",
    location: "Villingili, Maldives",
    imageUrl:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80&auto=format&fit=crop",
    partnerId: "shangri-la",
  },
];

// ─── Hub page CTA ─────────────────────────────────────────────────────────────

export const partnersCta = {
  heading: "Ready to Experience the Difference?",
  body: "Every BTA client travels with the full weight of our preferred partnerships behind them. Speak with an advisor to learn exactly what your next stay includes.",
  buttonText: "Plan Your Journey",
  buttonHref: "/book",
  imageUrl:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85&auto=format&fit=crop",
};
