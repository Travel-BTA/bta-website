/**
 * AboutSections. Who We Are + Stats + Philosophy + Curated Hotels
 *
 * Updated to match Figma brand guide:
 * - Allura script for eyebrows
 * - Playfair Display for headings (larger, more prominent)
 * - Cormorant Garamond for body text
 * - Correct brand colors and spacing
 */

import { whoWeAre, stats, philosophy, curatedHotels } from "@/content/homepage";

export function WhoWeAreSection() {
  return (
    <section className="bg-[#bfaf8a] py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="bta-eyebrow text-[#faf9f6]/90 mb-4">{whoWeAre.eyebrow}</p>
        <h2 className="bta-section-title text-[#faf9f6] text-4xl md:text-5xl mb-8" style={{ fontWeight: 400 }}>
          {whoWeAre.headline}
        </h2>
        <p className="font-body text-[#faf9f6]/90 text-xl md:text-2xl leading-relaxed mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {whoWeAre.body}
        </p>
        <a href={whoWeAre.cta.href} className="bta-btn-gold">
          {whoWeAre.cta.label}
        </a>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#384959] py-16 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-display text-[#faf9f6] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3"
              style={{ fontWeight: 300 }}
            >
              {stat.value}
            </div>
            <div className="font-smallcaps text-[#bfaf8a] text-xs sm:text-sm tracking-[0.22em] uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="bg-[#edeae4] py-24 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Left: Text */}
        <div>
          <p className="bta-eyebrow mb-4">{philosophy.eyebrow}</p>
          <h2
            className="bta-section-title text-[#384959] text-4xl md:text-5xl mb-6 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {philosophy.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-body text-[#2F2F2F]/80 text-xl leading-relaxed mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {philosophy.body}
          </p>

          <div className="space-y-6 mb-12">
            {philosophy.features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                {/* Champagne Gold decorative dash */}
                <div className="w-5 h-px bg-[#bfaf8a] mt-3.5 flex-shrink-0" />
                <div>
                  <div className="font-smallcaps text-[#384959] text-sm tracking-[0.15em] uppercase mb-1.5">
                    {feature.title}
                  </div>
                  <p className="font-body text-[#2F2F2F]/65 text-lg leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href={philosophy.cta.href} className="bta-btn-outline-dark">
            {philosophy.cta.label}
          </a>
        </div>

        {/* Right: Image with Champagne Gold accent block */}
        <div className="relative">
          <div className="absolute bottom-[-20px] right-[-20px] w-4/5 h-4/5 bg-[#bfaf8a]/20 z-0" />
          <img
            src={philosophy.image}
            alt="Travel experience"
            className="relative z-10 w-full h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function CuratedHotelsSection() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${curatedHotels.backgroundImage})` }}
      />
      {/* Warm overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full flex items-center justify-start px-14 lg:px-20">
        <div>
          <p
            className="text-[#faf9f6] text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine1}
          </p>
          <p
            className="text-[#faf9f6] text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine2}
          </p>
        </div>
      </div>
    </section>
  );
}
