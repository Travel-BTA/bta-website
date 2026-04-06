/**
 * PartnerDirectory. /cruises/partners
 *
 * Client-facing preferred partner directory.
 * Cards use full-bleed photography with name/tagline overlay (bottom gradient).
 *
 * BTA brand: Instrument Serif headings, Playfair Display body,
 * Champagne Gold #bfaf8a, Aegean Blue #384959, Linen White #faf9f6.
 */

import PageSEO from "@/components/PageSEO";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ── Partner data ──────────────────────────────────────────────────────────────

const CRUISE_PARTNERS = [
  {
    name: "Viking River Cruises",
    tagline: "Specialised luxury river travel",
    category: "River",
    link: "https://www.vikingrivercruises.com/myagent/travelbta1",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/viking-river-prague_9cb02fd7.webp",
    note: "BTA Preferred Partner",
  },
  {
    name: "Viking Ocean Cruises",
    tagline: "Small-ship ocean voyages",
    category: "Ocean",
    link: "https://www.vikingcruises.com/oceans/myagent/travelbta1",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/viking-ocean-ship_07cf648e.webp",
    note: "BTA Preferred Partner",
  },
  {
    name: "Viking Expedition Cruises",
    tagline: "Remote destination & polar exploration",
    category: "Expedition",
    link: "https://www.vikingcruises.com/expeditions/myagent/travelbta1",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/viking-expedition_9a4451bc.webp",
    note: "BTA Preferred Partner",
  },
  {
    name: "Uniworld Boutique River Cruises",
    tagline: "High-end boutique river experiences",
    category: "River",
    link: "https://travelbta1.uniworld.com",
    photo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "Regent Seven Seas Cruises",
    tagline: "All-inclusive ultra-luxury voyages",
    category: "Luxury Ocean",
    link: "https://www.rssc.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "Explora Journeys",
    tagline: "Modern luxury ocean travel",
    category: "Luxury Ocean",
    link: "https://explorajourneys.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/explora-monaco_96651138.webp",
    note: "BTA Preferred Partner",
  },
  {
    name: "Silversea Cruises",
    tagline: "Luxury expedition & classic ocean travel",
    category: "Luxury Ocean",
    link: "https://www.silversea.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/silversea-glacier_fa736023.webp",
    note: "BTA Preferred Partner",
  },
  {
    name: "Oceania Cruises",
    tagline: "Culinary-focused premium travel",
    category: "Premium Ocean",
    link: "https://www.oceaniacruises.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "Atlas Ocean Voyages",
    tagline: "Intimate, expedition-style luxury",
    category: "Expedition",
    link: "https://atlasoceanvoyages.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/atlas-iceland-waterfall_2c6c108b.webp",
    note: "BTA Preferred Partner",
  },
  {
    name: "Riverside Luxury Cruises",
    tagline: "Premium European river travel",
    category: "River",
    link: "https://inspires.to/riverside/copilot",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/riverside-rhine-symphony_dab3342f.png",
    note: "BTA Preferred Partner",
  },
  {
    name: "Norwegian Cruise Line",
    tagline: "Contemporary ocean cruising",
    category: "Ocean",
    link: "https://www.ncl.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "UnCruise Adventures",
    tagline: "Small-ship boutique expeditions",
    category: "Expedition",
    link: "https://uncruise.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/uncruise-whales_b7899228.webp",
    note: "BTA Preferred Partner",
  },
];

