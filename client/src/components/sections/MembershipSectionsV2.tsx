/**
 * MembershipSections. Exclusive Benefits + VIP Access + Gives Back
 */

import React, { useState } from "react";
import { exclusiveBenefits, vipAccess, givesBack } from "@/content/homepage";

const benefitIcons: Record<string, React.ReactElement> = {
  "Specially negotiated rates": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "VIP Manager Welcome": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  "Daily Breakfast for Two": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "$100 Resort or Spa Credit": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  "Room upgrade upon availability": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Flexible check-in/out *": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export function ExclusiveBenefitsSection() {
  return (
    <section className="bg-[#384959] py-14 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Label */}
        <div className="flex-shrink-0 lg:w-56">
          <h2
            className="bta-section-title text-[#faf9f6] text-3xl md:text-4xl leading-tight"
            style={{ fontWeight: 400 }}
          >
            {exclusiveBenefits.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-20 bg-white/15 flex-shrink-0" />

        {/* Benefits Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {exclusiveBenefits.benefits.map((benefit) => (
            <div key={benefit.label} className="flex flex-col items-center text-center gap-3">
              <div className="text-[#bfaf8a]">
                {benefitIcons[benefit.label] || (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-smallcaps text-[#faf9f6]/75 text-xs tracking-[0.14em] uppercase leading-snug">
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
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [hotelName, setHotelName] = useState("");

  const handleSearch = () => {
    const base = "https://luxurytravelclubs.com";
    if (activeTab === "stays") {
      const params = new URLSearchParams({
        destination,
        checkIn,
        checkOut,
        guests: String(guests),
        rooms: String(rooms),
      });
      window.open(`${base}/search?${params.toString()}`, "_blank");
    } else {
      const params = new URLSearchParams({ hotel: hotelName });
      window.open(`${base}/hotel?${params.toString()}`, "_blank");
    }
  };

  return (
    <section className="bg-[#edeae4]">
      {/* Two-column layout: photo left | booking right */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* LEFT. Spa photo, full height */}
        <div className="w-full lg:w-[45%] flex-shrink-0 overflow-hidden" style={{ minHeight: "340px" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/spa-robe-photo_8df6c223.png"
            alt="Luxury spa experience"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: "340px", maxHeight: "700px" }}
          />
        </div>

        {/* RIGHT. Title + native booking form */}
        <div className="flex-1 bg-[#edeae4] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-16">
          {/* Headline */}
          <h2
            className="bta-section-title text-[#bfaf8a] text-3xl md:text-4xl lg:text-5xl leading-tight mb-3"
            style={{ fontWeight: 400 }}
          >
            {vipAccess.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-body text-[#384959]/70 text-lg mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {vipAccess.subheadline}
          </p>

          {/* Native booking form. no iframe, no box */}
          <div className="w-full" style={{ maxWidth: "520px" }}>
            {/* Tab switcher */}
            <div className="flex mb-6 border border-[#bfaf8a]/40">
              <button
                onClick={() => setActiveTab("stays")}
                className={`flex-1 py-3 text-xs tracking-[0.18em] uppercase font-medium transition-colors ${
                  activeTab === "stays"
                    ? "bg-[#bfaf8a] text-white"
                    : "bg-transparent text-[#384959]/70 hover:text-[#384959]"
                }`}
              >
                Stays
              </button>
              <button
                onClick={() => setActiveTab("hotel")}
                className={`flex-1 py-3 text-xs tracking-[0.18em] uppercase font-medium transition-colors ${
                  activeTab === "hotel"
                    ? "bg-[#bfaf8a]/70 text-white"
                    : "bg-transparent text-[#384959]/70 hover:text-[#384959]"
                }`}
              >
                Search by Hotel
              </button>
            </div>

            {/* Form fields */}
            <div className="flex flex-col gap-3">
              {activeTab === "stays" ? (
                <>
                  {/* Destination */}
                  <div className="flex items-center gap-3 border border-[#bfaf8a]/30 bg-white/60 px-4 py-3">
                    <svg className="w-4 h-4 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter Destination"
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-[#2F2F2F] placeholder-[#2F2F2F]/40 outline-none"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    />
                  </div>

                  {/* Dates */}
                  <div className="flex gap-3">
                    <div className="flex-1 flex items-center gap-3 border border-[#bfaf8a]/30 bg-white/60 px-4 py-3">
                      <svg className="w-4 h-4 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        className="flex-1 bg-transparent text-sm text-[#2F2F2F] outline-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      />
                    </div>
                    <div className="flex-1 flex items-center gap-3 border border-[#bfaf8a]/30 bg-white/60 px-4 py-3">
                      <svg className="w-4 h-4 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        className="flex-1 bg-transparent text-sm text-[#2F2F2F] outline-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      />
                    </div>
                  </div>

                  {/* Guests & Rooms */}
                  <div className="flex items-center gap-3 border border-[#bfaf8a]/30 bg-white/60 px-4 py-3">
                    <svg className="w-4 h-4 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm text-[#2F2F2F]/60 flex-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Guests: {guests}, Rooms: {rooms}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => setGuests(g => Math.max(1, g - 1))} className="w-6 h-6 flex items-center justify-center text-[#bfaf8a] border border-[#bfaf8a]/40 hover:bg-[#bfaf8a]/10 text-sm">−</button>
                        <span className="text-sm text-[#2F2F2F] w-4 text-center">{guests}</span>
                        <button onClick={() => setGuests(g => g + 1)} className="w-6 h-6 flex items-center justify-center text-[#bfaf8a] border border-[#bfaf8a]/40 hover:bg-[#bfaf8a]/10 text-sm">+</button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setRooms(r => Math.max(1, r - 1))} className="w-6 h-6 flex items-center justify-center text-[#bfaf8a] border border-[#bfaf8a]/40 hover:bg-[#bfaf8a]/10 text-sm">−</button>
                        <span className="text-sm text-[#2F2F2F] w-4 text-center">{rooms}</span>
                        <button onClick={() => setRooms(r => r + 1)} className="w-6 h-6 flex items-center justify-center text-[#bfaf8a] border border-[#bfaf8a]/40 hover:bg-[#bfaf8a]/10 text-sm">+</button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Hotel name search */
                <div className="flex items-center gap-3 border border-[#bfaf8a]/30 bg-white/60 px-4 py-3">
                  <svg className="w-4 h-4 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search Hotel Name"
                    value={hotelName}
                    onChange={e => setHotelName(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-[#2F2F2F] placeholder-[#2F2F2F]/40 outline-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  />
                </div>
              )}

              {/* Search button */}
              <button
                onClick={handleSearch}
                className="w-full py-3.5 bg-[#bfaf8a] hover:bg-[#bfaf8a] text-white text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GivesBackSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Left: Photo with Champagne Gold accent block */}
        <div className="relative">
          <div className="absolute top-[-20px] left-[-20px] w-3/5 h-4/5 bg-[#bfaf8a]/20 z-0" />
          <img
            src={givesBack.image}
            alt="Community impact through travel"
            className="relative z-10 w-full h-[460px] object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <p className="bta-eyebrow mb-4">{givesBack.eyebrow}</p>
          <h2
            className="bta-section-title text-[#384959] text-4xl md:text-5xl mb-7 leading-tight"
            style={{ fontWeight: 400 }}
          >
            {givesBack.headline}
          </h2>
          <p className="font-body text-[#2F2F2F]/75 text-xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {givesBack.body}
          </p>

          {/* Proud partners of */}
          <div className="mt-10">
            <p className="font-body text-[#2F2F2F]/60 text-base mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Proud partners of:
            </p>
            {/* Single non-wrapping row. grayscale on light background */}
            <div style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              gap: "clamp(20px, 4vw, 56px)",
              overflowX: "auto",
            }}>
              {/* First Tee Phoenix. uniform grey pre-baked */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/first-tee-clean_6752d84f.png"
                alt="First Tee Phoenix"
                style={{
                  width: "clamp(90px, 9vw, 140px)",
                  height: "auto",
                  maxHeight: "clamp(36px, 5vw, 56px)",
                  filter: "grayscale(1) brightness(0.35)",
                  objectFit: "contain",
                  flexShrink: 1,
                }}
              />
              {/* Make-A-Wish. uniform grey pre-baked */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/make-a-wish-clean_13c103dc.png"
                alt="Make-A-Wish"
                style={{
                  width: "clamp(100px, 10vw, 150px)",
                  height: "auto",
                  maxHeight: "clamp(36px, 5vw, 56px)",
                  filter: "grayscale(1) brightness(0.35)",
                  objectFit: "contain",
                  flexShrink: 1,
                }}
              />
              {/* The Phoenix Symphony. uniform grey pre-baked */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663449292159/kbUEYj6kqCturBQrxV6jNt/phoenix-symphony-clean_4c2d0127.png"
                alt="The Phoenix Symphony"
                style={{
                  width: "clamp(64px, 6vw, 90px)",
                  height: "auto",
                  maxHeight: "clamp(36px, 5vw, 56px)",
                  filter: "grayscale(1) brightness(0.35)",
                  objectFit: "contain",
                  flexShrink: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
