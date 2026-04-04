/**
 * FulfillmentPolicy — /fulfillment-policy
 *
 * Content sourced from travelbta.com fulfillment policy reference.
 * Last Modified: December 28, 2025
 *
 * Typography rules (BTA spec — identical to all other legal pages):
 *   Page H1       → Instrument Serif, ALL CAPS, white (on dark photo header)
 *   Section H2    → Playfair Display 600 italic, Aegean Blue #384959
 *   Body          → Playfair Display Regular, Charcoal #2F2F2F
 *   Labels/CTAs   → Instrument Serif, ALL CAPS, tracked
 *
 * Color rule:
 *   Champagne Gold #bfaf8a ONLY on plain/solid backgrounds — NEVER over photos
 */
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

// ─── Section data ─────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    number: "1",
    title: "Service Delivery Overview",
    content: [
      "Boutique Travel Advisors provides luxury travel planning and advisory services. Our fulfillment process begins upon receipt of your inquiry or booking request and continues through the completion of your travel experience.",
      "All services are delivered by our team of experienced luxury travel advisors who are dedicated to creating exceptional, personalized travel experiences for each client.",
    ],
    list: null,
  },
  {
    number: "2",
    title: "Booking Confirmation",
    content: [
      "Upon receipt of your travel inquiry, a BTA advisor will contact you within one business day to discuss your travel vision and begin the planning process. Formal booking confirmation is provided once all components of your itinerary have been secured and payment has been received.",
      "You will receive a comprehensive booking confirmation document that includes:",
    ],
    list: [
      "Complete itinerary details including dates, destinations, and accommodations",
      "Confirmation numbers for all bookings",
      "Contact information for all suppliers and properties",
      "Emergency contact information for your BTA advisor",
      "Pre-departure checklist and travel documentation requirements",
    ],
  },
  {
    number: "3",
    title: "Payment and Deposit Requirements",
    content: [
      "A deposit is required to secure your travel arrangements. Deposit amounts vary by supplier and destination and will be clearly communicated at the time of booking. The remaining balance is typically due 60 to 90 days prior to departure, depending on supplier requirements.",
    ],
    list: [
      "Initial deposit: Required to confirm bookings (amount varies by supplier)",
      "Final payment: Due 60 to 90 days prior to departure",
      "Late bookings (within 60 days): Full payment required at time of booking",
      "Custom itineraries: Payment schedule provided upon proposal acceptance",
    ],
    footer: "All payments are processed securely. We accept major credit cards and wire transfers. Service fees are non-refundable once the planning process has commenced.",
  },
  {
    number: "4",
    title: "Cancellation and Refund Policy",
    content: [
      "Cancellation policies vary by supplier, destination, and travel type. BTA will clearly communicate all applicable cancellation terms at the time of booking. In general, the following guidelines apply:",
    ],
    list: [
      "Cancellations made more than 90 days prior to departure: Deposit may be forfeited; supplier policies apply",
      "Cancellations made 60 to 90 days prior to departure: 50% of total trip cost may be forfeited",
      "Cancellations made 30 to 60 days prior to departure: 75% of total trip cost may be forfeited",
      "Cancellations made within 30 days of departure: 100% of total trip cost may be forfeited",
    ],
    footer: "BTA strongly recommends the purchase of comprehensive travel insurance to protect your investment. We can assist you in selecting an appropriate policy.",
  },
  {
    number: "5",
    title: "Travel Insurance",
    content: [
      "Boutique Travel Advisors strongly recommends that all clients purchase comprehensive travel insurance, including trip cancellation, trip interruption, medical evacuation, and baggage protection coverage.",
      "While BTA can provide information about travel insurance options, the purchase of travel insurance is the sole responsibility of the client. BTA is not responsible for losses that could have been covered by travel insurance.",
    ],
    list: null,
  },
  {
    number: "6",
    title: "Supplier and Partner Obligations",
    content: [
      "BTA works exclusively with vetted, reputable suppliers and partners to deliver your travel experience. While we exercise due diligence in selecting our partners, BTA acts as an agent on your behalf and is not responsible for the acts or omissions of third-party suppliers.",
      "In the event of a supplier failure or service disruption, BTA will make every reasonable effort to assist you in securing alternative arrangements. However, BTA cannot be held liable for losses arising from supplier insolvency, force majeure events, or circumstances beyond our control.",
    ],
    list: null,
  },
  {
    number: "7",
    title: "Service Fees",
    content: [
      "BTA charges professional service fees for our planning and advisory services. These fees reflect the expertise, time, and resources invested in creating your bespoke travel experience. Service fees are disclosed at the commencement of the planning process and are non-refundable once work has begun.",
    ],
    list: [
      "Initial consultation: Complimentary for qualified inquiries",
      "Trip planning fee: Disclosed upon proposal acceptance",
      "Itinerary revision fees: May apply for significant changes after initial proposal",
      "Concierge services: Quoted separately based on scope",
    ],
    footer: "BTA also receives compensation from preferred suppliers and partners. This compensation does not influence our recommendations, which are always made in the best interest of our clients.",
  },
  {
    number: "8",
    title: "Modifications and Changes",
    content: [
      "We understand that travel plans sometimes need to change. BTA will make every effort to accommodate modifications to your itinerary, subject to supplier availability and applicable change fees.",
      "Modification requests should be submitted in writing to your BTA advisor. Changes made within 60 days of departure may incur additional fees and are subject to supplier availability.",
    ],
    list: null,
  },
  {
    number: "9",
    title: "Documentation and Visa Requirements",
    content: [
      "Clients are solely responsible for ensuring they hold valid travel documents, including passports, visas, and any required health documentation. BTA will provide general guidance on documentation requirements, but it is the client's responsibility to verify and obtain all necessary documents.",
    ],
    list: [
      "Passport validity: Most destinations require 6 months validity beyond travel dates",
      "Visa requirements: Vary by nationality and destination; client's responsibility to obtain",
      "Health documentation: Vaccination certificates and health declarations as required",
      "Travel insurance documentation: Carry proof of coverage at all times",
    ],
  },
  {
    number: "10",
    title: "Contact and Support",
    content: [
      "Your BTA advisor is your primary point of contact throughout the planning process and during your travels. For urgent matters during travel, emergency contact information will be provided in your booking confirmation.",
    ],
    list: null,
    isContact: true,
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function FulfillmentPolicy() {
  return (
    <PageLayout>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      {/*
        WHY: Photo background — luxury concierge service setting conveying trust,
        professionalism, and white-glove service delivery. Dark overlay ensures
        white text is legible. No Champagne Gold over photos — white only.
      */}
      <section
        className="relative pt-36 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/fulfillment-header_e2cb9d91.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(20,28,36,0.72) 0%, rgba(30,43,53,0.80) 60%, rgba(20,28,36,0.88) 100%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Decorative hairline + diamond */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block h-px w-20 bg-[#bfaf8a]/40" />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="5" y="0.5" width="6.5" height="6.5" rx="0.5" transform="rotate(45 5 0.5)" fill="#bfaf8a" fillOpacity="0.55" />
            </svg>
            <span className="block h-px w-20 bg-[#bfaf8a]/40" />
          </div>
          {/* H1 — white on photo per brand rule */}
          <h1
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase",
              fontWeight: 400,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              letterSpacing: "0.12em",
              lineHeight: 1.05,
              
            }}
          >
            Fulfillment Policy
          </h1>
          {/* Bottom rule */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="block h-px w-16 bg-[#bfaf8a]/35" />
            <span className="block w-1 h-1 rounded-full bg-[#bfaf8a]/55" />
            <span className="block h-px w-16 bg-[#bfaf8a]/35" />
          </div>
          {/* Date */}
          <p
            className="text-white/45 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
          >
            Last Modified: December 28, 2025
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf9f6] py-16 px-6">
        <div className="max-w-3xl mx-auto px-4">
          <div className="border-l-2 border-[#bfaf8a]/50 pl-6">
            <p
              className="text-[#2F2F2F]/80 text-base leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <strong>Boutique Travel Advisors</strong> is committed to delivering exceptional service at every stage of your travel journey. This Fulfillment Policy outlines our service delivery standards, payment requirements, cancellation terms, and the obligations of both parties to ensure a seamless, transparent experience.
            </p>
            <p
              className="text-[#2F2F2F]/65 text-base leading-relaxed mt-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              By engaging our services, you acknowledge and agree to the terms set forth in this policy. We encourage you to read this document carefully and contact your BTA advisor with any questions before confirming your booking.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sections ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto px-4 space-y-14">
          {SECTIONS.map((section) => (
            <div key={section.number} id={`section-${section.number}`}>
              {/* Section number + rule */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase flex-shrink-0"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
                >
                  {section.number.padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-[#bfaf8a]/25" />
              </div>
              {/* H2 — Playfair Display SemiBold Italic on plain background */}
              <h2
                className="text-[#384959] text-xl md:text-2xl leading-snug mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}
              >
                {section.title}
              </h2>
              {/* Body paragraphs */}
              {section.content.map((para, i) => (
                <p
                  key={i}
                  className="text-[#2F2F2F]/70 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {para}
                </p>
              ))}
              {/* Bullet list */}
              {section.list && (
                <ul className="space-y-2 mb-4 ml-2">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#2F2F2F]/65 text-sm"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      <span className="text-[#bfaf8a] mt-0.5 flex-shrink-0 text-xs">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {/* Footer paragraph */}
              {"footer" in section && section.footer && (
                <p
                  className="text-[#2F2F2F]/65 text-sm leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {section.footer}
                </p>
              )}
              {/* Contact section */}
              {"isContact" in section && section.isContact && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-[#bfaf8a]/25 p-6">
                    <p
                      className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
                    >
                      Physical Address
                    </p>
                    <p
                      className="text-[#2F2F2F]/70 text-sm leading-relaxed"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      7702 E. Doubletree Ranch Rd<br />
                      Suite 300, Scottsdale, AZ 85258<br />
                      <span className="text-[#2F2F2F]/45 text-xs italic">Strictly by appointment only, no walk-ins</span>
                    </p>
                  </div>
                  <div className="border border-[#bfaf8a]/25 p-6">
                    <p
                      className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
                    >
                      Mailing Address
                    </p>
                    <p
                      className="text-[#2F2F2F]/70 text-sm leading-relaxed"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      10645 N. Tatum Blvd<br />
                      Suite 200-468, Phoenix, AZ 85028
                    </p>
                  </div>
                  <div className="border border-[#bfaf8a]/25 p-6">
                    <p
                      className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@travelbta.com"
                      className="text-[#384959] text-sm hover:text-[#bfaf8a] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      info@travelbta.com
                    </a>
                  </div>
                  <div className="border border-[#bfaf8a]/25 p-6">
                    <p
                      className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+14807871477"
                      className="text-[#384959] text-sm hover:text-[#bfaf8a] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      (480) 787-1477
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Last modified + related links */}
          <div className="border-t border-[#bfaf8a]/25 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p
              className="text-[#2F2F2F]/40 text-xs"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Last Modified: December 28, 2025
            </p>
            <div className="flex gap-6">
              <Link
                href="/terms-of-service"
                className="text-[#bfaf8a] text-xs tracking-[0.15em] uppercase hover:text-[#384959] transition-colors"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#bfaf8a] text-xs tracking-[0.15em] uppercase hover:text-[#384959] transition-colors"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact-us"
                className="text-[#bfaf8a] text-xs tracking-[0.15em] uppercase hover:text-[#384959] transition-colors"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
