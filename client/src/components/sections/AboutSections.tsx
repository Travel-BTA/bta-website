/**
 * AboutSections — Who We Are + Stats + Philosophy + Curated Hotels
 *
 * Design:
 *   - Who We Are: Gold/tan background, centered text, outlined CTA
 *   - Stats: Dark navy bar, 3 large numbers
 *   - Philosophy: Off-white, 2-column (text + image with gold accent block)
 *   - Curated Hotels: Full-width image with script overlay
 */

import { whoWeAre, stats, philosophy, curatedHotels } from "@/content/homepage";

export function WhoWeAreSection() {
  return (
    <section className="bg-[#A18B6E] py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="bta-eyebrow text-white/80 mb-3">{whoWeAre.eyebrow}</p>
        <h2 className="bta-section-title text-white text-3xl md:text-4xl mb-6" style={{ fontWeight: 400 }}>
          {whoWeAre.headline}
        </h2>
        <p className="font-body text-white/85 text-lg md:text-xl leading-relaxed mb-8">
          {whoWeAre.body}
        </p>
        <a href={whoWeAre.cta.href} className="bta-btn-outline-white text-[10px]">
          {whoWeAre.cta.label}
        </a>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#041E42] py-14 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-2"
              style={{ fontWeight: 300 }}
            >
              {stat.value}
            </div>
            <div className="font-smallcaps text-white/60 text-[10px] tracking-[0.2em] uppercase">
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
    <section className="bg-[#F5F0EA] py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <p className="bta-eyebrow mb-3">{philosophy.eyebrow}</p>
          <h2
            className="bta-section-title text-[#A18B6E] text-3xl md:text-4xl mb-5 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {philosophy.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-body text-[#041E42]/80 text-lg mb-8 leading-relaxed">
            {philosophy.body}
          </p>

          <div className="space-y-5 mb-10">
            {philosophy.features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                {/* Small decorative dash */}
                <div className="w-4 h-px bg-[#A18B6E] mt-3 flex-shrink-0" />
                <div>
                  <div className="font-smallcaps text-[#041E42] text-[11px] tracking-[0.15em] uppercase mb-1">
                    {feature.title}
                  </div>
                  <p className="font-body text-[#041E42]/65 text-base leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href={philosophy.cta.href} className="bta-btn-outline-dark text-[10px]">
            {philosophy.cta.label}
          </a>
        </div>

        {/* Right: Image with gold accent block */}
        <div className="relative">
          {/* Gold accent block — offset behind image */}
          <div className="absolute bottom-[-16px] right-[-16px] w-4/5 h-4/5 bg-[#A18B6E]/20 z-0" />
          <img
            src={philosophy.image}
            alt="Travel experience"
            className="relative z-10 w-full h-[480px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function CuratedHotelsSection() {
  return (
    <section className="relative w-full h-[380px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${curatedHotels.backgroundImage})` }}
      />
      {/* Subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative h-full flex items-center justify-start px-10 lg:px-16">
        <div>
          <p
            className="text-white text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine1}
          </p>
          <p
            className="text-white text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine2}
          </p>
        </div>
      </div>
    </section>
  );
}
