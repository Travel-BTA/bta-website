/**
 * OurPeople. /about/our-people
 *
 * Design language mirrors the Julie Rose advisor page:
 * - max-w-[1440px] mx-auto px-8 lg:px-14 container
 * - FAF0F6 Linen White background, white alternating sections
 * - Allura script eyebrows, Instrument Serif headings
 * - Playfair Display body, bta-eyebrow labels
 * - Gold #bfaf8a accents throughout
 * - 3-column portrait grid (4 on xl), generous gap-10 lg:gap-14 spacing
 * - Uniform 3:4 portrait cards. same size for every advisor
 */

import { useState } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Advisor {
  name: string;
  title?: string;
  photo: string;
  href?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CO_FOUNDERS: Advisor[] = [
  {
    name: "Angie Rice",
    title: "Co-Founder",
    photo: "https://travelbta.com/wp-content/uploads/2021/03/Angie.jpg",
    href: "#",
  },
  {
    name: "Janet Semenova",
    title: "Co-Founder",
    photo: "https://travelbta.com/wp-content/uploads/2021/03/Janet-e1614902028129.jpg",
    href: "#",
  },
];

const INHOUSE_ADVISORS: Advisor[] = [
  { name: "Bri Crowder", photo: "https://travelbta.com/wp-content/uploads/2022/01/Bri-Crowder-About.jpg", href: "#" },
  { name: "Kim Parizek", photo: "https://travelbta.com/wp-content/uploads/2025/08/unnamed-15.jpg", href: "#" },
  { name: "Jessica Barkley", photo: "https://travelbta.com/wp-content/uploads/2025/01/jessica-barkley.jpg", href: "#" },
  { name: "Cristina Medeiros", photo: "https://travelbta.com/wp-content/uploads/2026/01/20231118_125508.jpg", href: "#" },
  { name: "Justin Lintz", photo: "https://travelbta.com/wp-content/uploads/2026/03/IMG_5590.jpg", href: "#" },
  { name: "Laura Cosme", photo: "https://travelbta.com/wp-content/uploads/2026/03/Laura-Cosme.jpg", href: "#" },
  { name: "Rose Topisian", photo: "https://travelbta.com/wp-content/uploads/2026/02/3.jpg", href: "#" },
];

const AFFILIATE_ADVISORS: Advisor[] = [
  { name: "Julie Rose", photo: "https://travelbta.com/wp-content/uploads/2021/07/Julie-Rose-Photo-resized.jpg", href: "/advisors/julie-rose" },
  { name: "Rebecca Hogan", photo: "https://travelbta.com/wp-content/uploads/2026/01/Rebecca-Hogan.jpg", href: "#" },
  { name: "Autumn Garduno", photo: "https://travelbta.com/wp-content/uploads/2024/08/unnamed-13-3-1.jpg", href: "#" },
  { name: "Becca Samuels", photo: "https://travelbta.com/wp-content/uploads/2024/08/unnamed-1.jpg", href: "#" },
  { name: "Tracey Davis", photo: "https://travelbta.com/wp-content/uploads/2024/01/bta-horizontal-photo-2.jpg", href: "#" },
  { name: "Kathleen Smith", photo: "https://travelbta.com/wp-content/uploads/2021/07/Kathleen-Profile-resized.jpg", href: "#" },
  { name: "Carol Fogerty", photo: "https://travelbta.com/wp-content/uploads/2026/01/f2a52e31-59fe-4b31-8793-0a1fdda00163-IMG_1584-3-1-scaled-e1747425399928.jpg", href: "#" },
  { name: "Julie Plummer", photo: "https://travelbta.com/wp-content/uploads/2025/06/Screenshot-2025-06-02-at-7.08.48-AM.jpg", href: "#" },
  { name: "Baylee Shapiro", photo: "https://travelbta.com/wp-content/uploads/2025/01/009A8159-scaled.jpg", href: "#" },
  { name: "Danitza & Esteban Villanueva", photo: "https://travelbta.com/wp-content/uploads/2025/01/Danitza-and-Esteban-Villaneuva-at-The-Tower-Birdge.jpg", href: "#" },
  { name: "Chloe Cottingham", photo: "https://travelbta.com/wp-content/uploads/2022/01/Chloe-Cottingham-About.jpg", href: "#" },
  { name: "Camila Dominguez", photo: "https://travelbta.com/wp-content/uploads/2025/01/IMG_5029-2-scaled.jpg", href: "#" },
  { name: "Malou Sarmiento", photo: "https://travelbta.com/wp-content/uploads/2025/08/Screenshot-2025-08-19-at-9.38.30-PM.jpg", href: "#" },
];

const TRAVEL_COACHES: Advisor[] = [
  { name: "Laura Rahn", photo: "https://travelbta.com/wp-content/uploads/2025/04/Laura-Rahn-1-1.jpg", href: "#" },
  { name: "Veerle Beelen", photo: "https://travelbta.com/wp-content/uploads/2025/04/Headshot.jpg", href: "#" },
  { name: "Colleen O'Neil Mulvhill", photo: "https://travelbta.com/wp-content/uploads/2025/04/Colleen_Campeche_Pic-scaled.jpeg", href: "#" },
  { name: "Tracy Hook", photo: "https://travelbta.com/wp-content/uploads/2025/06/Headshot-NOCROPFINAL-e1752069462474.jpg", href: "#" },
  { name: "Colleen Henshaw Lasnier", photo: "https://travelbta.com/wp-content/uploads/2025/06/Headshot-Rangiroa.jpg", href: "#" },
  { name: "Mindy Yoder", photo: "https://travelbta.com/wp-content/uploads/2025/06/Mindy-Yoder-Headshot-Coffee-1-e1748877082203.jpg", href: "#" },
];

// ─── Advisor Card ─────────────────────────────────────────────────────────────
// Matches Julie Rose page aesthetic: clean cream, gold accents, smallcaps labels

function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <Link href={advisor.href ?? "#"} className="group block">
      {/* Portrait photo. 3:4 ratio, same for all */}
      <div className="relative overflow-hidden aspect-[3/4]" style={{ background: "#edeae4" }}>
        <img
          src={advisor.photo}
          alt={advisor.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80";
          }}
        />
        {/* Subtle dark vignette at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* "View Profile" pill. only shown on hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
          <span className="bta-eyebrow text-white text-[0.6rem] tracking-[0.22em] uppercase bg-[#bfaf8a]/90 px-4 py-1.5">
            View Profile
          </span>
        </div>
      </div>

      {/* Name block */}
      <div className="pt-5 pb-2">
        {/* Thin gold rule. expands on hover */}
        <div className="w-6 h-px bg-[#bfaf8a] mb-3 transition-all duration-500 group-hover:w-12" />
        {/* Advisor name: Playfair Display Medium, steel blue — readable, not all-caps smallcaps */}
        <p
          className="text-[#384959] leading-snug group-hover:text-[#bfaf8a] transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: "0.9rem" }}
        >
          {advisor.name}
        </p>
        {advisor.title && (
          <p
            className="text-[#bfaf8a] text-[0.65rem] tracking-[0.1em] mt-1 italic"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {advisor.title}
          </p>
        )}
      </div>
    </Link>
  );
}

