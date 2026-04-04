/**
 * Advisor Profile Page. Julie Rose
 *
 * HOW TO DUPLICATE FOR A NEW ADVISOR:
 *   1. Copy this file to client/src/pages/advisors/[AdvisorName].tsx
 *   2. Change the import below to point to the new advisor's content file
 *   3. Add a route in App.tsx: <Route path="/advisors/[slug]" component={NewAdvisor} />
 *   4. Done. all content comes from the data file, no JSX changes needed
 */

import React, { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { advisor } from "@/content/advisors/julie-rose";

// ─── Icon helpers ─────────────────────────────────────────────────────────────
function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-[#bfaf8a]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PillarIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactElement> = {
    compass: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0v2m0 18v-2m10-10h-2M4 12H2m15.07-7.07-1.41 1.41M7.34 16.66l-1.41 1.41M16.66 16.66l1.41 1.41M7.34 7.34 5.93 5.93" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    heart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    star: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  };
  return icons[icon] ?? icons.compass;
}

// ─── SECTION 1: Hero ──────────────────────────────────────────────────────────
function HeroSection() {
  const h = advisor.hero;
  return (
    <>
    {/* ── MOBILE hero: cream bg, text top, photo bottom ── */}
    <section className="block lg:hidden bg-[#faf9f6]">
      {/* Text block */}
      <div className="px-6 pt-10 pb-8">
        {/* H1: Instrument Serif ALL CAPS on cream background */}
        <h1 className="text-[#2F2F2F] text-4xl uppercase leading-none mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, letterSpacing: "0.04em" , textTransform: "uppercase" }}>
          {h.name}
        </h1>
        <p className="font-smallcaps text-[#bfaf8a] text-[10px] tracking-[0.25em] uppercase mb-3">
          {h.title}
        </p>
        <p
          className="text-[#2F2F2F]/65 text-base italic max-w-xs mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {h.tagline}
        </p>
        <div className="flex flex-col gap-3 mb-4">
          <a
            href={h.ctaPrimary.href}
            className="inline-block bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-7 py-3 text-center hover:bg-[#bfaf8a] transition-colors"
          >
            {h.ctaPrimary.label}
          </a>
          <a
            href={h.ctaSecondary.href}
            className="inline-block border border-[#bfaf8a] text-[#2F2F2F] font-smallcaps text-xs tracking-[0.2em] uppercase px-7 py-3 text-center hover:bg-[#bfaf8a]/10 transition-colors"
          >
            {h.ctaSecondary.label}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {h.badges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 text-[#2F2F2F]/50 text-[10px] font-smallcaps tracking-[0.15em] uppercase">
              <svg className="w-3 h-3 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
      {/* Photo fills below */}
      <div className="h-64 overflow-hidden">
        <img src={h.heroImage} alt={h.name} className="w-full h-full object-cover object-top" />
      </div>
    </section>

    {/* ── DESKTOP hero: full-width image with text overlay ── */}
    <section className="hidden lg:flex relative h-[42vh] min-h-[320px] max-h-[480px] items-end pb-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={h.heroImage} alt={h.name} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/85 via-[#384959]/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-14">
        {/* H1: Instrument Serif ALL CAPS white on hero photo */}
        <h1 className="text-white text-6xl lg:text-7xl uppercase leading-none mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, letterSpacing: "0.04em" , textTransform: "uppercase" }}>
          {h.name}
        </h1>
        {/* Title label: white on photo. Champagne Gold only on plain backgrounds */}
        <p className="text-white/75 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}>
          {h.title}
        </p>
        <p className="text-white/75 text-lg italic max-w-xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
          {h.tagline}
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href={h.ctaPrimary.href}
            className="inline-block bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-7 py-3 hover:bg-[#bfaf8a] transition-colors"
          >
            {h.ctaPrimary.label}
          </a>
          <a
            href={h.ctaSecondary.href}
            className="inline-block border border-white/50 text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-7 py-3 hover:border-white hover:bg-white/10 transition-colors"
          >
            {h.ctaSecondary.label}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {h.badges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 text-white/50 text-xs font-smallcaps tracking-[0.15em] uppercase">
              <svg className="w-3 h-3 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

// ─── SECTION 2: Meet ──────────────────────────────────────────────────────────
function MeetSection() {
  const m = advisor.meet;
  return (
    <section className="bg-[#faf9f6] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 grid lg:grid-cols-2 gap-16 items-center">
        {/* Photos. overlapping layout */}
        <div className="relative h-[320px] md:h-[440px] lg:h-[620px]">
          {/* Main large photo */}
          <div className="absolute left-0 top-0 w-[75%] h-[85%] overflow-hidden shadow-2xl">
            <img src={m.photoMain} alt={m.eyebrow} className="w-full h-full object-cover object-top" />
          </div>
          {/* Accent smaller photo. overlapping bottom-right */}
          <div className="absolute right-0 bottom-0 w-[52%] h-[55%] overflow-hidden shadow-xl border-4 border-[#faf9f6]">
            <img src={m.photoAccent} alt="Travel moment" className="w-full h-full object-cover" />
          </div>
          {/* Gold accent line */}
          <div className="absolute left-[-16px] top-12 w-1 h-32 bg-[#bfaf8a]" />
        </div>

        {/* Text */}
        <div>
          {/* Eyebrow */}
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {m.eyebrow}
          </p>
          {/* Heading */}
          <h2
            className="text-[#2F2F2F] text-4xl md:text-5xl leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
          >
            {m.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i < m.heading.split("\n").length - 1 && <br />}</span>
            ))}
          </h2>

          {/* Bio paragraphs */}
          <div className="space-y-5 mb-8">
            {m.bio.map((para, i) => (
              <p
                key={i}
                className="text-[#2F2F2F]/70 text-lg leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className="border-l-2 border-[#bfaf8a] pl-6 mb-10 text-[#2F2F2F]/60 text-xl italic leading-relaxed"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {m.quote}
          </blockquote>

          {/* CTA */}
          <a
            href={m.cta.href}
            className="inline-block bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#bfaf8a] transition-colors"
          >
            {m.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: Stats Bar ─────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-[#384959] py-14">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">
          {advisor.stats.map((stat, i) => (
            <div key={i} className="text-center lg:px-8">
              <div
                className="text-[#bfaf8a] text-5xl md:text-6xl font-light mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="font-smallcaps text-white/60 text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4: Curated Hotels ────────────────────────────────────────────────
function HotelsSection() {
  const h = advisor.hotels;
  return (
    <section className="bg-[#edeae4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {h.eyebrow}
          </p>
          <h2
            className="text-[#2F2F2F] font-heading text-4xl md:text-5xl font-light leading-tight mb-4 font-display"
          >
            {h.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i < h.heading.split("\n").length - 1 && <br />}</span>
            ))}
          </h2>
          <p
            className="text-[#2F2F2F]/60 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {h.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {h.items.map((hotel, i) => (
            <div key={i} className="bg-white shadow-lg overflow-hidden group">
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.18em] uppercase px-3 py-1.5">
                  {hotel.badge}
                </span>
              </div>
              {/* Content */}
              <div className="p-7">
                <p className="font-smallcaps text-[#bfaf8a] text-xs tracking-[0.18em] uppercase mb-2">
                  {hotel.location}
                </p>
                {/* Hotel name with vertical gold line */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-0.5 bg-[#bfaf8a] self-stretch mt-1 flex-shrink-0" style={{ minHeight: '2rem' }} />
                  <h3
            className="text-[#2F2F2F] text-2xl font-light leading-snug font-display"
                  >
                    {hotel.name}
                  </h3>
                </div>
                <p
                  className="text-[#2F2F2F]/60 text-base italic mb-4 leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {hotel.quote}
                </p>
                {/* Horizontal divider */}
                <div className="border-t border-[#bfaf8a]/30 mb-4" />
                {/* Perks title */}
                <p className="font-smallcaps text-[#bfaf8a] text-[10px] tracking-[0.2em] uppercase mb-3">
                  Exclusive Perks When You Book Through Julie
                </p>
                {/* Perks with check icons */}
                <ul className="space-y-2">
                  {hotel.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-[#bfaf8a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span
                        className="text-[#2F2F2F]/60 text-sm leading-snug"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5: Specialties ───────────────────────────────────────────────────
function SpecialtiesSection() {
  const s = advisor.specialties;
  return (
    <section id="specialties" className="bg-[#2F2F2F] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {s.eyebrow}
          </p>
          <h2
            className="text-white font-heading text-4xl md:text-5xl font-light font-display"
          >
            {s.heading}
          </h2>
        </div>

        {/* 3×2 Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {s.items.map((item, i) => (
            <div key={i} className="relative h-52 md:h-72 overflow-hidden group cursor-pointer">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Default overlay. lighter */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
              {/* Default state: label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                <p
                  className="text-white text-base italic"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.label}
                </p>
              </div>
              {/* Hover state: gold line + italic title + description */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-0.5 bg-[#bfaf8a] mb-3" />
                <p
                  className="text-white text-lg italic mb-2 leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 6: Philosophy ────────────────────────────────────────────────────
function PhilosophySection() {
  const p = advisor.philosophy;
  return (
    <section className="bg-[#faf9f6] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        {/* Header */}
        <div className="text-center mb-6">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {p.eyebrow}
          </p>
          <h2
            className="text-[#2F2F2F] font-heading text-4xl md:text-5xl font-light mb-8 font-display"
          >
            {p.heading}
          </h2>
        </div>

        {/* Central quote. gold left border, no box */}
        <div className="max-w-3xl mx-auto mb-16 pl-8 border-l-4 border-[#bfaf8a]">
          <p
            className="text-[#2F2F2F] text-2xl md:text-3xl italic leading-relaxed"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {p.quote}
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {p.pillars.map((pillar, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#bfaf8a]/15 flex items-center justify-center mx-auto mb-5 text-[#bfaf8a]">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h4
                className="text-[#2F2F2F] text-lg font-medium mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {pillar.title}
              </h4>
              <p
                className="text-[#2F2F2F]/60 text-base leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7: Featured Experiences ─────────────────────────────────────────
function ExperiencesSection() {
  const e = advisor.experiences;
  return (
    <section className="bg-[#384959] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {e.eyebrow}
          </p>
          <h2
            className="text-white font-heading text-4xl md:text-5xl font-light font-display"
          >
            {e.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i < e.heading.split("\n").length - 1 && <br />}</span>
            ))}
          </h2>
        </div>

        {/* Trip Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {e.items.map((trip, i) => (
            <div key={i} className="group overflow-hidden">
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 to-transparent" />
                {/* Duration + Region badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.15em] uppercase px-3 py-1">
                    {trip.duration}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white font-smallcaps text-xs tracking-[0.15em] uppercase px-3 py-1">
                    {trip.region}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="bg-[#384959] p-7">
                <h3
            className="text-white text-xl font-light mb-3 leading-snug font-display"
                >
                  {trip.title}
                </h3>
                <p
                  className="text-white/60 text-base leading-relaxed mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {trip.description}
                </p>
                <a
                  href={trip.href}
                  className="inline-flex items-center gap-2 font-smallcaps text-[#bfaf8a] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 8: Why Work With ─────────────────────────────────────────────────
function WhyWorkSection() {
  const w = advisor.whyWork;
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
        {/* Photo. full height left column */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-auto overflow-hidden">
          <img src={w.image} alt="Why work with Julie" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
        </div>

        {/* Content */}
        <div className="py-24 px-8 lg:px-14 xl:px-20 flex flex-col justify-center">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {w.eyebrow}
          </p>
          <h2
            className="text-[#2F2F2F] font-heading text-4xl md:text-5xl font-light leading-tight mb-10 font-display"
          >
            {w.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i < w.heading.split("\n").length - 1 && <br />}</span>
            ))}
          </h2>

          {/* Benefits list */}
          <div className="space-y-7 mb-10">
            {w.benefits.map((benefit, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#bfaf8a] font-smallcaps text-xs">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h4
                    className="text-[#2F2F2F] text-lg font-medium mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className="text-[#2F2F2F]/60 text-base leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {benefit.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={w.cta.href}
            className="inline-block self-start bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#bfaf8a] transition-colors"
          >
            {w.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 9: Testimonials ──────────────────────────────────────────────────
function TestimonialsSection() {
  const t = advisor.testimonials;
  const [active, setActive] = useState(0);
  const current = t.items[active];

  return (
    <section className="bg-[#384959] py-24 lg:py-32">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        {/* Eyebrow */}
        <p
          className="text-[#bfaf8a] text-2xl italic mb-3"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          {t.eyebrow}
        </p>
        <h2
            className="text-white font-heading text-4xl md:text-5xl font-light leading-tight mb-14 font-display"
        >
          {t.heading.split("\n").map((line, i) => (
            <span key={i}>{line}{i < t.heading.split("\n").length - 1 && <br />}</span>
          ))}
        </h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < current.rating} />
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="text-white/80 text-xl md:text-2xl italic leading-relaxed mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          "{current.quote}"
        </blockquote>

        {/* Author */}
        <div className="mb-10">
          <p className="font-smallcaps text-[#bfaf8a] text-sm tracking-[0.2em] uppercase">
            {current.author}
          </p>
          <p
            className="text-white/40 text-sm mt-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {current.trip}
          </p>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setActive((active - 1 + t.items.length) % t.items.length)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Dots */}
          <div className="flex gap-2">
            {t.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-[#bfaf8a]" : "bg-white/20"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((active + 1) % t.items.length)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 10: Contact / Booking ────────────────────────────────────────────
function ContactSection() {
  const c = advisor.contact;
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", destination: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to tRPC mutation for real form submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#edeae4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 grid lg:grid-cols-2 gap-16">
        {/* Left. Contact Form */}
        <div>
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="text-[#2F2F2F] font-heading text-4xl md:text-5xl font-light leading-tight mb-4 font-display"
          >
            {c.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i < c.heading.split("\n").length - 1 && <br />}</span>
            ))}
          </h2>
          <p
            className="text-[#2F2F2F]/60 text-lg mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {c.subheading}
          </p>

          {submitted ? (
            <div className="bg-[#bfaf8a]/10 border border-[#bfaf8a]/30 p-8 text-center">
              <p
                className="text-[#2F2F2F] text-xl italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Thank you! Julie will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={c.fields.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                />
                <input
                  type="email"
                  placeholder={c.fields.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                />
              </div>
              <input
                type="tel"
                placeholder={c.fields.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              />
              <input
                type="text"
                placeholder={c.fields.destinationPlaceholder}
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              />
              <textarea
                placeholder={c.fields.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors resize-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              />
              <button
                type="submit"
                className="w-full bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#bfaf8a] transition-colors"
              >
                {c.fields.submitLabel}
              </button>
            </form>
          )}
        </div>

        {/* Right. Club CTA */}
        <div className="bg-[#384959] p-10 lg:p-14 flex flex-col justify-center">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            {c.club.eyebrow}
          </p>
          <h3
            className="text-white font-heading text-3xl md:text-4xl font-light leading-tight mb-6 font-display"
          >
            {c.club.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i < c.club.heading.split("\n").length - 1 && <br />}</span>
            ))}
          </h3>
          <p
            className="text-white/60 text-lg leading-relaxed mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {c.club.body}
          </p>
          <a
            href={c.club.cta.href}
            className="inline-block self-start border border-[#bfaf8a] text-[#bfaf8a] font-smallcaps text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-colors"
          >
            {c.club.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 11: Closing Banner ───────────────────────────────────────────────
function ClosingBanner() {
  const cb = advisor.closingBanner;
  return (
    <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
      <img src={cb.image} alt="Closing banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#384959]/65" />
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        <p
          className="text-white text-2xl md:text-4xl italic leading-relaxed mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {cb.quote}
        </p>
        <p className="font-smallcaps text-[#bfaf8a] text-xs tracking-[0.25em] uppercase mb-8">
          {cb.credit}
        </p>
        <a
          href={cb.cta.href}
          className="inline-block border border-white/50 text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 hover:border-white transition-colors"
        >
          {cb.cta.label}
        </a>
      </div>
    </section>
  );
}

// ─── PAGE ASSEMBLY ────────────────────────────────────────────────────────────
export default function JulieRose() {
  return (
    <PageLayout hideCta>
      <HeroSection />
      <MeetSection />
      <StatsBar />
      <HotelsSection />
      <SpecialtiesSection />
      <PhilosophySection />
      <ExperiencesSection />
      <WhyWorkSection />
      <TestimonialsSection />
      <ContactSection />
      <ClosingBanner />
    </PageLayout>
  );
}
