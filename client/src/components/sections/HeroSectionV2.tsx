/**
 * HeroSection — Full-viewport hero with dramatic landscape photo
 *
 * Partner logos: each logo has a per-logo maxWidth cap based on its aspect ratio
 * so all logos occupy roughly the same visual footprint regardless of shape.
 * - Square/tall logos (ASTA, IATAN, Best of Our Valley): small maxWidth
 * - Wide logos (Virtuoso, Forbes): larger maxWidth to match visual weight
 */

import { hero } from "@/content/homepage";

// Per-logo max widths (desktop). Derived from aspect ratios so all logos
// appear the same visual "area". Base target height ≈ 48px desktop.
// maxWidth = targetHeight * aspectRatio, then normalised so they look balanced.
const LOGO_MAX_WIDTHS: Record<string, string> = {
  "Virtuoso":           "clamp(80px, 8vw, 120px)",   // ratio 2.0 → medium-wide
  "ASTA":               "clamp(52px, 5vw, 76px)",    // ratio 1.4 → compact
  "Best of Our Valley": "clamp(52px, 5vw, 76px)",    // ratio 1.2 → compact
  "IATAN":              "clamp(52px, 5vw, 76px)",    // ratio 1.1 → compact
  "Forbes Travel Guide":"clamp(80px, 8vw, 120px)",   // ratio 3.5 → wide but capped
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30" />

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Text block */}
        <div className="max-w-[1440px] mx-auto w-full px-8 lg:px-14 pt-[12vh] pb-0">
          <div className="max-w-2xl">
            <h1
              className="bta-section-title text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5"
              style={{ fontWeight: 400 }}
            >
              {hero.headline.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p
              className="font-body text-white/85 text-xl md:text-2xl italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {hero.subheadline}
            </p>
          </div>
        </div>

        {/* Partner Logos — single row, width-capped per logo for visual balance */}
        <div className="pb-5 pt-6 bg-gradient-to-t from-black/45 to-transparent">
          <div
            className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-14"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(14px, 3.5vw, 60px)",
            }}
          >
            {hero.partnerLogos.map((logo) =>
              logo.imageUrl ? (
                <img
                  key={logo.name}
                  src={logo.imageUrl}
                  alt={logo.name}
                  style={{
                    opacity: 0.65,
                    width: LOGO_MAX_WIDTHS[logo.name] ?? "clamp(60px, 6vw, 100px)",
                    height: "auto",
                    maxHeight: "clamp(28px, 4vw, 52px)",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    flexShrink: 1,
                    display: "block",
                  }}
                />
              ) : (
                <span
                  key={logo.name}
                  className="font-smallcaps text-white/50 text-sm tracking-[0.2em] uppercase"
                  style={{ flexShrink: 0 }}
                >
                  {logo.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Circular CTA — desktop only, right-center */}
      <a
        href={hero.cta.href}
        className="hidden md:flex absolute right-[14%] lg:right-[18%] top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/70 items-center justify-center text-center hover:bg-white/10 transition-colors"
      >
        <span className="font-smallcaps text-white text-[11px] tracking-[0.15em] uppercase leading-tight px-3">
          {hero.cta.label.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </span>
      </a>
    </section>
  );
}
