/**
 * NavBar. BTA Site Navigation
 *
 * Design: Transparent overlay on hero image, becomes solid on scroll.
 * Logo: top-left, small. Nav links: center. CTA: right.
 * Typography: Instrument Serif ALL CAPS upright — nav links.
 * Colors: White text on transparent/dark background.
 *
 * About dropdown: hover reveals sub-pages (Our People, We Give Back,
 * Hotel Specialist Program, Hotel Collection Application).
 */

import { useState, useEffect, useRef } from "react";
import { nav } from "@/content/homepage";

// Sub-pages that appear under the About dropdown
// WHY: 'Our People' removed — About page already shows all team members (duplicate removed per request)
const ABOUT_SUBMENU = [
  { label: "We Give Back",                 href: "/about/philanthropic-initiatives" },
  { label: "Hotel Specialist Program",     href: "/hotel-specialist-program" },
  { label: "Hotel Collection Application", href: "/hotel-collection-application" },
];

// Mobile accordion item for About with expandable sub-pages
function MobileAboutItem({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="bta-nav-link text-[12px] tracking-[0.18em] text-white/90 hover:text-white uppercase flex items-center gap-2 w-full text-left"
        onClick={() => setOpen((v) => !v)}
      >
        About
        <span
          className="text-white/60 text-[10px] transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-white/20 pl-4">
          <a
            href="/about"
            className="bta-nav-link text-[11px] tracking-[0.16em] text-white/80 hover:text-white uppercase"
            onClick={onClose}
          >
            About BTA
          </a>
          {ABOUT_SUBMENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bta-nav-link text-[11px] tracking-[0.16em] text-white/80 hover:text-white uppercase"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
              <div className="bta-eyebrow text-[9px] tracking-[0.25em] uppercase opacity-90">BOUTIQUE</div>
              <div className="font-script text-[22px] leading-none mt-[-2px]">travel</div>
              <div className="bta-eyebrow text-[9px] tracking-[0.25em] uppercase opacity-90 mt-[-2px]">ADVISORS</div>
            </div>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.links.map((link) => {
            // About gets a hover dropdown
            if (link.label === "About") {
              return (
                <div
                  key="about-dropdown"
                  ref={aboutRef}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <a
                    href="/about"
                    className="bta-nav-link text-[11px] tracking-[0.18em] text-white/90 hover:text-white transition-colors uppercase flex items-center gap-1"
                  >
                    About
                    <span className="text-white/60 text-[9px]">▾</span>
                  </a>

                  {/* Dropdown panel */}
                  {aboutOpen && (
                    <div
                      className="absolute top-full right-0 mt-2 bg-[#384959] border border-white/10 shadow-xl"
                      style={{ minWidth: "240px" }}
                    >
                      {/* "About BTA" top link */}
                      <a
                        href="/about"
                        className="block px-5 py-3 bta-nav-link text-[10px] tracking-[0.16em] text-white/80 hover:text-white hover:bg-white/5 uppercase border-b border-white/10 transition-colors"
                      >
                        About BTA
                      </a>
                      {ABOUT_SUBMENU.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3 bta-nav-link text-[10px] tracking-[0.16em] text-white/80 hover:text-white hover:bg-white/5 uppercase transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // All other links render normally
            return (
              <a
                key={link.label}
                href={link.href}
                className="bta-nav-link text-[11px] tracking-[0.18em] text-white/90 hover:text-white transition-colors uppercase"
              >
                {link.label}
              </a>
            );
          })}
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
            {nav.links.map((link) => {
              if (link.label === "About") {
                return (
                  <MobileAboutItem key="about-mobile" onClose={() => setMenuOpen(false)} />
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="bta-nav-link text-[12px] tracking-[0.18em] text-white/90 hover:text-white uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a href={nav.cta.href} className="bta-btn-outline-white text-[10px] py-2 px-5 self-start mt-2">
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
