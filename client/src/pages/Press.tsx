/**
 * Press.tsx — BTA In The News
 *
 * WHY: Social proof from credible media outlets, awards, and partnerships
 * reinforces BTA's position as a trusted luxury travel authority. The page
 * uses an editorial grid layout — clean, magazine-style, with the BTA
 * navy/gold palette — to feel like a premium media kit.
 *
 * Press items include:
 *  - Existing WordPress press coverage
 *  - NEW: TFO Wealth Partners podcast (March 2026)
 *  - NEW: AZ Foothills Best of Our Valley 2026 — Best Travel Agency (3rd year)
 *  - NEW: Phoenix Symphony exclusive travel partner
 */

import PageSEO from "@/components/PageSEO";
import { Link } from "wouter";

// ── Types ──────────────────────────────────────────────────────────────────────
interface PressItem {
  outlet: string;
  outletLogo?: string;  // optional logo URL
  outletType: "TV" | "PODCAST" | "PRINT" | "ONLINE" | "AWARD" | "PARTNERSHIP";
  headline: string;
  excerpt: string;
  href: string;
  date?: string;
  featured?: boolean;
}

// ── Press Data ─────────────────────────────────────────────────────────────────
const FEATURED_ITEMS: PressItem[] = [
  {
    outlet: "AZ Foothills Magazine",
    outletType: "AWARD",
    headline: "Best Travel Agency — Best of Our Valley 2026",
    excerpt:
      "Boutique Travel Advisors has been named Best Travel Agency in Arizona Foothills Magazine's Best of Our Valley awards for the third consecutive year — recognition chosen entirely by Valley residents.",
    href: "https://www.arizonafoothillsmagazine.com/bestof/about/best-of-our-valley-2026-winners-the-list",
    date: "December 2025",
    featured: true,
  },
  {
    outlet: "The Phoenix Symphony",
    outletType: "PARTNERSHIP",
    headline: "BTA Named Exclusive Travel Partner of The Phoenix Symphony",
    excerpt:
      "Boutique Travel Advisors is The Phoenix Symphony's exclusive travel partner, helping patrons plan culture-first getaways with VIP hotel benefits at no additional cost. When guests book through BTA, a portion of proceeds supports The Phoenix Symphony and its community programs.",
    href: "https://www.phoenixsymphony.org/travel-icon-rick-steves-appears-in-person-with-the-phoenix-symphony-in-europe-a-symphonic-journey/",
    date: "October 2025",
    featured: true,
  },
  {
    outlet: "TFO Wealth Partners — The Wealth & Purpose Podcast",
    outletType: "PODCAST",
    headline: "Travel Done Well: Creating Memory Dividends Through Intentional Family Travel",
    excerpt:
      "BTA Co-Founder Janet Semenova joined host Brady Fineske on The Wealth & Purpose Podcast to discuss what separates a forgettable vacation from one that becomes part of a family's shared identity — and how a travel roadmap can align your journeys with your life's bigger picture.",
    href: "https://tfowealth.com/travel-done-well/",
    date: "March 2026",
    featured: true,
  },
];

