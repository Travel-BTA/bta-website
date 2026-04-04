/**
 * PreferredPartners.tsx
 *
 * BTA Preferred Partners hub page. inspired by Fora's /partners layout
 * but built entirely in BTA brand aesthetic:
 *   - Aegean Blue (#384959) + Champagne Gold (#BFAF8A) + Warm Stone (#EDEAE4)
 *   - Playfair Display headings, Playfair Display body
 *   - Logo-forward partner cards with category filter tabs
 *   - Full-bleed hero, stats bar, partner grid, final CTA
 *
 * Content is driven entirely from /content/preferredPartners.ts
 * so adding a new partner requires no changes here.
 */

import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  partnersHero,
  partnersIntro,
  partnersCta,
  partners,
  favouriteProperties,
  type Partner,
} from "@/content/preferredPartners";

// ─── Partner card ─────────────────────────────────────────────────────────────

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    // Each card links to its individual landing page
    <Link href={`/preferred-partners/${partner.id}`}>
      <div className="group flex flex-col bg-[#FAF8F5] border border-[#BFAF8A]/30 hover:border-[#BFAF8A] transition-all duration-300 cursor-pointer h-full">
        {/* Card image. subtle, fades on hover */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={partner.cardImage}
            alt={partner.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          {/* Category badge */}
          <span className="absolute top-3 left-3 bg-[#384959]/80 text-[#BFAF8A] font-smallcaps text-[10px] tracking-widest px-3 py-1">
            {partner.category}
          </span>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-6">
          {/* Partner name */}
          <h3 className="text-xl text-[#384959] mb-1 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
            {partner.name}
          </h3>

          {/* Gold rule */}
          <div className="w-8 h-px bg-[#BFAF8A] mb-3" />

          {/* Tagline */}
          <p className="font-script text-[#384959]/70 text-base mb-3 leading-snug">
            {partner.tagline}
          </p>

          {/* Description. capped at 2 lines */}
          <p className="font-body text-sm text-[#2F2F2F]/70 leading-relaxed line-clamp-3 flex-1">
            {partner.description}
          </p>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-1 text-[#BFAF8A] font-smallcaps text-xs tracking-widest group-hover:gap-2 transition-all duration-200">
            <span>Explore Benefits</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PreferredPartners() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Parallax on hero image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", "Hotels", "Networks", "Collections"];

  const filtered =
    activeCategory === "All"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#EDEAE4] min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden flex items-center justify-center">
        {/* Parallax background */}
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={partnersHero.imageUrl}
            alt="BTA Preferred Partners"
            className="w-full h-[130%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#384959]/60" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="bta-eyebrow mb-3 text-[#BFAF8A]">
            {partnersHero.eyebrow}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[0.08em] mb-6">
            {partnersHero.heading}
          </h1>
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            {partnersHero.subheading}
          </p>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#384959] py-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {partnersIntro.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl text-[#BFAF8A] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
                  {stat.value}
                </div>
                <div className="font-smallcaps text-[11px] tracking-widest text-white/60 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="bta-eyebrow mb-3">Why It Matters</p>
          <h2 className="text-3xl md:text-4xl text-[#384959] uppercase tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
            {partnersIntro.heading}
          </h2>
          <div className="w-12 h-px bg-[#BFAF8A] mx-auto mb-6" />
          <p className="font-body text-lg text-[#2F2F2F]/80 leading-relaxed">
            {partnersIntro.body}
          </p>
        </div>
      </section>

      {/* ── Category filter tabs ──────────────────────────────────────────── */}
      <section className="pb-6 px-6">
        <div className="container mx-auto">
          {/* Horizontal scroll on mobile so tabs never wrap or orphan */}
          <div className="flex overflow-x-auto scrollbar-hide gap-2 justify-start md:justify-center pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-smallcaps text-xs tracking-widest px-6 py-2.5 border transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-[#384959] text-white border-[#384959]"
                    : "bg-transparent text-[#384959] border-[#384959]/40 hover:border-[#384959]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner grid ─────────────────────────────────────────────────── */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          {/* Section heading with decorative lines. mirrors Fora's style */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-[#BFAF8A]/40" />
            <h2 className="text-2xl text-[#384959] uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
              {activeCategory === "All"
                ? "Preferred Partners"
                : `${activeCategory} Partners`}
            </h2>
            <div className="flex-1 h-px bg-[#BFAF8A]/40" />
          </div>

          {/* 3-col grid. 2-col tablet. 1-col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Favourite properties ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="container mx-auto">
          {/* Section heading. stacks on mobile, inline with rules on desktop */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
            <div className="hidden md:block flex-1 h-px bg-[#BFAF8A]/40" />
            <h2 className="text-xl md:text-2xl text-[#384959] uppercase tracking-widest text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
              A Few of Our Favourite Properties
            </h2>
            <div className="hidden md:block flex-1 h-px bg-[#BFAF8A]/40" />
            <div className="md:hidden w-12 h-px bg-[#BFAF8A] mx-auto" />
          </div>

          {/* 2 rows × 3 columns grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favouriteProperties.map((prop) => (
              <Link key={prop.name} href={`/preferred-partners/${prop.partnerId}`}>
                <div className="group relative overflow-hidden cursor-pointer">
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={prop.imageUrl}
                      alt={prop.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-[#384959]/20 to-transparent" />
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Partner badge */}
                    <span className="font-smallcaps text-[10px] tracking-widest text-[#BFAF8A] mb-1 block">
                      {prop.partner}
                    </span>
                    <h3 className="text-white text-lg leading-tight mb-0.5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
                      {prop.name}
                    </h3>
                    <p className="font-smallcaps text-white/60 text-[10px] tracking-widest">
                      {prop.location}
                    </p>
                  </div>

                  {/* Gold corner accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-[#BFAF8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden flex items-center justify-center">
        <img
          src={partnersCta.imageUrl}
          alt="Plan Your Journey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#384959]/65" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
            {partnersCta.heading}
          </h2>
          <div className="w-10 h-px bg-[#BFAF8A] mx-auto mb-6" />
          <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
            {partnersCta.body}
          </p>
          <Link href={partnersCta.buttonHref}>
            <span className="bta-btn-outline-white inline-block">
              {partnersCta.buttonText}
            </span>
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#384959] text-white/60 py-10 px-6 text-center">
        <p className="font-smallcaps text-xs tracking-widest">
          © {new Date().getFullYear()} Boutique Travel Advisors · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
