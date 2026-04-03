/**
 * About Page
 * Route: /about
 *
 * Design Philosophy: Luxury, Elevated, Modern, Sophisticated
 * Colors: Champagne Gold (#BFAF8A), Aegean Blue (#384959), Warm Stone (#faf9f6)
 * Typography: Playfair Display (headings), Playfair Display (body/italic)
 *
 * Layout:
 *  1. Hero — full-width image with overlay headline
 *  2. Company Overview — centered copy with Hans Christian Andersen quote
 *  3. Who We Are / What We Do / What We Believe — tabbed section
 *  4. Co-Founders — two full-width profile cards with bio + Favorite Things
 *  5. Mission — dark aegean band with mission statement
 *  6. CTA — Start Planning
 *
 * WHY this structure: mirrors the travelbta.com About page hierarchy while
 * applying the new site's design system for visual consistency.
 */

import { useState } from "react";
import { Link } from "wouter";
import NavBar from "@/components/NavBar";
import { footer } from "@/content/homepage";
import { aboutData } from "@/content/about";

export default function About() {
  const [activeTab, setActiveTab] = useState("who-we-are");

  const activeTabContent = aboutData.tabs.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-bta-stone font-['Playfair_Display',Georgia,serif]">
      <NavBar />

      {/* ── 1. HERO ── */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={aboutData.hero.backgroundImage}
          alt="BTA Team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-bta-aegean/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic text-lg tracking-[0.2em] mb-3 uppercase">
            {aboutData.hero.subheadline}
          </p>
          <h1 className="font-[Playfair_Display,serif] bta-h1 text-white uppercase tracking-widest">
            {aboutData.hero.headline}
          </h1>
        </div>
      </section>

      {/* ── 2. COMPANY OVERVIEW ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic tracking-[0.25em] text-base uppercase mb-4">
            About Us
          </p>
          <h2 className="font-[Playfair_Display,serif] bta-h2 text-bta-aegean uppercase tracking-widest mb-10">
            {aboutData.overview.headline}
          </h2>

          <div className="space-y-5 text-bta-charcoal text-lg leading-relaxed text-left">
            {aboutData.overview.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-14 border-l-2 border-bta-gold pl-6 text-left">
            <p className="font-['Playfair_Display',Georgia,serif] italic text-xl md:text-2xl text-bta-aegean leading-relaxed">
              "{aboutData.overview.quote}"
            </p>
            <footer className="mt-3 text-bta-gold tracking-widest text-sm uppercase font-['Playfair_Display',Georgia,serif]">
              — {aboutData.overview.quoteAuthor}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 3. TABS ── */}
      <section className="bg-bta-stone py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tab nav */}
          <div className="flex border-b border-bta-gold/40 mb-10 gap-0 overflow-x-auto">
            {aboutData.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-['Playfair_Display',Georgia,serif] text-sm tracking-widest uppercase transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-b-2 border-bta-gold text-bta-aegean"
                    : "text-bta-charcoal/60 hover:text-bta-aegean"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTabContent && (
            <p className="text-bta-charcoal text-lg leading-relaxed max-w-2xl">
              {activeTabContent.content}
            </p>
          )}
        </div>
      </section>

      {/* ── 4. CO-FOUNDERS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic tracking-[0.25em] text-base uppercase mb-2 text-center">
            The Heart of BTA
          </p>
          <h2 className="font-[Playfair_Display,serif] bta-h2 text-bta-aegean uppercase tracking-widest mb-10 text-center">
            BTA Co-Founders
          </h2>

          <p className="text-center text-bta-charcoal text-lg mb-16 max-w-2xl mx-auto">
            Our designers are passionate travelers and the heart of BTA. Every person on our team has traveled extensively and specializes in creating unique experiences focused on discovery, exploration, and refined luxury.
          </p>

          <div className="space-y-24">
            {aboutData.cofounders.map((advisor, idx) => (
              <div
                key={advisor.name}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-start`}
              >
                {/* Portrait */}
                <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-64">
                  <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-bta-gold/30 shadow-lg">
                    <img
                      src={advisor.imageUrl}
                      alt={advisor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-[Playfair_Display,serif] bta-h3 text-bta-aegean uppercase tracking-widest">
                      {advisor.name}
                    </h3>
                    <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold text-base mt-1">
                      {advisor.title}
                    </p>
                    <p className="text-bta-charcoal/60 text-sm tracking-wider uppercase mt-1 font-['Playfair_Display',Georgia,serif]">
                      {advisor.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Bio */}
                  <div className="space-y-4 text-bta-charcoal text-lg leading-relaxed mb-10">
                    {advisor.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Favorite Things */}
                  <div className="border-t border-bta-gold/30 pt-8">
                    <h4 className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold bta-h4 mb-6">
                      A Few of My Favorite Things
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                      {advisor.favoriteThings.map((item) => (
                        <div key={item.label}>
                          <p className="font-['Playfair_Display',Georgia,serif] text-xs tracking-widest uppercase text-bta-gold mb-1">
                            {item.label}
                          </p>
                          <p className="text-bta-charcoal text-base leading-snug">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ADVISOR GRID ── */}
      {/* WHY: Shows all BTA inhouse and affiliate advisors in a clean photo
           grid. Travel coaches are intentionally excluded — they serve a
           different function and should not appear on the public About page. */}
      <section className="bg-bta-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Inhouse Advisors */}
          <p className="text-bta-gold font-[Cormorant_Garamond,serif] italic tracking-[0.25em] text-base uppercase mb-2 text-center">
            Our Team
          </p>
          <h2 className="font-[Playfair_Display,serif] bta-h2 text-bta-aegean uppercase tracking-widest mb-12 text-center">
            BTA Inhouse Advisors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
            {([
              { name: "Bri Crowder", image: "https://travelbta.com/wp-content/uploads/2022/12/Bri-Crowder-About.jpg" },
              { name: "Kim Parizek", image: "https://travelbta.com/wp-content/uploads/2025/08/unnamed-15-e1756243211120.jpg" },
              { name: "Jessica Barkley", image: "https://travelbta.com/wp-content/uploads/2025/02/unnamed-17-e1755721947975.jpg" },
              { name: "Cristina Medeiros", image: "https://travelbta.com/wp-content/uploads/2026/03/20231118_125508-609x1024.jpg" },
              { name: "Justin Lintz", image: "https://travelbta.com/wp-content/uploads/2026/03/IMG_5590-1024x768.jpeg" },
              { name: "Laura Cosme", image: "https://travelbta.com/wp-content/uploads/2026/03/unnamed-10-1024x683.webp" },
              { name: "Rose Topisian", image: "https://travelbta.com/wp-content/uploads/2026/02/3.jpg" },
            ] as { name: string; image: string }[]).map((advisor) => (
              <div key={advisor.name} className="flex flex-col items-center text-center">
                <div className="w-full aspect-square overflow-hidden mb-3">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-[Cormorant_SC,serif] tracking-widest text-xs uppercase text-bta-aegean">
                  {advisor.name}
                </p>
              </div>
            ))}
          </div>

          {/* Independent Affiliate Advisors */}
          <h2 className="font-[Playfair_Display,serif] bta-h2 text-bta-aegean uppercase tracking-widest mb-12 text-center">
            BTA Independent Affiliate Advisors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {([
              { name: "Julie Rose", image: "https://travelbta.com/wp-content/uploads/2023/02/Julie-Rose-Photo-resized.jpg" },
              { name: "Rebecca Hogan", image: "https://travelbta.com/wp-content/uploads/2026/03/IMG_0181-766x1024.jpeg" },
              { name: "Autumn Garduno", image: "https://travelbta.com/wp-content/uploads/2024/04/unnamed-13-3-1.jpg" },
              { name: "Becca Samuels", image: "https://travelbta.com/wp-content/uploads/2024/08/unnamed-1.jpg" },
              { name: "Tracey Davis", image: "https://travelbta.com/wp-content/uploads/2024/03/bta-horizontal-photo-2.jpeg" },
              { name: "Kathleen Smith", image: "https://travelbta.com/wp-content/uploads/2022/12/Kathleen-Profile-resized.jpg" },
              { name: "Carol Fogerty", image: "https://travelbta.com/wp-content/uploads/2025/05/f2a52e31-59fe-4b31-8793-0a1fdda00163_IMG_1584__3_-1-scaled-e1747425399928.jpg" },
              { name: "Julie Plummer", image: "https://travelbta.com/wp-content/uploads/2025/06/Screenshot-2025-06-02-at-7.08.48%20AM.png" },
              { name: "Baylee Shapiro", image: "https://travelbta.com/wp-content/uploads/2025/07/009A8159-scaled.jpeg" },
              { name: "Danitza & Esteban Villanueva", image: "https://travelbta.com/wp-content/uploads/2025/09/Danitza-and-Esteban-Villaneuva-at-The-Tower-Birdge-e1757596376865.jpg" },
              { name: "Chloe Cottingham", image: "https://travelbta.com/wp-content/uploads/2022/12/Chloe-Cottingham-About.jpg" },
              { name: "Camila Dominguez", image: "https://travelbta.com/wp-content/uploads/2025/02/IMG_5029-2-scaled.jpg" },
              { name: "Malou Sarmiento", image: "https://travelbta.com/wp-content/uploads/2025/08/Screenshot-2025-08-19-at-9.38.30-PM.png" },
            ] as { name: string; image: string }[]).map((advisor) => (
              <div key={advisor.name} className="flex flex-col items-center text-center">
                <div className="w-full aspect-square overflow-hidden mb-3">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-[Cormorant_SC,serif] tracking-widest text-xs uppercase text-bta-aegean">
                  {advisor.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MISSION BAND ── */}
      <section className="bg-bta-aegean py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic tracking-[0.25em] text-base uppercase mb-4">
            Our Mission
          </p>
          <p className="font-['Playfair_Display',Georgia,serif] italic text-white text-xl md:text-2xl leading-relaxed mb-8">
            We work tirelessly to craft unforgettable journeys that spark the imagination, elevate the spirit, and foster meaningful connections.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            {aboutData.mission.body}
          </p>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="bg-bta-stone py-20 px-6 text-center">
        <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic tracking-[0.25em] text-base uppercase mb-4">
          Ready to Begin?
        </p>
        <h2 className="font-[Playfair_Display,serif] bta-h2 text-bta-aegean uppercase tracking-widest mb-6">
          Start Planning Your Journey
        </h2>
        <p className="text-bta-charcoal text-lg max-w-xl mx-auto mb-10">
          Whether you are dreaming of a private safari, an Antarctic expedition, or a multi-generational European immersion, we are here to make it extraordinary.
        </p>
        <Link
          href="/book"
          className="inline-block bg-bta-gold text-white font-['Playfair_Display',Georgia,serif] tracking-widest uppercase text-sm px-10 py-4 hover:bg-bta-gold-dark transition-colors duration-200"
        >
          Start Planning
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#384959] text-white/70 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed font-light">
                Creating memories one destination at a time.
              </p>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Explore</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.explore.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Company</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.company.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Contact</p>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a href={`tel:${footer.contact.phone}`} className="hover:text-[#BFAF8A] transition-colors">
                    {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${footer.contact.email}`} className="hover:text-[#BFAF8A] transition-colors">
                    {footer.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>{footer.copyright}</p>
            <div className="flex gap-6">
              {footer.legal.map((l: { label: string; href: string }, i: number) => (
                <Link key={i} href={l.href} className="hover:text-[#BFAF8A] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
