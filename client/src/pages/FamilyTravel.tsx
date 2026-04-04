/**
 * Family Travel Page
 * Route: /experiences/family-travel
 *
 * WHY: Family travel is one of BTA's most requested service categories.
 * This page communicates the agency's expertise across all family types —
 * young children, teenagers, and multigenerational groups — using the same
 * luxury editorial design language as the Land Journey sub-pages.
 *
 * Content: Edit inline below. Images use Unsplash CDN for royalty-free assets.
 * Layout: Cinematic hero → intro split → age-group panels → destinations grid
 *         → accommodations → experiences → why BTA → final CTA
 */

import NavBar from "@/components/NavBar";
import { footer } from "@/content/homepage";
import { ArrowRight, Baby, Users, Globe, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "wouter";

// ── Image URLs ─────────────────────────────────────────────────────────────
// All images are from Unsplash (royalty-free). Replace any URL with a
// CloudFront-hosted asset once available in the media library.
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&auto=format&fit=crop",
  intro: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85&auto=format&fit=crop",
  youngChildren: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=85&auto=format&fit=crop",
  teenagers: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=900&q=85&auto=format&fit=crop",
  multigenerational: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=900&q=85&auto=format&fit=crop",
  accommodations: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=85&auto=format&fit=crop",
  experiences: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85&auto=format&fit=crop",
  cta: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&auto=format&fit=crop",
  // Destination images
  italy: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80&auto=format&fit=crop",
  costaRica: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=800&q=80&auto=format&fit=crop",
  japan: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop",
  southAfrica: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80&auto=format&fit=crop",
  hawaii: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop",
  europe: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format&fit=crop",
};

// ── Age-group section data ─────────────────────────────────────────────────
const AGE_GROUPS = [
  {
    icon: Baby,
    eyebrow: "Traveling With Young Children",
    headline: "Designed for\nYoung Children",
    body: "Traveling with young children requires care, patience, and the right environment. We prioritize properties and experiences that allow both parents and children to feel comfortable, ensuring every day feels manageable while still offering opportunities for discovery.",
    bullets: [
      "Family-friendly hotels with thoughtful amenities and spacious accommodations",
      "Guaranteed connecting rooms or suite configurations that offer comfort and privacy",
      "Access to vetted childcare services and professionally run kids programs",
      "Engaging experiences such as interactive museums, nature outings, and cultural storytelling",
    ],
    imageUrl: IMAGES.youngChildren,
    imageLeft: false,
  },
  {
    icon: Users,
    eyebrow: "Traveling With Teenagers",
    headline: "Engaging Teenagers\nThrough Experience",
    body: "Teenagers often want travel to feel immersive, active, and personally relevant. We design itineraries that invite participation rather than passive observation, resulting in travel that feels interesting, energizing, and memorable.",
    bullets: [
      "Adventure-focused activities such as surfing, hiking, wildlife tracking, and culinary exploration",
      "Local guides who connect through shared interests, from photography to food",
      "Hands-on experiences including cooking classes, artisan workshops, and cultural immersion",
      "Time built into the itinerary for independence and personal exploration",
    ],
    imageUrl: IMAGES.teenagers,
    imageLeft: true,
  },
  {
    icon: Globe,
    eyebrow: "Multiple Generations",
    headline: "Multigenerational Travel,\nCarefully Coordinated",
    body: "Bringing together grandparents, parents, and children requires logistical skill and a thoughtful understanding of what helps families travel well together. We create journeys that allow for shared moments while respecting individual preferences.",
    bullets: [
      "Private villas and residences designed for gathering, with space for privacy",
      "Flexible itineraries with options for different ages and activity levels",
      "Private guides and drivers who can adjust plans as needed",
      "Experiences that encourage connection, from shared meals to meaningful cultural encounters",
    ],
    imageUrl: IMAGES.multigenerational,
    imageLeft: false,
  },
];

