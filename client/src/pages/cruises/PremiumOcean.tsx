/**
 * PremiumOcean — /cruises/premium-ocean
 *
 * Premium Ocean Cruises sub-page featuring:
 * Viking Ocean, Oceania Cruises, Azamara, Virgin Voyages
 *
 * Design: BTA brand guide — Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfa88a, Aegean Blue #384959, Linen White #faf0f6.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

const CRUISE_LINES = [
  {
    id: "viking",
    name: "Viking Ocean Cruises",
    tagline: "Exploring the World in Comfort",
    eyebrow: "Premium–Luxury Crossover",
    description:
      "Viking Ocean occupies a unique position — premium pricing with a luxury feel. Small ships carry just 930 guests, all in veranda staterooms. The Scandinavian design philosophy means clean lines, light-filled spaces, and a calm, sophisticated atmosphere. Every fare includes shore excursions in every port, specialty dining, Wi-Fi, and a beer and wine package with lunch and dinner. Viking's culinary program celebrates destination cuisine — the World Café features live cooking stations inspired by each port of call.",
    highlights: [
      "All staterooms with private verandas — no inside cabins",
      "Shore excursions included in every port",
      "Specialty dining, Wi-Fi & beer/wine with meals included",
      "No children under 18 — exclusively adult voyages",
      "Scandinavian design — calm, uncluttered atmosphere",
    ],
    culinary:
      "The World Café features live cooking stations with destination-inspired cuisine. Manfredi's Italian Kitchen and The Chef's Table offer specialty dining. Viking's culinary enrichment includes cooking demonstrations and market visits.",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.vikingcruises.com/oceans/myagent/travelbta1",
    linkLabel: "Explore Viking Ocean",
    imageRight: false,
  },
  {
    id: "oceania",
    name: "Oceania Cruises",
    tagline: "The Finest Cuisine at Sea",
    eyebrow: "Culinary-Focused Premium",
    description:
      "Oceania is the undisputed leader in culinary cruising at the premium level. The line's partnership with the Culinary Institute of America (CIA) elevates every dining experience — from the flagship Grand Dining Room to six specialty restaurants on larger ships. The Culinary Center offers hands-on cooking classes with professional instruction. Ships carry between 684 and 1,250 guests, striking the ideal balance between intimacy and variety. As a Virtuoso partner, BTA clients receive exclusive amenities on every Oceania voyage.",
    highlights: [
      "Culinary Institute of America partnership — CIA-trained chefs",
      "Up to 6 specialty restaurants on larger ships",
      "The Culinary Center — hands-on cooking classes at sea",
      "Destination-focused itineraries with longer port stays",
      "Included shore excursions on select fare categories",
    ],
    culinary:
      "The Culinary Center: a state-of-the-art teaching kitchen offering hands-on classes inspired by each destination. Jacques (French cuisine), Red Ginger (Asian), Ember (steakhouse), and Aquamar Kitchen (healthy) are among the specialty venues.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.oceaniacruises.com?insider=zq18x-boutique-travel-advisors",
    linkLabel: "Explore Oceania Cruises",
    imageRight: true,
  },
  {
    id: "azamara",
    name: "Azamara",
    tagline: "Destination Immersion Cruising",
    eyebrow: "Destination-Focused",
    description:
      "Azamara's philosophy is simple: spend more time in port, less time at sea. The line's intimate ships (under 700 guests) regularly stay overnight or late into the evening in port, giving guests the rare opportunity to experience destinations after the day-trippers have left. AzAmazing Evenings — exclusive cultural events hosted ashore — are a signature feature. Fares include premium beverages, specialty dining, gratuities, and shuttle service in most ports.",
    highlights: [
      "Overnight and late-night port stays — experience destinations after dark",
      "AzAmazing Evenings — exclusive private cultural events ashore",
      "Premium beverages, specialty dining & gratuities included",
      "Ships under 700 guests — intimate atmosphere",
      "Shuttle service included in most ports",
    ],
    culinary:
      "Azamara's culinary enrichment includes destination-inspired menus, local wine and spirits tastings, and cooking demonstrations. Prime C (steakhouse) and Aqualina (Italian) are the signature specialty restaurants.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.azamara.com",
    linkLabel: "Explore Azamara",
    imageRight: false,
  },
  {
    id: "virgin",
    name: "Virgin Voyages",
    tagline: "Brilliant at Sea",
    eyebrow: "Adult-Only Premium",
    description:
      "Virgin Voyages breaks every cruise convention — and that's entirely the point. Adults-only (18+), no buffets, no formal nights, no nickel-and-diming. All 20+ restaurants are included in every fare, as are fitness classes, basic WiFi, and gratuities. The ships are designed like boutique hotels, with a nightlife and entertainment program that rivals any land-based resort. The culinary program is led by Michelin-starred and James Beard-nominated chefs, with concepts ranging from a Korean BBQ to a Mexican cantina to a ramen bar.",
    highlights: [
      "All 20+ restaurants included — no cover charges",
      "Adults-only (18+) — no children",
      "Fitness classes, basic WiFi & gratuities included",
      "Michelin-starred culinary partnerships",
      "Boutique hotel design aesthetic throughout",
    ],
    culinary:
      "20+ restaurant concepts by Michelin-starred and James Beard-nominated chefs: Gunbae (Korean BBQ), Pink Agave (Mexican), Razzle Dazzle (vegetarian-forward), Noodle Around (ramen), The Wake (steakhouse), and more — all included.",
    image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.virginvoyages.com",
    linkLabel: "Explore Virgin Voyages",
    imageRight: true,
  },
];

export default function PremiumOcean() {
  return (
    <PageLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80"
          alt="Premium ocean cruise ship at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/25 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-20">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/cruises" className="text-white/60 text-xs tracking-[0.2em] uppercase hover:text-[#bfa88a] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cruises
            </Link>
            <span className="text-white/40 text-xs">›</span>
            <span className="text-[#bfa88a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Premium Ocean
            </span>
          </div>

          <p className="text-[#bfa88a] mb-3" style={{ fontFamily: "'Allura', cursive", fontSize: "1.6rem" }}>
            Destination-Driven Voyages
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-none mb-6">
            Premium Ocean Cruises
          </h1>
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The perfect balance of premium value and luxury experience — intimate ships, culinary excellence, and deep destination immersion at a compelling price point.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfa88a] text-white px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#a8927a] transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Start Planning
            <span className="text-base not-italic">→</span>
          </Link>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf0f6] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#bfa88a]" />
              <span className="text-[#bfa88a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The Sweet Spot
              </span>
            </div>
            <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-6">
              Premium Without Compromise
            </h2>
            <p className="text-[#2F2F2F]/75 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Premium ocean cruising occupies the sweet spot between mainstream and ultra-luxury — offering smaller ships, superior dining, and a more sophisticated atmosphere without the all-inclusive price tag of the top tier. These lines attract discerning travelers who prioritise destination depth, culinary quality, and genuine service over glitzy entertainment.
            </p>
            <p className="text-[#2F2F2F]/65 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              BTA's Virtuoso membership unlocks exclusive amenities on every premium ocean voyage — shipboard credits, cabin upgrades when available, specialty dining, and dedicated onboard hosts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cruise Line Sections ──────────────────────────────────────────── */}
      {CRUISE_LINES.map((line, index) => (
        <section key={line.id} className={index % 2 === 0 ? "bg-white" : "bg-[#faf0f6]"}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`relative overflow-hidden ${line.imageRight ? "lg:order-2" : "lg:order-1"}`} style={{ minHeight: "540px" }}>
                <img src={line.image} alt={line.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-8 left-8">
                  <span className="bg-[#bfa88a]/90 text-white text-xs tracking-[0.25em] uppercase px-4 py-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {line.eyebrow}
                  </span>
                </div>
              </div>

              <div className={`flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-20 ${line.imageRight ? "lg:order-1" : "lg:order-2"}`}>
                <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-2">
                  {line.name}
                </h2>
                <p className="text-[#bfa88a] text-lg mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                  {line.tagline}
                </p>
                <div className="w-12 h-px bg-[#bfa88a] mb-6" />
                <p className="text-[#2F2F2F]/75 text-base leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {line.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {line.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[#2F2F2F]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <span className="text-[#bfa88a] mt-0.5 flex-shrink-0">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="border-l-2 border-[#bfa88a]/40 pl-4 mb-8">
                  <p className="text-[#384959]/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                    <span className="text-[#bfa88a] not-italic font-medium">Culinary: </span>
                    {line.culinary}
                  </p>
                </div>
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-[#bfa88a] text-[#bfa88a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfa88a] hover:text-white transition-all duration-300 self-start"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {line.linkLabel}
                  <span className="text-base not-italic">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

    </PageLayout>
  );
}
