/**
 * RiverCruises — /cruises/river
 *
 * River Cruises sub-page featuring:
 * AmaWaterways, Uniworld, Viking River, Tauck, Scenic, Emerald, Avalon/Globus, Riverside
 *
 * Design: BTA brand guide — Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfa88a, Aegean Blue #384959, Linen White #faf0f6.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

const CRUISE_LINES = [
  {
    id: "ama",
    name: "AmaWaterways",
    tagline: "The World's Best River Cruise Line",
    eyebrow: "Luxury River",
    description:
      "AmaWaterways consistently earns the title of world's best river cruise line. Their ships are purpose-built for European waterways — narrower, more intimate, and designed to dock in the heart of every town. The signature Twin Balcony staterooms (French balcony + full walking balcony) are an industry first. The culinary program is exceptional: a dedicated Chef's Table restaurant, cooking demonstrations, and destination-inspired menus crafted fresh daily. Active excursions — hiking, biking, kayaking — are included alongside classic guided tours.",
    highlights: [
      "Twin Balcony staterooms — French + full walking balcony",
      "Chef's Table specialty restaurant on all ships",
      "Active excursions: hiking, biking & kayaking included",
      "Wine-inclusive sailings on select itineraries",
      "Family-friendly and solo traveler programs available",
    ],
    culinary:
      "Chef's Table: an intimate specialty restaurant featuring a rotating menu of regional dishes. Daily cooking demonstrations, wine pairing dinners, and market visits bring each destination's flavors aboard.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    link: "https://inspires.to/experiences/amawaterways-a-new-expression-and-a-deeper-connection-xw4kl4",
    linkLabel: "Explore AmaWaterways",
    imageRight: false,
    note: "Interactive experience — co-branded site under construction",
  },
  {
    id: "uniworld",
    name: "Uniworld Boutique River Cruises",
    tagline: "The World's Most Luxurious River Cruises",
    eyebrow: "Ultra-Luxury River",
    description:
      "Uniworld is the Ritz-Carlton of river cruising. Every ship is individually designed as a floating boutique hotel — no two are alike. Original artworks, hand-crafted furnishings, and antique pieces from the destination regions adorn each vessel. The all-inclusive fare covers all meals, premium beverages, shore excursions, gratuities, and Wi-Fi. The culinary program draws on the destination's finest ingredients, with menus that change daily and a dedicated sommelier on every ship.",
    highlights: [
      "Every ship individually designed as a floating boutique hotel",
      "All-inclusive: meals, premium beverages, excursions & gratuities",
      "Original artworks and hand-crafted furnishings throughout",
      "Dedicated sommelier on every voyage",
      "U by Uniworld — adults-only boutique ships for younger travelers",
    ],
    culinary:
      "Destination-driven menus change daily, sourced from local markets. A dedicated sommelier curates wine pairings for every meal. Cooking classes and market visits are offered on select itineraries.",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
    link: "https://travelbta1.uniworld.com",
    linkLabel: "Explore Uniworld",
    imageRight: true,
  },
  {
    id: "viking-river",
    name: "Viking River Cruises",
    tagline: "Exploring the World in Comfort",
    eyebrow: "Premium River",
    description:
      "Viking River pioneered the modern river cruise concept and remains the largest river cruise line in the world. Their ships are consistently among the newest and most modern on European waterways. The Scandinavian design philosophy — clean lines, light-filled spaces, an Aquavit Terrace — creates a calm, sophisticated atmosphere. All fares include shore excursions in every port, specialty dining, Wi-Fi, and beer and wine with lunch and dinner. Adults-only (18+) throughout.",
    highlights: [
      "Largest river cruise fleet — newest ships on European waterways",
      "Shore excursions included in every port",
      "Specialty dining, Wi-Fi & beer/wine with meals included",
      "Adults-only (18+) — calm, sophisticated atmosphere",
      "Aquavit Terrace — signature outdoor dining space",
    ],
    culinary:
      "The Restaurant features destination-inspired menus with live cooking stations. The Aquavit Terrace offers al fresco dining. Cooking demonstrations and market visits are offered on select itineraries.",
    image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.vikingrivercruises.com/myagent/travelbta1",
    linkLabel: "Explore Viking River",
    imageRight: false,
  },
  {
    id: "tauck",
    name: "Tauck",
    tagline: "The Standard of Excellence in Guided Travel",
    eyebrow: "Guided River & Land",
    description:
      "Tauck is the gold standard for guided travel — river cruises and land tours that combine seamlessly into multi-destination journeys. Their river ships are among the most intimate on European waterways, carrying just 98 guests. The all-inclusive fare covers everything: shore excursions, gratuities, specialty dining, beverages, and exclusive access to venues closed to the general public. Tauck's Roam program brings active, multi-generational adventures to families and groups.",
    highlights: [
      "98-guest ships — among the most intimate on European rivers",
      "Exclusive access to venues closed to the general public",
      "All-inclusive: excursions, gratuities, dining & beverages",
      "Tauck Roam — active and multi-generational travel",
      "Seamless river + land combination itineraries",
    ],
    culinary:
      "Destination-inspired menus featuring local ingredients. Exclusive dining events at private venues — châteaux, historic estates, and local restaurants not accessible to other cruise lines.",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.tauck.com?insider=zq18x-boutique-travel-advisors",
    linkLabel: "Explore Tauck",
    imageRight: true,
  },
  {
    id: "scenic",
    name: "Scenic River Cruises",
    tagline: "All-Inclusive Space-Ships",
    eyebrow: "All-Inclusive Luxury",
    description:
      "Scenic's Space-Ships are purpose-built for luxury river cruising — featuring heated sun loungers, a wellness center with a pool, and the signature Scenic Enrich program of exclusive experiences ashore. Every fare is truly all-inclusive: meals, premium beverages, excursions, gratuities, butler service, and even e-bikes for independent exploration. The culinary program draws on local ingredients and features a rotating menu of regional specialties.",
    highlights: [
      "Purpose-built Space-Ships with heated sun loungers & pool",
      "Truly all-inclusive: butler service & e-bikes included",
      "Scenic Enrich — exclusive experiences not available to others",
      "Wellness center on every ship",
      "E-bikes for independent exploration at every port",
    ],
    culinary:
      "Locally sourced, destination-inspired menus rotate daily. The Chef's Table offers an intimate specialty dining experience. Cooking demonstrations and market visits are featured on select sailings.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.scenicusa.com",
    linkLabel: "Explore Scenic",
    imageRight: false,
  },
  {
    id: "riverside",
    name: "Riverside Luxury Cruises",
    tagline: "Premium European River Travel",
    eyebrow: "Premium River",
    description:
      "Riverside Luxury Cruises offers premium European river travel with a focus on value and contemporary design. Their modern fleet sails the Rhine, Danube, and Main rivers, with itineraries ranging from 7 to 15 nights. Current promotions offer up to 18% off select sailings — exclusively available through BTA. All fares include meals, select beverages, and guided shore excursions.",
    highlights: [
      "Modern fleet on Rhine, Danube & Main rivers",
      "Up to 18% off select sailings — exclusive BTA offer",
      "Meals, select beverages & guided excursions included",
      "7 to 15-night itineraries",
      "Contemporary design throughout",
    ],
    culinary:
      "European-inspired menus featuring regional specialties. Select beverages included with meals. Cooking demonstrations on select sailings.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    link: "https://inspires.to/riverside/copilot",
    linkLabel: "Explore Riverside",
    imageRight: true,
    badge: "Up to 18% Off",
  },
];

export default function RiverCruises() {
  return (
    <PageLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="River cruise ship on a European waterway"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/25 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-20">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/cruises" className="text-white/60 text-xs tracking-[0.2em] uppercase hover:text-[#bfa88a] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cruises
            </Link>
            <span className="text-white/40 text-xs">›</span>
            <span className="text-[#bfa88a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              River Cruises
            </span>
          </div>

          <p className="text-[#bfa88a] mb-3" style={{ fontFamily: "'Allura', cursive", fontSize: "1.6rem" }}>
            Intimate Waterway Journeys
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-none mb-6">
            River Cruises
          </h1>
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Wake up in a new town every morning. Drift through medieval villages, vineyard-lined valleys, and historic city centres — unpacking only once.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfa88a] text-white px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#a8927a] transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Start Planning
            <span className="text-base not-italic">→</span>
          </Link>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf0f6] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#bfa88a]" />
                <span className="text-[#bfa88a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Why River Cruising
                </span>
              </div>
              <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-6">
                The Off-the-Beaten-Path Journey
              </h2>
              <p className="text-[#2F2F2F]/75 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                A river cruise takes you on an off-the-beaten-path journey across towns and villages, where you will enjoy scenic sights between ports. River cruising offers a way to travel in a relaxing, intimate environment. The calm waterways also eliminate many concerns of seasickness.
              </p>
              <p className="text-[#2F2F2F]/65 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Ships typically carry between 98 and 190 guests — creating a genuine sense of community. It is not uncommon for families, friends, and organisations to buy out an entire boat for a private charter experience.
              </p>
            </div>
            <div className="border-l-2 border-[#bfa88a] pl-10 py-4">
              <p className="text-[#384959] text-2xl md:text-3xl leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                "Enjoy gourmet food, decadent cocktails, and entertainment on board — then explore a variety of activities and tours at each port."
              </p>
              <p className="text-[#bfa88a] text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                — BTA River Cruise Philosophy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cruise Line Sections ──────────────────────────────────────────── */}
      {CRUISE_LINES.map((line, index) => (
        <section key={line.id} className={index % 2 === 0 ? "bg-white" : "bg-[#faf0f6]"}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`relative overflow-hidden ${line.imageRight ? "lg:order-2" : "lg:order-1"}`} style={{ minHeight: "540px" }}>
                <img src={line.image} alt={line.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <span className="bg-[#bfa88a]/90 text-white text-xs tracking-[0.25em] uppercase px-4 py-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {line.eyebrow}
                  </span>
                  {"badge" in line && line.badge && (
                    <span className="bg-[#384959]/90 text-white text-xs tracking-[0.2em] uppercase px-4 py-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {line.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className={`flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-20 ${line.imageRight ? "lg:order-1" : "lg:order-2"}`}>
                <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-2">
                  {line.name}
                </h2>
                <p className="text-[#bfa88a] text-lg mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                  {line.tagline}
                </p>
                <div className="w-12 h-px bg-[#bfa88a] mb-6" />
                <p className="text-[#2F2F2F]/75 text-base leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {line.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {line.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[#2F2F2F]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <span className="text-[#bfa88a] mt-0.5 flex-shrink-0">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="border-l-2 border-[#bfa88a]/40 pl-4 mb-8">
                  <p className="text-[#384959]/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                    <span className="text-[#bfa88a] not-italic font-medium">Culinary: </span>
                    {line.culinary}
                  </p>
                </div>
                {"note" in line && line.note && (
                  <p className="text-[#bfa88a]/70 text-xs tracking-[0.1em] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    ✦ {line.note}
                  </p>
                )}
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-[#bfa88a] text-[#bfa88a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfa88a] hover:text-white transition-all duration-300 self-start"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {line.linkLabel}
                  <span className="text-base not-italic">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

    </PageLayout>
  );
}
