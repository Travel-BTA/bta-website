/**
 * Pricing.tsx — BTA Advisory Fee Structure
 *
 * WHY: Transparent pricing builds trust with luxury travelers who expect clarity
 * before engaging a concierge-level service. The page uses the brand's linen/navy
 * palette with Playfair Display headings and generous white space to feel editorial,
 * not transactional.
 *
 * Price points (per user request):
 *  - Local Escapes: from $50/day of travel
 *  - International: from $75/day of travel
 */

import PageSEO from "@/components/PageSEO";
import { Link } from "wouter";

const PRICING_TIERS = [
  {
    label: "LOCAL ESCAPES",
    headline: "Domestic & Regional Travel",
    from: "$50",
    unit: "per day of travel",
    description:
      "Curated itineraries, preferred hotel rates, and VIP amenities for travel within the United States and nearby destinations. Your advisor handles every detail — from pre-arrival planning to on-trip support.",
    includes: [
      "Dedicated travel advisor",
      "Custom itinerary design",
      "VIP hotel amenities worth $550+ per stay",
      "Preferred rates and availability",
      "Priority upgrades, early check-in & late check-out",
      "Breakfast credit or daily breakfast for two",
      "Thoughtful pre-arrival planning",
    ],
    cta: "Start Planning",
    ctaHref: "/contact-us",
    accent: "#7982A2", // slate blue
  },
  {
    label: "INTERNATIONAL",
    headline: "Global & Multi-Destination Travel",
    from: "$75",
    unit: "per day of travel",
    description:
      "Comprehensive planning for international journeys — from European river cruises and African safaris to private villa escapes and cultural immersions. BTA's global network ensures every detail exceeds expectations.",
    includes: [
      "Dedicated senior travel advisor",
      "Multi-destination itinerary architecture",
      "VIP hotel amenities at Virtuoso & preferred properties",
      "Preferred rates and exclusive access",
      "Priority upgrades, early check-in & late check-out",
      "Breakfast credit or daily breakfast for two",
      "Hotel, spa, or dining credits",
      "Thoughtful pre-arrival planning & on-trip support",
    ],
    cta: "Start Planning",
    ctaHref: "/contact-us",
    accent: "#9C886A", // gold
    featured: true,
  },
];

const WHAT_YOU_GET = [
  {
    title: "A Trusted Advisor",
    body:
      "You work directly with a dedicated travel professional who knows your preferences, travel style, and what matters most to your family.",
  },
  {
    title: "Access & Relationships",
    body:
      "BTA's membership in Virtuoso and preferred partner networks opens doors that are simply not available when booking independently.",
  },
  {
    title: "Time Returned to You",
    body:
      "The research, vetting, logistics, and follow-up are handled entirely by your advisor — freeing you to focus on the experience, not the planning.",
  },
  {
    title: "Travel That Gives Back",
    body:
      "A portion of every booking supports philanthropic causes including Make-A-Wish, veterans' programs, arts & culture, and communities where you travel.",
  },
];

