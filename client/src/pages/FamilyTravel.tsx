/**
 * Family Travel Page
 * Route: /experiences/family-travel
 *
 * WHY: Family travel is one of BTA's most requested service categories.
 * This page communicates the agency's expertise across all family types —
 * young children, teenagers, and multigenerational groups — using the same
 * luxury editorial design language as the rest of the site.
 *
 * Typography:
 *   - All headings (h1, h2, h3): 'Instrument Serif', serif — light weight, ALWAYS UPPERCASE (text-transform: uppercase), NEVER italic
 *   - Eyebrow labels: 'Playfair Display', serif — weight 500, italic, gold, tracked
 *   - Body copy: system sans-serif stack, font-light
 *
 * Images: Janet's uploaded photos (CDN) + Unsplash for destinations not covered.
 */

import NavBar from "@/components/NavBar";
import { DestinationTimelineModal, DESTINATION_ITINERARIES } from "@/components/DestinationTimeline";
import { footer } from "@/content/homepage";
import { ArrowRight, Baby, Users, Globe, MapPin, Home, Compass, Luggage, Sparkles, Utensils, Camera, TreePine, GlassWater, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

// ── CDN image URLs ─────────────────────────────────────────────────────────
// Janet's uploaded photos (Manus CDN — permanent):
const CDN = {
  familyBeach:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/wXVbMyseEaNXhhWW.jpg",
  // Costa Rica — Janet's photos (Apr 2026):
  // costaRicaKayak = sloth in Arenal rainforest (Nayara Tented Camp stop)
  costaRicaKayak:    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/costa-rica-sloth-arenal_bc18c182.jpg",
  costaRicaSurf:     "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/costa-rica-family-surf_1bc1f9fb.jpg",
  italyVenice:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/vffZjZaZyJeIONSB.jpg",
  thailandElephant:  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/XVaYiUfdLMyvtpWJ.jpg",
  icelandWaterfall:  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iceland-family-waterfall_21263a3a.jpg",
  icelandAurora:     "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iceland-aurora_f161272c.jpg",
  fijiPool:          "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/fiji-family-glassbottom_63530dc8.jpg",
  // New photos from Janet (Apr 2026):
  franceSeine:            "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/france-paris-mother-daughter_322ce512.jpg",
  franceLoire:            "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/france-loire-castle_2925b151.jpg",
  franceRiviera:          "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/france-riviera-marina_173fd8c8.jpg",
  // v2 replacements — correct photos per Janet's direction:
  youngChildrenGladiator: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/fSWIIBAYqwfCGZNT.jpg",
  teensDiving:            "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/feoAhmboCuSZhyiC.jpg",
  multigenSafari:         "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/hpOuwkpcETbNVhZQ.jpg",
  japanTeaCeremony:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/hcjSCfPHPPTSsfpg.jpg",
  // Italy timeline images:
  italyRome:              "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/LyGhkzFTaqAffZLN.jpg",
  italyTuscany:           "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/hYfEHzdFIlOpnyZs.jpg",
  italyAmalfi:            "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/EorfCZAQDYxVwjKH.jpg",
  italyFlorence:          "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/hvUVxwtvPipkXycm.jpg",
  italyVeniceCanal:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028906848/DXMbKalGojJSFbbl.jpg",
};

// Unsplash for sections / destinations not covered by uploaded photos:
const UNS = {
  hero:              "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/family-hero_565bee68.jpg",
  multigenerational: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=900&q=85&auto=format&fit=crop",
  accommodations:    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=85&auto=format&fit=crop",
  experiences:       "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85&auto=format&fit=crop",
  cta:               "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&auto=format&fit=crop",
  // Destination images
  japan:             "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop",
  southAfrica:       "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80&auto=format&fit=crop",
  hawaii:            "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hawaii-whale_f5888358.jpg",
  france:            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format&fit=crop",
};

// ── Typography helper ──────────────────────────────────────────────────────
// WHY: Centralise font-family strings so a single edit updates the whole page.
const FONT = {
  heading: "'Instrument Serif', 'Georgia', serif",
  eyebrow: "'Playfair Display', 'Georgia', serif",
};

// ── Eyebrow component ──────────────────────────────────────────────────────
// WHY: Playfair Display 500 italic, mixed case (NOT uppercase) — Janet's brand rule.
// Eyebrows are always sentence-case or title-case, never all-caps.
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-sm mb-4 ${light ? "text-[#bfaf8a]" : "text-[#bfaf8a]"}`}
      style={{ fontFamily: FONT.eyebrow, fontWeight: 500, fontStyle: "italic" }}
    >
      {children}
    </p>
  );
}

// ── Age-group section data ─────────────────────────────────────────────────
const AGE_GROUPS = [
  {
    icon: Baby,
    eyebrow: "Traveling With Young Children",
    headline: "Designed for\nYoung Children",
    body: "Traveling with young children requires care, patience, and the right environment. We prioritize properties and experiences that allow both parents and children to feel comfortable, ensuring every day feels manageable while still offering opportunities for discovery.",
    bullets: [
      "Family-friendly hotels with thoughtful amenities and spacious accommodations",
      "Guaranteed connecting rooms or suite configurations that offer comfort and privacy",
      "Access to vetted childcare services and professionally run kids programs",
      "Engaging experiences such as interactive museums, nature outings, and cultural storytelling",
    ],
    // Gladiator experience at the Colosseum — captures the magic of travel for young children
    imageUrl: CDN.youngChildrenGladiator,
    imageLeft: false,
  },
  {
    icon: Users,
    eyebrow: "Traveling With Teenagers",
    headline: "Engaging Teenagers\nThrough Experience",
    body: "Teenagers often want travel to feel immersive, active, and personally relevant. We design itineraries that invite participation rather than passive observation, resulting in travel that feels interesting, energizing, and memorable.",
    bullets: [
      "Adventure-focused activities such as surfing, hiking, wildlife tracking, and culinary exploration",
      "Local guides who connect through shared interests, from photography to food",
      "Hands-on experiences including cooking classes, artisan workshops, and cultural immersion",
      "Time built into the itinerary for independence and personal exploration",
    ],
    // Freediving through coral cave — breathtaking teen adventure
    imageUrl: CDN.teensDiving,
    imageLeft: true,
  },
  {
    icon: Globe,
    eyebrow: "Multiple Generations",
    headline: "Multigenerational Travel,\nCarefully Coordinated",
    body: "Bringing together grandparents, parents, and children requires logistical skill and a thoughtful understanding of what helps families travel well together. We create journeys that allow for shared moments while respecting individual preferences.",
    bullets: [
      "Private villas and residences designed for gathering, with space for privacy",
      "Flexible itineraries with options for different ages and activity levels",
      "Private guides and drivers who can adjust plans as needed",
      "Experiences that encourage connection, from shared meals to meaningful cultural encounters",
    ],
    // Safari game drive — the ultimate multigenerational shared experience
    imageUrl: CDN.multigenSafari,
    imageLeft: false,
  },
];

// ── Destination data ───────────────────────────────────────────────────────
// 9 destinations: Janet's requested additions (Iceland, Thailand, Fiji, France, Italy) + originals
const DESTINATIONS = [
  {
    name: "Italy",
    region: "Europe",
    description:
      "Ideal for multigenerational travel, Italy offers villa stays, private boat outings, cooking classes, history, and family-friendly culture in destinations such as Tuscany, Lake Como, Puglia, and the Amalfi Coast.",
    imageUrl: CDN.italyVenice,
  },
  {
    name: "France",
    region: "Europe",
    description:
      "From Paris to Provence and the Côte d'Azur, France offers extraordinary variety for families — private château stays, lavender fields, world-class museums, and coastal villages that feel made for slow, memorable travel.",
    // Family on private boat on the Seine at dusk with Eiffel Tower — quintessential Paris
    imageUrl: CDN.franceSeine,
  },
  {
    name: "Iceland",
    region: "Northern Europe",
    description:
      "An extraordinary destination for families who want to experience something truly different — waterfalls, geysers, glaciers, the Northern Lights, and a sense of wonder that stays with children long after they return home.",
    imageUrl: CDN.icelandWaterfall,
  },
  {
    name: "Thailand",
    region: "Southeast Asia",
    description:
      "Warm, welcoming, and endlessly varied, Thailand offers elephant sanctuaries, temple visits, cooking classes, island beaches, and some of the most family-friendly luxury resorts in the world.",
    imageUrl: CDN.thailandElephant,
  },
  {
    name: "Fiji",
    region: "South Pacific",
    description:
      "One of the most beautiful places on earth for families, with pristine reefs, private island resorts, and a culture of warmth and hospitality that makes every guest feel genuinely welcomed. We love placing families at Kokomo Private Island on the Great Astrolabe Reef.",
    imageUrl: CDN.fijiPool,
  },
  {
    name: "Costa Rica",
    region: "Central America",
    description:
      "A wonderful choice for active families, with wildlife, beaches, zip lining, surfing, rainforest lodges, and guides who are wonderful with children and teens.",
    imageUrl: CDN.costaRicaKayak,
  },
  {
    name: "Japan",
    region: "Asia",
    description:
      "An excellent option for families seeking culture, safety, and variety, with experiences ranging from private sushi workshops and temple visits to modern city exploration and countryside stays.",
    // Kyoto tea ceremony with mother and daughter in kimono — quintessential Japan family experience
    imageUrl: CDN.japanTeaCeremony,
  },
  {
    name: "South Africa",
    region: "Africa",
    description:
      "One of the most memorable choices for families, particularly when safari is paired with Cape Town and the Winelands. Many lodges offer family programs, private guides, and educational wildlife experiences.",
    imageUrl: UNS.southAfrica,
  },
  {
    name: "Hawaii",
    region: "United States",
    description:
      "A reliable favorite for families seeking ease, beauty, and a wide range of accommodations, from resorts with excellent family facilities to private residences.",
    imageUrl: UNS.hawaii,
  },
];

// ── Why BTA items ──────────────────────────────────────────────────────────
const WHY_BTA = [
  {
    title: "Thoughtful Planning",
    description:
      "We approach family travel with a level of detail that anticipates both the expected and the unforeseen — seamless logistics, well-considered itineraries, and private guides who understand how to work with families.",
  },
  {
    title: "Verified Accommodations",
    description:
      "Every property is hand-selected with care. We verify room configurations, confirm connecting rooms when needed, and vet villas for location, layout, privacy, and service.",
  },
  {
    title: "Experiences Beyond the Expected",
    description:
      "Private after-hours museum access, wildlife encounters with expert naturalists, farm visits, sailing excursions, and junior-focused city tours. These are the details that transform a trip from enjoyable to unforgettable.",
  },
  {
    title: "From First Conversation to Return Home",
    description:
      "Our role is to simplify complexity while elevating the overall experience. We handle the many behind-the-scenes details that make travel smoother, so your family can focus on time together.",
  },
  {
    title: "Virtuoso Access",
    description:
      "As Virtuoso members, we unlock exclusive family amenities, VIP recognition, and preferred rates at the world's finest family-friendly properties — benefits simply unavailable through standard booking channels.",
  },
  {
    title: "Travel That Gives Back",
    description:
      "A portion of every booking supports local charities including childhood cancer research, Make-A-Wish, veterans, and arts and culture in the communities where you travel.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

// ── Italy Timeline data ────────────────────────────────────────────────────
// WHY: 9-night structure — Rome 3 nights, Florence 3 nights, Portofino 3 nights.
// All Virtuoso properties. Truffle hunting and a private boat day are shared
// across all three family types; the style of each experience differs.
// Grand Minerva Florence chosen for its rooftop pool (Janet's direction).
// Four Seasons Firenze for multigenerational (Janet's direction).
const ITALY_TABS = [
  {
    id: "children",
    label: "Young Children",
    sub: "Ages 3–10",
    Icon: Baby,
    accentColor: "#bfaf8a",
    days: [
      {
        day: "Nights 1–3",
        location: "Rome",
        image: CDN.italyRome,
        headline: "Ancient Wonders, Child-Sized",
        experience: "Private transfer to your family suite at Hotel de la Ville. A dedicated family guide leads an interactive Colosseum tour — kids dress as gladiators on the arena floor. Evenings are slow: gelato walks, fountains, and early dinners at family-friendly trattorias.",
        stay: "Hotel de la Ville, Autograph Collection · Virtuoso",
        highlight: "Gladiator experience inside the Colosseum",
      },
      {
        day: "Nights 4–6",
        location: "Florence",
        image: CDN.italyFlorence,
        headline: "Art, Leather & the Rooftop Pool",
        experience: "Check in to Grand Minerva, steps from Santa Maria Novella. Morning truffle hunt in the Chianti hills with a local hunter and his dogs, followed by a family lunch with the harvest. Afternoon storytelling tour of the Uffizi designed for young minds. Pool time at the rooftop before dinner.",
        stay: "Grand Hotel Minerva · Virtuoso",
        highlight: "Truffle hunt in the Chianti hills",
      },
      {
        day: "Nights 7–9",
        location: "Portofino",
        image: CDN.italyAmalfi,
        headline: "Riviera Days & Boat Adventures",
        experience: "Settle into Belmond Splendido with its iconic terraced gardens above the harbour. A full private boat day along the Ligurian coast — swimming in hidden coves, a seafood lunch on board, and a stop at San Fruttuoso abbey only accessible by sea. Evenings on the terrace watching the lights of the village.",
        stay: "Belmond Splendido · Virtuoso",
        highlight: "Private boat day to San Fruttuoso abbey",
      },
    ],
  },
  {
    id: "teens",
    label: "Teenagers",
    sub: "Ages 11–17",
    Icon: Compass,
    accentColor: "#384959",
    days: [
      {
        day: "Nights 1–3",
        location: "Rome",
        image: CDN.italyRome,
        headline: "Underground Rome & Street Culture",
        experience: "Hotel de la Ville puts you steps from the Spanish Steps. Private Colosseum tour with access to the underground hypogeum — where gladiators waited before battle. Evening street food tour through Trastevere with a local guide who connects over photography and food culture.",
        stay: "Hotel de la Ville, Autograph Collection · Virtuoso",
        highlight: "Underground Colosseum hypogeum access",
      },
      {
        day: "Nights 4–6",
        location: "Florence",
        image: CDN.italyFlorence,
        headline: "Craft, Truffles & the Rooftop",
        experience: "Grand Minerva's rooftop pool is the perfect base. Morning truffle hunt in the Chianti hills — teens dig for truffles alongside the hunter's dogs, then cook with the harvest. Afternoon leather artisan workshop where teens design and make their own wallet. Rooftop dinner with panoramic city views.",
        stay: "Grand Hotel Minerva · Virtuoso",
        highlight: "Truffle hunt + leather craft workshop",
      },
      {
        day: "Nights 7–9",
        location: "Portofino",
        image: CDN.italyAmalfi,
        headline: "Riviera Adrenaline & Departure",
        experience: "Belmond Splendido for three nights of Riviera living. Private boat day with cliff jumping off the rocks at Paraggi, snorkeling in crystal-clear coves, and a long lunch on board. Final evening: sunset aperitivo on the Splendido terrace before private transfer to Genoa.",
        stay: "Belmond Splendido · Virtuoso",
        highlight: "Cliff jumping + private boat day",
      },
    ],
  },
  {
    id: "multigen",
    label: "Multigenerational",
    sub: "All Ages Together",
    Icon: Users,
    accentColor: "#384959",
    days: [
      {
        day: "Nights 1–3",
        location: "Rome",
        image: CDN.italyRome,
        headline: "Grand Arrival in the Eternal City",
        experience: "Private fleet of vehicles transfers the whole family to Hotel de la Ville. Vatican after-hours tour — no crowds, personal guide for every generation. Private dinner in a 16th-century palazzo dining room. Mornings at leisure: espresso, markets, and the Borghese Gardens at your own pace.",
        stay: "Hotel de la Ville, Autograph Collection · Virtuoso",
        highlight: "Vatican after-hours private tour",
      },
      {
        day: "Nights 4–6",
        location: "Florence",
        image: CDN.italyFlorence,
        headline: "Four Seasons, Truffles & the Uffizi",
        experience: "The Four Seasons Firenze occupies a 15th-century palazzo with a private garden — space for every generation to breathe. Morning truffle hunt in the Chianti hills, followed by a long family lunch with the day's harvest. Private Uffizi tour with parallel guides: art historian for grandparents, storytelling guide for the children.",
        stay: "Four Seasons Firenze · Virtuoso",
        highlight: "Truffle hunt + parallel Uffizi tours",
      },
      {
        day: "Nights 7–9",
        location: "Portofino",
        image: CDN.italyAmalfi,
        headline: "Riviera Farewell on the Water",
        experience: "Belmond Splendido for the final chapter. A private yacht charter for the whole family — swimming, a long seafood lunch on board, and a final sunset toast as the harbour lights come on. Private transfers staggered to match each generation's departure flight.",
        stay: "Belmond Splendido · Virtuoso",
        highlight: "Private yacht charter for the whole family",
      },
    ],
  },
];

// ── ItalyTimeline component ────────────────────────────────────────────────
function ItalyTimeline() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const tab = ITALY_TABS[activeTab];
  const day = tab.days[activeDay];

  return (
    <section className="py-24 md:py-32 bg-[#384959] overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-[#bfaf8a] text-sm mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
          >
            One Destination, Three Journeys
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-light uppercase mb-4"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" }}
          >
            9 Days in Italy, 3 Ways
          </h2>
          <p className="text-white/50 text-base font-light max-w-xl mx-auto">
            The same destination. Completely different journeys. See how BTA tailors every detail to your family.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-white/20 divide-x divide-white/20">
            {ITALY_TABS.map((t, i) => {
              const TabIcon = t.Icon;
              return (
                <button
                  key={t.id}
                  onClick={() => { setActiveTab(i); setActiveDay(0); }}
                  className={`flex items-center gap-2.5 px-6 py-4 text-sm transition-all duration-300 ${
                    activeTab === i
                      ? "bg-[#bfaf8a] text-[#384959]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon size={14} />
                  <span
                    className="hidden sm:inline uppercase tracking-widest text-xs"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {t.label}
                  </span>
                  <span
                    className="sm:hidden uppercase tracking-widest text-xs"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {t.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content: day selector + detail panel */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* Day selector — vertical list on desktop, horizontal scroll on mobile */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tab.days.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`flex-shrink-0 text-left border transition-all duration-300 ${
                  activeDay === i
                    ? "border-[#bfaf8a] bg-[#bfaf8a]/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="px-5 py-4">
                  <p
                    className={`text-xs uppercase tracking-widest mb-1 ${
                      activeDay === i ? "text-[#bfaf8a]" : "text-white/40"
                    }`}
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
                  >
                    {d.day}
                  </p>
                  <p
                    className={`text-sm uppercase tracking-wide ${
                      activeDay === i ? "text-white" : "text-white/60"
                    }`}
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {d.location}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="grid md:grid-cols-2 gap-0 border border-white/20">

            {/* Photo side */}
            <div
              className="relative h-64 md:h-auto min-h-[300px]"
              style={{
                backgroundImage: `url(${day.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-transparent to-transparent" />
              {/* Location badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <MapPin size={12} className="text-[#bfaf8a]" />
                <span
                  className="text-white text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {day.location}, Italy
                </span>
              </div>
            </div>

            {/* Text side — slightly darker panel for contrast against slate blue bg */}
            <div className="p-8 md:p-10 flex flex-col justify-between bg-[#384959]/30">
              <div>
                <p
                  className="text-[#bfaf8a] text-xs mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
                >
                  {day.day} · {day.location}
                </p>
                <h3
                  className="text-white text-2xl md:text-3xl font-light uppercase mb-5"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" }}
                >
                  {day.headline}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-light mb-6">
                  {day.experience}
                </p>

                {/* Highlight pill */}
                <div className="flex items-start gap-3 border-l-2 border-[#bfaf8a] pl-4">
                  <div>
                    <p
                      className="text-[#bfaf8a] text-xs mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
                    >
                      Signature Moment
                    </p>
                    <p className="text-white/80 text-sm font-light">{day.highlight}</p>
                  </div>
                </div>
              </div>

              {/* Stay */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <Home size={13} className="text-white/30 flex-shrink-0" />
                <div>
                  <p
                    className="text-white/30 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    Where You Stay
                  </p>
                  <p
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
                  >
                    {day.stay}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-10">
          {tab.days.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`transition-all duration-300 ${
                activeDay === i
                  ? "w-8 h-1 bg-[#bfaf8a]"
                  : "w-4 h-1 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-white/30 text-xs mt-10"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
        >
          Every itinerary is built from scratch — this is an example of what BTA creates for your family.
        </p>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function FamilyTravel() {
  const heroRef = useRef<HTMLDivElement>(null);
  // WHY: Modal state for destination timeline — tracks which destination card was clicked
  const [activeDestination, setActiveDestination] = useState<string | null>(null);

  // SEO meta tags
  useEffect(() => {
    document.title = "Family Travel | Boutique Travel Advisors";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "BTA designs luxury family journeys for every generation — young children, teenagers, and multigenerational groups. Private guides, verified accommodations, and experiences that connect families across the world.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  // Subtle parallax on hero image
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2f2f2f]">
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${UNS.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Eyebrow — Playfair Display 500 italic */}
          <p
            className="text-[#bfaf8a] text-sm mb-4"
            style={{ fontFamily: FONT.eyebrow, fontWeight: 500, fontStyle: "italic" }}
          >
            Experiences · Family Travel
          </p>
          {/* H1 — Instrument Serif, UPPERCASE, never italic */}
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 max-w-3xl uppercase"
            style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
          >
            Travel Designed for<br />Every Generation
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Journeys that reflect the interests, preferences, and practical needs of every traveler in your family.
          </p>
          <div className="mt-12 flex items-center gap-3 text-white/60">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── Intro split ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>The BTA Approach</Eyebrow>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8 uppercase"
              style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
            >
              Thoughtful Planning,<br />Tailored to Your Family
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-6 font-light">
              Family travel is rarely simple, yet when thoughtfully planned, it becomes one of the most meaningful ways to connect across generations. At BTA, we curate journeys that reflect the interests, preferences, and practical needs of each traveler — whether you are exploring with young children, traveling with teenagers, or bringing together grandparents, parents, and children in one shared experience.
            </p>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              Each itinerary is created with care, balancing structure with flexibility and ensuring that every member of the family feels considered. From the first conversation through your return home, our role is to simplify complexity while elevating the overall experience.
            </p>
            <Link href="/contact-us">
              <button className="group flex items-center gap-3 text-[#bfaf8a] tracking-[0.2em] text-sm uppercase border border-[#bfaf8a] px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-all duration-300">
                Begin Planning
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          {/* Janet's family beach photo as the intro image */}
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[520px]"
              style={{
                backgroundImage: `url(${CDN.familyBeach})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#bfaf8a]" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#bfaf8a]" />
          </div>
        </div>
      </section>

      {/* ── Planning highlights strip ─────────────────────────────────────── */}
      <section className="bg-[#384959] py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { label: "Seamless Logistics", desc: "Between every destination, transfer, and experience" },
              { label: "Private Guides", desc: "Who understand how to work with families of all ages" },
              { label: "Verified Room Configs", desc: "Connecting rooms and suite arrangements confirmed" },
              { label: "Dining & Downtime", desc: "Arranged with real-life family travel in mind" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-8 h-px bg-[#bfaf8a] mx-auto mb-5" />
                <h3
                  className="text-white text-lg font-light mb-2 uppercase"
                  style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
                >
                  {item.label}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Age-group sections (alternating split layout) ─────────────────── */}
      {/* WHY: On mobile we use a simple flex-col stack (image → text, no gap between).
          On desktop (lg+) we switch to a 2-column grid with alternating image side.
          This eliminates the dead-space bug caused by order + gap fighting on small screens. */}
      {AGE_GROUPS.map((group, idx) => {
        const Icon = group.icon;
        return (
          <section key={idx} className="pt-0 pb-24 md:pb-32">
            {/* Mobile: full-width image flush above section padding */}
            <div
              className="w-full h-72 sm:h-80 lg:hidden"
              style={{
                backgroundImage: `url(${group.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content wrapper — adds padding only around text on mobile */}
            <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
              <div
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  group.imageLeft ? "" : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                }`}
              >
                {/* Text column */}
                <div className="pt-10 lg:pt-0">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={16} className="text-[#bfaf8a]" />
                    <p
                      className="text-[#bfaf8a] text-sm"
                      style={{ fontFamily: FONT.eyebrow, fontWeight: 500, fontStyle: "italic" }}
                    >
                      {group.eyebrow}
                    </p>
                  </div>
                  <h2
                    className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-7 uppercase"
                    style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
                  >
                    {group.headline.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < group.headline.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h2>
                  <p className="text-[#2f2f2f] text-lg leading-relaxed mb-8 font-light">
                    {group.body}
                  </p>
                  <ul className="space-y-4">
                    {group.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-4">
                        <div className="w-4 h-px bg-[#bfaf8a] mt-3 flex-shrink-0" />
                        <span className="text-[#2f2f2f] text-base leading-relaxed font-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop-only image column */}
                <div className="relative hidden lg:block">
                  <div
                    className="w-full h-[500px]"
                    style={{
                      backgroundImage: `url(${group.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {group.imageLeft ? (
                    <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-[#bfaf8a]" />
                  ) : (
                    <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#bfaf8a]" />
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── 8 Days in Italy, 3 Ways — Interactive Timeline Infographic ─────── */}
      {/* WHY: An interactive timeline is far more compelling than a static table.
          It shows the actual journey arc — arrival, exploration, signature moments,
          departure — and lets visitors self-identify with their family type.
          Tab switcher keeps it scannable; day cards with photos make it visceral. */}
      <ItalyTimeline />

      {/* old matrix removed — replaced by ItalyTimeline above */}
      {false && <section className="hidden">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="text-[#bfaf8a] text-sm mb-4"
              style={{ fontFamily: FONT.eyebrow, fontWeight: 500, fontStyle: "italic" }}
            >
              One Destination, Three Journeys
            </p>
            <h2
              className="text-white text-4xl md:text-5xl font-light uppercase mb-4"
              style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
            >
              The Right Trip for Every Age
            </h2>
            <p className="text-white/50 text-base font-light">
              Italy — curated three ways
            </p>
          </div>

          {/* ── Matrix grid ─────────────────────────────────────────────────── */}
          {/* Structure: sticky row-label column + 3 audience columns */}
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-[640px]">

              {/* Column headers */}
              <div className="grid grid-cols-4 mb-2">
                <div />{/* empty row-label cell */}
                {[
                  { label: "Young Children", sub: "Ages 3–10",        Icon: Baby },
                  { label: "Teenagers",       sub: "Ages 11–17",       Icon: Compass },
                  { label: "Multigenerational", sub: "All Ages",       Icon: Users },
                ].map(({ label, sub, Icon }, ci) => (
                  <div key={ci} className="text-center pb-6 px-3">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full border border-[#bfaf8a]/40 flex items-center justify-center">
                        <Icon size={18} className="text-[#bfaf8a]" />
                      </div>
                    </div>
                    <p
                      className="text-white text-sm font-light uppercase tracking-widest"
                      style={{ fontFamily: FONT.heading }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[#bfaf8a] text-xs mt-1"
                      style={{ fontFamily: FONT.eyebrow, fontStyle: "italic", fontWeight: 500 }}
                    >
                      {sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {[
                {
                  rowLabel: "Where You Stay",
                  RowIcon: Home,
                  cells: [
                    { Icon: TreePine,  label: "Tuscany Villa",        note: "Private pool · connecting rooms" },
                    { Icon: Home,      label: "Rome Boutique Hotel",   note: "Rooftop terrace · city access" },
                    { Icon: GlassWater, label: "Umbrian Estate",       note: "Private chef · multi-wing" },
                  ],
                },
                {
                  rowLabel: "Signature Experience",
                  RowIcon: Sparkles,
                  cells: [
                    { Icon: Sparkles,  label: "Gladiator School",      note: "Colosseum arena · pasta class" },
                    { Icon: Camera,    label: "Photography Tour",      note: "Trastevere · Ferrari factory" },
                    { Icon: Utensils,  label: "Vatican & Wine",        note: "Private guide · sunset terrace" },
                  ],
                },
                {
                  rowLabel: "Logistics",
                  RowIcon: Luggage,
                  cells: [
                    { Icon: Baby,      label: "Car Seats Confirmed",   note: "Stroller routes · rest built in" },
                    { Icon: Compass,   label: "Flexible Schedule",     note: "Downtime · local SIM" },
                    { Icon: Luggage,   label: "One Point of Contact",  note: "Luggage handled · accessible" },
                  ],
                },
                {
                  rowLabel: "The Memory",
                  RowIcon: Heart,
                  cells: [
                    { Icon: Heart,     label: "Best Day of Their Life", note: "Gladiator helmet moment" },
                    { Icon: Compass,   label: "Already Planning Next",  note: "Reluctant teen → convert" },
                    { Icon: Users,     label: "Long Lunch Under Olives", note: "Three generations, one table" },
                  ],
                },
              ].map(({ rowLabel, RowIcon, cells }, ri) => (
                <div key={ri} className="grid grid-cols-4 border-t border-white/10">
                  {/* Row label */}
                  <div className="flex items-center gap-2 py-6 pr-4">
                    <RowIcon size={14} className="text-[#bfaf8a] flex-shrink-0" />
                    <p
                      className="text-[#bfaf8a] text-xs tracking-widest"
                      style={{ fontFamily: FONT.eyebrow, fontStyle: "italic", fontWeight: 500 }}
                    >
                      {rowLabel}
                    </p>
                  </div>
                  {/* Cells */}
                  {cells.map(({ Icon: CellIcon, label, note }, ci) => (
                    <div
                      key={ci}
                      className={`py-6 px-3 flex flex-col items-center text-center ${
                        ci === 1 ? "border-x border-white/10" : ""
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-3">
                        <CellIcon size={16} className="text-white/60" />
                      </div>
                      <p
                        className="text-white text-sm font-light uppercase tracking-wide mb-1"
                        style={{ fontFamily: FONT.heading }}
                      >
                        {label}
                      </p>
                      <p className="text-white/40 text-xs font-light leading-snug">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              {/* Footer rule */}
              <div className="border-t border-white/10 mt-2 pt-8 text-center">
                <p
                  className="text-[#bfaf8a] text-xs tracking-widest"
                  style={{ fontFamily: FONT.eyebrow, fontStyle: "italic", fontWeight: 500 }}
                >
                  Every itinerary is built from scratch
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>}

      {/* ── Favorite Destinations grid ────────────────────────────────────── */}
      <section className="py-24 bg-[#edeae4]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>Favorite Family Destinations</Eyebrow>
          <h2
            className="text-[#384959] text-4xl md:text-5xl font-light uppercase"
            style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
          >
            Where Families Thrive
          </h2>
            <p className="text-[#2f2f2f] text-lg font-light mt-5 max-w-2xl mx-auto leading-relaxed">
              Some destinations lend themselves especially well to family travel, offering the right balance of comfort, culture, scenery, and memorable experiences.
            </p>
          </div>

          {/* 3-column grid — 9 destinations */}
          {/* WHY: Cards with itinerary have a "View Sample Itinerary" button that opens a modal.
              Italy has its own inline ItalyTimeline above; the other 8 use DestinationTimelineModal. */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest, i) => {
              const hasTimeline = dest.name !== "Italy" && !!DESTINATION_ITINERARIES[dest.name];
              return (
                <div key={i} className="group flex flex-col">
                  <div className="w-full h-64 overflow-hidden mb-5 relative">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${dest.imageUrl})` }}
                    />
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1">
                      <span className="text-white/80 text-xs tracking-[0.15em] uppercase flex items-center gap-1.5">
                        <MapPin size={10} />
                        {dest.region}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="text-[#384959] text-2xl font-light mb-3 uppercase"
                    style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-[#2f2f2f] text-base leading-relaxed font-light mb-5 flex-1">
                    {dest.description}
                  </p>
                  {hasTimeline && (
                    <button
                      onClick={() => setActiveDestination(dest.name)}
                      className="group/btn flex items-center gap-2.5 text-[#384959] border border-[#384959] px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#384959] hover:text-white transition-all duration-300 self-start"
                      style={{ fontFamily: FONT.heading }}
                    >
                      View Sample Itinerary
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                  {dest.name === "Italy" && (
                    <p
                      className="text-[#bfaf8a] text-xs self-start"
                      style={{ fontFamily: FONT.eyebrow, fontStyle: "italic", fontWeight: 500 }}
                    >
                      See the 9-day Italy timeline above ↑
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Destination timeline modals — one per destination */}
          {activeDestination && (
            <DestinationTimelineModal
              destination={activeDestination}
              open={!!activeDestination}
              onClose={() => setActiveDestination(null)}
            />
          )}
        </div>
      </section>

      {/* ── Accommodations split section ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Fiji glass-bottom boat photo — Janet's photo, Apr 2026 */}
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[520px]"
              style={{
                backgroundImage: `url(${CDN.fijiPool})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#bfaf8a]" />
            <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-[#bfaf8a]" />
          </div>
          <div>
            <Eyebrow>Our Approach to Accommodations</Eyebrow>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-7 uppercase"
              style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
            >
              Where You Stay Shapes<br />the Entire Experience
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-8 font-light">
              We select each property with care, prioritizing both quality and practicality for families. Every recommendation reflects firsthand knowledge and trusted relationships.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Hand-selected hotels known for service and family readiness",
                "Verified room configurations, including guaranteed connecting rooms when needed",
                "Vetted villas chosen for location, layout, privacy, and service",
                "Residences with access to resort amenities when appropriate",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-4 h-px bg-[#bfaf8a] mt-3 flex-shrink-0" />
                  <span className="text-[#2f2f2f] text-base leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact-us">
              <button className="group flex items-center gap-3 bg-[#384959] text-white tracking-[0.2em] text-sm uppercase px-10 py-4 hover:bg-[#384959] transition-colors duration-300">
                Enquire About Accommodations
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experiences beyond the expected ──────────────────────────────── */}
      <section className="py-24 bg-[#384959]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow light>Curated Experiences</Eyebrow>
              <h2
                className="text-white text-4xl md:text-5xl font-light leading-tight mb-7 uppercase"
                style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
              >
                Experiences That Go<br />Beyond the Expected
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                We design experiences that feel personal, immersive, and well suited to family travel. These are the kinds of details that transform a trip from enjoyable to unforgettable.
              </p>
              <ul className="space-y-4">
                {[
                  "Private after-hours access to museums and cultural landmarks",
                  "Wildlife encounters led by expert naturalists",
                  "Farm visits and cooking experiences with local families",
                  "Sailing excursions designed for both relaxation and exploration",
                  "Junior-focused city tours created to keep children engaged",
                  "Specialty guides in history, food, art, or nature",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-4 h-px bg-[#bfaf8a] mt-3 flex-shrink-0" />
                    <span className="text-white/70 text-base leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Costa Rica kayak aerial — dramatic, adventurous */}
            <div className="relative hidden lg:block">
              <div
                className="w-full h-[520px]"
                style={{
                  backgroundImage: `url(${CDN.costaRicaKayak})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#bfaf8a]" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#bfaf8a]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Families Work With BTA ────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <Eyebrow>Why Families Work With BTA</Eyebrow>
          <h2
            className="text-[#384959] text-4xl md:text-5xl font-light uppercase"
            style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
          >
            More Than a Hotel<br />and a Few Reservations
          </h2>
          <p className="text-[#2f2f2f] text-lg font-light mt-5 max-w-2xl mx-auto leading-relaxed">
            Families come to us because they want a trip that has been carefully thought through by someone who understands how family travel actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {WHY_BTA.map((item, i) => (
            <div key={i}>
              <div className="w-8 h-px bg-[#bfaf8a] mb-6" />
              <h3
                className="text-[#384959] text-xl font-light mb-4 uppercase"
                style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
              >
                {item.title}
              </h3>
              <p className="text-[#2f2f2f] text-base leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Iceland photo banner — full-width editorial break ─────────────── */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            // WHY: Aurora borealis used here for maximum visual impact — the waterfall
            // photo is used in the destination card grid above.
            backgroundImage: `url(${CDN.icelandAurora})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-[#384959]/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
          <div>
            <p
              className="text-[#bfaf8a] text-sm mb-4"
              style={{ fontFamily: FONT.eyebrow, fontWeight: 500, fontStyle: "italic" }}
            >
              Iceland
            </p>
            <h2
              className="text-white text-4xl md:text-5xl font-light uppercase"
              style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
            >
              Some Destinations Change<br />the Way Children See the World
            </h2>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `url(${UNS.cta})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#384959]/75" />
        <div className="relative z-10 text-center px-8">
          <p
            className="text-[#bfaf8a] text-sm mb-6"
            style={{ fontFamily: FONT.eyebrow, fontWeight: 500, fontStyle: "italic" }}
          >
            Begin Your Family Journey
          </p>
          <h2
            className="text-white text-5xl md:text-6xl font-light mb-6 leading-tight uppercase"
            style={{ fontFamily: FONT.heading, fontStyle: "normal" }}
          >
            Let Us Create a Journey<br />Worth Remembering
          </h2>
          <p className="text-white/70 text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you are planning a first trip with little ones, a more engaging experience for teenagers, or a meaningful journey with multiple generations, we would be honored to help you design it with care.
          </p>
          <Link href="/contact-us">
            <button className="group inline-flex items-center gap-3 border border-white/60 text-white tracking-[0.2em] text-sm uppercase px-12 py-5 hover:bg-white hover:text-[#384959] transition-all duration-300">
              Start Planning
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#384959] text-white/70 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed font-light">{footer.tagline}</p>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Explore</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.explore.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#bfaf8a] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Company</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.company.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#bfaf8a] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Contact</p>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a href={`tel:${footer.contact.phone}`} className="hover:text-[#bfaf8a] transition-colors">
                    {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${footer.contact.email}`} className="hover:text-[#bfaf8a] transition-colors">
                    {footer.contact.email}
                  </a>
                </li>
                <li className="text-white/40 text-xs">{footer.contact.virtuoso}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">{footer.copyright}</p>
            <div className="flex gap-6 text-xs">
              {footer.legal.map((l: { label: string; href: string }, i: number) => (
                <Link key={i} href={l.href} className="hover:text-[#bfaf8a] transition-colors text-white/40">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
