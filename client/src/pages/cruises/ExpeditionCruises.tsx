/**
 * ExpeditionCruises. /cruises/expedition
 *
 * Expedition Cruises sub-page featuring:
 * Lindblad Expeditions, Silversea Expeditions, Hurtigruten, Quark Expeditions, Aurora Expeditions
 *
 * Design: BTA brand guide. Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfaf8a, Aegean Blue #384959, Linen White #faf9f6.
 *
 * Images: All images show actual expedition destinations .
 *   Antarctica icebergs, Galápagos wildlife, Norwegian fjords, Alaska glaciers, polar landscapes.
 *   No mainstream cruise ships. No sunny Caribbean beaches for polar/arctic destinations.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

const CRUISE_LINES = [
  {
    id: "lindblad",
    name: "Lindblad Expeditions",
    tagline: "The Pioneer of Expedition Travel",
    eyebrow: "Expedition Leader",
    description:
      "Lindblad Expeditions pioneered expedition cruising and remains the gold standard for nature-focused voyages. Their exclusive partnership with National Geographic places world-class photographers, naturalists, and scientists aboard every voyage. turning every expedition into a living documentary. Small ships (48–148 guests) access remote areas inaccessible to larger vessels, from the Galápagos to Antarctica to the Arctic. The Lindblad-National Geographic Fund supports conservation in every destination visited.",
    highlights: [
      "Exclusive National Geographic partnership. experts on every voyage",
      "Lindblad-National Geographic Fund. conservation on every trip",
      "Ships carry 48–148 guests. access truly remote areas",
      "Galápagos, Antarctica, Arctic, Baja, Alaska & beyond",
      "Undersea specialist & video chronicler on every expedition",
    ],
    culinary:
      "Fresh, locally sourced ingredients wherever possible. The culinary team incorporates destination flavors. fresh-caught seafood in Alaska, local produce in the Galápagos. Cooking demonstrations and local tastings are offered on select voyages.",
    // Galápagos Islands. generated hyper-realistic image: expedition vessel near volcanic island
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/galapagos-cruise_05416f38.png",
    link: "https://www.expeditions.com",
    linkLabel: "Explore Lindblad Expeditions",
    imageRight: false,
  },
  {
    id: "silversea-exp",
    name: "Silversea Expeditions",
    tagline: "Luxury Meets the Ends of the Earth",
    eyebrow: "Ultra-Luxury Expedition",
    description:
      "Silversea Expeditions combines the all-inclusive ultra-luxury of the ocean fleet with purpose-built expedition vessels designed for the world's most remote destinations. The Silver Endeavour. the world's most luxurious expedition ship. carries just 100 guests to Antarctica, the Arctic, and the Galápagos. Expert expedition teams include marine biologists, glaciologists, ornithologists, and historians. Zodiac excursions, kayaking, and polar plunges are standard. All fares are door-to-door inclusive.",
    highlights: [
      "Silver Endeavour. world's most luxurious expedition ship (100 guests)",
      "All-inclusive door-to-door fares",
      "Expert expedition teams: biologists, glaciologists & historians",
      "Zodiac excursions, kayaking & polar plunges included",
      "Antarctica, Arctic, Galápagos & remote Pacific islands",
    ],
    culinary:
      "S.A.L.T. (Sea And Land Taste) culinary program aboard expedition ships. Destination-inspired menus change with every port of call. Butler service in all suites.",
    // Antarctica. generated hyper-realistic image: icebergs and polar seascape
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/antarctica-cruise_42a0bf80.png",
    link: "https://www.silversea.com/expedition-cruises.html",
    linkLabel: "Explore Silversea Expeditions",
    imageRight: true,
  },
  {
    id: "hurtigruten",
    name: "Hurtigruten Expeditions",
    tagline: "The Original Expedition Cruise Line",
    eyebrow: "Norway & Arctic",
    description:
      "Hurtigruten has been sailing the Norwegian coast since 1893. making it the original expedition cruise line. Their hybrid-powered ships sail the iconic Norwegian Coastal Express route year-round, offering the only way to experience the Northern Lights from the sea. Beyond Norway, Hurtigruten's expedition fleet reaches Antarctica, Greenland, Iceland, and the Svalbard archipelago. Expert guides lead daily excursions, and the Science Center aboard each ship brings the expedition to life with real-time data and interactive displays.",
    highlights: [
      "Norwegian Coastal Express. the only way to see Northern Lights at sea",
      "Hybrid-powered ships. reduced environmental impact",
      "Science Center on every ship with real-time expedition data",
      "Antarctica, Greenland, Iceland & Svalbard",
      "Year-round sailings. midnight sun and Northern Lights seasons",
    ],
    culinary:
      "Norwegian cuisine featuring locally sourced ingredients. fresh seafood, Arctic char, and regional specialties. The Lindstrøm restaurant offers fine dining inspired by the destinations. Cooking demonstrations and local food experiences at ports.",
    // Aurora borealis over Norway. generated hyper-realistic image: northern lights at sea
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/aurora-norway-cruise_0cae3f6b.png",
    link: "https://www.hurtigruten.com",
    linkLabel: "Explore Hurtigruten",
    imageRight: false,
  },
  {
    id: "quark",
    name: "Quark Expeditions",
    tagline: "The World Leader in Polar Adventures",
    eyebrow: "Polar Specialist",
    description:
      "Quark Expeditions is the undisputed leader in polar adventure travel. With more than 30 years of polar expertise, they have taken more passengers to Antarctica and the Arctic than any other operator. Their fleet includes purpose-built ice-class vessels ranging from intimate 12-passenger ships to 200-passenger expedition vessels. Expert polar guides. glaciologists, ornithologists, marine biologists, and photographers. lead every excursion. Quark's commitment to responsible polar travel includes active support for polar research and conservation.",
    highlights: [
      "30+ years of polar expertise. more polar passengers than anyone",
      "Fleet ranges from 12 to 200 guests. choose your level of intimacy",
      "Expert polar guides: glaciologists, ornithologists & biologists",
      "Active support for polar research & conservation",
      "Antarctica, Arctic, Greenland & Canadian High Arctic",
    ],
    culinary:
      "Hearty, warming cuisine designed for polar expeditions. Fresh ingredients sourced at ports where possible. The galley team accommodates all dietary requirements. Hot chocolate and warming beverages always available after excursions.",
    // Alaska fjord. generated hyper-realistic image: glaciers and expedition zodiac
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/alaska-fjord-cruise_99e341b2.png",
    link: "https://www.quarkexpeditions.com",
    linkLabel: "Explore Quark Expeditions",
    imageRight: true,
  },
  {
    id: "aurora",
    name: "Aurora Expeditions",
    tagline: "Pioneering Responsible Expedition Travel",
    eyebrow: "Responsible Expedition",
    description:
      "Aurora Expeditions is Australia's leading expedition cruise line, with a passionate commitment to responsible travel and environmental stewardship. Their purpose-built Greg Mortimer and Sylvia Earle carry just 130 guests each, with a 1:10 guide-to-guest ratio ensuring every passenger receives personal attention. Aurora's Citizen Science program allows guests to contribute to real scientific research during their voyage. Destinations span Antarctica, the Arctic, Galápagos, Papua New Guinea, and the remote Pacific.",
    highlights: [
      "1:10 guide-to-guest ratio. personal attention guaranteed",
      "Citizen Science program. contribute to real research",
      "Greg Mortimer & Sylvia Earle. purpose-built expedition ships",
      "Antarctica, Arctic, Galápagos, Papua New Guinea & remote Pacific",
      "B Corp certified. highest standards of environmental stewardship",
    ],
    culinary:
      "Fresh, seasonal ingredients with a focus on sustainability. The culinary team creates destination-inspired menus. Cooking demonstrations and local food experiences are offered on select voyages.",
    // Antarctica (Aurora). generated hyper-realistic image: polar expedition scenery
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/antarctica-cruise_42a0bf80.png",
    link: "https://www.auroraexpeditions.com.au",
    linkLabel: "Explore Aurora Expeditions",
    imageRight: false,
  },
];

// Destination highlights. text only, no emoji (brand standard)
const DESTINATIONS = [
  { name: "Antarctica", desc: "The last great wilderness" },
  { name: "Galápagos", desc: "Darwin's living laboratory" },
  { name: "Arctic & Svalbard", desc: "Polar bears & midnight sun" },
  { name: "Norwegian Fjords", desc: "Northern Lights at sea" },
  { name: "Alaska", desc: "Glaciers & wildlife" },
  { name: "Greenland", desc: "Ancient ice & Inuit culture" },
];

export default function ExpeditionCruises() {
  return (
    <PageLayout>

      {/* ── Hero. Antarctica iceberg scene, strong overlay for text legibility ── */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/antarctica-cruise_42a0bf80.png"
          alt="Expedition ship navigating icy Antarctic waters"
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
              Expedition
            </span>
          </div>

          <p className="text-[#bfaf8a] mb-3" style={{ fontFamily: "'Allura', cursive", fontSize: "1.6rem" }}>
            The Final Frontiers
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-none mb-6">
            Expedition Cruises
          </h1>
          <p className="text-white/85 text-xl max-w-2xl leading-relaxed mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Observe glaciers, exotic islands, fjords, and icebergs accessible only from a Zodiac. accompanied by expert naturalists, scientists, and photographers.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#bfaf8a]" />
                <span className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Expedition Philosophy
                </span>
              </div>
              <h2 className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-6">
                There Is Nothing Quite Like Exploring by Expedition
              </h2>
              <p className="text-[#2f2f2f]/75 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Expedition cruising is defined by access. to places, wildlife, and experiences that simply cannot be reached any other way. Whether you're snorkeling and kayaking in the Galápagos Islands or hiking glaciers and snowshoeing on an Arctic adventure, expect to be genuinely amazed.
              </p>
              <p className="text-[#2f2f2f]/65 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                With a focus on exploration and adventure, expedition cruises are accompanied by expert guides. naturalists, environmentalists, scientists, biologists, historians, photographers, and other trained professionals who transform every sighting into a learning experience.
              </p>
            </div>

            {/* Destination grid. text only, clean and sophisticated */}
            <div className="grid grid-cols-2 gap-4">
              {DESTINATIONS.map((dest) => (
                <div key={dest.name} className="border border-[#bfaf8a]/25 px-6 py-5 hover:border-[#bfaf8a]/60 transition-colors duration-300">
                  <p className="font-display text-[#384959] text-lg mb-1">{dest.name}</p>
                  <p className="text-[#2f2f2f]/55 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
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
