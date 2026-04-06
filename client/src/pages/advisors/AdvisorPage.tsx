/**
 * AdvisorPage.tsx — Dynamic advisor profile page template.
 *
 * WHY: Instead of a separate static file per advisor, this single template
 * renders any advisor's profile from the database. The layout is identical
 * to the Julie Rose design — all content is driven by the `advisor` record
 * fetched via tRPC. Add a new team member in /admin/team and their page
 * appears automatically at /advisors/:slug.
 *
 * Sections (in order):
 *   1. Hero — full-width photo + name + title + badges + CTAs
 *   2. Meet — bio, overlapping photos, quote
 *   3. Stats bar
 *   4. Curated Hotels (favourite hotels)
 *   5. Specialties grid
 *   6. Philosophy pillars
 *   7. Featured Experiences
 *   8. Why Work With
 *   9. Testimonials carousel
 *  10. Contact / Booking form
 *  11. Closing quote banner
 */

import PageSEO from "@/components/PageSEO";
import React, { useState } from "react";
import { useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";
import type { Advisor } from "../../../../drizzle/schema";

// ─── Icon helpers (same as JulieRose.tsx) ────────────────────────────────────
function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-[#bfaf8a]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PillarIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactElement> = {
    compass: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0v2m0 18v-2m10-10h-2M4 12H2m15.07-7.07-1.41 1.41M7.34 16.66l-1.41 1.41M16.66 16.66l1.41 1.41M7.34 7.34 5.93 5.93" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    heart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    star: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  };
  return icons[icon] ?? icons.compass;
}

// ─── Section components (data-driven) ────────────────────────────────────────

function HeroSection({ a }: { a: Advisor }) {
  const badges = (a.badges as string[]) ?? [];
  const ctaPrimary = (a.ctaPrimary as { label: string; href: string } | null) ?? { label: "Start Planning", href: "/contact-us" };
  const ctaSecondary = (a.ctaSecondary as { label: string; href: string } | null) ?? { label: "View Specialties", href: "#specialties" };

  return (
    <>
      {/* MOBILE */}
      <section className="block lg:hidden bg-[#faf9f6]">
        <div className="px-6 pt-10 pb-8">
          <h1 className="text-[#2F2F2F] text-4xl uppercase leading-none mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {a.name}
          </h1>
          <p className="bta-eyebrow text-[#bfaf8a] text-[10px] tracking-[0.25em] uppercase mb-3">{a.title}</p>
          {a.tagline && (
            <p className="text-[#2F2F2F]/65 text-base italic max-w-xs mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{a.tagline}</p>
          )}
          <div className="flex flex-col gap-3 mb-4">
            <a href={ctaPrimary.href} className="inline-block bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-7 py-3 text-center">{ctaPrimary.label}</a>
            <a href={ctaSecondary.href} className="inline-block border border-[#bfaf8a] text-[#2F2F2F] bta-eyebrow text-xs tracking-[0.2em] uppercase px-7 py-3 text-center hover:bg-[#bfaf8a]/10 transition-colors">{ctaSecondary.label}</a>
          </div>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {badges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[#2F2F2F]/50 text-[10px] bta-eyebrow tracking-[0.15em] uppercase">
                  <svg className="w-3 h-3 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
        {a.heroImage && (
          <div className="h-64 overflow-hidden">
            <img src={a.heroImage} alt={a.name} className="w-full h-full object-cover object-top" />
          </div>
        )}
      </section>

      {/* DESKTOP */}
      <section className="hidden lg:flex relative h-[42vh] min-h-[320px] max-h-[480px] items-end pb-10 overflow-hidden">
        <div className="absolute inset-0">
          {a.heroImage
            ? <img src={a.heroImage} alt={a.name} className="w-full h-full object-cover object-center" />
            : <div className="w-full h-full bg-[#384959]" />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/85 via-[#384959]/35 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-14">
          <h1 className="text-white text-6xl lg:text-7xl uppercase leading-none mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {a.name}
          </h1>
          <p className="text-white/75 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase" }}>{a.title}</p>
          {a.tagline && (
            <p className="text-white/75 text-lg italic max-w-xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>{a.tagline}</p>
          )}
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={ctaPrimary.href} className="inline-block bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-7 py-3">{ctaPrimary.label}</a>
            <a href={ctaSecondary.href} className="inline-block border border-white/50 text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-7 py-3 hover:border-white hover:bg-white/10 transition-colors">{ctaSecondary.label}</a>
          </div>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {badges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-white/50 text-xs bta-eyebrow tracking-[0.15em] uppercase">
                  <svg className="w-3 h-3 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function MeetSection({ a }: { a: Advisor }) {
  const bio = (a.bio as string[]) ?? [];
  const ctaHref = (a.ctaPrimary as any)?.href ?? "/contact-us";
  return (
    <section className="bg-[#faf9f6] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[320px] md:h-[440px] lg:h-[620px]">
          {a.photoMain && (
            <div className="absolute left-0 top-0 w-[75%] h-[85%] overflow-hidden shadow-2xl">
              <img src={a.photoMain} alt={a.name} className="w-full h-full object-cover object-top" />
            </div>
          )}
          {a.photoAccent && (
            <div className="absolute right-0 bottom-0 w-[52%] h-[55%] overflow-hidden shadow-xl border-4 border-[#faf9f6]">
              <img src={a.photoAccent} alt="Travel moment" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="absolute left-[-16px] top-12 w-1 h-32 bg-[#bfaf8a]" />
        </div>
        <div>
          {a.meetEyebrow && (
            <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>{a.meetEyebrow}</p>
          )}
          {a.meetHeading && (
            <h2 className="text-[#2F2F2F] text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}>
              {a.meetHeading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
          )}
          {bio.length > 0 && (
            <div className="space-y-5 mb-8">
              {bio.map((para, i) => (
                <p key={i} className="text-[#2F2F2F]/70 text-lg leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{para}</p>
              ))}
            </div>
          )}
          {a.meetQuote && (
            <blockquote className="border-l-2 border-[#bfaf8a] pl-6 mb-10 text-[#2F2F2F]/60 text-xl italic leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {a.meetQuote}
            </blockquote>
          )}
          <a href={ctaHref} className="inline-block bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-8 py-4">
            Begin Planning With {a.name.split(" ")[0]}
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection({ a }: { a: Advisor }) {
  const stats = (a.stats as Array<{ value: string; label: string }>) ?? [];
  if (!stats.length) return null;
  return (
    <section className="bg-[#384959] py-14">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-[#bfaf8a] text-4xl lg:text-5xl font-light mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>{s.value}</p>
            <p className="text-white/60 text-xs bta-eyebrow tracking-[0.2em] uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HotelsSection({ a }: { a: Advisor }) {
  const hotels = (a.hotels as Array<{ badge: string; location: string; name: string; quote: string; perks: string[]; image: string }>) ?? [];
  if (!hotels.length) return null;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="text-center mb-16">
          <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Curated Collection</p>
          <h2 className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
            {a.name.split(" ")[0]}'s Favourite Luxury Hotels
          </h2>
          <p className="text-[#2F2F2F]/50 text-base mt-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Personally vetted properties where BTA clients receive exclusive VIP treatment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <div key={i} className="group border border-[#2F2F2F]/8 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.15em] uppercase px-3 py-1">{hotel.badge}</span>
              </div>
              <div className="p-7 bg-[#faf9f6]">
                <p className="text-[#bfaf8a] text-xs bta-eyebrow tracking-[0.2em] uppercase mb-1">{hotel.location}</p>
                <h3 className="text-[#2F2F2F] text-xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>{hotel.name}</h3>
                <p className="text-[#2F2F2F]/60 text-sm italic mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{hotel.quote}</p>
                {hotel.perks.length > 0 && (
                  <ul className="space-y-1">
                    {hotel.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-2 text-[#2F2F2F]/60 text-xs" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        <svg className="w-3 h-3 text-[#bfaf8a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialtiesSection({ a }: { a: Advisor }) {
  const items = (a.specialties as Array<{ label: string; description: string; image: string }>) ?? [];
  if (!items.length) return null;
  return (
    <section id="specialties" className="bg-[#faf9f6] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="text-center mb-16">
          <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Areas of Expertise</p>
          <h2 className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
            {a.name.split(" ")[0]}'s Specialties
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-light mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>{item.label}</h3>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection({ a }: { a: Advisor }) {
  const pillars = (a.pillars as Array<{ icon: string; title: string; body: string }>) ?? [];
  if (!pillars.length) return null;
  return (
    <section className="bg-[#384959] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="text-center mb-16">
          <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Her Approach</p>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
            The Art of Thoughtful Travel
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center mx-auto mb-5 text-[#bfaf8a]">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h4 className="text-white text-lg font-light mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{pillar.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperiencesSection({ a }: { a: Advisor }) {
  const items = (a.experiences as Array<{ duration: string; region: string; title: string; description: string; image: string; href: string }>) ?? [];
  if (!items.length) return null;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="text-center mb-16">
          <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Featured Journeys</p>
          <h2 className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
            Experiences Designed By {a.name.split(" ")[0]}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((trip, i) => (
            <div key={i} className="group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.15em] uppercase px-3 py-1">{trip.duration}</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white bta-eyebrow text-xs tracking-[0.15em] uppercase px-3 py-1">{trip.region}</span>
                </div>
              </div>
              <div className="bg-[#384959] p-7">
                <h3 className="text-white text-xl font-light mb-3 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{trip.title}</h3>
                <p className="text-white/60 text-base leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{trip.description}</p>
                <a href={trip.href} className="inline-flex items-center gap-2 bta-eyebrow text-[#bfaf8a] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyWorkSection({ a }: { a: Advisor }) {
  const benefits = (a.whyWorkBenefits as Array<{ title: string; body: string }>) ?? [];
  const ctaHref = (a.ctaPrimary as any)?.href ?? "/contact-us";
  if (!benefits.length && !a.whyWorkImage) return null;
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
        {a.whyWorkImage && (
          <div className="relative h-[280px] sm:h-[360px] lg:h-auto overflow-hidden">
            <img src={a.whyWorkImage} alt={`Why work with ${a.name.split(" ")[0]}`} className="w-full h-full object-cover object-top" />
          </div>
        )}
        <div className="py-24 px-8 lg:px-14 xl:px-20 flex flex-col justify-center">
          <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Why Work With {a.name.split(" ")[0]}</p>
          <h2 className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
            Your Journey,<br />Perfectly Handled
          </h2>
          {benefits.length > 0 && (
            <div className="space-y-7 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-[#bfaf8a]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#bfaf8a] bta-eyebrow text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="text-[#2F2F2F] text-lg font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{benefit.title}</h4>
                    <p className="text-[#2F2F2F]/60 text-base leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{benefit.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <a href={ctaHref} className="inline-block self-start bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-8 py-4">
            Start Planning With {a.name.split(" ")[0]}
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ a }: { a: Advisor }) {
  const items = (a.testimonials as Array<{ quote: string; author: string; trip: string; rating: number }>) ?? [];
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const current = items[active];
  return (
    <section className="bg-[#384959] py-24 lg:py-32">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Client Stories</p>
        <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-14" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
          What Travelers Say<br />About {a.name.split(" ")[0]}
        </h2>
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled={i < current.rating} />)}
        </div>
        <blockquote className="text-white/80 text-xl md:text-2xl italic leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          "{current.quote}"
        </blockquote>
        <div className="mb-10">
          <p className="bta-eyebrow text-[#bfaf8a] text-sm tracking-[0.2em] uppercase">{current.author}</p>
          <p className="text-white/40 text-sm mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{current.trip}</p>
        </div>
        {items.length > 1 && (
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setActive((active - 1 + items.length) % items.length)} className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors" aria-label="Previous">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-[#bfaf8a]" : "bg-white/20"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => setActive((active + 1) % items.length)} className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors" aria-label="Next">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ContactSection({ a }: { a: Advisor }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const firstName = a.name.split(" ")[0];
  return (
    <section id="contact" className="bg-[#edeae4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Start Planning</p>
          <h2 className="text-[#2F2F2F] text-4xl md:text-5xl font-light leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
            Begin Your Journey<br />With {firstName}
          </h2>
          <p className="text-[#2F2F2F]/60 text-lg mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Tell {firstName} about your dream trip and she'll be in touch within 24 hours.
          </p>
          {submitted ? (
            <div className="bg-[#bfaf8a]/10 border border-[#bfaf8a]/30 p-8 text-center">
              <p className="text-[#2F2F2F] text-xl italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Thank you! {firstName} will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} />
                <input type="email" placeholder="Your Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} />
              </div>
              <input type="tel" placeholder="Phone Number (optional)" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} />
              <input type="text" placeholder="Where would you like to go?" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} />
              <textarea placeholder={`Tell ${firstName} about your dream trip...`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full bg-white border border-[#2F2F2F]/10 px-5 py-3.5 text-[#2F2F2F] placeholder:text-[#2F2F2F]/40 focus:outline-none focus:border-[#bfaf8a] transition-colors resize-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} />
              <button type="submit" className="w-full bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#9C886A] transition-colors">
                Send My Enquiry
              </button>
            </form>
          )}
        </div>
        {/* Right: Club CTA */}
        <div className="flex flex-col justify-center">
          <div className="bg-[#384959] p-10 lg:p-14">
            <p className="text-[#bfaf8a] text-2xl italic mb-3" style={{ fontFamily: "'Allura', cursive" }}>Join the Club</p>
            <h3 className="text-white text-3xl font-light leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
              Unlock VIP Travel<br />Privileges
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              BTA Club members enjoy exclusive rates, priority access, and a dedicated advisor relationship — starting at just $299/year.
            </p>
            <a href="/membership" className="inline-block border border-[#bfaf8a] text-[#bfaf8a] bta-eyebrow text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#bfaf8a] hover:text-white transition-colors">
              Learn About Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingBannerSection({ a }: { a: Advisor }) {
  if (!a.closingBannerImage && !a.closingBannerQuote) return null;
  return (
    <section className="relative h-[320px] lg:h-[400px] flex items-center justify-center overflow-hidden">
      {a.closingBannerImage && (
        <div className="absolute inset-0">
          <img src={a.closingBannerImage} alt="Journey" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#384959]/70" />
        </div>
      )}
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        {a.closingBannerQuote && (
          <blockquote className="text-white text-2xl md:text-3xl italic leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {a.closingBannerQuote}
          </blockquote>
        )}
        <a href="/contact-us" className="inline-block bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-8 py-4">
          Plan Your Journey
        </a>
      </div>
    </section>
  );
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function AdvisorPage() {
  const [, params] = useRoute("/advisors/:slug");
  const slug = params?.slug ?? "";

  const { data: advisor, isLoading, error } = trpc.advisors.getBySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#faf9f6]">
        <Loader2 className="animate-spin text-[#9C886A]" size={32} />
      </div>
    );
  }

  if (error || !advisor) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-8">
        <p className="text-4xl uppercase tracking-widest text-[#384959] mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Advisor Not Found
        </p>
        <a href="/about/our-people" className="text-sm uppercase tracking-widest border-b border-[#9C886A] text-[#9C886A] pb-0.5 hover:opacity-70 transition-opacity">
          Meet Our Team
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageSEO title="Advisor | Boutique Travel Advisors" description="Meet a BTA luxury travel advisor — expert in bespoke itineraries, Virtuoso-preferred hotels, and extraordinary travel experiences." path="/advisors" />
      <HeroSection a={advisor} />
      <MeetSection a={advisor} />
      <StatsSection a={advisor} />
      <HotelsSection a={advisor} />
      <SpecialtiesSection a={advisor} />
      <PhilosophySection a={advisor} />
      <ExperiencesSection a={advisor} />
      <WhyWorkSection a={advisor} />
      <TestimonialsSection a={advisor} />
      <ContactSection a={advisor} />
      <ClosingBannerSection a={advisor} />
    </div>
  );
}
