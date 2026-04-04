/**
 * HotelCollectionApplication. /hotel-collection-application
 *
 * Converted from landing-pages/hotel-collection.html (feature/hotel-collection-landing-page branch).
 * All sections, content, and layout are preserved exactly from the source HTML.
 * Styling uses Tailwind utilities + inline styles for brand-precise values.
 *
 * Sections:
 *  1. Hero
 *  2. Who We Are
 *  3. How Our Platform Is Used (3 cards)
 *  4. Endorsement Requirement
 *  5. Property Standards
 *  6. Commercial Alignment
 *  7. Why Hotels Partner With BTA (4 cards)
 *  8. Our Reach & Impact (metrics + strategic visibility)
 *  9. Final CTA / Apply
 */

import React from "react";
import NavBar from "@/components/NavBar";

// ─── Shared primitives ────────────────────────────────────────────────────────

function GoldDivider({ center = false }: { center?: boolean }) {
  return (
    <div
      style={{
        width: 60,
        height: 2,
        background: "#bfaf8a",
        marginBottom: "1.5rem",
        marginLeft: center ? "auto" : undefined,
        marginRight: center ? "auto" : undefined,
      }}
    />
  );
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        lineHeight: 1.2,
        fontWeight: 400,
        color: light ? "#ffffff" : "#2f2f2f",
      }}
    >
      {children}
    </h2>
  );
}

function Subheading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      style={{
        fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
        lineHeight: 1.6,
        fontStyle: "italic",
        color: light ? "rgba(255,255,255,0.85)" : "#384959",
      }}
    >
      {children}
    </p>
  );
}

function BodyText({
  children,
  large = false,
  style,
}: {
  children: React.ReactNode;
  large?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: large ? "1.125rem" : "1rem",
        lineHeight: 1.8,
        color: "#2f2f2f",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}
        >
          <span
            style={{
              color: "#bfaf8a",
              fontWeight: "bold",
              fontSize: "1.5rem",
              flexShrink: 0,
              lineHeight: 1.2,
            }}
          >
            ✓
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#384959",
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
        position: "relative",
        background: "linear-gradient(135deg, #ffffff 0%, #edeae4 100%)",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
          alt="Luxury Hotel"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.75), rgba(255,255,255,0.4))",
          }}
        />
      </div>

      <div
        className="max-w-[1440px] mx-auto px-8 lg:px-14 relative"
        style={{ zIndex: 10, width: "100%" }}
      >
        <div style={{ maxWidth: "50rem" }}>
          <GoldDivider />
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#2f2f2f",
              marginBottom: "1.5rem",
            }}
          >
            BOUTIQUE TRAVEL ADVISORS HOTEL COLLECTION
          </h1>
          <Subheading>
            A Curated Platform for Hotels That Value Relationship-Based Distribution
          </Subheading>
          <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            <BodyText large>
              We invite select properties to apply for inclusion in our Hotel Collection — a curated
              booking platform used by our advisors, their private travel clubs, and aligned
              communities seeking trusted luxury accommodations.
            </BodyText>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="#apply"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "#bfaf8a",
                color: "#2f2f2f",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "0.25rem",
              }}
            >
              Apply for Consideration →
            </a>
            <a
              href="#learn-more"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "transparent",
                color: "#2f2f2f",
                border: "2px solid #bfaf8a",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "0.25rem",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Who We Are ────────────────────────────────────────────────────

