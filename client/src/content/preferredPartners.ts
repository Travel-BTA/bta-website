/**
 * preferredPartners.ts
 *
 * Content configuration for the BTA Preferred Partners hub and individual
 * partner landing pages. All properties are verified against official program
 * directories (Fora, jmak.com, slh.com, hyatt.com, shangri-la.com).
 *
 * Partners: Hyatt Privé · SLH withIN · IHG Destined ·
 *           Meliá Bravos · Virtuoso · Shangri-La · JMak
 */

// ─── Hub page ────────────────────────────────────────────────────────────────

export const partnersHero = {
  eyebrow: "Exclusive Access",
  heading: "Preferred Partners",
  subheading:
    "BTA holds direct preferred-partner status with the world's most coveted hotel programs. unlocking benefits, amenities, and access that simply cannot be booked any other way.",
  imageUrl:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85&auto=format&fit=crop",
};

export const partnersIntro = {
  heading: "Why Book Through BTA",
  body: "As a Virtuoso member agency and certified preferred partner with many of the world's leading hotel programs, BTA advisors carry rate codes and direct relationships that translate into tangible, bookable value for every client. From daily breakfast and resort credits to suite upgrades and early check-in, these are not aspirational perks. they are guaranteed inclusions on every qualifying stay.",
  stats: [
    { value: "3,000+", label: "Preferred Properties" },
    { value: "$550+", label: "Avg. Added Value Per Stay" },
    { value: "125+", label: "Countries" },
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
      "Hotel credit per stay",
      "Welcome gift upon arrival",
      "Priority room upgrade (subject to availability)",
      "Extended check-in and check-out (subject to availability)",
    ],
    // All properties verified via foratravel.com/partners/hyatt-prive
    properties: [
      {
        name: "Andaz Maui at Wailea Resort",
        location: "Maui, Hawaii",
        imageUrl:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Grand Hyatt Vail",
        location: "Vail, Colorado",
        imageUrl:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Thompson Chicago",
        location: "Chicago, USA",
        imageUrl:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Andaz Scottsdale Resort & Bungalows",
        location: "Scottsdale, Arizona",
        imageUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Grand Hyatt Rio De Janeiro",
        location: "Rio de Janeiro, Brazil",
        imageUrl:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "The Standard, Bangkok Mahanakhon",
        location: "Bangkok, Thailand",
        imageUrl:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "slh-within",
    name: "SLH withIN",
    tagline: "Independent luxury, intimately curated.",
    description:
      "Small Luxury Hotels of the World's withIN program is reserved for the upper echelon of travel agencies. BTA's membership unlocks exclusive perks at independently owned luxury hotels across 90+ countries. from historical city hotels to safari lodges. No two properties are alike.",
    category: "Collections",
    heroImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80&auto=format&fit=crop",
    accentColor: "#2c3e50",
    benefits: [
      "Hotel credit (varies by property)",
      "Daily breakfast for two guests",
      "Priority room upgrade upon arrival (subject to availability)",
      "Extended check-in and check-out (subject to availability)",
      "Complimentary welcome gift",
    ],
    // All properties verified via foratravel.com/partners/slh-within (confirmed SLH members)
    properties: [
      {
        name: "Flemings Mayfair",
        location: "London, England",
        imageUrl:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Borgo Egnazia",
        location: "Puglia, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Canaves Oia Suites",
        location: "Santorini, Greece",
        imageUrl:
          "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Milaidhoo Maldives",
        location: "Baa Atoll, Maldives",
        imageUrl:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "The Sukhothai Bangkok",
        location: "Bangkok, Thailand",
        imageUrl:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Forestis Dolomites",
        location: "South Tyrol, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "ihg-lifestyle-luxury",
    name: "IHG Destined",
    tagline: "Six Senses, Regent, and Kimpton. elevated.",
    description:
      "IHG Destined unlocks exclusive amenities and experiences at participating IHG hotels worldwide. Available only to a select group of luxury travel agencies, the program spans Six Senses, Regent Hotels & Resorts, and Kimpton. ensuring every BTA client is recognized and rewarded from arrival.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format&fit=crop",
    accentColor: "#1b4332",
    benefits: [
      "Hotel credit per stay",
      "Daily breakfast for two guests",
      "Welcome gift upon arrival",
      "Priority room upgrade (subject to availability)",
      "Extended check-in and check-out (subject to availability)",
    ],
    // All properties verified via foratravel.com/partners/ihg-destined
    properties: [
      {
        name: "Six Senses Bhutan",
        location: "Bhutan",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Six Senses Kyoto",
        location: "Kyoto, Japan",
        imageUrl:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Carlton Cannes, a Regent Hotel",
        location: "Cannes, France",
        imageUrl:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Six Senses Zil Pasyon",
        location: "Félicité Island, Seychelles",
        imageUrl:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Kimpton De Witt Amsterdam",
        location: "Amsterdam, Netherlands",
        imageUrl:
          "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Six Senses Yao Noi",
        location: "Phang Nga Bay, Thailand",
        imageUrl:
          "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "melia-bravos",
    name: "Meliá Bravos",
    tagline: "European sophistication, global reach.",
    description:
      "Bravos is an invitation-only preferred partner program exclusively for high-end travel agencies. BTA clients enjoy exclusive privileges at a curated group of 42 Meliá properties from Gran Meliá, the Meliá Collection, ME, and Paradisus. spanning Madrid, Ibiza, Tanzania, Playa del Carmen, and beyond.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&auto=format&fit=crop",
    accentColor: "#7b2d8b",
    benefits: [
      "Daily breakfast for two guests",
      "Complimentary meal for two (stays of 3+ nights)",
      "Room upgrade whenever possible",
      "Extended check-in and check-out",
      "Welcome amenity upon arrival",
    ],
    // Properties verified via foratravel.com/partners/bravos. all confirmed Bravos-eligible
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
      {
        name: "Paradisus Playa del Carmen",
        location: "Playa del Carmen, Mexico",
        imageUrl:
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80&auto=format&fit=crop",
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
      "Hotel credit per stay",
      "Daily breakfast for two guests",
      "Priority room upgrade (subject to availability)",
      "Extended check-in and check-out (subject to availability)",
    ],
    // All properties verified via foratravel.com/partners/virtuoso
    properties: [
      {
        name: "Borgo Egnazia",
        location: "Puglia, Italy",
        imageUrl:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Ashford Castle",
        location: "County Mayo, Ireland",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "One&Only Palmilla",
        location: "Los Cabos, Mexico",
        imageUrl:
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Atlantis The Royal",
        location: "Dubai, UAE",
        imageUrl:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Etéreo, Auberge Collection",
        location: "Riviera Maya, Mexico",
        imageUrl:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "The Fifth Avenue Hotel",
        location: "New York, USA",
        imageUrl:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "shangri-la",
    name: "Shangri-La",
    tagline: "Asian hospitality at its most refined.",
    description:
      "BTA's preferred partnership with Shangri-La Hotels and Resorts grants clients exclusive access to one of Asia's most iconic luxury brands. spanning 100+ properties across 22 countries. From the Maldives to Paris, every Shangri-La stay through BTA is elevated with guaranteed amenities.",
    category: "Hotels",
    heroImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format&fit=crop",
    accentColor: "#8b1a1a",
    benefits: [
      "Daily complimentary breakfast for two guests",
      "Property credit per stay (dining, spa, or activities)",
      "Room upgrade upon arrival (subject to availability)",
      "Early check-in and late check-out (subject to availability)",
      "Complimentary welcome amenity",
    ],
    // All properties verified as Shangri-La brand hotels via shangri-la.com
    properties: [
      {
        name: "Shangri-La Paris",
        location: "Paris, France",
        imageUrl:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Shangri-La Villingili Resort & Spa",
        location: "Addu Atoll, Maldives",
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
      "J.MAK curates a portfolio of independently vetted luxury properties worldwide. from coastal sanctuaries to mountain retreats. and provides BTA clients with exclusive welcome amenities and curated on-property experiences that cannot be accessed through standard booking channels.",
    category: "Collections",
    heroImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=85&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop",
    accentColor: "#2d4a22",
    benefits: [
      "Exclusive J.MAK welcome amenity upon arrival (varies by property)",
      "Curated on-property experiences and activities",
      "Access to a portfolio of independently vetted luxury properties",
      "Direct relationship with property general managers",
    ],
    // All properties verified via jmak.com/hotels
    properties: [
      {
        name: "The Inn at Newport Ranch",
        location: "Fort Bragg, California",
        imageUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Carneros Resort and Spa",
        location: "Napa, California",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "El Encanto",
        location: "Santa Barbara, California",
        imageUrl:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Appellation Healdsburg",
        location: "Healdsburg, California",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
];

// ─── Favourite properties (hub page. 2 rows of 3) ──────────────────────────────
// All verified against their respective partner programs above

export const favouriteProperties = [
  {
    name: "Andaz Maui at Wailea Resort",
    partner: "Hyatt Privé",
    location: "Maui, Hawaii",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&auto=format&fit=crop",
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
    name: "Six Senses Kyoto",
    partner: "IHG Destined",
    location: "Kyoto, Japan",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80&auto=format&fit=crop",
    partnerId: "ihg-lifestyle-luxury",
  },
  {
    name: "Canaves Oia Suites",
    partner: "SLH withIN",
    location: "Santorini, Greece",
    imageUrl:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80&auto=format&fit=crop",
    partnerId: "slh-within",
  },
  {
    name: "Ashford Castle",
    partner: "Virtuoso",
    location: "County Mayo, Ireland",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop",
    partnerId: "virtuoso",
  },
  {
    name: "Carneros Resort and Spa",
    partner: "JMak",
    location: "Napa, California",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop",
    partnerId: "jmak",
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
