/**
 * EmployeeBenefit.tsx — Corporate Employee Benefit Program landing page.
 *
 * Page structure:
 *  1. Hero — full-bleed resort image with headline + CTA
 *  2. Animated stat counters — 4 data-backed numbers
 *  3. Why This Matters — research callout cards (McKinsey, HBR, E&Y, SHRM)
 *  4. Full-width image divider with pull quote
 *  5. What Employees Receive — 6-item benefit grid
 *  6. How It Works — 3-step process (no cost, no integration, no lift)
 *  7. Travel with Purpose — give-back section with split layout
 *  8. Final CTA — dark background with contact form link
 *
 * All images served from CDN. No local assets.
 * Animated counters use IntersectionObserver to trigger on scroll.
 */

import { useEffect, useRef, useState } from "react";

// ─── CDN image constants ───────────────────────────────────────────────────
const IMG_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-resort-pool_1b79419a.jpg";
const IMG_COUPLE_POOL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/couple-infinity-pool_761f60cb.jpg";
const IMG_BEACH =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/beach-resort_04a1fb42.jpg";
const IMG_SPA =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/spa-resort_423e9029.jpg";

// ─── Animated counter hook ─────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return count;
}

// ─── Stat counter card ─────────────────────────────────────────────────────
interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  source: string;
  triggered: boolean;
}

function StatCard({ value, suffix, label, source, triggered }: StatCardProps) {
  const count = useCountUp(value, 2000, triggered);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div
        className="text-5xl md:text-6xl mb-3"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#BFAF8A", fontWeight: 400 }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-white/90 text-base md:text-lg leading-snug max-w-[200px]">{label}</p>
      <p className="text-white/40 text-xs mt-2 max-w-[180px] leading-relaxed">{source}</p>
    </div>
  );
}

// ─── Research callout card ─────────────────────────────────────────────────
interface ResearchCardProps {
  stat: string;
  description: string;
  source: string;
}

function ResearchCard({ stat, description, source }: ResearchCardProps) {
  return (
    <div
      className="bg-white border border-[#e8e2d9] p-8 flex flex-col gap-4"
      style={{ borderRadius: "2px" }}
    >
      <div
        className="text-4xl md:text-5xl leading-none"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#BFAF8A", fontWeight: 400 }}
      >
        {stat}
      </div>
      <p className="text-[#384959] text-base leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {description}
      </p>
      <p className="text-[#BFAF8A]/70 text-xs tracking-widest uppercase">{source}</p>
    </div>
  );
}

// ─── Benefit feature item ──────────────────────────────────────────────────
interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex flex-col gap-3 p-6 border border-[#e8e2d9] bg-white/60 hover:bg-white transition-colors duration-300">
      <div className="text-2xl text-[#BFAF8A]">{icon}</div>
      <h4
        className="text-[#384959] text-base tracking-widest uppercase"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "13px" }}
      >
        {title}
      </h4>
      <p className="text-[#384959]/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Step card ────────────────────────────────────────────────────────────
interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 px-6">
      <div
        className="w-16 h-16 rounded-full border border-[#BFAF8A] flex items-center justify-center text-[#BFAF8A] text-xl"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
      >
        {number}
      </div>
      <h4
        className="text-[#384959] tracking-widest uppercase text-sm"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
      >
        {title}
      </h4>
      <p className="text-[#384959]/70 text-sm leading-relaxed max-w-[260px]">{description}</p>
    </div>
  );
}