// ─── Section Header. mirrors Julie Rose eyebrow + heading pattern ────────────

function SectionHeader({ eyebrow, heading, sub }: { eyebrow: string; heading: string; sub?: string }) {
  return (
    <div className="mb-16">
      {/* Gold rule + eyebrow */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-px bg-[#bfaf8a]" />
        <p
          className="text-[#bfaf8a] text-2xl italic"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          {eyebrow}
        </p>
      </div>
      {/* Heading */}
      <h2 className="font-display text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight mb-4">
        {heading}
      </h2>
      {/* Horizontal gold rule below heading */}
      <div className="w-16 h-px bg-[#bfaf8a] mt-6" />
      {sub && (
        <p
          className="text-[#2F2F2F]/60 text-lg leading-relaxed mt-6 max-w-2xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Mission Tabs. Aegean Blue, mirrors Julie Rose stats bar aesthetic ────────

const TABS = [
  {
    id: "who",
    label: "Who We Are",
    content:
      "BTA is a luxury travel company headquartered in Paradise Valley, AZ. Our co-founders Janet Semenova and Angela Rice are lifelong learners and entrepreneurs. Our team of exceptional advisors, support staff, and partners handle all aspects of travel around the globe. We specialize in designing once-in-a-lifetime experiences for individuals, families, and teams that elevate, inspire, and transform.",
  },
  {
    id: "what",
    label: "What We Do",
    content:
      "We work tirelessly to craft unforgettable journeys that spark the imagination, elevate the spirit, and foster meaningful connections. As a Virtuoso Travel Agency, our partnerships with the most respected and knowledgeable suppliers worldwide allow our guests access to special amenities, VIP experiences, and exceptional service. Each BTA itinerary also offers travelers an opportunity to give back to the local community.",
  },
  {
    id: "believe",
    label: "What We Believe",
    content:
      "We believe travel is transformational. From remote lodges in Patagonia to alpine chalets to desert safari camps, our team of experts scours the globe to bring you the most unique, exceptional, awe-inspiring travel experiences. We aren't simply luxury travel agents. we are curators and transformational itinerary designers who practice a holistic team approach.",
  },
];

function MissionTabs() {
  const [active, setActive] = useState("who");
  const current = TABS.find((t) => t.id === active)!;

  return (
    <section className="bg-[#384959] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-px bg-[#bfaf8a]/50" />
          <p
            className="text-[#bfaf8a] text-2xl italic"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Our Mission
          </p>
        </div>

        {/* Tab buttons. smallcaps, gold underline on active */}
        <div className="flex gap-0 mb-12 border-b border-white/15">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`bta-eyebrow text-[0.65rem] tracking-[0.22em] uppercase px-6 pb-4 transition-all duration-300 ${
                active === tab.id
                  ? "text-[#bfaf8a] border-b-2 border-[#bfaf8a] -mb-px"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <p
          className="text-white/75 text-xl md:text-2xl leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {current.content}
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OurPeople() {
  return (
    <PageLayout hideCta={false}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-[#384959]/20 to-transparent" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-14">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            About BTA
          </p>
          <h1 className="font-display text-white text-5xl md:text-7xl font-light leading-[1.05]">
            Get To Know<br />Our Team
          </h1>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p
                  className="text-[#bfaf8a] text-2xl italic"
                  style={{ fontFamily: "'Allura', cursive" }}
                >
                  Transformational Luxury
                </p>
              </div>
              <h2 className="font-display text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight">
                Passionate Travelers.<br />Exceptional Designers.
              </h2>
              <div className="w-16 h-px bg-[#bfaf8a] mt-8" />
            </div>

            {/* Right: body + quote */}
            <div>
              <p
                className="text-[#2F2F2F]/70 text-lg leading-relaxed mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Boutique Travel Advisors™ is a luxury travel company headquartered in Scottsdale, AZ. Our advisors specialize in designing once-in-a-lifetime experiences for individuals, families, and teams that elevate, inspire, and transform.
              </p>
              <p
                className="text-[#2F2F2F]/60 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                As a Virtuoso Travel Agency, our partnerships with the world's most respected suppliers allow our guests access to exclusive amenities, VIP experiences, and exceptional service. We aren't simply travel agents. we are curators and transformational itinerary designers.
              </p>
              {/* Quote. mirrors Julie Rose blockquote */}
              <blockquote
                className="border-l-2 border-[#bfaf8a] pl-6 text-[#2F2F2F]/60 text-xl italic leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "To move, to breathe, to fly, to float, to gain all while you give, to roam the roads of lands remote: to travel is to live."
                <footer className="bta-eyebrow text-[#bfaf8a] text-xs tracking-[0.15em] uppercase mt-3 not-italic">
                 . Hans Christian Andersen
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Co-Founders ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="The Heart of BTA"
            heading="Our Co-Founders"
            sub="Our designers are passionate travelers and the heart of BTA. Every person on our team has traveled extensively and specializes in creating unique experiences focused on discovery, exploration, and refined luxury."
          />
          {/* 2 cards. centered, same size as all other cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 lg:gap-14 max-w-lg">
            {CO_FOUNDERS.map((a) => (
              <AdvisorCard key={a.name} advisor={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Inhouse Advisors ──────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Our In-House Team"
            heading="BTA Inhouse Advisors"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-14">
            {INHOUSE_ADVISORS.map((a) => (
              <AdvisorCard key={a.name} advisor={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Independent Affiliate Advisors ────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Our Extended Family"
            heading="Independent Affiliate Advisors"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-14">
            {AFFILIATE_ADVISORS.map((a) => (
              <AdvisorCard key={a.name} advisor={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Luxury Travel Coaches ─────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <SectionHeader
            eyebrow="Guiding Your Journey"
            heading="Luxury Travel Coaches"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-14">
            {TRAVEL_COACHES.map((a) => (
              <AdvisorCard key={a.name} advisor={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Tabs ──────────────────────────────────────────────────── */}
      <MissionTabs />

    </PageLayout>
  );
}
