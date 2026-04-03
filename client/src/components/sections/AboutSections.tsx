/**
 * AboutSections. Who We Are + Stats + Philosophy + Curated Hotels
 *
 * Official BTA Brand Colors:
 *   Champagne Gold:  #BFAF8A  → backgrounds, accents, buttons, eyebrows
 *   Aegean Blue:     #384959  → text on light backgrounds, dark accents
 *   Linen White:     #faf9f6  → text on dark/gold backgrounds
 *   Warm Stone:      #faf9f6  → section backgrounds
 *   Charcoal Ink:    #2F2F2F  → body text
 *   Dark Navy:       #384959  → stats bar, footer
 */

import { whoWeAre, stats, philosophy, curatedHotels } from "@/content/homepage";

export function WhoWeAreSection() {
  return (
    // Champagne Gold background with Linen White text
    <section className="bg-[#BFAF8A] py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="bta-eyebrow text-[#faf9f6]/80 mb-3">{whoWeAre.eyebrow}</p>
        <h2 className="bta-section-title text-[#faf9f6] text-3xl md:text-4xl mb-6" style={{ fontWeight: 400 }}>
          {whoWeAre.headline}
        </h2>
        <p className="font-body text-[#faf9f6]/90 text-lg md:text-xl leading-relaxed mb-8">
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
    // Dark Navy bar. keeps strong contrast, matches Figma
    <section className="bg-[#384959] py-14 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-display text-[#faf9f6] text-4xl md:text-5xl lg:text-6xl mb-2"
              style={{ fontWeight: 300 }}
            >
              {stat.value}
            </div>
            <div className="font-smallcaps text-[#BFAF8A]/80 text-[10px] tracking-[0.2em] uppercase">
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
    // Warm Stone background. clean, airy
    <section className="bg-[#faf9f6] py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <p className="bta-eyebrow mb-3">{philosophy.eyebrow}</p>
          <h2
            className="bta-section-title text-[#384959] text-3xl md:text-4xl mb-5 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {philosophy.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-body text-[#2F2F2F]/80 text-lg mb-8 leading-relaxed">
            {philosophy.body}
          </p>

          <div className="space-y-5 mb-10">
            {philosophy.features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                {/* Champagne Gold decorative dash */}
                <div className="w-4 h-px bg-[#BFAF8A] mt-3 flex-shrink-0" />
                <div>
                  <div className="font-smallcaps text-[#384959] text-[11px] tracking-[0.15em] uppercase mb-1">
                    {feature.title}
                  </div>
                  <p className="font-body text-[#2F2F2F]/65 text-base leading-snug">
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

        {/* Right: Image with Champagne Gold accent block */}
        <div className="relative">
          <div className="absolute bottom-[-16px] right-[-16px] w-4/5 h-4/5 bg-[#BFAF8A]/20 z-0" />
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
      {/* Warm overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full flex items-center justify-start px-10 lg:px-16">
        <div>
          <p
            className="text-[#faf9f6] text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine1}
          </p>
          <p
            className="text-[#faf9f6] text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine2}
          </p>
        </div>
      </div>
    </section>
  );
}
