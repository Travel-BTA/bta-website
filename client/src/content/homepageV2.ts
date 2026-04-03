// ============================================================
//  BTA WEBSITE. CONTENT CONFIGURATION FILE
//  File: client/src/content/homepage.ts
// ============================================================
//
//  HOW TO USE THIS FILE
//  ─────────────────────
//  This is the ONE file you edit to update any content on the
//  homepage. You do NOT need to touch any other file.
//
//  WHAT YOU CAN CHANGE HERE:
//    ✏️  Text . headlines, body copy, labels, button text
//    🔗  Links. nav links, button hrefs, social media URLs
//    🖼️  Photos. paste a new image URL to swap any photo
//    📞  Contact. phone, email, address
//
//  HOW TO SWAP A PHOTO:
//    1. Upload your image in the Manus file manager, OR
//       paste a direct image URL (e.g. from your website/CDN)
//    2. Replace the URL in the imageUrl / backgroundImage field
//    3. Save. the site updates instantly in the live preview
//
//  SECTIONS IN THIS FILE (in page order):
//    1.  NAV BAR         . logo, navigation links, Book Now button
//    2.  HERO            . background photo, headline, partner logos
//    3.  WHO WE ARE      . intro text block
//    4.  STATS           . 3 numbers (countries, trips, value)
//    5.  PHILOSOPHY      . features list + side image
//    6.  CURATED HOTELS  . full-width banner photo + script text
//    7.  EXCLUSIVE BENEFITS. bullet list of perks
//    8.  VIP ACCESS      . headline + side photo
//    9.  GIVES BACK      . charity section text + photo
//    10. EXPERIENCE STRIP. full-width decorative photo
//    11. JOURNAL         . 3 blog post cards
//    12. TESTIMONIALS    . 3 client quotes
//    13. INSTAGRAM       . handle + 6 feed photos
//    14. FINAL CTA       . closing banner + button
//    15. FOOTER          . tagline, links, contact info
//
// ============================================================


// ─────────────────────────────────────────────
//  1. NAV BAR
// ─────────────────────────────────────────────
export const nav = {
  logo: {
    // The official BTA logo shown in the top-left corner
    // To swap: replace the URL below with your new logo image URL
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663449292159/cXyPMQeBTKSRcwla.png",
    alt: "Boutique Travel Advisors",
  },
  links: [
    // Edit label to change the nav text; edit href to change where it goes
    { label: "Land Journeys",    href: "/land-journeys" },
    { label: "Cruises",          href: "/cruises" },
    { label: "Inspiration",      href: "/inspiration" },
    { label: "Trusted Partners", href: "/trusted-partners" },
    { label: "Resources",        href: "/resources" },
    { label: "About",            href: "/about" },
  ],
  cta: {
    // The "BOOK NOW" button in the top-right corner
    label: "BOOK NOW",
    href: "/book",
  },
};


