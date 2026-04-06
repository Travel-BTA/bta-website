/**
 * NavBar. BTA Site Navigation
 *
 * Design: Transparent overlay on hero image, becomes solid on scroll.
 * Logo: top-left, small. Nav links: center. Search icon + CTA: right.
 * Typography: Instrument Serif ALL CAPS upright — nav links.
 * Colors: White text on transparent/dark background.
 *
 * Structure (desktop):
 *   Primary: Destinations | Experiences ▾ | Cruises ▾ | Family Travel | Journal | Work With Us ▾ | About Us ▾
 *   Experiences dropdown: Land Journeys, Private Jet Charters, Custom Itineraries
 *   Cruises dropdown: Luxury Ocean, Premium Ocean, River Cruises, Expedition, Private Charters
 *   Work With Us dropdown: Hotel Specialist Program, Hotel Collection Application, Advisor Recruitment
 *   About Us dropdown: Overview, Contact Us, Pricing, FAQ, Our Team, We Give Back, Press
 *   Right: Search icon | BOOK NOW
 *
 * WHY: Advisor-facing and hotel partner links moved to dedicated "Work With Us" dropdown
 * to shorten the About Us list and give these high-value pages their own top-level entry point.
 * Advisor Programs page removed — replaced by Advisor Recruitment.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { nav } from "@/content/homepage";
import { Search, X } from "lucide-react";

// ── Dropdown menus ────────────────────────────────────────────────────────────

const EXPERIENCES_SUBMENU = [
  { label: "Land Journeys",       href: "/land-journeys" },
  { label: "Private Jet Charters", href: "/private-jet-charters" },
  { label: "Custom Itineraries",  href: "/custom-itineraries" },
  { label: "Preferred Partners",  href: "/preferred-partners" },
];

const CRUISES_SUBMENU = [
  { label: "Luxury Ocean Cruises",    href: "/cruises/luxury-ocean" },
  { label: "Premium Ocean Cruises",   href: "/cruises/premium-ocean" },
  { label: "River Cruises",           href: "/cruises/river" },
  { label: "Expedition Cruises",      href: "/cruises/expedition" },
  { label: "Private Charters",        href: "/cruises/private-charters" },
  { label: "Cruise Partners",         href: "/cruises/partners" },
];

// WHY: About Us trimmed to company-only links. Hotel/advisor links moved to Work With Us.
// Client-facing items (Contact Us, Pricing, FAQ) appear first so clients find them immediately.
const ABOUT_SUBMENU = [
  // ── Client-facing ──────────────────────────────────────────────────────────
  // WHY: "Overview" is intentionally omitted here — MobileAccordionItem already
  // renders an "Overview" link from the href prop, so including it in the items
  // array would produce a duplicate entry in the mobile nav.
  { label: "Contact Us",                    href: "/contact-us" },
  { label: "Pricing",                       href: "/pricing" },
  // FAQ page coming soon — link removed until page is built to prevent dead-end navigation
  // ── Company ───────────────────────────────────────────────────────────────
  { label: "Our Team",                      href: "/about" },
  { label: "We Give Back",                  href: "/about/philanthropic-initiatives" },
  { label: "Press",                         href: "/press" },
  // ── Corporate ─────────────────────────────────────────────────────────────
  // WHY: Employee benefit program is a corporate/B2B offering — lives under About Us
  // so HR decision-makers can find it alongside company overview and values pages.
  { label: "Employee Benefit Program",      href: "/employee-benefit-program" },
];

// WHY: Hotel partner and advisor recruitment links get their own top-level dropdown
// so high-value B2B pages are easy to find without scrolling through the full About Us list.
const WORK_WITH_US_SUBMENU = [
  { label: "Hotel Specialist Program",      href: "/hotel-specialist-program" },
  { label: "Hotel Collection Application",  href: "/hotel-collection-application" },
  { label: "Advisor Recruitment",           href: "/advisor-recruitment" },
];

// Shared dropdown panel styles
const dropdownPanelClass =
  "absolute top-full left-0 mt-2 bg-[#384959] border border-white/10 shadow-xl min-w-[230px] z-50";
const dropdownLinkClass =
  "block px-5 py-3 bta-nav-link text-[12px] tracking-[0.14em] text-white/80 hover:text-white hover:bg-white/5 uppercase transition-colors border-b border-white/10 last:border-b-0";

// ── Desktop dropdown wrapper ──────────────────────────────────────────────────
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
  // WHY: Use a ref-based close timer so the dropdown stays open long enough
  // for the user to move their mouse from the trigger label down into the panel.
  // Without this delay the gap between the trigger and panel closes the menu
  // before the cursor arrives.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, [setOpen]);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, [setOpen]);

  return (
    <div
      ref={dropRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <a
          href={href}
          className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white transition-colors uppercase flex items-center gap-1"
        >
          {label}
          <span className="text-white/60 text-[9px]">▾</span>
        </a>
      ) : (
        <button
          className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white transition-colors uppercase flex items-center gap-1 bg-transparent border-0 cursor-pointer"
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

// ── Mobile accordion item ─────────────────────────────────────────────────────
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
        className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white uppercase flex items-center gap-2 w-full text-left bg-transparent border-0 cursor-pointer"
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
              className="bta-nav-link text-[13px] tracking-[0.14em] text-white/80 hover:text-white uppercase"
              onClick={onClose}
            >
              Overview
            </a>
          )}
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bta-nav-link text-[13px] tracking-[0.14em] text-white/80 hover:text-white uppercase"
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

// ── Main NavBar ───────────────────────────────────────────────────────────────
export default function NavBar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [cruisesOpen, setCruisesOpen]   = useState(false);
  const [workWithUsOpen, setWorkWithUsOpen] = useState(false);
  const [aboutOpen, setAboutOpen]       = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [searchQuery, setSearchQuery]   = useState("");

  const experiencesRef  = useRef<HTMLDivElement>(null);
  const cruisesRef      = useRef<HTMLDivElement>(null);
  const workWithUsRef   = useRef<HTMLDivElement>(null);
  const aboutRef        = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (experiencesRef.current  && !experiencesRef.current.contains(e.target as Node))  setExperiencesOpen(false);
      if (cruisesRef.current      && !cruisesRef.current.contains(e.target as Node))      setCruisesOpen(false);
      if (workWithUsRef.current   && !workWithUsRef.current.contains(e.target as Node))   setWorkWithUsOpen(false);
      if (aboutRef.current        && !aboutRef.current.contains(e.target as Node))        setAboutOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // WHY: Route to journal page with search query — blog posts are the
      // primary searchable content on the site.
      window.location.href = `/journal?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

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
        <nav className="hidden lg:flex items-center gap-7">

          {/* Destinations — direct link */}
          <a
            href="/destinations"
            className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white transition-colors uppercase"
          >
            Destinations
          </a>

          {/* Experiences dropdown */}
          <DesktopDropdown
            label="Experiences"
            href="/experiences"
            items={EXPERIENCES_SUBMENU}
            open={experiencesOpen}
            setOpen={setExperiencesOpen}
            dropRef={experiencesRef}
          />

          {/* Cruises dropdown */}
          <DesktopDropdown
            label="Cruises"
            href="/cruises"
            items={CRUISES_SUBMENU}
            open={cruisesOpen}
            setOpen={setCruisesOpen}
            dropRef={cruisesRef}
          />

          {/* Family Travel — direct link */}
          <a
            href="/experiences/family-travel"
            className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white transition-colors uppercase"
          >
            Family Travel
          </a>

          {/* Journal — direct link */}
          <a
            href="/journal"
            className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white transition-colors uppercase"
          >
            Journal
          </a>

          {/* About Us dropdown */}
          <DesktopDropdown
            label="About Us"
            href="/about"
            items={ABOUT_SUBMENU}
            open={aboutOpen}
            setOpen={setAboutOpen}
            dropRef={aboutRef}
          />

          {/* Work With Us dropdown — hotel partners and advisor recruitment — last in nav */}
          <DesktopDropdown
            label="Work With Us"
            items={WORK_WITH_US_SUBMENU}
            open={workWithUsOpen}
            setOpen={setWorkWithUsOpen}
            dropRef={workWithUsRef}
          />
        </nav>

        {/* Right side: Search + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search bar — expands on click */}
          <div className="flex items-center">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search journals, destinations…"
                  className="bg-white/10 border border-white/30 text-white placeholder-white/50 text-[11px] tracking-[0.05em] px-3 py-1.5 w-52 outline-none focus:border-white/60 transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close search"
                >
                  <X size={14} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Open search"
              >
                <Search size={16} />
              </button>
            )}
          </div>

          <a href={nav.cta.href} className="bta-btn-outline-white text-[12px] py-2 px-5">
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

            {/* Mobile search */}
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 border-b border-white/20 pb-4">
              <Search size={14} className="text-white/60 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search…"
                className="bg-transparent text-white placeholder-white/50 text-[12px] tracking-[0.05em] outline-none flex-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              />
            </form>

            <a
              href="/destinations"
              className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Destinations
            </a>

            <MobileAccordionItem
              label="Experiences"
              href="/experiences"
              items={EXPERIENCES_SUBMENU}
              onClose={() => setMenuOpen(false)}
            />

            <MobileAccordionItem
              label="Cruises"
              href="/cruises"
              items={CRUISES_SUBMENU}
              onClose={() => setMenuOpen(false)}
            />

            <a
              href="/experiences/family-travel"
              className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Family Travel
            </a>

            <a
              href="/journal"
              className="bta-nav-link text-[13px] tracking-[0.15em] text-white/90 hover:text-white uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Journal
            </a>

            <MobileAccordionItem
              label="About Us"
              href="/about"
              items={ABOUT_SUBMENU}
              onClose={() => setMenuOpen(false)}
            />

            <MobileAccordionItem
              label="Work With Us"
              items={WORK_WITH_US_SUBMENU}
              onClose={() => setMenuOpen(false)}
            />

            <a href={nav.cta.href} className="bta-btn-outline-white text-[12px] py-2 px-5 self-start mt-2">
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
