/**
 * JournalSections — Journal + Testimonials + Instagram + Final CTA + Footer
 *
 * Official BTA Brand Colors:
 *   Champagne Gold:  #BFAF8A  → eyebrows, accents, icons, hover states, Instagram bg
 *   Aegean Blue:     #384959  → text on light backgrounds
 *   Linen White:     #FAF0F6  → text on dark/navy/gold backgrounds
 *   Warm Stone:      #EDEAE4  → testimonials background
 *   Dark Navy:       #041E42  → journal section background, footer
 */

import { useState } from "react";
import {
  journal,
  testimonials,
  instagram,
  finalCta,
  footer,
  experienceStrip,
} from "@/content/homepage";

export function ExperienceStripSection() {
  return (
    <section className="relative w-full h-[300px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${experienceStrip.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}

export function JournalSection() {
  return (
    // Dark Navy background — rich contrast for editorial feel
    <section className="bg-[#041E42] py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-script text-[#BFAF8A] text-xl mb-2">{journal.eyebrow}</p>
          <h2
            className="bta-section-title text-[#FAF0F6] text-3xl md:text-4xl mb-4"
            style={{ fontWeight: 400 }}
          >
            {journal.headline}
          </h2>
          <p className="font-body text-[#FAF0F6]/60 text-base">{journal.subheadline}</p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journal.posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="font-smallcaps text-[#BFAF8A] text-[9px] tracking-[0.18em] uppercase mb-2">
                {post.category} — {post.readTime}
              </div>
              <h3
                className="font-display text-[#FAF0F6] text-lg mb-4 leading-snug"
                style={{ fontWeight: 400 }}
              >
                {post.title}
              </h3>
              <a
                href={post.href}
                className="font-smallcaps text-[#FAF0F6]/50 text-[9px] tracking-[0.18em] uppercase hover:text-[#BFAF8A] transition-colors flex items-center gap-2"
              >
                READ MORE
                <svg className="w-4 h-px" viewBox="0 0 16 1" fill="none">
                  <line x1="0" y1="0.5" x2="16" y2="0.5" stroke="currentColor" />
                </svg>
                →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    // Warm Stone background — clean, airy
    <section className="bg-[#EDEAE4] py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop: 3-across layout with side arrows */}
        <div className="hidden md:flex items-start gap-6">
          {/* Prev Arrow — Champagne Gold */}
          <button
            onClick={prev}
            className="mt-8 flex-shrink-0 text-[#BFAF8A]/50 hover:text-[#BFAF8A] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 grid grid-cols-3 gap-10">
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} dim={i !== current} />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            className="mt-8 flex-shrink-0 text-[#BFAF8A]/50 hover:text-[#BFAF8A] transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile: single card with dots */}
        <div className="md:hidden">
          <TestimonialCard item={testimonials[current]} />
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "bg-[#BFAF8A] w-6" : "bg-[#BFAF8A]/30 w-1.5"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item, dim = false }: { item: typeof testimonials[0]; dim?: boolean }) {
  return (
    <div className={`transition-opacity duration-300 ${dim ? "opacity-40" : "opacity-100"}`}>
      <p className="font-body text-[#384959]/70 text-base mb-3 leading-relaxed">{item.context}</p>
      <blockquote
        className="font-display text-[#BFAF8A] text-xl md:text-2xl leading-snug mb-4"
        style={{ fontWeight: 400 }}
      >
        {item.quote}
      </blockquote>
      <p className="font-script text-[#384959]/60 text-base">— {item.author}</p>
    </div>
  );
}

export function InstagramSection() {
  return (
    // Champagne Gold background — warm, distinctive
    <section className="bg-[#BFAF8A] py-14 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-8">
          <p className="font-script text-[#FAF0F6]/80 text-xl mb-2">{instagram.eyebrow}</p>
          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bta-section-title text-[#FAF0F6] text-2xl md:text-3xl hover:text-[#FAF0F6]/80 transition-colors"
            style={{ fontWeight: 400 }}
          >
            {instagram.handle}
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {instagram.photos.map((photo, i) => (
            <a
              key={i}
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden group"
            >
              <img
                src={photo}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${finalCta.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center px-6">
        <p className="font-script text-[#FAF0F6]/90 text-xl md:text-2xl mb-4">
          {finalCta.subheadline}
        </p>
        <h2
          className="bta-section-title text-[#FAF0F6] text-4xl md:text-5xl lg:text-6xl mb-10"
          style={{ fontWeight: 400 }}
        >
          {finalCta.headline}
        </h2>
        <a href={finalCta.cta.href} className="bta-btn-outline-white text-[10px] py-3 px-10">
          {finalCta.cta.label}
        </a>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    // Deep Navy footer — anchors the page
    <footer className="bg-[#041E42] py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-[#FAF0F6] mb-4 leading-none">
              <div className="font-smallcaps text-[9px] tracking-[0.25em] uppercase opacity-70">BOUTIQUE</div>
              <div
                className="text-[28px] leading-none mt-[-2px]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#FAF0F6" }}
              >
                travel
              </div>
              <div className="font-smallcaps text-[9px] tracking-[0.25em] uppercase opacity-70 mt-[-2px]">ADVISORS</div>
            </div>
            <p className="font-body text-[#FAF0F6]/50 text-sm mb-6 leading-relaxed">{footer.tagline}</p>
            <div className="flex gap-4">
              {footer.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF0F6]/40 hover:text-[#BFAF8A] transition-colors"
                  aria-label={s.platform}
                >
                  {s.platform === "Instagram" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {s.platform === "Facebook" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {s.platform === "LinkedIn" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-smallcaps text-[#FAF0F6] text-[10px] tracking-[0.2em] uppercase mb-5">Explore</h4>
            <ul className="space-y-3">
              {footer.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-[#FAF0F6]/50 text-sm hover:text-[#BFAF8A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-smallcaps text-[#FAF0F6] text-[10px] tracking-[0.2em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {footer.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-[#FAF0F6]/50 text-sm hover:text-[#BFAF8A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-smallcaps text-[#FAF0F6] text-[10px] tracking-[0.2em] uppercase mb-5">Subscribe</h4>
            <p className="font-body text-[#FAF0F6]/50 text-xs mb-4 leading-relaxed uppercase tracking-wide">
              Newsletter for latest updates
            </p>
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/10 px-4 py-2 font-body text-[#FAF0F6] text-sm placeholder:text-[#FAF0F6]/30 focus:outline-none focus:border-[#BFAF8A]"
              />
              <button className="bg-[#BFAF8A] px-4 py-2 text-white hover:bg-[#9E8661] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <h4 className="font-smallcaps text-[#FAF0F6] text-[10px] tracking-[0.2em] uppercase mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a href={`tel:${footer.contact.phone}`} className="flex items-center gap-2 font-body text-[#FAF0F6]/50 text-sm hover:text-[#BFAF8A] transition-colors">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {footer.contact.phone}
              </a>
              <a href={`mailto:${footer.contact.email}`} className="flex items-center gap-2 font-body text-[#FAF0F6]/50 text-sm hover:text-[#BFAF8A] transition-colors">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {footer.contact.email}
              </a>
              <p className="font-smallcaps text-[#FAF0F6]/30 text-[9px] tracking-[0.12em] uppercase mt-2">
                {footer.contact.virtuoso}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-smallcaps text-[#FAF0F6]/30 text-[9px] tracking-[0.15em] uppercase">
            {footer.copyright}
          </p>
          <div className="flex gap-4">
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-smallcaps text-[#FAF0F6]/30 text-[9px] tracking-[0.12em] uppercase hover:text-[#FAF0F6]/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