// ─────────────────────────────────────────────
//  2. HERO SECTION  (full-screen opening banner)
// ─────────────────────────────────────────────
export const hero = {
  // 🖼️ HERO BACKGROUND PHOTO
  // Large full-screen image behind the headline
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/39a8e9fafb7b9a6c94072275b47e71eb9537b1e7_e32919d9.webp",

  // ✏️ MAIN HEADLINE  (use \n to force a line break)
  headline: "WHERE WILL YOUR\nJOURNEY TAKE YOU?",

  // ✏️ SUBHEADLINE  (italic line below the headline)
  subheadline: "Travel that transforms your world and shapes unforgettable moments.",

  // 🔗 CIRCULAR CTA BUTTON  (bottom-right of hero)
  cta: {
    label: "PLAN YOUR\nJOURNEY",
    href: "/plan",
  },

  // 🖼️ PARTNER LOGOS BAR  (bottom of hero, white/translucent)
  // To swap a logo: replace imageUrl with a new white-on-transparent PNG URL
  partnerLogos: [
    { name: "Virtuoso",          imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663449292159/YCYFLNYgOCzYgqPe.png" },
    { name: "ASTA",              imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/asta-no-bg_27008908.png" },
    { name: "Best of Our Valley",imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663449292159/KHiqEjJYhveFioGy.png" },
    { name: "IATAN",             imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663449292159/KwayoiqkQkxnlnlw.png" },
    { name: "Forbes Travel Guide", imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/forbes-cropped_aad17c88.png" },
  ],
};


// ─────────────────────────────────────────────
//  3. WHO WE ARE  (intro section)
// ─────────────────────────────────────────────
export const whoWeAre = {
  eyebrow: "Who We Are:",                                    // small label above headline
  headline: "BESPOKE TRAVEL, DESIGNED FOR YOU",
  body: "At Boutique Travel, we craft once-in-a-lifetime journeys for the discerning traveler. fueled by curiosity, expertise, and a passion for discovery.",
  cta: {
    label: "EXPLORE OUR APPROACH",
    href: "/about",
  },
};


// ─────────────────────────────────────────────
//  4. STATS BAR  (3 numbers across the page)
// ─────────────────────────────────────────────
export const stats = [
  { value: "125+",  label: "Countries Planned" },
  { value: "3,000+", label: "Trips Booked" },
  { value: "$40M+", label: "in Travel Designed" },
];


// ─────────────────────────────────────────────
//  5. PHILOSOPHY  (features list + side image)
// ─────────────────────────────────────────────
export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: "THE ART OF\nMEANINGFUL TRAVEL",
  body: "We believe luxury is personal, purposeful, and profoundly transformative.",

  // List of feature/benefit items shown on the left side
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

  cta: {
    label: "LEARN MORE",
    href: "/about",
  },

  // 🖼️ SIDE IMAGE  (right side of the philosophy section)
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/airplane-window_98d2995f.webp",
};


// ─────────────────────────────────────────────
//  6. CURATED HOTELS  (full-width banner)
// ─────────────────────────────────────────────
export const curatedHotels = {
  // 🖼️ FULL-WIDTH BACKGROUND PHOTO
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/terrace-sunset_526ca796.webp",

  // ✏️ SCRIPT TEXT overlaid on the photo (two lines)
  scriptLine1: "Explore our",
  scriptLine2: "curated hotels",
};


// ─────────────────────────────────────────────
//  7. EXCLUSIVE BENEFITS  (bullet list)
// ─────────────────────────────────────────────
export const exclusiveBenefits = {
  headline: "EXCLUSIVE\nBENEFITS",
  // Add, remove, or edit any benefit item below
  benefits: [
    { label: "Specially negotiated rates" },
    { label: "VIP Manager Welcome" },
    { label: "Daily Breakfast for Two" },
    { label: "$100 Resort or Spa Credit" },
    { label: "Room upgrade upon availability" },
    { label: "Flexible check-in/out *" },
  ],
};


// ─────────────────────────────────────────────
//  8. VIP ACCESS  (headline + side photo)
// ─────────────────────────────────────────────
export const vipAccess = {
  headline: "VIP MEMBER ACCESS TO\nVETTED HOTELS &\nEXPERIENCES",
  subheadline: "Exclusive Member Privileges Worth $350* Per Stay",

  // 🖼️ SIDE IMAGE
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/pearls-yacht_1dd80f10.webp",
};


// ─────────────────────────────────────────────
//  9. GIVES BACK  (charity / purpose section)
// ─────────────────────────────────────────────
export const givesBack = {
  eyebrow: "Purpose and Meaning",
  headline: "TRAVEL THAT GIVES BACK",
  body: "Connection matters.to people, to places, and communities. Through select partnerships, your journeys quietly support arts, education, sports, travel and community. A portion of every booking supports local charities including childhood cancer, Make-A-Wish, veterans, and arts & culture where we travel.",

  // 🖼️ SIDE IMAGE
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/children-charity_9d8a6581.png",
};


// ─────────────────────────────────────────────
//  10. EXPERIENCE STRIP  (decorative full-width photo)
// ─────────────────────────────────────────────
export const experienceStrip = {
  // 🖼️ FULL-WIDTH DECORATIVE PHOTO  (no text overlay)
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hiker-coastal_412c8551.webp",
};


// ─────────────────────────────────────────────
//  11. JOURNAL  (3 blog post cards)
// ─────────────────────────────────────────────
export const journal = {
  eyebrow: "The Journal",
  headline: "INSIGHTS & INSPIRATION",
  subheadline: "Stories from the world's most extraordinary places",

  // Edit or add blog post cards below
  // Each post needs: category, readTime, title, href (link), image (URL)
  posts: [
    {
      category: "Travel Philosophy",
      readTime: "5 mins",
      title: "The Art of Slow Travel in Italy",
      href: "/inspiration/slow-travel-italy",
      // 🖼️ Card photo. swap URL to change the image
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


// ─────────────────────────────────────────────
//  12. TESTIMONIALS  (3 client quotes)
// ─────────────────────────────────────────────
export const testimonials = [
  {
    // context = small italic line above the quote
    context: "Every detail felt thoughtful and intentional.",
    // quote = the large bold statement
    quote: "IT WAS TRAVEL THAT TRULY MEANT SOMETHING.",
    // author = name shown below
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


// ─────────────────────────────────────────────
//  13. INSTAGRAM FEED
// ─────────────────────────────────────────────
export const instagram = {
  eyebrow: "Follow the Journey",
  // ✏️ Your Instagram handle (displayed as text)
  handle: "@BOUTIQUETRAVELADVISORS",
  // 🔗 Link to your Instagram profile
  href: "https://www.instagram.com/boutiquetraveladvisors",

  // 🖼️ 6 FEED PHOTOS . replace each URL with a real Instagram screenshot
  // Tip: screenshot your Instagram grid and upload each square here
  photos: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80&auto=format&fit=crop",
  ],
};


// ─────────────────────────────────────────────
//  14. FINAL CTA  (closing full-width banner)
// ─────────────────────────────────────────────
export const finalCta = {
  // 🖼️ BACKGROUND PHOTO
  backgroundImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/1b9f41512792ea6a57f9aaf24f0b9fd1fa154a9a_230eb092.webp",

  // ✏️ TEXT
  subheadline: "Live life with no excuses, travel with no regrets",
  headline: "BEGIN YOUR NEXT CHAPTER",

  // 🔗 BUTTON
  cta: {
    label: "START PLANNING",
    href: "/plan",
  },
};


// ─────────────────────────────────────────────
//  15. FOOTER
// ─────────────────────────────────────────────
export const footer = {
  // ✏️ Tagline shown in the footer center
  tagline: "Creating memories one destination at a time",

  // 🔗 SOCIAL MEDIA LINKS
  social: [
    { platform: "Instagram", href: "https://www.instagram.com/boutiquetraveladvisors" },
    { platform: "Facebook",  href: "https://www.facebook.com/boutiquetraveladvisors" },
    { platform: "LinkedIn",  href: "https://www.linkedin.com/company/boutique-travel-advisors" },
  ],

  // 🔗 EXPLORE COLUMN LINKS
  explore: [
    { label: "Destinations", href: "/destinations" },
    { label: "Experiences",  href: "/experiences" },
    { label: "Advisors",     href: "/advisors" },
    { label: "Journal",      href: "/inspiration" },
  ],

  // 🔗 COMPANY COLUMN LINKS
  company: [
    { label: "About",   href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Press",   href: "/press" },
  ],

  // 📞 CONTACT DETAILS
  contact: {
    phone: "480-787-1477",
    email: "info@travelbta.com",
    virtuoso: "Virtuoso Member Agency | 2142139",
  },

  // ✏️ LEGAL LINKS
  legal: [
    { label: "Privacy Policy",    href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
  ],

  // ✏️ COPYRIGHT LINE
  copyright: "© 2024 Travel BTA All Rights Reserved",
};
