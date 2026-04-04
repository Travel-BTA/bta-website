/**
 * PrivacyPolicy.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * BTA Typography Rules (enforced throughout):
 *   H1 (page title)   → Instrument Serif, ALL CAPS, white (on photo)
 *   H2 (section)      → Playfair Display, SemiBold Italic, Champagne Gold #bfaf8a (on plain bg)
 *   Body               → Playfair Display, Regular
 *   Script accent      → Allura (one-off only)
 *   Champagne Gold     → ONLY on solid/plain backgrounds, NEVER over photos
 *   White text         → on all photo/dark overlay backgrounds
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { Link } from "wouter";

const PHOTO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/privacy-header-bg-ZUSuA3fMZYjE4c975UbM4U.webp";

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a3228", lineHeight: "1.8" }}>
          We collect information that identifies, relates to, describes, or is capable of being associated with you ("Personal Data"). This includes information you provide directly to us and information we collect automatically.
        </p>
        <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: "italic", fontSize: "1.05rem", color: "#384959" }}>
          Personal Data You Provide
        </h3>
        <ul className="mb-4 space-y-2 pl-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8", listStyleType: "disc" }}>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
          <li><strong>Travel Details:</strong> Passport information, date of birth, gender, emergency contact details, and travel preferences such as dietary restrictions, seating preferences, and loyalty program numbers.</li>
          <li><strong>Financial Information:</strong> Credit card details or bank account information for payment processing, collected securely and not stored longer than necessary.</li>
          <li><strong>Communication Data:</strong> Records of your correspondence with us, including emails and phone calls.</li>
        </ul>
        <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: "italic", fontSize: "1.05rem", color: "#384959" }}>
          Information Collected Automatically
        </h3>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          When you visit our website, we automatically collect certain information, including your IP address, browser type, operating system, referring URLs, and information about your activity on our site such as pages viewed and time spent. This is primarily collected through cookies and similar tracking technologies, as detailed in our separate Cookie Policy.
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a3228", lineHeight: "1.8" }}>
          We use the collected information for various purposes, primarily to provide and improve our travel advisory services:
        </p>
        <ul className="space-y-2 pl-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8", listStyleType: "disc" }}>
          <li><strong>To Fulfill Travel Services:</strong> To book and confirm your travel arrangements, including flights, accommodations, tours, and transfers with third-party suppliers.</li>
          <li><strong>Communication:</strong> To send you confirmations, updates, and important information regarding your itinerary.</li>
          <li><strong>Personalization:</strong> To tailor our service offerings and recommendations to your specific travel preferences and history.</li>
          <li><strong>Marketing:</strong> To send you promotional materials, newsletters, and special offers, where permitted by law and based on your consent.</li>
          <li><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
        </ul>
      </>
    ),
  },
  {
    number: "3",
    title: "Sharing and Disclosure of Your Information",
    content: (
      <>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a3228", lineHeight: "1.8" }}>
          We only share your Personal Data with third parties when necessary to provide our services or when legally required.
        </p>
        <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: "italic", fontSize: "1.05rem", color: "#384959" }}>
          Third-Party Travel Suppliers
        </h3>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          We must share essential Personal Data with airlines, hotels, tour operators, and other third-party suppliers to facilitate your bookings. We only provide the information necessary for them to fulfill their services.
        </p>
        <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: "italic", fontSize: "1.05rem", color: "#384959" }}>
          Service Providers
        </h3>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          We engage trusted third-party companies and individuals to perform services on our behalf, such as payment processing, website hosting, and analytics. These providers are obligated to protect your data and use it only for the purposes for which it was disclosed.
        </p>
        <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: "italic", fontSize: "1.05rem", color: "#384959" }}>
          Legal Requirements
        </h3>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or protect the personal safety of users or the public.
        </p>
      </>
    ),
  },
  {
    number: "4",
    title: "Data Security and Retention",
    content: (
      <>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a3228", lineHeight: "1.8" }}>
          We implement a variety of security measures to maintain the safety of your Personal Data. We use secure servers and encryption technologies to protect sensitive information transmitted online.
        </p>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
        </p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          We retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy, including for the duration of our business relationship and to satisfy any legal, accounting, or reporting requirements.
        </p>
      </>
    ),
  },
  {
    number: "5",
    title: "Your Data Protection Rights",
    content: (
      <>
        <p className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a3228", lineHeight: "1.8" }}>
          Depending on your location, you may have the following rights regarding your Personal Data:
        </p>
        <ul className="space-y-2 pl-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8", listStyleType: "disc" }}>
          <li><strong>Right to Access:</strong> The right to request copies of your Personal Data.</li>
          <li><strong>Right to Rectification:</strong> The right to request that we correct any information you believe is inaccurate or incomplete.</li>
          <li><strong>Right to Erasure:</strong> The right to request that we erase your Personal Data, under certain conditions.</li>
          <li><strong>Right to Object:</strong> The right to object to our processing of your Personal Data, under certain conditions.</li>
          <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you have the right to withdraw that consent at any time.</li>
        </ul>
        <p className="mt-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#3a3228", lineHeight: "1.8" }}>
          To exercise any of these rights, please contact us using the details provided in the Contact section below.
        </p>
      </>
    ),
  },
  {
    number: "6",
    title: "Changes to This Privacy Policy",
    content: (
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#3a3228", lineHeight: "1.8" }}>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top of the policy. You are advised to review this Privacy Policy periodically for any changes.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: "#faf9f6", minHeight: "100vh" }}>

      {/* ── HERO HEADER ─────────────────────────────────────────────────────── */}
      {/* Rule: white text over photo, Champagne Gold only on plain backgrounds */}
      <div
        className="relative flex items-center justify-center"
        style={{
          minHeight: "380px",
          backgroundImage: `url(${PHOTO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Dark gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,14,20,0.72) 0%, rgba(10,14,20,0.55) 60%, rgba(10,14,20,0.72) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 py-20">
          {/* Decorative gold rule with diamond */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{ height: "1px", width: "60px", backgroundColor: "#bfaf8a", opacity: 0.7 }} />
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#bfaf8a",
                transform: "rotate(45deg)",
                opacity: 0.9,
              }}
            />
            <div style={{ height: "1px", width: "60px", backgroundColor: "#bfaf8a", opacity: 0.7 }} />
          </div>

          {/* H1 — Instrument Serif ALL CAPS, white on photo */}
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase",
              fontWeight: 400,
              letterSpacing: "0.08em",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Privacy Policy
          </h1>

          {/* Subtitle — Playfair Display Regular, white */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.02em",
              marginBottom: "0.5rem",
            }}
          >
            Our commitment to protecting the privacy and security of your personal information.
          </p>

          {/* Last modified */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "0.82rem",
              color: "rgba(191,175,138,0.8)",
              letterSpacing: "0.04em",
            }}
          >
            Effective Date: December 28, 2025
          </p>

          {/* Bottom gold rule */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div style={{ height: "1px", width: "60px", backgroundColor: "#bfaf8a", opacity: 0.7 }} />
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#bfaf8a",
                transform: "rotate(45deg)",
                opacity: 0.9,
              }}
            />
            <div style={{ height: "1px", width: "60px", backgroundColor: "#bfaf8a", opacity: 0.7 }} />
          </div>
        </div>
      </div>

      {/* ── INTRO BLOCK ─────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#faf9f6" }}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div
            className="pl-5"
            style={{ borderLeft: "2px solid #bfaf8a" }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#3a3228",
                lineHeight: "1.9",
                marginBottom: "1rem",
              }}
            >
              Boutique Travel Advisors ("BTA," "we," "us," or "our") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#3a3228",
                lineHeight: "1.9",
              }}
            >
              By using our services, you consent to the data practices described in this policy.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTIONS ────────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#faf9f6" }}>
        <div className="max-w-3xl mx-auto px-6 pb-16 space-y-12">
          {sections.map((section) => (
            <div key={section.number}>
              {/* Section divider */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase",
                    fontWeight: 400,
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "#bfaf8a",
                  }}
                >
                  {section.number.padStart(2, "0")}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#bfaf8a", opacity: 0.35 }} />
              </div>

              {/* H2 — Playfair Display SemiBold Italic, Champagne Gold on plain bg */}
              <h2
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                  color: "#bfaf8a",
                  lineHeight: 1.3,
                }}
              >
                {section.title}
              </h2>

              {section.content}
            </div>
          ))}

          {/* ── CONTACT BLOCK ─────────────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase",
                  fontWeight: 400,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: "#bfaf8a",
                }}
              >
                07
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#bfaf8a", opacity: 0.35 }} />
            </div>

            <h2
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                color: "#bfaf8a",
                lineHeight: 1.3,
              }}
            >
              Questions or Concerns
            </h2>

            <p
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#3a3228",
                lineHeight: "1.8",
              }}
            >
              If you have any questions regarding this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="p-5 rounded"
                style={{ backgroundColor: "#f2ede6", border: "1px solid rgba(191,175,138,0.3)" }}
              >
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    fontSize: "0.7rem",
                    color: "#bfaf8a",
                    marginBottom: "0.4rem",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@travelbta.com"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem",
                    color: "#384959",
                    textDecoration: "none",
                  }}
                >
                  info@travelbta.com
                </a>
              </div>
              <div
                className="p-5 rounded"
                style={{ backgroundColor: "#f2ede6", border: "1px solid rgba(191,175,138,0.3)" }}
              >
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    fontSize: "0.7rem",
                    color: "#bfaf8a",
                    marginBottom: "0.4rem",
                  }}
                >
                  Phone
                </p>
                <a
                  href="tel:+14807871477"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem",
                    color: "#384959",
                    textDecoration: "none",
                  }}
                >
                  (480) 787-1477
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER LINKS ────────────────────────────────────────────────────── */}
      <div
        className="py-8 text-center"
        style={{ backgroundColor: "#384959" }}
      >
        <div
          className="flex items-center justify-center gap-6 flex-wrap"
          style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: "normal", textTransform: "uppercase",
            fontWeight: 400,
            letterSpacing: "0.12em",
            fontSize: "0.7rem",
            color: "rgba(191,175,138,0.8)",
          }}
        >
          <Link href="/terms-of-service" style={{ color: "rgba(191,175,138,0.8)", textDecoration: "none" }}>
            Terms of Service
          </Link>
          <span style={{ color: "rgba(191,175,138,0.4)" }}>|</span>
          <span style={{ color: "rgba(191,175,138,1)" }}>Privacy Policy</span>
          <span style={{ color: "rgba(191,175,138,0.4)" }}>|</span>
          <Link href="/contact-us" style={{ color: "rgba(191,175,138,0.8)", textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
}