// ── Destination data ───────────────────────────────────────────────────────
const DESTINATIONS = [
  {
    name: "Italy",
    region: "Europe",
    description:
      "Ideal for multigenerational travel, Italy offers villa stays, private boat outings, cooking classes, history, and family-friendly culture in destinations such as Tuscany, Lake Como, Puglia, and the Amalfi Coast.",
    imageUrl: IMAGES.italy,
  },
  {
    name: "Costa Rica",
    region: "Central America",
    description:
      "A wonderful choice for active families, with wildlife, beaches, zip lining, surfing, rainforest lodges, and guides who are wonderful with children and teens.",
    imageUrl: IMAGES.costaRica,
  },
  {
    name: "Japan",
    region: "Asia",
    description:
      "An excellent option for families seeking culture, safety, and variety, with experiences ranging from private sushi workshops and temple visits to modern city exploration and countryside stays.",
    imageUrl: IMAGES.japan,
  },
  {
    name: "England & France",
    region: "Europe",
    description:
      "Well suited to families who enjoy history, gardens, museums, and city experiences, with opportunities for private tours tailored to children and teenagers.",
    imageUrl: IMAGES.europe,
  },
  {
    name: "South Africa",
    region: "Africa",
    description:
      "One of the most memorable choices for families, particularly when safari is paired with Cape Town and the Winelands. Many lodges offer family programs, private guides, and educational wildlife experiences.",
    imageUrl: IMAGES.southAfrica,
  },
  {
    name: "Hawaii",
    region: "United States",
    description:
      "A reliable favorite for families seeking ease, beauty, and a wide range of accommodations, from resorts with excellent family facilities to private residences.",
    imageUrl: IMAGES.hawaii,
  },
];

// ── Why BTA items ──────────────────────────────────────────────────────────
const WHY_BTA = [
  {
    title: "Thoughtful Planning",
    description:
      "We approach family travel with a level of detail that anticipates both the expected and the unforeseen — seamless logistics, well-considered itineraries, and private guides who understand how to work with families.",
  },
  {
    title: "Verified Accommodations",
    description:
      "Every property is hand-selected with care. We verify room configurations, confirm connecting rooms when needed, and vet villas for location, layout, privacy, and service.",
  },
  {
    title: "Experiences Beyond the Expected",
    description:
      "Private after-hours museum access, wildlife encounters with expert naturalists, farm visits, sailing excursions, and junior-focused city tours. These are the details that transform a trip from enjoyable to unforgettable.",
  },
  {
    title: "From First Conversation to Return Home",
    description:
      "Our role is to simplify complexity while elevating the overall experience. We handle the many behind-the-scenes details that make travel smoother, so your family can focus on time together.",
  },
  {
    title: "Virtuoso Access",
    description:
      "As Virtuoso members, we unlock exclusive family amenities, VIP recognition, and preferred rates at the world's finest family-friendly properties — benefits simply unavailable through standard booking channels.",
  },
  {
    title: "Travel That Gives Back",
    description:
      "A portion of every booking supports local charities including childhood cancer research, Make-A-Wish, veterans, and arts and culture in the communities where you travel.",
  },
];

