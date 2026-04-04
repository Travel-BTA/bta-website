/**
 * Philanthropic Initiatives Page. Fixed & Polished
 *
 * Fixes applied:
 *  - Pillars: 2-col mobile / 5-col desktop grid with proper card sizing
 *  - All images replaced with clean, appropriate royalty-free photos
 *  - Consistent section heights across mobile and desktop
 *  - 8 beneficiaries: added Phoenix Symphony, First Tee AZ, CASA OC
 *  - Partnerships section: removed red hands image, replaced with city aerial
 *  - Mobile-first responsive layout throughout
 *
 * Content managed in: client/src/content/philanthropy.ts
 */

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

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current)
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2F2F2F] font-serif">

      {/* ══════════════════════════════════════════════════════════════
          HERO. Full-screen cinematic with parallax
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${philanthropyHero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <p className="text-[#BFAF8A] tracking-[0.35em] text-xs uppercase mb-5" style={PF}>
            {philanthropyHero.eyebrow}
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl leading-[1.0] mb-6 max-w-3xl"
            style={PF}
          >
            {philanthropyHero.headline.split("\n").map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </h1>
          <div className="flex items-start gap-4 mb-2 max-w-xl">
            <div className="w-10 h-px bg-[#BFAF8A] mt-3 flex-shrink-0" />
            <p className="text-white/75 text-lg font-light italic leading-relaxed">
              {philanthropyHero.subheadline}
            </p>
          </div>
          <p className="text-[#BFAF8A] text-xs tracking-widest ml-14 mt-1">
            {philanthropyHero.attribution}
          </p>
          <div className="mt-12 flex items-center gap-3 text-white/40">
            <div className="w-6 h-px bg-white/30" />
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTRO. Text left, 3-image mosaic right
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
              {philanthropyIntro.eyebrow}
            </p>
            <h2 className="text-[#384959] text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
              {philanthropyIntro.headline.split("\n").map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </h2>
            <p className="text-[#5A5A5A] text-lg leading-relaxed font-light mb-8">
              {philanthropyIntro.body}
            </p>
            <div className="w-14 h-px bg-[#BFAF8A]" />
          </div>

          {/* 3-image mosaic. hidden on small screens, shown md+ */}
          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
            <div
              className="row-span-2 bg-cover bg-center"
              style={{ backgroundImage: `url(${philanthropyIntro.images[0]})` }}
            />
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${philanthropyIntro.images[1]})` }}
            />
            <div
              className="bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${philanthropyIntro.images[2]})` }}
            >
              <div className="absolute inset-0 bg-[#9E8661]/15" />
            </div>
          </div>

          {/* Mobile: single image */}
          <div
            className="md:hidden w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${philanthropyIntro.images[0]})` }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PILLARS. Section header + proper card grid (2-col mobile, 5-col desktop)
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#384959] py-20 md:py-28">
        <div className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
              {philanthropyPillars.eyebrow}
            </p>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
              {philanthropyPillars.headline}
            </h2>
          </div>

          {/* Mobile: horizontal scroll carousel. no dead space, no orphaned cards
               Desktop: 5-column full-width flex strip */}

          {/* Mobile scroll strip (hidden lg+) */}
          <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {philanthropyPillars.pillars.map((pillar, i) => (
              <div
                key={i}
                className="relative flex-none w-[72vw] h-[380px] overflow-hidden snap-start"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pillar.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-[#BFAF8A]/40 text-3xl font-light leading-none mb-2" style={PF}>
                    0{i + 1}
                  </p>
                  <div className="w-5 h-px bg-[#BFAF8A] mb-3" />
                  <h3 className="text-white text-xl tracking-wide" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 500 }}>
                    {pillar.name}
                  </h3>
                  <p className="text-white/60 text-[10px] tracking-widest uppercase font-light mt-1 leading-relaxed">
                    {pillar.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots. mobile only */}
          <div className="lg:hidden flex justify-center gap-2 mt-4">
            {philanthropyPillars.pillars.map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#BFAF8A]/40" />
            ))}
          </div>

          {/* Desktop: 5-column full-height strip (hidden below lg) */}
          <div className="hidden lg:flex h-[420px]">
            {philanthropyPillars.pillars.map((pillar, i) => (
              <div
                key={i}
                className="relative flex-1 overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${pillar.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-[#BFAF8A]/40 text-3xl font-light leading-none mb-2" style={PF}>
                    0{i + 1}
                  </p>
                  <div className="w-5 h-px bg-[#BFAF8A] mb-3" />
                  <h3 className="text-white text-lg tracking-wide" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 500 }}>
                    {pillar.name}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/60 text-[10px] tracking-widest uppercase font-light mt-1 transition-all duration-500 leading-relaxed">
                    {pillar.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BENEFICIARIES. 8 orgs in a clean uniform grid
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyBeneficiaries.eyebrow}
          </p>
          <h2 className="text-[#384959] text-3xl md:text-4xl lg:text-5xl mb-6 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
            {philanthropyBeneficiaries.headline}
          </h2>
          <p className="text-[#5A5A5A] text-base font-light max-w-xl mx-auto leading-relaxed">
            {philanthropyBeneficiaries.body}
          </p>
        </div>

        {/* Uniform 2-col mobile / 4-col desktop grid. all same height */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {philanthropyBeneficiaries.organizations.map((org, i) => (
            <div key={i} className="relative overflow-hidden group h-[220px] md:h-[260px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${org.imageUrl})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="w-6 h-px bg-[#BFAF8A] mb-2" />
                <h3 className="text-white text-sm leading-snug" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 500 }}>
                  {org.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOT JUST TOURISTS. Split screen: image left, blue panel right
      ══════════════════════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-[540px]">
        {/* Image */}
        <div
          className="w-full lg:w-1/2 h-72 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${philanthropyNjt.imageUrl})` }}
        />

        {/* Text panel */}
        <div className="w-full lg:w-1/2 bg-[#384959] flex flex-col justify-center px-8 md:px-14 py-16">
          <p className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyNjt.eyebrow}
          </p>
          <h2 className="text-white text-3xl md:text-4xl leading-tight mb-6 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
            {philanthropyNjt.headline}
          </h2>
          <p className="text-white/65 text-base leading-relaxed font-light mb-8 max-w-md">
            {philanthropyNjt.body}
          </p>

          {/* Mini gallery strip */}
          <div className="grid grid-cols-3 gap-2 mb-8">
            {philanthropyNjt.galleryImages.map((img, i) => (
              <div
                key={i}
                className="h-20 bg-cover bg-center opacity-75 hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

          <a
            href={philanthropyNjt.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white tracking-[0.2em] text-xs uppercase border border-white/40 px-7 py-4 hover:bg-white hover:text-[#384959] transition-all duration-300 self-start"
          >
            {philanthropyNjt.cta.label}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PARTNERSHIPS. Full-bleed image overlay (city aerial, no hands)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${philanthropyPartnerships.backgroundImage})` }}
        />
        {/* Aegean blue overlay. clean, no graphic imagery visible */}
        <div className="absolute inset-0 bg-[#384959]/85" />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto py-20">
          <p className="text-[#BFAF8A] tracking-[0.3em] text-xs uppercase mb-5" style={PF}>
            {philanthropyPartnerships.eyebrow}
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
            {philanthropyPartnerships.headline}
          </h2>
          <p className="text-white/65 text-base leading-relaxed font-light mb-10">
            {philanthropyPartnerships.body}
          </p>
          <a
            href={philanthropyPartnerships.contact.href}
            className="group inline-flex items-center gap-3 text-white tracking-[0.2em] text-xs uppercase border border-[#BFAF8A] px-10 py-4 hover:bg-[#BFAF8A] transition-all duration-300"
          >
            {philanthropyPartnerships.contact.label}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FUNDRAISE. Warm stone panel left, image right
      ══════════════════════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Text */}
        <div className="w-full lg:w-1/2 bg-[#F0EDE8] flex flex-col justify-center px-8 md:px-14 py-16">
          <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PF}>
            {philanthropyFundraise.eyebrow}
          </p>
          <h2 className="text-[#384959] text-3xl md:text-4xl leading-tight mb-6 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
            {philanthropyFundraise.headline}
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed font-light mb-10 max-w-md">
            {philanthropyFundraise.body}
          </p>
          <a
            href={philanthropyFundraise.cta.href}
            className="group inline-flex items-center gap-3 text-[#9E8661] tracking-[0.2em] text-xs uppercase border border-[#9E8661] px-7 py-4 hover:bg-[#9E8661] hover:text-white transition-all duration-300 self-start"
          >
            {philanthropyFundraise.cta.label}
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Image */}
        <div
          className="w-full lg:w-1/2 h-72 lg:h-auto bg-cover bg-center relative"
          style={{ backgroundImage: `url(${philanthropyFundraise.imageUrl})` }}
        >
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#BFAF8A]" />
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#BFAF8A]" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA. Cinematic landscape close
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${philanthropyCta.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#BFAF8A] tracking-[0.35em] text-xs uppercase mb-6" style={PF}>
            {philanthropyCta.eyebrow}
          </p>
          <h2
            className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-8"
            style={PF}
          >
            {philanthropyCta.headline.split("\n").map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </h2>
          <p className="text-white/60 text-base font-light italic mb-10">
            {philanthropyCta.subheadline}
          </p>
          <a
            href={philanthropyCta.cta.href}
            className="group inline-flex items-center gap-4 text-white tracking-[0.25em] text-sm uppercase border border-white/50 px-10 py-5 hover:bg-white hover:text-[#384959] transition-all duration-300"
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
        <div className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="inline-block mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-white/40 text-xs leading-relaxed font-light mb-6">{footer.tagline}</p>
            <div className="flex gap-4">
              {footer.social.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-white/35 hover:text-[#BFAF8A] text-[10px] tracking-widest uppercase transition-colors">
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
                  <a href={l.href} className="text-white/45 hover:text-white text-xs tracking-wide transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#BFAF8A] text-[10px] tracking-[0.2em] uppercase mb-5" style={PF}>Company</h4>
            <ul className="space-y-3">
              {footer.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/45 hover:text-white text-xs tracking-wide transition-colors">{l.label}</a>
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
        <div className="border-t border-white/10 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[10px] tracking-wide">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="text-white/25 hover:text-white/50 text-[10px] tracking-wide transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
