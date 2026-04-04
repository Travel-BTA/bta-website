/**
 * JourneySubPage. Shared template for all Land Journey sub-pages
 *
 * Used by: Safari & Wildlife, European Immersions, Expedition Travel, Cultural Journeys
 *
 * Typography standard (matches About, Destinations, Experiences):
 *  - Eyebrow: Playfair Display italic, gold, tracking-[0.25em], uppercase, text-sm
 *  - H1 (hero): Playfair Display, uppercase, tracking-widest, text-white, text-4xl→text-6xl
 *  - H2 (section): Playfair Display, uppercase, tracking-widest, text-bta-aegean, text-3xl→text-4xl
 *  - H3 (card): Playfair Display, uppercase, tracking-widest, text-bta-aegean, text-xl→text-2xl
 *  - Body: Playfair Display, text-lg, leading-relaxed
 *  - Colors: text-bta-gold (#A18B6E), text-bta-aegean (#384959), bg-bta-stone (#faf9f6)
 *
 * NavBar and Footer are rendered globally in App.tsx — do NOT add them here.
 * To add a new journey sub-page: create a content config file and pass it to this component.
 */

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "wouter";

export interface JourneyDestination {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
}

export interface JourneyItineraryDetail {
  label: string;
  value: string;
}

export interface JourneySubPageData {
  seo: {
    title: string;
    metaDescription: string;
  };
  hero: {
    backgroundImage: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  intro: {
    eyebrow: string;
    headline: string;
    body: string;
    imageUrl: string;
  };
  destinations: JourneyDestination[];
  featuredItinerary: {
    eyebrow: string;
    headline: string;
    description: string;
    imageUrl: string;
    details: JourneyItineraryDetail[];
  };
  whyBta: {
    eyebrow: string;
    headline: string;
    items: { title: string; description: string }[];
  };
  cta: {
    backgroundImage: string;
    headline: string;
    subheadline: string;
  };
}

interface Props {
  data: JourneySubPageData;
}

export default function JourneySubPage({ data }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = data.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", data.seo.metaDescription);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = data.seo.metaDescription;
      document.head.appendChild(m);
    }
  }, [data.seo]);

  useEffect(() => {
    // Subtle parallax on the hero background
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bta-stone text-[#2F2F2F] font-['Playfair_Display',Georgia,serif]">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${data.hero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Eyebrow: Playfair Display italic gold on photo */}
          <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold tracking-[0.25em] text-base uppercase mb-3">
            {data.hero.eyebrow}
          </p>
          {/* H1: Playfair Display uppercase white on hero photo */}
          <h1 className="font-[Playfair_Display,serif] text-4xl md:text-6xl text-white uppercase tracking-widest leading-tight mb-6 max-w-3xl">
            {data.hero.headline}
          </h1>
          {/* Subheadline: Playfair Display italic white */}
          <p className="font-['Playfair_Display',Georgia,serif] italic text-white/80 text-xl md:text-2xl max-w-xl leading-relaxed">
            {data.hero.subheadline}
          </p>
          <div className="mt-10 flex items-center gap-3 text-white/50">
            <div className="w-8 h-px bg-white/40" />
            <span className="font-['Playfair_Display',Georgia,serif] text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Eyebrow */}
            <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold tracking-[0.25em] text-base uppercase mb-4">
              {data.intro.eyebrow}
            </p>
            {/* H2: Playfair Display uppercase aegean */}
            <h2 className="bta-section-title text-3xl md:text-4xl text-bta-aegean uppercase tracking-widest leading-tight mb-8">
              {data.intro.headline}
            </h2>
            {/* Body: Playfair Display */}
            <p className="font-['Playfair_Display',Georgia,serif] text-lg leading-relaxed text-[#2f2f2f] mb-10">
              {data.intro.body}
            </p>
            <Link href="/book">
              <button className="group inline-flex items-center gap-3 bg-bta-gold text-white font-['Playfair_Display',Georgia,serif] tracking-widest uppercase text-sm px-10 py-4 hover:bg-bta-gold-dark transition-colors duration-200">
                Begin Planning
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[480px]"
              style={{
                backgroundImage: `url(${data.intro.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-bta-gold" />
          </div>
        </div>
      </section>

      {/* ── Destinations ───────────────────────────────────────────────── */}
      <section className="py-24 bg-bta-stone">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold tracking-[0.25em] text-base uppercase mb-4">
              Featured Destinations
            </p>
            <h2 className="bta-section-title text-3xl md:text-4xl text-bta-aegean uppercase tracking-widest">
              Where We Take You
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.destinations.map((dest, i) => (
              <div key={i} className="group">
                <div className="w-full h-72 overflow-hidden mb-6">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${dest.imageUrl})` }}
                  />
                </div>
                {/* Country label */}
                <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold text-sm tracking-[0.2em] uppercase mb-2">
                  {dest.country}
                </p>
                {/* H3: Playfair Display uppercase aegean */}
                <h3 className="bta-section-title text-xl md:text-2xl text-bta-aegean uppercase tracking-widest mb-3">
                  {dest.name}
                </h3>
                <p className="font-['Playfair_Display',Georgia,serif] text-lg leading-relaxed text-[#2f2f2f]">
                  {dest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Itinerary ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="w-full h-[520px]"
              style={{
                backgroundImage: `url(${data.featuredItinerary.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold corner accents */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-bta-gold" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-bta-gold" />
          </div>
          <div>
            <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold tracking-[0.25em] text-base uppercase mb-4">
              {data.featuredItinerary.eyebrow}
            </p>
            <h2 className="bta-section-title text-3xl md:text-4xl text-bta-aegean uppercase tracking-widest leading-tight mb-6">
              {data.featuredItinerary.headline}
            </h2>
            <p className="font-['Playfair_Display',Georgia,serif] text-lg leading-relaxed text-[#2f2f2f] mb-10">
              {data.featuredItinerary.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 border-t border-b border-[#edeae4] py-8">
              {data.featuredItinerary.details.map((d, i) => (
                <div key={i}>
                  <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold text-xs tracking-[0.2em] uppercase mb-1">
                    {d.label}
                  </p>
                  <p className="font-[Playfair_Display,serif] text-bta-aegean text-lg tracking-wide">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/book">
              <button className="group inline-flex items-center gap-3 bg-bta-aegean text-white font-['Playfair_Display',Georgia,serif] tracking-widest uppercase text-sm px-10 py-4 hover:bg-[#2a3a4a] transition-colors duration-200">
                Enquire About This Journey
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why BTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-bta-aegean">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold tracking-[0.25em] text-base uppercase mb-4">
              {data.whyBta.eyebrow}
            </p>
            <h2 className="bta-section-title text-3xl md:text-4xl text-white uppercase tracking-widest">
              {data.whyBta.headline}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {data.whyBta.items.map((item, i) => (
              <div key={i}>
                <div className="w-8 h-px bg-bta-gold mb-6" />
                <h3 className="bta-section-title text-white text-xl uppercase tracking-widest mb-4">
                  {item.title}
                </h3>
                <p className="font-['Playfair_Display',Georgia,serif] text-white/70 text-lg leading-relaxed">
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
          backgroundImage: `url(${data.cta.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-bta-aegean/75" />
        <div className="relative z-10 text-center px-8">
          <h2 className="bta-section-title text-4xl md:text-5xl text-white uppercase tracking-widest mb-6 leading-tight">
            {data.cta.headline}
          </h2>
          <p className="font-['Playfair_Display',Georgia,serif] italic text-white/70 text-xl md:text-2xl mb-12 max-w-xl mx-auto">
            {data.cta.subheadline}
          </p>
          <Link href="/book">
            <button className="group inline-flex items-center gap-3 border border-white/60 text-white font-['Playfair_Display',Georgia,serif] tracking-widest uppercase text-sm px-12 py-5 hover:bg-white hover:text-bta-aegean transition-all duration-300">
              Start Planning
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
