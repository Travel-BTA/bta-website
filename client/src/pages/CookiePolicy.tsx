/**
 * CookiePolicy — /cookie-policy
 *
 * Content sourced from travelbta.com cookie policy reference.
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
    title: "What Are Cookies",
    content: [
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, to provide a better user experience, and to give website owners information about how their site is being used.",
      "Cookies can be 'session cookies' that are deleted when you close your browser, or 'persistent cookies' that remain on your device for a set period of time or until you delete them.",
    ],
    list: null,
  },
  {
    number: "2",
    title: "How We Use Cookies",
    content: [
      "Boutique Travel Advisors uses cookies and similar tracking technologies to enhance your experience on our website. We use cookies for the following purposes:",
    ],
    list: [
      "Essential cookies: Required for the website to function properly, including navigation and access to secure areas",
      "Performance cookies: Help us understand how visitors interact with our website by collecting and reporting anonymous information",
      "Functionality cookies: Allow the website to remember choices you make (such as your language preference) and provide enhanced features",
      "Analytics cookies: Enable us to analyze website traffic and usage patterns to improve our services",
      "Marketing cookies: Used to deliver relevant content and track the effectiveness of our marketing efforts",
    ],
  },
  {
    number: "3",
    title: "Types of Cookies We Use",
    content: [
      "The following categories of cookies may be set when you visit our website:",
    ],
    list: [
      "Strictly necessary cookies: These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take such as setting your privacy preferences or filling in forms",
      "Analytical and performance cookies: These allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works",
      "Functionality cookies: These are used to recognize you when you return to our website, enabling us to personalize our content for you and remember your preferences",
      "Targeting cookies: These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and the advertising displayed on it more relevant to your interests",
    ],
  },
  {
    number: "4",
    title: "Third-Party Cookies",
    content: [
      "In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties may include analytics providers, advertising networks, and social media platforms.",
      "We do not control these third-party cookies and they are governed by the privacy policies of the respective third parties. We encourage you to review the privacy policies of these third parties for more information.",
    ],
    list: null,
  },
  {
    number: "5",
    title: "Managing Your Cookie Preferences",
    content: [
      "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings. Most browsers allow you to:",
    ],
    list: [
      "View what cookies are stored on your device and delete them individually",
      "Block third-party cookies",
      "Block cookies from particular websites",
      "Block all cookies from being set",
      "Delete all cookies when you close your browser",
    ],
    footer: "Please note that if you choose to block or delete cookies, some features of our website may not function properly. Blocking essential cookies in particular may prevent you from using certain parts of our website.",
  },
  {
    number: "6",
    title: "Browser Cookie Settings",
    content: [
      "You can manage cookies through your browser settings. Instructions for the most common browsers are available at the following links:",
    ],
    list: [
      "Google Chrome: Settings > Privacy and Security > Cookies and other site data",
      "Mozilla Firefox: Options > Privacy and Security > Cookies and Site Data",
      "Safari: Preferences > Privacy > Cookies and website data",
      "Microsoft Edge: Settings > Cookies and site permissions > Cookies and site data",
    ],
    footer: "For other browsers, please consult your browser's documentation or help section for information on how to manage cookies.",
  },
  {
    number: "7",
    title: "Do Not Track",
    content: [
      "Some browsers include a 'Do Not Track' (DNT) feature that signals to websites that you do not want your online activity tracked. Our website currently does not respond to DNT signals, as there is no consistent industry standard for how to interpret these signals.",
      "We will continue to monitor developments in this area and update our practices as appropriate.",
    ],
    list: null,
  },
  {
    number: "8",
    title: "Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
      "Your continued use of our website following the posting of changes constitutes your acceptance of such changes.",
    ],
    list: null,
  },
  {
    number: "9",
    title: "Contact Us",
    content: [
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us using the information below.",
    ],
    list: null,
    isContact: true,
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function CookiePolicy() {
  return (
    <PageLayout>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      {/*
        WHY: Photo background — luxury hotel room with laptop, conveying the
        digital/privacy context of cookie policy in an elevated, on-brand setting.
        Dark overlay ensures white text is legible. No Champagne Gold over photos.
      */}
      <section
        className="relative pt-36 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/cookie-header_a5f513cf.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
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
              fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal",
              fontWeight: 400,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              letterSpacing: "0.12em",
              lineHeight: 1.05,
              textTransform: "uppercase"
            }}
          >
            Cookie Policy
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
              <strong>Boutique Travel Advisors</strong> uses cookies and similar technologies on our website at boutiquetraveladvisors.com. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
            </p>
            <p
              className="text-[#2F2F2F]/65 text-base leading-relaxed mt-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              By continuing to use our website, you consent to our use of cookies as described in this policy. If you do not agree to our use of cookies, you may adjust your browser settings or refrain from using our website.
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
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#bfaf8a] text-xs tracking-[0.15em] uppercase hover:text-[#384959] transition-colors"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
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
