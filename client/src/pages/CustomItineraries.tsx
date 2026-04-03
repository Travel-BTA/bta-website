/**
 * CustomItineraries. /custom-itineraries
 *
 * Mirrors the content structure of travelbta.com/custom-itineraries:
 * 1. Hero banner (private jet, full-bleed)
 * 2. Intro section (Virtuoso badge + copy)
 * 3. Seven alternating image/text journey category sections
 * 4. Exclusive Planning Packages CTA
 *
 * Design: BTA brand guide. Instrument Serif headings, Cormorant Garamond body,
 * Champagne Gold #bfaf8a, Aegean Blue #384959, Linen White #faf9f6.
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── CDN image URLs ───────────────────────────────────────────────────────────
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/private-jet-hero_ba1ac2aa.jpg",
  family: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/family-beach_84957c3c.jpg",
  cruise: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/cruise-night_ee37f00a.jpg",
  epicurean: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/chef-kitchen_3a4adf58.jpg",
  romance: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/wedding-lakecomo_9aabf4d6.jpg",
  wellness: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/wellness-spa_1573c822.jpg",
  adventure: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/adventure-cycling_b544cd1e.jpg",
  corporate: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/corporate-yoga_32683ba2.jpg",
};

// ─── Reusable section components ─────────────────────────────────────────────

interface JourneySectionProps {
  heading: string;
  paragraphs: string[];
  ctaText?: string;
  ctaHref?: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean; // true = image left, text right; false = text left, image right
  bgColor?: string;
}

function JourneySection({
  heading,
  paragraphs,
  ctaText,
  ctaHref = "#",
  imageUrl,
  imageAlt,
  imageLeft = false,
  bgColor = "#ffffff",
}: JourneySectionProps) {
  const textBlock = (
    <div className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-20">
      {/* Gold accent line */}
      <div className="w-10 h-px bg-[#bfaf8a] mb-8" />
      <h2
        className="font-display text-[#384959] text-3xl md:text-4xl font-light leading-tight mb-8"
      >
        {heading}
      </h2>
      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[#2F2F2F]/75 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
          >
            {p}
          </p>
        ))}
      </div>
      {ctaText && (
        <div className="mt-10">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            {ctaText}
            <span className="text-base">→</span>
          </Link>
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Subtle gold overlay on hover */}
      <div className="absolute inset-0 bg-[#384959]/10 transition-opacity duration-500 hover:opacity-0" />
    </div>
  );

  return (
    <section style={{ backgroundColor: bgColor }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function CustomItineraries() {
  return (
    <PageLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Private jet. luxury travel by air"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2f2f]/80 via-[#2f2f2f]/30 to-transparent" />

        {/* Hero text */}
        <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24">
          <p
            className="text-[#bfaf8a] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Land Journeys
          </p>
          <h1 className="font-display text-white text-5xl md:text-7xl font-light leading-none mb-0">
            Custom
          </h1>
          <h1 className="font-display text-white text-5xl md:text-7xl font-light leading-none">
            Itineraries
          </h1>
        </div>
      </section>

      {/* ── Intro / Virtuoso ──────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Virtuoso badge */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-16 h-px bg-[#bfaf8a]" />
            <span
              className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Virtuoso Member
            </span>
            <div className="w-16 h-px bg-[#bfaf8a]" />
          </div>

          <p
            className="text-[#2F2F2F]/80 text-xl md:text-2xl leading-relaxed mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Are you tired of finding the same cookie-cutter, uninspired itineraries? At BTA, our mission is to create transformational and fully custom travel experiences for our clients. Each itinerary designed by a BTA Virtuoso Advisor will be personally handcrafted to meet your unique needs and expectations. Whether you prefer to explore a new destination by air, land, or sea, you can rest assured that your journey will be unforgettable.
          </p>
          <p
            className="text-[#2F2F2F]/65 text-lg leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our team is here to ensure that your travel goals are achieved. Our{" "}
            <Link href="#" className="text-[#bfaf8a] underline underline-offset-4 hover:text-[#bfaf8a] transition-colors">
              Five-Stage Process
            </Link>{" "}
            is designed to inspire you to dream big and then exceed your expectations. Tap into our global network and gain access to exceptional experiences and insider knowledge.
          </p>
        </div>
      </section>

      {/* ── Thin gold divider ─────────────────────────────────────────────── */}
      <div className="w-full h-px bg-[#edeae4]" />

      {/* ── Journey Sections ──────────────────────────────────────────────── */}

      {/* 1. Family & Multigenerational */}
      <JourneySection
        heading="Family & Multigenerational Journeys"
        paragraphs={[
          "At BTA, your family's safety and enjoyment are our top priorities. Our advisors have traipsed the globe with children in tow and understand first-hand the fun and challenges that come with planning and executing a successful family vacation. Traveling with your children creates opportunities for connection, education, and lifetime memories.",
          "Whether immersed in a treasure hunt amongst Mayan ruins or recreating gladiator battles in the Colosseum, our team will pair your family with the right guides to create magic. Imagine the amazement in your child's eyes as they fall asleep in a glass igloo with the Northern Lights in the backdrop or see lion cubs so close, they could reach out and touch them in the African Savannah.",
        ]}
        ctaText="Download Your Free Guide"
        ctaHref="#"
        imageUrl={IMAGES.family}
        imageAlt="Family on a luxury tropical beach"
        imageLeft={false}
        bgColor="#ffffff"
      />

      {/* 2. Luxury Cruises */}
      <JourneySection
        heading="Luxury Cruises & Water Journeys"
        paragraphs={[
          "Traveling by water is freeing and magical. Fall asleep to the sounds of waves crashing on the shores in the comfort of your luxurious cabin and awaken in a new destination each day. Whether you are sailing along the tranquil Mediterranean Sea, experiencing an adventure onboard an expedition vessel through the Arctic, or tasting your way through Europe on a relaxing river cruise, our team will ensure your voyage is extraordinary.",
          "When you plan your cruise with BTA, you will have a dedicated advisor with years of experience to guide you. Our exclusive network of partners also offers our clients value-added amenities.",
        ]}
        ctaText="Explore The Art of Cruising"
        ctaHref="#"
        imageUrl={IMAGES.cruise}
        imageAlt="Luxury cruise ship illuminated at night"
        imageLeft={true}
        bgColor="#faf9f6"
      />

      {/* 3. Epicurean */}
      <JourneySection
        heading="Epicurean Travel Experiences"
        paragraphs={[
          "Interested in cycling through the French countryside and sampling wines from private cellars? How about taking a cooking course from a renowned Italian chef in his 400-year-old farmhouse? Or perhaps discovering Scotland's storied history through a custom scotch tour will tantalize your senses? Immersive culinary adventures bring to light a destination's heart and soul, weaving together history, tradition, and culture.",
          "Our team can also organize culinary retreats for groups of all sizes.",
        ]}
        ctaText="Explore Epicurean Guides"
        ctaHref="#"
        imageUrl={IMAGES.epicurean}
        imageAlt="Renowned chef preparing a gourmet meal"
        imageLeft={false}
        bgColor="#ffffff"
      />

      {/* 4. Romance & Destination Weddings */}
      <JourneySection
        heading="Romance & Destination Weddings"
        paragraphs={[
          "Are you dreaming of strolling along the canals of Paris with your love, watching the sunset from your private yacht in the Caribbean as you sip champagne, or gazing out your balcony onto Lake Como? Whether on your honeymoon or celebrating 50 years, you will fall in love over and over.",
          "For couples seeking to plan a destination wedding, our travel experts have the knowledge, experience, and connections to ensure that your entire party arrives safely and enjoys each moment. So let us worry about the details and work hand-in-hand with your wedding planner so that your big day is flawless and unforgettable.",
        ]}
        ctaText="Explore Romantic Itinerary Ideas"
        ctaHref="#"
        imageUrl={IMAGES.romance}
        imageAlt="Elegant destination wedding ceremony at Lake Como"
        imageLeft={true}
        bgColor="#faf9f6"
      />

      {/* 5. Wellness */}
      <JourneySection
        heading="Wellness Retreats & Celebrations"
        paragraphs={[
          "BTA takes wellness, transformation, and healing seriously. Our co-founder Janet Semenova has over 15 years of healthcare experience. Whether you are planning a solo yoga and mindfulness holiday or putting together a corporate wellness retreat, our relationships with luxury wellness resorts and spas offer a plethora of holistic activities for every member of your party.",
          "Under Semenova's careful guidance, our team can also curate customized wellness journeys focused on mindfulness, exercise, spirituality, connection, nutrition, and healing therapies.",
        ]}
        ctaText="Explore Wellness Travel Guides"
        ctaHref="#"
        imageUrl={IMAGES.wellness}
        imageAlt="Luxury spa wellness retreat"
        imageLeft={false}
        bgColor="#ffffff"
      />

      {/* 6. Adventure */}
      <JourneySection
        heading="Adventure Travel"
        paragraphs={[
          "If you are 24 or 94, there are times in our lives when we all crave adventure. Whether exploring Norwegian fjords, cycling along the breathtaking cliffs of Australia, zip-lining through the jungles of Costa Rica, or kayaking beside penguins and humpbacks in Antarctica, an expedition trip is sure to raise your spirits.",
          "Our advisors understand that activity levels vary amongst individuals and within a group and work alongside you to curate the perfect adventure. We are passionate about sports, wellness, and expeditions and have the relationships and knowledge to craft the ideal itinerary.",
          "Ask us about some of our favorite adventures. Trekking the Inca Trail, cycling in Alsace, rafting in Montana, and diving the Great Barrier Reef.",
        ]}
        ctaText="Download Our Free Adventure Guide"
        ctaHref="#"
        imageUrl={IMAGES.adventure}
        imageAlt="Cyclists on a scenic coastal road"
        imageLeft={true}
        bgColor="#faf9f6"
      />

      {/* 7. Corporate Educational */}
      <JourneySection
        heading="Corporate Educational Journeys"
        paragraphs={[
          "In partnership with Centered CEOs, BTA creates custom educational retreats for small businesses and corporations seeking to create opportunities for growth, connection, and mindfulness practice. As remote work becomes increasingly prevalent, it is vital to create opportunities for your teams to come together in person and forge meaningful relationships.",
          "Whether you seek a structured itinerary or relaxing retreat, we can curate the right journey for your company. We also offer curriculum-centered retreats worldwide based on Centered CEOs' proprietary framework MAPS, helping entrepreneurs and their teams become Mindful, Assertive, Profitable, and Sustainable businesses.",
        ]}
        ctaText="Learn More"
        ctaHref="#"
        imageUrl={IMAGES.corporate}
        imageAlt="Corporate group yoga retreat at sunset on the beach"
        imageLeft={false}
        bgColor="#ffffff"
      />

      {/* ── Exclusive Planning Packages. editorial inline section ─────────── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top rule + label */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-[#bfaf8a]/40" />
            <span
              className="text-[#bfaf8a] text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Services
            </span>
            <div className="flex-1 h-px bg-[#bfaf8a]/40" />
          </div>

          {/* Two-column layout: heading left, content right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left: heading */}
            <div>
              <h2
                className="font-display text-[#384959] text-4xl md:text-5xl font-light leading-tight"
              >
                Exclusive Planning Packages
              </h2>
            </div>

            {/* Right: copy + CTA */}
            <div>
              <p
                className="text-[#2F2F2F]/75 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                BTA provides a 15-minute discovery call to all inquiries. If you choose to work with BTA, we offer a variety of service packages.{" "}
                <Link
                  href="/contact"
                  className="text-[#bfaf8a] underline underline-offset-4 hover:text-[#bfaf8a] transition-colors"
                >
                  Contact us
                </Link>{" "}
                today to schedule your complimentary call and uncover where your journey can take you.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Schedule Your Discovery Call
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="mt-16 h-px bg-[#bfaf8a]/20" />
        </div>
      </section>

    </PageLayout>
  );
}