export default function Pricing() {
  return (
    <div
className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          height: "62vh",
          minHeight: "420px",
        }}
    >
      <PageSEO
        title="Planning Fees | Boutique Travel Advisors"
        description="BTA's transparent travel planning fee structure. Our advisory fees reflect the depth of expertise, exclusive access, and white-glove service we provide."
        path="/pricing"
      />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(4,6,25,0.58)" }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="tracking-[0.22em] text-xs mb-4"
            style={{ color: "#9C886A", fontFamily: "inherit" }}
          >
            BOUTIQUE TRAVEL ADVISORS
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.15,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Advisory Fee Structure
          </h1>
          <p
            className="text-white/80 max-w-xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
            }}
          >
            Transparent pricing for concierge-level travel planning — because exceptional experiences deserve expert guidance.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <p
          className="tracking-[0.18em] text-xs mb-6"
          style={{ color: "#9C886A" }}
        >
          HOW WE WORK
        </p>
        <h2
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "#040619",
            lineHeight: 1.3,
          }}
        >
          Planning fees reflect the depth of expertise, access, and care your advisor brings to every journey.
        </h2>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#4a4a4a",
            fontSize: "1.05rem",
            lineHeight: 1.85,
          }}
        >
          BTA's advisory fee is charged per day of travel and covers the full scope of your advisor's work — from initial consultation and itinerary design through booking, pre-departure briefings, and on-trip support. The fee is separate from, and in addition to, the cost of your travel arrangements.
        </p>
      </section>

      {/* ── Pricing Tiers ── */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.label}
              className="relative flex flex-col"
              style={{
                border: tier.featured
                  ? `1.5px solid ${tier.accent}`
                  : "1px solid #e0dbd4",
                background: tier.featured ? "#faf9f7" : "#ffffff",
                padding: "2.5rem 2.25rem 2rem",
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-px left-0 right-0 h-[3px]"
                  style={{ background: tier.accent }}
                />
              )}
              <p
                className="tracking-[0.2em] text-xs mb-3"
                style={{ color: tier.accent }}
              >
                {tier.label}
              </p>
              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 500,
                  fontSize: "1.45rem",
                  color: "#040619",
                  lineHeight: 1.25,
                }}
              >
                {tier.headline}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mt-5 mb-2">
                <span
                  style={{
                    fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                    fontSize: "3.2rem",
                    fontWeight: 400,
                    color: "#040619",
                    lineHeight: 1,
                  }}
                >
                  {tier.from}
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "#7a7a7a",
                  }}
                >
                  {tier.unit}
                </span>
              </div>
              <p
                className="text-xs tracking-widest mb-5"
                style={{ color: "#9C886A" }}
              >
                STARTING FROM
              </p>

              {/* Divider */}
              <div
                className="mb-5"
                style={{ height: "1px", background: "#e0dbd4" }}
              />

              {/* Description */}
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#4a4a4a",
                  fontSize: "0.97rem",
                  lineHeight: 1.8,
                }}
              >
                {tier.description}
              </p>

              {/* Includes list */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "0.92rem",
                      color: "#2a2a2a",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                      style={{ background: tier.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={tier.ctaHref}>
                <button
                  className="w-full py-3.5 tracking-[0.18em] text-xs transition-all duration-300"
                  style={{
                    border: `1px solid ${tier.accent}`,
                    color: tier.featured ? "#ffffff" : tier.accent,
                    background: tier.featured ? tier.accent : "transparent",
                    fontFamily: "inherit",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = tier.accent;
                    el.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = tier.featured ? tier.accent : "transparent";
                    el.style.color = tier.featured ? "#ffffff" : tier.accent;
                  }}
                >
                  {tier.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-center mt-10 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "0.82rem",
            color: "#9a9a9a",
            lineHeight: 1.7,
          }}
        >
          *Advisory fees are charged per day of travel and are non-refundable once itinerary planning has commenced. Hotel amenity values are based on typical two-night stays and vary by property and dates. Fees are in addition to the cost of travel arrangements.
        </p>
      </section>

      {/* ── What You Get ── */}
      <section
        className="py-24 px-6"
        style={{ background: "#3d3f47" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="tracking-[0.2em] text-xs mb-5"
              style={{ color: "#9C886A" }}
            >
              THE BTA DIFFERENCE
            </p>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: 1.3,
              }}
            >
              What your advisory fee includes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div
                  className="shrink-0 w-px self-stretch"
                  style={{ background: "#9C886A", opacity: 0.5 }}
                />
                <div>
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                      color: "#ffffff",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.95rem",
                      lineHeight: 1.85,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philanthropy Strip ── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "#edeae4" }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="w-12 mx-auto mb-6"
            style={{ height: "1px", background: "#9C886A" }}
          />
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              color: "#040619",
              lineHeight: 1.8,
            }}
          >
            A portion of every booking supports philanthropic causes — including Make-A-Wish, veterans' programs, arts & culture, and local communities where you travel.
          </p>
          <div
            className="w-12 mx-auto mt-6"
            style={{ height: "1px", background: "#9C886A" }}
          />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 px-6 text-center">
        <p
          className="tracking-[0.2em] text-xs mb-5"
          style={{ color: "#9C886A" }}
        >
          READY TO BEGIN
        </p>
        <h2
          className="mb-6 max-w-xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "#040619",
            lineHeight: 1.3,
          }}
        >
          Your next journey starts with a conversation.
        </h2>
        <p
          className="mb-10 max-w-md mx-auto"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#4a4a4a",
            fontSize: "1rem",
            lineHeight: 1.8,
          }}
        >
          Connect with a BTA advisor to discuss your travel vision and receive a personalized proposal.
        </p>
        <Link href="/contact-us">
          <button
            className="px-10 py-4 tracking-[0.2em] text-xs transition-all duration-300"
            style={{
              border: "1px solid #040619",
              color: "#040619",
              background: "transparent",
              fontFamily: "inherit",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3d3f47";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#040619";
            }}
          >
            START PLANNING
          </button>
        </Link>
      </section>
    </div>
  );
}
