/**
 * HotelCollectionApplication.tsx
 *
 * Application form for hotels to join the BTA Hotel Collection.
 * Typography rules:
 * - Instrument Serif: ALL CAPS, weight 400, upright — section titles
 * - Playfair Display: weight 500, italic — subheadings
 * - Playfair Display: weight 400, upright — body text
 */

import { useState } from "react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hotel-specialist-hero_02b02bea.webp";

const CRITERIA = [
  {
    title: "Boutique or Independent",
    body: "Properties with 5 to 150 rooms that maintain a distinct identity, architectural character, and personalized service ethos.",
  },
  {
    title: "Luxury or Upper-Upscale Positioning",
    body: "Minimum four-star designation or equivalent independent standard. Properties must demonstrate consistent delivery of premium guest experiences.",
  },
  {
    title: "Virtuoso or Preferred Partner Eligible",
    body: "Willingness to participate in a preferred amenity program offering complimentary breakfast, room upgrades, and property credits to BTA clients.",
  },
  {
    title: "Aligned Brand Values",
    body: "A commitment to discretion, personalized service, and long-term guest relationships. Properties that prioritize quality over volume.",
  },
  {
    title: "Dedicated Reservations Contact",
    body: "A named contact for BTA advisor relations who can respond to booking inquiries and VIP requests within 24 hours.",
  },
  {
    title: "Unique Sense of Place",
    body: "Properties that offer guests an authentic connection to their destination — through design, cuisine, programming, or local partnerships.",
  },
];

const BENEFITS = [
  "Access to BTA's curated client base of high-net-worth travelers",
  "Inclusion in the BTA Hotel Collection digital and print materials",
  "Featured placement in BTA Hotel Specialist advisor recommendations",
  "Preferred partner amenity program participation",
  "Co-marketing opportunities through BTA's content channels",
  "Dedicated BTA advisor relations contact for seamless booking support",
];

interface FormData {
  propertyName: string;
  propertyLocation: string;
  roomCount: string;
  starRating: string;
  website: string;
  contactName: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  propertyType: string;
  virtuosoMember: string;
  amenityProgram: string;
  description: string;
  uniqueFeatures: string;
  additionalInfo: string;
}

