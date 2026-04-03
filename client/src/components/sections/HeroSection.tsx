/**
 * HeroSection. Full-viewport hero with dramatic landscape photo
 *
 * Design: Full-height background image, headline bottom-left,
 * circular "PLAN YOUR JOURNEY" CTA right-center,
 * partner logos bar at the bottom.
 * Text: White on dark image. Headline in Playfair Display uppercase.
 * Subheadline in Cormorant Garamond italic.
 */

import { hero } from "@/content/homepage";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      {/* Dark gradient overlay. bottom-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      {/* Main Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28">
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
          <p className="font-script text-white/90 text-lg md:text-xl italic">
            {hero.subheadline}
          </p>
        </div>

        {/* Circular CTA. positioned right-center */}
        <a
          href={hero.cta.href}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/70 flex items-center justify-center text-center hover:bg-white/10 transition-colors"
        >
          <span className="font-smallcaps text-white text-[9px] tracking-[0.15em] uppercase leading-tight px-2">
            {hero.cta.label.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </span>
        </a>
      </div>

      {/* Partner Logos Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {/* Virtuoso text logo */}
          <span className="font-smallcaps text-white/60 text-[10px] tracking-[0.2em] uppercase">Virtuoso</span>
          <span className="font-smallcaps text-white/60 text-[10px] tracking-[0.2em] uppercase">ASTA</span>
          <span className="font-smallcaps text-white/60 text-[10px] tracking-[0.2em] uppercase">Best of Our Valley</span>
          <span className="font-smallcaps text-white/60 text-[10px] tracking-[0.2em] uppercase">IATAN</span>
          <span className="font-smallcaps text-white/60 text-[10px] tracking-[0.2em] uppercase">Forbes</span>
        </div>
      </div>
    </section>
  );
}
