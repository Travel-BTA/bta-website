/**
 * Terms and Conditions for Custom Travel Itineraries
 *
 * Typography rules (BTA brand spec):
 * - H1 (page title): Instrument Serif, ALL CAPS, white — over photo background
 * - H2 (section headings): Playfair Display SemiBold Italic, Champagne Gold #bfaf8a — on plain background
 * - Body: Playfair Display Regular, Charcoal #2f2f2f
 * - Allura: script accent only, white on photo, Champagne Gold on plain
 * - NO Playfair Display anywhere
 * - NO Champagne Gold over photos
 * - NO em dashes
 */

import { Link } from "wouter";

const SECTIONS = [
  {
    id: "contracting-parties",
    title: "Contracting Parties",
    content: (
      <p>
        These Terms and Conditions are legally binding between the traveler(s) and Boutique Travel Advisors, LLC., hereinafter referred to as BTA.
      </p>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance of These Terms",
    content: (
      <p>
        Terms and Conditions must be accepted to begin the itinerary design process.
      </p>
    ),
  },
  {
    id: "important-notice",
    title: "Important Notice",
    content: (
      <>
        <p className="mb-4">
          Cancellations for fear of travel or restrictions such as quarantine due to COVID-19 are not covered reasons for cancellation. Rules and regulations change frequently. While BTA will always do our best to stay attuned to the requirements for travel to your travel destinations, the traveler is solely responsible for knowing and following travel protocols.
        </p>
        <p className="mb-4">
          <strong className="font-semibold">Travel Documentation:</strong> Travelers are responsible for completing all paperwork to allow for entry into the country of travel and for returning to the US.
        </p>
        <p>
          <strong className="font-semibold">Travel Insurance:</strong> BTA highly recommends travel insurance to protect your financial investment and for other benefits, including medical coverage, trip interruption, and medical evacuation.
        </p>
      </>
    ),
  },
  {
    id: "booking-payment",
    title: "Booking Confirmation, Payment Terms & Cancellation Policies",
    content: (
      <>
        <p className="mb-3 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Full-Service Travel Itineraries</p>
        <ul className="space-y-2 mb-6 list-none">
          {[
            "Pricing and availability are subject to change and cannot be guaranteed until a deposit has been made.",
            "Boutique Travel Advisors will start immediately to book any reservation inquired within 24 hours (work hours / local time).",
            "In the event that the service is not available anymore or is subject to price changes, BTA will communicate the supplement to the client.",
            "Custom itineraries may require a 30% non-refundable deposit and balance is typically due 60-90 days prior to departure.",
            "Payment methods: Bank wire or credit card.",
            "Cancellation of a confirmed itinerary is subject to a 30% penalty and additional terms as specified by suppliers.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-2 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Special Services</p>
        <p>
          Boat services, helicopter tours/transfers, special vehicles, and special locations may have different cancellation policies. Generally, these services are not refundable but depend on the season, kind of service, and destination.
        </p>
      </>
    ),
  },
  {
    id: "passport-visas",
    title: "Passport & Visas",
    content: (
      <>
        <p className="mb-4">
          Passport holders are responsible for obtaining the required documentation applicable for entry. Passports must be valid for at least six (6) months after completion of your journey and should have sufficient blank pages for visas and immigration stamps.
        </p>
        <p>
          BTA cannot be held responsible should you be denied entry to a country due to non-compliance with these requirements. Should you require specific information ahead of travel, please consult the travel advice produced by the government of your home jurisdiction and that of the government that issued your passport and/or visa.
        </p>
      </>
    ),
  },
  {
    id: "planning-fees",
    title: "Planning Fees",
    content: (
      <>
        <p className="mb-4">
          BTA is a service-based travel advisory firm. Our planning and management fees are collected before beginning the design process. Planning and management fees are non-refundable and vary depending on the complexity of the trip.
        </p>
        <p>
          Fees may increase if the scope of services changes, as mutually agreed upon between parties.
        </p>
      </>
    ),
  },
  {
    id: "itinerary",
    title: "Itinerary",
    content: (
      <>
        <p className="mb-4">
          Accommodation and arranged sightseeing are subject to change at any time due to unforeseen circumstances beyond BTA's control. Every effort will be made to operate tours and activities as planned, but alterations may occur after the final itinerary has been issued.
        </p>
        <p>
          BTA reserves the right to withdraw a tour or any part of it, to make alterations to the itinerary or tour inclusions as deemed necessary or desirable, and to pass on to tour members any expenditures or losses caused by delays or events beyond its control. In case of any appreciable variation in the tour price due to these circumstances, BTA reserves the right to adjust the tour costs.
        </p>
      </>
    ),
  },
  {
    id: "taxes-gratuities",
    title: "Taxes and Gratuities",
    content: (
      <ul className="space-y-2 list-none">
        {[
          "Certain airline fees (such as baggage costs) and hotel taxes imposed by city and state governments are typically not included in the quotation unless specified.",
          "Gratuities for guides, drivers, porters, and hotel and cruise staff are generally not included and are at the traveler's discretion.",
          "Additional city taxes may be imposed in specific destinations and must be paid on the spot.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "exclusions",
    title: "Exclusions",
    content: (
      <p>
        The cost of obtaining vaccinations, passports, visas, excess baggage charges, food and beverages (except where specified), laundry services, telephone calls, and personal expenditures, unless expressly included in writing, are not included.
      </p>
    ),
  },
  {
    id: "additional-fees",
    title: "Additional Service Fees",
    content: (
      <>
        <p className="mb-6">
          Certain services are subject to additional fees and will be charged to your card on file upon providing such service:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #bfaf8a" }}>
                <th className="text-left py-3 pr-8 font-semibold" style={{ color: "#bfaf8a" }}>Service</th>
                <th className="text-left py-3 font-semibold" style={{ color: "#bfaf8a" }}>Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Airline research (Continental US)", "$50-$75/person"],
                ["Airline research (Hawaii, Alaska, International)", "$100-$150/person"],
                ["Restaurant reservations (Included in Gold plan)", "$100/week minimum"],
                ["A la carte tours and events", "$50/tour"],
                ["A la carte rail tickets", "$30/person"],
                ["Spa reservations (Included in Gold plan)", "$30/reservation"],
                ["Apartment/villa rental finder's fee", "Up to 12% of net rental rate"],
              ].map(([service, fee], i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(191,175,138,0.15)" }}>
                  <td className="py-3 pr-8">{service}</td>
                  <td className="py-3">{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "changes-cancellations",
    title: "Changes and Cancellations",
    content: (
      <ul className="space-y-2 list-none">
        {[
          "Changes to the itinerary made post-final payment are subject to $100-$150 fee per occurrence.",
          "BTA reserves the right to charge a service fee of up to 10% of the booking costs if the trip is canceled by you after the first deposit.",
          "BTA encourages you to submit cancellation fees as part of your claim if you have trip insurance and deem your cancellation to be for a covered reason.",
          "Other supplier cancellation terms and conditions may apply and are the traveler's sole responsibility.",
          "Cancellation terms and conditions passed by suppliers are specific to each booking. Your travel may not be refundable and/or subject to cancellation or rebooking fees.",
          "While we cannot guarantee reimbursement, change and cancellation fees should be submitted with any trip insurance claim made due to cancellation for a covered reason.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "after-hours",
    title: "After-Hours Assistance and Services",
    content: (
      <ul className="space-y-2 list-none">
        {[
          "BTA advisors are available Monday-Friday during standard business hours and on an appointment basis.",
          "Travel itineraries booked with destination management companies and wholesalers may include complimentary after-hours customer support, in-destination emergency contacts, and concierge service lines.",
          "After-hours support with a BTA advisor during travel is subject to $100/hour, billed in 1-hour increments. The fee will be charged at the time of service.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "special-requests",
    title: "Special Requests",
    content: (
      <p>
        Specific requests, including connecting rooms, bedding configurations, room assignments, and meal preferences, should be advised at the time of booking. While we make an effort to secure special requests, they cannot be guaranteed.
      </p>
    ),
  },
  {
    id: "prices-arrangements",
    title: "Prices & Arrangements",
    content: (
      <ul className="space-y-2 list-none">
        {[
          "The price for your custom itinerary includes planning, handling, and operational charges and is quoted based on current exchange rates and tariffs.",
          "Entrance fees for scheduled sightseeing tours are included in this price when specified.",
          "This price is subject to revision in line with significant changes in foreign currency, tariff rates, taxes, etc.",
          "Quotes and proposals are subject to change and availability until confirmed.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "descriptions-imagery",
    title: "Descriptions and Imagery",
    content: (
      <>
        <p className="mb-4">
          Photographs, videos, imagery, and descriptions used by BTA are intended to present an example of the types of sights, experiences, and scenery you may encounter in your travel destination. However, due to circumstances beyond our control, it is foreseeable that some destinations will change in appearance.
        </p>
        <p>
          BTA cannot guarantee sightings of animals in the wild or marine life in its natural habitat. We are also not responsible for inclement or undesirable weather.
        </p>
      </>
    ),
  },
  {
    id: "confirmation",
    title: "Confirmation of Services",
    content: (
      <ul className="space-y-2 list-none">
        {[
          "A non-refundable itinerary design fee is required to begin the planning process.",
          "Typically, a non-refundable deposit is required at the time of booking to secure custom travel components.",
          "The deposit amount will be specified at the time of booking and varies depending on the supplier's Terms and Conditions.",
          "The client understands that BTA's Terms and Conditions may vary from those of cruise lines, land operators, airlines, hotels, and other travel companies involved in your trip. All applicable Terms and Conditions shall be enforced.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "payment-method",
    title: "Payment Method",
    content: (
      <>
        <p className="mb-4">Payments may be made by the following methods:</p>
        <ul className="space-y-2 mb-4 list-none">
          {["Credit card", "Bank transfer"].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Travelers are liable for all bank and related transaction charges. Some suppliers may charge additional credit card processing fees. These fees are strictly the responsibility of the traveler.
        </p>
      </>
    ),
  },
  {
    id: "credit-card",
    title: "Credit Card Merchant",
    content: (
      <p>
        We strongly recommend that you use a credit card for your purchase so that you can exercise your rights under the Fair Credit Billing Act if you do not receive the services you purchased. However, if we are the credit card merchant, our role is to facilitate the sale, collect funds on your behalf, and remit those funds to the Suppliers. If the Suppliers do not provide the services, your only recourse would be against the Suppliers, and you agree not to initiate a chargeback against us.
      </p>
    ),
  },
  {
    id: "flight-preparation",
    title: "Flight Preparation",
    content: (
      <>
        <p className="mb-4">
          BTA recommends that you check your flight for any changes at least 48 hours before departure and check in before arrival at the airport when possible. We recommend that you arrive at the airport 3 hours before traveling internationally and at least 2 hours before flying domestically.
        </p>
        <p>BTA is not liable for any travel interruption or disruption.</p>
      </>
    ),
  },
  {
    id: "risks",
    title: "Risks of Travel and Travel Release",
    content: (
      <>
        <p className="mb-4">
          BTA assumes no responsibility for and shall not be liable for the acts or omissions on the part of any other party not under our control or any acts of God, unsafe conditions, terrorism, health hazards including pandemics, illness, weather hazards, or the suitability for a disabled person of any portion of any trip. We have no special knowledge of dangers during travel or at destinations.
        </p>
        <div className="space-y-2">
          <p><strong className="font-semibold">Travel Safety:</strong> Visit the State Department travel website at <a href="https://www.travel.state.gov" target="_blank" rel="noopener noreferrer" style={{ color: "#bfaf8a" }}>www.travel.state.gov</a>, click on "Find International Travel Information," then "Country Information."</p>
          <p><strong className="font-semibold">Health Information:</strong> Visit the Centers for Disease Control website at <a href="https://www.cdc.gov/travel" target="_blank" rel="noopener noreferrer" style={{ color: "#bfaf8a" }}>www.cdc.gov/travel</a>, then click on "Destinations."</p>
          <p><strong className="font-semibold">COVID-19 and Pandemics:</strong> It is your personal decision to travel, and you are doing so with full knowledge of current travel recommendations and travel restrictions regarding the risks of COVID-19 or any other pandemic.</p>
        </div>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content: (
      <>
        <p className="mb-4">
          Force majeure means unusual and unforeseeable circumstances beyond BTA's control or the control of our suppliers, the consequence of which neither BTA nor its suppliers could avoid even with all due care, including, but not limited to, war, threat of war, riot, civil strife, terrorist activity (actual or threatened), industrial dispute, unavoidable technical problems with transport, machinery or equipment, power failure, changes imposed by rescheduling or cancellation of flights by an airline, natural or nuclear disaster, fire, flood, drought, adverse weather conditions, epidemics or outbreaks of illness, and level of water in rivers.
        </p>
        <p className="mb-3">In the event of a cancellation or material alteration to the trip as a result of the circumstances described in this clause, BTA may, in their sole and absolute discretion:</p>
        <ul className="space-y-2 list-none">
          {[
            "Offer the traveler(s) alternative travel arrangements or products of comparable standard as may be appropriate in the circumstances.",
            "If BTA does not offer alternative travel arrangements or products, BTA will make every effort to obtain a prompt proportional refund of monies paid by the traveler to the suppliers.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span style={{ color: "#bfaf8a", flexShrink: 0 }}>&#8212;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "assumption-of-risk",
    title: "Assumption of Risk and Release",
    content: (
      <p className="uppercase text-sm tracking-wide leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem" }}>
        You hereby expressly assume all of these risks and dangers, and you hereby expressly agree to release forever, discharge, and hold us, and our agents, employees, officers, directors, associates, affiliated companies, guides, group leaders, and subcontractors harmless against any and all liability, actions, causes of actions, suits, claims, and demands of any and every kind and nature whatsoever which you now have or which may hereafter arise out of or in connection with these risks and dangers.
      </p>
    ),
  },
  {
    id: "claims",
    title: "Claims Deadline and Exclusive Jurisdiction",
    content: (
      <>
        <p className="mb-4">
          You agree to present any claims against us within 30 days after your travels end and to file suit within one year of the incident, and you acknowledge that this expressly limits the applicable statute of limitations to one year.
        </p>
        <p>
          Any unresolved disputes arising out of or in connection with our services shall be finally settled under the Rules of Arbitration of the International Chamber of Commerce by one or more arbitrators appointed in accordance with the said Rules.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#faf9f6", fontFamily: "'Playfair Display', serif" }}
    >
      {/* Hero Header — photo background, white text only */}
      <div className="relative flex items-center justify-center" style={{ minHeight: "420px" }}>
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/tnc-header-bg-9GLZHQhwoLnA2BNUTMLfBX.webp')",
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,10,20,0.72) 0%, rgba(5,10,20,0.55) 60%, rgba(5,10,20,0.72) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20">
          {/* Decorative rule with diamond */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ backgroundColor: "rgba(191,175,138,0.6)" }} />
            <div
              className="w-2 h-2 rotate-45"
              style={{ backgroundColor: "#bfaf8a" }}
            />
            <div className="h-px w-16" style={{ backgroundColor: "rgba(191,175,138,0.6)" }} />
          </div>

          {/* Page title */}
          <h1
            className="uppercase tracking-widest text-white mb-4"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            Terms &amp; Conditions
          </h1>

          <p
            className="mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.04em",
            }}
          >
            Custom Travel Itineraries
          </p>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.04em",
            }}
          >
            Effective: January 1, 2026
          </p>

          {/* Bottom rule */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16" style={{ backgroundColor: "rgba(191,175,138,0.6)" }} />
            <div
              className="w-2 h-2 rotate-45"
              style={{ backgroundColor: "#bfaf8a" }}
            />
            <div className="h-px w-16" style={{ backgroundColor: "rgba(191,175,138,0.6)" }} />
          </div>
        </div>
      </div>

      {/* Intro banner */}
      <div
        className="py-8 px-6 text-center"
        style={{ backgroundColor: "#384959" }}
      >
        <p
          className="max-w-3xl mx-auto text-sm leading-relaxed"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.02em",
          }}
        >
          These Terms and Conditions are legally binding between the traveler(s) and Boutique Travel Advisors, LLC. Terms and Conditions must be accepted to begin the itinerary design process.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Table of contents */}
        <div
          className="mb-16 p-8"
          style={{
            backgroundColor: "#fff",
            border: "1px solid rgba(191,175,138,0.25)",
          }}
        >
          <h2
            className="mb-6 italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "1.1rem",
              color: "#bfaf8a",
              letterSpacing: "0.02em",
            }}
          >
            Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {SECTIONS.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex gap-3 text-sm hover:opacity-70 transition-opacity"
                style={{ color: "#384959", fontFamily: "'Playfair Display', serif" }}
              >
                <span style={{ color: "#bfaf8a", minWidth: "1.5rem" }}>{String(i + 1).padStart(2, "0")}.</span>
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {SECTIONS.map((section, i) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              {/* Section header */}
              <div className="flex items-baseline gap-4 mb-5">
                <span
                  className="text-xs font-semibold tracking-widest shrink-0"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: "#bfaf8a",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase"
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="italic"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                    color: "#384959",
                    lineHeight: 1.3,
                  }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Hairline rule */}
              <div
                className="mb-5"
                style={{ height: "1px", backgroundColor: "rgba(191,175,138,0.3)" }}
              />

              {/* Section body */}
              <div
                className="text-sm leading-relaxed"
                style={{ color: "#2f2f2f", fontFamily: "'Playfair Display', serif" }}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div
          className="mt-20 p-10"
          style={{
            backgroundColor: "#384959",
          }}
        >
          <h2
            className="uppercase tracking-widest text-center mb-2"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "#bfaf8a",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}
          >
            Questions or Concerns?
          </h2>
          <p
            className="text-center mb-10 text-sm"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            If you have any questions regarding these Terms and Conditions, please contact us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Email", value: "info@travelbta.com", href: "mailto:info@travelbta.com" },
              { label: "Phone", value: "(480) 787-1477", href: "tel:4807871477" },
              {
                label: "Physical Address",
                value: "7702 E. Doubletree Ranch Rd, Suite 300\nScottsdale, AZ 85258\nStrictly by appointment only",
                href: null,
              },
              {
                label: "Mailing Address",
                value: "10645 N. Tatum Blvd\nSuite 200-468\nPhoenix, AZ 85028",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(191,175,138,0.2)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: "#bfaf8a",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase"
                  }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    className="text-sm whitespace-pre-line"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div
          className="mt-12 pt-8 flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase"
          style={{
            borderTop: "1px solid rgba(191,175,138,0.3)",
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}
        >
          {[
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Contact Us", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "#bfaf8a" }}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
