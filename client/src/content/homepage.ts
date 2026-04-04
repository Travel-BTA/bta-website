/**
 * BTA Homepage Content Configuration
 *
 * PURPOSE: This file is the single source of truth for all homepage content.
 * To update text, links, or photos. edit ONLY this file.
 * Never modify the component files for content changes.
 *
 * IMAGE WORKFLOW: Upload images via `manus-upload-file --webdev path/to/image.jpg`
 * then paste the returned CDN URL into the imageUrl fields below.
 */

export const nav = {
  logo: {
    text: "BOUTIQUE\ntravel\nADVISORS",
    // Replace with official logo CDN URL when available
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png",
  },
  links: [
    { label: "Destinations", href: "/destinations" },
    { label: "Experiences", href: "/experiences" },
    { label: "Land Journeys", href: "/land-journeys" },
    { label: "Cruises", href: "/cruises" },
    { label: "Partners", href: "/preferred-partners" },
    { label: "Journal", href: "/journal" },
    { label: "Press", href: "/press" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "BOOK NOW", href: "/contact-us" },
};

export const hero = {
  // Infinity pool at sunset. dramatic, aspirational
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/infinity-pool-sunset_1070585b.webp",
  headline: "WHERE WILL YOUR\nJOURNEY TAKE YOU?",
  subheadline: "Travel that transforms your world and shapes unforgettable moments.",
  cta: { label: "PLAN YOUR\nJOURNEY", href: "/contact-us" },
  partnerLogos: [
    { name: "Virtuoso", imageUrl: "" },
    { name: "ASTA", imageUrl: "" },
    { name: "Best of Our Valley", imageUrl: "" },
    { name: "IATAN", imageUrl: "" },
    { name: "Forbes", imageUrl: "" },
  ],
};

export const whoWeAre = {
  eyebrow: "Who We Are:",
  headline: "BESPOKE TRAVEL, DESIGNED FOR YOU",
  body: "At Boutique Travel, we craft once-in-a-lifetime journeys for the discerning traveler. fueled by curiosity, expertise, and a passion for discovery.",
  cta: { label: "EXPLORE OUR APPROACH", href: "/about" },
};

export const stats = [
  { value: "125+", label: "Countries Planned" },
  { value: "4,000+", label: "Trips Booked" },
  { value: "$60M+", label: "in Travel Designed" },
];

export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: "THE ART OF\nMEANINGFUL TRAVEL",
  body: "We believe luxury is personal, purposeful, and profoundly transformative.",
  features: [
    {
      title: "Custom Itineraries",
      description: "Immersive, culture-rich journeys capturing each destination's true essence.",
    },
    {
      title: "Why Boutique Travel Advisors™",
      description: "VIP treatment worldwide with exclusive privileges, benefits, technology, and service.",
    },
    {
      title: "Elevated Experiences",
      description: "Work directly with expert Virtuoso advisors on fully customized itineraries.",
    },
    {
      title: "Exceptional Partners",
      description: "Trusted Virtuoso partners deliver VIP amenities, exceptional service, responsibly.",
    },
    {
      title: "Membership Options",
      description: "Flexible design packages and annual membership for every travel style.",
    },
  ],
  cta: { label: "LEARN MORE", href: "/about" },
  // Hot air balloon over African savanna at sunset. couple with champagne. elevated, aspirational
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/philosophy_3_elevated_experiences_ce33cc2b.jpg",
};

export const curatedHotels = {
  // Terrace dining at sunset with island views. warm, aspirational
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/terrace-sunset_526ca796.webp",
  scriptLine1: "Explore our",
  scriptLine2: "curated hotels",
};

export const exclusiveBenefits = {
  headline: "EXCLUSIVE\nBENEFITS",
  benefits: [
    { label: "Specially negotiated rates" },
    { label: "VIP Manager Welcome" },
    { label: "Daily Breakfast for Two" },
    { label: "$100 Resort or Spa Credit" },
    { label: "Room upgrade upon availability" },
    { label: "Flexible check-in/out *" },
  ],
};

