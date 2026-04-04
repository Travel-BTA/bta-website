/**
 * PrivateCharters — /cruises/private-charters
 *
 * Private jet and yacht charter services offered by BTA.
 * Content sourced from travelbta.com/private-jet-charters/
 *
 * Typography rules (BTA spec):
 *   H1             → Instrument Serif, ALL CAPS, white (on photo hero)
 *   Script accent  → Allura, italic, white on photo / Champagne Gold on plain bg
 *   H2/H3          → Playfair Display 600 italic, Aegean Blue or white
 *   Body           → Playfair Display Regular
 *   Labels/CTAs    → Instrument Serif, ALL CAPS, tracked
 *
 * Color rule:
 *   Champagne Gold #bfaf8a ONLY on plain/solid backgrounds — NEVER over photos
 *   White text on all photo overlays
 */

import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── Aircraft categories ──────────────────────────────────────────────────────
const AIRCRAFT = [
  {
    id: "turboprop",
    name: "Turboprop",
    eyebrow: "Entry-Level Private",
    range: "Up to 1,500 nm",
    speed: "~345 mph",
    capacity: "Up to 8 passengers",
    description:
      "The most cost-effective introduction to private aviation. Turboprops are ideal for short regional hops with smaller groups, offering more cabin space than a light jet at a lower operating cost. Models include the Cessna 441 Conquest, Jetstream 31, and Pilatus PC-12NG.",
    highlights: [
      "Most economical private charter option",
      "Ideal for short trips and regional airports",
      "More cabin space than comparable light jets",
      "Access to smaller airstrips unavailable to larger aircraft",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    imageRight: false,
  },
  {
    id: "light",
    name: "Light Jet",
    eyebrow: "Efficiency and Comfort",
    range: "1,500 to 2,000 nm",
    speed: "~460 mph",
    capacity: "Up to 8 passengers",
    description:
      "Light jets offer the ideal balance of speed, efficiency, and comfort for shorter journeys. Faster and more fuel-efficient than turboprops, they are well-suited for weekend escapes, city-to-city travel, and mountain or beach getaways. Popular models include the Falcon 10, Nextant 400XTi, and Learjet 70/75.",
    highlights: [
      "Fast and fuel-efficient for short-to-mid-haul routes",
      "Perfect for weekend city breaks and resort escapes",
      "Quieter, more intimate cabin environment",
      "Access to a wider range of regional airports",
    ],
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1400&q=80",
    imageRight: true,
  },
  {
    id: "midsize",
    name: "Midsize Jet",
    eyebrow: "Range and Versatility",
    range: "2,500 to 3,000 nm",
    speed: "~515 mph",
    capacity: "Up to 12 passengers",
    description:
      "Midsize jets are the versatile choice for medium-distance travel with small groups. They offer a meaningful step up in cabin space, stand-up headroom, and range. Ideal for cross-country and transatlantic legs with a stopover. Models include the Gulfstream Astra, Hawker 850XP, Learjet 60XR, and Citation III/VI/VII.",
    highlights: [
      "Stand-up cabin with more room to work or rest",
      "Cross-country range without a fuel stop",
      "Suitable for groups of up to 12",
      "Full galley and lavatory facilities",
    ],
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=80",
    imageRight: false,
  },
  {
    id: "heavy",
    name: "Large / Heavy Jet",
    eyebrow: "Ultra-Long Range",
    range: "3,000 to 6,000 nm",
    speed: "~570 mph",
    capacity: "Up to 15 passengers",
    description:
      "Large and heavy jets represent the pinnacle of private aviation. With intercontinental range, fully equipped galleys, private staterooms, and the most luxurious cabin amenities available, these aircraft redefine what it means to travel. Models include the Gulfstream G350, G-IVSP, G-IV, Legacy 600, and Legacy 650.",
    highlights: [
      "Non-stop intercontinental range",
      "Private staterooms and full-service galley on select models",
      "Wi-Fi, entertainment systems, and satellite communications",
      "Butler-level cabin service available on request",
    ],
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=80",
    imageRight: true,
  },
];

// ─── How it works steps ───────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discovery Call",
    body: "A complimentary 15-minute call with your BTA advisor to understand your route, group size, dates, and any special requirements.",
  },
  {
    step: "02",
    title: "Aircraft Selection",
    body: "We source the ideal aircraft from our network of vetted, safety-certified brokers. You receive a curated shortlist with transparent pricing.",
  },
  {
    step: "03",
    title: "Tailored Quote",
    body: "A detailed quote covering aircraft, crew, fuel, landing fees, and any catering or ground transfer arrangements you require.",
  },
  {
    step: "04",
    title: "Seamless Departure",
    body: "Arrive at your private FBO terminal. No queues, no security lines. Your aircraft and crew are ready when you are.",
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function PrivateCharters() {
  return (
    <PageLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      {/* WHY: Dark photo — standard gradient overlay, white text throughout */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2000&q=80"
          alt="Private jet on tarmac at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/45 to-[#0d0d0d]/15" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-14 pb-16 md:pb-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/cruises"
              className="text-white/55 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
            >
              Cruises
            </Link>
            <span className="text-white/35 text-xs">›</span>
            <span
              className="text-white/70 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
            >
              Private Charters
            </span>
          </div>

          {/* Allura script — white on photo */}
          <p
            className="mb-3"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'Allura', cursive",
              fontSize: "1.75rem",
              fontStyle: "italic",
            }}
          >
            Winged Escapes
          </p>

          {/* H1 — Instrument Serif ALL CAPS white on hero photo */}
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl uppercase leading-tight mb-6"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            }}
          >
            Private Charters
          </h1>

          <p
            className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            From turboprop regional hops to ultra-long-range intercontinental flights, BTA arranges private aviation through the world's most experienced and safety-certified brokers. Every flight is tailored to your schedule, your group, and your standards.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfaf8a] text-white px-8 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#a89a76] transition-all duration-300"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
          >
            Request a Charter Quote
            <span className="text-base">→</span>
          </Link>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      {/* WHY: Plain Linen White background — Champagne Gold labels are correct here */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#bfaf8a]" />
              <span
                className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
              >
                Private Aviation
              </span>
            </div>
            <h2
              className="text-[#384959] text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
            >
              Travel on Your Terms
            </h2>
            <p
              className="text-[#2F2F2F]/70 text-lg leading-relaxed mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Private jet travel has moved well beyond the ultra-wealthy. Sophisticated travelers who value their time, their privacy, and their comfort are choosing private aviation for everything from a long weekend in Napa to a multi-continent expedition.
            </p>
            <p
              className="text-[#2F2F2F]/60 text-lg leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              BTA's partnership with the world's most reputable brokers ensures that every client receives the best value, the highest safety standards, and the most attentive service on every flight. There are three primary categories of private jets: Light, Midsize, and Large/Heavy. We match the right aircraft to your journey.
            </p>
          </div>
        </div>
      </section>

      {/* ── Aircraft Categories ───────────────────────────────────────────── */}
      {AIRCRAFT.map((aircraft, index) => (
        <section
          key={aircraft.id}
          className={index % 2 === 0 ? "bg-white" : "bg-[#faf9f6]"}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Image */}
              <div
                className={`relative overflow-hidden ${aircraft.imageRight ? "lg:order-2" : "lg:order-1"}`}
                style={{ minHeight: "480px" }}
              >
                <img
                  src={aircraft.image}
                  alt={aircraft.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* WHY: Eyebrow badge over image — white text, not Champagne Gold */}
                <div className="absolute top-8 left-8">
                  <span
                    className="bg-[#bfaf8a]/90 text-white text-xs tracking-[0.22em] uppercase px-4 py-1.5"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
                  >
                    {aircraft.eyebrow}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-20 ${aircraft.imageRight ? "lg:order-1" : "lg:order-2"}`}
              >
                {/* Specs row */}
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "Range", value: aircraft.range },
                    { label: "Speed", value: aircraft.speed },
                    { label: "Capacity", value: aircraft.capacity },
                  ].map(spec => (
                    <div key={spec.label}>
                      <p
                        className="text-[#bfaf8a] text-[10px] tracking-[0.2em] uppercase mb-0.5"
                        style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
                      >
                        {spec.label}
                      </p>
                      <p
                        className="text-[#2F2F2F] text-sm"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="w-12 h-px bg-[#bfaf8a] mb-6" />

                {/* H2 — Playfair Display SemiBold Italic on plain background */}
                <h2
                  className="text-[#384959] text-3xl md:text-4xl leading-tight mb-5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
                >
                  {aircraft.name}
                </h2>

                <p
                  className="text-[#2F2F2F]/70 text-base leading-relaxed mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {aircraft.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {aircraft.highlights.map(h => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[#2F2F2F]/65 text-sm"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      <span className="text-[#bfaf8a] mt-0.5 flex-shrink-0">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-[#bfaf8a] text-[#bfaf8a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#bfaf8a] hover:text-white transition-all duration-300 self-start"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
                >
                  Inquire About {aircraft.name}
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      {/* WHY: Aegean Blue solid background — Champagne Gold labels correct here */}
      <section className="bg-[#384959] py-24 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="text-center mb-16">
            <p
              className="text-[#bfaf8a] text-2xl mb-3"
              style={{ fontFamily: "'Allura', cursive" }}
            >
              Simple from Start to Finish
            </p>
            <h2
              className="text-white text-3xl md:text-4xl uppercase tracking-[0.1em]"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 , textTransform: "uppercase" }}
            >
              How to Book a Private Charter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map(step => (
              <div key={step.step} className="border-t border-[#bfaf8a]/30 pt-8">
                <p
                  className="text-[#bfaf8a]/50 text-4xl mb-4 leading-none"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
                >
                  {step.step}
                </p>
                <h3
                  className="text-white text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/55 text-sm leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Considerations ───────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#bfaf8a]" />
                <span
                  className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
                >
                  Planning Guidance
                </span>
              </div>
              <h2
                className="text-[#384959] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
              >
                Charter Considerations
              </h2>
              <p
                className="text-[#2F2F2F]/65 text-base leading-relaxed mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                When selecting a private charter, several factors should inform your choice: aircraft size relative to your group, range requirements, desired amenities, and budget. Special requests such as specific dietary requirements, extra luggage, or pet-friendly cabins are accommodated with advance notice.
              </p>
              <p
                className="text-[#2F2F2F]/65 text-base leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                It is also important to confirm whether your destination airport has a Fixed Base Operator (FBO). BTA's team handles all logistics, including FBO coordination, ground transfers, and customs arrangements for international departures.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { title: "Safety First", body: "Every aircraft in our network undergoes rigorous safety certification. Critical safety checks are conducted before every single flight, with no exceptions." },
                { title: "Transparent Pricing", body: "Our quotes cover aircraft, crew, fuel, landing fees, and any catering or ground arrangements. No hidden fees." },
                { title: "Virtuoso Network", body: "As a Virtuoso member agency, BTA clients benefit from preferred access to the most reputable aviation brokers in the world." },
                { title: "Complimentary Discovery Call", body: "Every inquiry begins with a 15-minute complimentary call to understand your needs and match you with the right aircraft and itinerary." },
              ].map(item => (
                <div key={item.title} className="border-l-2 border-[#bfaf8a]/40 pl-5">
                  <h3
                    className="text-[#384959] text-base mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#2F2F2F]/60 text-sm leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
          alt="Private jet on runway at dusk"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* WHY: Photo background — strong overlay, white text only */}
        <div className="absolute inset-0 bg-[#0d0d0d]/70" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p
            className="text-white/80 text-2xl mb-3"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Exclusive Planning Packages
          </p>
          <h2
            className="text-white text-4xl md:text-5xl uppercase tracking-[0.1em] mb-6"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 , textTransform: "uppercase" }}
          >
            Ready to Fly Private?
          </h2>
          <p
            className="text-white/65 text-base leading-relaxed mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Schedule your complimentary 15-minute discovery call and let BTA find the perfect aircraft for your journey. Every detail, handled.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bfaf8a] text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#a89a76] transition-all duration-300"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
          >
            Schedule a Discovery Call
            <span className="text-base">→</span>
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