const PRESS_ITEMS: PressItem[] = [
  {
    outlet: "Fox Arizona",
    outletType: "TV",
    headline: "BTA Co-Founder Featured on Fox Arizona: End of an Era for Southwest Airlines' Bag Policy",
    excerpt:
      "Co-Founder Angela Rice weighed in on Southwest Airlines' end of its signature free checked bag policy, offering practical packing strategies and insights on how the shift may affect traveler loyalty.",
    href: "https://www.dropbox.com/scl/fi/n0ebcacffdsejxmy30ax5/angie-rice-foxarizona-2025-05-28-v2.mp4?rlkey=v8atvor6be81xzvuk3pgfafzf&e=2&st=dgroecge&dl=0",
    date: "May 2025",
  },
  {
    outlet: "Popular1st",
    outletType: "ONLINE",
    headline: "BTA Featured in Popular1st: 7 Last-Minute Cruise Tips",
    excerpt:
      "BTA contributed expert insight on how travelers can make the most of spontaneous cruise getaways — from snagging last-minute deals to accessing exclusive perks through a travel advisor.",
    href: "#",
  },
  {
    outlet: "WBBM Noon Business Hour",
    outletType: "TV",
    headline: "BTA Co-Founder Angie Rice on Event-Based Travel Trends",
    excerpt:
      "Angie Rice joined host Rob Hart to discuss the rise of planning luxury trips around major events — from world-class golf tournaments and marathons to the Super Bowl and Kentucky Derby.",
    href: "#",
  },
  {
    outlet: "Centered CEOs",
    outletType: "ONLINE",
    headline: "In The Spotlight With Centered CEOs & Boutique Travel Advisors",
    excerpt:
      "Having begun a friendship on the sidelines of their sons' football field, Janet and Angie grew BTA into one of Arizona's premier luxury travel advisory firms — combining Angie's finance background with Janet's background as a nurse practitioner.",
    href: "#",
  },
  {
    outlet: "Authority Magazine",
    outletType: "ONLINE",
    headline: "Janet Semenova on How We Can Leverage The Power Of Gratitude To Improve Our Overall Mental Wellness",
    excerpt:
      '"Gratitude involves the whole person. It is a personality trait, emotion, and skill that allows us to appreciate the life we are given and the people we care for."',
    href: "#",
  },
  {
    outlet: "KTAR News 92.3 FM",
    outletType: "TV",
    headline: "Valley Travel Expert: Book Now to Avoid Increasing Prices",
    excerpt:
      '"The prices that we\'re seeing are going up and they\'re going up pretty quickly, and pretty dramatically," Janet Semenova told KTAR News on the post-pandemic travel surge.',
    href: "#",
  },
  {
    outlet: "Travel + Leisure",
    outletType: "PRINT",
    headline: "25 Genius Trip-Planning Tips — Straight from Travel Agents",
    excerpt:
      "BTA advisor Kim Parizek shared her insider tip for navigating customs and security: a brightly colored passport holder that's easy to spot in a carry-on.",
    href: "#",
  },
  {
    outlet: "Travel Weekly",
    outletType: "PRINT",
    headline: "Meet Angie Rice, Whose CPA Roots Make Her Push Instead of Pull",
    excerpt:
      '"Our clients are looking to us for advice; they want to mirror the types of travel that we have experienced and that we choose to highlight," Rice says.',
    href: "#",
  },
  {
    outlet: "Voyage Phoenix",
    outletType: "ONLINE",
    headline: "Meet Janet Semenova and Angela Rice of Boutique Travel Advisors in Paradise Valley",
    excerpt:
      "Founded in 2017, BTA has seen rapid growth and national recognition. Co-founders Janet and Angie have won awards, been featured on local television, and written up in multiple publications.",
    href: "#",
  },
  {
    outlet: "Oasis Travel Network",
    outletType: "AWARD",
    headline: "Rising Stars of the Year — Oasis Travel Network",
    excerpt:
      "Angela Rice and Janet Semenova were honored with the Rising Stars of the Year award at the Oasis Travel Network annual conference.",
    href: "#",
  },
  {
    outlet: "CNBC / MSN Money",
    outletType: "ONLINE",
    headline: "Business Buzz: The Return of the Travel Agent",
    excerpt:
      "BTA was featured in coverage of the resurgence of travel advisors — professionals who provide curated, concierge-level service that online booking platforms cannot replicate.",
    href: "#",
  },
  {
    outlet: "Forbes",
    outletType: "ONLINE",
    headline: "5 Reasons to Use a Luxury Travel Advisor & How to Find the Best Travel Agency",
    excerpt:
      "BTA was highlighted as an example of the new generation of luxury travel advisors who combine deep destination expertise with philanthropic purpose.",
    href: "#",
  },
];

