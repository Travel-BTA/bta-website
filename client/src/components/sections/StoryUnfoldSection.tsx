/**
 * StoryUnfoldSection — "Where Will Your Story Unfold?"
 * Appears after the Gives Back section.
 * Shows 3–5 featured itinerary cards that open in a new tab.
 */

export const storyUnfoldItineraries = [
  {
    title: "America 8-Night Ultra Luxury Escape",
    destination: "United States",
    city: "America",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80&auto=format&fit=crop",
    href: "https://3000-ixbmhhcvmbnbqxekpeqwx-d9c66b5e.us2.manus.computer/itinerary/america-8-night-ultra-luxury-escape",
  },
  {
    title: "America 8-Night Ultra Luxury Escape",
    destination: "United States",
    city: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80&auto=format&fit=crop",
    href: "https://3000-ixbmhhcvmbnbqxekpeqwx-d9c66b5e.us2.manus.computer/itinerary/america-8-night-ultra-luxury-escape",
  },
  {
    title: "America 8-Night Ultra Luxury Escape",
    destination: "United States",
    city: "Los Angeles",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80&auto=format&fit=crop",
    href: "https://3000-ixbmhhcvmbnbqxekpeqwx-d9c66b5e.us2.manus.computer/itinerary/america-8-night-ultra-luxury-escape",
  },
];

export function StoryUnfoldSection() {
  return (
    <section className="bg-[#edeac4] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header — left aligned */}
        <div className="text-left mb-14">
          <p
            className="font-script text-[#bfa88a] text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
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

        {/* Itinerary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {storyUnfoldItineraries.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden block"
              style={{ height: "520px" }}
            >
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
                <p className="font-smallcaps text-[#bfa88a] text-xs tracking-[0.22em] uppercase mb-2">
                  {item.destination}
                </p>
                <h3
                  className="font-display text-[#faf9f6] text-2xl md:text-3xl mb-4 leading-snug"
                  style={{ fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-2 font-smallcaps text-[#bfa88a] text-xs tracking-[0.18em] uppercase group-hover:gap-4 transition-all duration-300">
                  VIEW ITINERARY
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
