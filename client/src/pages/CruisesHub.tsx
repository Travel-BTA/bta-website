/**
 * CruisesHub — /cruises
 *
 * Main cruise landing page. Showcases all 4 cruise categories as
 * full-bleed cards that link to their respective sub-pages.
 *
 * Sections:
 * 1. Hero — luxury marina, full-bleed
 * 2. Intro + Robert Henri quote
 * 3. Virtuoso Voyages Benefits band (Aegean Blue)
 * 4. Four Cruise Category Cards (grid → sub-page links)
 * 5. Private Charters — alternating image/text
 * 6. FinalCta + Footer (via PageLayout)
 *
 * Design: BTA brand guide — Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfaf8a, Aegean Blue #384959, Linen White #faf9f6.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── Images ──────────────────────────────────────────────────────────────────
const IMAGES = {
  // Hero: cruise ship at port with tropical hillside — provided by Janet to
  // replace the underwater diver stock photo. Better represents the luxury
  // ocean journey experience BTA curates for clients.
  hero: "/images/hero-cruises.jpg",
  // Luxury Ocean card: elegant ship bow at sea
  luxuryOcean: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
  // Premium Ocean card: scenic ocean voyage, no mainstream ship branding
  premiumOcean: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
  river: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  expedition: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=1200&q=80",
  privateCharter: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=80",
};

// ─── Virtuoso benefits ───────────────────────────────────────────────────────
const VIRTUOSO_BENEFITS = [
  "Negotiated Rates",
  "VIP Welcome Receptions",
  "Shipboard Credits",
  "Specialty Dining Options",
  "Cabin Upgrade If Available",
  "Dedicated Onboard Hosts",
];

// ─── Cruise category cards ────────────────────────────────────────────────────
const CRUISE_CATEGORIES = [
  {
    title: "Luxury Ocean Cruises",
    subtitle: "Ultra-luxury voyages — Explora, Regent, Silversea, Seabourn, Crystal",
    description:
      "All-inclusive ultra-luxury voyages where every detail is curated — from Michelin-calibre dining to private shore excursions and butler service.",
    image: IMAGES.luxuryOcean,
    href: "/cruises/luxury-ocean",
    eyebrow: "Ultra-Luxury",
  },
  {
    title: "Premium Ocean Cruises",
    subtitle: "Destination-focused — Viking, Oceania, Virgin Voyages, Azamara",
    description:
      "The sweet spot between premium and ultra-luxury: smaller ships, culinary-driven itineraries, and deep destination immersion.",
    image: IMAGES.premiumOcean,
    href: "/cruises/premium-ocean",
    eyebrow: "Premium",
  },
  {
    title: "River Cruises",
    subtitle: "Intimate waterways — AmaWaterways, Uniworld, Viking River, Tauck",
    description:
      "Off-the-beaten-path journeys through towns and villages. Calm waterways, gourmet dining, and port-to-port cultural discovery.",
    image: IMAGES.river,
    href: "/cruises/river",
    eyebrow: "River",
  },
  {
    title: "Expedition Cruises",
    subtitle: "Untouched wilderness — HX, Lindblad, Atlas, Viking Expeditions",
    description:
      "Glaciers, fjords, icebergs, and exotic islands accessible only by zodiac — accompanied by expert naturalists, scientists, and photographers.",
    image: IMAGES.expedition,
    href: "/cruises/expedition",
    eyebrow: "Expedition",
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CruisesHub() {
  return (
    <PageLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Luxury yachts in a marina at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/85 via-[#2f2f2f]/30 to-transparent" />

        {/* Hero text */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-24">
          {/* Allura script eyebrow */}
          <p
            className="text-[#bfaf8a] mb-3"
            style={{ fontFamily: "'Allura', cursive", fontSize: "1.6rem" }}
          >
            Extraordinary Places & Exclusive Amenities
          </p>
          <h1 className="font-display text-white bta-h1 md:bta-h1 leading-none mb-2">
            Cruises &
          </h1>
          <h1 className="font-display text-white bta-h1 md:bta-h1 leading-none mb-8">
            Water Journeys
          </h1>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfaf8a] text-white px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#bfaf8a] transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Start Planning
            <span className="text-base not-italic">→</span>
          </Link>
        </div>
      </section>

      {/* ── Intro + Quote ─────────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-24 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — body copy */}
            <div>
              {/* Virtuoso label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#bfaf8a]" />
                <span
                  className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Virtuoso Member
                </span>
              </div>

              <h2 className="font-display text-[#384959] bta-h2 font-light leading-tight mb-8">
                The Art of Cruising
              </h2>

              <p
                className="text-[#2F2F2F]/75 text-lg leading-relaxed mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Whether traveling on a river cruise or exploring wildlife, glaciers, and fjords on
                an expedition cruise, cruising allows us to entertain, relax, and experience new
                destinations. More of your vacation time is enjoyed when you can go to bed after
                splurging on French wine in the French Riviera, only to wake up off the coast of
                Italy to the smell of pastries and espresso.
              </p>
              <p
                className="text-[#2F2F2F]/65 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
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
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Connect with an Advisor
                <span className="text-base not-italic">→</span>
              </Link>
            </div>

            {/* Right — blockquote */}
            <div className="relative">
              <div className="border-l-2 border-[#bfaf8a] pl-10 py-4">
                <p
                  className="text-[#384959] bta-h3 leading-relaxed mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  "Why do we love the sea? It is because it has some potent power to make us think
                  things we like to think."
                </p>
                <p
                  className="text-[#bfaf8a] text-sm tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  — Robert Henri
                </p>
              </div>

              {/* Decorative gold corner accent */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#bfaf8a]/30" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#bfaf8a]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Virtuoso Benefits Band ────────────────────────────────────────── */}
      <section className="bg-[#384959] py-16 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
              <span
                className="text-[#bfaf8a] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Exclusive to BTA Clients
              </span>
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
            </div>
            <h2 className="font-display text-white bta-h3 font-light tracking-wide">
              Virtuoso Voyages Cruise Amenities
            </h2>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {VIRTUOSO_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="text-center py-4 px-3 border border-[#bfaf8a]/25 hover:border-[#bfaf8a]/60 transition-colors duration-300"
              >
                {/* Gold star */}
                <div className="text-[#bfaf8a] text-lg mb-2">✦</div>
                <p
                  className="text-white/85 text-xs tracking-[0.15em] uppercase leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
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

          {/* Section header */}
          <div className="text-center mb-16">
            <p
              className="text-[#bfaf8a] mb-3"
              style={{ fontFamily: "'Allura', cursive", fontSize: "1.8rem" }}
            >
              Explore Our Cruises
            </p>
            <h2 className="font-display text-[#384959] bta-h2 font-light mb-4">
              Choose Your Journey
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-[#bfaf8a]" />
              <span className="text-[#bfaf8a] text-lg">✦</span>
              <div className="w-12 h-px bg-[#bfaf8a]" />
            </div>
          </div>

          {/* 2×2 grid of category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CRUISE_CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group block">
                <div className="relative overflow-hidden" style={{ paddingBottom: "62%" }}>
                  {/* Background image */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/80 via-[#2f2f2f]/20 to-transparent" />

                  {/* Gold top-left eyebrow label */}
                  <div className="absolute top-6 left-6">
                    <span
                      className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {cat.eyebrow}
                    </span>
                  </div>

                  {/* Bottom text block */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-white bta-h3 font-light leading-tight mb-2">
                      {cat.title}
                    </h3>
                    <p
                      className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {cat.description}
                    </p>
                    {/* CTA — gold outlined pill */}
                    <span
                      className="inline-flex items-center gap-2 border border-[#bfaf8a] text-[#bfaf8a] px-6 py-2 text-xs tracking-[0.2em] uppercase group-hover:bg-[#bfaf8a] group-hover:text-white transition-all duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                    >
                      Explore
                      <span className="text-sm not-italic">→</span>
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

          {/* Image — left */}
          <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
            <img
              src={IMAGES.privateCharter}
              alt="Luxury sailing yacht on open water"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#384959]/10" />
          </div>

          {/* Text — right */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20">
            <div className="w-10 h-px bg-[#bfaf8a] mb-8" />

            <p
              className="text-[#bfaf8a] mb-3"
              style={{ fontFamily: "'Allura', cursive", fontSize: "1.5rem" }}
            >
              The Ultimate Escape
            </p>

            <h2 className="font-display text-[#384959] bta-h2 font-light leading-tight mb-8">
              Private Charters
            </h2>

            <p
              className="text-[#2F2F2F]/75 text-lg leading-relaxed mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mention the word yachts and images of billionaires, royals, and celebrities cruising
              along the riviera while sipping champagne are easily conjured up. But a private
              charter is not just for the rich and famous — many of our itineraries start at only
              $1,500 per person per week.
            </p>
            <p
              className="text-[#2F2F2F]/65 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              We offer fully crewed charters that deliver the utmost value and service. All charters
              come with a professional captain and many include a gourmet chef, hostess, and full
              staff to cater to your every need. Our trusted yacht partners have decades of
              experience and deliver only the highest quality boats and crew in the industry.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300 self-start"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Enquire About a Charter
              <span className="text-base not-italic">→</span>
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
