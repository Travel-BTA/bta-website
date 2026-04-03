/**
 * BTA Philanthropic Initiatives Page — Content Configuration
 *
 * PURPOSE: Single source of truth for all Philanthropy page content.
 * Edit ONLY this file for content/image changes — never touch the component.
 *
 * IMAGE POLICY: All images sourced from Unsplash (royalty-free).
 *   - No hands, no graphic imagery, no mismatched subjects.
 *   - Each image must visually match its section context.
 *
 * NOTE: Pack for a Purpose intentionally removed. NJT is the featured partner.
 */

export const philanthropyHero = {
  // Warm community scene — children smiling, uplifting
  backgroundImage:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=90&auto=format&fit=crop",
  eyebrow: "Giving Back",
  headline: "TRAVEL WITH\nPURPOSE",
  subheadline: "We make a living by what we get. We make a life by what we give.",
  attribution: "— Winston Churchill",
};

export const philanthropyIntro = {
  eyebrow: "BTA Philanthropy",
  headline: "Boutique Travel Advisors™\n& Our Philanthropy",
  body: "We are passionate about supporting non-profit organizations within our local communities and in every destination our clients explore. Our mission: to positively affect the lives of others through meaningful, purposeful travel.",
  // Mosaic: community gathering, travel giving, children learning
  images: [
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900&q=85&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=900&q=85&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=85&auto=format&fit=crop",
  ],
};

// Each pillar has a clean, appropriate background image
export const philanthropyPillars = {
  eyebrow: "Our Foundation",
  headline: "Pillars of Community",
  pillars: [
    {
      name: "Joy",
      tagline: "Spreading happiness at home and abroad",
      // Children laughing, celebration
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Wellbeing",
      tagline: "Mind, body, and spirit — for all",
      // Peaceful nature / wellness
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Connection",
      tagline: "Building bridges across cultures",
      // People together at a table, community
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Sustainability",
      tagline: "Protecting the places we love",
      // Lush forest / nature conservation
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Gratitude",
      tagline: "Giving back with intention",
      // Warm sunrise / golden light — uplifting, no hands
      imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=85&auto=format&fit=crop",
    },
  ],
};

export const philanthropyBeneficiaries = {
  eyebrow: "2025 Philanthropic Beneficiaries",
  headline: "Every Booking Makes a Difference",
  body: "A portion of every hotel booking through the BTA Luxury Travel Club directly benefits one of our featured causes.",
  organizations: [
    {
      name: "Amanda Hope Rainbow Angels",
      description: "Bringing hope and comfort to children with cancer.",
      // Children smiling, hopeful
      imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "Make-A-Wish Foundation",
      description: "Granting life-changing wishes for children with critical illnesses.",
      // Child wonder / magical moment
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "San Diego Automobile Museum",
      description: "Preserving automotive history and inspiring future generations.",
      // Classic car / museum interior — clean
      imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "CASA Orange County",
      description: "Advocating for abused and neglected children in court.",
      // Child with book in safe, warm setting
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },

    {
      name: "The Phoenix Symphony",
      description: "Bringing world-class music to the Phoenix community.",
      // Concert hall / orchestra — elegant
      imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "First Tee Arizona",
      description: "Empowering young people through the game of golf.",
      // Golf course, youth, outdoors
      imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },

  ],
};

export const philanthropyNjt = {
  eyebrow: "Bring a Suitcase, Save a Life",
  headline: "Not Just Tourists",
  body: "BTA Co-Founder Janet Semenova's husband runs the Scottsdale, AZ chapter for NJT. Pack light — swap one checked bag for supplies that change lives. Some carriers allow extra weight under humanitarian aid policies.",
  // Suitcase / travel / giving — clean
  imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=85&auto=format&fit=crop",
  galleryImages: [
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=600&q=80&auto=format&fit=crop",
  ],
  cta: { label: "Learn About NJT", href: "https://www.notjusttourists.org" },
};

export const philanthropyPartnerships = {
  eyebrow: "Community Partnerships",
  headline: "Partner With BTA",
  body: "We offer partnership opportunities with select 501(c)(3) nonprofits aligned with our five pillars. Organizations must have been in existence for at least two years with measurable objectives.",
  // Clean aerial city / community — no hands
  backgroundImage:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85&auto=format&fit=crop",
  contact: { label: "Inquire About a Partnership", href: "mailto:angie@travelbta.com" },
};

export const philanthropyFundraise = {
  eyebrow: "Fundraise With BTA",
  headline: "A Travel Drive That Gives Back",
  body: "For each itinerary booked during your campaign window, BTA donates a portion of proceeds directly to your nonprofit — plus full marketing and technology support.",
  // People celebrating / travel
  imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=85&auto=format&fit=crop",
  cta: { label: "Start a Travel Drive", href: "mailto:angie@travelbta.com" },
};

export const philanthropyCta = {
  // Scenic landscape — aspirational, clean
  backgroundImage:
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=90&auto=format&fit=crop",
  eyebrow: "Travel That Transforms",
  headline: "JOIN US IN MAKING\nA DIFFERENCE",
  subheadline: "Every journey you take with BTA contributes to something greater.",
  cta: { label: "Plan Your Journey", href: "/book" },
};
