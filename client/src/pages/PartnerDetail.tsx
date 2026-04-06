/**
 * PartnerDetail.tsx
 *
 * Individual preferred partner landing page. one component, all 7 partners.
 * The slug from the URL (/preferred-partners/:id) drives which partner data
 * is loaded from preferredPartners.ts. Adding a new partner only requires
 * adding an entry to the content file. no new page component needed.
 *
 * Page structure (mirrors Fora's Hyatt Privé page, BTA aesthetic):
 *   1. Hero. full-bleed partner image + partner name + "Plan Your Journey" CTA
 *   2. Intro. partner name large, intro paragraph centered
 *   3. Benefits. left text + clickable pill tabs / right editorial image
 *   4. Property grid. "Discover [Partner Name]" + 3-col photo cards
 *   5. BTA value prop. why book through BTA strip
 *   6. Final CTA. full-bleed "Plan Your Journey"
 *   7. Footer
 */

import PageSEO from "@/components/PageSEO";
import { useRef, useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { partners } from "@/content/preferredPartners";

// ─── Booking Modal ─────────────────────────────────────────────────────────────

function BookingModal({
  hotelName,
  onClose,
}: {
  hotelName: string;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"stays" | "hotel">("stays");
  const [hotelSearch, setHotelSearch] = useState(hotelName);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f2f2f]/70 backdrop-blur-sm px-4"
      onClick={(e) => {
        // Close when clicking the backdrop, not the modal itself
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#faf9f6] w-full max-w-lg relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#384959] px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-[#bfaf8a] text-xs tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              VIP Member Access
            </p>
            <h3 className="text-white text-lg uppercase tracking-wider" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}>
              {hotelName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close booking modal"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <p className="text-[#384959]/70 text-sm mb-6 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Exclusive Member Privileges Worth $350+ Per Stay
          </p>

          {/* Tabs */}
          <div className="flex mb-6 border-b border-[#bfaf8a]/30">
            <button
              onClick={() => setActiveTab("stays")}
              className={`text-[10px] tracking-[0.18em] uppercase px-6 py-2 transition-all ${
                activeTab === "stays"
                  ? "border-b-2 border-[#bfaf8a] text-[#bfaf8a]"
                  : "text-[#384959]/50 hover:text-[#384959]"
              }`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Stays
            </button>
            <button
              onClick={() => setActiveTab("hotel")}
              className={`text-[10px] tracking-[0.18em] uppercase px-6 py-2 transition-all ${
                activeTab === "hotel"
                  ? "border-b-2 border-[#bfaf8a] text-[#bfaf8a]"
                  : "text-[#384959]/50 hover:text-[#384959]"
              }`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Search by Hotel
            </button>
          </div>

          {/* Search Form */}
          <div className="space-y-3">
            {activeTab === "hotel" ? (
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bfaf8a]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={hotelSearch}
                  onChange={(e) => setHotelSearch(e.target.value)}
                  placeholder="Search Hotel Name"
                  className="w-full pl-10 pr-4 py-3 border border-[#bfaf8a]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#bfaf8a]"
                />
              </div>
            ) : (
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bfaf8a]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Destination or City"
                  className="w-full pl-10 pr-4 py-3 border border-[#bfaf8a]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#bfaf8a]"
                />
              </div>
            )}

            {/* Check-in / Check-out side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bfaf8a]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Check-in"
                  className="w-full pl-10 pr-3 py-3 border border-[#bfaf8a]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#bfaf8a]"
                />
              </div>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bfaf8a]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="Check-out"
                  className="w-full pl-10 pr-3 py-3 border border-[#bfaf8a]/30 bg-white font-body text-[#384959] text-sm placeholder:text-[#384959]/40 focus:outline-none focus:border-[#bfaf8a]"
                />
              </div>
            </div>

            {/* Guests / Rooms */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bfaf8a]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                value={`Guests: ${guests}, Rooms: ${rooms}`}
                readOnly
                className="w-full pl-10 pr-4 py-3 border border-[#bfaf8a]/30 bg-white font-body text-[#384959] text-sm focus:outline-none focus:border-[#bfaf8a] cursor-default"
              />
            </div>

            {/* Search CTA — routes to contact page with pre-filled context */}
            <Link href={`/contact-us?hotel=${encodeURIComponent(hotelSearch)}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}&rooms=${rooms}`}>
              <button
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#bfaf8a] text-white text-xs tracking-[0.25em] uppercase hover:bg-[#a89e78] transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                onClick={onClose}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search &amp; Enquire
              </button>
            </Link>
          </div>

          <p className="text-[#384959]/40 text-xs text-center mt-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            A BTA advisor will confirm your VIP inclusions within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Benefit pill ─────────────────────────────────────────────────────────────

function BenefitPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`bta-eyebrow text-xs tracking-wider px-4 py-2 border transition-all duration-200 text-left ${
        active
          ? "bg-[#384959] text-white border-[#384959]"
          : "bg-transparent text-[#384959] border-[#384959]/40 hover:border-[#384959]"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Property card ────────────────────────────────────────────────────────────

function PropertyCard({
  name,
  location,
  imageUrl,
  onBook,
}: {
  name: string;
  location: string;
  imageUrl: string;
  onBook: (hotelName: string) => void;
}) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-transparent to-transparent" />
      </div>

      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="font-display text-white text-base leading-tight mb-0.5">
          {name}
        </h4>
        <p className="bta-eyebrow text-[#BFAF8A] text-[10px] tracking-widest">
          {location}
        </p>
      </div>

      {/* Book button — appears on hover, opens booking modal */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => onBook(name)}
          className="bg-[#BFAF8A] text-white bta-eyebrow text-[10px] tracking-widest px-3 py-1.5 inline-block hover:bg-[#a89e78] transition-colors"
        >
          Book
        </button>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PartnerDetail() {
  // Grab the slug from the URL
  const params = useParams<{ id: string }>();
  const partner = partners.find((p) => p.id === params.id);

  const heroRef = useRef<HTMLDivElement>(null);
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Booking modal state — tracks which hotel name to pre-fill
  const [bookingHotel, setBookingHotel] = useState<string | null>(null);

  // Parallax on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 404 fallback
  if (!partner) {
    return (
      <div className="bg-[#EDEAE4] min-h-screen flex flex-col items-center justify-center">
        <div className="text-center py-40">
          <h1 className="font-display text-4xl text-[#384959] mb-4">
            Partner Not Found
          </h1>
          <Link href="/preferred-partners">
            <span className="bta-btn-outline-dark inline-block mt-4">
              View All Partners
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EDEAE4] min-h-screen">

      {/* Booking modal — rendered at root level so it overlays everything */}
      {bookingHotel && (
        <BookingModal
          hotelName={bookingHotel}
          onClose={() => setBookingHotel(null)}
        />
      )}

      <PageSEO
        title={`${partner.name} | Boutique Travel Advisors`}
        description={`Exclusive ${partner.name} benefits through BTA — VIP amenities, complimentary upgrades, and personalised service on every stay.`}
        path={`/preferred-partners/${partner.id}`}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] min-h-[560px] overflow-hidden flex items-center justify-center">
        {/* Parallax background */}
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={partner.heroImage}
            alt={partner.name}
            className="w-full h-[130%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#384959]/55" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6">
          {/* Back breadcrumb */}
          <Link href="/preferred-partners">
            <span className="bta-eyebrow text-[11px] tracking-widest text-white/60 hover:text-[#BFAF8A] transition-colors mb-6 inline-block">
              ← Preferred Partners
            </span>
          </Link>

          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-[0.06em] mb-6 leading-none">
            {partner.name}
          </h1>

          <div className="w-12 h-px bg-[#BFAF8A] mx-auto mb-6" />

          {/* Opens booking modal pre-filled with the partner name */}
          <button
            onClick={() => setBookingHotel(partner.name)}
            className="bta-btn-outline-white inline-block"
          >
            Plan Your Journey
          </button>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="bta-eyebrow mb-3 text-[#BFAF8A]">
            BTA Preferred Partner
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#384959] uppercase tracking-wider mb-6">
            {partner.name}
          </h2>
          <div className="w-10 h-px bg-[#BFAF8A] mx-auto mb-6" />
          <p className="font-body text-lg text-[#2F2F2F]/80 leading-relaxed">
            {partner.description}
          </p>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

            {/* Left. benefits text + pills */}
            <div className="bg-[#EDEAE4] py-16 pr-0 lg:pr-12 flex flex-col justify-center">
              <p className="bta-eyebrow mb-3">Exclusive Inclusions</p>
              <h2 className="font-display text-2xl md:text-3xl text-[#384959] uppercase tracking-wider mb-3">
                {partner.name} Benefits
              </h2>
              <p className="font-body text-sm text-[#2F2F2F]/60 mb-6 leading-relaxed">
                Benefits apply on all qualifying bookings made through a BTA
                advisor. Perks vary by property. your advisor will confirm
                exact inclusions at time of booking.
              </p>

              {/* Benefit pills. clickable, mirrors Fora's tab pattern */}
              <div className="flex flex-wrap gap-2">
                {partner.benefits.map((benefit, i) => (
                  <BenefitPill
                    key={benefit}
                    label={benefit}
                    active={activeBenefit === i}
                    onClick={() => setActiveBenefit(i)}
                  />
                ))}
              </div>

              {/* Active benefit detail */}
              <div className="mt-6 p-4 border-l-2 border-[#BFAF8A] bg-white/50">
                <p className="font-body text-sm text-[#384959] leading-relaxed">
                  <span className="font-semibold">{partner.benefits[activeBenefit]}</span>
                  {" "}is included on every qualifying stay booked through BTA. confirmed
                  at time of reservation with no additional cost to you.
                </p>
              </div>
            </div>

            {/* Right. editorial image */}
            <div className="relative h-80 lg:h-auto min-h-[400px] overflow-hidden">
              <img
                src={partner.heroImage}
                alt={`${partner.name} property`}
                className="w-full h-full object-cover"
              />
              {/* Gold corner accent */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#BFAF8A]" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#BFAF8A]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Property showcase ─────────────────────────────────────────────── */}
      {partner.properties && partner.properties.length > 0 && (
        <section className="py-20 px-6 bg-[#FAF8F5]">
          <div className="container mx-auto">
            {/* Section heading with decorative lines */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-[#BFAF8A]/40" />
              <h2 className="font-display text-2xl text-[#384959] uppercase tracking-widest whitespace-nowrap text-center">
                Discover {partner.name}
              </h2>
              <div className="flex-1 h-px bg-[#BFAF8A]/40" />
            </div>

            {/* 3-col grid. 2-col tablet. 1-col mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partner.properties.map((property) => (
                <PropertyCard
                  key={property.name}
                  name={property.name}
                  location={property.location}
                  imageUrl={property.imageUrl}
                  onBook={(hotelName) => setBookingHotel(hotelName)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BTA value strip ───────────────────────────────────────────────── */}
      <section className="bg-[#384959] py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                heading: "Guaranteed Benefits",
                body: "Every perk listed is confirmed at booking. not aspirational.",
              },
              {
                heading: "No Extra Cost",
                body: "BTA preferred rates match or beat direct booking. The amenities are simply added.",
              },
              {
                heading: "Personal Advocacy",
                body: "Your advisor manages every detail and escalates on your behalf when needed.",
              },
            ].map((item) => (
              <div key={item.heading}>
                <div className="w-8 h-px bg-[#BFAF8A] mx-auto mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">
                  {item.heading}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-center justify-center">
        <img
          src={partner.heroImage}
          alt="Plan Your Journey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#384959]/65" />
        <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
          <p className="bta-eyebrow mb-3 text-[#BFAF8A]">Ready to Travel?</p>
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider mb-4">
            Let's Design Your Journey
          </h2>
          <div className="w-10 h-px bg-[#BFAF8A] mx-auto mb-6" />
          <p className="font-body text-base text-white/75 mb-8 leading-relaxed">
            Tell us your travel plans and a BTA advisor will reach out within 24 hours
            with a fully personalised proposal. including all {partner.name} benefits.
          </p>
          <button
            onClick={() => setBookingHotel(partner.name)}
            className="bta-btn-outline-white inline-block"
          >
            Start Planning
          </button>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      {/* WHY: Footer is rendered globally in App.tsx — no inline footer needed here */}
    </div>
  );
}
