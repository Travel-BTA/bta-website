/**
 * FAQ.tsx — Frequently Asked Questions
 *
 * WHY: Provides clear, brand-aligned answers to common client questions.
 * Built with an accordion layout for clean readability, grouped by topic,
 * with a hero header and a discovery-call CTA at the bottom.
 *
 * Content sourced from BTA's proprietary knowledge base.
 * Janet's additions: à la carte services + minimum requirements.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import NavBar from "@/components/NavBar";
import { FooterSection } from "@/components/sections/JournalSections";
import { Link } from "wouter";

// ─── FAQ DATA ────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  label: string;
  items: FAQItem[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    label: "About BTA",
    items: [
      {
        question: "What does Boutique Travel Advisors do?",
        answer:
          "Boutique Travel Advisors is a luxury travel advisory firm that designs personalized journeys based on each client's preferences, travel style, and goals. Advisors act as consultants and curators, managing everything from destination selection to logistics, with ongoing support before and during travel.",
      },
      {
        question: "How is working with BTA different from booking on my own?",
        answer:
          "Working with BTA provides access to preferred hotel programs, destination specialists, and vetted partners. This often includes added benefits such as room upgrades, breakfast, resort credits, and priority service. More importantly, planning is tailored to you, rather than based on general online recommendations.",
      },
      {
        question: "What types of travel do you plan?",
        answer: (
          <div>
            <p className="mb-3">BTA designs a range of travel experiences including:</p>
            <ul className="space-y-1 pl-4 border-l-2 border-bta-gold/40">
              {[
                "Custom international itineraries",
                "Private villa stays",
                "Yacht and private air charters",
                "Safaris and expedition travel",
                "Cruises and river cruises",
                "Group and multi-generational travel",
              ].map((item) => (
                <li key={item} className="text-bta-charcoal/80 pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Each itinerary is structured around how you prefer to travel rather than a fixed template.
            </p>
          </div>
        ),
      },
      {
        question: "Do you plan budget travel or book Airbnb/VRBO stays?",
        answer:
          "BTA focuses on curated travel experiences with vetted partners, including 4- and 5-star hotels, villas, cruises, and destination specialists. Short-term rental platforms and budget accommodations are not part of the core offering.",
      },
    ],
  },
  {
    label: "Planning & Services",
    items: [
      {
        question: "What is your process for planning a trip?",
        answer: (
          <div>
            <p className="mb-3">BTA follows a structured five-stage approach:</p>
            <ol className="space-y-2 pl-4">
              {[
                ["Explore", "Discovery call and alignment"],
                ["Imagine", "Define goals, preferences, and budget"],
                ["Build", "Develop and refine the itinerary"],
                ["Journey", "Travel with support in place"],
                ["Reflection", "Post-trip review and future planning"],
              ].map(([stage, desc]) => (
                <li key={stage} className="flex gap-2">
                  <span className="font-['Playfair_Display',Georgia,serif] italic text-bta-gold min-w-[80px]">
                    {stage}
                  </span>
                  <span className="text-bta-charcoal/80">{desc}</span>
                </li>
              ))}
            </ol>
          </div>
        ),
      },
      {
        question: "What is included in your planning services?",
        answer: (
          <div>
            <p className="mb-3">A typical itinerary includes:</p>
            <ul className="space-y-1 pl-4 border-l-2 border-bta-gold/40">
              {[
                "Hotel and villa recommendations through preferred partners",
                "Transportation planning (private transfers, rail, internal flights)",
                "Curated tours and experiences",
                "Insurance guidance",
                "Dining recommendations and reservations (depending on service level)",
                "Pre-departure preparation and on-trip support",
              ].map((item) => (
                <li key={item} className="text-bta-charcoal/80 pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">Services are structured in phases, from discovery through post-trip follow-up.</p>
          </div>
        ),
      },
      {
        question: "How far in advance should I start planning?",
        answer:
          "For international and complex itineraries, planning typically begins 6 to 12 months in advance. For high-demand seasons or destinations with limited availability, earlier planning is advisable.",
      },
      {
        question: "What is the difference between a travel advisor and a travel coach?",
        answer: (
          <div className="space-y-2">
            <p>
              <span className="font-['Playfair_Display',Georgia,serif] italic text-bta-aegean">
                A travel advisor
              </span>{" "}
              manages the full planning and booking process.
            </p>
            <p>
              <span className="font-['Playfair_Display',Georgia,serif] italic text-bta-aegean">
                A travel coach
              </span>{" "}
              provides guidance and recommendations, while the client completes the bookings independently. This suits
              travelers who want structure but prefer a more hands-on approach.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    label: "Fees & Scope",
    items: [
      {
        question: "Do you charge planning fees?",
        answer:
          "Yes. Planning fees reflect the time, expertise, and coordination required to design a fully customized itinerary. Fees vary based on destination, trip length, and complexity, with clear scope and deliverables outlined before work begins.",
      },
      {
        question: "Do you offer à la carte services?",
        answer: (
          <div>
            <p className="mb-3">Yes, with some parameters:</p>
            <ul className="space-y-2 pl-4 border-l-2 border-bta-gold/40">
              {[
                "We are able to assist with standalone hotel bookings or cruise reservations at no additional planning fee, with access to preferred partner amenities where applicable.",
                "More complex itineraries that involve multiple destinations, logistics, or detailed planning are managed as full-service engagements.",
                "We do not typically book tour- and transfer-only itineraries without accommodations.",
              ].map((item) => (
                <li key={item} className="text-bta-charcoal/80 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        question: "Are there minimum requirements for custom trips?",
        answer:
          "Yes. For international custom itineraries, we generally work with trips that meet a minimum length and scope, ensuring the itinerary allows for a well-paced and cohesive experience. This also ensures access to the level of partners and services we work with.",
      },
      {
        question: "Can you help with flights?",
        answer:
          "Flights can be arranged as part of a complete itinerary. Standalone flight bookings are generally not offered, with the exception of private aviation.",
      },
    ],
  },
  {
    label: "Bookings & Insurance",
    items: [
      {
        question: "Do you offer travel insurance?",
        answer:
          "Yes. Travel insurance is recommended for most trips, particularly international travel. BTA works with established providers and can advise on appropriate coverage based on your itinerary.",
      },
      {
        question: "Can I book hotels directly through your website?",
        answer:
          "Yes. Through the BTA Travel Club platform, you can book from a curated collection of over 2,800 hotels worldwide. These bookings include preferred partner benefits such as breakfast, upgrades when available, and added amenities.",
      },
      {
        question: "Do you plan group travel?",
        answer:
          "Yes. BTA plans both leisure and corporate group travel, including multi-generational trips, celebrations, and incentive programs. Group size and structure vary, and itineraries are tailored to the dynamics of the group.",
      },
    ],
  },
  {
    label: "Getting Started",
    items: [
      {
        question: "How do I get started?",
        answer:
          "The process begins with a discovery call. This allows both sides to assess fit, discuss travel goals, and outline the planning approach before moving forward.",
      },
    ],
  },
];

// ─── ACCORDION ITEM ──────────────────────────────────────────────────────────

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-bta-gold/20 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-['Playfair_Display',Georgia,serif] text-[17px] text-bta-aegean group-hover:text-bta-gold transition-colors duration-200 leading-snug">
          {item.question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 mt-0.5 w-5 h-5 text-bta-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-bta-charcoal/75 font-['Playfair_Display',Georgia,serif] text-[15px] leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

// ─── CATEGORY SECTION ────────────────────────────────────────────────────────

function FAQCategorySection({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-14">
      {/* Category label */}
      <p className="font-['Cormorant_Garamond',Georgia,serif] italic tracking-[0.2em] text-bta-gold text-sm uppercase mb-6">
        {category.label}
      </p>
      <div className="divide-y-0">
        {category.items.map((item, idx) => (
          <AccordionItem
            key={idx}
            item={item}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ── HERO ── */}
      <section className="relative bg-bta-aegean pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #9E8661 0, #9E8661 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-['Cormorant_Garamond',Georgia,serif] italic tracking-[0.25em] text-bta-gold text-sm uppercase mb-5">
            Questions & Answers
          </p>
          <h1
            className="font-['Instrument_Serif',Georgia,serif] text-white text-5xl md:text-6xl leading-tight mb-6"
            style={{ letterSpacing: "0.02em" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="font-['Playfair_Display',Georgia,serif] text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Everything you need to know about working with Boutique Travel Advisors, from how we plan to how we partner.
          </p>
        </div>
      </section>

      {/* ── ACCORDION CONTENT ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {FAQ_CATEGORIES.map((category) => (
            <FAQCategorySection key={category.label} category={category} />
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-bta-stone py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-['Cormorant_Garamond',Georgia,serif] italic tracking-[0.2em] text-bta-gold text-sm uppercase mb-4">
            Ready to Begin
          </p>
          <h2 className="font-['Instrument_Serif',Georgia,serif] text-bta-aegean text-4xl md:text-5xl mb-5 leading-tight">
            Start with a Conversation
          </h2>
          <p className="font-['Playfair_Display',Georgia,serif] text-bta-charcoal/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            The process begins with a discovery call. We will discuss your travel goals, preferred style, and how BTA
            can best support your next journey.
          </p>
          <Link href="/contact">
            <button className="inline-block bg-bta-aegean text-white font-['Playfair_Display',Georgia,serif] tracking-[0.15em] text-sm uppercase px-10 py-4 hover:bg-bta-gold transition-colors duration-300">
              Schedule a Discovery Call
            </button>
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