export const vipAccess = {
  headline: "VIP MEMBER ACCESS TO\nVETTED HOTELS &\nEXPERIENCES",
  subheadline: "Exclusive Member Privileges Worth $350* Per Stay",
  // Pearls on a yacht. refined, luxurious detail
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/pearls-yacht_1dd80f10.webp",
};

export const givesBack = {
  eyebrow: "Purpose and Meaning",
  headline: "TRAVEL THAT GIVES BACK",
  body: "Connection matters.to people, to places, and communities. Through select partnerships, your journeys quietly support arts, education, sports, travel and community. A portion of every booking supports local charities including childhood cancer, Make-A-Wish, veterans, and arts & culture where we travel.",
  // Make-A-Wish moment: child with cancer at the ocean with parent. quiet, hopeful, deeply moving
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/gives-back-beach_54d12252.jpg",
};

export const experienceStrip = {
  // Hiker on coastal ridge. adventure, exploration
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hiker-coastal_412c8551.webp",
};

export const journal = {
  eyebrow: "The Journal",
  headline: "INSIGHTS & INSPIRATION",
  subheadline: "Stories from the world's most extraordinary places",
  posts: [
    {
      category: "Travel Philosophy",
      readTime: "5 mins",
      title: "The Art of Slow Travel in Italy",
      href: "/inspiration/slow-travel-italy",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Destinations",
      readTime: "5 mins",
      title: "Luxury Meets Sustainability in the Maldives",
      href: "/inspiration/maldives-sustainability",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Guides",
      readTime: "8 mins",
      title: "Planning Your First Multi-Country European Journey",
      href: "/inspiration/europe-multi-country",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&auto=format&fit=crop",
    },
  ],
};

export const testimonials = [
  {
    context: "Every detail felt thoughtful and intentional.",
    quote: "IT WAS TRAVEL THAT TRULY MEANT SOMETHING.",
    author: "Ava M.",
  },
  {
    context: "We experienced places, not just landmarks.",
    quote: "THE TRIP FELT PERSONAL FROM START TO FINISH.",
    author: "Daniel R.",
  },
  {
    context: "Effortless planning, unforgettable moments.",
    quote: "I CAME HOME INSPIRED AND REFRESHED.",
    author: "Lena K.",
  },
];

export const instagram = {
  eyebrow: "Follow the Journey",
  handle: "@travelbta",
  href: "https://www.instagram.com/travelbta",
  // Replace with actual Instagram feed screenshots
  photos: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80&auto=format&fit=crop",
  ],
};

export const finalCta = {
  // Infinity pool at sunset. aspirational close
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/infinity-pool-sunset_1070585b.webp",
  subheadline: "Live life with no excuses, travel with no regrets",
  headline: "BEGIN YOUR NEXT CHAPTER",
  cta: { label: "START PLANNING", href: "/contact-us" },
};

export const footer = {
  tagline: "Creating memories one destination at a time",
  social: [
    { platform: "Instagram", href: "https://www.instagram.com/boutiquetraveladvisors" },
    { platform: "Facebook", href: "https://www.facebook.com/boutiquetraveladvisors" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/company/boutique-travel-advisors" },
  ],
  explore: [
    { label: "Destinations", href: "/destinations" },
    { label: "Experiences", href: "/experiences" },
    { label: "Advisors", href: "/advisors" },
    { label: "Partners", href: "/preferred-partners" },
    { label: "Journal", href: "/inspiration" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact-us" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  contact: {
    phone: "480-787-1477",
    email: "info@travelbta.com",
    virtuoso: "Virtuoso Member Agency | 2142139",
  },
  // Legal links — routes must match App.tsx exactly
  legal: [
    { label: "Privacy Policy",      href: "/privacy-policy" },
    { label: "Terms of Service",     href: "/terms-of-service" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Fulfillment Policy",   href: "/fulfillment-policy" },
    { label: "Cookie Policy",        href: "/cookie-policy" },
  ],
  copyright: "© 2026 Travel BTA All Rights Reserved",
  // WHY: Admin link is intentionally discreet — visible only to team members who know it exists.
  adminHref: "/admin",
};