function WhoWeAreSection() {
  return (
    <section
      id="learn-more"
      style={{
        padding: "6rem 0",
        background: "linear-gradient(135deg, #ffffff 0%, #edeae4 50%, #ffffff 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
            gap: "3rem",
          }}
        >
          <div>
            <GoldDivider />
            <SectionHeading>WHO WE ARE</SectionHeading>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <BodyText large>
              Boutique Travel Advisors is a luxury travel advisory firm built on long-standing
              industry relationships, strategic partnerships, and a commitment to traveler advocacy.
            </BodyText>
            <BodyText style={{ color: "#384959" }}>
              We are advisors first. Our team works directly with affluent families, philanthropic
              leaders, cultural institutions, professional organizations, and private membership
              communities. Through our proprietary technology, we power Luxury Travel Clubs that
              allow advisors and trusted community leaders to curate travel for their audiences.
            </BodyText>
            <BodyText style={{ color: "#384959" }}>
              Our booking engine is powered by Sabre and is not designed for mass consumption. It
              is a professional research and recommendation platform used by BTA advisors
              researching and shortlisting properties, travelers who are members of their advisor's
              private travel club, and approved club communities affiliated with our network.
            </BodyText>
            <BodyText style={{ color: "#384959" }}>
              BTA maintains a proprietary rate code for preferred partners, ensuring seamless
              booking integration and recognition across our advisor network.
            </BodyText>
            <BodyText style={{ color: "#2f2f2f", fontWeight: 600 }}>
              Every hotel within our system has been intentionally selected. Our advisors rely on
              the platform to confidently recommend properties that reflect our standards and
              protect our reputation.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: How Our Platform Is Used ─────────────────────────────────────

function PlatformUsageSection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "linear-gradient(180deg, #edeae4 0%, #ffffff 50%, #edeae4 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "#bfaf8a",
          filter: "blur(60px)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "#384959",
          filter: "blur(60px)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-[1440px] mx-auto px-8 lg:px-14"
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <GoldDivider center />
          <SectionHeading>HOW OUR PLATFORM IS USED</SectionHeading>
          <div style={{ marginTop: "1rem" }}>
            <Subheading>Our Hotel Collection serves three interconnected audiences</Subheading>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
            gap: "2rem",
          }}
        >
          {/* Card 1 — gold */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "0.25rem",
              background: "linear-gradient(135deg, #bfaf8a 0%, #a89977 100%)",
              color: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-2rem",
                right: "-2rem",
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
              }}
            />
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "3.5rem",
                fontWeight: 400,
                lineHeight: 1,
                color: "white",
                marginBottom: "1rem",
              }}
            >
              01
            </div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              ADVISORS
            </h3>
            <BodyText style={{ color: "rgba(255,255,255,0.9)" }}>
              Our advisors use the platform to research properties, confirm amenity inclusions,
              validate renovation timelines, access preferred partner details, and recommend
              hotels within curated club portals.
            </BodyText>
            <div
              style={{
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.3)",
                marginTop: "1rem",
              }}
            >
              <BodyText style={{ color: "white", fontWeight: 500, fontStyle: "italic" }}>
                This is a working tool, not a directory.
              </BodyText>
            </div>
          </div>

          {/* Card 2 — white */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "0.25rem",
              background: "white",
              border: "2px solid rgba(191,175,138,0.3)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "3.5rem",
                fontWeight: 400,
                lineHeight: 1,
                color: "#384959",
                marginBottom: "1rem",
              }}
            >
              02
            </div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#2f2f2f",
                marginBottom: "1rem",
              }}
            >
              ADVISOR CLUB MEMBERS
            </h3>
            <BodyText style={{ color: "#384959" }}>
              Each BTA advisor may operate a private Luxury Travel Club. Members of those clubs
              access a curated collection of approved hotels. They do not browse
              indiscriminately. They view properties their advisor stands behind.
            </BodyText>
          </div>

          {/* Card 3 — navy */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "0.25rem",
              background: "#384959",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "2px",
                background: "linear-gradient(to right, transparent, #bfaf8a, transparent)",
              }}
            />
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "3.5rem",
                fontWeight: 400,
                lineHeight: 1,
                color: "#bfaf8a",
                marginBottom: "1rem",
              }}
            >
              03
            </div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              COMMUNITY-BASED TRAVEL CLUBS
            </h3>
            <BodyText style={{ color: "rgba(255,255,255,0.9)" }}>
              We power travel platforms for philanthropic organizations, arts institutions,
              professional associations, and membership communities. These groups rely on our
              standards and advisor support.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Endorsement Requirement ──────────────────────────────────────

function EndorsementSection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background:
          "linear-gradient(rgba(255,255,255,0.92), rgba(237,234,228,0.92)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <GoldDivider center />
          <SectionHeading>OUR ENDORSEMENT REQUIREMENT</SectionHeading>
          <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            <BodyText large>
              Inclusion in the Boutique Travel Advisors Hotel Collection requires endorsement.
            </BodyText>
          </div>

          <div
            style={{
              background: "white",
              border: "2px solid rgba(191,175,138,0.3)",
              borderRadius: "0.25rem",
              padding: "2.5rem",
              textAlign: "left",
              maxWidth: "42rem",
              margin: "2rem auto 0",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                color: "#2f2f2f",
                marginBottom: "1.5rem",
              }}
            >
              A property must be recommended by:
            </h3>
            <CheckList items={["A BTA advisor who has personally experienced the hotel"]} />
            <div style={{ textAlign: "center", margin: "1rem 0" }}>
              <p style={{ color: "#bfaf8a", fontSize: "1.5rem", fontWeight: 600 }}>OR</p>
            </div>
            <CheckList items={["One of our preferred marketing representation partners"]} />
            <div
              style={{
                paddingTop: "1.5rem",
                borderTop: "2px solid #edeae4",
                marginTop: "1.5rem",
              }}
            >
              <BodyText style={{ fontStyle: "italic", color: "#384959" }}>
                We do not onboard properties based solely on brand recognition or public
                reputation. Personal experience and professional validation are essential.
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Property Standards ───────────────────────────────────────────

