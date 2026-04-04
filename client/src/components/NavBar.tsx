/**
 * NavBar. BTA Site Navigation
 *
 * Design: Transparent overlay on hero image, becomes solid on scroll.
 * Logo: top-left, small. Nav links: center. CTA: right.
 * Typography: Cormorant SC (small caps), light weight, tracked.
 * Colors: White text on transparent/dark background.
 */

import { useState, useEffect } from "react";
import { nav } from "@/content/homepage";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#384959]/97 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          {nav.logo.imageUrl ? (
            <img src={nav.logo.imageUrl} alt="Boutique Travel Advisors" className="h-10 w-auto" />
          ) : (
            <div className="text-white leading-none">
              <div className="font-smallcaps text-[9px] tracking-[0.25em] uppercase opacity-90">BOUTIQUE</div>
              <div className="font-script text-[22px] leading-none mt-[-2px]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
                travel
              </div>
              <div className="font-smallcaps text-[9px] tracking-[0.25em] uppercase opacity-90 mt-[-2px]">ADVISORS</div>
            </div>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-smallcaps text-[11px] tracking-[0.18em] text-white/90 hover:text-white transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href={nav.cta.href} className="bta-btn-outline-white text-[10px] py-2 px-5">
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span className={`block h-px bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#384959] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-smallcaps text-[12px] tracking-[0.18em] text-white/90 hover:text-white uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={nav.cta.href} className="bta-btn-outline-white text-[10px] py-2 px-5 self-start mt-2">
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
