/**
 * AdvisorPrograms. /advisor-programs
 *
 * Advisor recruitment and technology showcase page.
 * Ported from the update-advisor-landing-page git branch.
 * All images served from CDN — no local /public references.
 *
 * WHY: This page targets prospective BTA affiliate advisors, showcasing
 * the proprietary platform, booking engine, Iris AI, and community benefits.
 * It is separate from the client-facing homepage.
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Shield, TrendingUp } from "lucide-react";
import NavBar from "@/components/NavBar";
import { FooterSection } from "@/components/sections/JournalSections";

// ─── CDN image map ────────────────────────────────────────────────────────────
const CDN = {
  heroAdvisorTech: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/hero-advisor-tech_3c84d4e9.png",
  communityAdvisors: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/community-advisors_ea6e1d90.png",
  btaIntranetHub: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/bta_intranet_hub_217089ac.png",
  bookingEngineAiRender: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/booking_engine_ai_render_40f24efb.png",
  workflowKanbanGlass: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/workflow-kanban-glass_847aee05.png",
  automationToHotelsBalanced: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/automation_to_hotels_balanced_a743900c.png",
  marketingSuiteCollage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/marketing-suite-collage_051508e9.png",
  irisAiMapNetwork: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iris_ai_map_network_f53cfb83.png",
  itineraryToolShowcase: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/itinerary_tool_showcase_93bd2ac7.png",
  mobileAppShowcase: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/mobile_app_showcase_9b35ff47.png",
  luxuryVillaPool: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/luxury-villa-pool_6b382c8a.png",
  philanthropyImpact: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/philanthropy_impact_ed98703a.png",
};

export default function AdvisorPrograms() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={CDN.heroAdvisorTech}
            alt="Luxury Travel Advisor Technology"
            className="w-full h-full object-cover"
          />
          {/* WHY: layered gradients — dark overlay for text legibility + bottom fade for depth */}
          <div className="absolute inset-0 bg-[#384959]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#384959] via-transparent to-transparent opacity-85" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 relative z-10 pt-24 w-full">
          <div className="max-w-3xl">
            <span
              className="inline-block py-1 px-4 border border-[#bfaf8a]/50 text-[#bfaf8a] text-[0.65rem] tracking-[0.25em] uppercase mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              For Elite Advisors
            </span>
            <h1
              className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              The Future of{" "}
              <span className="italic" style={{ fontFamily: "'Allura', cursive", fontSize: "1.2em", color: "#bfaf8a" }}>
                Luxury
              </span>{" "}
              Travel Advisory
            </h1>
            <p
              className="text-white/75 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Elevate your business with BTA's proprietary technology, exclusive booking engine,
              and a community of top-tier professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hotel-collection-application">
                <Button
                  className="rounded-none px-10 py-6 uppercase tracking-widest text-xs font-medium transition-all duration-300"
                  style={{ background: "#bfaf8a", color: "#fff" }}
                >
                  Apply for Membership
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#384959] rounded-none px-10 py-6 uppercase tracking-widest text-xs font-medium transition-all duration-300 bg-transparent"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-center">
          <span className="text-[0.6rem] uppercase tracking-widest mb-2 block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Scroll</span>
          <div className="w-px h-12 bg-white/25 mx-auto" />
        </div>
      </section>

      {/* ── Why BTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Image + floating quote */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={CDN.communityAdvisors}
                  alt="BTA Advisor Community"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-6 bg-white p-8 shadow-xl max-w-xs hidden md:block border-l-2 border-[#bfaf8a]">
                <p
                  className="text-[#384959] text-lg italic leading-relaxed mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  "BTA changed the trajectory of my business entirely."
                </p>
                <p className="text-[#bfaf8a] text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  — Sarah Jenkins, Top Producer
                </p>
              </div>
            </div>

            {/* Copy */}
            <div className="md:pl-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  A New Operating Model
                </p>
              </div>
              <h2
                className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight mb-8"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Not Just an Agency.
              </h2>
              <div className="space-y-5 mb-10">
                {[
                  "We believe the most advanced technology in luxury travel should feel effortless.",
                  "Behind that ease is a complex coordination problem: aligning advisors, hotels, and on-the-ground partners so that decisions and service moments occur at precisely the right time.",
                  "Our platform quietly translates intent into action, delivering clear, timely guidance to the people responsible for execution, while keeping the traveler experience clean and uninterrupted.",
                  "This is how travel becomes consistently exceptional — not through more apps, but through better orchestration.",
                ].map((text, i) => (
                  <p
                    key={i}
                    className="text-[#2F2F2F]/65 text-lg font-light leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {text}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { Icon: Shield, title: "Vetted Community", desc: "Join a network of true professionals, not hobbyists." },
                  { Icon: TrendingUp, title: "Higher Yields", desc: "Access negotiated rates and higher commission tiers." },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="p-3 bg-[#bfaf8a]/10 text-[#bfaf8a] shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4
                        className="text-[#384959] text-base mb-1"
                        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                      >
                        {title}
                      </h4>
                      <p className="text-[#2F2F2F]/55 text-sm font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Platform ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#384959] text-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
              <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                Innovation
              </p>
              <div className="w-12 h-px bg-[#bfaf8a]/50" />
            </div>
            <h2
              className="text-white text-4xl md:text-5xl font-light mb-6"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Built for the Modern Advisor
            </h2>
            <p
              className="text-white/60 text-lg font-light leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Say goodbye to disjointed tools. Our custom-built, all-in-one platform integrates every aspect of your business,
              from real-time CRM updates to automated supplier communications.
            </p>
          </div>

          {/* Feature blocks */}
          <div className="space-y-32">

            {/* BTA Intranet */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3
                  className="text-white text-3xl md:text-4xl font-light mb-6"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  BTA Intranet: Your Central Hub
                </h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Everything you need in one place. Our centralized intranet connects you to essential tools,
                  supplier databases, marketing resources, and our thriving community forum.
                </p>
                <ul className="space-y-4">
                  {[
                    "Single sign-on access to all advisor tools",
                    "Comprehensive supplier database & contacts",
                    "Marketing resource library & training academy",
                    "Community forums for peer support & networking",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a] shrink-0" />
                      <span className="text-white/75 font-light text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 overflow-hidden shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500">
                <img src={CDN.btaIntranetHub} alt="BTA Intranet Central Hub" className="w-full h-auto" />
              </div>
            </div>

            {/* Booking Engine */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden shadow-2xl border border-white/10 mb-8">
                  <img src={CDN.bookingEngineAiRender} alt="Global Booking Engine" className="w-full h-auto" />
                </div>
                <h3
                  className="text-white text-3xl md:text-4xl font-light mb-6"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Global Booking Engine & Dashboard
                </h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Empower your clients with a white-labeled booking portal featuring over 2,800 luxury properties.
                  Manage everything from a centralized dashboard.
                </p>
                <ul className="space-y-4">
                  {[
                    "White-label client portal with your branding",
                    "Access to 2,800+ luxury properties with VIP amenities",
                    "Real-time availability and instant booking",
                    "Centralized dashboard for tracking all commissions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a] shrink-0" />
                      <span className="text-white/75 font-light text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3
                  className="text-white text-3xl md:text-4xl font-light mb-6"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Seamless Workflow Automation
                </h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Our platform is designed to eliminate busy work. From automatically generated trip intake forms that sync directly
                  to client records, to Kanban views and Gantt charts for project management.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time CRM integration with 2-way sync",
                    "Automated supplier communication & confirmations",
                    "Collaborative tools for advisors, admins, and teams",
                    "Built-in time tracking and project tagging",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a] shrink-0" />
                      <span className="text-white/75 font-light text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 overflow-hidden shadow-2xl border border-white/10">
                <img src={CDN.workflowKanbanGlass} alt="Workflow Automation" className="w-full h-auto" />
              </div>
            </div>

            {/* Marketing Suite */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <img src={CDN.automationToHotelsBalanced} alt="Automated Hotel Communication" className="w-full h-auto shadow-2xl border border-white/10" />
              </div>
              <div className="order-1 lg:order-2">
                <img src={CDN.marketingSuiteCollage} alt="Marketing Suite" className="w-full h-auto shadow-2xl border border-white/10 mb-8" />
                <h3
                  className="text-white text-3xl md:text-4xl font-light mb-6"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Turnkey Marketing Suite
                </h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Stay top-of-mind without lifting a finger. Access dozens of customizable email templates,
                  social media assets, and newsletters — all designed to speak in the sophisticated BTA voice.
                </p>
                <ul className="space-y-4">
                  {[
                    "Customizable email & newsletter templates",
                    "Social media content & mood boards",
                    "Automated e-marketing campaigns",
                    "Smart client tagging for targeted outreach",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a] shrink-0" />
                      <span className="text-white/75 font-light text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Iris AI ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-[#bfaf8a]/8 rounded-full blur-3xl" />
              <img src={CDN.irisAiMapNetwork} alt="Iris AI Knowledge Base" className="relative z-10 w-full shadow-2xl" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  Meet Your New Assistant
                </p>
              </div>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light mb-8"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Iris AI Knowledge Base
              </h2>
              <p
                className="text-[#2F2F2F]/65 text-lg font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Iris isn't just a chatbot — she's a luxury travel expert trained on thousands of BTA data sets.
                Integrated directly with our drive and intranet, Iris understands the nuances of bespoke planning.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Deep Knowledge Access", desc: "Instantly retrieve supplier details, training materials, and itinerary templates." },
                  { title: "Brand Voice Expert", desc: "Drafts emails and client communications that perfectly match the BTA tone of voice." },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-6 bg-[#384959]/5 border border-[#384959]/10">
                    <h4
                      className="text-[#384959] text-lg mb-2"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      {title}
                    </h4>
                    <p className="text-sm text-[#2F2F2F]/55 font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#bfaf8a]/20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 text-center">
          <h3
            className="text-[#384959] text-3xl font-light mb-12"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Innovation Never Stops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                label: "Integrated Itinerary Tool",
                desc: "Build stunning, interactive itineraries directly within the platform.",
                img: CDN.itineraryToolShowcase,
                alt: "Integrated Itinerary Tool Interface",
              },
              {
                label: "Custom Client App",
                desc: "A dedicated mobile experience for your travelers to access everything on the go.",
                img: CDN.mobileAppShowcase,
                alt: "BTA Mobile App Interface",
              },
            ].map(({ label, desc, img, alt }) => (
              <div key={label} className="flex flex-col h-full">
                <div className="bg-[#faf9f6] p-8 border border-[#bfaf8a]/20 flex flex-col items-center mb-8 h-44 justify-center">
                  <span
                    className="text-[#bfaf8a] text-[0.6rem] tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Coming Soon
                  </span>
                  <h4
                    className="text-[#384959] text-xl font-light mb-2"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {label}
                  </h4>
                  <p className="text-[#2F2F2F]/55 text-sm font-light text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {desc}
                  </p>
                </div>
                <div className="flex-grow flex items-start justify-center">
                  <img src={img} alt={alt} className="w-full h-auto shadow-lg border border-[#bfaf8a]/15" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Engine Integration ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  Seamless Integration
                </p>
              </div>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light mb-8"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Your Clients, Your Brand.
              </h2>
              <p
                className="text-[#2F2F2F]/65 text-lg font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Unlike other host agencies that keep the booking engine separate, BTA integrates
                luxurytravelclubs.com directly into your workflow.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Client-facing portal branded with your agency details",
                  "Wish list functionality for collaborative planning",
                  "Real-time commission tracking on every booking",
                  "Access to VIP amenities (avg. $550 value per stay)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center text-[#bfaf8a] shrink-0">
                      <Check size={12} />
                    </div>
                    <span
                      className="text-[#384959]/80 font-light text-sm"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/hotel-collection-application">
                <Button
                  className="rounded-none px-8 py-5 uppercase tracking-widest text-xs font-medium"
                  style={{ background: "#384959", color: "#fff" }}
                >
                  Explore the Booking Engine
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img src={CDN.luxuryVillaPool} alt="Luxury Booking" className="w-full shadow-2xl" />
              <div className="absolute -top-8 -right-8 w-full h-full border border-[#bfaf8a]/25 z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Philanthropy ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden shadow-2xl">
                <img
                  src={CDN.philanthropyImpact}
                  alt="BTA Philanthropy Impact"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#bfaf8a] p-6 text-white max-w-xs hidden md:block shadow-xl">
                <p
                  className="text-xl italic leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  "Travel with purpose, impact the world."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#bfaf8a]" />
                <p className="text-[#bfaf8a] text-2xl italic" style={{ fontFamily: "'Allura', cursive" }}>
                  Giving Back
                </p>
              </div>
              <h2
                className="text-[#384959] text-4xl md:text-5xl font-light mb-6"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Travel as a Force for Good
              </h2>
              <p
                className="text-[#2F2F2F]/65 text-lg font-light leading-relaxed mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                At BTA, we believe luxury travel should leave a positive footprint. A portion of every booking supports local charities
                and vital causes, including childhood cancer research, Make-A-Wish, veterans' support, and arts & culture initiatives.
              </p>
              <p
                className="text-[#2F2F2F]/65 text-lg font-light leading-relaxed mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                We invite our travelers and advisors to actively participate in our philanthropy — helping us raise hundreds of thousands
                of dollars to improve the world, one journey at a time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Childhood Cancer Support",
                  "Make-A-Wish Foundation",
                  "Veterans' Programs",
                  "Local Community Arts",
                ].map((cause) => (
                  <div key={cause} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bfaf8a]" />
                    <span
                      className="text-[#384959] text-sm font-light"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {cause}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#384959] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={CDN.heroAdvisorTech} alt="" className="w-full h-full object-cover grayscale" aria-hidden="true" />
        </div>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 relative z-10 text-center">
          <p className="text-[#bfaf8a] text-2xl italic mb-6" style={{ fontFamily: "'Allura', cursive" }}>
            Join the Select Few
          </p>
          <h2
            className="text-white text-4xl md:text-6xl font-light mb-8"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Ready to Elevate Your Business?
          </h2>
          <p
            className="text-white/65 text-xl max-w-2xl mx-auto mb-12 font-light"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Join the select group of advisors who are redefining luxury travel through technology and community.
          </p>
          <Link href="/hotel-collection-application">
            <Button
              className="rounded-none px-12 py-7 uppercase tracking-widest text-xs font-medium shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ background: "#bfaf8a", color: "#fff" }}
            >
              Apply for Membership
            </Button>
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