function PropertyStandardsSection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background:
          "linear-gradient(rgba(255,255,255,0.95), rgba(237,234,228,0.90)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <GoldDivider center />
          <SectionHeading>OUR PROPERTY STANDARDS</SectionHeading>
          <div style={{ marginTop: "1rem" }}>
            <Subheading>
              We maintain high standards to protect both our travelers and our hotel partners
            </Subheading>
          </div>
        </div>

        <div
          style={{
            background: "white",
            border: "2px solid rgba(191,175,138,0.3)",
            borderRadius: "0.25rem",
            padding: "2.5rem",
            maxWidth: "48rem",
            margin: "0 auto 4rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <BodyText style={{ color: "#384959", marginBottom: "1rem" }}>
            For new hotels in our collection, we prioritize{" "}
            <strong>boutique and family-owned properties</strong> where relationships are the
            driving force and off-the-beaten-path locations.
          </BodyText>
          <BodyText style={{ color: "#384959" }}>
            <strong>All properties must be 4 or 5 star caliber.</strong>
          </BodyText>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
            gap: "3rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                color: "#2f2f2f",
                marginBottom: "1.5rem",
              }}
            >
              Physical Standards
            </h3>
            <CheckList
              items={[
                "4 or 5 star caliber property",
                "Built or comprehensively renovated within the last five years",
                "Contemporary design integrity",
                "Demonstrated investment in maintenance and guest experience",
              ]}
            />
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                color: "#2f2f2f",
                marginBottom: "1.5rem",
              }}
            >
              Operational Standards
            </h3>
            <CheckList
              items={[
                "Direct relationship with General Manager or Sales Leadership",
                "Commitment to VIP recognition for BTA guests",
                "Transparent communication",
              ]}
            />
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                color: "#2f2f2f",
                marginBottom: "1.5rem",
              }}
            >
              Amenity Standards
            </h3>
            <CheckList
              items={[
                "Breakfast for two daily",
                "Property credit",
                "Upgrade consideration",
                "Welcome amenity",
                "Priority status recognition",
              ]}
            />
            <BodyText style={{ fontStyle: "italic", paddingTop: "1rem", color: "#384959" }}>
              Our travelers expect parity with programs such as Virtuoso and other preferred
              networks. Consistency is essential.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Commercial Alignment ─────────────────────────────────────────

