/**
 * About Page
 * Route: /about
 *
 * Design Philosophy: Luxury, Elevated, Modern, Sophisticated
 * Colors: Champagne Gold (#BFAF8A), Aegean Blue (#384959), Warm Stone (#faf9f6)
 * Typography: Playfair Display (headings + body), Instrument Serif (titles), Allura (script accents)
 *
 * Layout:
 *  1. Hero — full-width image with overlay headline
 *  2. Company Overview — centered copy with quote
 *  3. Who We Are / What We Do / What We Believe — tabbed section
 *  4. Founders — Janet & Angie in the same photo grid format as advisors
 *  5. Advisors — BTA inhouse advisors grid
 *  6. Independent Advisors & Affiliates — affiliate advisors grid
 *  7. Hotel Specialists — new section with placeholder photos
 *  8. Mission — dark aegean band
 *  9. CTA — Start Planning
 *
 * WHY: All team sections use a consistent photo grid so every person
 * is presented with equal visual weight. Section descriptions are
 * consumer-facing and polished.
 */

import { useState } from "react";
import { Link } from "wouter";
import { footer } from "@/content/homepage";
import { aboutData } from "@/content/about";

/* ── Reusable advisor card ── */
function AdvisorCard({
  name,
  image,
  subtitle,
  placeholder = false,
}: {
  name: string;
  image: string;
  subtitle?: string;
  placeholder?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Square photo — fixed 240×240px equivalent via aspect-square */}
      <div className="w-full aspect-square overflow-hidden mb-3 bg-[#edeae4]">
        {placeholder ? (
          /* Elegant placeholder when no photo is available yet */
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-bta-gold/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
          />
        )}
      </div>
      <p className="font-['Playfair_Display',Georgia,serif] tracking-widest text-xs uppercase text-bta-aegean leading-snug">
        {name}
      </p>
      {subtitle && (
        <p className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold text-xs mt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── Section header ── */
function SectionHeader({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="text-center mb-12 max-w-2xl mx-auto">
      <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic tracking-[0.25em] text-sm uppercase mb-2">
        {eyebrow}
      </p>
      <h2 className="font-[Playfair_Display,serif] bta-h2 text-bta-aegean uppercase tracking-widest mb-5">
        {heading}
      </h2>
      <p className="text-bta-charcoal text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("who-we-are");
  const activeTabContent = aboutData.tabs.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-bta-stone font-['Playfair_Display',Georgia,serif]">

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
          <h1 className="font-[Playfair_Display,serif] text-4xl md:text-6xl text-white uppercase tracking-widest">
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
          <h2 className="font-[Playfair_Display,serif] text-3xl md:text-4xl text-bta-aegean uppercase tracking-widest mb-10">
            {aboutData.overview.headline}
          </h2>
          <div className="space-y-5 text-bta-charcoal text-lg leading-relaxed text-left">
            {aboutData.overview.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <blockquote className="mt-14 border-l-2 border-bta-gold pl-6 text-left">
            <p className="font-['Playfair_Display',Georgia,serif] italic text-xl md:text-2xl text-bta-aegean leading-relaxed">
              "{aboutData.overview.quote}"
            </p>
            <footer className="mt-3 text-bta-gold tracking-widest text-sm uppercase font-['Playfair_Display',Georgia,serif]">
             . {aboutData.overview.quoteAuthor}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 3. TABS ── */}
      <section className="bg-bta-stone py-20 px-6">
        <div className="max-w-4xl mx-auto">
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
          {activeTabContent && (
            <p className="text-bta-charcoal text-lg leading-relaxed max-w-2xl">
              {activeTabContent.content}
            </p>
          )}
        </div>
      </section>

      {/* ── 4. FOUNDERS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Leadership"
            heading="Founders"
            description="Guided by a clear vision, our founders bring together innovation, relationships, and a deep understanding of luxury travel to shape every experience we design."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {aboutData.cofounders.map((person) => (
              <AdvisorCard
                key={person.name}
                name={person.name}
                image={person.imageUrl}
                subtitle={person.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ADVISORS ── */}
      <section className="bg-bta-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Team"
            heading="Advisors"
            description="Our advisors craft thoughtful, personalized journeys, combining global expertise with trusted partnerships to ensure every detail feels seamless."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {([
              { name: "Bri Crowder", image: "https://travelbta.com/wp-content/uploads/2022/12/Bri-Crowder-About.jpg" },
              { name: "Kim Parizek", image: "/images/advisor-kim-parizek.jpg" },
              { name: "Jessica Barkley", image: "https://travelbta.com/wp-content/uploads/2025/02/unnamed-17-e1755721947975.jpg" },
              { name: "Cristina Medeiros", image: "https://travelbta.com/wp-content/uploads/2026/01/cris.jpg" },
              { name: "Justin Lintz", image: "https://travelbta.com/wp-content/uploads/2026/03/IMG_5590-1024x768.jpeg" },
              { name: "Laura Cosme", image: "https://travelbta.com/wp-content/uploads/2026/03/unnamed-10-1024x683.webp" },
              { name: "Rose Topisian", image: "https://travelbta.com/wp-content/uploads/2026/02/3.jpg" },
              { name: "Sara Galarraga", image: "", placeholder: true },
            ] as { name: string; image: string; placeholder?: boolean }[]).map((a) => (
              <AdvisorCard key={a.name} name={a.name} image={a.image} placeholder={a.placeholder} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INDEPENDENT ADVISORS & AFFILIATES ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Extended Network"
            heading="Independent Advisors & Affiliates"
            description="A curated network of independent travel experts, each bringing their own perspective and specialty, all supported by the strength and standards of BTA."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {([
              { name: "Julie Rose", image: "https://travelbta.com/wp-content/uploads/2023/02/Julie-Rose-Photo-resized.jpg" },
              { name: "Rebecca Hogan", image: "https://travelbta.com/wp-content/uploads/2026/03/IMG_0181-766x1024.jpeg" },
              { name: "Autumn Garduno", image: "https://travelbta.com/wp-content/uploads/2024/04/unnamed-13-3-1.jpg" },
              { name: "Becca Samuels", image: "https://travelbta.com/wp-content/uploads/2024/08/unnamed-1.jpg" },
              { name: "Tracey Davis", image: "/images/advisor-tracey-davis.jpg" },
              { name: "Kathleen Smith", image: "https://travelbta.com/wp-content/uploads/2022/12/Kathleen-Profile-resized.jpg" },
              { name: "Carol Fogerty", image: "https://travelbta.com/wp-content/uploads/2025/05/f2a52e31-59fe-4b31-8793-0a1fdda00163_IMG_1584__3_-1-scaled-e1747425399928.jpg" },
              { name: "Julie Plummer", image: "/images/advisor-julie-plummer.jpg" },
              { name: "Baylee Shapiro", image: "https://travelbta.com/wp-content/uploads/2025/07/009A8159-scaled.jpeg" },
              { name: "Danitza & Esteban Villanueva", image: "https://travelbta.com/wp-content/uploads/2025/09/Danitza-and-Esteban-Villaneuva-at-The-Tower-Birdge-e1757596376865.jpg" },
              { name: "Chloe Cottingham", image: "https://travelbta.com/wp-content/uploads/2022/12/Chloe-Cottingham-About.jpg" },
              { name: "Camila Dominguez", image: "https://travelbta.com/wp-content/uploads/2025/02/IMG_5029-2-scaled.jpg" },
              { name: "Malou Sarmiento", image: "https://travelbta.com/wp-content/uploads/2025/08/Screenshot-2025-08-19-at-9.38.30-PM.png" },
            ] as { name: string; image: string }[]).map((a) => (
              <AdvisorCard key={a.name} name={a.name} image={a.image} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HOTEL SPECIALISTS ── */}
      {/* WHY: A dedicated section for our hotel specialist partners — well-traveled
           advisors with deep luxury hotel knowledge. Photos are placeholders until
           provided by each specialist. */}
      <section className="bg-bta-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Specialist Partners"
            heading="Hotel Specialists"
            description="Our hotel specialists are well-traveled advisors with deep knowledge of the world's leading luxury hotels, offering thoughtful guidance and trusted recommendations for exceptional stays worldwide."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {([
              { name: "Kelly Reed", subtitle: "Petit Passeport", image: "", placeholder: true },
              { name: "Edward Leos", subtitle: "The Hotel Guide", image: "", placeholder: true },
              { name: "Michelle Halpern", subtitle: "Live Like It's the Weekend", image: "", placeholder: true },
              { name: "Roxane Stritt", subtitle: "The Spa Travel Gal", image: "", placeholder: true },
            ] as { name: string; subtitle: string; image: string; placeholder: boolean }[]).map((a) => (
              <AdvisorCard
                key={a.name}
                name={a.name}
                image={a.image}
                subtitle={a.subtitle}
                placeholder={a.placeholder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. MISSION BAND ── */}
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

      {/* ── 9. CTA ── */}
      <section className="bg-bta-stone py-20 px-6 text-center">
        <p className="text-bta-gold font-['Playfair_Display',Georgia,serif] italic tracking-[0.25em] text-base uppercase mb-4">
          Ready to Begin?
        </p>
        <h2 className="font-[Playfair_Display,serif] text-3xl md:text-4xl text-bta-aegean uppercase tracking-widest mb-6">
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
