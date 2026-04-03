/**
 * PartnerDirectory — /cruises/partners
 *
 * Photo-forward white-label co-branded partner directory.
 * Cards use full-bleed photography with name/tagline overlay (bottom gradient).
 * Design references: philanthropic-initiatives page card grid pattern.
 *
 * BTA brand: Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfaf8a, Aegean Blue #384959, Linen White #faf9f6.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ── Partner data with curated Unsplash photos ─────────────────────────────────

const CRUISE_PARTNERS = [
  {
    name: "Viking River Cruises",
    tagline: "Specialised luxury river travel",
    category: "River",
    link: "https://www.vikingrivercruises.com/myagent/travelbta1",
    photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    note: "Direct Co-Branded Site",
  },
  {
    name: "Viking Ocean Cruises",
    tagline: "Small-ship ocean voyages",
    category: "Ocean",
    link: "https://www.vikingcruises.com/oceans/myagent/travelbta1",
    photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
    note: "Direct Co-Branded Site",
  },
  {
    name: "Viking Expedition Cruises",
    tagline: "Remote destination & polar exploration",
    category: "Expedition",
    link: "https://www.vikingcruises.com/expeditions/myagent/travelbta1",
    photo: "https://images.unsplash.com/photo-1551244072-5d12893278bc?auto=format&fit=crop&w=800&q=80",
    note: "Direct Co-Branded Site",
  },
  {
    name: "Uniworld Boutique River Cruises",
    tagline: "High-end boutique river experiences",
    category: "River",
    link: "https://travelbta1.uniworld.com",
    photo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    note: "Direct Co-Branded Site",
  },
  {
    name: "Regent Seven Seas Cruises",
    tagline: "All-inclusive ultra-luxury voyages",
    category: "Luxury Ocean",
    link: "https://www.rssc.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Explora Journeys",
    tagline: "Modern luxury ocean travel",
    category: "Luxury Ocean",
    link: "https://explorajourneys.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Silversea Cruises",
    tagline: "Luxury expedition & classic ocean travel",
    category: "Luxury Ocean",
    link: "https://www.silversea.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Oceania Cruises",
    tagline: "Culinary-focused premium travel",
    category: "Premium Ocean",
    link: "https://www.oceaniacruises.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Atlas Ocean Voyages",
    tagline: "Intimate, expedition-style luxury",
    category: "Expedition",
    link: "https://atlasoceanvoyages.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Riverside Luxury Cruises",
    tagline: "Premium European river travel",
    category: "River",
    link: "https://inspires.to/riverside/copilot",
    photo: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
    note: "Interactive Experience",
  },
  {
    name: "Norwegian Cruise Line",
    tagline: "Contemporary ocean cruising",
    category: "Ocean",
    link: "https://www.ncl.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "UnCruise Adventures",
    tagline: "Small-ship boutique expeditions",
    category: "Expedition",
    link: "https://uncruise.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
];

const LAND_PARTNERS = [
  {
    name: "Tauck",
    tagline: "Standard-setting guided land & river tours",
    category: "Guided Land",
    link: "https://www.tauck.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Tauck Roam",
    tagline: "Active and multi-generational travel",
    category: "Active & Family",
    link: "https://www.tauck.com/roam?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Lindblad Expeditions",
    tagline: "Nature and science-focused exploration",
    category: "Expedition",
    link: "https://www.expeditions.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Big Five Tours & Expeditions",
    tagline: "High-touch, sustainable land travel",
    category: "Safari & Land",
    link: "https://bigfive.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
  },
  {
    name: "Villas of Distinction",
    tagline: "Curated global villa portfolio",
    category: "Private Residences",
    link: "https://www.villasofdistinction.com?insider=zq18x-boutique-travel-advisors",
    photo: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    note: "All Inquiries Route to BTA",
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
    badge: "Interactive",
  },
  {
    name: "Hurtigruten: The Coastal Express",
    tagline: "Classic Norwegian Voyage",
    category: "Expedition",
    link: "https://inspires.to/experiences/original-voyage-the-coastal-express-classic-norwegian-cruise-q7okj7",
    photo: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    badge: "Immersive",
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
    name: "Riverside Cruises: Up to 18% Off",
    tagline: "Luxury with rewards — European river cruises",
    category: "River",
    link: "https://inspires.to/experiences/luxury-with-rewards-up-to-18-off-european-river-cruises-xw4klq",
    photo: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
    badge: "Offer",
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
    name: "HX Insights: Why Travel with Hurtigruten",
    tagline: "Strategic reasons to choose HX Expeditions",
    category: "Expedition",
    link: "https://inspires.to/experiences/why-travel-with-hx-m5gj4",
    photo: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    badge: "Guide",
  },
];

// ── Photo card component (philanthropic-initiatives style) ────────────────────

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

      {/* Gradient overlay — always visible at bottom, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

      {/* Category badge — top left */}
      <div className="absolute top-4 left-4">
        <span
          className="inline-block bg-[#bfaf8a] text-white text-[9px] tracking-[0.25em] uppercase px-2.5 py-1"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {badge ?? category}
        </span>
      </div>

      {/* Text overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10">
        <h3
          className="text-white text-lg font-light leading-snug mb-1 group-hover:text-[#bfaf8a] transition-colors duration-300"
          style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif" }}
        >
          {name}
        </h3>
        <p
          className="text-white/70 text-xs leading-relaxed mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {tagline}
        </p>
        {note && (
          <p
            className="text-[#bfaf8a]/80 text-[10px] tracking-[0.15em] uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ✦ {note}
          </p>
        )}
        {/* Arrow CTA — slides in on hover */}
        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-6 h-px bg-[#bfaf8a]" />
          <span
            className="text-[#bfaf8a] text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
        className={`text-xs tracking-[0.3em] uppercase mb-4 ${light ? "text-[#bfaf8a]" : "text-[#bfaf8a]"}`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
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

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury cruise ship at sea"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/90 via-[#2f2f2f]/30 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/cruises"
              className="text-white/55 text-xs tracking-[0.2em] uppercase hover:text-[#bfaf8a] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Cruises
            </Link>
            <span className="text-white/35 text-xs">›</span>
            <span
              className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Partner Directory
            </span>
          </div>

          <p
            className="text-[#bfaf8a] mb-3"
            style={{ fontFamily: "'Allura', cursive", fontSize: "1.8rem" }}
          >
            Every Link Leads Back to BTA
          </p>
          <h1 className="font-display text-white text-5xl md:text-7xl font-light leading-none mb-6">
            Our Partner Directory
          </h1>
          <p
            className="text-white/70 text-xl max-w-xl leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every co-branded platform and interactive experience — pre-configured so all enquiries route directly to Boutique Travel Advisors.
          </p>
        </div>
      </section>

      {/* ── How It Works — Aegean Blue band ───────────────────────────────── */}
      <section className="bg-[#384959] py-14">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Browse & Explore",
                body: "Clients browse any partner site with live pricing, itineraries, and full booking functionality.",
              },
              {
                num: "02",
                title: "All Leads Route to BTA",
                body: "Every enquiry form, phone number, and CTA is configured to route directly to Boutique Travel Advisors.",
              },
              {
                num: "03",
                title: "Approach Guide Experiences",
                body: "Immersive digital experiences on inspires.to — designed to inspire, with a direct CTA back to BTA.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <span
                  className="text-[#bfaf8a]/35 text-3xl font-light flex-shrink-0 leading-none mt-0.5"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-white text-lg font-light mb-2">{item.title}</h3>
                  <p
                    className="text-white/55 text-sm leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
            eyebrow="Co-Branded Partner Platforms"
            title="Cruise Collections"
            subtitle="Twelve co-branded cruise partner sites — from ultra-luxury ocean liners to intimate river ships and polar expeditions."
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
            subtitle="Guided land journeys, African safaris, and curated villa stays — all co-branded and routing to BTA."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LAND_PARTNERS.map((p) => (
              <PhotoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach Guide Experiences ────────────────────────────────────── */}
      <section className="bg-[#384959] py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Approach Guides · inspires.to"
            title="Curated Experiences"
            subtitle="Immersive interactive experiences — designed to inspire. Every CTA routes directly to BTA for booking."
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