function CommercialAlignmentSection() {
  return (
    <section style={{ padding: "6rem 0", background: "white" }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <GoldDivider center />
            <SectionHeading>COMMERCIAL ALIGNMENT & ADVISOR PRIORITIZATION</SectionHeading>
            <div style={{ marginTop: "1rem" }}>
              <Subheading>We prioritize partners who prioritize the advisory relationship</Subheading>
            </div>
          </div>

          <BodyText large style={{ marginBottom: "2rem" }}>
            Boutique Travel Advisors is a relationship-driven advisory firm. Our advisors invest
            significant time in research, personalization, and guest advocacy. In return, we seek
            commercial structures that reflect the value of that partnership.
          </BodyText>

          <div
            style={{
              background: "white",
              border: "2px solid rgba(191,175,138,0.3)",
              borderRadius: "0.25rem",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.5rem",
                color: "#2f2f2f",
                marginBottom: "1.5rem",
              }}
            >
              To be considered for inclusion in our Hotel Collection, we ask for:
            </h3>
            <CheckList
              items={[
                "A competitive commission structure that supports advisor prioritization",
                "Elevated commission consideration for preferred partners",
                "Direct booking recognition through our advisory channel",
                "Clear and consistent commission processing",
              ]}
            />
          </div>

          <h3
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "1.5rem",
              color: "#2f2f2f",
              marginBottom: "1rem",
            }}
          >
            Why This Matters
          </h3>
          <BodyText style={{ color: "#384959", marginBottom: "1rem" }}>
            Our advisors guide clients toward properties that align with guest experience
            standards, operational reliability, amenity consistency, relationship
            responsiveness, and commercial alignment.
          </BodyText>
          <BodyText style={{ color: "#384959", marginBottom: "1rem" }}>
            When a property offers an elevated commission structure, it signals commitment to
            the partnership and allows our advisory team to confidently prioritize that hotel
            within recommendations.
          </BodyText>
          <BodyText style={{ color: "#384959" }}>
            <strong>This is not about rate manipulation. It is about alignment.</strong> Hotels
            that invest in advisor relationships benefit from increased recommendation
            frequency, greater visibility inside private club portals, direct bookings over OTA
            displacement, and long-term loyalty from our advisor network.
          </BodyText>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Why Hotels Partner With BTA ──────────────────────────────────

const WHY_CARDS = [
  {
    borderColor: "#bfaf8a",
    title: "ACCESS TO HIGH-INTENT TRAVELERS",
    body: "Our clubs generate qualified demand from trusted audiences. These are members of communities, not anonymous shoppers.",
  },
  {
    borderColor: "#384959",
    title: "ADVISOR ADVOCACY",
    body: "Every booking is supported by an experienced advisor who communicates preferences, advocates for recognition, and ensures alignment before arrival.",
  },
  {
    borderColor: "#bfaf8a",
    title: "ELEVATED BOOKING VALUE",
    body: "Our typical bookings exceed $3,000 and often include suite categories, extended stays, and experiential add-ons.",
  },
  {
    borderColor: "#384959",
    title: "BRAND-FORWARD POSITIONING",
    body: "We focus on storytelling, destination alignment, and long-term relationship building rather than discount-led marketing.",
  },
];

function WhyPartnerSection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "linear-gradient(135deg, #ffffff 0%, #edeae4 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <GoldDivider center />
          <SectionHeading>WHY HOTELS PARTNER WITH BTA</SectionHeading>
          <div style={{ marginTop: "1rem" }}>
            <Subheading>Four compelling reasons to join our collection</Subheading>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            gap: "2rem",
          }}
        >
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                padding: "2.5rem",
                borderRadius: "0.25rem",
                background: "white",
                borderLeft: `4px solid ${card.borderColor}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#2f2f2f",
                  marginBottom: "1rem",
                }}
              >
                {card.title}
              </h3>
              <BodyText style={{ color: "#384959" }}>{card.body}</BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Our Reach & Impact ───────────────────────────────────────────

function ReachImpactSection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "linear-gradient(135deg, #ffffff 0%, #edeae4 50%, #ffffff 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <GoldDivider center />
          <SectionHeading>OUR REACH & IMPACT</SectionHeading>
          <div style={{ marginTop: "1rem" }}>
            <Subheading>We are growing. Here's what that means for our hotel partners.</Subheading>
          </div>
        </div>

        {/* Key Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              number: "$3,066",
              label: "AVERAGE BOOKING VALUE",
              body: "Our travelers book premium accommodations with extended stays and experiential add-ons",
            },
            {
              number: "2.64",
              label: "AVERAGE LENGTH OF STAY",
              body: "Longer stays mean deeper guest relationships and higher property revenue per booking",
            },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                padding: "2.5rem",
                borderRadius: "0.25rem",
                background: "white",
                border: "2px solid rgba(191,175,138,0.3)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "4rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#bfaf8a",
                  marginBottom: "0.75rem",
                }}
              >
                {m.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#2f2f2f",
                  marginBottom: "0.75rem",
                }}
              >
                {m.label}
              </h3>
              <BodyText style={{ color: "#384959" }}>{m.body}</BodyText>
            </div>
          ))}
        </div>

        {/* 27M+ Reach */}
        <div
          style={{
            padding: "3rem 2.5rem",
            borderRadius: "0.25rem",
            background: "#384959",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "4.5rem",
              fontWeight: 400,
              lineHeight: 1,
              color: "#bfaf8a",
              marginBottom: "0.5rem",
            }}
          >
            27M+
          </div>
          <h3
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "1.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            ANNUAL REACH
          </h3>
          <BodyText
            large
            style={{ color: "white", maxWidth: "48rem", margin: "0 auto 2rem" }}
          >
            Through our Hotel Specialists, Independent Affiliate Advisors, and community club
            platforms, BTA properties gain access to an audience of over 27 million qualified
            travelers annually.
          </BodyText>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {[
              { stat: "$250K+", label: "Average Household Income" },
              { stat: "30–65", label: "Age Range" },
              { stat: "Multiple", label: "Trips Per Year" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "2rem",
                    color: "#bfaf8a",
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.stat}
                </div>
                <BodyText style={{ color: "white" }}>{s.label}</BodyText>
              </div>
            ))}
          </div>
          <BodyText style={{ color: "white", fontStyle: "italic", marginTop: "1rem" }}>
            Experience-driven travelers who value quality, service, and brand reputation
          </BodyText>
        </div>

        {/* Strategic Visibility */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionHeading>
            STRATEGIC VISIBILITY THAT CONVERTS TO HIGH-VALUE BOOKINGS
          </SectionHeading>
          <div style={{ marginTop: "1rem" }}>
            <BodyText
              style={{ maxWidth: "48rem", margin: "0 auto", color: "#384959" }}
            >
              We position your property in front of discerning, affluent travelers through
              authority, editorial credibility, and sustained digital presence.
            </BodyText>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              num: "01",
              numColor: "white",
              bg: "linear-gradient(135deg, #bfaf8a 0%, #a89977 100%)",
              titleColor: "white",
              bodyColor: "rgba(255,255,255,0.9)",
              title: "AUTHORITY & RECOGNITION",
              body: "Industry awards, thought leadership, and curated partnerships that elevate brand perception and distinguish your property within a competitive luxury landscape.",
            },
            {
              num: "02",
              numColor: "#384959",
              bg: "white",
              border: "2px solid rgba(191,175,138,0.3)",
              titleColor: "#2f2f2f",
              bodyColor: "#384959",
              title: "EDITORIAL INFLUENCE",
              body: "Refined, experience-driven storytelling placed where sophisticated travelers seek inspiration and validation.",
            },
            {
              num: "03",
              numColor: "#bfaf8a",
              bg: "linear-gradient(135deg, rgba(191,175,138,0.05), white)",
              border: "1px solid rgba(191,175,138,0.2)",
              titleColor: "#2f2f2f",
              bodyColor: "#384959",
              title: "TRUST & CREDIBILITY",
              body: "Authentic recommendations built on firsthand experience and an established reputation with a highly educated, high-net-worth audience.",
            },
            {
              num: "04",
              numColor: "#bfaf8a",
              bg: "#384959",
              titleColor: "white",
              bodyColor: "rgba(255,255,255,0.9)",
              title: "SEARCH VISIBILITY (SEO)",
              body: "Long-term digital positioning that ensures your property remains discoverable during high-intent planning moments.",
            },
            {
              num: "05",
              numColor: "#384959",
              bg: "linear-gradient(135deg, white, rgba(56,73,89,0.05))",
              border: "1px solid rgba(56,73,89,0.15)",
              titleColor: "#2f2f2f",
              bodyColor: "#384959",
              title: "TARGETED LUXURY AUDIENCE EXPOSURE",
              body: "Strategic email and social distribution that extends reach, reinforces messaging, and accelerates engagement.",
              wide: true,
            },
          ].map((c) => (
            <div
              key={c.title}
              style={{
                padding: "2.5rem",
                borderRadius: "0.25rem",
                background: c.bg,
                border: c.border,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                gridColumn: c.wide ? "1 / -1" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "3.5rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: c.numColor,
                  marginBottom: "1rem",
                }}
              >
                {c.num}
              </div>
              <h4
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.25rem",
                  color: c.titleColor,
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {c.title}
              </h4>
              <BodyText style={{ color: c.bodyColor }}>{c.body}</BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Final CTA / Apply ────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section
      id="apply"
      style={{
        padding: "6rem 0",
        background:
          "linear-gradient(rgba(56,73,89,0.75), rgba(47,47,47,0.80)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <GoldDivider center />
          <SectionHeading light>READY TO APPLY?</SectionHeading>
          <div style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
            <BodyText large style={{ color: "#ffffff" }}>
              Boutique Travel Advisors is building a curated distribution ecosystem designed for
              long-term partnership, community-based demand, and brand integrity.
            </BodyText>
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <BodyText large style={{ color: "#ffffff" }}>
              If your property values thoughtful growth over volume exposure, we welcome your
              application.
            </BodyText>
          </div>
          <a
            href="mailto:hotels@boutiquetraveladvisors.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1.25rem 2.5rem",
              fontSize: "1.125rem",
              fontWeight: 500,
              borderRadius: "0.25rem",
              background: "#bfaf8a",
              color: "#2f2f2f",
              textDecoration: "none",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Apply for Consideration →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HotelCollectionApplication() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <WhoWeAreSection />
      <PlatformUsageSection />
      <EndorsementSection />
      <PropertyStandardsSection />
      <CommercialAlignmentSection />
      <WhyPartnerSection />
      <ReachImpactSection />
      <FinalCtaSection />
    </div>
  );
}
