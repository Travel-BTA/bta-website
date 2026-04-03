/**
 * BTA Philanthropic Initiatives Page — Content Configuration
 *
 * PURPOSE: Single source of truth for all Philanthropy page content.
 * Edit ONLY this file for content/image changes — never touch the component.
 *
 * NOTE: Pack for a Purpose intentionally removed. NJT is the featured partner.
 */

export const philanthropyHero = {
  backgroundImage:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=90&auto=format&fit=crop",
  eyebrow: "Giving Back",
  headline: "TRAVEL WITH\nPURPOSE",
  subheadline: "We make a living by what we get. We make a life by what we give.",
  attribution: "— Winston Churchill",
};

export const philanthropyIntro = {
  eyebrow: "BTA Philanthropy",
  headline: "Boutique Travel Advisors™ & Our Philanthropy",
  body: "We are passionate about supporting non-profit organizations within our local communities and in every destination our clients explore. Our mission: to positively affect the lives of others through meaningful, purposeful travel.",
  images: [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=85&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=85&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=85&auto=format&fit=crop",
  ],
};

// Each pillar has its own full-bleed background image
export const philanthropyPillars = {
  eyebrow: "Our Foundation",
  headline: "Pillars of Community",
  pillars: [
    {
      name: "Joy",
      tagline: "Spreading happiness at home and abroad",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Wellbeing",
      tagline: "Mind, body, and spirit — for all",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Connection",
      tagline: "Building bridges across cultures",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Sustainability",
      tagline: "Protecting the places we love",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85&auto=format&fit=crop",
    },
    {
      name: "Gratitude",
      tagline: "Giving back with intention",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=900&q=85&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "Make-A-Wish Foundation",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "San Diego Automobile Museum",
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "CASA Orange County",
      imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
    {
      name: "Comfy Cozys",
      imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80&auto=format&fit=crop",
      logoUrl: "",
    },
  ],
};

export const philanthropyNjt = {
  eyebrow: "Bring a Suitcase, Save a Life",
  headline: "Not Just Tourists",
  body: "BTA Co-Founder Janet Semenova's husband runs the Scottsdale, AZ chapter for NJT. Pack light — swap one checked bag for supplies that change lives. Some carriers allow extra weight under \"humanitarian aid\" policies.",
  imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=85&auto=format&fit=crop",
  galleryImages: [
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80&auto=format&fit=crop",
  ],
  cta: { label: "Learn About NJT", href: "https://www.notjusttourists.org" },
};

export const philanthropyPartnerships = {
  eyebrow: "Community Partnerships",
  headline: "Partner With BTA",
  body: "We offer partnership opportunities with select 501(c)(3) nonprofits aligned with our five pillars. Organizations must have been in existence for at least two years with measurable objectives.",
  backgroundImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=85&auto=format&fit=crop",
  contact: { label: "Inquire About a Partnership", href: "mailto:angie@travelbta.com" },
};

export const philanthropyFundraise = {
  eyebrow: "Fundraise With BTA",
  headline: "A Travel Drive That Gives Back",
  body: "For each itinerary booked during your campaign window, BTA donates a portion of proceeds directly to your nonprofit — plus full marketing and technology support.",
  imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=85&auto=format&fit=crop",
  cta: { label: "Start a Travel Drive", href: "mailto:angie@travelbta.com" },
};

export const philanthropyCta = {
  backgroundImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=90&auto=format&fit=crop",
  eyebrow: "Travel That Transforms",
  headline: "JOIN US IN MAKING\nA DIFFERENCE",
  subheadline: "Every journey you take with BTA contributes to something greater.",
  cta: { label: "Plan Your Journey", href: "/book" },
};
