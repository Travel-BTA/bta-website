/**
 * InfinityPoolBannerSection — Full-width banner image with overlay text
 * Placed after the Story Unfold section.
 * Uses the infinity pool / resort banner image.
 */

const BANNER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/infinity-pool-banner_4c37c0e4.webp";

export function InfinityPoolBannerSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 45vw, 620px)" }}>
      {/* Banner Image */}
      <img
        src={BANNER_IMAGE}
        alt="Luxury resort infinity pool"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Subtle dark overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered text overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p
          className="font-script text-white/90 text-3xl md:text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
        >
          The world is yours to explore
        </p>
        <h2
          className="bta-section-title text-white text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight"
          style={{ fontWeight: 400 }}
        >
          CRAFTED FOR THE<br />DISCERNING TRAVELER
        </h2>
        <a
          href="/book"
          className="bta-btn-gold"
        >
          Begin Planning
        </a>
      </div>
    </section>
  );
}
