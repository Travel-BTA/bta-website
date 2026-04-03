/**
 * LuxuryOcean — /cruises/luxury-ocean
 *
 * Luxury Ocean Cruises sub-page featuring:
 * Explora Journeys, Regent Seven Seas, Seabourn, Silversea, Crystal
 *
 * Each cruise line section alternates image left / right.
 * White-label co-branded links from the BTA directory are used for CTAs.
 *
 * Design: BTA brand guide — Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfa88a, Aegean Blue #384959, Linen White #faf0f6.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── Cruise line data ─────────────────────────────────────────────────────────
const CRUISE_LINES = [
  {
    id: "explora",
    name: "Explora Journeys",
    parent: "MSC Group",
    tagline: "Ocean State of Mind",
    eyebrow: "Modern Luxury",
    description:
      "Explora Journeys redefines luxury ocean travel with a residential, unhurried philosophy. Nine distinct culinary experiences, unlimited premium beverages, and a wellness-first approach make every voyage feel more like a private estate at sea than a traditional cruise. The fleet's Grand Terrace, Penthouse, and Residence suites each unlock tiered benefits — from priority dining reservations to butler service, VIP lounge access, and complimentary ground transfers up to 50 miles.",
    highlights: [
      "9 culinary experiences per ship — from casual to Michelin-inspired",
      "Unlimited fine beverages included in all fare tiers",
      "Thermal spa access, high-speed Wi-Fi & wellbeing programs",
      "In-suite champagne, pillow & mattress menus",
      "Shore-power capable — advanced sustainability systems",
    ],
    culinary:
      "Anthology Culinary Masterclasses & Workshops: hands-on cooking classes led by resident chefs, market visits, and destination-inspired menus that change with every port.",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1400&q=80",
    link: "https://explorajourneys.com?insider=zq18x-boutique-travel-advisors",
    linkLabel: "Explore Explora Journeys",
    imageRight: false,
  },
  {
    id: "regent",
    name: "Regent Seven Seas Cruises",
    parent: "Norwegian Cruise Line Holdings",
    tagline: "The Most Inclusive Luxury Experience",
    eyebrow: "All-Inclusive Ultra-Luxury",
    description:
      "Regent Seven Seas is the benchmark for all-inclusive ultra-luxury cruising. Every fare includes round-trip business-class airfare, pre-cruise hotel stays, unlimited shore excursions, all dining venues, unlimited premium beverages, butler service in all suites, and gratuities — truly nothing extra to pay. The Culinary Arts Kitchen aboard Explorer, Splendor, and Grandeur class ships offers hands-on cooking classes with world-class chefs, while destination-inspired menus rotate with every itinerary.",
    highlights: [
      "Round-trip business-class airfare included on all voyages",
      "Pre-cruise hotel stay included",
      "Unlimited shore excursions — over 1,500 options",
      "Butler service in every suite category",
      "All dining, beverages & gratuities included",
    ],
    culinary:
      "Culinary Arts Kitchen: a state-of-the-art teaching kitchen aboard Explorer, Splendor, and Grandeur class ships. Hands-on classes, guest chef programs, and Regent Destinations programs bring each port to life through food.",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.rssc.com?insider=zq18x-boutique-travel-advisors",
    linkLabel: "Explore Regent Seven Seas",
    imageRight: true,
  },
  {
    id: "seabourn",
    name: "Seabourn",
    parent: "Carnival Corporation",
    tagline: "The World's Finest Ultra-Luxury Cruise Line",
    eyebrow: "Ultra-Luxury",
    description:
      "Seabourn's intimate ships carry between 458 and 600 guests, creating an atmosphere closer to a private yacht than a traditional cruise ship. The Thomas Keller partnership is the crown jewel — the celebrated chef's culinary philosophy is woven throughout every dining venue, from The Restaurant to The Grill by Thomas Keller. Open bars, caviar on the beach, and complimentary water sports from the marina platform are signature Seabourn moments.",
    highlights: [
      "Thomas Keller Partnership — signature menus fleet-wide",
      "Complimentary open bar throughout the ship",
      "Caviar in the surf — iconic beach service",
      "Complimentary water sports from the marina platform",
      "All suites with ocean views, most with private verandas",
    ],
    culinary:
      "Thomas Keller Partnership: The Grill by Thomas Keller is the signature restaurant aboard all Seabourn ships, offering the chef's classic American cuisine. Culinary Enrichment & Workshops include hands-on cooking demonstrations and destination-focused food experiences.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.seabourn.com",
    linkLabel: "Explore Seabourn",
    imageRight: false,
  },
  {
    id: "silversea",
    name: "Silversea Cruises",
    parent: "Royal Caribbean Group",
    tagline: "Discover the World in Silver Style",
    eyebrow: "Ultra-Luxury & Expedition",
    description:
      "Silversea's S.A.L.T. (Sea And Land Taste) program is the most sophisticated culinary concept in luxury cruising — a ship-wide philosophy connecting guests to the authentic flavors of each destination through cooking classes, shore excursions, and curated menus. With a fleet spanning classic ocean ships to purpose-built expedition vessels, Silversea reaches more than 900 destinations across all seven continents. All fares are door-to-door inclusive.",
    highlights: [
      "S.A.L.T. culinary program — destination-driven dining fleet-wide",
      "Door-to-door all-inclusive fares with private jet transfers available",
      "900+ destinations across all 7 continents",
      "Expedition ships with Zodiacs, kayaks & expert naturalists",
      "Butler service in all suites",
    ],
    culinary:
      "S.A.L.T. (Sea And Land Taste): a ship-wide culinary philosophy. The S.A.L.T. Lab offers hands-on cooking classes; S.A.L.T. Bar serves destination-inspired cocktails; S.A.L.T. Kitchen features menus that change with every port of call.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.silversea.com?insider=zq18x-boutique-travel-advisors",
    linkLabel: "Explore Silversea",
    imageRight: true,
  },
  {
    id: "crystal",
    name: "Crystal Cruises",
    parent: "A&K Travel Group",
    tagline: "The World's Most Awarded Luxury Cruise Line",
    eyebrow: "Classic Luxury",
    description:
      "Relaunched under A&K Travel Group, Crystal Cruises returns with its legendary reputation for gracious service, spacious ships, and enriching programming. Crystal's culinary enrichment program features guest chef demonstrations, wine and spirits tastings, and destination-inspired menus crafted by award-winning chefs. The Crystal Society loyalty program rewards returning guests with exclusive benefits and upgrades.",
    highlights: [
      "Spacious ships — generous space-to-guest ratios",
      "Award-winning culinary program with guest chef events",
      "Complimentary specialty dining, beverages & gratuities",
      "Crystal Society loyalty program with exclusive benefits",
      "Enrichment programs: arts, culture, wellness & cuisine",
    ],
    culinary:
      "Culinary Nuances & Enrichment: guest chef demonstrations, wine and spirits masterclasses, and destination-inspired menus. Crystal's Nobu at Sea partnership brings the iconic Japanese-Peruvian cuisine to select voyages.",
    image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.crystalcruises.com",
    linkLabel: "Explore Crystal Cruises",
    imageRight: false,
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────

export default function LuxuryOcean() {
  return (
    <PageLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury ocean cruise ship at sea"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/25 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/cruises" className="text-white/60 text-xs tracking-[0.2em] uppercase hover:text-[#bfa88a] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cruises
            </Link>
            <span className="text-white/40 text-xs">›</span>
            <span className="text-[#bfa88a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Luxury Ocean
            </span>
          </div>

          <p
            className="text-[#bfa88a] mb-3"
            style={{ fontFamily: "'Allura', cursive", fontSize: "1.6rem" }}
          >
            Ultra-Luxury at Sea
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-none mb-6">
            Luxury Ocean Cruises
          </h1>
          <p
            className="text-white/75 text-xl max-w-2xl leading-relaxed mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            All-inclusive voyages aboard the world's finest ships — where butler service, Michelin-calibre dining, and private shore excursions are simply the beginning.
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#bfa88a]" />
              <span className="text-[#bfa88a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Virtuoso Member Benefits
              </span>
            </div>
            <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-6">
              What Sets Luxury Ocean Apart
            </h2>
            <p className="text-[#2F2F2F]/75 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Luxury ocean cruising is defined by an exceptional space-to-guest ratio, all-inclusive pricing, and a level of personalised service that anticipates your every need. These ships carry between 200 and 1,000 guests — a fraction of mainstream vessels — creating an atmosphere of genuine intimacy.
            </p>
            <p className="text-[#2F2F2F]/65 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              As a Virtuoso member agency, BTA clients receive exclusive amenities on top of each line's already generous inclusions: negotiated rates, VIP welcome receptions, shipboard credits, specialty dining, cabin upgrades when available, and dedicated onboard hosts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cruise Line Sections ──────────────────────────────────────────── */}
      {CRUISE_LINES.map((line, index) => (
        <section
          key={line.id}
          className={index % 2 === 0 ? "bg-white" : "bg-[#faf0f6]"}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${line.imageRight ? "" : ""}`}>

              {/* Image */}
              <div
                className={`relative overflow-hidden ${line.imageRight ? "lg:order-2" : "lg:order-1"}`}
                style={{ minHeight: "560px" }}
              >
                <img
                  src={line.image}
                  alt={line.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Eyebrow label over image */}
                <div className="absolute top-8 left-8">
                  <span
                    className="bg-[#bfa88a]/90 text-white text-xs tracking-[0.25em] uppercase px-4 py-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {line.eyebrow}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-20 ${line.imageRight ? "lg:order-1" : "lg:order-2"}`}
              >
                {/* Parent company */}
                <p
                  className="text-[#bfa88a]/70 text-xs tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {line.parent}
                </p>

                <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-2">
                  {line.name}
                </h2>

                {/* Tagline */}
                <p
                  className="text-[#bfa88a] text-lg mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {line.tagline}
                </p>

                {/* Gold rule */}
                <div className="w-12 h-px bg-[#bfa88a] mb-6" />

                <p
                  className="text-[#2F2F2F]/75 text-base leading-relaxed mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {line.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {line.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[#2F2F2F]/70 text-sm"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      <span className="text-[#bfa88a] mt-0.5 flex-shrink-0">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Culinary highlight */}
                <div className="border-l-2 border-[#bfa88a]/40 pl-4 mb-8">
                  <p
                    className="text-[#384959]/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    <span className="text-[#bfa88a] not-italic font-medium">Culinary: </span>
                    {line.culinary}
                  </p>
                </div>

                {/* CTA */}
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

      {/* ── Yacht & Boutique Lines Teaser ─────────────────────────────────── */}
      <section className="bg-[#384959] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-[#bfa88a]/60" />
                <span className="text-[#bfa88a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Also Available
                </span>
              </div>
              <h2 className="font-display text-white text-3xl md:text-4xl font-light leading-tight mb-6">
                Yacht & Boutique Lines
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                For the ultimate in intimate luxury, explore our portfolio of yacht and boutique cruise lines: The Ritz-Carlton Yacht Collection, Four Seasons Yachts (launching 2026), Emerald Cruises Yacht Series, Scenic Discovery Yachts, Windstar Cruises, and Paul Gauguin Cruises. These vessels carry as few as 36 guests, offering a truly private-yacht experience with full-service amenities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#bfa88a] text-[#bfa88a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfa88a] hover:text-white transition-all duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Enquire About Yacht Cruises
                <span className="text-base not-italic">→</span>
              </Link>
            </div>

            {/* Yacht line logos / names */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "The Ritz-Carlton Yacht Collection",
                "Four Seasons Yachts",
                "Emerald Cruises Yacht",
                "Scenic Discovery Yachts",
                "Windstar Cruises",
                "Paul Gauguin Cruises",
              ].map((name) => (
                <div
                  key={name}
                  className="border border-[#bfa88a]/25 px-5 py-4 hover:border-[#bfa88a]/60 transition-colors duration-300"
                >
                  <p
                    className="text-white/75 text-sm leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
