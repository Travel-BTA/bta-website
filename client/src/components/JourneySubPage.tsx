/**
 * JourneySubPage — Shared template for all Land Journey sub-pages
 *
 * Used by: Safari & Wildlife, European Immersions, Expedition Travel, Cultural Journeys
 *
 * Design: Luxury editorial — cinematic hero, generous whitespace, Playfair Display
 * headings, gold (#bfaf8a) accents, BTA blue (#384959) panels.
 *
 * To add a new journey sub-page: create a content config file and pass it to this component.
 */

import NavBar from "@/components/NavBar";
import { footer } from "@/content/homepage";
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
    // Set page title and meta description for SEO
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
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2F2F2F]">
      <NavBar />

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
          <p
            className="text-[#BFAF8A] tracking-[0.3em] text-sm uppercase mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data.hero.eyebrow}
          </p>
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data.hero.headline}
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            {data.hero.subheadline}
          </p>
          <div className="mt-12 flex items-center gap-3 text-white/60">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {data.intro.eyebrow}
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {data.intro.headline}
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              {data.intro.body}
            </p>
            <Link href="/book">
              <button className="group flex items-center gap-3 text-[#bfaf8a] tracking-[0.2em] text-sm uppercase border border-[#bfaf8a] px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-all duration-300">
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
            <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#bfaf8a]" />
          </div>
        </div>
      </section>

      {/* ── Destinations ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Featured Destinations
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where We Take You
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.destinations.map((dest, i) => (
              <div key={i} className="group">
                <div
                  className="w-full h-72 overflow-hidden mb-6"
                  style={{ position: "relative" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${dest.imageUrl})` }}
                  />
                </div>
                <p
                  className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {dest.country}
                </p>
                <h3
                  className="text-[#384959] text-2xl font-light mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {dest.name}
                </h3>
                <p className="text-[#2f2f2f] text-lg leading-relaxed font-light">
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
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#bfaf8a]" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#bfaf8a]" />
          </div>
          <div>
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {data.featuredItinerary.eyebrow}
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {data.featuredItinerary.headline}
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              {data.featuredItinerary.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 border-t border-b border-[#edeac4] py-8">
              {data.featuredItinerary.details.map((d, i) => (
                <div key={i}>
                  <p className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-1">{d.label}</p>
                  <p
                    className="text-[#384959] text-lg font-light"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/book">
              <button className="group flex items-center gap-3 bg-[#384959] text-white tracking-[0.2em] text-sm uppercase px-10 py-4 hover:bg-[#384959] transition-colors duration-300">
                Enquire About This Journey
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why BTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#384959]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {data.whyBta.eyebrow}
            </p>
            <h2
              className="text-white text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {data.whyBta.headline}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {data.whyBta.items.map((item, i) => (
              <div key={i}>
                <div className="w-8 h-px bg-[#BFAF8A] mb-6" />
                <h3
                  className="text-white text-xl font-light mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">{item.description}</p>
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
        <div className="absolute inset-0 bg-[#384959]/75" />
        <div className="relative z-10 text-center px-8">
          <h2
            className="text-white text-5xl md:text-6xl font-light mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {data.cta.headline}
          </h2>
          <p className="text-white/70 text-xl font-light mb-12 max-w-xl mx-auto">
            {data.cta.subheadline}
          </p>
          <Link href="/book">
            <button className="group inline-flex items-center gap-3 border border-white/60 text-white tracking-[0.2em] text-sm uppercase px-12 py-5 hover:bg-white hover:text-[#384959] transition-all duration-300">
              Start Planning
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#384959] text-white/70 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed font-light">{footer.tagline}</p>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Explore</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.explore.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Company</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.company.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Contact</p>
              <ul className="space-y-3 text-sm font-light">
                <li><a href={`tel:${footer.contact.phone}`} className="hover:text-[#BFAF8A] transition-colors">{footer.contact.phone}</a></li>
                <li><a href={`mailto:${footer.contact.email}`} className="hover:text-[#BFAF8A] transition-colors">{footer.contact.email}</a></li>
                <li className="text-white/40 text-xs">{footer.contact.virtuoso}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>{footer.copyright}</p>
            <div className="flex gap-6">
              {footer.legal.map((l: { label: string; href: string }, i: number) => (
                <Link key={i} href={l.href} className="hover:text-[#BFAF8A] transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
