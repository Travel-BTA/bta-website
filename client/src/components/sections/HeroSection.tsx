/**
 * HeroSection. Full-viewport hero with 6-slide crossfade slider.
 *
 * Slides auto-advance every 3 seconds with a smooth opacity crossfade.
 * Dot navigation allows manual control. Slider pauses on hover.
 * All images served from CDN — no local assets.
 *
 * Mobile fix: The partner logo bar is hidden inside the hero on mobile
 * (md:block) to prevent it from wrapping onto the hero text. A separate
 * <MobileLogoBar> component is exported and rendered immediately below
 * the hero in HomeV2 on small screens only (md:hidden).
 *
 * Slide order (per Janet's brief):
 *   1. Italy woman — Cinque Terre overlook
 *   2. Family of 3 — infinity pool ocean view
 *   3. Safari — leopard on tree with game vehicle
 *   4. Yacht — grandparents + family, Dubrovnik
 *   5. Penguins — Antarctica zodiac expedition
 *   6. Island — Seychelles aerial sunset
 */

import { useEffect, useRef, useState } from "react";
import { hero } from "@/content/homepage";

const SLIDES = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-italy-woman_6dba0fa6.jpg",
    label: "Italy",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-family-pool_0d07d57d.jpg",
    label: "Family",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-safari-leopard_35ef1d6b.jpg",
    label: "Safari",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-yacht-family_e13422b7.jpg",
    label: "Yacht",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-penguins_b86ed20c.jpg",
    label: "Antarctica",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-island-seychelles_7959d0f9.jpg",
    label: "Island",
  },
];

/** Shared logo list so both the in-hero bar and the mobile bar use the same source */
const PARTNER_LOGOS = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/virtuoso-white_3531f0d2.png", alt: "Virtuoso Member", heightClass: "h-[52px] md:h-[73px]" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/forbes-white_4b960c7c.png", alt: "Forbes Travel Guide", heightClass: "h-8 md:h-10" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/asta-white_6eb5d156.png", alt: "ASTA", heightClass: "h-8 md:h-10" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/best-of-valley-white_a7701861.png", alt: "Best of Our Valley 2026 Winner", heightClass: "h-8 md:h-10" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iatan-white-v2_329e4c97.png", alt: "IATAN", heightClass: "h-8 md:h-10" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/phoenix-symphony-white-v3_3ddb4034.png", alt: "The Phoenix Symphony", heightClass: "h-8 md:h-10" },
];

const INTERVAL_MS = 3000;
const FADE_MS = 800; // crossfade duration in ms

/**
 * MobileLogoBar — rendered below the hero on mobile only (md:hidden).
 * Dark background matches the hero's bottom gradient so the transition
 * feels seamless on small screens.
 */
export function MobileLogoBar() {
  return (
    <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 py-5 px-6">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {PARTNER_LOGOS.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={`${logo.heightClass} w-auto opacity-75`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance every 3 seconds unless paused
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const goTo = (index: number) => {
    setCurrent(index);
    // Reset the timer when manually navigating
    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }, INTERVAL_MS);
    }
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide layers — each fades in/out via opacity transition */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slide.url})`,
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            // Preload adjacent slides by keeping them in the DOM at opacity 0
            zIndex: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Dark gradient overlay — bottom-heavy for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"
        style={{ zIndex: 2 }}
      />

      {/* Main Content — pb-6 on mobile (no logos below), pb-28 on md+ (logos bar is inside hero) */}
      <div
        className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-6 md:pb-28"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-xl">
          {/* Headline */}
          <h1
            className="bta-section-title text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4"
            style={{ fontWeight: 400 }}
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          {/* Subheadline */}
          <p
            className="text-white/90 text-lg md:text-xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
          >
            {hero.subheadline}
          </p>
        </div>

        {/* Slide dot navigation */}
        <div className="flex items-center gap-2 mt-8" role="tablist" aria-label="Hero slides">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to ${slide.label} slide`}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "#9E8661" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

        {/* Circular CTA — right-center */}
        <a
          href={hero.cta.href}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/70 flex items-center justify-center text-center hover:bg-white/10 transition-colors"
          style={{ zIndex: 3 }}
        >
          <span className="bta-eyebrow text-white text-[9px] tracking-[0.15em] uppercase leading-tight px-2">
            {hero.cta.label.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </span>
        </a>
      </div>

      {/* Partner Logos Bar — visible on md+ only; hidden on mobile to prevent text overlap */}
      <div
        className="hidden md:block absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/25 backdrop-blur-sm"
        style={{ zIndex: 3 }}
      >
        {/* Logo bar — all logos normalized to h-10 md:h-12 for visual consistency */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-center gap-8 md:gap-14 flex-wrap">
          {PARTNER_LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.heightClass} w-auto opacity-80 hover:opacity-100 transition-opacity`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
