// Destinations page BTA top requested destinations for 2026 & 2027
// Brand: #2f2f2f | #faf9f6 | #edeae4 | #384959 | #bfaf8a
// Layout: Full-bleed hero → intro → destination grid with hover reveals → CTA

import PageSEO from "@/components/PageSEO";
import { Link } from "wouter";

const DESTINATIONS = [
  {
    id: "japan",
    name: "Japan",
    region: "Asia",
    year: "2026 & 2027",
    tagline: "Ancient Ritual, Modern Wonder",
    description:
      "From the vermillion gates of Fushimi Inari to the ryokan stillness of Kyoto, Japan rewards those who travel slowly. We curate private tea ceremonies, bullet-train journeys through the countryside, and intimate kaiseki dinners that most visitors never find.",
    highlights: ["Private Kyoto temples", "Ryokan immersions", "Nara & Hakone excursions", "Tokyo culinary deep-dives"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-japan-3uhEejxRvttmX6U6xwyE6E.webp",
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    region: "Central America",
    year: "2026",
    tagline: "Pura Vida, Elevated",
    description:
      "Canopy bridges at dawn, private wildlife guides, and lodge-to-lodge journeys through cloud forest and coastline. Costa Rica is one of the world's great eco-destinations and we know how to experience it without the crowds.",
    highlights: ["Arenal volcano lodges", "Monteverde cloud forest", "Osa Peninsula wildlife", "Private naturalist guides"],
    // Monteverde canopy bridge. lush jungle. wide landscape. royalty-free Unsplash
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/costa-rica-canopy_4fd08f43.jpg",
  },
  {
    id: "portugal",
    name: "Portugal",
    region: "Europe",
    year: "2026 & 2027",
    tagline: "Europe's Most Soulful Corner",
    description:
      "Lisbon's azulejo-tiled hillsides, the Douro Valley's terraced vineyards, and the Alentejo's cork forests and medieval villages. Portugal offers extraordinary depth for those willing to venture beyond the obvious.",
    highlights: ["Lisbon private city tours", "Douro Valley wine estates", "Alentejo agritourism", "Sintra palace access"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-portugal-LKdxuAY6JemfkVCpwwFFyQ.webp",
  },
  {
    id: "italy",
    name: "Italy",
    region: "Europe",
    year: "2026 & 2027",
    tagline: "La Dolce Vita, Without the Queue",
    description:
      "The Amalfi Coast at its most intimate, Tuscany's private wine estates, and Rome's Vatican before the crowds arrive. Our Italy itineraries are built around access to places, people, and experiences that simply cannot be booked online.",
    highlights: ["Amalfi private boat days", "Tuscan villa stays", "Vatican after-hours access", "Trulli of Alberobello"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-italy-Pg7LXDKfqav3zpNAUyCAxi.webp",
  },
  {
    id: "france",
    name: "France",
    region: "Europe",
    year: "2026 & 2027",
    tagline: "Beyond Paris, Into the Soul of France",
    description:
      "Lavender-scented Provence, the Dordogne's prehistoric caves, Bordeaux's grand châteaux, and the Côte d'Azur's quieter coves. France rewards those who travel with intention and with the right connections.",
    highlights: ["Provence lavender season", "Bordeaux château tastings", "Loire Valley châteaux", "Private Paris experiences"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-france-ArBZ8adDWZ4orUxfop7YBn.webp",
  },
  {
    id: "thailand",
    name: "Thailand",
    region: "Southeast Asia",
    year: "2026",
    tagline: "Timeless Grace, Extraordinary Access",
    description:
      "Phang Nga Bay by private longtail, Chiang Mai's temple-studded old city, and the Andaman's quieter islands. Thailand's depth goes far beyond its beaches and we know exactly where to find it.",
    highlights: ["Phang Nga private charter", "Chiang Mai temple immersions", "Northern hill tribe villages", "Koh Yao Noi seclusion"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/thailand-phi-phi_98006b71.jpg",
  },
  {
    id: "vietnam",
    name: "Vietnam",
    region: "Southeast Asia",
    year: "2026 & 2027",
    tagline: "Lantern-Lit, Layered, Unforgettable",
    description:
      "Hoi An's ancient town at dusk, Ha Long Bay on a private junk, and Hanoi's Old Quarter through the eyes of a local guide. Vietnam is a country that reveals itself slowly and generously to those who approach it with curiosity.",
    highlights: ["Hoi An lantern evenings", "Ha Long Bay private junk", "Hanoi Old Quarter walks", "Hue imperial citadel"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-vietnam-ZcVJaQ5MZj94gtVaqmZbW6.webp",
  },
  {
    id: "antarctica",
    name: "Antarctica",
    region: "Polar",
    year: "2026 & 2027",
    tagline: "The Last True Wilderness",
    description:
      "Fewer than 50,000 people visit Antarctica each year. We work with the world's finest expedition operators to place our clients on the right ship, in the right season, with the right naturalists for a journey that redefines perspective.",
    highlights: ["Zodiac landings on ice", "Penguin colony encounters", "Iceberg alley navigation", "Polar plunge experiences"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-antarctica-hFRTfhtDnXn2vykPRwRfAY.webp",
  },
  {
    id: "botswana",
    name: "Botswana",
    region: "Africa",
    year: "2026 & 2027",
    tagline: "Africa's Most Exclusive Safari",
    description:
      "The Okavango Delta is one of the world's great natural wonders a vast inland sea that floods each year, drawing extraordinary concentrations of wildlife. Botswana's low-volume, high-value model means your experience is always intimate.",
    highlights: ["Okavango mokoro safaris", "Chobe elephant herds", "Moremi Game Reserve", "Private island camps"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-botswana-RFwWXWsUi6sRMje3SGrMV3.webp",
  },
  {
    id: "tanzania",
    name: "Tanzania",
    region: "Africa",
    year: "2026 & 2027",
    tagline: "The Great Migration & Beyond",
    description:
      "Witness the Serengeti's great wildebeest migration, climb Kilimanjaro's slopes at dawn, and end your journey on Zanzibar's spice-scented shores. Tanzania is Africa's most complete safari destination and we know every corner of it.",
    highlights: ["Serengeti migration timing", "Ngorongoro Crater drives", "Zanzibar beach extension", "Kilimanjaro approach treks"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-tanzania-UuTu4hDwAZf7E2P3oPTBH6.webp",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    region: "South Pacific",
    year: "2026 & 2027",
    tagline: "Remote Lodges, Fiords & Vineyard Escapes",
    description:
      "New Zealand rewards those who venture beyond the obvious. Helicopter landings on remote glaciers, intimate lodge stays above Lake Wakatipu, private cruises through Milford Sound's cathedral walls of rock, and long lunches among Marlborough's world-renowned sauvignon blanc vines. This is the country at its most unhurried and extraordinary.",
    highlights: ["Private helicopter over Milford Sound", "Remote lodge stays — Fiordland & Queenstown", "Marlborough wine country cellar tours", "Glacier landings on the Southern Alps"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/nz-milford-sound-fiord_2e13df32.jpg",
  },
];

export default function Destinations() {
  return (
    <div
className="min-h-screen" style={{ backgroundColor: "#faf9f6" }}>
      {/* Hero */}
      <section
        className="relative h-[70vh] min-h-[500px] flex items-end"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/dest-tanzania-UuTu4hDwAZf7E2P3oPTBH6.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
    >
      <PageSEO
        title="Destinations | Boutique Travel Advisors"
        description="Explore BTA's curated destination portfolio — Europe, Asia, the Americas, Africa, and beyond. Every journey is designed with insider access and Virtuoso benefits."
        path="/destinations"
      />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(47,47,47,0.85) 0%, rgba(47,47,47,0.3) 50%, rgba(47,47,47,0.15) 100%)" }}
        />
        <div className="relative z-10 w-full px-8 md:px-16 pb-16">
          {/* Breadcrumb. white over photo, never Champagne Gold on images */}
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            Destinations
          </p>
          {/* Allura script accent. white on photo; Champagne Gold only on plain backgrounds */}
          <p className="text-2xl md:text-3xl mb-2" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Allura', cursive" }}>
            Where Will You Go Next?
          </p>
          {/* H1: Instrument Serif ALL CAPS white on hero photo. Champagne Gold only on plain backgrounds */}
          <h1 className="text-5xl md:text-7xl mb-6 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, color: "#ffffff", letterSpacing: "0.06em", lineHeight: 1.1 , textTransform: "uppercase" }}>
            Destinations
          </h1>
          <p className="text-white/80 max-w-xl text-base leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
            Our most requested destinations for 2026 and 2027 each one chosen for its depth, its beauty, and the extraordinary experiences only a trusted advisor can unlock.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-8 md:px-16 max-w-4xl mx-auto text-center">
        <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: "#bfaf8a" }} />
        <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "#bfaf8a", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}>
          Curated for 2026 &amp; 2027
        </p>
        {/* H2 subheading: Playfair Display SemiBold Italic, NOT caps. matches Figma */}
        <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#384959", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase", fontWeight: 400 }}>
          The World, Thoughtfully Edited
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#2f2f2f", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: "1.05rem" }}>
          These are the destinations our advisors are most excited about right now — places where we have deep relationships, insider access, and the knowledge to design a journey that goes far beyond what any booking platform can offer. Each destination supports local communities and charitable causes that matter.
        </p>
      </section>

      {/* Destination Grid */}
      <section className="pb-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} featured={index === 0} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: "#384959" }}>
        {/* Allura script accent for CTA eyebrow */}
        <p className="text-2xl mb-3" style={{ color: "#bfaf8a", fontFamily: "'Allura', cursive" }}>
          Ready to Begin?
        </p>
        {/* H1: Instrument Serif ALL CAPS Champagne Gold */}
        <h2 className="text-3xl md:text-4xl mb-6 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, color: "#faf9f6", letterSpacing: "0.06em" , textTransform: "uppercase" }}>
          Let's Design Your Journey
        </h2>
        <p className="text-white/70 max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: "1.05rem" }}>
          Every destination above is one we know intimately. Tell us where you want to go and we'll craft an itinerary that exceeds every expectation.
        </p>
        <Link href="/contact-us">
          <button
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "#bfaf8a", color: "#faf9f6", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", letterSpacing: "0.15em" , textTransform: "uppercase" }}
          >
            Start Planning
          </button>
        </Link>
      </section>
    </div>
  );
}

function DestinationCard({ dest, featured }: { dest: typeof DESTINATIONS[0]; featured: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden ${featured ? "md:col-span-2" : ""}`}
      style={{ backgroundColor: "#edeae4" }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-[480px]" : "h-[320px]"}`}>
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: "linear-gradient(to top, rgba(47,47,47,0.75) 0%, rgba(47,47,47,0.1) 60%, transparent 100%)" }}
        />
        {/* Year badge */}
        <div
          className="absolute top-6 right-6 px-3 py-1 text-xs tracking-[0.15em] uppercase"
          style={{ backgroundColor: "#bfaf8a", color: "#faf9f6", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
        >
          {dest.year}
        </div>
        {/* Region */}
        <p
          className="absolute top-6 left-6 text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
        >
          {dest.region}
        </p>
        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          {/* Allura script for tagline. white on photo overlay; Champagne Gold only on plain backgrounds */}
          <p className="text-xl mb-1" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Allura', cursive" }}>
            {dest.tagline}
          </p>
          {/* H3 card title: Instrument Serif ALL CAPS, white on dark overlay */}
          <h3 className="text-3xl uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, color: "#faf9f6", letterSpacing: "0.06em" , textTransform: "uppercase" }}>
            {dest.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-base leading-relaxed mb-6" style={{ color: "#2f2f2f", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: "1rem" }}>
          {dest.description}
        </p>
        {/* Highlights */}
        <div className="mb-6">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#bfaf8a", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}>
            What We Curate
          </p>
          <div className="grid grid-cols-2 gap-2">
            {dest.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#bfaf8a" }} />
                <span className="text-sm" style={{ color: "#2f2f2f", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
        <Link href="/contact-us">
          <button
            className="text-xs tracking-[0.2em] uppercase border px-6 py-3 transition-all duration-300 hover:opacity-70"
            style={{ borderColor: "#384959", color: "#384959", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
          >
            Plan This Journey
          </button>
        </Link>
      </div>
    </div>
  );
}
