/**
 * CruisesHub. /cruises
 *
 * Typography (matches Figma exactly):
 *   H1 hero / H2 section titles: Instrument Serif, ALL CAPS, Champagne Gold #bfaf8a
 *   H3 card titles:               Instrument Serif, ALL CAPS, white (on dark overlay)
 *   Script accents:               Allura italic. ONLY for one-off highlights
 *   Body / descriptions:          Playfair Display Regular
 *   Labels / eyebrows:            Instrument Serif, tracked uppercase
 *   Zero Playfair Display anywhere.
 */

import PageSEO from "@/components/PageSEO";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── Images ──────────────────────────────────────────────────────────────────
const IMAGES = {
  // WHY: User-provided photo. luxury cruise ship at golden hour in a tropical port
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/cruise-hero_28af95b6.jpg",
  // WHY: User-provided photo. Santorini blue domes for luxury Mediterranean cruises
  luxuryOcean: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/santorini-luxury_c8b64a58.jpg",
  // WHY: User-provided Azamara ship photo for premium ocean cruises
  premiumOcean: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/azamara-premium_540395ea.jpg",
  river: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  expedition: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=1200&q=80",
  privateCharter: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=80",
};

const VIRTUOSO_BENEFITS = [
  "Negotiated Rates",
  "VIP Welcome Receptions",
  "Shipboard Credits",
  "Specialty Dining Options",
  "Cabin Upgrade If Available",
  "Dedicated Onboard Hosts",
];

const CRUISE_CATEGORIES = [
  {
    title: "Luxury Ocean Cruises",
    subtitle: "Ultra-luxury voyages. Explora, Regent, Silversea, Seabourn, Crystal",
    description: "All-inclusive voyages. Butler service, Michelin-calibre dining, private shore excursions.",
    image: IMAGES.luxuryOcean,
    href: "/cruises/luxury-ocean",
    eyebrow: "Ultra-Luxury",
  },
  {
    title: "Premium Ocean Cruises",
    subtitle: "Destination-focused. Viking, Oceania, Virgin Voyages, Azamara",
    description: "Smaller ships, culinary-driven itineraries, deep destination immersion.",
    image: IMAGES.premiumOcean,
    href: "/cruises/premium-ocean",
    eyebrow: "Premium",
  },
  {
    title: "River Cruises",
    subtitle: "Intimate waterways. AmaWaterways, Uniworld, Viking River, Tauck",
    description: "Drift through medieval villages and vineyard valleys. Unpack once, wake up somewhere new.",
    image: IMAGES.river,
    href: "/cruises/river",
    eyebrow: "River",
  },
  {
    title: "Expedition Cruises",
    subtitle: "Untouched wilderness. HX, Lindblad, Atlas, Viking Expeditions",
    description: "Glaciers, fjords and remote islands by Zodiac. Expert naturalists, scientists, photographers.",
    image: IMAGES.expedition,
    href: "/cruises/expedition",
    eyebrow: "Expedition",
  },
];

// Shared font constants. WHY: single source of truth keeps all text consistent
const F = {
  instrument: "'Instrument Serif', Georgia, serif",
  playfair: "'Playfair Display', Georgia, serif",
  allura: "'Allura', cursive",
};

