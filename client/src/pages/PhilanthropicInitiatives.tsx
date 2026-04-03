/**
 * Philanthropic Initiatives Page — Visual-First Redesign
 *
 * Design: Image-led editorial. Every section anchored by photography.
 * Minimal text — let the visuals carry the story.
 * Consistent with BTA brand: Playfair Display, Champagne Gold, Aegean Blue.
 *
 * Content managed in: client/src/content/philanthropy.ts
 * NOTE: Pack for a Purpose removed. Not Just Tourists is the featured partner.
 */

import NavBar from "@/components/NavBar";
import { footer } from "@/content/homepage";
import {
  philanthropyBeneficiaries,
  philanthropyCta,
  philanthropyFundraise,
  philanthropyHero,
  philanthropyIntro,
  philanthropyNjt,
  philanthropyPartnerships,
  philanthropyPillars,
} from "@/content/philanthropy";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const PF = { fontFamily: "'Playfair Display', Georgia, serif" };

export default function PhilanthropicInitiatives() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current)
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2F2F2F] font-serif">
      <NavBar />

      {/* ══════════════════════════════════════════════════════════════
          HERO — Full-bleed cinematic, text bottom-left
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${philanthropyHero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Layered gradient — dark bottom, slight top vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        {/* Large decorative text watermark */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[18vw] font-light leading-none select-none pointer-events-none hidden lg:block"
          style={PF}
        >
          BTA
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <p className="text-[#BFAF8A] tracking-[0.35em] text-xs uppercase mb-5" style={PF}>
            {philanthropyHero.eyebrow}
          </p>
          <h1
            className="text-white text-6xl md:text-7xl lg:text-8xl font-light leading-[1.0] mb-6 max-w-4xl"
            style={PF}
          >
            {philanthropyHero.headline.split("\n").map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </h1>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-px bg-[#BFAF8A]" />
            <p className="text-white/75 text-lg font-light italic">{philanthropyHero.subheadline}</p>
          </div>
          <p className="text-[#BFAF8A] text-sm tracking-widest ml-16">{philanthropyHero.attribution}</p>

          <div className="mt-14 flex items-center gap-3 text-white/40">
            <div className="w-6 h-px bg-white/30" />
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTRO — 3-image mosaic + short mission statement
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
              {philanthropyIntro.eyebrow}
            </p>
            <h2 className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8" style={PF}>
              {philanthropyIntro.headline}
            </h2>
            <p className="text-[#5A5A5A] text-xl leading-relaxed font-light mb-10 max-w-lg">
              {philanthropyIntro.body}
            </p>
            {/* Gold rule */}
            <div className="w-16 h-px bg-[#BFAF8A]" />
          </div>

          {/* 3-image mosaic */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[520px]">
            {/* Large top-left */}
            <div
              className="row-span-2 bg-cover bg-center"
              style={{ backgroundImage: `url(${philanthropyIntro.images[0]})` }}
            />
            {/* Small top-right */}
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${philanthropyIntro.images[1]})` }}
            />
            {/* Small bottom-right */}
            <div
              className="bg-cover bg-center relative"
              style={{ backgroundImage: `url(${philanthropyIntro.images[2]})` }}
            >
              {/* Gold overlay accent */}
              <div className="absolute inset-0 bg-[#9E8661]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PILLARS — Full-bleed image cards, text overlay, horizontal scroll feel
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-0">
        {/* Section header on stone bg */}
        <div className="bg-[#F0EDE8] py-16 px-8 md:px-16 lg:px-24 text-center">
          <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyPillars.eyebrow}
          </p>
          <h2 className="text-[#384959] text-4xl md:text-5xl font-light" style={PF}>
            {philanthropyPillars.headline}
          </h2>
        </div>

        {/* 5-column full-height image strip */}
        <div className="flex h-[70vh] min-h-[500px]">
          {philanthropyPillars.pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative flex-1 overflow-hidden group cursor-default"
              style={{
                backgroundImage: `url(${pillar.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay — lifts on hover */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-all duration-500" />
              {/* Gold side divider */}
              {i < philanthropyPillars.pillars.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-[#BFAF8A]/30" />
              )}
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p
                  className="text-[#BFAF8A]/40 text-4xl font-light leading-none mb-3"
                  style={PF}
                >
                  0{i + 1}
                </p>
                <div className="w-6 h-px bg-[#BFAF8A] mb-4" />
                <h3
                  className="text-white text-xl md:text-2xl font-light mb-2 tracking-wide"
                  style={PF}
                >
                  {pillar.name}
                </h3>
                <p className="text-white/60 text-xs tracking-widest uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {pillar.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BENEFICIARIES — Full-bleed image cards in a masonry-style grid
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyBeneficiaries.eyebrow}
          </p>
          <h2 className="text-[#384959] text-4xl md:text-5xl font-light mb-6" style={PF}>
            {philanthropyBeneficiaries.headline}
          </h2>
          <p className="text-[#5A5A5A] text-base font-light max-w-xl mx-auto leading-relaxed">
            {philanthropyBeneficiaries.body}
          </p>
        </div>

        {/* 5-card image grid — 3 top, 2 bottom */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {philanthropyBeneficiaries.organizations.map((org, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2 h-[380px]" : "h-[280px]"}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${org.imageUrl})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              {/* Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Logo placeholder bar */}
                <div className="w-8 h-px bg-[#BFAF8A] mb-3" />
                <h3 className="text-white text-base font-light tracking-wide" style={PF}>
                  {org.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOT JUST TOURISTS — Full-bleed split: massive image + text panel
      ══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image — full height */}
        <div
          className="relative min-h-[400px] lg:min-h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${philanthropyNjt.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text panel — Aegean Blue */}
        <div className="bg-[#384959] flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyNjt.eyebrow}
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8" style={PF}>
            {philanthropyNjt.headline}
          </h2>
          <p className="text-white/65 text-base leading-relaxed font-light mb-10 max-w-md">
            {philanthropyNjt.body}
          </p>

          {/* Mini gallery strip */}
          <div className="grid grid-cols-3 gap-2 mb-10">
            {philanthropyNjt.galleryImages.map((img, i) => (
              <div
                key={i}
                className="h-24 bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

          <a
            href={philanthropyNjt.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white tracking-[0.2em] text-xs uppercase border border-white/40 px-8 py-4 hover:bg-white hover:text-[#384959] transition-all duration-300 self-start"
          >
            {philanthropyNjt.cta.label}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PARTNERSHIPS — Full-bleed image with centered text overlay
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${philanthropyPartnerships.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-[#384959]/80" />

        <div className="relative z-10 text-center px-8 max-w-2xl mx-auto py-24">
          <p className="text-[#BFAF8A] tracking-[0.3em] text-xs uppercase mb-5" style={PF}>
            {philanthropyPartnerships.eyebrow}
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8" style={PF}>
            {philanthropyPartnerships.headline}
          </h2>
          <p className="text-white/65 text-base leading-relaxed font-light mb-10">
            {philanthropyPartnerships.body}
          </p>
          <a
            href={philanthropyPartnerships.contact.href}
            className="group inline-flex items-center gap-3 text-white tracking-[0.2em] text-xs uppercase border border-[#BFAF8A] px-10 py-4 hover:bg-[#BFAF8A] hover:text-white transition-all duration-300"
          >
            {philanthropyPartnerships.contact.label}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FUNDRAISE — Two-column: text left, large image right
      ══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 min-h-[540px]">
        {/* Text panel — warm stone */}
        <div className="bg-[#F0EDE8] flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyFundraise.eyebrow}
          </p>
          <h2 className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8" style={PF}>
            {philanthropyFundraise.headline}
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed font-light mb-10 max-w-md">
            {philanthropyFundraise.body}
          </p>
          <a
            href={philanthropyFundraise.cta.href}
            className="group inline-flex items-center gap-3 text-[#9E8661] tracking-[0.2em] text-xs uppercase border border-[#9E8661] px-8 py-4 hover:bg-[#9E8661] hover:text-white transition-all duration-300 self-start"
          >
            {philanthropyFundraise.cta.label}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Full-height image */}
        <div
          className="relative min-h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${philanthropyFundraise.imageUrl})` }}
        >
          {/* Gold corner accent */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#BFAF8A]" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#BFAF8A]" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA — Full-screen cinematic close
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${philanthropyCta.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Large decorative watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center text-white/[0.03] text-[22vw] font-light select-none pointer-events-none"
          style={PF}
        >
          GIVE
        </div>

        <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
          <p className="text-[#BFAF8A] tracking-[0.35em] text-xs uppercase mb-6" style={PF}>
            {philanthropyCta.eyebrow}
          </p>
          <h2
            className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-10"
            style={PF}
          >
            {philanthropyCta.headline.split("\n").map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </h2>
          <p className="text-white/60 text-lg font-light italic mb-12">
            {philanthropyCta.subheadline}
          </p>
          <a
            href={philanthropyCta.cta.href}
            className="group inline-flex items-center gap-4 text-white tracking-[0.25em] text-sm uppercase border border-white/50 px-12 py-5 hover:bg-white hover:text-[#384959] transition-all duration-400"
          >
            {philanthropyCta.cta.label}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#1E2B38] text-white">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-white/40 text-xs leading-relaxed font-light tracking-wide mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {footer.social.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-white/35 hover:text-[#BFAF8A] text-[10px] tracking-widest uppercase transition-colors duration-200">
                  {s.platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#BFAF8A] text-[10px] tracking-[0.2em] uppercase mb-5" style={PF}>Explore</h4>
            <ul className="space-y-3">
              {footer.explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/45 hover:text-white text-xs tracking-wide transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#BFAF8A] text-[10px] tracking-[0.2em] uppercase mb-5" style={PF}>Company</h4>
            <ul className="space-y-3">
              {footer.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/45 hover:text-white text-xs tracking-wide transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#BFAF8A] text-[10px] tracking-[0.2em] uppercase mb-5" style={PF}>Contact</h4>
            <p className="text-white/45 text-xs leading-loose font-light">
              {footer.contact.phone}<br />
              {footer.contact.email}<br />
              <span className="text-white/25">{footer.contact.virtuoso}</span>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[10px] tracking-wide">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="text-white/25 hover:text-white/50 text-[10px] tracking-wide transition-colors duration-200">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