const LAND_PARTNERS = [
  {
    name: "Tauck",
    tagline: "Standard-setting guided land & river tours",
    category: "Guided Land",
    link: "https://www.tauck.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "Tauck Roam",
    tagline: "Active and multi-generational travel",
    category: "Active & Family",
    link: "https://www.tauck.com/roam?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "Lindblad Expeditions",
    tagline: "Nature and science-focused exploration",
    category: "Expedition",
    link: "https://www.expeditions.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg",
    note: "BTA Preferred Partner",
  },
  {
    name: "Big Five Tours & Expeditions",
    tagline: "High-touch, sustainable land travel",
    category: "Safari & Land",
    link: "https://bigfive.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
  {
    name: "Villas of Distinction",
    tagline: "Curated global villa portfolio",
    category: "Private Residences",
    link: "https://www.villasofdistinction.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    note: "BTA Preferred Partner",
  },
];

const EXPERIENCES = [
  {
    name: "Asia Unveiled: Four Seasons Private Jet",
    tagline: "January & March 2026 departures",
    category: "Private Jet",
    link: "https://inspires.to/experiences/asia-unveiled-a-four-seasons-private-jet-experience-january-and-march-2026-departures-wp7xl0",
    photo: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80",
    badge: "Featured",
  },
  {
    name: "AmaWaterways",
    tagline: "A new expression and a deeper connection",
    category: "River",
    link: "https://inspires.to/experiences/amawaterways-a-new-expression-and-a-deeper-connection-xw4kl4",
    photo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    badge: "River",
  },
  {
    name: "Hurtigruten: The Coastal Express",
    tagline: "Classic Norwegian Voyage",
    category: "Expedition",
    link: "https://inspires.to/experiences/original-voyage-the-coastal-express-classic-norwegian-cruise-q7okj7",
    photo: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    badge: "Expedition",
  },
  {
    name: "Tahiti with Paul Gauguin",
    tagline: "Luxury romance and honeymoon travel",
    category: "Romance",
    link: "https://inspires.to/experiences/take-your-sweetie-to-tahiti-jzvlkw",
    photo: "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=800&q=80",
    badge: "Romance",
  },
  {
    name: "G-Adventures",
    tagline: "Curated itineraries for the independent traveller",
    category: "Adventure",
    link: "https://inspires.to/experiences/soloish-adventures-0342d5",
    photo: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
    badge: "Adventure",
  },
  {
    name: "HX Expeditions: Why Travel with Hurtigruten",
    tagline: "Strategic reasons to choose HX Expeditions",
    category: "Expedition",
    link: "https://inspires.to/experiences/why-travel-with-hx-m5gj4",
    photo: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    badge: "Expedition",
  },
];

// ── Photo card component ──────────────────────────────────────────────────────

function PhotoCard({
  name,
  tagline,
  category,
  link,
  photo,
  note,
  badge,
}: {
  name: string;
  tagline: string;
  category: string;
  link: string;
  photo: string;
  note?: string;
  badge?: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden aspect-[4/5] cursor-pointer"
    >
      {/* Photo */}
      <img
        src={photo}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

      {/* Category badge — top left */}
      <div className="absolute top-4 left-4">
        <span
          className="inline-block bg-[#bfaf8a] text-white text-[9px] tracking-[0.25em] uppercase px-2.5 py-1"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {badge ?? category}
        </span>
      </div>

      {/* Text overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10">
        <h3
          className="text-white text-lg font-light leading-snug mb-1 group-hover:text-[#bfaf8a] transition-colors duration-300"
          style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif", fontStyle: "normal", textTransform: "uppercase" }}
        >
          {name}
        </h3>
        <p
          className="text-white/70 text-xs leading-relaxed mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
        >
          {tagline}
        </p>
        {note && (
          <p
            className="text-[#bfaf8a]/80 text-[10px] tracking-[0.15em] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ✦ {note}
          </p>
        )}
        {/* Arrow CTA — slides in on hover */}
        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-6 h-px bg-[#bfaf8a]" />
          <span
            className="text-[#bfaf8a] text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Explore
          </span>
        </div>
      </div>
    </a>
  );
}

// ── Section header ────────────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 text-center">
      <p
        className="text-xs tracking-[0.3em] uppercase mb-4 text-[#bfaf8a]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl md:text-5xl font-light leading-tight mb-4 ${light ? "text-white" : "text-[#384959]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-white/65" : "text-[#2F2F2F]/60"}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className={`w-16 h-px ${light ? "bg-[#bfaf8a]/50" : "bg-[#bfaf8a]/40"}`} />
        <span className="text-[#bfaf8a]">✦</span>
        <div className={`w-16 h-px ${light ? "bg-[#bfaf8a]/50" : "bg-[#bfaf8a]/40"}`} />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PartnerDirectory() {
  return (
    <PageLayout>
      <PageSEO
        title="Our Preferred Partners | Boutique Travel Advisors"
        description="Explore BTA's personally vetted cruise and travel partners — from ultra-luxury ocean liners to intimate river ships, polar expeditions, and guided land journeys."
        path="/cruises/partners"
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/partner-directory-header_c0ae4576.webp"
          alt="Positano, Amalfi Coast"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/90 via-[#2f2f2f]/30 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-20">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/cruises"
              className="text-white/55 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase" }}
            >
              Cruises
            </Link>
            <span className="text-white/35 text-xs">›</span>
            <span
              className="text-white/75 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase" }}
            >
              Preferred Partners
            </span>
          </div>

          <p className="mb-3" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Allura', cursive", fontSize: "1.8rem" }}>
            Explore our world
          </p>
          <h1 className="text-white text-5xl md:text-7xl uppercase leading-tight mb-6" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Our Preferred Partners
          </h1>
          <p className="text-white/70 text-base max-w-xl leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
            Every partner on this page has been personally evaluated by our advisors for service quality, exclusive amenities, and the extraordinary experiences they deliver to our clients.
          </p>
        </div>
      </section>

      {/* ── Why We Partner ────────────────────────────────────────────────── */}
      <section className="bg-[#384959] py-14">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Personally Vetted",
                body: "Every partner has been evaluated by our advisors for service quality, value, and the exclusive benefits they offer BTA clients.",
              },
              {
                num: "02",
                title: "Exclusive Benefits",
                body: "As a Virtuoso agency, we secure amenities not available when booking directly — including onboard credits, upgrades, and priority access.",
              },
              {
                num: "03",
                title: "Expert Guidance",
                body: "Our advisors know these partners intimately. We match you with the right line, ship, and itinerary, then handle every detail from deposit to disembarkation.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <span
                  className="text-[#bfaf8a]/35 text-3xl font-light flex-shrink-0 leading-none mt-0.5"
                  style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase" }}
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-white text-lg font-light mb-2">{item.title}</h3>
                  <p
                    className="text-white/55 text-sm leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cruise Collections ────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Our Preferred Cruise Partners"
            title="Cruise Collections"
            subtitle="From ultra-luxury ocean liners to intimate river ships and polar expeditions — each line personally selected by our advisors."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CRUISE_PARTNERS.map((p) => (
              <PhotoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Land, Expedition & Villas ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Land, Expedition & Private Residences"
            title="Beyond the Ship"
            subtitle="Guided land journeys, African safaris, and curated villa stays — each partner selected for their exceptional standards and exclusive benefits for BTA clients."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LAND_PARTNERS.map((p) => (
              <PhotoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Experiences ──────────────────────────────────────────── */}
      <section className="bg-[#384959] py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Featured Experiences"
            title="Curated Journeys"
            subtitle="Immersive voyages and special departures — handpicked by our advisors and available exclusively through Boutique Travel Advisors."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {EXPERIENCES.map((e) => (
              <PhotoCard key={e.name} {...e} />
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
