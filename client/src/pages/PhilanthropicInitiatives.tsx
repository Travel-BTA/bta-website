/**
 * Philanthropic Initiatives Page
 *
 * Design Philosophy: Luxury editorial — cinematic hero, generous whitespace,
 * Playfair Display headings, Champagne Gold (#BFAF8A / #9E8661) accents,
 * Aegean Blue (#384959) panels. Clean asymmetric layouts consistent with the
 * Land Journeys page and overall BTA brand aesthetic.
 *
 * Content is managed entirely in: client/src/content/philanthropy.ts
 *
 * NOTE: Pack for a Purpose has been intentionally removed.
 *       Not Just Tourists (NJT) is the featured suitcase-drive partner.
 */

import NavBar from "@/components/NavBar";
import { footer } from "@/content/homepage";
import {
  philanthropyAffiliations,
  philanthropyBeneficiaries,
  philanthropyCta,
  philanthropyFundraise,
  philanthropyHero,
  philanthropyIntro,
  philanthropyNjt,
  philanthropyPartnerships,
  philanthropyPillars,
} from "@/content/philanthropy";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

// ─── Shared serif style shorthand ─────────────────────────────────────────────
const PLAYFAIR = { fontFamily: "'Playfair Display', Georgia, serif" };

export default function PhilanthropicInitiatives() {
  // Parallax ref for hero background
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2F2F2F] font-serif">
      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <NavBar />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Cinematic full-bleed with parallax and gradient overlay
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {/* Parallax background image */}
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${philanthropyHero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        {/* Multi-stop gradient for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Eyebrow label */}
          <p
            className="text-[#BFAF8A] tracking-[0.3em] text-sm uppercase mb-4"
            style={PLAYFAIR}
          >
            {philanthropyHero.eyebrow}
          </p>

          {/* Main headline */}
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-5 max-w-3xl"
            style={PLAYFAIR}
          >
            {philanthropyHero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Churchill quote */}
          <p className="text-white/80 text-lg md:text-xl font-light italic max-w-xl leading-relaxed mb-1">
            {philanthropyHero.subheadline}
          </p>
          <p className="text-[#BFAF8A] text-sm tracking-widest font-light">
            {philanthropyHero.attribution}
          </p>

          {/* Scroll cue */}
          <div className="mt-12 flex items-center gap-3 text-white/50">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INTRO — Two-column: text left, editorial image right
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
              {philanthropyIntro.eyebrow}
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8"
              style={PLAYFAIR}
            >
              {philanthropyIntro.headline}
            </h2>
            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6 font-light">
              {philanthropyIntro.body1}
            </p>
            <p className="text-[#5A5A5A] text-base leading-relaxed font-light">
              {philanthropyIntro.body2}
            </p>
          </div>

          {/* Image column with gold corner accents */}
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[500px]"
              style={{
                backgroundImage: `url(${philanthropyIntro.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold corner accents — consistent with LandJourneys featured section */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#9E8661]" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#9E8661]" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FIVE PILLARS — Aegean Blue panel with intro + pillar grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#384959]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
              {philanthropyPillars.eyebrow}
            </p>
            <h2
              className="text-white text-4xl md:text-5xl font-light mb-8"
              style={PLAYFAIR}
            >
              {philanthropyPillars.headline}
            </h2>
            <p className="text-white/65 text-base leading-relaxed font-light">
              {philanthropyPillars.intro}
            </p>
          </div>

          {/* Pillars grid — 5 cards, wrap gracefully on mobile */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {philanthropyPillars.pillars.map((pillar, i) => (
              <div
                key={i}
                className="border border-white/10 p-8 hover:border-[#BFAF8A]/40 transition-colors duration-300"
              >
                {/* Step number as decorative accent */}
                <p
                  className="text-[#BFAF8A]/25 text-5xl font-light mb-3 leading-none"
                  style={PLAYFAIR}
                >
                  0{i + 1}
                </p>
                {/* Gold divider */}
                <div className="w-8 h-px bg-[#BFAF8A] mb-5" />
                <h3
                  className="text-white text-xl font-light mb-4 tracking-wide"
                  style={PLAYFAIR}
                >
                  {pillar.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2025 BENEFICIARIES — Warm Stone background, centered layout
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F0EDE8]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
              {philanthropyBeneficiaries.eyebrow}
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light mb-8"
              style={PLAYFAIR}
            >
              {philanthropyBeneficiaries.headline}
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed font-light">
              {philanthropyBeneficiaries.body}
            </p>
          </div>

          {/* Beneficiary cards — horizontal scrollable on mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
            {philanthropyBeneficiaries.organizations.map((org, i) => (
              <div
                key={i}
                className="bg-white p-6 flex flex-col items-center text-center border border-[#EDEAE4] hover:border-[#BFAF8A] transition-colors duration-300"
              >
                {/* Logo placeholder — replace logoUrl in content file when available */}
                {org.logoUrl ? (
                  <img
                    src={org.logoUrl}
                    alt={org.name}
                    className="h-14 w-auto object-contain mb-4"
                  />
                ) : (
                  <div className="h-14 w-full flex items-center justify-center mb-4">
                    <div className="w-10 h-px bg-[#BFAF8A]" />
                  </div>
                )}
                <h3
                  className="text-[#384959] text-sm font-light leading-snug mb-3 tracking-wide"
                  style={PLAYFAIR}
                >
                  {org.name}
                </h3>
                <p className="text-[#5A5A5A] text-xs leading-relaxed font-light">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NOT JUST TOURISTS — Two-column editorial: image left, text right
          NOTE: Pack for a Purpose intentionally removed.
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative hidden lg:block order-1">
            <div
              className="w-full h-[480px]"
              style={{
                backgroundImage: `url(${philanthropyNjt.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold accent bar — bottom left */}
            <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#9E8661]" />
          </div>

          {/* Text column */}
          <div className="order-2">
            <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
              {philanthropyNjt.eyebrow}
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-3"
              style={PLAYFAIR}
            >
              {philanthropyNjt.headline}
            </h2>
            <p
              className="text-[#9E8661] text-base font-light italic mb-8"
              style={PLAYFAIR}
            >
              {philanthropyNjt.subheadline}
            </p>
            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6 font-light">
              {philanthropyNjt.body1}
            </p>
            <p className="text-[#5A5A5A] text-base leading-relaxed mb-10 font-light">
              {philanthropyNjt.body2}
            </p>
            <a
              href={philanthropyNjt.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[#9E8661] tracking-[0.2em] text-sm uppercase border border-[#9E8661] px-8 py-4 hover:bg-[#9E8661] hover:text-white transition-all duration-300"
            >
              {philanthropyNjt.cta.label}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COMMUNITY PARTNERSHIPS — Warm Stone background, two-column layout
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F0EDE8]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Intro + requirements */}
            <div>
              <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
                {philanthropyPartnerships.eyebrow}
              </p>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8"
                style={PLAYFAIR}
              >
                {philanthropyPartnerships.headline}
              </h2>
              <p className="text-[#5A5A5A] text-lg leading-relaxed mb-8 font-light">
                {philanthropyPartnerships.body}
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6 font-light">
                {philanthropyPartnerships.requirements.intro}
              </p>
            </div>

            {/* Right: Requirements card */}
            <div className="bg-white border border-[#EDEAE4] p-10">
              <h3
                className="text-[#384959] text-xl font-light mb-6 tracking-wide"
                style={PLAYFAIR}
              >
                {philanthropyPartnerships.requirements.label}
              </h3>
              {/* Requirement items with gold bullet */}
              <ul className="space-y-4 mb-8">
                {philanthropyPartnerships.requirements.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BFAF8A] mt-2 flex-shrink-0" />
                    <p className="text-[#5A5A5A] text-sm leading-relaxed font-light">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-[#5A5A5A] text-sm leading-relaxed font-light mb-8">
                {philanthropyPartnerships.requirements.closing}
              </p>
              <a
                href={philanthropyPartnerships.requirements.contact.href}
                className="group inline-flex items-center gap-3 text-[#9E8661] tracking-[0.2em] text-sm uppercase border border-[#9E8661] px-8 py-4 hover:bg-[#9E8661] hover:text-white transition-all duration-300"
              >
                <Mail size={14} />
                {philanthropyPartnerships.requirements.contact.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FUNDRAISE WITH BTA — Aegean Blue panel, two-column
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#384959]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div>
              <p className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
                {philanthropyFundraise.eyebrow}
              </p>
              <h2
                className="text-white text-4xl md:text-5xl font-light leading-tight mb-8"
                style={PLAYFAIR}
              >
                {philanthropyFundraise.headline}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6 font-light">
                {philanthropyFundraise.body1}
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-10 font-light">
                {philanthropyFundraise.body2}
              </p>
              <a
                href={philanthropyFundraise.cta.href}
                className="group inline-flex items-center gap-3 text-white tracking-[0.2em] text-sm uppercase border border-white/40 px-8 py-4 hover:bg-white hover:text-[#384959] transition-all duration-300"
              >
                {philanthropyFundraise.cta.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image column */}
            <div className="relative hidden lg:block">
              <div
                className="w-full h-[460px]"
                style={{
                  backgroundImage: `url(${philanthropyFundraise.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Gold corner accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#BFAF8A]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AFFILIATIONS — White background, centered logo strip
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto text-center">
          <p className="text-[#9E8661] tracking-[0.25em] text-xs uppercase mb-4" style={PLAYFAIR}>
            {philanthropyAffiliations.eyebrow}
          </p>
          <h2
            className="text-[#384959] text-3xl md:text-4xl font-light mb-12"
            style={PLAYFAIR}
          >
            {philanthropyAffiliations.headline}
          </h2>

          {/* Logo row — renders name as placeholder when imageUrl is empty */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {philanthropyAffiliations.logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                {logo.imageUrl ? (
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                ) : (
                  // Text fallback until official logo CDN URLs are added
                  <span
                    className="text-[#384959]/50 text-xs tracking-[0.2em] uppercase font-light hover:text-[#384959] transition-colors duration-300"
                    style={PLAYFAIR}
                  >
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA — Full-bleed cinematic image with overlay
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 scale-105"
          style={{
            backgroundImage: `url(${philanthropyCta.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
          <p className="text-[#BFAF8A] tracking-[0.3em] text-xs uppercase mb-4" style={PLAYFAIR}>
            {philanthropyCta.eyebrow}
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-light leading-tight mb-8"
            style={PLAYFAIR}
          >
            {philanthropyCta.headline}
          </h2>
          <p className="text-white/70 text-base font-light italic mb-10">
            {philanthropyCta.subheadline}
          </p>
          <a
            href={philanthropyCta.cta.href}
            className="group inline-flex items-center gap-3 text-white tracking-[0.2em] text-sm uppercase border border-white/50 px-10 py-4 hover:bg-white hover:text-[#384959] transition-all duration-300"
          >
            {philanthropyCta.cta.label}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER — Reused from homepage shared content
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#1E2B38] text-white">
        {/* Main footer grid */}
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-white/50 text-xs leading-relaxed font-light tracking-wide mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {footer.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#BFAF8A] text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  {s.platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="text-[#BFAF8A] text-xs tracking-[0.2em] uppercase mb-5" style={PLAYFAIR}>
              Explore
            </h4>
            <ul className="space-y-3">
              {footer.explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/55 hover:text-white text-xs tracking-wide transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-[#BFAF8A] text-xs tracking-[0.2em] uppercase mb-5" style={PLAYFAIR}>
              Company
            </h4>
            <ul className="space-y-3">
              {footer.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/55 hover:text-white text-xs tracking-wide transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#BFAF8A] text-xs tracking-[0.2em] uppercase mb-5" style={PLAYFAIR}>
              Contact
            </h4>
            <p className="text-white/55 text-xs leading-loose font-light">
              {footer.contact.phone}<br />
              {footer.contact.email}<br />
              <span className="text-white/35">{footer.contact.virtuoso}</span>
            </p>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-white/10 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="text-white/30 hover:text-white/60 text-xs tracking-wide transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
