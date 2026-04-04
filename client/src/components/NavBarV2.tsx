/**
 * NavBarV2 — BTA Site Navigation
 *
 * Design philosophy: "Quiet luxury" — the header should feel like the
 * entrance to a private members' club. Nothing shouts. Everything is
 * considered. A single hairline gold rule beneath the nav bar signals
 * refinement without decoration.
 *
 * States:
 *   Transparent (over hero)  → fully transparent, white text, gold CTA border
 *   Scrolled                 → deep Aegean Blue #384959 with frosted blur,
 *                              a 1px Champagne Gold bottom rule appears
 *
 * Typography:
 *   Nav links  → Instrument Serif, ALL CAPS, wide tracking (0.22em), 11px
 *   CTA        → Instrument Serif, ALL CAPS, tracked, outlined
 *   Mobile     → same, larger touch targets
 *
 * Color rule:
 *   Champagne Gold #bfaf8a ONLY on solid backgrounds — NEVER over photos
 *   (the scrolled state is solid, so gold rule and gold CTA border are fine)
 */

import { useState, useEffect, useRef } from "react";
import { nav } from "@/content/homepage";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-[#384959]/98 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{
          // WHY: hairline gold rule only appears when scrolled (solid bg).
          // On transparent state over photos it would be invisible anyway.
          borderBottom: scrolled ? "1px solid rgba(191,175,138,0.30)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-14 flex items-center justify-between h-[76px]">

          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <a href="/" className="flex-shrink-0 group" aria-label="Boutique Travel Advisors home">
            {nav.logo.imageUrl ? (
              <img
                src={nav.logo.imageUrl}
                alt="Boutique Travel Advisors"
                className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            ) : (
              <div className="text-white leading-none">
                <div className="text-[9px] tracking-[0.35em] uppercase opacity-80"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}>BOUTIQUE</div>
                <div className="text-xl leading-none mt-[-1px]"
                  style={{ fontFamily: "'Allura', cursive" }}>travel</div>
                <div className="text-[9px] tracking-[0.35em] uppercase opacity-80 mt-[-2px]"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}>ADVISORS</div>
              </div>
            )}
          </a>

          {/* ── Desktop Nav ───────────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-white/85 hover:text-white transition-colors duration-300 group"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {link.label}
                {/* WHY: underline grows from center on hover — a refined micro-interaction */}
                <span
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-px bg-[#bfaf8a] w-0 group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </nav>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div className="hidden lg:block">
            <a
              href={nav.cta.href}
              className="inline-flex items-center gap-2 border border-white/40 hover:border-[#bfaf8a] text-white/90 hover:text-white px-6 py-2.5 transition-all duration-300 hover:bg-[#bfaf8a]/10"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              {nav.cta.label}
            </a>
          </div>

          {/* ── Mobile Hamburger ──────────────────────────────────────────── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      {/* WHY: full-height side drawer feels more premium than a dropdown sheet */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-[300px] z-[60] bg-[#384959] flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderLeft: "1px solid rgba(191,175,138,0.20)" }}
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-8 h-[76px]"
          style={{ borderBottom: "1px solid rgba(191,175,138,0.15)" }}
        >
          <span
            className="text-[#bfaf8a] text-[9px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
          >
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/60 hover:text-white transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-8 py-10 gap-7 flex-1" aria-label="Mobile navigation">
          {nav.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/75 hover:text-white transition-colors duration-200 flex items-center justify-between group"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "12px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                // WHY: staggered opacity gives a subtle cascade feel
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              {link.label}
              <span className="text-[#bfaf8a]/50 group-hover:text-[#bfaf8a] transition-colors text-xs">→</span>
            </a>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div
          className="px-8 py-8"
          style={{ borderTop: "1px solid rgba(191,175,138,0.15)" }}
        >
          <a
            href={nav.cta.href}
            onClick={() => setMenuOpen(false)}
            className="block text-center border border-[#bfaf8a]/50 hover:border-[#bfaf8a] text-[#bfaf8a] hover:bg-[#bfaf8a]/10 py-3 transition-all duration-300"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            {nav.cta.label}
          </a>
          <p
            className="text-center text-white/25 text-[9px] tracking-[0.2em] uppercase mt-5"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" , textTransform: "uppercase" }}
          >
            Virtuoso Member
          </p>
        </div>
      </div>

      {/* Overlay behind drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
