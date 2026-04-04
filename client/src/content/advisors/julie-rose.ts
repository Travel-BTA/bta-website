/**
 * Advisor Profile Content. Julie Rose
 *
 * HOW TO DUPLICATE FOR A NEW ADVISOR:
 *   1. Copy this file to client/src/content/advisors/[advisor-slug].ts
 *   2. Replace every text value, image URL, and link below
 *   3. Copy client/src/pages/advisors/JulieRose.tsx to [AdvisorName].tsx
 *   4. Import this new content file in the new page file
 *   5. Add a route in client/src/App.tsx: <Route path="/advisors/[slug]" component={NewAdvisor} />
 *
 * IMAGE NOTES:
 *   - Replace placeholder URLs with real CDN URLs from `manus-upload-file --webdev`
 *   - Recommended sizes: hero 1440×900, portrait 600×800, landscape 800×600
 */

export const advisor = {
  // ─── HERO SECTION ────────────────────────────────────────────────────────────
  hero: {
    name: "Julie Rose",
    title: "Luxury Travel Advisor & Virtuoso Member",
    tagline: "Crafting journeys that transform the way you see the world.",
    // Credential badges shown below name
    badges: [
      "Virtuoso Member",
      "Certified Luxury Specialist",
      "15+ Years Experience",
    ],
    ctaPrimary:   { label: "Start Planning With Julie", href: "/contact-us" },
    ctaSecondary: { label: "View Her Specialties",      href: "#specialties" },
    // Replace with real hero photo. full-width, landscape orientation
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1440&q=80",
  },

  // ─── MEET SECTION ─────────────────────────────────────────────────────────────
  meet: {
    eyebrow: "Meet Julie",
    heading: "A Passion for\nMeaningful Travel",
    bio: [
      "With over 15 years crafting bespoke journeys for discerning travelers, Julie Rose brings an unmatched depth of destination knowledge and a genuine love for the art of travel. A Virtuoso-certified luxury specialist, she has personally explored more than 60 countries. from the private islands of the Maldives to the ancient temples of Kyoto.",
      "Julie's approach is simple: every journey should feel effortlessly personal. She listens deeply, designs meticulously, and stays with you every step of the way. before, during, and after your trip.",
    ],
    quote: "\"Travel is not just a destination. it's a transformation. My job is to make sure yours is unforgettable.\"",
    cta: { label: "Begin Planning With Julie", href: "/contact-us" },
    // Two overlapping portrait photos. replace with real advisor photos
    photoMain:   "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
    photoAccent: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },

  // ─── STATS BAR ────────────────────────────────────────────────────────────────
  stats: [
    { value: "60+",   label: "Countries Explored" },
    { value: "15",    label: "Years of Experience" },
    { value: "6",     label: "Continents Covered" },
    { value: "500+",  label: "Trips Designed" },
  ],

  // ─── CURATED HOTELS ───────────────────────────────────────────────────────────
  hotels: {
    eyebrow: "Curated Collection",
    heading: "Julie's Favourite\nLuxury Hotels",
    subheading: "Personally vetted properties where BTA clients receive exclusive VIP treatment.",
    items: [
      {
        badge:     "Virtuoso Preferred",
        location:  "North Malé Atoll, Maldives",
        name:      "Soneva Jani",
        quote:     "\"Overwater villas with retractable roofs for stargazing. pure magic.\"",
        perks:     ["Daily breakfast for two", "$100 spa credit", "Room upgrade on arrival", "VIP welcome"],
        image:     "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      },
      {
        badge:     "BTA Exclusive",
        location:  "Positano, Amalfi Coast",
        name:      "Le Sirenuse",
        quote:     "\"The most romantic terrace in all of Italy. every room a painting.\"",
        perks:     ["Complimentary breakfast", "Aperitivo welcome", "Early check-in", "Concierge priority"],
        image:     "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
      },
      {
        badge:     "Virtuoso Preferred",
        location:  "Kyoto, Japan",
        name:      "Aman Kyoto",
        quote:     "\"Hidden in an ancient forest. the most serene luxury I've ever experienced.\"",
        perks:     ["Private forest walk", "Tea ceremony", "Breakfast included", "Sake welcome amenity"],
        image:     "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      },
    ],
  },

  // ─── SPECIALTIES ──────────────────────────────────────────────────────────────
  specialties: {
    eyebrow: "Areas of Expertise",
    heading: "Her Specialties",
    items: [
      { label: "European River Cruises",    description: "Intimate sailings through France, Germany & the Danube with handpicked shore excursions.",  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80" },
      { label: "African Safaris",           description: "Private game reserves, expert guides, and camp upgrades across Kenya, Tanzania & Botswana.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg" },
      { label: "Japan & Asia",              description: "Curated cultural immersions from Kyoto ryokans to Maldivian overwater villas.",               image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
      { label: "Mediterranean Escapes",     description: "Amalfi, Santorini & the Riviera. villa stays, yacht charters, and insider dining.",          image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" },
      { label: "Luxury Expedition Cruises", description: "Antarctica, Patagonia & the Arctic aboard intimate expedition ships with world-class lecturers.", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80" },
      { label: "Bespoke Honeymoons",        description: "Romantic escapes crafted around your story. from overwater bungalows to private island retreats.", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80" },
    ],
  },

  // ─── PHILOSOPHY ───────────────────────────────────────────────────────────────
  philosophy: {
    eyebrow: "Her Approach",
    heading: "The Art of Thoughtful Travel",
    quote: "\"Every detail matters. Every moment is an opportunity for wonder.\"",
    pillars: [
      {
        icon: "compass",
        title: "Deep Destination Knowledge",
        body: "Julie has personally visited every destination she recommends. no guesswork, only firsthand expertise.",
      },
      {
        icon: "heart",
        title: "Genuinely Personal",
        body: "She takes time to understand who you are, what moves you, and what you dream of experiencing.",
      },
      {
        icon: "star",
        title: "Exclusive Access",
        body: "As a Virtuoso member, Julie unlocks VIP amenities, private experiences, and insider access unavailable elsewhere.",
      },
      {
        icon: "shield",
        title: "Seamless Support",
        body: "From the first call to the final flight home, Julie is your advocate. available 24/7 when it matters most.",
      },
    ],
  },

  // ─── FEATURED EXPERIENCES ─────────────────────────────────────────────────────
  experiences: {
    eyebrow: "Featured Journeys",
    heading: "Experiences Designed\nBy Julie",
    items: [
      {
        duration: "14 Days",
        region:   "Italy & Greece",
        title:    "Amalfi to Santorini. A Mediterranean Dream",
        description: "Private villa stays, yacht charters, and Michelin-starred dining along the world's most beautiful coastlines.",
        image:    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
        href:     "/contact-us",
      },
      {
        duration: "10 Days",
        region:   "East Africa",
        title:    "Tanzania Safari & Zanzibar Beach Escape",
        description: "Witness the Great Migration in the Serengeti, then unwind on the spice-scented beaches of Zanzibar.",
        image:    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg",
        href:     "/contact-us",
      },
      {
        duration: "12 Days",
        region:   "Japan",
        title:    "Japan in Full Bloom. Cherry Blossom Season",
        description: "Tokyo, Kyoto, and Hakone timed perfectly for sakura season, with private ryokan stays and tea ceremony experiences.",
        image:    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        href:     "/contact-us",
      },
    ],
  },

  // ─── WHY WORK WITH ────────────────────────────────────────────────────────────
  whyWork: {
    eyebrow: "Why Work With Julie",
    heading: "Your Journey,\nPerfectly Handled",
    benefits: [
      { title: "Virtuoso Preferred Partner Access",    body: "Exclusive amenities worth $350+ per stay at 1,200+ luxury hotels worldwide." },
      { title: "Complimentary Trip Planning",          body: "No booking fees. Julie's expertise is your advantage, not an added cost." },
      { title: "24/7 On-Trip Support",                 body: "A direct line to Julie throughout your journey for anything that arises." },
      { title: "Fully Customized Itineraries",         body: "Every journey is built from scratch around your interests, pace, and style." },
      { title: "Trusted Vendor Network",               body: "Relationships with the world's finest hotels, guides, and operators. built over 15 years." },
    ],
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    cta:   { label: "Start Planning With Julie", href: "/contact-us" },
  },

  // ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Client Stories",
    heading: "What Travelers Say\nAbout Julie",
    items: [
      {
        quote:  "Julie planned our honeymoon in the Maldives and it was absolutely perfect. Every single detail was taken care of. we just showed up and enjoyed. We've already booked our anniversary trip with her.",
        author: "Sarah & Michael T.",
        trip:   "Maldives Honeymoon",
        rating: 5,
      },
      {
        quote:  "I've worked with many travel agents over the years, but Julie is in a completely different league. Her knowledge of Japan is extraordinary. she found experiences we never would have discovered on our own.",
        author: "Robert K.",
        trip:   "Japan Cherry Blossom Tour",
        rating: 5,
      },
      {
        quote:  "Our African safari was the trip of a lifetime. Julie's attention to detail and her relationships with the lodges made everything seamless. We felt like VIPs everywhere we went.",
        author: "The Henderson Family",
        trip:   "Tanzania Safari",
        rating: 5,
      },
    ],
  },

  // ─── CONTACT / BOOKING FORM ───────────────────────────────────────────────────
  contact: {
    eyebrow: "Start Planning",
    heading: "Begin Your Journey\nWith Julie",
    subheading: "Tell Julie about your dream trip and she'll be in touch within 24 hours.",
    fields: {
      namePlaceholder:        "Your Full Name",
      emailPlaceholder:       "Your Email Address",
      phonePlaceholder:       "Phone Number (optional)",
      destinationPlaceholder: "Where would you like to go?",
      messagePlaceholder:     "Tell Julie about your dream trip. destinations, dates, travel style...",
      submitLabel:            "Send My Enquiry",
    },
    // Club CTA (right side)
    club: {
      eyebrow: "Join the Club",
      heading: "Unlock VIP Travel\nPrivileges",
      body:    "BTA Club members enjoy exclusive rates, priority access, and a dedicated advisor relationship. starting at just $299/year.",
      cta:     { label: "Learn About Membership", href: "/membership" },
    },
  },

  // ─── CLOSING QUOTE BANNER ─────────────────────────────────────────────────────
  closingBanner: {
    quote:  "\"The world is a book, and those who do not travel read only one page.\"",
    credit: ". Saint Augustine",
    image:  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1440&q=80",
    cta:    { label: "Plan Your Journey", href: "/contact-us" },
  },
};
