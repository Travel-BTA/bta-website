/**
 * Journal — Blog feed at /journal
 *
 * Typography rules (BTA spec):
 *   H1 page title  → Instrument Serif, ALL CAPS, Champagne Gold #bfaf8a (on plain bg)
 *   Script accent  → Allura, italic (one-off only)
 *   H2/H3          → Playfair Display 600 italic
 *   Body/excerpts  → Playfair Display Regular
 *   Buttons/labels → Instrument Serif, ALL CAPS, tracked
 *
 * Color rules:
 *   Champagne Gold only on plain/solid backgrounds — NEVER over photos
 *   White text on all photo overlays
 */

import { useState, useMemo } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { PageLayout } from "@/components/PageLayout";
import { Search } from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function decodeHtml(html: string) {
  return html
    .replace(/&#8211;/g, ".")
    .replace(/&#8212;/g, ".")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d");
}

function normaliseCategory(cat: string) {
  return cat.trim().toUpperCase().replace(/\s+/g, " ");
}

const FILTER_LABELS = [
  "ALL",
  "DESTINATION GUIDE",
  "TRAVEL TIPS",
  "CULTURE",
  "ADVENTURE",
  "TRAVEL PHILOSOPHY",
];

// ─── Post type ────────────────────────────────────────────────────────────────
interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: string[];
  date: string;
  readTime: number;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[240px] bg-[#edeae4] mb-4" />
      <div className="h-3 bg-[#edeae4] rounded w-24 mb-3" />
      <div className="h-5 bg-[#edeae4] rounded w-4/5 mb-2" />
      <div className="h-5 bg-[#edeae4] rounded w-3/5 mb-4" />
      <div className="h-3 bg-[#edeae4] rounded w-full mb-2" />
      <div className="h-3 bg-[#edeae4] rounded w-5/6" />
    </div>
  );
}

// ─── Featured Post ────────────────────────────────────────────────────────────
function FeaturedCard({ post }: { post: Post }) {
  const primaryCategory = post.categories[0] ?? "Travel";
  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-0 bg-white border border-[#edeae4]">
      {/* Image */}
      <Link href={`/journal/${post.slug}`} className="block overflow-hidden">
        <div className="w-full h-[340px] lg:h-[460px] overflow-hidden">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={decodeHtml(post.title)}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#edeae4]" />
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-center px-8 lg:px-12 py-10 bg-white">
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[#bfaf8a] text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {primaryCategory}
          </span>
          <span className="text-xs text-[#2F2F2F]/40" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post.readTime} min read
          </span>
        </div>

        {/* Title — Playfair Display SemiBold Italic (H2 role on plain bg) */}
        <Link href={`/journal/${post.slug}`} className="group">
          <h2
            className="text-[#384959] text-2xl lg:text-[1.75rem] leading-snug mb-4 group-hover:text-[#bfaf8a] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </Link>

        {/* Date */}
        <p className="text-xs text-[#2F2F2F]/40 mb-5 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
          {formatDate(post.date)}
        </p>

        {/* Excerpt */}
        <p
          className="text-[#2F2F2F]/65 text-sm leading-relaxed mb-7 line-clamp-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {decodeHtml(post.excerpt)}
        </p>

        {/* CTA */}
        <Link
          href={`/journal/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#bfaf8a] text-[10px] tracking-[0.22em] uppercase hover:gap-3 transition-all"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Read Article <span>&#8594;</span>
        </Link>
      </div>
    </div>
  );
}

// ─── Grid Card ────────────────────────────────────────────────────────────────
function GridCard({ post }: { post: Post }) {
  const primaryCategory = post.categories[0] ?? "Travel";
  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link href={`/journal/${post.slug}`} className="block overflow-hidden mb-5">
        <div className="w-full h-[220px] overflow-hidden">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={decodeHtml(post.title)}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#edeae4]" />
          )}
        </div>
      </Link>

      {/* Category + read time */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[#bfaf8a] text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {primaryCategory}
        </span>
        <span className="text-[11px] text-[#2F2F2F]/40" style={{ fontFamily: "'Playfair Display', serif" }}>
          {post.readTime} min read
        </span>
      </div>

      {/* Title */}
      <Link href={`/journal/${post.slug}`}>
        <h3
          className="text-[#384959] text-base leading-snug mb-2 group-hover:text-[#bfaf8a] transition-colors line-clamp-2"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </Link>

      {/* Date */}
      <p className="text-[11px] text-[#2F2F2F]/40 mb-3 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
        {formatDate(post.date)}
      </p>

      {/* Excerpt */}
      <p
        className="text-[#2F2F2F]/55 text-sm leading-relaxed mb-4 line-clamp-3 flex-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {decodeHtml(post.excerpt)}
      </p>

      {/* Read more */}
      <Link
        href={`/journal/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-[#bfaf8a] text-[10px] tracking-[0.2em] uppercase hover:gap-2.5 transition-all mt-auto"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        READ MORE <span>&#8594;</span>
      </Link>
    </article>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#384959] py-20 px-6 text-center">
      {/* WHY: Script accent only on solid background, so Allura is fine here */}
      <p
        className="text-[#bfaf8a] text-2xl mb-2"
        style={{ fontFamily: "'Allura', cursive" }}
      >
        Stay Inspired
      </p>
      <h2
        className="text-white text-3xl md:text-4xl tracking-[0.12em] uppercase mb-5"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Never Miss a Journey
      </h2>
      <p
        className="text-white/65 text-sm leading-relaxed mb-8 max-w-md mx-auto"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Subscribe for destination guides, travel tips, and exclusive inspiration delivered monthly to your inbox.
      </p>
      {submitted ? (
        <p className="text-[#bfaf8a] text-base italic" style={{ fontFamily: "'Playfair Display', serif" }}>
          Thank you for subscribing.
        </p>
      ) : (
        <form
          onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }}
          className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-white text-[#2F2F2F] text-sm outline-none border-0 placeholder:text-[#2F2F2F]/40"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <button
            type="submit"
            className="bg-[#bfaf8a] text-white text-[10px] tracking-[0.22em] uppercase px-7 py-3 hover:bg-[#a89a76] transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="text-white/30 text-xs mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Journal() {
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const PER_PAGE = 13; // 1 featured + 12 grid

  const { data: posts, isLoading } = trpc.blog.getPosts.useQuery(
    { page, perPage: PER_PAGE },
    {}
  );

  const filtered = useMemo(() => {
    if (!posts) return [];
    let result = [...posts];
    if (activeFilter !== "ALL") {
      result = result.filter((p: any) =>
        p.categories.some((c: any) => normaliseCategory(c) === activeFilter)
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p: any) =>
        decodeHtml(p.title).toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.categories.some((c: any) => c.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeFilter, searchQuery]);

  const featured = filtered[0];
  const grid = filtered.slice(1);
  const hasMore = posts && posts.length === PER_PAGE;
  const totalPages = hasMore ? page + 1 : page;

  function handleFilter(f: string) {
    setActiveFilter(f);
    setPage(1);
  }

  return (
    <PageLayout hideCta={false}>

      {/* ── Masthead Header ─────────────────────────────────────────────── */}
      {/* WHY: Plain solid background — Champagne Gold H1 is correct here */}
      <div className="bg-[#faf9f6] pt-28 pb-14 px-6 text-center border-b border-[#edeae4]">
        {/* Allura script accent — one-off only */}
        <p
          className="text-[#bfaf8a] text-2xl mb-2"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          Boutique Travel Advisors
        </p>
        {/* H1 — Instrument Serif ALL CAPS Champagne Gold on plain bg */}
        <h1
          className="text-[#bfaf8a] text-4xl md:text-5xl tracking-[0.14em] uppercase mb-5"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          The Journal
        </h1>
        <p
          className="text-[#2F2F2F]/60 text-sm leading-relaxed max-w-lg mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Destination guides, travel philosophy, and cultural insights from our advisors and the places we love.
        </p>
      </div>

      {/* ── Filter Bar ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#edeae4] px-6 py-4 sticky top-[64px] z-10">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-1">
            {FILTER_LABELS.map(label => (
              <button
                key={label}
                onClick={() => handleFilter(label)}
                className={`px-4 py-2 text-[10px] tracking-[0.18em] uppercase transition-colors ${
                  activeFilter === label
                    ? "bg-[#bfaf8a] text-white"
                    : "text-[#2F2F2F]/45 hover:text-[#bfaf8a]"
                }`}
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {label}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="flex items-center border border-[#edeae4] bg-[#faf9f6] px-4 py-2 gap-2 min-w-[220px]">
            <input
              type="text"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Search articles..."
              className="flex-1 text-xs text-[#2F2F2F] outline-none bg-transparent placeholder:text-[#2F2F2F]/35"
              style={{ fontFamily: "'Playfair Display', serif" }}
            />
            <Search className="w-3.5 h-3.5 text-[#bfaf8a]" />
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="bg-[#faf9f6] min-h-[60vh]">
        {isLoading ? (
          <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => <CardSkeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="max-w-[1280px] mx-auto px-6 py-24 text-center">
            <p
              className="text-[#2F2F2F]/40 text-base italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No articles found. Try a different search or category.
            </p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-10">
                <FeaturedCard post={featured} />
              </div>
            )}

            {/* Section divider */}
            {grid.length > 0 && (
              <div className="max-w-[1280px] mx-auto px-6 mb-10 flex items-center gap-4">
                <div className="flex-1 border-t border-[#edeae4]" />
                <span
                  className="text-[#bfaf8a] text-[10px] tracking-[0.22em] uppercase shrink-0"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  More Articles
                </span>
                <div className="flex-1 border-t border-[#edeae4]" />
              </div>
            )}

            {/* Grid */}
            {grid.length > 0 && (
              <div className="max-w-[1280px] mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                  {grid.map((post: any) => (
                    <GridCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pb-16">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="border border-[#edeae4] px-6 py-2.5 text-[#2F2F2F]/50 text-[10px] tracking-[0.18em] uppercase hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors disabled:opacity-30"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Previous
                </button>
                <span
                  className="text-[#2F2F2F]/40 text-xs"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Page {page}
                </span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={!hasMore}
                  className="border border-[#edeae4] px-6 py-2.5 text-[#2F2F2F]/50 text-[10px] tracking-[0.18em] uppercase hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors disabled:opacity-30"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Newsletter ───────────────────────────────────────────────────── */}
      <NewsletterSection />

    </PageLayout>
  );
}