// ── Type Badge Colors ──────────────────────────────────────────────────────────
const TYPE_COLORS: Record<PressItem["outletType"], { bg: string; text: string }> = {
  TV:          { bg: "#7982A2", text: "#ffffff" },
  PODCAST:     { bg: "#9C886A", text: "#ffffff" },
  PRINT:       { bg: "#3d3f47", text: "#ffffff" },
  ONLINE:      { bg: "#edeae4", text: "#040619" },
  AWARD:       { bg: "#9C886A", text: "#ffffff" },
  PARTNERSHIP: { bg: "#3d3f47", text: "#ffffff" },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Press() {
  return (
    <div
className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&q=85&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          height: "55vh",
          minHeight: "380px",
        }}
    >
      <PageSEO
        title="Press | Boutique Travel Advisors"
        description="BTA in the press — media coverage, awards, and editorial features highlighting our luxury travel expertise and Virtuoso membership."
        path="/press"
      />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(4,6,25,0.62)" }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="tracking-[0.22em] text-xs mb-4"
            style={{ color: "#9C886A" }}
          >
            BOUTIQUE TRAVEL ADVISORS
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.15,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            In The News
          </h1>
          <p
            className="text-white/80 max-w-xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
            }}
          >
            Co-founders Janet Semenova and Angela Rice are trusted industry voices, regularly featured in national and local media on travel trends, luxury experiences, and purposeful journeys.
          </p>
        </div>
      </section>

      {/* ── Featured Items ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="tracking-[0.2em] text-xs mb-4"
              style={{ color: "#9C886A" }}
            >
              RECENT HIGHLIGHTS
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#040619",
                lineHeight: 1.3,
              }}
            >
              Awards, Partnerships & Features
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_ITEMS.map((item) => {
              const badge = TYPE_COLORS[item.outletType];
              return (
                <a
                  key={item.headline}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col group"
                  style={{
                    border: "1.5px solid #9C886A",
                    padding: "2rem 1.75rem",
                    textDecoration: "none",
                    transition: "box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 32px rgba(156,136,106,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="w-8 mb-5"
                    style={{ height: "2px", background: "#9C886A" }}
                  />

                  {/* Badge + date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-2.5 py-1 tracking-[0.15em] text-[10px]"
                      style={{
                        background: badge.bg,
                        color: badge.text,
                        fontFamily: "inherit",
                      }}
                    >
                      {item.outletType}
                    </span>
                    {item.date && (
                      <span
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontStyle: "italic",
                          fontSize: "0.8rem",
                          color: "#9a9a9a",
                        }}
                      >
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Outlet */}
                  <p
                    className="mb-2 tracking-[0.12em] text-xs"
                    style={{ color: "#9C886A" }}
                  >
                    {item.outlet.toUpperCase()}
                  </p>

                  {/* Headline */}
                  <h3
                    className="mb-4 flex-1"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                      color: "#040619",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.headline}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "#4a4a4a",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.excerpt}
                  </p>

                  {/* Read more */}
                  <p
                    className="mt-5 tracking-[0.15em] text-xs group-hover:underline"
                    style={{ color: "#9C886A" }}
                  >
                    READ MORE →
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: "1px", background: "#e0dbd4" }} />
      </div>

      {/* ── All Press Coverage ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="tracking-[0.2em] text-xs mb-4"
              style={{ color: "#9C886A" }}
            >
              PRESS COVERAGE
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#040619",
                lineHeight: 1.3,
              }}
            >
              Media Appearances & Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESS_ITEMS.map((item) => {
              const badge = TYPE_COLORS[item.outletType];
              const isLink = item.href !== "#";
              const Tag = isLink ? "a" : "div";
              const linkProps = isLink
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Tag
                  key={item.headline}
                  {...(linkProps as Record<string, string>)}
                  className="flex flex-col group"
                  style={{
                    border: "1px solid #e0dbd4",
                    padding: "1.75rem 1.5rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                    cursor: isLink ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => {
                    if (isLink)
                      (e.currentTarget as HTMLElement).style.borderColor = "#9C886A";
                  }}
                  onMouseLeave={(e) => {
                    if (isLink)
                      (e.currentTarget as HTMLElement).style.borderColor = "#e0dbd4";
                  }}
                >
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-2 py-0.5 tracking-[0.12em] text-[10px]"
                      style={{
                        background: badge.bg,
                        color: badge.text,
                      }}
                    >
                      {item.outletType}
                    </span>
                    {item.date && (
                      <span
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontStyle: "italic",
                          fontSize: "0.78rem",
                          color: "#9a9a9a",
                        }}
                      >
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Outlet */}
                  <p
                    className="mb-2 tracking-[0.1em] text-[11px]"
                    style={{ color: "#9C886A" }}
                  >
                    {item.outlet.toUpperCase()}
                  </p>

                  {/* Headline */}
                  <h4
                    className="mb-3 flex-1"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "#040619",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.headline}
                  </h4>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "#5a5a5a",
                      fontSize: "0.87rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.excerpt}
                  </p>

                  {isLink && (
                    <p
                      className="mt-4 tracking-[0.12em] text-[11px] group-hover:underline"
                      style={{ color: "#9C886A" }}
                    >
                      READ MORE →
                    </p>
                  )}
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Media Inquiries ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "#3d3f47" }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="tracking-[0.2em] text-xs mb-5"
            style={{ color: "#9C886A" }}
          >
            MEDIA INQUIRIES
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              lineHeight: 1.3,
            }}
          >
            Working on a story?
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            Janet Semenova and Angela Rice are available for interviews, expert commentary, and media appearances on luxury travel, wellness travel, event-based travel, and philanthropic tourism.
          </p>
          <a
            href="mailto:info@travelbta.com"
            className="inline-block px-10 py-4 tracking-[0.2em] text-xs transition-all duration-300"
            style={{
              border: "1px solid #9C886A",
              color: "#9C886A",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#9C886A";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#9C886A";
            }}
          >
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  );
}
