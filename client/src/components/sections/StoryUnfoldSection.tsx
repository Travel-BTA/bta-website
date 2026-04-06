/**
 * StoryUnfoldSection. "Where Will Your Story Unfold?"
 * Appears after the Gives Back section.
 * Shows 3 featured itinerary cards — 2 external LTC links + 1 internal Family Travel link.
 *
 * WHY: Three cards create a more balanced editorial grid and surface the South Pacific
 * itinerary (Fiji / Kokomo Private Island) to homepage visitors who may not navigate
 * directly to the Family Travel page.
 */
import { Link } from "wouter";

export const storyUnfoldItineraries = [
  {
    // WHY: Carmel-by-the-Sea card uses Janet's harbor photo for an authentic,
    // locally-sourced feel that differentiates from stock imagery.
    title: "America 8-Night Ultra Luxury Escape",
    destination: "United States",
    city: "Carmel-by-the-Sea",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/carmel-harbor_2143ea51.jpg",
    href: "https://itineraries.luxurytravelclubs.com/itinerary/america-8-night-ultra-luxury-escape",
    internal: false,
  },
  {
    // WHY: Austria ski adventure card uses the Hallstatt photo provided by Janet,
    // linking directly to the LTC itinerary page.
    title: "Austria 8-Night Luxury Ski Adventure",
    destination: "Austria",
    city: "Hallstatt & the Alps",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/austria-hallstatt_a71eb215.jpg",
    href: "https://itineraries.luxurytravelclubs.com/itinerary/austria-8-night-luxury-ski-adventure",
    internal: false,
  },
  {
    // WHY: Fiji/South Pacific editorial card — Kokomo aerial photo showcases the
    // Great Astrolabe Reef setting. Links internally to the Family Travel page
    // where the full Fiji itinerary modal lives.
    title: "Fiji & South Pacific Family Adventure",
    destination: "Fiji · South Pacific",
    city: "Kokomo Private Island",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/fiji-kokomo-island-aerial_49ba6cc9.jpg",
    href: "/experiences/family-travel",
    internal: true,
  },
];

export function StoryUnfoldSection() {
  return (
    <section className="bg-[#edeae4] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header. left aligned */}
        <div className="text-left mb-14">
          <p
            className="font-script text-[#bfaf8a] text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "'Allura', 'Playfair Display', Georgia, serif" }}
          >
            Begin your journey
          </p>
          <h2
            className="bta-section-title text-[#384959] text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontWeight: 400 }}
          >
            WHERE WILL YOUR<br />STORY UNFOLD?
          </h2>
        </div>

        {/* Itinerary Cards Grid — 3-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {storyUnfoldItineraries.map((item, i) => {
            const cardContent = (
              <>
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="bta-eyebrow text-[#bfaf8a] text-xs mb-2">
                    {item.destination}
                  </p>
                  <h3
                    className="font-display text-[#faf9f6] text-2xl md:text-3xl mb-4 leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 bta-eyebrow text-[#bfaf8a] text-xs group-hover:gap-4 transition-all duration-300">
                    VIEW ITINERARY
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </>
            );

            // WHY: Internal links use wouter <Link> for SPA navigation (no full reload).
            // External LTC itinerary links open in a new tab.
            if (item.internal) {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative overflow-hidden block"
                  style={{ height: "580px" }}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden block"
                style={{ height: "580px" }}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