export default function FamilyTravel() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Set SEO meta tags on mount
  useEffect(() => {
    document.title = "Family Travel | Boutique Travel Advisors";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "BTA designs luxury family journeys for every generation — young children, teenagers, and multigenerational groups. Private guides, verified accommodations, and experiences that connect families across the world.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  // Subtle parallax on hero image
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2F2F2F]">
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Gradient overlay — darker at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <p
            className="text-[#BFAF8A] tracking-[0.3em] text-sm uppercase mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Experiences · Family Travel
          </p>
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Travel Designed for<br />Every Generation
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Journeys that reflect the interests, preferences, and practical needs of every traveler in your family.
          </p>
          <div className="mt-12 flex items-center gap-3 text-white/60">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The BTA Approach
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Thoughtful Planning,<br />Tailored to Your Family
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-6 font-light">
              Family travel is rarely simple, yet when thoughtfully planned, it becomes one of the most meaningful ways to connect across generations. At BTA, we curate journeys that reflect the interests, preferences, and practical needs of each traveler — whether you are exploring with young children, traveling with teenagers, or bringing together grandparents, parents, and children in one shared experience.
            </p>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              Each itinerary is created with care, balancing structure with flexibility and ensuring that every member of the family feels considered. From the first conversation through your return home, our role is to simplify complexity while elevating the overall experience.
            </p>
            <Link href="/book">
              <button className="group flex items-center gap-3 text-[#bfaf8a] tracking-[0.2em] text-sm uppercase border border-[#bfaf8a] px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-all duration-300">
                Begin Planning
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[500px]"
              style={{
                backgroundImage: `url(${IMAGES.intro})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#bfaf8a]" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#bfaf8a]" />
          </div>
        </div>
      </section>

      {/* ── Planning highlights strip ─────────────────────────────────────── */}
      <section className="bg-[#384959] py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { label: "Seamless Logistics", desc: "Between every destination, transfer, and experience" },
              { label: "Private Guides", desc: "Who understand how to work with families of all ages" },
              { label: "Verified Room Configs", desc: "Connecting rooms and suite arrangements confirmed" },
              { label: "Dining & Downtime", desc: "Arranged with real-life family travel in mind" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-8 h-px bg-[#BFAF8A] mx-auto mb-5" />
                <h3
                  className="text-white text-lg font-light mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.label}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Age-group sections (alternating split layout) ─────────────────── */}
      {AGE_GROUPS.map((group, idx) => {
        const Icon = group.icon;
        return (
          <section
            key={idx}
            className={`py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto ${
              idx % 2 === 1 ? "" : ""
            }`}
          >
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                group.imageLeft ? "" : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
              }`}
            >
              {/* Text column */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={16} className="text-[#bfaf8a]" />
                  <p
                    className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {group.eyebrow}
                  </p>
                </div>
                <h2
                  className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-7"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {group.headline.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < group.headline.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p className="text-[#2f2f2f] text-lg leading-relaxed mb-8 font-light">
                  {group.body}
                </p>
                <ul className="space-y-4">
                  {group.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-4">
                      <div className="w-4 h-px bg-[#bfaf8a] mt-3 flex-shrink-0" />
                      <span className="text-[#2f2f2f] text-base leading-relaxed font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column */}
              <div className="relative hidden lg:block">
                <div
                  className="w-full h-[480px]"
                  style={{
                    backgroundImage: `url(${group.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {group.imageLeft ? (
                  <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-[#bfaf8a]" />
                ) : (
                  <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-[#bfaf8a]" />
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Favorite Destinations grid ────────────────────────────────────── */}
      <section className="py-24 bg-[#f3f0eb]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Favorite Family Destinations
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where Families Thrive
            </h2>
            <p className="text-[#2f2f2f] text-lg font-light mt-5 max-w-2xl mx-auto leading-relaxed">
              Some destinations lend themselves especially well to family travel, offering the right balance of comfort, culture, scenery, and memorable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest, i) => (
              <div key={i} className="group">
                <div className="w-full h-64 overflow-hidden mb-5 relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${dest.imageUrl})` }}
                  />
                  {/* Region badge */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1">
                    <span className="text-white/80 text-xs tracking-[0.15em] uppercase flex items-center gap-1.5">
                      <MapPin size={10} />
                      {dest.region}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-[#384959] text-2xl font-light mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {dest.name}
                </h3>
                <p className="text-[#2f2f2f] text-base leading-relaxed font-light">
                  {dest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodations split section ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative hidden lg:block">
            <div
              className="w-full h-[500px]"
              style={{
                backgroundImage: `url(${IMAGES.accommodations})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#bfaf8a]" />
            <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-[#bfaf8a]" />
          </div>
          <div>
            <p
              className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Approach to Accommodations
            </p>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-7"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where You Stay Shapes<br />the Entire Experience
            </h2>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-8 font-light">
              We select each property with care, prioritizing both quality and practicality for families. Every recommendation reflects firsthand knowledge and trusted relationships.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Hand-selected hotels known for service and family readiness",
                "Verified room configurations, including guaranteed connecting rooms when needed",
                "Vetted villas chosen for location, layout, privacy, and service",
                "Residences with access to resort amenities when appropriate",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-4 h-px bg-[#bfaf8a] mt-3 flex-shrink-0" />
                  <span className="text-[#2f2f2f] text-base leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/book">
              <button className="group flex items-center gap-3 bg-[#384959] text-white tracking-[0.2em] text-sm uppercase px-10 py-4 hover:bg-[#2a3844] transition-colors duration-300">
                Enquire About Accommodations
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experiences beyond the expected ──────────────────────────────── */}
      <section className="py-24 bg-[#384959]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-[#BFAF8A] tracking-[0.25em] text-xs uppercase mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Curated Experiences
              </p>
              <h2
                className="text-white text-4xl md:text-5xl font-light leading-tight mb-7"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Experiences That Go<br />Beyond the Expected
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                We design experiences that feel personal, immersive, and well suited to family travel. These are the kinds of details that transform a trip from enjoyable to unforgettable.
              </p>
              <ul className="space-y-4">
                {[
                  "Private after-hours access to museums and cultural landmarks",
                  "Wildlife encounters led by expert naturalists",
                  "Farm visits and cooking experiences with local families",
                  "Sailing excursions designed for both relaxation and exploration",
                  "Junior-focused city tours created to keep children engaged",
                  "Specialty guides in history, food, art, or nature",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-4 h-px bg-[#BFAF8A] mt-3 flex-shrink-0" />
                    <span className="text-white/70 text-base leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <div
                className="w-full h-[520px]"
                style={{
                  backgroundImage: `url(${IMAGES.experiences})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#BFAF8A]" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#BFAF8A]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Families Work With BTA ────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[#bfaf8a] tracking-[0.25em] text-xs uppercase mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why Families Work With BTA
          </p>
          <h2
            className="text-[#384959] text-4xl md:text-5xl font-light"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            More Than a Hotel<br />and a Few Reservations
          </h2>
          <p className="text-[#2f2f2f] text-lg font-light mt-5 max-w-2xl mx-auto leading-relaxed">
            Families come to us because they want a trip that has been carefully thought through by someone who understands how family travel actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {WHY_BTA.map((item, i) => (
            <div key={i}>
              <div className="w-8 h-px bg-[#bfaf8a] mb-6" />
              <h3
                className="text-[#384959] text-xl font-light mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[#2f2f2f] text-base leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section
        className="relative py-40 overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGES.cta})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#384959]/75" />
        <div className="relative z-10 text-center px-8">
          <p
            className="text-[#BFAF8A] tracking-[0.3em] text-sm uppercase mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Begin Your Family Journey
          </p>
          <h2
            className="text-white text-5xl md:text-6xl font-light mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let Us Create a Journey<br />Worth Remembering
          </h2>
          <p className="text-white/70 text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you are planning a first trip with little ones, a more engaging experience for teenagers, or a meaningful journey with multiple generations, we would be honored to help you design it with care.
          </p>
          <Link href="/book">
            <button className="group inline-flex items-center gap-3 border border-white/60 text-white tracking-[0.2em] text-sm uppercase px-12 py-5 hover:bg-white hover:text-[#384959] transition-all duration-300">
              Start Planning
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#384959] text-white/70 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta-logo_aff60fe6.png"
                alt="Boutique Travel Advisors"
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed font-light">{footer.tagline}</p>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Explore</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.explore.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Company</p>
              <ul className="space-y-3 text-sm font-light">
                {footer.company.map((l: { label: string; href: string }, i: number) => (
                  <li key={i}>
                    <Link href={l.href} className="hover:text-[#BFAF8A] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white tracking-[0.2em] text-xs uppercase mb-6">Contact</p>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a href={`tel:${footer.contact.phone}`} className="hover:text-[#BFAF8A] transition-colors">
                    {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${footer.contact.email}`} className="hover:text-[#BFAF8A] transition-colors">
                    {footer.contact.email}
                  </a>
                </li>
                <li className="text-white/40 text-xs">{footer.contact.virtuoso}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">{footer.copyright}</p>
            <div className="flex gap-6 text-xs">
              {footer.legal.map((l: { label: string; href: string }, i: number) => (
                <Link key={i} href={l.href} className="hover:text-[#BFAF8A] transition-colors text-white/40">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
