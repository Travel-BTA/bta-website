/**
 * PrivateJetCharters.tsx
 *
 * Redesigned Private Jet Charters page for BTA.
 * Visual-first layout: cinematic hero, aircraft category showcase,
 * how-to-book process, considerations, and inquiry CTA.
 * Fully mobile-responsive with horizontal scroll on aircraft categories.
 */

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  jetHero,
  jetIntro,
  jetCategories,
  jetConsiderations,
  jetHowToBook,
  jetCta,
} from "@/content/privateJet";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const AEGEAN   = "#7982A2";
const GOLD     = "#9C886A";
const DARK     = "#040619";

export default function PrivateJetCharters() {
  const [activeJet, setActiveJet] = useState(0);

  return (
    <div className="min-h-screen bg-[#F5F2EE] font-['Playfair_Display',serif]">
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${jetHero.imageUrl}')` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040619] via-[#040619]/50 to-transparent" />

        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-white/5 font-['Playfair_Display',serif] font-bold leading-none text-center"
            style={{ fontSize: "clamp(80px, 20vw, 260px)" }}
          >
            BTA
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: GOLD }}
          >
            {jetHero.eyebrow}
          </p>
          <h1
            className="text-white font-['Playfair_Display',serif] font-normal leading-tight mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            {jetHero.heading}
          </h1>
          <p className="text-white/75 max-w-2xl text-base md:text-lg leading-relaxed mb-8">
            {jetHero.subheading}
          </p>
          <a
            href="/book"
            className="inline-block px-8 py-3 border border-white/60 text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#040619] transition-all duration-300"
          >
            Request a Charter
          </a>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: AEGEAN }}>
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          {jetIntro.stats.map((s) => (
            <div key={s.label}>
              <p
                className="font-['Playfair_Display',serif] font-normal mb-1"
                style={{ fontSize: "clamp(24px, 4vw, 40px)", color: GOLD }}
              >
                {s.value}
              </p>
              <p className="text-white/70 text-xs tracking-[0.2em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F2EE]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 font-['Playfair_Display',serif] italic"
              style={{ color: GOLD }}
            >
              {jetIntro.eyebrow}
            </p>
            <h2
              className="font-['Playfair_Display',serif] font-normal leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: DARK }}
            >
              {jetIntro.heading}
            </h2>
            <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
            <p className="text-[#4a4a4a] leading-relaxed text-base md:text-lg">
              {jetIntro.body}
            </p>
          </div>
          {/* Image with gold corner accents */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={jetIntro.imageUrl}
                alt="Private jet interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#040619]/20" />
            </div>
            {/* Gold corner accents */}
            <div
              className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2"
              style={{ borderColor: GOLD }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2"
              style={{ borderColor: GOLD }}
            />
          </div>
        </div>
      </section>

      {/* ── AIRCRAFT CATEGORIES ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-['Playfair_Display',serif] italic"
              style={{ color: GOLD }}
            >
              Aircraft Categories
            </p>
            <h2
              className="font-['Playfair_Display',serif] font-normal text-white"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Choose Your Aircraft
            </h2>
            <div className="w-12 h-px mx-auto mt-4" style={{ backgroundColor: GOLD }} />
          </div>

          {/* Tab selector — horizontal scroll on mobile */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {jetCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveJet(i)}
                className="flex-shrink-0 px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300"
                style={{
                  borderColor: activeJet === i ? GOLD : "rgba(255,255,255,0.2)",
                  backgroundColor: activeJet === i ? GOLD : "transparent",
                  color: activeJet === i ? DARK : "rgba(255,255,255,0.7)",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active aircraft detail panel */}
          {jetCategories.map((cat, i) =>
            i === activeJet ? (
              <div
                key={cat.id}
                className="grid md:grid-cols-2 gap-0 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 md:h-auto min-h-[320px]">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#040619]/60 hidden md:block" />
                </div>
                {/* Content */}
                <div className="p-8 md:p-12" style={{ backgroundColor: "#0a0f2e" }}>
                  <h3
                    className="font-['Playfair_Display',serif] font-normal text-white mb-4"
                    style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
                  >
                    {cat.name}
                  </h3>
                  <div className="w-8 h-px mb-6" style={{ backgroundColor: GOLD }} />

                  {/* Specs grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "Range", value: cat.range },
                      { label: "Speed", value: cat.speed },
                      { label: "Passengers", value: cat.passengers },
                    ].map((spec) => (
                      <div key={spec.label}>
                        <p
                          className="text-xs tracking-[0.2em] uppercase mb-1"
                          style={{ color: GOLD }}
                        >
                          {spec.label}
                        </p>
                        <p className="text-white text-sm">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                    {cat.description}
                  </p>

                  <p
                    className="text-xs italic mb-6"
                    style={{ color: GOLD }}
                  >
                    {cat.highlight}
                  </p>

                  {/* Models */}
                  <div>
                    <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                      Example Models
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.models.map((m) => (
                        <span
                          key={m}
                          className="text-xs px-3 py-1 border border-white/20 text-white/60"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* ── HOW TO BOOK ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F2EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-['Playfair_Display',serif] italic"
              style={{ color: GOLD }}
            >
              {jetHowToBook.eyebrow}
            </p>
            <h2
              className="font-['Playfair_Display',serif] font-normal"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: DARK }}
            >
              {jetHowToBook.heading}
            </h2>
            <div className="w-12 h-px mx-auto mt-4" style={{ backgroundColor: GOLD }} />
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Steps */}
            <div className="space-y-8">
              {jetHowToBook.steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span
                      className="font-['Playfair_Display',serif] font-normal text-3xl leading-none"
                      style={{ color: GOLD }}
                    >
                      {step.number}
                    </span>
                    <div className="w-px h-full mt-2 mx-auto" style={{ backgroundColor: `${GOLD}40` }} />
                  </div>
                  <div>
                    <h3
                      className="font-['Playfair_Display',serif] font-normal text-lg mb-2"
                      style={{ color: DARK }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={jetHowToBook.imageUrl}
                  alt="Private jet charter process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040619]/40 to-transparent" />
              </div>
              <div
                className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2"
                style={{ borderColor: GOLD }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2"
                style={{ borderColor: GOLD }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSIDERATIONS ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: AEGEAN }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-['Playfair_Display',serif] italic text-white/60"
            >
              Before You Fly
            </p>
            <h2
              className="font-['Playfair_Display',serif] font-normal text-white"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Charter Considerations
            </h2>
            <div className="w-12 h-px mx-auto mt-4" style={{ backgroundColor: GOLD }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jetConsiderations.map((item) => (
              <div
                key={item.title}
                className="p-8 border border-white/15 hover:border-white/30 transition-colors duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="w-6 h-px mb-5" style={{ backgroundColor: GOLD }} />
                <h3
                  className="font-['Playfair_Display',serif] font-normal text-white text-lg mb-3"
                >
                  {item.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "70vh" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${jetCta.imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-[#040619]/75" />

        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-white/5 font-['Playfair_Display',serif] font-bold leading-none"
            style={{ fontSize: "clamp(80px, 18vw, 220px)" }}
          >
            FLY
          </span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4 font-['Playfair_Display',serif] italic"
            style={{ color: GOLD }}
          >
            Begin Your Journey
          </p>
          <h2
            className="font-['Playfair_Display',serif] font-normal text-white mb-6"
            style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
          >
            {jetCta.heading}
          </h2>
          <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
            {jetCta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={jetCta.buttonHref}
              className="px-10 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: GOLD, color: "#fff" }}
            >
              {jetCta.buttonText}
            </a>
            <a
              href={`tel:${jetCta.phone}`}
              className="px-10 py-3 text-xs tracking-[0.2em] uppercase border border-white/40 text-white hover:bg-white hover:text-[#040619] transition-all duration-300"
            >
              {jetCta.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
