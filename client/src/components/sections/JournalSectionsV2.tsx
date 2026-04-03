/**
 * JournalSections. Journal + Testimonials + Instagram + Next Journey + Final CTA + Footer
 */

import { useState, useEffect, useRef } from "react";
import {
  journal,
  testimonials,
  instagram,
  finalCta,
  footer,
  experienceStrip,
} from "@/content/homepage";
import { trpc } from "@/lib/trpc";

export function ExperienceStripSection() {
  return (
    <section className="relative w-full h-[340px] overflow-hidden">
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
    <section className="bg-[#384959] py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="bta-eyebrow text-[#bfaf8a] mb-3">{journal.eyebrow}</p>
          <h2
            className="bta-section-title text-[#faf9f6] text-4xl md:text-5xl mb-5"
            style={{ fontWeight: 400 }}
          >
            {journal.headline}
          </h2>
          <p className="font-body text-[#faf9f6]/60 text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {journal.subheadline}
          </p>
        </div>

        {/* Blog Cards. taller images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {journal.posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ height: "420px" }}
                />
              </div>
              <div className="font-smallcaps text-[#bfaf8a] text-xs tracking-[0.18em] uppercase mb-3">
                {post.category}. {post.readTime}
              </div>
              <h3
                className="font-display text-[#faf9f6] text-xl md:text-2xl mb-5 leading-snug"
                style={{ fontWeight: 400 }}
              >
                {post.title}
              </h3>
              <a
                href={post.href}
                className="font-smallcaps text-[#faf9f6]/50 text-xs tracking-[0.18em] uppercase hover:text-[#bfaf8a] transition-colors flex items-center gap-2"
              >
                READ MORE →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trustpilot / Google Review Card ───────────────────────────────────────────
function ReviewCard({ item, index }: { item: typeof testimonials[0]; index: number }) {
  const googleReviewUrl = "https://www.google.com/search?q=Boutique+Travel+Advisors+reviews";

  return (
    <a
      href={googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white/60 backdrop-blur-sm border border-[#bfaf8a]/20 p-8 hover:border-[#bfaf8a]/50 transition-all duration-300 hover:shadow-lg"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, s) => (
          <svg key={s} className="w-4 h-4 text-[#bfaf8a] fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Context */}
      <p
        className="font-body text-[#384959]/60 text-base italic mb-4 leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {item.context}
      </p>

      {/* Quote */}
      <blockquote
        className="bta-section-title text-[#384959] text-lg md:text-xl mb-6 leading-snug"
        style={{ fontWeight: 400 }}
      >
        {item.quote}
      </blockquote>

      {/* Author + Google badge */}
      <div className="flex items-center justify-between">
        <p
          className="font-script text-[#384959]/60 text-lg"
          style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
        >
         . {item.author}
        </p>
        <span className="font-smallcaps text-[#bfaf8a] text-xs tracking-[0.14em] uppercase group-hover:text-[#384959] transition-colors flex items-center gap-1">
          View on Google
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </div>
    </a>
  );
}

type LiveReview = {
  author: string;
  authorPhotoUrl: string;
  authorProfileUrl: string;
  rating: number;
  text: string;
  relativeTime: string;
  reviewUrl: string;
};

function LiveReviewCard({ review }: { review: LiveReview }) {
  // Short summary: ~150 chars
  const maxLen = 150;
  const summary = review.text.length > maxLen
    ? review.text.slice(0, maxLen).trim() + "..."
    : review.text;

  return (
    <div className="flex-shrink-0 w-[380px] bg-white/60 backdrop-blur-sm border border-[#bfaf8a]/20 p-6 flex flex-col">
      {/* Author row */}
      <div className="flex items-center gap-3 mb-4">
        {review.authorPhotoUrl ? (
          <img
            src={review.authorPhotoUrl}
            alt={review.author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#bfaf8a]/30 flex items-center justify-center text-[#384959] font-semibold">
            {review.author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-body text-[#384959] text-base font-semibold">{review.author}</p>
          <p className="font-body text-[#384959]/50 text-xs">{review.relativeTime}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, s) => (
          <svg key={s} className={`w-4 h-4 fill-current ${s < review.rating ? "text-[#bfaf8a]" : "text-[#bfaf8a]/20"}`} viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Summary */}
      <p
        className="font-body text-[#384959]/70 text-sm leading-relaxed flex-1 mb-4"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {summary}
      </p>

      {/* Read More link */}
      <a
        href={review.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-smallcaps text-[#bfaf8a] text-xs tracking-[0.14em] uppercase hover:text-[#384959] transition-colors flex items-center gap-1 self-start"
      >
        Read More on Google
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}

export function TestimonialsSection() {
  const { data, isLoading } = trpc.reviews.getLatest.useQuery({ count: 6 });
  const reviews = data?.reviews ?? [];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect: continuous horizontal scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || reviews.length === 0) return;

    let scrollPos = 0;
    const scrollSpeed = 0.5; // pixels per frame
    let animationId: number;

    const scroll = () => {
      scrollPos += scrollSpeed;
      // When we've scrolled past the first set of reviews, reset to create infinite loop
      const cardWidth = 380 + 24; // card width + gap
      const totalWidth = cardWidth * reviews.length;
      if (scrollPos >= totalWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [reviews]);

  if (isLoading) {
    return (
      <section className="bg-[#edeae4] py-24 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-[#bfaf8a]">Loading reviews...</p>
        </div>
      </section>
    );
  }

  // Duplicate reviews to create seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-[#edeae4] py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-script text-[#bfaf8a] text-3xl mb-3"
            style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
          >
            Client Stories
          </p>
          <h2
            className="bta-section-title text-[#384959] text-4xl md:text-5xl"
            style={{ fontWeight: 400 }}
          >
            WHAT OUR TRAVELERS SAY
          </h2>
        </div>

        {/* Horizontal auto-scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedReviews.map((review, i) => (
            <LiveReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Boutique+Travel+Advisors+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-smallcaps text-[#384959]/60 text-xs tracking-[0.18em] uppercase hover:text-[#bfaf8a] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="bg-[#bfaf8a] py-20 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 px-4">
          <p
            className="font-script text-[#faf9f6]/80 text-3xl mb-3"
            style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
          >
            {instagram.eyebrow}
          </p>
          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bta-section-title text-[#faf9f6] text-2xl md:text-4xl hover:text-[#faf9f6]/80 transition-colors block truncate"
            style={{ fontWeight: 400 }}
          >
            {instagram.handle}
          </a>
        </div>
        {/* 2-col on mobile, 3-col on tablet, 6-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {instagram.photos.map((photo, i) => (
            <a
              key={i}
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden group"
              style={{ height: "clamp(140px, 22vw, 220px)" }}
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

// ─── "Your Next Journey Starts Today" section ──────────────────────────────────
export function NextJourneySection() {
  return (
    <section className="bg-[#edeae4] py-24 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Left: Text */}
        <div>
          <p
            className="font-script text-[#bfaf8a] text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
          >
            Your next adventure awaits
          </p>
          <h2
            className="bta-section-title text-[#384959] text-4xl md:text-5xl lg:text-6xl mb-7 leading-tight"
            style={{ fontWeight: 400 }}
          >
            YOUR NEXT<br />JOURNEY<br />STARTS TODAY
          </h2>
          <p
            className="font-body text-[#2F2F2F]/70 text-xl leading-relaxed mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every extraordinary journey begins with a single conversation. Let our expert advisors craft a bespoke itinerary tailored to your dreams, your pace, and your vision of the perfect escape.
          </p>
          <a href="/book" className="bta-btn-gold">
            BEGIN PLANNING
          </a>
        </div>

        {/* Right: Stacked images */}
        <div className="relative">
          <div className="absolute top-[-20px] right-[-20px] w-3/5 h-4/5 bg-[#bfaf8a]/20 z-0" />
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format&fit=crop"
            alt="Your next journey starts today"
            className="relative z-10 w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative w-full py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${finalCta.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative text-center px-6">
        <p
          className="font-script text-[#faf9f6]/90 text-3xl md:text-4xl mb-5"
          style={{ fontFamily: "'Allura', 'Cormorant Garamond', serif" }}
        >
          {finalCta.subheadline}
        </p>
        <h2
          className="bta-section-title text-[#faf9f6] text-5xl md:text-6xl lg:text-7xl mb-12"
          style={{ fontWeight: 400 }}
        >
          {finalCta.headline}
        </h2>
        <a href={finalCta.cta.href} className="bta-btn-gold" style={{ padding: '1rem 3.5rem' }}>
          {finalCta.cta.label}
        </a>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#2f2f2f] py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14">

          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663449292159/cXyPMQeBTKSRcwla.png"
                alt="Boutique Travel Advisors"
                className="w-auto object-contain"
                style={{ height: "clamp(72px, 8vw, 110px)" }}
              />
            </div>
            <p
              className="font-body text-[#faf9f6]/50 text-base mb-7 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {footer.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex gap-5">
              {footer.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#faf9f6]/40 hover:text-[#bfaf8a] transition-colors"
                  aria-label={s.platform}
                >
                  {s.platform === "Instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {s.platform === "Facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {s.platform === "LinkedIn" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-smallcaps text-[#faf9f6] text-sm tracking-[0.22em] uppercase mb-6">Explore</h4>
            <ul className="space-y-4">
              {footer.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[#faf9f6]/55 text-base hover:text-[#bfaf8a] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-smallcaps text-[#faf9f6] text-sm tracking-[0.22em] uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              {footer.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[#faf9f6]/55 text-base hover:text-[#bfaf8a] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe + Contact */}
          <div>
            <h4 className="font-smallcaps text-[#faf9f6] text-xs tracking-[0.22em] uppercase mb-2">Subscribe to Our</h4>
            <h4 className="font-smallcaps text-[#faf9f6] text-xs tracking-[0.22em] uppercase mb-5">Newsletter for Latest Update</h4>
            <div className="flex mb-10 border border-white/20">
              <input
                type="email"
                placeholder="Your email address here"
                className="flex-1 bg-transparent px-4 py-3 font-body text-[#faf9f6] text-sm placeholder:text-[#faf9f6]/40 focus:outline-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              />
              <button className="bg-transparent border-l border-white/20 px-4 py-3 text-[#faf9f6]/60 hover:text-[#bfaf8a] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <h4 className="font-smallcaps text-[#faf9f6] text-xs tracking-[0.22em] uppercase mb-5">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`tel:${footer.contact.phone}`}
                className="flex items-center gap-3 font-body text-[#faf9f6]/55 text-base hover:text-[#bfaf8a] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <svg className="w-4 h-4 flex-shrink-0 text-[#faf9f6]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {footer.contact.phone}
              </a>
              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-3 font-body text-[#faf9f6]/55 text-base hover:text-[#bfaf8a] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <svg className="w-4 h-4 flex-shrink-0 text-[#faf9f6]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {footer.contact.email}
              </a>
              <p
                className="font-body text-[#faf9f6]/40 text-sm mt-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {footer.contact.virtuoso}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-smallcaps text-[#faf9f6]/35 text-xs tracking-[0.18em] uppercase">
            {footer.copyright}
          </p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-smallcaps text-[#faf9f6]/35 text-xs tracking-[0.14em] uppercase hover:text-[#faf9f6]/60 transition-colors"
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
