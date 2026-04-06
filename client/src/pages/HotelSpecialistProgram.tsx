/**
 * HotelSpecialistProgram.tsx
 *
 * Replicates the content of travelbta.com/hotel-specialist-program/
 * using BTA brand typography and color standards:
 * - Instrument Serif: ALL CAPS, weight 400, upright — section titles
 * - Playfair Display: weight 500, italic — subheadings
 * - Playfair Display: weight 400, upright — body text
 * - Champagne Gold (#BFAF8A): eyebrow labels
 * - Aegean Blue (#384959): dark section backgrounds
 * - Warm Stone (#F5F0EA): light section backgrounds
 */

import PageSEO from "@/components/PageSEO";
import { useState } from "react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hotel-specialist-hero_02b02bea.webp";

const APPLY_URL = "https://travelbta.com/hotel-specialist-program/#apply";

// ─── Earnings Calculator ──────────────────────────────────────────────────────

function EarningsCalculator() {
  const [hotelBookings, setHotelBookings] = useState(0);
  const [packages, setPackages] = useState(0);
  const [retreats, setRetreats] = useState(0);
  const [referrals, setReferrals] = useState(0);

  const hotelEarnings = hotelBookings * 123;
  const packageEarnings = packages * 400;
  const retreatEarnings = retreats * 1680;
  const referralEarnings = referrals * 375;
  const totalMonthly =
    hotelEarnings + packageEarnings + retreatEarnings + referralEarnings;
  const totalAnnual = totalMonthly * 12;

  const streams = [
    {
      num: "1",
      title: '"TRAVEL FREELY"',
      subtitle: "À La Carte Hotels + Experiences",
      sliderKey: "hotel",
      value: hotelBookings,
      setter: setHotelBookings,
      max: 50,
      label: "Monthly Bookings",
      detail: "Hotels: $3,066 average (2.64 nights)",
      commission: `4% = $${(hotelBookings * 123).toLocaleString()}/booking`,
      example:
        '"Browse my Rome hotel collection and book your perfect stay."',
      bestFor: "Hotel reviewers, content creators posting travel regularly",
      earnings: hotelEarnings,
    },
    {
      num: "2",
      title: '"TRAVEL LIKE ME"',
      subtitle: "Packaged Itineraries",
      sliderKey: "package",
      value: packages,
      setter: setPackages,
      max: 20,
      label: "Monthly Packages",
      detail: "5-10 days, multiple destinations, $10,000 average",
      commission: `4% = $${(packages * 400).toLocaleString()}/package`,
      example:
        '"Book my 10-day Japan itinerary: Tokyo → Kyoto → Osaka. Hotels, rail passes, restaurant reservations included."',
      bestFor: 'Travel bloggers who get DMs asking "send me your itinerary!"',
      earnings: packageEarnings,
    },
    {
      num: "3",
      title: '"TRAVEL WITH ME"',
      subtitle: "Group Trips & Retreats",
      sliderKey: "retreat",
      value: retreats,
      setter: setRetreats,
      max: 10,
      label: "Monthly Retreats",
      detail: "7-14 days, 12 participants, $3,500/person",
      commission: `4% of $42,000 = $${(retreats * 1680).toLocaleString()} + comped trip`,
      example:
        '"Join me for a photography retreat in Iceland. 12 participants, 8 days, all locations scouted."',
      bestFor: "Anyone with engaged community who wants to travel WITH you",
      earnings: retreatEarnings,
    },
    {
      num: "4",
      title: "FULL-SERVICE REFERRALS",
      subtitle: "High-Touch Custom Planning",
      sliderKey: "referral",
      value: referrals,
      setter: setReferrals,
      max: 20,
      label: "Monthly Referrals",
      detail: '"I love your style but need someone to plan everything for me"',
      commission: `1.5% of $25,000 avg = $${(referrals * 375).toLocaleString()}/referral`,
      example:
        '"You want my Italy vibe but need full-service planning? Let me introduce you to my travel team at BTA."',
      bestFor: "Clients who want full-service planning, not DIY booking",
      earnings: referralEarnings,
    },
  ];

  return (
    <section style={{ backgroundColor: "#F5F0EA", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section eyebrow */}
        <p
          className="bta-eyebrow"
          style={{
            textAlign: "center",
            marginBottom: "0.5rem",
            letterSpacing: "0.12em",
          }}
        >
          Revenue Model
        </p>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "normal",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#384959",
            textAlign: "center",
            marginBottom: "0.5rem",
            letterSpacing: "0.06em",
          }}
        >
          Four Ways to Earn
        </h2>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "normal",
            fontWeight: 400,
            color: "#5a5a5a",
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Mix and match based on your audience and expertise
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {streams.map((s) => (
            <div
              key={s.sliderKey}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e8e0d4",
                borderRadius: "2px",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  color: "#BFAF8A",
                  marginBottom: "0.25rem",
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  color: "#384959",
                  marginBottom: "0.25rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "#BFAF8A",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {s.subtitle}
              </p>

              <label
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  color: "#5a5a5a",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                {s.label}: {s.value}
              </label>
              <input
                type="range"
                min={0}
                max={s.max}
                value={s.value}
                onChange={(e) => s.setter(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#BFAF8A", marginBottom: "1rem" }}
              />

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  color: "#5a5a5a",
                  marginBottom: "0.25rem",
                }}
              >
                {s.detail}
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                  color: "#384959",
                  marginBottom: "0.5rem",
                }}
              >
                Commission: {s.commission}
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "0.78rem",
                  color: "#7a7a7a",
                  marginBottom: "0.5rem",
                }}
              >
                {s.example}
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: "0.78rem",
                  color: "#5a5a5a",
                }}
              >
                Best for: {s.bestFor}
              </p>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  backgroundColor: "#F5F0EA",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: "#BFAF8A",
                    marginBottom: "0.2rem",
                  }}
                >
                  Monthly Earnings
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    color: "#384959",
                  }}
                >
                  ${s.earnings.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          style={{
            backgroundColor: "#384959",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              color: "#BFAF8A",
              marginBottom: "0.5rem",
            }}
          >
            Your Total Annual Earning Potential
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "3rem",
              color: "#ffffff",
              marginBottom: "0.25rem",
            }}
          >
            ${totalAnnual.toLocaleString()}
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#c8c0b0",
            }}
          >
            Based on your selected monthly activity across all four revenue
            streams
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Who is this program designed for?",
    a: "The Hotel Specialist role is for luxury-focused content creators, journalists, media publications, destination experts, retreat hosts, and tour operators with an engaged, loyal community. This is not based on follower count alone. What matters is trust, influence, and brand alignment.",
  },
  {
    q: "Is this open to anyone in travel?",
    a: "No. Our vetting criteria are selective. Specialists must serve a luxury-minded audience and maintain a brand aesthetic and positioning aligned with BTA's standards of service and discretion.",
  },
  {
    q: "Am I considered a travel advisor?",
    a: "Yes. Hotel Specialists are advisors with a defined niche. You advise on hotel selection and elevated hospitality experiences. A BTA Travel Coordinator manages reservations, logistics, supplier communication, and all back-office servicing.",
  },
  {
    q: "What is my role?",
    a: "You curate, recommend, and guide your community. You shape the hotel narrative and influence booking decisions. You are not responsible for operational booking administration.",
  },
  {
    q: "What does BTA handle?",
    a: "BTA Travel Coordinators manage hotel reservations, payment processing, supplier relationships, modifications and cancellations, and commission collection and reconciliation. You focus on expertise and audience engagement.",
  },
  {
    q: "Who is the ideal audience?",
    a: "Luxury travelers who value curated recommendations, VIP recognition, and elevated service. An engaged, loyal community is essential.",
  },
  {
    q: "Why would clients book through this structure?",
    a: "Bookings often include preferred partner amenities such as daily breakfast, hotel credits, priority for upgrades, and VIP recognition not available through public booking channels.",
  },
  {
    q: "How do I earn revenue?",
    a: "You receive a commission share on bookings generated through your advisory influence. Commissions are paid after travel is completed.",
  },
  {
    q: "Can I still host retreats or design tours?",
    a: "Yes. You design and host. BTA manages hotel contracting and servicing.",
  },
  {
    q: "Is there a fee to participate?",
    a: "There are no monthly platform fees. Participation is performance-based and selective.",
  },
  {
    q: "What makes this model different?",
    a: "You maintain brand authority and editorial voice. BTA provides infrastructure and preferred partnerships. Clients receive a seamless, luxury-level experience. Selectivity is the point. This program is for brands with an engaged luxury audience and a shared commitment to discretion, service, and long-term trust.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem" }}>
        <p
          className="bta-eyebrow"
          style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
        >
          Hotel Specialist Program
        </p>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "normal",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            color: "#384959",
            textAlign: "center",
            marginBottom: "3rem",
            letterSpacing: "0.06em",
          }}
        >
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #e8e0d4",
              padding: "1.25rem 0",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "#384959",
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  color: "#BFAF8A",
                  marginLeft: "1rem",
                  flexShrink: 0,
                }}
              >
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "0.95rem",
                  color: "#5a5a5a",
                  marginTop: "0.75rem",
                  lineHeight: 1.7,
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HotelSpecialistProgram() {
  return (
    <div
className="min-h-screen" style={{ backgroundColor: "#F5F0EA", overflow: "hidden" }}>

      {/* Hero — WHY: overflow:hidden prevents the hero content from bleeding into adjacent
           sections on mobile and in preview environments. */}
      <section
        style={{
          position: "relative",
          height: "85vh",
          minHeight: "560px",
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
    >
      <PageSEO
        title="Hotel Specialist Program | Boutique Travel Advisors"
        description="BTA's Hotel Specialist Program — deep-dive training and certification for luxury travel advisors specializing in hotel knowledge and property expertise."
        path="/hotel-specialist-program"
      />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(30,30,30,0.52)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 2rem",
            maxWidth: "820px",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#BFAF8A",
              letterSpacing: "0.12em",
              marginBottom: "1rem",
            }}
          >
            A New Model for Luxury Travel Storytellers
          </p>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
              color: "#ffffff",
              letterSpacing: "0.06em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            The BTA Hotel Specialist Program
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1.1rem",
              color: "#e8e0d4",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            Your insight shapes journeys. We support everything behind the
            scenes. Turn your expertise and authority into scalable, passive
            revenue.
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#BFAF8A",
              color: "#ffffff",
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: "0.8rem",
              padding: "1rem 2.5rem",
              textDecoration: "none",
            }}
          >
            Apply to Become a Specialist
          </a>
        </div>
      </section>

      {/* Hybrid Model */}
      <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <p
            className="bta-eyebrow"
            style={{ marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            The Model
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              color: "#384959",
              marginBottom: "2rem",
              letterSpacing: "0.06em",
            }}
          >
            The Hybrid Model That Changes Everything
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1.05rem",
              color: "#5a5a5a",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            This is not a traditional affiliate program. It is not a side hustle
            dropping links. This is a professional partnership where you provide
            expert hotel recommendations and our travel coordinators handle every
            single detail behind the scenes.
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1.05rem",
              color: "#5a5a5a",
              lineHeight: 1.8,
            }}
          >
            You curate. You recommend. You share your expertise with your
            community. We book. We coordinate. We service. Your clients
            experience white-glove travel coordination. You earn 40% commission.
            Nobody touches a reservation system or answers a 2am email except
            us.
          </p>
        </div>
      </section>

      {/* About BTA */}
      <section style={{ backgroundColor: "#384959", padding: "5rem 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
            {["Virtuoso Member Agency", "Forbes Travel Guide Endorsed", "Women-Owned"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  color: "#BFAF8A",
                  border: "1px solid #BFAF8A",
                  padding: "0.4rem 1rem",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <p
            className="bta-eyebrow"
            style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            About BTA
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "2rem",
              letterSpacing: "0.06em",
            }}
          >
            Why This Is Your Moment
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1.05rem",
              color: "#c8c0b0",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Boutique Travel Advisors is a women-owned luxury travel agency with
            deep roots in the premium hospitality industry. As a Virtuoso member
            agency with Forbes Travel Guide endorsement, we specialize in
            curating exceptional hotel experiences for high-net-worth clients
            who expect nothing less than perfection.
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1.05rem",
              color: "#c8c0b0",
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Boutique Travel Advisors is inviting a select founding cohort of
            hotel specialists to join an exclusive program that transforms hotel
            expertise into a thriving luxury business. We accept approximately
            10% of applicants. If you have built trust, care deeply about
            hospitality, and want to elevate your community's travel
            experiences, this is your invitation to transform influence into
            lasting impact.
          </p>
        </div>
      </section>

      {/* Full-Width Image Strip — WHY: A cinematic image break between About BTA and the
           Earnings Calculator gives the page visual breathing room and reinforces the
           calibre of properties specialists will represent. */}
      <section
        style={{
          position: "relative",
          height: "52vh",
          minHeight: "360px",
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hotel-poolside_14bf168b.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(20,20,20,0.42)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.2vw, 1.65rem)",
              color: "rgba(255,255,255,0.92)",
              maxWidth: "720px",
              lineHeight: 1.65,
              letterSpacing: "0.02em",
            }}
          >
            "The properties you recommend become the memories your clients carry for a lifetime."
          </p>
        </div>
      </section>

      {/* Earnings Calculator */}
      <EarningsCalculator />

      {/* Stats */}
      <section style={{ backgroundColor: "#384959", padding: "4rem 0" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { stat: "$50M+", label: "Total Travel Booked", sub: "Trusted by discerning travelers worldwide" },
            { stat: "$3,066", label: "Average Hotel Booking", sub: "Premium accommodations with extended stays" },
            { stat: "2.64", label: "Average Length of Stay", sub: "Deeper guest relationships, higher revenue" },
          ].map((s) => (
            <div key={s.stat}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "2.8rem",
                  color: "#BFAF8A",
                  marginBottom: "0.25rem",
                }}
              >
                {s.stat}
              </p>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                  color: "#a0a8b8",
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Gain */}
      <section style={{ backgroundColor: "#F5F0EA", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            className="bta-eyebrow"
            style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            Infrastructure
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#384959",
              textAlign: "center",
              marginBottom: "0.5rem",
              letterSpacing: "0.06em",
            }}
          >
            What You Gain as a Hotel Specialist
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#7a7a7a",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            A complete infrastructure designed for hotel storytellers who want
            to elevate their community and build a sustainable business
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Your Branded Travel Club",
                body: "Stand out with a customized luxury travel platform. Launch your own travel club under your brand, designed to reflect your aesthetic and voice. Your personalized booking portal features your curated hotel collection, giving you a competitive advantage over affiliate links and generic booking platforms.",
              },
              {
                title: "Full Operational Support",
                body: "We handle bookings, service, and logistics — you focus on curation. No booking systems. No customer service emails. No vendor negotiations. BTA travel coordinators manage every confirmation, modification, payment, and client communication.",
              },
              {
                title: "VIP Access & Amenities",
                body: "Exclusive benefits worth $550+ per stay at 2,800+ properties. Offer perks unavailable through direct booking: complimentary breakfast, room upgrades, $100+ property credits, early check-in, late checkout, and VIP welcome amenities at Four Seasons, Aman, Rosewood, and boutique hotels worldwide.",
              },
              {
                title: "Multiple Revenue Streams",
                body: "Maximize your earning potential across four income channels. Generate revenue through à la carte hotel bookings, packaged itineraries, group retreats, and full-service referrals. Choose the models that align with your audience and expertise.",
              },
              {
                title: "Recurring Revenue Model",
                body: "Turn one-time commissions into long-term client relationships. Unlike affiliate links where clients book once then go direct, your Travel Club creates ongoing value. Members return to you for every luxury booking because that is the only way to access VIP perks and upgrades.",
              },
              {
                title: "Comprehensive Training & Support",
                body: "Hotel expertise, retreat logistics, and ongoing mentorship. Receive in-depth education on luxury hotel programs, VIP amenities, property knowledge, and how to package experiences. Get retreat planning support including contracts, supplier coordination, and deposit management.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e8e0d4",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    color: "#384959",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "0.9rem",
                    color: "#5a5a5a",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery — WHY: Three curated hotel images placed after the benefits grid
           give prospective specialists a visceral sense of the property portfolio they will
           represent, making the value proposition tangible rather than abstract. */}
      <section style={{ backgroundColor: "#fff", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            className="bta-eyebrow"
            style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            The Portfolio
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#384959",
              textAlign: "center",
              marginBottom: "2.5rem",
              letterSpacing: "0.06em",
            }}
          >
            Properties You Will Represent
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hotel-balcony-ocean_3514179c.jpg",
                caption: "Oceanfront Retreats",
                position: "center 60%",
              },
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hotel-pool-luxury_f0808683.jpg",
                caption: "Resort Collections",
                position: "center 50%",
              },
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/boutique-hotel-room_4da9868c.jpg",
                caption: "Boutique Sanctuaries",
                position: "center 40%",
              },
            ].map((item) => (
              <div
                key={item.caption}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "320px",
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: item.position,
                    display: "block",
                    transition: "transform 0.7s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem 1.25rem 1rem",
                    background:
                      "linear-gradient(to top, rgba(20,20,20,0.65) 0%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontSize: "0.78rem",
                      color: "#BFAF8A",
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Member Privileges */}
      <section style={{ backgroundColor: "#384959", padding: "5rem 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <p
            className="bta-eyebrow"
            style={{ marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            Member Benefits
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#ffffff",
              marginBottom: "1rem",
              letterSpacing: "0.06em",
            }}
          >
            Exclusive Member Privileges
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#c8c0b0",
              marginBottom: "2.5rem",
            }}
          >
            Your community gains access to $550+ in complimentary amenities per
            stay at over 2,800 luxury properties worldwide.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              "Negotiated Rates",
              "VIP Welcome",
              "Complimentary Breakfast for Two Daily",
              "Resort or Spa Credit",
              "Room Upgrade if Available on Arrival",
              "Early Check-In and Late Check-Out",
            ].map((benefit) => (
              <div
                key={benefit}
                style={{
                  border: "1px solid rgba(191,175,138,0.4)",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "0.9rem",
                    color: "#e8e0d4",
                  }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            className="bta-eyebrow"
            style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            Voices from Our Specialists
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#384959",
              textAlign: "center",
              marginBottom: "3rem",
              letterSpacing: "0.06em",
            }}
          >
            Hear From Our Hotel Storytellers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                quote:
                  "BTA helps me build stronger connections and gain valuable insights, so I can confidently suggest hotels that fit my community's lifestyle. It lets me serve them better, not just by sharing great content, but also by offering more expertise and care with each stay.",
                name: "Ava Roxanne Stritt",
                role: "Founder · @SpaTravelGal",
              },
              {
                quote:
                  "For over 30 years, The Hotel Guide has been built on trust, relationships, and value in hospitality. This partnership allows us to extend that commitment beyond inspiration — giving our audience a smarter, more confident way to book exceptional hotels around the world.",
                name: "Edward R. Leos",
                role: "CEO & Publisher · The Hotel Guide",
              },
              {
                quote:
                  "I've been a travel photographer for 15 years. This program finally lets me monetize my hotel expertise in a way that aligns with luxury — no more sending my followers to discount booking sites.",
                name: "Elena Torres",
                role: "Hotel Specialist · Boutique Properties",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "#F5F0EA",
                  padding: "2rem",
                  borderLeft: "3px solid #BFAF8A",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "#5a5a5a",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  "{t.quote}"
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "0.9rem",
                    color: "#384959",
                    marginBottom: "0.2rem",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "#BFAF8A",
                  }}
                >
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion />

      {/* Final CTA */}
      <section
        style={{
          backgroundColor: "#384959",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          className="bta-eyebrow"
          style={{ marginBottom: "0.5rem", letterSpacing: "0.12em" }}
        >
          Ready to Transform Your Influence?
        </p>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "normal",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            color: "#ffffff",
            marginBottom: "1.5rem",
            letterSpacing: "0.06em",
          }}
        >
          Join the Founding Cohort
        </h2>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "1.05rem",
            color: "#c8c0b0",
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Join the founding cohort of BTA Hotel Specialists and redefine what
          it means to be a luxury hotel authority. If you have built trust, care
          about hospitality at a philosophical level, and want your community to
          experience VIP treatment, we invite you to apply.
        </p>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#BFAF8A",
            color: "#ffffff",
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "normal",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: "0.8rem",
            padding: "1rem 2.5rem",
            textDecoration: "none",
          }}
        >
          Apply to Become a BTA Hotel Specialist
        </a>
      </section>
    </div>
  );
}
