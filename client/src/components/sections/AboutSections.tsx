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
import { Diamond, Users, Map, Award, Crown } from "lucide-react";
import { Link } from "wouter";

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
            <div className="bta-eyebrow text-[#BFAF8A]/80 text-[10px] tracking-[0.2em] uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PhilosophySection() {
  /*
   * WHY: Updated to match Figma design:
   * - Heading color changed from Aegean Blue (#384959) to Champagne Gold (#BFAF8A)
   * - Eyebrow uses bold italic Playfair Display (script style) in Champagne Gold
   * - Body text uses bold Playfair Display weight matching Figma
   * - Decorative dashes replaced with Lucide icons in Champagne Gold
   * - Feature titles use bold Playfair Display in sentence case (not all-caps)
   * - Layout and image column preserved unchanged
   */

  // Each feature maps to a distinct Lucide icon per Figma spec
  const featureIcons = [
    <Diamond key="diamond" className="w-5 h-5 text-[#BFAF8A] flex-shrink-0 mt-0.5" strokeWidth={1.25} />,
    <Users key="users" className="w-5 h-5 text-[#BFAF8A] flex-shrink-0 mt-0.5" strokeWidth={1.25} />,
    <Map key="map" className="w-5 h-5 text-[#BFAF8A] flex-shrink-0 mt-0.5" strokeWidth={1.25} />,
    <Award key="award" className="w-5 h-5 text-[#BFAF8A] flex-shrink-0 mt-0.5" strokeWidth={1.25} />,
    <Crown key="crown" className="w-5 h-5 text-[#BFAF8A] flex-shrink-0 mt-0.5" strokeWidth={1.25} />,
  ];

  return (
    // Warm Stone background. clean, airy
    <section className="bg-[#faf9f6] py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          {/* Eyebrow: bold italic Playfair Display in Champagne Gold — matches Figma script style */}
          <p
            className="text-[#BFAF8A] text-xl mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
          >
            {philosophy.eyebrow}
          </p>

          {/* Heading: Champagne Gold — matches Figma color */}
          <h2
            className="bta-section-title text-3xl md:text-4xl mb-5 leading-tight"
            style={{ fontWeight: 400, color: "#BFAF8A" }}
          >
            {philosophy.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          {/* Body: bold Playfair Display — matches Figma weight */}
          <p
            className="text-[#2F2F2F] text-lg mb-8 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            {philosophy.body}
          </p>

          <div className="space-y-5 mb-10">
            {philosophy.features.map((feature, i) => (
              <div key={feature.title} className="flex gap-4 items-start">
                {/* Lucide icon in Champagne Gold — replaces decorative dash per Figma */}
                {featureIcons[i] ?? featureIcons[0]}
                <div>
                  {/* Feature title: bold Playfair Display, sentence case, Aegean Blue */}
                  <div
                    className="text-[#384959] text-sm mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                  >
                    {feature.title}
                  </div>
                  <p
                    className="text-[#2F2F2F]/65 text-base leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link href={philosophy.cta.href} className="bta-btn-outline-dark text-[10px]">
            {philosophy.cta.label}
          </Link>
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
            style={{ fontFamily: "'Allura', cursive", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine1}
          </p>
          <p
            className="text-[#faf9f6] text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Allura', cursive", fontWeight: 400 }}
          >
            {curatedHotels.scriptLine2}
          </p>
        </div>
      </div>
    </section>
  );
}
