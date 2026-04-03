/**
 * NavBar. BTA Site Navigation
 *
 * Design: Transparent overlay on hero image, becomes solid on scroll.
 * Logo: top-left, official BTA logo image. larger and prominent.
 * Nav links: center, Cormorant SC small caps, properly sized.
 * CTA: right, outlined button.
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
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 flex items-center justify-between h-[80px]">
        {/* Logo. larger, prominent */}
        <a href="/" className="flex-shrink-0">
          {nav.logo.imageUrl ? (
            <img
              src={nav.logo.imageUrl}
              alt="Boutique Travel Advisors"
              className="h-16 w-auto object-contain"
              style={{ opacity: 0.95 }}
            />
          ) : (
            <div className="text-white leading-none">
              <div className="font-smallcaps text-xs tracking-[0.25em] uppercase opacity-90">BOUTIQUE</div>
              <div
                className="text-2xl leading-none mt-[-2px]"
                style={{ fontFamily: "'Allura', serif" }}
              >
                travel
              </div>
              <div className="font-smallcaps text-xs tracking-[0.25em] uppercase opacity-90 mt-[-2px]">ADVISORS</div>
            </div>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-smallcaps text-[13px] tracking-[0.18em] text-white/90 hover:text-white transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href={nav.cta.href} className="bta-btn-outline-white">
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
          <div className="px-8 py-6 flex flex-col gap-5">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-smallcaps text-sm tracking-[0.18em] text-white/90 hover:text-white uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={nav.cta.href} className="bta-btn-outline-white self-start mt-2">
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
