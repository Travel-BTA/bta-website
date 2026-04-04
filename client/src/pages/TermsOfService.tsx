/**
 * TermsOfService — /terms-of-service
 *
 * Content sourced from travelbta.com/terms-of-service/
 * Last Modified: December 28, 2025
 *
 * Typography rules (BTA spec):
 *   Page H1       → Instrument Serif, ALL CAPS, white (on dark header)
 *   Section H2    → Playfair Display 600 italic, Aegean Blue
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
    title: "Acceptance of Terms",
    content: [
      "These Terms represent a binding agreement between you and Boutique Travel Advisors. By accessing or using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree to these Terms in their entirety, you are not authorized to use this Site. Your continued use of the Site following any such modifications constitutes your acceptance of the revised Terms.",
    ],
    list: null,
  },
  {
    number: "2",
    title: "Services Provided",
    content: [
      "Boutique Travel Advisors specializes in curating exceptional travel experiences for the discerning traveler. Our comprehensive services include, but are not limited to:",
    ],
    list: [
      "Personalized travel planning and consultation",
      "Luxury destination curation and itinerary design",
      "Travel booking and reservation services",
      "Virtuoso member benefits and exclusive access",
      "Travel advisory services and insider recommendations",
      "Post-travel support and concierge services",
    ],
    footer: "All services provided through this Site are subject to these Terms and our commitment to delivering exceptional, curated travel experiences. We reserve the right to modify or discontinue services at any time.",
  },
  {
    number: "3",
    title: "User Obligations",
    content: [
      "By using this Site, you represent and warrant that:",
    ],
    list: [
      "You are at least 18 years of age and possess the legal capacity to enter into and be bound by these Terms",
      "You will use this Site only for lawful purposes and in accordance with these Terms and all applicable laws and regulations",
      "You will not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site",
      "You will not submit any content that is unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable",
    ],
    footer: "You acknowledge that your use of the Site is at your sole risk and that you are responsible for maintaining appropriate security measures for any information you provide.",
  },
  {
    number: "4",
    title: "Account Registration",
    content: [
      "Certain features and services on the Site may require account registration. When registering, you agree to:",
    ],
    list: [
      "Provide accurate, current, and complete information",
      "Update your information promptly to maintain accuracy",
      "Maintain the confidentiality of your account credentials",
      "Accept full responsibility for all activities that occur under your account",
      "Notify us immediately of any unauthorized use of your account",
    ],
    footer: "Boutique Travel Advisors reserves the right to refuse registration or terminate accounts at our discretion.",
  },
  {
    number: "5",
    title: "Privacy Policy",
    content: [
      "Your use of this Site is governed by our comprehensive Privacy Policy, which is incorporated into these Terms by reference. We encourage you to review our Privacy Policy to understand our practices regarding the collection, use, protection, and disclosure of your personal information. By using this Site, you consent to the collection and use of your information as outlined in our Privacy Policy.",
    ],
    list: null,
  },
  {
    number: "6",
    title: "Intellectual Property Rights",
    content: [
      "All content on this Site, including but not limited to text, graphics, logos, images, videos, and design elements, is the exclusive property of Boutique Travel Advisors or its content suppliers and is protected by applicable intellectual property laws, including copyright and trademark laws.",
      "You may not:",
    ],
    list: [
      "Reproduce, modify, distribute, or display any content without our prior written permission",
      "Use our logos, trademarks, or proprietary information for any unauthorized purpose",
      "Create derivative works based on our content",
      "Remove or alter any proprietary notices or labels",
    ],
    footer: "Any unauthorized use of our intellectual property is strictly prohibited and may result in legal action.",
  },
  {
    number: "7",
    title: "User-Generated Content",
    content: [
      "If you submit any content to the Site, including but not limited to reviews, testimonials, comments, suggestions, or travel experiences (collectively, \"User Content\"), you grant Boutique Travel Advisors a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, adapt, publish, translate, distribute, display, and sublicense such content in any media or format.",
      "You represent and warrant that:",
    ],
    list: [
      "You own or have the necessary rights to submit the User Content",
      "The User Content does not violate the intellectual property, privacy, or other rights of any third party",
      "The User Content is accurate and does not contain unlawful or defamatory information",
    ],
    footer: null,
  },
  {
    number: "8",
    title: "Third-Party Links and Content",
    content: [
      "This Site may contain links to third-party websites, applications, and services that are not owned or controlled by Boutique Travel Advisors. We provide these links for your convenience only and do not endorse or assume responsibility for any third-party content, services, or practices.",
      "You acknowledge that:",
    ],
    list: [
      "We have no control over third-party websites and their content",
      "We are not responsible for the accuracy, legality, or appropriateness of third-party content",
      "Your use of third-party websites is at your own risk and subject to their terms and conditions",
      "We are not liable for any damages or losses resulting from your interaction with third-party websites",
    ],
    footer: null,
  },
  {
    number: "9",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Boutique Travel Advisors and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages; loss of profits, revenues, data, use, goodwill, or other intangible losses; damages arising from your use or inability to use the Site; unauthorized access to or use of our servers or personal information; interruption or cessation of transmission to or from the Site; or bugs, viruses, malware, or other harmful code transmitted through the Site.",
      "This limitation applies regardless of the form of action (contract, tort, strict liability, or otherwise) and whether or not we have been advised of the possibility of such damages.",
    ],
    list: null,
  },
  {
    number: "10",
    title: "Indemnification",
    content: [
      "You agree to indemnify, defend, and hold harmless Boutique Travel Advisors and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with:",
    ],
    list: [
      "Your use of the Site",
      "Your violation of these Terms",
      "Your violation of any applicable laws or regulations",
      "Your violation of any third-party rights",
      "Any User Content you submit",
      "Your conduct or actions related to the Site",
    ],
    footer: null,
  },
  {
    number: "11",
    title: "Termination of Access",
    content: [
      "Boutique Travel Advisors reserves the right to terminate or suspend your access to the Site at any time, with or without cause, and with or without prior notice. Upon termination:",
    ],
    list: [
      "Your right to use the Site will immediately cease",
      "Any provisions of these Terms that by their nature should survive termination will remain in effect",
      "You remain liable for any obligations incurred prior to termination",
    ],
    footer: null,
  },
  {
    number: "12",
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law principles. Any legal action, suit, or proceeding arising out of or relating to these Terms or your use of the Site shall be brought exclusively in the federal or state courts located in Maricopa County, Arizona.",
      "You hereby irrevocably consent to the personal jurisdiction and venue of such courts and waive any objection to venue or claim of inconvenient forum.",
    ],
    list: null,
  },
  {
    number: "13",
    title: "Modifications to Terms",
    content: [
      "Boutique Travel Advisors reserves the right to modify, update, or amend these Terms at any time without prior notice. We will update the \"Last Modified\" date at the bottom of this page to reflect any changes. Your continued use of the Site following any such modifications constitutes your acceptance of the revised Terms.",
      "We encourage you to review these Terms periodically to stay informed of any updates.",
    ],
    list: null,
  },
  {
    number: "14",
    title: "Severability",
    content: [
      "If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if such modification is not possible, the provision shall be severed. The remaining provisions of these Terms shall continue in full force and effect.",
    ],
    list: null,
  },
  {
    number: "15",
    title: "Entire Agreement",
    content: [
      "These Terms, together with our Privacy Policy and any other policies or agreements referenced herein, constitute the entire agreement between you and Boutique Travel Advisors regarding your use of the Site and supersede all prior and contemporaneous agreements, understandings, and negotiations, whether written or oral.",
    ],
    list: null,
  },
  {
    number: "16",
    title: "Contact Information",
    content: [
      "If you have any questions, concerns, or inquiries regarding these Terms of Service, please contact us:",
    ],
    list: null,
    isContact: true,
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function TermsOfService() {
  return (
    <PageLayout>

      {/* ── Header ────────────────────────────────────────────────────────── */}
      {/*
        WHY: Photo background — private members club lobby with marble floors, dark
        wood paneling, antique world maps, and a leather writing desk. Conveys trust,
        discretion, and refined authority. Dark overlay ensures white text is legible.
        Rule: no Champagne Gold text over photos — white only.
      */}
      <section
        className="relative pt-36 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/tos-header-bg-V3ZrJa5SFajHG3LmjH5ARA.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Dark overlay — photo is warm/light so needs strong overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(20,28,36,0.72) 0%, rgba(30,43,53,0.80) 60%, rgba(20,28,36,0.88) 100%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">

          {/* Decorative hairline + diamond — WHY: Allura eyebrow removed per user request */}
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
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              letterSpacing: "0.12em",
              lineHeight: 1.05,
            }}
          >
            Terms of Service
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
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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
              <strong>Welcome to Boutique Travel Advisors</strong>, boutiquetraveladvisors.com (the "Site"). By accessing or using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.
            </p>
            <p
              className="text-[#2F2F2F]/65 text-base leading-relaxed mt-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              If you do not agree to these Terms in their entirety, you are not authorized to use this Site. Your continued use of the Site following any modifications constitutes your acceptance of the revised Terms.
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
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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

              {/* Contact section special layout */}
              {"isContact" in section && section.isContact && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-[#bfaf8a]/25 p-6">
                    <p
                      className="text-[#bfaf8a] text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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
                href="/privacy-policy"
                className="text-[#bfaf8a] text-xs tracking-[0.15em] uppercase hover:text-[#384959] transition-colors"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-[#bfaf8a] text-xs tracking-[0.15em] uppercase hover:text-[#384959] transition-colors"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
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