export default function CruisesHub() {
  return (
    <PageLayout>
      <PageSEO
        title="Luxury Cruises | Boutique Travel Advisors"
        description="Explore the world’s finest cruise lines with BTA — Explora Journeys, Regent Seven Seas, Silversea, river cruises, and expedition voyages. Virtuoso benefits included."
        path="/cruises"
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Luxury yachts in a marina at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/85 via-[#2f2f2f]/30 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-24">
          {/* Allura script accent. white on photo background for legibility; Champagne Gold only on plain backgrounds */}
          <p className="text-white/90 mb-3" style={{ fontFamily: F.allura, fontSize: "1.6rem" }}>
            Extraordinary Places &amp; Exclusive Amenities
          </p>
          {/* H1: Instrument Serif ALL CAPS white. matches Figma hero exactly */}
          <h1
            className="text-white text-5xl md:text-7xl uppercase mb-8 leading-tight"
            style={{ fontFamily: F.instrument, fontWeight: 400, letterSpacing: "0.04em" }}
          >
            Cruises &amp; Water Journeys
          </h1>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfaf8a] text-white px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:opacity-80 transition-all duration-300"
            style={{ fontFamily: F.instrument }}
          >
            Start Planning
            <span className="text-base">→</span>
          </Link>
        </div>
      </section>

      {/* ── Intro + Quote ─────────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-24 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left. body copy */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#bfaf8a]" />
                {/* Small label: Instrument Serif tracked uppercase */}
                <span className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: F.instrument }}>
                  Virtuoso Member
                </span>
              </div>

              {/* H2 section title: Instrument Serif ALL CAPS Champagne Gold */}
              <h2
                className="text-[#bfaf8a] text-3xl md:text-4xl uppercase mb-8 leading-tight"
                style={{ fontFamily: F.instrument, fontWeight: 400, letterSpacing: "0.05em" }}
              >
                The Art of Cruising
              </h2>

              <p className="text-[#2F2F2F]/75 text-base leading-relaxed mb-6" style={{ fontFamily: F.playfair, fontWeight: 400 }}>
                Whether traveling on a river cruise or exploring wildlife, glaciers, and fjords on
                an expedition cruise, cruising allows us to entertain, relax, and experience new
                destinations. More of your vacation time is enjoyed when you can go to bed after
                splurging on French wine in the French Riviera, only to wake up off the coast of
                Italy to the smell of pastries and espresso.
              </p>
              <p className="text-[#2F2F2F]/65 text-base leading-relaxed mb-10" style={{ fontFamily: F.playfair, fontWeight: 400 }}>
                A cruise takes away the stressors of packing and unpacking and lost time transiting
                between destinations. BTA works closely with our clients to determine the cruise
                line, ship, destination, and itinerary. If you're looking for inspiration, explore
                our exclusive{" "}
                <span className="text-[#bfaf8a] border-b border-[#bfaf8a]/40 hover:border-[#bfaf8a] transition-colors cursor-pointer">
                  Virtuoso Voyages
                </span>
                .
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300"
                style={{ fontFamily: F.instrument }}
              >
                Connect with an Advisor
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* Right. blockquote */}
            <div className="relative">
              <div className="border-l-2 border-[#bfaf8a] pl-10 py-4">
                {/* Blockquote uses Playfair Display italic. it is body text, not a heading */}
                <p
                  className="text-[#384959] text-xl md:text-2xl leading-relaxed mb-6"
                  style={{ fontFamily: F.playfair, fontWeight: 400, fontStyle: "italic" }}
                >
                  "Why do we love the sea? It is because it has some potent power to make us think
                  things we like to think."
                </p>
                <p className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: F.instrument }}>
                 . Robert Henri
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#bfaf8a]/30" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#bfaf8a]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Virtuoso Benefits Band ────────────────────────────────────────── */}
      <section className="bg-[#384959] py-16 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
              <span className="text-[#bfaf8a] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: F.instrument }}>
                Exclusive to BTA Clients
              </span>
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
            </div>
            {/* H2: Instrument Serif ALL CAPS white */}
            <h2
              className="text-white text-2xl md:text-3xl uppercase tracking-wide"
              style={{ fontFamily: F.instrument, fontWeight: 400, letterSpacing: "0.06em" }}
            >
              Virtuoso Voyages Cruise Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {VIRTUOSO_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="text-center py-4 px-3 border border-[#bfaf8a]/25 hover:border-[#bfaf8a]/60 transition-colors duration-300"
              >
                <div className="text-[#bfaf8a] text-lg mb-2">✦</div>
                <p className="text-white/85 text-xs tracking-[0.15em] uppercase leading-snug" style={{ fontFamily: F.instrument }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cruise Category Cards ─────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">

          <div className="text-center mb-16">
            {/* Allura script accent */}
            <p className="text-[#bfaf8a] mb-3" style={{ fontFamily: F.allura, fontSize: "1.8rem" }}>
              Explore Our Cruises
            </p>
            {/* H2: Instrument Serif ALL CAPS Champagne Gold */}
            <h2
              className="text-[#bfaf8a] text-3xl md:text-4xl uppercase mb-4"
              style={{ fontFamily: F.instrument, fontWeight: 400, letterSpacing: "0.05em" }}
            >
              Choose Your Journey
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-[#bfaf8a]" />
              <span className="text-[#bfaf8a] text-lg">✦</span>
              <div className="w-12 h-px bg-[#bfaf8a]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CRUISE_CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group block">
                <div className="relative overflow-hidden" style={{ paddingBottom: "62%" }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* WHY: Strong overlay ensures card text is always legible regardless of image brightness */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-[#1a1a1a]/20" />

                  {/* Bottom text block. eyebrow sits above title inside the block to prevent overlap */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 md:px-8 md:pb-8">
                    {/* Eyebrow: Playfair Display italic subtitle — not smallcaps/uppercase, per Janet's request */}
                    <p
                      className="text-white/80 text-sm italic mb-2"
                      style={{ fontFamily: F.playfair, fontWeight: 400 }}
                    >
                      {cat.eyebrow}
                    </p>
                    {/* H3 card title: Instrument Serif ALL CAPS white */}
                    <h3
                      className="text-white text-lg md:text-2xl lg:text-3xl uppercase leading-tight mb-2"
                      style={{ fontFamily: F.instrument, fontWeight: 400, letterSpacing: "0.04em" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-white/65 text-xs md:text-sm leading-snug mb-4 max-w-xs" style={{ fontFamily: F.playfair, fontWeight: 400 }}>
                      {cat.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 border border-[#bfaf8a] text-[#bfaf8a] px-5 py-2 text-xs tracking-[0.2em] uppercase group-hover:bg-[#bfaf8a] group-hover:text-white transition-all duration-300"
                      style={{ fontFamily: F.instrument }}
                    >
                      Explore
                      <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Charters ──────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6]">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
            <img
              src={IMAGES.privateCharter}
              alt="Luxury sailing yacht on open water"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#384959]/10" />
          </div>

          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20">
            <div className="w-10 h-px bg-[#bfaf8a] mb-8" />

            {/* Allura script accent */}
            <p className="text-[#bfaf8a] mb-3" style={{ fontFamily: F.allura, fontSize: "1.5rem", fontStyle: "italic" }}>
              The Ultimate Escape
            </p>

            {/* H2: Instrument Serif ALL CAPS Champagne Gold */}
            <h2
              className="text-[#bfaf8a] text-3xl md:text-4xl uppercase leading-tight mb-8"
              style={{ fontFamily: F.instrument, fontWeight: 400, letterSpacing: "0.05em" }}
            >
              Private Charters
            </h2>

            <p className="text-[#2F2F2F]/75 text-base leading-relaxed mb-5" style={{ fontFamily: F.playfair, fontWeight: 400 }}>
              Private aviation and yacht charters are no longer reserved for the ultra-wealthy. BTA arranges private jet and yacht charters for discerning travelers who value their time, privacy, and comfort. Many itineraries begin at $1,500 per person per week.
            </p>
            <p className="text-[#2F2F2F]/65 text-base leading-relaxed mb-10" style={{ fontFamily: F.playfair, fontWeight: 400 }}>
              Every charter includes a professional captain and crew. Many include a gourmet chef, hostess, and full staff. Our trusted partners have decades of experience and deliver the highest quality vessels and service in the industry.
            </p>

            <Link
              href="/cruises/private-charters"
              className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300 self-start"
              style={{ fontFamily: F.instrument }}
            >
              Explore Private Charters
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