export default function HotelCollectionApplication() {
  const [form, setForm] = useState<FormData>({
    propertyName: "",
    propertyLocation: "",
    roomCount: "",
    starRating: "",
    website: "",
    contactName: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    propertyType: "",
    virtuosoMember: "",
    amenityProgram: "",
    description: "",
    uniqueFeatures: "",
    additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would submit to a tRPC endpoint
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid #d8d0c4",
    backgroundColor: "#fff",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "0.95rem",
    color: "#384959",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Instrument Serif', serif",
    fontStyle: "normal",
    fontWeight: 400,
    textTransform: "uppercase" as const,
    fontSize: "0.65rem",
    letterSpacing: "0.12em",
    color: "#384959",
    display: "block",
    marginBottom: "0.4rem",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0EA" }}>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "60vh",
          minHeight: "420px",
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(30,30,30,0.55)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 2rem",
            maxWidth: "720px",
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
            Join the BTA Hotel Collection
          </p>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
              color: "#ffffff",
              letterSpacing: "0.06em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Hotel Collection Application
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "1rem",
              color: "#e8e0d4",
              lineHeight: 1.7,
            }}
          >
            We partner with a carefully curated selection of boutique and
            independent luxury properties worldwide. Applications are reviewed
            on a rolling basis.
          </p>
        </div>
      </section>

      {/* Criteria */}
      <section style={{ backgroundColor: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            className="bta-eyebrow"
            style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            Selection Criteria
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              color: "#384959",
              textAlign: "center",
              marginBottom: "0.75rem",
              letterSpacing: "0.06em",
            }}
          >
            What We Look For
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
            The BTA Hotel Collection is selective by design. We partner with
            properties that share our commitment to exceptional, personalized
            luxury.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CRITERIA.map((c) => (
              <div
                key={c.title}
                style={{
                  backgroundColor: "#F5F0EA",
                  border: "1px solid #e8e0d4",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "2px",
                    height: "2rem",
                    backgroundColor: "#BFAF8A",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    color: "#384959",
                    marginBottom: "0.75rem",
                  }}
                >
                  {c.title}
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
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "#384959", padding: "4rem 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <p
            className="bta-eyebrow"
            style={{ marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            Partnership Benefits
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "#ffffff",
              marginBottom: "2.5rem",
              letterSpacing: "0.06em",
            }}
          >
            What Collection Membership Includes
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {BENEFITS.map((b) => (
              <li
                key={b}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "0.95rem",
                  color: "#e8e0d4",
                  padding: "0.85rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#BFAF8A", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <section style={{ backgroundColor: "#F5F0EA", padding: "5rem 0" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            className="bta-eyebrow"
            style={{ textAlign: "center", marginBottom: "0.5rem", letterSpacing: "0.12em" }}
          >
            Apply Now
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              color: "#384959",
              textAlign: "center",
              marginBottom: "0.75rem",
              letterSpacing: "0.06em",
            }}
          >
            Hotel Collection Application
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "#7a7a7a",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Applications are reviewed within 5 business days. We will contact
            you to discuss next steps if your property is a strong fit.
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px solid #BFAF8A",
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "1.4rem",
                  letterSpacing: "0.08em",
                  color: "#384959",
                  marginBottom: "1rem",
                }}
              >
                Application Received
              </h3>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "1rem",
                  color: "#5a5a5a",
                  lineHeight: 1.7,
                }}
              >
                Thank you for your interest in the BTA Hotel Collection. Our
                team will review your application and be in touch within 5
                business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Property Details */}
              <div
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
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    color: "#BFAF8A",
                    marginBottom: "1.5rem",
                  }}
                >
                  Property Details
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Property Name *</label>
                    <input
                      style={inputStyle}
                      name="propertyName"
                      value={form.propertyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Location (City, Country) *</label>
                    <input
                      style={inputStyle}
                      name="propertyLocation"
                      value={form.propertyLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Number of Rooms *</label>
                    <input
                      style={inputStyle}
                      name="roomCount"
                      type="number"
                      value={form.roomCount}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Star Rating / Classification *</label>
                    <select
                      style={inputStyle}
                      name="starRating"
                      value={form.starRating}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="5-star">5-Star / Ultra-Luxury</option>
                      <option value="4-star">4-Star / Luxury</option>
                      <option value="boutique">Boutique (Independent Rating)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Property Type *</label>
                    <select
                      style={inputStyle}
                      name="propertyType"
                      value={form.propertyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="boutique-hotel">Boutique Hotel</option>
                      <option value="resort">Resort</option>
                      <option value="villa">Villa / Private Estate</option>
                      <option value="lodge">Safari Lodge / Eco-Lodge</option>
                      <option value="palace">Palace / Historic Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Website *</label>
                    <input
                      style={inputStyle}
                      name="website"
                      type="url"
                      placeholder="https://"
                      value={form.website}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div
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
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    color: "#BFAF8A",
                    marginBottom: "1.5rem",
                  }}
                >
                  Primary Contact
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      style={inputStyle}
                      name="contactName"
                      value={form.contactName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Title / Role *</label>
                    <input
                      style={inputStyle}
                      name="contactTitle"
                      value={form.contactTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      style={inputStyle}
                      name="contactEmail"
                      type="email"
                      value={form.contactEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      style={inputStyle}
                      name="contactPhone"
                      type="tel"
                      value={form.contactPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Program Fit */}
              <div
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
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    color: "#BFAF8A",
                    marginBottom: "1.5rem",
                  }}
                >
                  Program Fit
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={labelStyle}>Are you a current Virtuoso member? *</label>
                    <select
                      style={inputStyle}
                      name="virtuosoMember"
                      value={form.virtuosoMember}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="applying">Currently Applying</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Are you willing to offer a preferred amenity program (breakfast, credits, upgrades)? *
                    </label>
                    <select
                      style={inputStyle}
                      name="amenityProgram"
                      value={form.amenityProgram}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="yes-full">Yes — full amenity package</option>
                      <option value="yes-partial">Yes — partial amenity package</option>
                      <option value="discuss">Open to discussion</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Property Description *</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Describe your property, its character, and what makes it exceptional."
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      What makes your property unique? *
                    </label>
                    <textarea
                      style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
                      name="uniqueFeatures"
                      value={form.uniqueFeatures}
                      onChange={handleChange}
                      placeholder="Architecture, programming, cuisine, location, service philosophy..."
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Additional Information</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                      name="additionalInfo"
                      value={form.additionalInfo}
                      onChange={handleChange}
                      placeholder="Anything else you would like us to know."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#384959",
                  color: "#ffffff",
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontSize: "0.8rem",
                  padding: "1.1rem 2.5rem",
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
