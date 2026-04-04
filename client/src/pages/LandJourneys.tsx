/**
 * Land Journeys Page
 *
 * Design Philosophy: Luxury editorial. cinematic hero, generous whitespace,
 * Playfair Display headings, gold (#bfaf8a) accents, BTA blue (#384959) panels.
 * Clean asymmetric layouts inspired by Virtuoso and top luxury travel agencies.
 *
 * Content is managed entirely in: client/src/content/landJourneys.ts
 */

import {
  landJourneysHero,
  landJourneysIntro,
  landJourneysCategories,
  landJourneysProcess,
  landJourneysExperiences,
  landJourneysFeaturedJourney,
  landJourneysCta,
} from "@/content/landJourneys";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "wouter";

// ─── Shared footer import ───────────────────────────────────────────────────
import { footer } from "@/content/homepage";

export default function LandJourneys() {
  // Parallax ref for hero
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2F2F2F] font-serif">
      {/* ── Navigation ─────────────────────────────────────────────────── */}

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${landJourneysHero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Eyebrow: white on photo. Champagne Gold only on plain backgrounds */}
          <p
            className="tracking-[0.3em] text-sm uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {landJourneysHero.eyebrow}
          </p>

          {/* H1: Instrument Serif ALL CAPS white on hero photo */}
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.05] mb-6 max-w-3xl"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, letterSpacing: "0.04em" }}
          >
            {landJourneysHero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            {landJourneysHero.subheadline}
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 flex items-center gap-3 text-white/60">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── Intro / Who We Are ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Eyebrow: Cormorant Garamond italic subtitle */}
            <p
              className="text-[#bfaf8a] text-xl italic mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysIntro.eyebrow}
            </p>
            {/* H1-style section title: Instrument Serif, uppercase */}
            <h2
              className="text-[#384959] text-4xl md:text-5xl leading-tight mb-8 uppercase tracking-wide"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysIntro.headline}
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              {landJourneysIntro.body}
            </p>
            <Link href={landJourneysIntro.cta.href}>
              <button className="group flex items-center gap-3 text-[#bfaf8a] tracking-[0.2em] text-sm uppercase border border-[#bfaf8a] px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-all duration-300">
                {landJourneysIntro.cta.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Decorative image block */}
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[480px] object-cover"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format&fit=crop)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold accent bar */}
            <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#bfaf8a]" />
          </div>
        </div>
      </section>

      {/* ── Journey Categories ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Explore by Style
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where Will You Go?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landJourneysCategories.map((cat, i) => (
              <Link key={i} href={cat.href}>
                <div className="group relative overflow-hidden cursor-pointer h-[420px]">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cat.imageUrl})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-white text-xl font-light mb-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 font-light">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#BFAF8A] text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#384959]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            {/* Eyebrow: Cormorant Garamond italic subtitle */}
            <p
              className="text-[#BFAF8A] text-xl italic mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysProcess.eyebrow}
            </p>
            {/* H1-style section title: Instrument Serif, uppercase */}
            <h2
              className="text-white text-4xl md:text-5xl uppercase tracking-wide"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysProcess.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {landJourneysProcess.steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Step number */}
                <p
                  className="text-[#BFAF8A]/30 text-6xl font-light mb-4 leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {step.number}
                </p>
                {/* Divider */}
                <div className="w-8 h-px bg-[#BFAF8A] mb-6" />
                <h3
                  className="text-white text-xl font-light mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Journey ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="w-full h-[520px]"
              style={{
                backgroundImage: `url(${landJourneysFeaturedJourney.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold corner accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#bfaf8a]" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#bfaf8a]" />
          </div>

          {/* Content */}
          <div>
            {/* Eyebrow: Cormorant Garamond italic subtitle */}
            <p
              className="text-[#bfaf8a] text-xl italic mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysFeaturedJourney.eyebrow}
            </p>
            {/* H1-style section title: Instrument Serif, uppercase */}
            <h2
              className="text-[#384959] text-4xl md:text-5xl leading-tight mb-6 uppercase tracking-wide"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysFeaturedJourney.headline}
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              {landJourneysFeaturedJourney.description}
            </p>

            {/* Journey details */}
            <div className="grid grid-cols-2 gap-6 mb-10 border-t border-b border-[#edeae4] py-8">
              {landJourneysFeaturedJourney.details.map((d, i) => (
                <div key={i}>
                  <p className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-1">
                    {d.label}
                  </p>
                  <p
                    className="text-[#384959] text-lg font-light"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {d.value}
                  </p>
                </div>
              ))}
            </div>

            <Link href={landJourneysFeaturedJourney.cta.href}>
              <button className="group flex items-center gap-3 bg-[#384959] text-white tracking-[0.2em] text-sm uppercase px-10 py-4 hover:bg-[#384959] transition-colors duration-300">
                {landJourneysFeaturedJourney.cta.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            {/* Eyebrow: Cormorant Garamond italic subtitle */}
            <p
              className="text-[#bfaf8a] text-xl italic mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysExperiences.eyebrow}
            </p>
            {/* H1-style section title: Instrument Serif, uppercase */}
            <h2
              className="text-[#384959] text-4xl md:text-5xl leading-tight mb-8 uppercase tracking-wide"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}
            >
              {landJourneysExperiences.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {landJourneysExperiences.items.map((item, i) => (
              <div key={i} className="group">
                <div className="w-8 h-px bg-[#bfaf8a] mb-6" />
                <h3
                  className="text-[#384959] text-xl font-light mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#2f2f2f] text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `url(${landJourneysCta.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#384959]/75" />
        <div className="relative z-10 text-center px-8">
          <p
            className="text-[#BFAF8A] tracking-[0.3em] text-sm uppercase mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Land Journeys
          </p>
          <h2
            className="text-white text-5xl md:text-6xl font-light mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {landJourneysCta.headline}
          </h2>
          <p className="text-white/70 text-xl font-light mb-12 max-w-xl mx-auto">
            {landJourneysCta.subheadline}
          </p>
          <Link href={landJourneysCta.cta.href}>
            <button className="group inline-flex items-center gap-3 border border-white/60 text-white tracking-[0.2em] text-sm uppercase px-12 py-5 hover:bg-white hover:text-[#384959] transition-all duration-300">
              {landJourneysCta.cta.label}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#384959] text-white/70 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed font-light">
                Creating memories one destination at a time.
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Explore</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.explore.map((l: {label: string; href: string}, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Company</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.company.map((l: {label: string; href: string}, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Contact</p>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a href={`tel:${footer.contact.phone}`} className="hover:text-[#BFAF8A] transition-colors">
                    {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${footer.contact.email}`} className="hover:text-[#BFAF8A] transition-colors">
                    {footer.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>{footer.copyright}</p>
            <div className="flex gap-6">
              {footer.legal.map((l: {label: string; href: string}, i: number) => (
                <Link key={i} href={l.href} className="hover:text-[#BFAF8A] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
