/**
 * PremiumOcean — /cruises/premium-ocean
 *
 * Premium Ocean Cruises sub-page featuring:
 * Viking Ocean, Oceania Cruises, Azamara, Virgin Voyages
 *
 * Design: BTA brand guide — Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfaf8a, Aegean Blue #384959, Linen White #faf9f6.
 *
 * Images: Each card shows a destination or scene that matches the cruise line's identity:
 *   Viking Ocean → Scandinavian fjord / Nordic landscape
 *   Oceania → Mediterranean port / culinary destination
 *   Azamara → Historic European port town at dusk
 *   Virgin Voyages → Modern boutique ship / vibrant destination
 *   Hero → Elegant ocean voyage at golden hour
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
    // Norwegian fjords — calm, dramatic Scandinavian scenery matching Viking's design ethos
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=80",
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
    // Santorini / Greek islands — iconic Oceania Mediterranean destination
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=80",
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
    // Dubrovnik / historic Mediterranean port at dusk — Azamara's overnight port stays
    image: "https://images.unsplash.com/photo-1555990793-da11153b2473?auto=format&fit=crop&w=1400&q=80",
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
    // Vibrant Caribbean island destination — Virgin Voyages' primary sailing region
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
    link: "https://www.virginvoyages.com",
    linkLabel: "Explore Virgin Voyages",
    imageRight: true,
  },
];

export default function PremiumOcean() {
  return (
    <PageLayout>

      {/* ── Hero — elegant ocean voyage at golden hour ─────────────────────── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=80"
          alt="Premium ocean cruise ship sailing at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/90 via-[#2f2f2f]/50 to-[#2f2f2f]/15" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-20">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/cruises" className="text-white/60 text-xs tracking-[0.2em] uppercase hover:text-[#bfaf8a] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cruises
            </Link>
            <span className="text-white/40 text-xs">›</span>
            <span className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Premium Ocean
            </span>
          </div>

          <p className="text-[#bfaf8a] mb-3" style={{ fontFamily: "'Allura', cursive", fontSize: "1.6rem" }}>
            Destination-Driven Voyages
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-none mb-6">
            Premium Ocean Cruises
          </h1>
          <p className="text-white/85 text-xl max-w-2xl leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The perfect balance of premium value and luxury experience — intimate ships, culinary excellence, and deep destination immersion at a compelling price point.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfaf8a] text-white px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#bfaf8a] transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Start Planning
            <span className="text-base not-italic">→</span>
          </Link>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#bfaf8a]" />
              <span className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The Sweet Spot
              </span>
            </div>
            <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-6">
              Premium Without Compromise
            </h2>
            <p className="text-[#2f2f2f]/75 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Premium ocean cruising occupies the sweet spot between mainstream and ultra-luxury — offering smaller ships, superior dining, and a more sophisticated atmosphere without the all-inclusive price tag of the top tier. These lines attract discerning travelers who prioritise destination depth, culinary quality, and genuine service over glitzy entertainment.
            </p>
            <p className="text-[#2f2f2f]/65 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              BTA's Virtuoso membership unlocks exclusive amenities on every premium ocean voyage — shipboard credits, cabin upgrades when available, specialty dining, and dedicated onboard hosts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cruise Line Sections ──────────────────────────────────────────── */}
      {CRUISE_LINES.map((line, index) => (
        <section key={line.id} className={index % 2 === 0 ? "bg-white" : "bg-[#faf9f6]"}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`relative overflow-hidden ${line.imageRight ? "lg:order-2" : "lg:order-1"}`} style={{ minHeight: "540px" }}>
                <img src={line.image} alt={line.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-8 left-8">
                  <span className="bg-[#bfaf8a]/90 text-white text-xs tracking-[0.25em] uppercase px-4 py-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {line.eyebrow}
                  </span>
                </div>
              </div>

              <div className={`flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-20 ${line.imageRight ? "lg:order-1" : "lg:order-2"}`}>
                <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-2">
                  {line.name}
                </h2>
                <p className="text-[#bfaf8a] text-lg mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                  {line.tagline}
                </p>
                <div className="w-12 h-px bg-[#bfaf8a] mb-6" />
                <p className="text-[#2f2f2f]/75 text-base leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {line.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {line.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[#2f2f2f]/70 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <span className="text-[#bfaf8a] mt-0.5 flex-shrink-0">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="border-l-2 border-[#bfaf8a]/40 pl-4 mb-8">
                  <p className="text-[#384959]/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                    <span className="text-[#bfaf8a] not-italic font-medium">Culinary: </span>
                    {line.culinary}
                  </p>
                </div>
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300 self-start"
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