// ─── Main page component ──────────────────────────────────────────────────
export default function EmployeeBenefit() {
  // IntersectionObserver ref for triggering stat counters
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "85vh", minHeight: "560px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_HERO})` }}
        />
        {/* Gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-[#384959]/30 to-black/20" />

        {/* Hero content */}
        <div
          className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col justify-end pb-16 md:pb-24"
          style={{ zIndex: 2 }}
        >
          {/* Eyebrow */}
          <p
            className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Corporate Employee Benefit Program
          </p>

          {/* Headline */}
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
          >
            A More Meaningful<br />Employee Benefit<br />Starts Here
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            Introduce a Luxury Travel Club for your team — at no cost to establish.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block px-10 py-4 text-center text-sm tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                backgroundColor: "#BFAF8A",
                color: "#ffffff",
                fontWeight: 500,
              }}
            >
              Request a Consultation
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-10 py-4 text-center text-sm tracking-[0.2em] uppercase border border-white/60 text-white hover:bg-white/10 transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Learn How It Works
            </a>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BFAF8A]/40" />
      </section>

      {/* ── 2. ANIMATED STAT COUNTERS ───────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-[#384959] py-16 md:py-20"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* Section label */}
          <p
            className="text-center text-[#BFAF8A] tracking-[0.3em] uppercase text-xs mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Data Behind the Decision
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <StatCard
              value={25}
              suffix="%"
              label="of employees globally report burnout symptoms"
              source="McKinsey Workplace Health Research"
              triggered={statsTriggered}
            />
            <StatCard
              value={48}
              suffix="%"
              label="of U.S. workers do not expect to use all their vacation time"
              source="Eagle Hill Consulting via SHRM"
              triggered={statsTriggered}
            />
            <StatCard
              value={8}
              suffix="%"
              label="average improvement in year-end performance ratings with 10 extra vacation hours per month"
              source="Ernst & Young Internal Research via WSJ"
              triggered={statsTriggered}
            />
            <StatCard
              value={11}
              suffix=" pts"
              label="lower turnover at companies with stronger cultures of health"
              source="Mercer Research via McKinsey"
              triggered={statsTriggered}
            />
          </div>
        </div>
      </section>

      {/* ── 3. WHY THIS MATTERS — RESEARCH CALLOUTS ─────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* Section header */}
          <div className="max-w-2xl mb-14">
            <p
              className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why This Matters Now
            </p>
            <h2
              className="text-[#384959] text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Burnout is costly. Disengagement is measurable. Travel is the antidote.
            </h2>
            <p className="text-[#384959]/70 text-base leading-relaxed">
              At a time when retention, morale, and wellbeing remain top concerns for employers, the research is clear: recovery periods are not discretionary — they are essential for sustained performance. Yet most employees are not fully using the benefits designed to help them recover.
            </p>
          </div>

          {/* Research cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResearchCard
              stat="1 in 4"
              description="Employees globally report burnout symptoms, affecting performance, loyalty, and innovation."
              source="McKinsey Workplace Health"
            />
            <ResearchCard
              stat="36%"
              description="of U.S. workers had not taken a vacation in the previous 12 months, despite available time off."
              source="Eagle Hill Consulting via SHRM"
            />
            <ResearchCard
              stat="+8%"
              description="Average improvement in year-end performance ratings for employees taking 10 additional vacation hours per month."
              source="Ernst & Young via Wall Street Journal"
            />
            <ResearchCard
              stat="6%"
              description="Annual growth rate for luxury travel — the fastest-growing segment in the global travel sector."
              source="McKinsey 2025 Travel Analysis"
            />
          </div>
        </div>
      </section>

      {/* ── 4. FULL-WIDTH IMAGE DIVIDER WITH PULL QUOTE ─────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: "480px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_COUPLE_POOL})` }}
        />
        <div className="absolute inset-0 bg-[#384959]/60" />
        <div
          className="relative h-full flex items-center justify-center px-6"
          style={{ zIndex: 2 }}
        >
          <div className="text-center max-w-3xl">
            <div className="text-[#BFAF8A] text-4xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>"</div>
            <blockquote
              className="text-white text-2xl md:text-3xl leading-relaxed mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}
            >
              Employees stay where they feel supported, understood, and genuinely valued. Benefits that improve wellbeing carry disproportionate emotional value.
            </blockquote>
            <p className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Harvard Business Review
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. WHAT EMPLOYEES RECEIVE ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p
              className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A Benefit Employees Actually Value
            </p>
            <h2
              className="text-[#384959] text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              More Than a Discount Portal.<br />A Curated Travel Experience.
            </h2>
            <p className="text-[#384959]/70 text-base leading-relaxed">
              Your team gains access to experiences they already aspire to book — with elevated advantages they are unlikely to secure on their own.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BenefitItem
              icon="◇"
              title="Preferred Rates & VIP Amenities"
              description="Access to preferred hotel rates and VIP amenities at respected properties worldwide, including daily breakfast, resort credits, and room upgrades."
            />
            <BenefitItem
              icon="◇"
              title="Curated Destination Collections"
              description="Seasonal travel collections and destination ideas curated by expert advisors — from alpine retreats to coastal escapes."
            />
            <BenefitItem
              icon="◇"
              title="Private Tours & Experiences"
              description="Exclusive access to private tours, cultural immersions, and special experiences not available through standard booking channels."
            />
            <BenefitItem
              icon="◇"
              title="Expert Advisory Support"
              description="Direct access to Virtuoso-affiliated travel advisors for complex itineraries, multi-destination journeys, and family travel planning."
            />
            <BenefitItem
              icon="◇"
              title="Branded Club Access"
              description="A fully branded Luxury Travel Club presented as a thoughtful extension of your employee experience — not a generic HR portal add-on."
            />
            <BenefitItem
              icon="◇"
              title="Charitable Give-Back Component"
              description="A portion of every booking supports your preferred charitable cause — childhood cancer, Make-A-Wish, veterans, arts and culture, and communities where your employees travel."
            />
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p
              className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              No Cost to Launch. Real Value to Offer.
            </p>
            <h2
              className="text-[#384959] text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Three Steps to a Smarter Benefit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-[#BFAF8A]/30" style={{ top: "32px" }} />

            <StepCard
              number="01"
              title="No Cost to Establish"
              description="There is no setup fee, no infrastructure to build, and no travel department to create. The club is turnkey and ready to launch."
            />
            <StepCard
              number="02"
              title="Branded for Your Organization"
              description="The club is presented under your company's identity — a sophisticated, modern benefit that reflects your culture and values."
            />
            <StepCard
              number="03"
              title="No Operational Lift"
              description="No complicated integration. No ongoing management required from your HR team. Your employees simply enjoy the benefit."
            />
          </div>
        </div>
      </section>

      {/* ── 7. TRAVEL WITH PURPOSE — GIVE-BACK SECTION ──────────────────── */}
      <section className="py-20 md:py-28 bg-[#384959]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <div>
              <p
                className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Travel with Purpose
              </p>
              <h2
                className="text-white text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
              >
                Every Journey Can<br />Do Good
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                For many companies, the most compelling benefits are those that reflect organizational values as well as employee needs. A Luxury Travel Club can include a charitable give-back component, allowing a portion of travel revenue to support your corporate foundation, a nonprofit partner, or a cause your employees care about most.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                This transforms travel from a private perk into a shared expression of culture. Employees enjoy meaningful personal benefits, while each booking quietly contributes to a broader mission — supporting childhood cancer research, Make-A-Wish, veterans, arts and culture, and local communities where your team travels.
              </p>

              {/* Give-back stats */}
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <div
                    className="text-3xl text-[#BFAF8A] mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
                  >
                    $100K+
                  </div>
                  <p className="text-white/60 text-sm">raised through travel bookings for charitable causes</p>
                </div>
                <div>
                  <div
                    className="text-3xl text-[#BFAF8A] mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
                  >
                    10+
                  </div>
                  <p className="text-white/60 text-sm">charitable organizations supported through BTA journeys</p>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src={IMG_BEACH}
                alt="Luxury beach resort representing meaningful travel"
                className="w-full object-cover"
                style={{ height: "480px" }}
              />
              {/* Decorative gold border offset */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-[#BFAF8A]/40 pointer-events-none"
                style={{ zIndex: -1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RETENTION SECTION — SPLIT IMAGE + COPY ───────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <img
                src={IMG_SPA}
                alt="Luxury spa representing employee wellbeing"
                className="w-full object-cover"
                style={{ height: "440px" }}
              />
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <p
                className="text-[#BFAF8A] tracking-[0.25em] uppercase text-xs mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                A Smarter Way to Think About Retention
              </p>
              <h2
                className="text-[#384959] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
              >
                Employees Stay Where They Feel Valued
              </h2>
              <p className="text-[#384959]/70 text-base leading-relaxed mb-5">
                Retention is not driven by salary alone. Employees stay where they feel supported, understood, and genuinely valued. Benefits that improve wellbeing and create positive life experiences carry disproportionate emotional value.
              </p>
              <p className="text-[#384959]/70 text-base leading-relaxed mb-8">
                When employers invest in recovery, flexibility, and quality of life, the effect is cumulative. Employees return more restored. They associate the company with care rather than depletion. They remember the benefit because they use it.
              </p>

              {/* Key differentiators */}
              <div className="space-y-4">
                {[
                  "Aspirational, tangible, and emotionally resonant",
                  "Reflects how employees actually want to live",
                  "Supports morale, culture, and long-term loyalty",
                  "No cost to establish — immediate value to offer",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#BFAF8A] mt-2 flex-shrink-0" />
                    <p className="text-[#384959]/80 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: "#384959" }}
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${IMG_HERO})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
          }}
        />
        <div className="absolute inset-0 bg-[#384959]/80" />

        <div className="relative max-w-3xl mx-auto px-6 text-center" style={{ zIndex: 2 }}>
          <p
            className="text-[#BFAF8A] tracking-[0.3em] uppercase text-xs mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Offer More Than Time Off
          </p>
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
          >
            Give your employees access<br />to something memorable.
          </h2>
          <p
            className="text-white/70 text-lg md:text-xl mb-4 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            Give your culture something meaningful.
          </p>
          <p
            className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            Give every journey the power to do good.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@travelbta.com?subject=Employee%20Benefit%20Program%20Inquiry"
              className="inline-block px-12 py-4 text-sm tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                backgroundColor: "#BFAF8A",
                color: "#ffffff",
                fontWeight: 500,
              }}
            >
              Request a Consultation
            </a>
            <a
              href="tel:4807871477"
              className="inline-block px-12 py-4 text-sm tracking-[0.2em] uppercase border border-white/40 text-white/80 hover:bg-white/10 transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              480-787-1477
            </a>
          </div>

          <p className="text-white/30 text-xs mt-10 tracking-widest uppercase">
            No cost to establish · No operational lift · Fully branded for your organization
          </p>
        </div>
      </section>

    </div>
  );
}
