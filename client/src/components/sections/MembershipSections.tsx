/**
 * MembershipSections — Exclusive Benefits + VIP Access + Gives Back
 *
 * Official BTA Brand Colors:
 *   Champagne Gold:  #BFAF8A  → icons, accents, tabs, buttons, borders
 *   Aegean Blue:     #384959  → headings on light backgrounds
 *   Linen White:     #faf9f6  → text on dark backgrounds
 *   Warm Stone:      #faf9f6  → section backgrounds
 *   Charcoal Ink:    #2F2F2F  → body text
 *   Dark Navy:       #384959  → benefits bar background
 */

import React, { useState } from "react";
import { exclusiveBenefits, vipAccess, givesBack } from "@/content/homepage";

// Simple benefit icons using SVG paths
const benefitIcons: Record<string, React.ReactElement> = {
  "Specially negotiated rates": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "VIP Manager Welcome": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  "Daily Breakfast for Two": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "$100 Resort or Spa Credit": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  "Room upgrade upon availability": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Flexible check-in/out *": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export function ExclusiveBenefitsSection() {
  return (
    // Dark Navy background — strong contrast, matches Figma
    <section className="bg-[#384959] py-10 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Label */}
        <div className="flex-shrink-0 lg:w-48">
          <h2
            className="bta-section-title text-[#faf9f6] bta-h3 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {exclusiveBenefits.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {exclusiveBenefits.benefits.map((benefit) => (
            <div key={benefit.label} className="flex flex-col items-center text-center gap-2">
              {/* Champagne Gold icon */}
              <div className="text-[#BFAF8A]">
                {benefitIcons[benefit.label] || (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-smallcaps text-[#faf9f6]/70 text-[9px] tracking-[0.12em] uppercase leading-snug">
                {benefit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VipAccessSection() {
  const [activeTab, setActiveTab] = useState<"stays" | "hotel">("stays");

  return (
    // Warm Stone background
    <section className="bg-[#faf9f6] py-0">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Photo */}
        <div className="h-[520px] lg:h-auto overflow-hidden">
          <img
            src={vipAccess.image}
            alt="VIP luxury hotel experience"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="px-10 lg:px-16 py-16 flex flex-col justify-center">
          <h2
            className="bta-section-title text-[#BFAF8A] bta-h3 lg:bta-h3 leading-tight mb-3"
            style={{ fontWeight: 400 }}
          >
            {vipAccess.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-body text-[#384959]/80 text-base mb-8">
            {vipAccess.subheadline}
          </p>

          {/* Tabs */}
          <div className="flex mb-6 border-b border-[#BFAF8A]/30">
            <button
              onClick={() => setActiveTab("stays")}
              className={`font-smallcaps text-[10px] tracking-[0.18em] uppercase px-6 py-2 transition-all ${
                activeTab === "stays"
                  ? "border-b-2 border-[#BFAF8A] text-[#BFAF8A]"
                  : "text-[#384959]/50 hover:text-[#384959]"
              }`}
            >
              Stays
            </button>
            <button
              onClick={() => setActiveTab("hotel")}
              className={`font-smallcaps text-[10px] tracking-[0.18em] uppercase px-6 py-2 transition-all ${
                activeTab === "hotel"
                  ? "border-b-2 border-[#BFAF8A] text-[#BFAF8A]"
                  : "text-[#384959]/50 hover:text-[#384959]"
              }`}
            >
              Search by Hotel
            </button>
          </div>

          {/* Search Form */}
          <div className="space-y-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BFAF8A]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search Hotel Name"
                className="w-full pl-10 pr-4 py-3 border border-[#BFAF8A]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#BFAF8A]"
              />
            </div>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BFAF8A]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <input
                type="text"
                placeholder="Check-in — Check-out"
                className="w-full pl-10 pr-4 py-3 border border-[#BFAF8A]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#BFAF8A]"
              />
            </div>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BFAF8A]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                placeholder="Guests: 2, Rooms: 1"
                className="w-full pl-10 pr-4 py-3 border border-[#BFAF8A]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#BFAF8A]"
              />
            </div>
            <button className="bta-btn-gold w-full flex items-center justify-center gap-2 py-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GivesBackSection() {
  return (
    // Warm Stone background
    <section className="bg-[#faf9f6] py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Photo with Champagne Gold accent block */}
        <div className="relative">
          <div className="absolute top-[-16px] left-[-16px] w-3/5 h-4/5 bg-[#BFAF8A]/20 z-0" />
          <img
            src={givesBack.image}
            alt="Community impact through travel"
            className="relative z-10 w-full h-[420px] object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <p className="bta-eyebrow mb-3">{givesBack.eyebrow}</p>
          <h2
            className="bta-section-title text-[#384959] bta-h2 mb-6 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {givesBack.headline}
          </h2>
          <p className="font-body text-[#2F2F2F]/75 text-lg leading-relaxed">
            {givesBack.body}
          </p>
        </div>
      </div>
    </section>
  );
}
