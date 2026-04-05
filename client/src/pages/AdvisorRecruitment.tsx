/**
 * AdvisorRecruitment. /advisor-recruitment
 *
 * WHY: This is a purpose-built recruitment page targeting experienced advisors
 * with $500k+ books of business. The narrative arc is:
 *   1. Recognition (you've built something real)
 *   2. Qualification (this is selective)
 *   3. Problem (what you're working with now isn't built for you)
 *   4. Proof (income numbers, platform depth, scalability)
 *   5. Platform showcase (tech, white-label, booking engine)
 *   6. Community (who you'll work alongside)
 *   7. Invitation (private conversation, not a form)
 *
 * Built as a separate page from /advisor-programs for A/B comparison.
 * All images served from CDN — no local /public references.
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ChevronDown, Zap, BookOpen, Award, Users, Play } from "lucide-react";
import NavBar from "@/components/NavBar";
import { FooterSection } from "@/components/sections/JournalSections";

// ─── CDN image map ────────────────────────────────────────────────────────────
// WHY: All images must be CDN-hosted to prevent deployment timeout.
const CDN = {
  // New elite advisor hero — cinematic, aspirational
  heroElite: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/advisor-hero-elite-Hr8Bspb7BVAqvoUnfNVi7f.webp",
  // Community of elite advisors in a private meeting
  communityElite: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/advisor-community-elite-e3eR2eQzK2AU3hotmQdGw7.webp",
  // Dark slate-gold texture for stat sections
  statBg: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/advisor-income-stat-bg-cvCGNd2yXjyUnZ6cXwzGry.webp",
  // Platform screenshots — real Iris/DASH UI
  morningBriefing: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iris-morning-briefing_d2c55cfb.png",
  intelligenceCenter: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iris-intelligence-center_d2c8b9c9.png",
  elevateUpsell: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iris-elevate-upsell_8d75e61c.png",
  // Platform visuals from existing CDN
  workflowKanban: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/workflow-kanban-glass_847aee05.png",
  bookingEngine: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/booking_engine_ai_render_40f24efb.png",
  itineraryTool: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/itinerary_tool_showcase_93bd2ac7.png",
  marketingSuite: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/marketing-suite-collage_051508e9.png",
  mobileApp: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/mobile_app_showcase_9b35ff47.png",
  philanthropyImpact: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/philanthropy_impact_ed98703a.png",
  // Academy hero — woman boarding private jet (from existing AdvisorPrograms CDN)
  academyHero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/academy-hero-jet_b3c9a12d.png",
  // Luxury palace hotel for academy section background
  academyPalace: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/academy-palace-hotel_4f2e8c71.png",
};

// ─── Inline inquiry form state ────────────────────────────────────────────────
interface InquiryForm {
  name: string;
  agency: string;
  volume: string;
  email: string;
}

const VOLUME_OPTIONS = [
  "$250k – $500k",
  "$500k – $1M",
  "$1M – $2M",
  "$2M+",
];

// ─── TimeSavingsSection ──────────────────────────────────────────────────────
// WHY: Extracted as a separate component so it can own its own useRef/useEffect
// for the IntersectionObserver scroll animation without polluting the parent.
function TimeSavingsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger bar animation once when the section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const rows = [
    {
      task: "Build a FIT luxury proposal & itinerary",
      industry: { label: "Industry Average", time: "2 hours", tools: "Axus · Tern · Travel Joy · Travefy", pct: 100 },
      iris: { label: "Iris Itinerary Alchemist", time: "10 minutes", pct: 8 },
      saving: "92% faster",
    },
    {
      task: "Update, QC, and edit an existing itinerary",
      industry: { label: "Industry Average", time: "2 hours", tools: "Manual review across tools", pct: 100 },
      iris: { label: "Iris Itinerary Alchemist", time: "30 minutes", pct: 25 },
      saving: "75% faster",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#bfaf8a]" />
            <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
              The time argument
            </p>
            <div className="w-12 h-px bg-[#bfaf8a]" />
          </div>
          <h2
            className="text-[#384959] text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Hours back. Every single week.
          </h2>
          <p
            className="text-[#2F2F2F]/55 text-lg font-light max-w-2xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Compared to Axus, Tern, Travel Joy, and Travefy — the tools most advisors are using today.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {rows.map(({ task, industry, iris, saving }) => (
            <div key={task} className="bg-[#faf9f6] border border-[#bfaf8a]/15 p-8 md:p-12">
              {/* Task label + saving badge */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <p
                  className="text-[#384959] text-lg font-light"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {task}
                </p>
                <span
                  className="shrink-0 inline-flex items-center gap-1.5 bg-[#384959] text-white text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <Zap size={10} />
                  {saving}
                </span>
              </div>

              {/* Industry bar — always full width, no animation needed */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span
                      className="text-[#2F2F2F]/50 text-[0.6rem] tracking-[0.18em] uppercase block mb-0.5"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {industry.label}
                    </span>
                    <span
                      className="text-[#2F2F2F]/35 text-xs font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {industry.tools}
                    </span>
                  </div>
                  <span
                    className="text-[#2F2F2F]/60 text-2xl font-light"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {industry.time}
                  </span>
                </div>
                <div className="h-3 bg-[#e8e2d8] w-full">
                  {/* Industry bar animates from 0 to 100% on scroll */}
                  <div
                    className="h-full bg-[#c4b9a4]"
                    style={{
                      width: animated ? "100%" : "0%",
                      transition: animated ? "width 0.9s cubic-bezier(0.4,0,0.2,1)" : "none",
                    }}
                  />
                </div>
              </div>

              {/* Iris bar — animates to target pct, delayed so industry bar leads */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[#9C886A] text-[0.6rem] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {iris.label}
                  </span>
                  <span
                    className="text-[#9C886A] text-2xl font-light"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {iris.time}
                  </span>
                </div>
                <div className="h-3 bg-[#e8e2d8] w-full">
                  <div
                    className="h-full bg-[#9C886A]"
                    style={{
                      width: animated ? `${iris.pct}%` : "0%",
                      transition: animated
                        ? "width 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s"
                        : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-[#2F2F2F]/35 text-xs mt-10 font-light"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Time estimates based on advisor feedback comparing Iris to Axus, Tern, Travel Joy, and Travefy workflows.
        </p>
      </div>
    </section>
  );
}

export default function AdvisorRecruitment() {
  const [form, setForm] = useState<InquiryForm>({ name: "", agency: "", volume: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WHY: Form submission handled via contact-us routing for now;
    // future: wire to tRPC notifyOwner mutation for instant team notification.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ══════════════════════════════════════════════════════════════════════
          §1  HERO — Recognition, not a pitch
          WHY: A $500k+ advisor has seen every "join our agency" pitch.
          We open by acknowledging what they've already built, then
          invite them to imagine what comes next.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={CDN.heroElite}
            alt="Elite luxury travel advisor"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient: transparent top → dark bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2330] via-[#1a2330]/50 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 relative z-10 pb-24 md:pb-32 w-full">
          <div className="max-w-3xl">
            {/* Qualification badge */}
            <span
              className="inline-block py-1.5 px-5 border border-[#bfaf8a]/60 text-[#bfaf8a] text-[0.6rem] tracking-[0.3em] uppercase mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              By Invitation · Limited Membership
            </span>

            {/* Primary headline */}
            <h1
              className="text-white text-5xl md:text-6xl lg:text-[4.5rem] font-light leading-[1.05] mb-8"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              You've built something real.
              <br />
              <span className="italic" style={{ fontFamily: "'Allura', cursive", fontSize: "1.15em", color: "#bfaf8a" }}>
                Now build it bigger.
              </span>
            </h1>

            <p
              className="text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-14"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              BTA is the operating infrastructure for the most ambitious advisors in luxury travel —
              the technology, the contracts, the community, and the AI that lets you scale without
              sacrificing the quality that built your reputation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquiry">
                <Button
                  className="rounded-none px-10 py-6 uppercase tracking-widest text-xs font-medium transition-all duration-300 hover:opacity-90"
                  style={{ background: "#bfaf8a", color: "#fff" }}
                >
                  Request a Private Conversation
                </Button>
              </a>
              <a href="#platform">
                <Button
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 rounded-none px-10 py-6 uppercase tracking-widest text-xs font-medium transition-all duration-300 bg-transparent"
                >
                  See the Platform
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-14 text-white/30 hidden lg:flex flex-col items-center gap-2">
          <span className="text-[0.55rem] uppercase tracking-[0.25em]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Scroll</span>
          <div className="w-px h-10 bg-white/20" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §2  QUALIFICATION BAR — "This is not for everyone"
          WHY: Selective framing elevates perceived value and pre-qualifies
          visitors. The right advisor reads this and leans in.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#faf9f6] border-y border-[#bfaf8a]/20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
            <p
              className="text-[#384959] text-lg font-light leading-relaxed max-w-xl shrink-0"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              BTA accepts a limited number of advisors each year. We look for established professionals
              with a proven book of business, a commitment to the luxury segment, and the ambition to grow.
            </p>
            {/* Qualification criteria */}
            <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 w-full">
              {[
                { label: "$500k+", sub: "Annual Sales Volume" },
                { label: "Luxury", sub: "Client Focus" },
                { label: "Independent", sub: "Or Seeking Independence" },
              ].map(({ label, sub }) => (
                <div key={label} className="flex flex-col">
                  <span
                    className="text-[#384959] text-3xl font-light mb-1"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-[#9C886A] text-[0.65rem] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §3  THE REAL PROBLEM — Make them feel seen
          WHY: Before we sell anything, we name the frustrations a high-producing
          advisor lives with. This earns trust and creates contrast for §4.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Copy */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  The real problem
                </p>
              </div>
              <h2
                className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight mb-10"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                The industry runs on fragmented systems. You deserve something built differently.
              </h2>

              <div className="space-y-6">
                {[
                  {
                    problem: "Every advisor at your host agency is running a different tech stack.",
                    detail: "CRM here. Itinerary tool there. A booking platform that doesn't talk to either. The result is friction, duplication, and hours lost every week to systems that were never designed to work together.",
                  },
                  {
                    problem: "There is no shared knowledge base. No benchmarking. No best practices.",
                    detail: "Top advisors need more than affiliation — they need a community where strategy is shared, performance is benchmarked, and the collective intelligence of a high-producing network is actually accessible.",
                  },
                  {
                    problem: "Collaboration is nearly impossible when everyone is operating in silos.",
                    detail: "Complex multi-advisor trips, referral partnerships, and peer learning all require a common platform. Without it, every collaboration becomes a coordination project.",
                  },
                  {
                    problem: "Running a successful business requires more than bookings — it requires infrastructure.",
                    detail: "Pricing strategy, client communication standards, supplier negotiation, marketing systems, financial benchmarks — the advisors growing fastest have these built in. Most host agencies don't provide them.",
                  },
                ].map(({ problem, detail }) => (
                  <div key={problem} className="flex gap-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a] mt-2.5 shrink-0" />
                    <div>
                      <p
                        className="text-[#384959] text-base font-light mb-1"
                        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                      >
                        {problem}
                      </p>
                      <p
                        className="text-[#2F2F2F]/55 text-sm font-light leading-relaxed"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image + floating quote */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img
                  src={CDN.communityElite}
                  alt="BTA Elite Advisor Community"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl max-w-sm hidden lg:block border-l-2 border-[#bfaf8a]">
                <p
                  className="text-[#384959] text-base italic leading-relaxed mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  "For the first time, I have benchmarks. I know where I stand, where I can grow, and I have colleagues at my level to think through strategy with. That alone is worth everything."
                </p>
                <p
                  className="text-[#9C886A] text-[0.6rem] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  — BTA Affiliate Advisor, Top Producer
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §4  THE BTA DIFFERENCE — Numbers that matter
          WHY: A $500k+ advisor is a business owner. They respond to
          economics. Show the split, the inventory, the amenity value.
          Dark texture background creates visual separation and gravitas.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={CDN.statBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#1a2330]/80" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
              <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                The economics
              </p>
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
            </div>
            <h2
              className="text-white text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Built for Scalability
            </h2>
          </div>

          {/* Stat blocks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#bfaf8a]/15">
            {[
              { stat: "Up to 90%", label: "Commission Split", note: "Among the highest in the industry" },
              { stat: "3,000+", label: "Luxury Properties", note: "Virtuoso, Four Seasons, Aman, Rosewood & more" },
              { stat: "$550", label: "Avg. VIP Amenity Value", note: "Per stay, passed directly to your clients" },
              { stat: "$0", label: "Per-Booking Fees", note: "No charges eating into your margin" },
            ].map(({ stat, label, note }) => (
              <div key={label} className="bg-[#1a2330]/60 p-10 text-center hover:bg-[#bfaf8a]/10 transition-colors duration-300">
                <p
                  className="text-[#bfaf8a] text-4xl md:text-5xl font-light mb-3"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {stat}
                </p>
                <p
                  className="text-white text-sm mb-2"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {label}
                </p>
                <p
                  className="text-white/40 text-xs font-light leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* Supporting copy */}
          <p
            className="text-center text-white/50 text-sm mt-10 font-light"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Commission tiers scale with production. The more you grow, the more you keep.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §5  THE PLATFORM — Your Unfair Advantage
          WHY: This is the core differentiator. We show the actual platform —
          not screenshots of generic software, but real Iris/DASH UI captures.
          Five feature rows: CRM, Booking Engine, White-Label Portal,
          Iris Intelligence, Iris Itinerary.
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="platform" className="py-24 md:py-32 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">

          {/* Section header */}
          <div className="max-w-3xl mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#bfaf8a]" />
              <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                The platform
              </p>
            </div>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Technology built for the way you actually work.
            </h2>
            <p
              className="text-[#2F2F2F]/60 text-lg font-light leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Not a collection of third-party tools bolted together. A purpose-built operating
              system for luxury travel advisors — designed around the complexity of high-touch,
              high-value itineraries.
            </p>
          </div>

          {/* ── Feature Row 1: CRM ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div>
              <p
                className="text-[#9C886A] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                01 — CRM & Practice Management
              </p>
              <h3
                className="text-[#384959] text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Every client. Every trip. One screen.
              </h3>
              <p
                className="text-[#2F2F2F]/60 text-base font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The BTA CRM is built for the complexity of luxury travel — not adapted from a
                generic sales tool. Every client record holds their full travel history, preferences,
                passport details, upcoming bookings, and every call, email, and message in a single
                timeline. When a traveler calls, everything is already on screen.
              </p>
              <ul className="space-y-3">
                {[
                  "Live phone & SMS from your browser — calls log automatically",
                  "Real-time task board tied to trips and clients",
                  "Supplier directory with direct contacts at every hotel and DMC",
                  "AI-assisted call summaries — less documenting, more advising",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-[#9C886A]" />
                    </div>
                    <span
                      className="text-[#2F2F2F]/65 text-sm font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-[#bfaf8a]/5 rounded-2xl blur-2xl" />
              <img
                src={CDN.workflowKanban}
                alt="BTA CRM — Advisor Practice Management"
                className="relative z-10 w-full shadow-2xl border border-[#bfaf8a]/10"
              />
            </div>
          </div>

          {/* ── Feature Row 2: Booking Engine ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-6 bg-[#384959]/5 rounded-2xl blur-2xl" />
              <img
                src={CDN.bookingEngine}
                alt="BTA Global Booking Engine — 3,000+ Luxury Properties"
                className="relative z-10 w-full shadow-2xl border border-[#bfaf8a]/10"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p
                className="text-[#9C886A] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                02 — Global Booking Engine
              </p>
              <h3
                className="text-[#384959] text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                3,000+ properties. Sabre-powered. Your rate code.
              </h3>
              <p
                className="text-[#2F2F2F]/60 text-base font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                BTA's booking engine runs on Sabre with a proprietary BTA rate code for preferred
                partners — giving you access to inventory and amenity packages that independent
                advisors simply cannot access. Over 3,000 luxury properties across Virtuoso,
                Four Seasons, Rosewood, Aman, and beyond. Real-time availability. Instant booking.
                Every commission tracked automatically.
              </p>
              <ul className="space-y-3">
                {[
                  "Sabre-powered with BTA proprietary rate code",
                  "Virtuoso preferred partner inventory included",
                  "Avg. $550 VIP amenity value per stay for your clients",
                  "Commission dashboard — every booking, every dollar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-[#9C886A]" />
                    </div>
                    <span
                      className="text-[#2F2F2F]/65 text-sm font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Feature Row 3: White-Label Client Portal ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div>
              <p
                className="text-[#9C886A] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                03 — White-Label Client Portal
              </p>
              <h3
                className="text-[#384959] text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Your brand. Your clients. Your portal.
              </h3>
              <p
                className="text-[#2F2F2F]/60 text-base font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Unlike host agencies that keep the booking experience generic, BTA gives you a
                fully white-labeled client portal at luxurytravelclubs.com — branded with your
                agency identity. Your clients browse, wish-list, and book through an experience
                that feels like it was built for them by you. You stay in control. BTA handles
                the infrastructure.
              </p>
              <ul className="space-y-3">
                {[
                  "Fully branded with your agency name and identity",
                  "Client wish-list functionality for collaborative planning",
                  "Mobile-optimized — your clients access everything on the go",
                  "Custom client app in development — launching soon",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-[#9C886A]" />
                    </div>
                    <span
                      className="text-[#2F2F2F]/65 text-sm font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-[#bfaf8a]/5 rounded-2xl blur-2xl" />
              <img
                src={CDN.mobileApp}
                alt="BTA White-Label Client Portal"
                className="relative z-10 w-full shadow-2xl border border-[#bfaf8a]/10"
              />
            </div>
          </div>

          {/* ── Feature Row 4: Iris Intelligence ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-6 bg-[#384959]/5 rounded-2xl blur-2xl" />
              <img
                src={CDN.morningBriefing}
                alt="Iris Intelligence — Morning Pipeline Briefing"
                className="relative z-10 w-full shadow-2xl border border-[#bfaf8a]/10 rounded-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p
                className="text-[#9C886A] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                04 — Iris Intelligence
              </p>
              <h3
                className="text-[#384959] text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Your practice, running itself overnight.
              </h3>
              <p
                className="text-[#2F2F2F]/60 text-base font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Every morning, Iris scans your full pipeline and delivers a prioritized briefing —
                overdue tasks, payment deadlines, departing trips, unconfirmed bookings — with direct
                links to what needs attention first. On every active trip, Iris runs a full QC audit
                and surfaces upsell opportunities with estimated commission. Nothing slips through.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Morning Briefing", desc: "Prioritized pipeline summary every day" },
                  { title: "Trip QC Audit", desc: "Full departure checklist, auto-generated" },
                  { title: "Elevate Upsells", desc: "AI-suggested opportunities with commission" },
                  { title: "Call Summaries", desc: "Every call transcribed and filed automatically" },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-4 bg-[#faf9f6] border border-[#bfaf8a]/15">
                    <p
                      className="text-[#384959] text-sm mb-1"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[#2F2F2F]/50 text-xs font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Feature Row 5: Iris Itinerary ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-[#9C886A] text-[0.65rem] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                05 — Iris Itinerary Alchemist
              </p>
              <h3
                className="text-[#384959] text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Brief Iris like a colleague. Get a finished itinerary in minutes.
              </h3>
              <p
                className="text-[#2F2F2F]/60 text-base font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Iris is BTA's proprietary AI platform, built exclusively for our advisor team.
                Tell Iris about the trip, the travelers, and their vision — and it transforms that
                conversation into a fully structured, beautifully branded itinerary. Day-by-day
                programming, destination guides, hotel overviews, dining recommendations, gratuity
                tables, and client-ready PDF export. Every section editable. Every photo swappable.
              </p>
              <p
                className="text-[#9C886A] text-sm italic font-light"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Less time building documents. More time building relationships.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-[#bfaf8a]/5 rounded-2xl blur-2xl" />
              <img
                src={CDN.itineraryTool}
                alt="Iris Itinerary Tool — AI-Powered Luxury Itinerary Builder"
                className="relative z-10 w-full shadow-2xl border border-[#bfaf8a]/10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §6  SCALABILITY STRIP — The architecture argument
          WHY: A $500k+ advisor is thinking about $1M, $2M, $5M.
          This section speaks directly to that ambition.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#384959] text-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-[#bfaf8a] text-2xl italic mb-4" style={{ fontFamily: "'Allura', cursive" }}>
                Built for scale
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-light leading-tight mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                The advisors who will dominate the next decade are already building on infrastructure like this.
              </h2>
              <p
                className="text-white/60 text-base font-light leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                BTA's platform is not a set of features — it is an operating model. The CRM, the booking
                engine, the white-label portal, Iris Intelligence, and the Academy compound on each other.
                As your volume grows, the platform grows with you. There is no ceiling.
              </p>
            </div>
            <div className="space-y-5">
              {[
                "Add team members without adding complexity",
                "Commission tiers that reward production",
                "AI that gets smarter as your client base grows",
                "Marketing infrastructure that scales without headcount",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <ArrowRight size={14} className="text-[#bfaf8a] mt-1 shrink-0" />
                  <span
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §7  COMMUNITY — Who you'll work alongside
          WHY: Peer caliber is a major decision factor for high-producers.
          They want to know: "Are these my people?"
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#bfaf8a]" />
              <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                The community
              </p>
              <div className="w-12 h-px bg-[#bfaf8a]" />
            </div>
            <h2
              className="text-[#384959] text-4xl md:text-5xl font-light mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              A network of true professionals.
            </h2>
            <p
              className="text-[#2F2F2F]/60 text-lg font-light max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              BTA is not a directory of part-time hobbyists. Every advisor in our network has been
              vetted, is active in the luxury segment, and is committed to the same standard of
              service you've built your reputation on.
            </p>
          </div>

          {/* Peer advisor profile cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Luxury & Ultra-Luxury Specialist",
                volume: "$1.2M+ Annual Volume",
                specialty: "Private villas, yacht charters, ultra-luxury hotels",
                note: "15 years in the industry. Joined BTA for the platform and stayed for the community.",
              },
              {
                name: "Cruise & Expedition Advisor",
                volume: "$800k Annual Volume",
                specialty: "Luxury and expedition cruising, river voyages",
                note: "Moved from a large host agency. Commission split and booking engine access were the deciding factors.",
              },
              {
                name: "Family & Multigenerational Expert",
                volume: "$650k Annual Volume",
                specialty: "Complex family travel, villa sourcing, private air",
                note: "Uses Iris daily for itinerary building. Cut document time by 60%.",
              },
            ].map(({ name, volume, specialty, note }) => (
              <div key={name} className="p-8 bg-[#faf9f6] border border-[#bfaf8a]/15 hover:border-[#bfaf8a]/40 transition-colors duration-300">
                <div className="w-8 h-px bg-[#bfaf8a] mb-6" />
                <p
                  className="text-[#384959] text-lg font-light mb-2"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {name}
                </p>
                <p
                  className="text-[#9C886A] text-[0.65rem] tracking-[0.15em] uppercase mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {volume}
                </p>
                <p
                  className="text-[#2F2F2F]/55 text-sm font-light mb-4 leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {specialty}
                </p>
                <p
                  className="text-[#2F2F2F]/45 text-xs font-light italic leading-relaxed border-t border-[#bfaf8a]/15 pt-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  "{note}"
                </p>
              </div>
            ))}
          </div>

          {/* Academy mention */}
          <div className="bg-[#384959] p-12 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#bfaf8a] text-2xl italic mb-4" style={{ fontFamily: "'Allura', cursive" }}>
                BTA Academy
              </p>
              <h3
                className="text-white text-3xl font-light mb-4"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Most agencies hand you a PDF. We built a platform.
              </h3>
              <p
                className="text-white/60 text-base font-light leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                70+ courses. Structured learning paths. Iris as your AI coach. A supplier library
                tied directly to training. Certificates that track your progress. Available
                exclusively to BTA advisors from your first day.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "70+", label: "Courses" },
                { n: "Day 1", label: "Access Begins" },
                { n: "Iris", label: "Your AI Coach" },
                { n: "100%", label: "Members-Only" },
              ].map(({ n, label }) => (
                <div key={label} className="border border-white/10 p-6 text-center hover:border-[#bfaf8a]/40 transition-colors duration-300">
                  <p
                    className="text-[#bfaf8a] text-3xl font-light mb-1"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {n}
                  </p>
                  <p
                    className="text-white/50 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §7b  TIME SAVINGS — Animated Iris vs. industry comparison
          WHY: A $500k+ advisor values their time above almost everything.
          Bars animate from 0 to target width when the section scrolls into
          view using IntersectionObserver — making the contrast visceral.
      ══════════════════════════════════════════════════════════════════════ */}
      <TimeSavingsSection />

      {/* ══════════════════════════════════════════════════════════════════════
          §7c  ELEVATE THIS TRIP — Horizontal scrolling upsell showcase
          WHY: Showing the actual Iris "Elevate This Trip" UI is the most
          compelling proof of the platform's intelligence. Real suggestions,
          real commission values, real client names — makes it tangible.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  Iris in action
                </p>
              </div>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light leading-tight"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Elevate This Trip.
              </h2>
              <p
                className="text-[#2F2F2F]/55 text-base font-light mt-4 max-w-xl leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                On every active trip, Iris scans the itinerary and surfaces upsell opportunities
                with estimated value and commission — ready to propose, book, or add as a task.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className="text-[#9C886A] text-[0.6rem] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Scroll to explore
              </span>
              <ArrowRight size={14} className="text-[#9C886A]" />
            </div>
          </div>
        </div>

        {/* Horizontally scrolling card strip */}
        <div className="flex gap-5 overflow-x-auto pb-6 px-8 lg:px-14 scrollbar-hide snap-x snap-mandatory">
          {[
            {
              title: "Pre-Cruise Athens Historical Walking Tour",
              type: "Tour",
              description: "Before embarking on her cruise, Denise can immerse herself in Athens' rich history with a private walking tour of iconic sites like the Acropolis and Ancient Agora, providing a deeper cultural understanding of her starting point.",
              value: "$450",
              commission: "$45",
              status: "identified",
            },
            {
              title: "Private Airport Transfer (Departure from Final Destination)",
              type: "Transfer",
              description: "Guarantee a stress-free conclusion to Denise's trip with a private transfer from her final hotel to the departure airport, ensuring punctuality and comfort for her journey home.",
              value: "$200",
              commission: "$20",
              status: "identified",
            },
            {
              title: "Santorini Sunset Catamaran Cruise",
              type: "Experience",
              description: "A private catamaran sailing the caldera at sunset — champagne, fresh seafood, and views of the volcanic cliffs. One of the most requested add-ons for Santorini itineraries.",
              value: "$680",
              commission: "$68",
              status: "identified",
            },
            {
              title: "Mykonos Private Villa Upgrade",
              type: "Hotel",
              description: "Upgrade Denise from a standard suite to a private pool villa at the current property. Availability confirmed for her dates. Estimated additional spend within client budget.",
              value: "$1,200",
              commission: "$180",
              status: "identified",
            },
            {
              title: "Athens Airport Arrival Transfer & Welcome Amenity",
              type: "Transfer",
              description: "Private meet-and-greet at Athens International with a luxury vehicle transfer to the hotel. Coordinate with the property to arrange a welcome amenity upon arrival.",
              value: "$320",
              commission: "$32",
              status: "identified",
            },
            {
              title: "Delphi Day Excursion from Athens",
              type: "Tour",
              description: "A full-day private guided excursion to Delphi — the oracle, the museum, the mountain views. Pairs perfectly with the Athens pre-cruise extension already in the itinerary.",
              value: "$550",
              commission: "$55",
              status: "identified",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="shrink-0 w-72 md:w-80 bg-white border border-[#e8e2d8] p-6 snap-start shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Zap size={13} className="text-[#9C886A] shrink-0" />
                  <span
                    className="text-[#384959] text-[0.6rem] tracking-[0.15em] uppercase font-medium"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Elevate This Trip
                  </span>
                </div>
                <span
                  className="text-[0.55rem] tracking-[0.1em] uppercase border border-[#bfaf8a]/40 text-[#9C886A] px-2 py-0.5 shrink-0"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {card.status}
                </span>
              </div>

              {/* Title + type badge */}
              <div className="flex items-start gap-2 mb-3">
                <p
                  className="text-[#2F2F2F] text-sm font-medium leading-snug flex-1"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {card.title}
                </p>
                <span
                  className="shrink-0 text-[0.55rem] tracking-[0.1em] uppercase border border-[#bfaf8a]/30 text-[#9C886A] px-2 py-0.5 mt-0.5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {card.type}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-[#2F2F2F]/55 text-xs font-light leading-relaxed mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {card.description}
              </p>

              {/* Value + commission */}
              <div className="mb-4">
                <p
                  className="text-[#9C886A] text-sm font-light mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Value: {card.value}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[0.6rem] tracking-[0.1em] border border-[#bfaf8a]/25 text-[#2F2F2F]/50 px-3 py-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a]/50" />
                  Commissionable · {card.commission}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-4 border-t border-[#e8e2d8] pt-4">
                {["Propose", "Booked", "+ Task"].map((action) => (
                  <button
                    key={action}
                    className="text-[#384959]/50 text-[0.6rem] tracking-[0.12em] uppercase hover:text-[#9C886A] transition-colors duration-200"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    onClick={() => {}}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §7d  ACADEMY — Rebuilt to match brand screenshots
          WHY: The Academy is a major differentiator. Structured like the
          provided screenshots: full-bleed CTA + curriculum breakdown.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        {/* Part A: "Everything an advisor needs" intro */}
        <div className="py-24 md:py-32 max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Everything an advisor needs to thrive at BTA.
              </h2>
              <p
                className="text-[#2F2F2F]/65 text-base font-light leading-relaxed mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                BTA Academy is the central hub for all internal training at Boutique Travel Advisors.
                Whether you are onboarding as a new advisor, deepening your knowledge of our CRM and
                booking systems, or refining your client communication skills, every resource you need
                is organized here in one place.
              </p>
              <p
                className="text-[#2F2F2F]/65 text-base font-light leading-relaxed"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Courses are organized by category, progress is tracked automatically, and all content
                is kept current as our tools and supplier relationships evolve. Learn at your own pace,
                revisit any module at any time, and build the expertise that sets BTA advisors apart.
              </p>
            </div>

            {/* Curriculum list — styled from screenshot */}
            <div>
              <p
                className="text-[#9C886A] text-[0.6rem] tracking-[0.25em] uppercase mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What you will learn
              </p>
              <h3
                className="text-[#384959] text-3xl font-light mb-10"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Designed for Advisor Excellence
              </h3>

              <div className="space-y-8">
                {[
                  {
                    Icon: BookOpen,
                    title: "Curated Curriculum",
                    desc: "Structured courses covering every aspect of luxury travel advising — from CRM workflows and booking systems to client journey management and preferred supplier relationships.",
                  },
                  {
                    Icon: Award,
                    title: "Preferred Supplier Training",
                    desc: "In-depth training on Virtuoso, Sion, Safari Portal, and other luxury travel platforms, ensuring advisors can confidently represent and book the world's finest experiences.",
                  },
                  {
                    Icon: Users,
                    title: "Advisor Excellence",
                    desc: "Professional development resources covering communication, marketing, planning fees, and the MAPS Framework — designed to elevate every advisor's practice.",
                  },
                  {
                    Icon: Play,
                    title: "Video-Led Learning",
                    desc: "Step-by-step video tutorials with accompanying SOPs for every workflow, so advisors can learn at their own pace and revisit key processes whenever needed.",
                  },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-5">
                    <div className="w-10 h-10 bg-[#384959] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#bfaf8a]" />
                    </div>
                    <div>
                      <p
                        className="text-[#384959] text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {title}
                      </p>
                      <p
                        className="text-[#2F2F2F]/60 text-sm font-light leading-relaxed"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Part B: "Enter BTA Academy" full-bleed CTA — styled from screenshot */}
        <div className="relative h-[480px] md:h-[560px] overflow-hidden flex items-center justify-center">
          {/* Background: dark overlay over luxury travel image */}
          <div className="absolute inset-0 bg-[#1a2330]/70 z-10" />
          <img
            src={CDN.heroElite}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
            aria-hidden="true"
          />
          {/* Content */}
          <div className="relative z-20 text-center px-8">
            <p
              className="text-[#bfaf8a] text-[0.65rem] tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to Begin?
            </p>
            <h2
              className="text-white text-5xl md:text-7xl font-light tracking-wide mb-10"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Enter BTA Academy
            </h2>
            <a href="#inquiry">
              <button
                className="inline-flex items-center gap-4 px-16 py-5 text-white text-[0.65rem] tracking-[0.3em] uppercase transition-opacity duration-300 hover:opacity-90"
                style={{
                  background: "#9C886A",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                View All Courses
                <ArrowRight size={14} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §8  PHILANTHROPY STRIP — The mission, briefly
          WHY: Brand requirement. One sentence. Genuine, not performative.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-[#faf9f6] border-y border-[#bfaf8a]/20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 flex flex-col md:flex-row items-center gap-8">
          <div className="w-12 h-px bg-[#bfaf8a] shrink-0 hidden md:block" />
          <p
            className="text-[#384959] text-base font-light leading-relaxed text-center md:text-left"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A portion of every BTA booking supports childhood cancer research, Make-A-Wish,
            veterans' programs, and local communities where we travel. Advisors and clients
            are invited to participate — helping raise hundreds of thousands of dollars for
            causes that matter.
          </p>
          <div className="w-12 h-px bg-[#bfaf8a] shrink-0 hidden md:block" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §9  FAQ — Address the real objections
          WHY: A $500k+ advisor has specific, sophisticated questions.
          Answering them here removes friction before the conversation.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-14">
          <div className="text-center mb-16">
            <h2
              className="text-[#384959] text-4xl font-light mb-4"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Questions we hear from advisors like you.
            </h2>
          </div>

          <div className="divide-y divide-[#bfaf8a]/15">
            {[
              {
                q: "I already have a host agency. Why would I switch?",
                a: "Most host agencies provide affiliation and little else. BTA provides a purpose-built CRM, a proprietary booking engine with 3,000+ properties, Iris AI, a white-label client portal, a full marketing suite, and an academy — all under one roof. The question is not why switch, but what it's costing you to stay.",
              },
              {
                q: "What does the commission split actually look like?",
                a: "BTA offers up to 90% commission splits, with tiers that scale with your production. The more you grow, the more you keep. We review splits annually and reward top producers accordingly.",
              },
              {
                q: "How long does onboarding take?",
                a: "Most advisors are fully operational within two weeks. Your CRM is configured, your portal is branded, and your Academy access begins on day one. Iris is available from the moment you log in.",
              },
              {
                q: "Can I bring my existing client base?",
                a: "Yes. Your clients are yours. We can assist with data migration from your current CRM and help you communicate the transition to your clients in a way that reinforces your brand.",
              },
              {
                q: "Is BTA right for me if I'm a solo advisor?",
                a: "Absolutely. Many of our top producers are solo advisors who use BTA's infrastructure to operate at a level that would otherwise require a full support team. The platform is designed to multiply your capacity, not add headcount.",
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-start justify-between gap-6 text-left group"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <p
                    className="text-[#384959] text-base font-light group-hover:text-[#9C886A] transition-colors duration-200"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {q}
                  </p>
                  <ChevronDown
                    size={18}
                    className={`text-[#9C886A] shrink-0 mt-0.5 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}
                  />
                </button>
                {faqOpen === i && (
                  <p
                    className="text-[#2F2F2F]/60 text-sm font-light leading-relaxed mt-4 pr-8"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §10  FINAL CTA — The private conversation
          WHY: Not a form wall. A direct, unhurried invitation. Two paths:
          schedule a call (high-trust, low-friction) or submit a brief
          inquiry (4 fields only). The closing line sets expectations.
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="inquiry" className="py-24 md:py-32 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left: Invitation copy */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  The next step
                </p>
              </div>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light leading-tight mb-8"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Let's have a private conversation.
              </h2>
              <p
                className="text-[#2F2F2F]/60 text-lg font-light leading-relaxed mb-10"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                There is no hard sell here. We want to understand your business, share what BTA
                offers, and determine together whether it's the right fit. If it is, we move
                quickly. If it isn't, we'll tell you honestly.
              </p>

              {/* What to expect */}
              <div className="space-y-5 mb-12">
                {[
                  "A 20-minute call with a senior BTA team member",
                  "A walkthrough of the platform tailored to your practice",
                  "Honest answers to your specific questions",
                  "No pressure. No timeline. No obligation.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-[#9C886A]" />
                    </div>
                    <span
                      className="text-[#384959]/70 text-sm font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact-us">
                <Button
                  className="rounded-none px-10 py-6 uppercase tracking-widest text-xs font-medium"
                  style={{ background: "#384959", color: "#fff" }}
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>

            {/* Right: Inline inquiry form */}
            <div className="bg-white border border-[#bfaf8a]/20 p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-12 h-px bg-[#bfaf8a] mx-auto mb-8" />
                  <h3
                    className="text-[#384959] text-2xl font-light mb-4"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    Thank you.
                  </h3>
                  <p
                    className="text-[#2F2F2F]/60 text-base font-light leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    We review every inquiry personally. If it's a fit, a member of the BTA team
                    will reach out within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="w-8 h-px bg-[#bfaf8a] mb-5" />
                    <h3
                      className="text-[#384959] text-2xl font-light mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      Submit a brief inquiry
                    </h3>
                    <p
                      className="text-[#2F2F2F]/50 text-sm font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      We review every inquiry personally and respond within 48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-[#384959] text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-[#bfaf8a]/30 bg-[#faf9f6] px-4 py-3 text-sm text-[#2F2F2F] focus:outline-none focus:border-[#9C886A] transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        placeholder="Jane Smith"
                      />
                    </div>

                    {/* Agency */}
                    <div>
                      <label
                        className="block text-[#384959] text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Agency / Business Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.agency}
                        onChange={(e) => setForm({ ...form, agency: e.target.value })}
                        className="w-full border border-[#bfaf8a]/30 bg-[#faf9f6] px-4 py-3 text-sm text-[#2F2F2F] focus:outline-none focus:border-[#9C886A] transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        placeholder="Smith Luxury Travel"
                      />
                    </div>

                    {/* Annual volume — clickable options */}
                    <div>
                      <label
                        className="block text-[#384959] text-[0.65rem] tracking-[0.2em] uppercase mb-3"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Annual Sales Volume
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {VOLUME_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm({ ...form, volume: opt })}
                            className={`py-2.5 px-3 text-[0.65rem] tracking-[0.12em] uppercase border transition-all duration-200 ${
                              form.volume === opt
                                ? "bg-[#384959] border-[#384959] text-white"
                                : "border-[#bfaf8a]/30 text-[#384959]/60 hover:border-[#9C886A] hover:text-[#384959]"
                            }`}
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-[#384959] text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-[#bfaf8a]/30 bg-[#faf9f6] px-4 py-3 text-sm text-[#2F2F2F] focus:outline-none focus:border-[#9C886A] transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        placeholder="jane@smithluxurytravel.com"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!form.volume}
                      className="w-full rounded-none py-5 uppercase tracking-widest text-xs font-medium disabled:opacity-40 transition-all duration-300"
                      style={{ background: "#bfaf8a", color: "#fff" }}
                    >
                      Submit Inquiry
                    </Button>
                  </form>
                </>
              )}
            </div>

          </div>

          {/* Closing line */}
          <p
            className="text-center text-[#2F2F2F]/35 text-xs mt-16 font-light tracking-[0.1em]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            We review every inquiry personally. If it's a fit, we'll reach out within 48 hours.
          </p>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
