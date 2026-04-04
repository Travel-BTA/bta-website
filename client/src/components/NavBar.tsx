/**
 * NavBar. BTA Site Navigation
 *
 * Design: Transparent overlay on hero image, becomes solid on scroll.
 * Logo: top-left, small. Nav links: center. CTA: right.
 * Typography: Instrument Serif ALL CAPS upright — nav links.
 * Colors: White text on transparent/dark background.
 *
 * Structure:
 *   6 main links: Destinations, Experiences, Journal, Press, Pricing, About ▾
 *   About dropdown: About BTA, We Give Back, Hotel Specialist Program, Hotel Collection Application
 *   More dropdown: Land Journeys, Cruises, Partners
 *
 * WHY: Limiting to 6 main links prevents NavBar overflow on mid-size screens.
 * Secondary pages (Land Journeys, Cruises, Partners) are grouped under "More".
 */

import { useState, useEffect, useRef } from "react";
import { nav } from "@/content/homepage";

// Sub-pages under the About dropdown
// WHY: Pricing moved here to keep primary nav clean; About renamed to Our Team per Janet's request
const ABOUT_SUBMENU = [
  { label: "Our Team",                     href: "/about" },
  { label: "We Give Back",                 href: "/about/philanthropic-initiatives" },
  { label: "Hotel Specialist Program",     href: "/hotel-specialist-program" },
  { label: "Hotel Collection Application", href: "/hotel-collection-application" },
  { label: "Pricing",                      href: "/pricing" },
];

// Secondary pages grouped under the More dropdown
// WHY: Cruises moved to primary nav per Janet's request
const MORE_SUBMENU = [
  { label: "Land Journeys", href: "/land-journeys" },
  { label: "Partners",      href: "/preferred-partners" },
];

// The 6 primary nav links shown directly in the bar
// WHY: Pricing moved under About dropdown; Cruises promoted to primary nav
const PRIMARY_LINKS = ["Destinations", "Experiences", "Cruises", "Journal", "Press", "Our Team"];

// Shared dropdown panel styles
const dropdownPanelClass =
  "absolute top-full right-0 mt-2 bg-[#384959] border border-white/10 shadow-xl min-w-[220px] z-50";
const dropdownLinkClass =
  "block px-5 py-3 bta-nav-link text-[10px] tracking-[0.16em] text-white/80 hover:text-white hover:bg-white/5 uppercase transition-colors border-b border-white/10 last:border-b-0";

// Reusable desktop dropdown wrapper
function DesktopDropdown({
  label,
  href,
  items,
  open,
  setOpen,
  dropRef,
}: {
  label: string;
  href?: string;
  items: { label: string; href: string }[];
  open: boolean;
  setOpen: (v: boolean) => void;
  dropRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={dropRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? (
        <a
          href={href}
          className="bta-nav-link text-[11px] tracking-[0.18em] text-white/90 hover:text-white transition-colors uppercase flex items-center gap-1"
        >
          {label}
          <span className="text-white/60 text-[9px]">▾</span>
        </a>
      ) : (
        <button
          className="bta-nav-link text-[11px] tracking-[0.18em] text-white/90 hover:text-white transition-colors uppercase flex items-center gap-1 bg-transparent border-0 cursor-pointer"
        >
          {label}
          <span className="text-white/60 text-[9px]">▾</span>
        </button>
      )}

      {open && (
        <div className={dropdownPanelClass}>
          {items.map((item) => (
            <a key={item.href} href={item.href} className={dropdownLinkClass}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile accordion item with expandable sub-links
function MobileAccordionItem({
  label,
  href,
  items,
  onClose,
}: {
  label: string;
  href?: string;
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="bta-nav-link text-[12px] tracking-[0.18em] text-white/90 hover:text-white uppercase flex items-center gap-2 w-full text-left bg-transparent border-0 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span
          className="text-white/60 text-[10px] transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-white/20 pl-4">
          {href && (
            <a
              href={href}
              className="bta-nav-link text-[11px] tracking-[0.16em] text-white/80 hover:text-white uppercase"
              onClick={onClose}
            >
              {label}
            </a>
          )}
          {items.map((item) => (
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
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [moreOpen, setMoreOpen]   = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const moreRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (moreRef.current  && !moreRef.current.contains(e.target as Node))  setMoreOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter nav.links to only the 6 primary ones (in defined order)
  const primaryLinks = PRIMARY_LINKS
    .map((label) => nav.links.find((l) => l.label === label))
    .filter(Boolean) as { label: string; href: string }[];

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

        {/* Desktop Nav — 6 primary links + More dropdown */}
        <nav className="hidden lg:flex items-center gap-7">
          {primaryLinks.map((link) => {
            if (link.label === "Our Team") {
              return (
                <DesktopDropdown
                  key="about"
                  label="Our Team"
                  href="/about"
                  items={ABOUT_SUBMENU}
                  open={aboutOpen}
                  setOpen={setAboutOpen}
                  dropRef={aboutRef}
                />
              );
            }
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

          {/* More dropdown for secondary pages */}
          <DesktopDropdown
            key="more"
            label="More"
            items={MORE_SUBMENU}
            open={moreOpen}
            setOpen={setMoreOpen}
            dropRef={moreRef}
          />
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

      {/* Mobile Menu — all links in accordion groups */}
      {menuOpen && (
        <div className="lg:hidden bg-[#384959] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {primaryLinks.map((link) => {
              if (link.label === "Our Team") {
                return (
                  <MobileAccordionItem
                    key="about-mobile"
                    label="Our Team"
                    href="/about"
                    items={ABOUT_SUBMENU.filter((i) => i.href !== "/about")}
                    onClose={() => setMenuOpen(false)}
                  />
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

            {/* More accordion on mobile */}
            <MobileAccordionItem
              key="more-mobile"
              label="More"
              items={MORE_SUBMENU}
              onClose={() => setMenuOpen(false)}
            />

            <a href={nav.cta.href} className="bta-btn-outline-white text-[10px] py-2 px-5 self-start mt-2">
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
