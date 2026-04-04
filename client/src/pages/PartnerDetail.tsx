/**
 * PartnerDetail.tsx
 *
 * Individual preferred partner landing page. one component, all 7 partners.
 * The slug from the URL (/preferred-partners/:id) drives which partner data
 * is loaded from preferredPartners.ts. Adding a new partner only requires
 * adding an entry to the content file. no new page component needed.
 *
 * Page structure (mirrors Fora's Hyatt Privé page, BTA aesthetic):
 *   1. Hero. full-bleed partner image + partner name + "Plan Your Journey" CTA
 *   2. Intro. partner name large, intro paragraph centered
 *   3. Benefits. left text + clickable pill tabs / right editorial image
 *   4. Property grid. "Discover [Partner Name]" + 3-col photo cards
 *   5. BTA value prop. why book through BTA strip
 *   6. Final CTA. full-bleed "Plan Your Journey"
 *   7. Footer
 */

import { useRef, useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { partners } from "@/content/preferredPartners";

// ─── Benefit pill ─────────────────────────────────────────────────────────────

function BenefitPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`bta-eyebrow text-xs tracking-wider px-4 py-2 border transition-all duration-200 text-left ${
        active
          ? "bg-[#384959] text-white border-[#384959]"
          : "bg-transparent text-[#384959] border-[#384959]/40 hover:border-[#384959]"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Property card ────────────────────────────────────────────────────────────

function PropertyCard({
  name,
  location,
  imageUrl,
}: {
  name: string;
  location: string;
  imageUrl: string;
}) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-transparent to-transparent" />
      </div>

      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="font-display text-white text-base leading-tight mb-0.5">
          {name}
        </h4>
        <p className="bta-eyebrow text-[#BFAF8A] text-[10px] tracking-widest">
          {location}
        </p>
      </div>

      {/* Book link. appears on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Link href="/book">
          <span className="bg-[#BFAF8A] text-white bta-eyebrow text-[10px] tracking-widest px-3 py-1.5 inline-block">
            Book
          </span>
        </Link>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PartnerDetail() {
  // Grab the slug from the URL
  const params = useParams<{ id: string }>();
  const partner = partners.find((p) => p.id === params.id);

  const heroRef = useRef<HTMLDivElement>(null);
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Parallax on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 404 fallback
  if (!partner) {
    return (
      <div className="bg-[#EDEAE4] min-h-screen flex flex-col items-center justify-center">
        <div className="text-center py-40">
          <h1 className="font-display text-4xl text-[#384959] mb-4">
            Partner Not Found
          </h1>
          <Link href="/preferred-partners">
            <span className="bta-btn-outline-dark inline-block mt-4">
              View All Partners
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EDEAE4] min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[560px] overflow-hidden flex items-center justify-center">
        {/* Parallax background */}
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={partner.heroImage}
            alt={partner.name}
            className="w-full h-[130%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#384959]/55" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6">
          {/* Back breadcrumb */}
          <Link href="/preferred-partners">
            <span className="bta-eyebrow text-[11px] tracking-widest text-white/60 hover:text-[#BFAF8A] transition-colors mb-6 inline-block">
              ← Preferred Partners
            </span>
          </Link>

          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[0.06em] mb-6 leading-none">
            {partner.name}
          </h1>

          <div className="w-12 h-px bg-[#BFAF8A] mx-auto mb-6" />

          <Link href="/book">
            <span className="bta-btn-outline-white inline-block">
              Plan Your Journey
            </span>
          </Link>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="bta-eyebrow mb-3 text-[#BFAF8A]">
            BTA Preferred Partner
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#384959] uppercase tracking-wider mb-6">
            {partner.name}
          </h2>
          <div className="w-10 h-px bg-[#BFAF8A] mx-auto mb-6" />
          <p className="font-body text-lg text-[#2F2F2F]/80 leading-relaxed">
            {partner.description}
          </p>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

            {/* Left. benefits text + pills */}
            <div className="bg-[#EDEAE4] py-16 pr-0 lg:pr-12 flex flex-col justify-center">
              <p className="bta-eyebrow mb-3">Exclusive Inclusions</p>
              <h2 className="font-display text-2xl md:text-3xl text-[#384959] uppercase tracking-wider mb-3">
                {partner.name} Benefits
              </h2>
              <p className="font-body text-sm text-[#2F2F2F]/60 mb-6 leading-relaxed">
                Benefits apply on all qualifying bookings made through a BTA
                advisor. Perks vary by property. your advisor will confirm
                exact inclusions at time of booking.
              </p>

              {/* Benefit pills. clickable, mirrors Fora's tab pattern */}
              <div className="flex flex-wrap gap-2">
                {partner.benefits.map((benefit, i) => (
                  <BenefitPill
                    key={benefit}
                    label={benefit}
                    active={activeBenefit === i}
                    onClick={() => setActiveBenefit(i)}
                  />
                ))}
              </div>

              {/* Active benefit detail */}
              <div className="mt-6 p-4 border-l-2 border-[#BFAF8A] bg-white/50">
                <p className="font-body text-sm text-[#384959] leading-relaxed">
                  <span className="font-semibold">{partner.benefits[activeBenefit]}</span>
                  {" "}is included on every qualifying stay booked through BTA. confirmed
                  at time of reservation with no additional cost to you.
                </p>
              </div>
            </div>

            {/* Right. editorial image */}
            <div className="relative h-80 lg:h-auto min-h-[400px] overflow-hidden">
              <img
                src={partner.heroImage}
                alt={`${partner.name} property`}
                className="w-full h-full object-cover"
              />
              {/* Gold corner accent */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#BFAF8A]" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#BFAF8A]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Property showcase ─────────────────────────────────────────────── */}
      {partner.properties && partner.properties.length > 0 && (
        <section className="py-20 px-6 bg-[#FAF8F5]">
          <div className="container mx-auto">
            {/* Section heading with decorative lines */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-[#BFAF8A]/40" />
              <h2 className="font-display text-2xl text-[#384959] uppercase tracking-widest whitespace-nowrap text-center">
                Discover {partner.name}
              </h2>
              <div className="flex-1 h-px bg-[#BFAF8A]/40" />
            </div>

            {/* 3-col grid. 2-col tablet. 1-col mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partner.properties.map((property) => (
                <PropertyCard
                  key={property.name}
                  name={property.name}
                  location={property.location}
                  imageUrl={property.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BTA value strip ───────────────────────────────────────────────── */}
      <section className="bg-[#384959] py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                heading: "Guaranteed Benefits",
                body: "Every perk listed is confirmed at booking. not aspirational.",
              },
              {
                heading: "No Extra Cost",
                body: "BTA preferred rates match or beat direct booking. The amenities are simply added.",
              },
              {
                heading: "Personal Advocacy",
                body: "Your advisor manages every detail and escalates on your behalf when needed.",
              },
            ].map((item) => (
              <div key={item.heading}>
                <div className="w-8 h-px bg-[#BFAF8A] mx-auto mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">
                  {item.heading}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-center justify-center">
        <img
          src={partner.heroImage}
          alt="Plan Your Journey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#384959]/65" />
        <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
          <p className="bta-eyebrow mb-3 text-[#BFAF8A]">Ready to Travel?</p>
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider mb-4">
            Let's Design Your Journey
          </h2>
          <div className="w-10 h-px bg-[#BFAF8A] mx-auto mb-6" />
          <p className="font-body text-base text-white/75 mb-8 leading-relaxed">
            Tell us your travel plans and a BTA advisor will reach out within 24 hours
            with a fully personalised proposal. including all {partner.name} benefits.
          </p>
          <Link href="/book">
            <span className="bta-btn-outline-white inline-block">
              Start Planning
            </span>
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      {/* WHY: Footer is rendered globally in App.tsx — no inline footer needed here */}
    </div>
  );
}
