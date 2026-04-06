/**
 * Book / Begin Planning Page
 * Route: /book
 *
 * Design: Luxury consultation form. split layout, BTA blue left panel,
 * clean form on right. Playfair Display headings, gold accents.
 * No emojis. No aggressive fonts.
 */

import PageSEO from "@/components/PageSEO";
import { footer } from "@/content/homepage";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const journeyTypes = [
  "Safari & Wildlife",
  "European Immersions",
  "Expedition Travel",
  "Cultural Journeys",
  "Luxury Cruises",
  "Honeymoon & Romance",
  "Family Travel",
  "Not sure yet",
];

const budgetRanges = [
  "$10,000 – $20,000",
  "$20,000 – $40,000",
  "$40,000 – $75,000",
  "$75,000+",
  "Prefer not to say",
];

const travellerCounts = ["2 travelers", "3–4 travelers", "5–8 travelers", "9+ travelers"];

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJourneys, setSelectedJourneys] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedCount, setSelectedCount] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelDates: "",
    message: "",
  });

  const toggleJourney = (j: string) => {
    setSelectedJourneys((prev) =>
      prev.includes(j) ? prev.filter((x) => x !== j) : [...prev, j]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission. connect to your preferred CRM or email service
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
className="min-h-screen bg-[#faf9f6] text-[#2F2F2F]">

      {submitted ? (
        /* ── Thank You State ─────────────────────────────────────────── */
        <div className="min-h-screen flex items-center justify-center px-8 pt-24">
          <div className="text-center max-w-lg">
            <CheckCircle size={48} className="text-[#bfaf8a] mx-auto mb-8" strokeWidth={1} />
            <h1
              className="text-[#384959] text-5xl font-light mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      <PageSEO
        title="Book a Consultation | Boutique Travel Advisors"
        description="Schedule a complimentary consultation with a BTA luxury travel advisor. We'll craft a bespoke itinerary tailored to your travel style and interests."
        path="/book"
      />
              Thank You
            </h1>
            <p className="text-[#2f2f2f] text-lg leading-relaxed mb-10 font-light">
              Your enquiry has been received. One of our advisors will be in touch within one business day to begin designing your journey.
            </p>
            <Link href="/">
              <button className="group inline-flex items-center gap-3 text-[#bfaf8a] tracking-[0.2em] text-sm uppercase border border-[#bfaf8a] px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-all duration-300">
                Return Home
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* ── Hero Strip ───────────────────────────────────────────── */}
          <div
            className="relative pt-32 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          >
            <div className="absolute inset-0 bg-[#384959]/80" />
            <div className="relative z-10 max-w-[1400px] mx-auto">
              <p
                className="bta-eyebrow text-[0.7rem] tracking-[0.22em] mb-4"
              >
                BOUTIQUE TRAVEL ADVISORS
              </p>
              <h1
                className="text-white leading-tight max-w-2xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  letterSpacing: "0.04em",
                }}
              >
                Begin Planning Your Journey
              </h1>
              <p className="text-white/70 text-lg font-light mt-6 max-w-xl leading-relaxed">
                Tell us about your dream journey. One of our advisors will reach out within one business day to begin designing your experience.
              </p>
            </div>
          </div>

          {/* ── Form Section ─────────────────────────────────────────── */}
          <section className="py-20 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">

              {/* Left. What to Expect */}
              <div className="lg:col-span-1">
                <p
                  className="bta-eyebrow text-[0.7rem] tracking-[0.22em] mb-4"
                >
                  WHAT TO EXPECT
                </p>
                <h2
                  className="text-[#384959] mb-8 leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    fontStyle: "italic",
                    fontSize: "1.6rem",
                  }}
                >
                  Your Journey Starts With a Conversation
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Initial Consultation",
                      desc: "We take the time to understand your travel style, interests, and the experiences that matter most to you.",
                    },
                    {
                      step: "02",
                      title: "Bespoke Proposal",
                      desc: "Your advisor crafts a tailored itinerary with hand-selected properties, private experiences, and Virtuoso exclusive benefits.",
                    },
                    {
                      step: "03",
                      title: "Seamless Execution",
                      desc: "We manage every detail from first enquiry to final departure, and remain available throughout your journey.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <span
                        className="text-[#BFAF8A] text-sm shrink-0 mt-1"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3
                          className="text-[#384959] text-base font-normal mb-1"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-[#2f2f2f] text-sm leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-[#edeae4]">
                  <p className="text-[#2f2f2f] text-sm font-light mb-2">Prefer to speak directly?</p>
                  <a
                    href={`tel:${footer.contact.phone}`}
                    className="text-[#384959] text-lg font-light hover:text-[#bfaf8a] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {footer.contact.phone}
                  </a>
                </div>
              </div>

              {/* Right. Form */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-2 space-y-8"
              >
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-2">
                      First Name <span className="text-[#bfaf8a]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full border-b border-[#edeae4] bg-transparent py-3 text-[#2F2F2F] text-base font-light focus:outline-none focus:border-[#384959] transition-colors placeholder:text-[#edeae4]"
                      placeholder="Janet"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-2">
                      Last Name <span className="text-[#bfaf8a]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full border-b border-[#edeae4] bg-transparent py-3 text-[#2F2F2F] text-base font-light focus:outline-none focus:border-[#384959] transition-colors placeholder:text-[#edeae4]"
                      placeholder="Semenova"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-2">
                      Email Address <span className="text-[#bfaf8a]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-b border-[#edeae4] bg-transparent py-3 text-[#2F2F2F] text-base font-light focus:outline-none focus:border-[#384959] transition-colors placeholder:text-[#edeae4]"
                      placeholder="janet@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-b border-[#edeae4] bg-transparent py-3 text-[#2F2F2F] text-base font-light focus:outline-none focus:border-[#384959] transition-colors placeholder:text-[#edeae4]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Journey Type */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-4">
                    Journey Type <span className="text-[#2f2f2f] normal-case tracking-normal text-xs">(select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {journeyTypes.map((j) => (
                      <button
                        key={j}
                        type="button"
                        onClick={() => toggleJourney(j)}
                        className={`px-5 py-2.5 text-sm border transition-all duration-200 ${
                          selectedJourneys.includes(j)
                            ? "bg-[#384959] border-[#384959] text-white"
                            : "border-[#edeae4] text-[#2f2f2f] hover:border-[#384959] hover:text-[#384959]"
                        }`}
                      >
                        {j}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Travellers */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-4">
                    Number of Travelers
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {travellerCounts.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setSelectedCount(c)}
                        className={`px-5 py-2.5 text-sm border transition-all duration-200 ${
                          selectedCount === c
                            ? "bg-[#384959] border-[#384959] text-white"
                            : "border-[#edeae4] text-[#2f2f2f] hover:border-[#384959] hover:text-[#384959]"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-4">
                    Approximate Budget
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`px-5 py-2.5 text-sm border transition-all duration-200 ${
                          selectedBudget === b
                            ? "bg-[#bfaf8a] border-[#bfaf8a] text-white"
                            : "border-[#edeae4] text-[#2f2f2f] hover:border-[#bfaf8a] hover:text-[#bfaf8a]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Travel Dates */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-2">
                    Preferred Travel Dates or Season
                  </label>
                  <input
                    type="text"
                    value={form.travelDates}
                    onChange={(e) => setForm({ ...form, travelDates: e.target.value })}
                    className="w-full border-b border-[#edeae4] bg-transparent py-3 text-[#2F2F2F] text-base font-light focus:outline-none focus:border-[#384959] transition-colors placeholder:text-[#edeae4]"
                    placeholder="e.g. October 2026, or flexible"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#2f2f2f] mb-2">
                    Tell Us About Your Dream Journey
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-b border-[#edeae4] bg-transparent py-3 text-[#2F2F2F] text-base font-light focus:outline-none focus:border-[#384959] transition-colors placeholder:text-[#edeae4] resize-none"
                    placeholder="Destinations you have in mind, experiences you are looking for, any special occasions..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-[#384959] text-white tracking-[0.2em] text-sm uppercase px-12 py-5 hover:bg-[#384959] transition-colors duration-300"
                  >
                    Submit Enquiry
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[#2f2f2f] text-xs mt-4 font-light">
                    We respond within one business day. Your information is kept strictly confidential.
                  </p>
                </div>
              </form>
            </div>
          </section>
        </>
      )}

      {/* WHY: Footer is rendered globally in App.tsx — no inline footer needed here */}
    </div>
  );
}
