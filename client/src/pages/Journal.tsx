/**
 * Journal — Blog listing page at /journal
 *
 * Design matches Figma:
 * - Tan/gold header: "Travel Inspiration" title, italic subtitle, description
 * - Filter bar: category pills (ALL, DESTINATION GUIDE, etc.) + search input
 * - Featured post: large left 2×2 mosaic image, right side category/title/date/excerpt/CTA
 * - Grid: 3-column, each card has 2×2 image mosaic, italic gold category, read time, title, date, excerpt, READ MORE →
 * - Pagination
 * - Newsletter signup footer (dark teal)
 * - FinalCta + Footer via PageLayout
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
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d");
}

// Normalise a category string for filter matching
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

// ─── 2×2 Image Mosaic ────────────────────────────────────────────────────────
function ImageMosaic({ imageUrl, title, large }: { imageUrl: string; title: string; large?: boolean }) {
  const h = large ? "h-[480px]" : "h-[260px] sm:h-[300px]";
  if (!imageUrl) {
    return <div className={`w-full ${h} bg-[#EBE9E3]`} />;
  }
  return (
    <div className={`w-full ${h} overflow-hidden`}>
      <img
        src={imageUrl}
        alt={decodeHtml(title)}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

// ─── Skeleton ────────────────────────────────────────────────────────────────
function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[260px] bg-gray-200 mb-4" />
      <div className="h-3 bg-gray-200 rounded w-24 mb-3" />
      <div className="h-5 bg-gray-200 rounded w-4/5 mb-2" />
      <div className="h-5 bg-gray-200 rounded w-3/5 mb-4" />
      <div className="h-3 bg-gray-200 rounded w-full mb-2" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  );
}

// ─── Post types ──────────────────────────────────────────────────────────────
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

// ─── Featured Post Card ──────────────────────────────────────────────────────
function FeaturedCard({ post }: { post: Post }) {
  const primaryCategory = post.categories[0] ?? "Travel";
  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-0 bg-white">
      {/* Left: 2×2 mosaic */}
      <Link href={`/journal/${post.slug}`} className="block overflow-hidden">
        <ImageMosaic imageUrl={post.imageUrl} title={post.title} large />
      </Link>
      {/* Right: content */}
      <div className="flex flex-col justify-center px-8 lg:px-12 py-10 bg-white">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[#bfa88a] text-xs tracking-[0.16em] uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            {primaryCategory}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#2F2F2F]/40">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <polyline points="12 6 12 12 16 14" strokeWidth="1.5" />
            </svg>
            {post.readTime} min read
          </span>
        </div>
        <Link href={`/journal/${post.slug}`} className="group">
          <h2
            className="text-[#2F2F2F] text-2xl lg:text-3xl font-light leading-snug mb-4 group-hover:text-[#bfa88a] transition-colors font-display"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </Link>
        <div className="flex items-center gap-2 text-xs text-[#2F2F2F]/40 mb-4">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5" />
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5" />
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
          </svg>
          {formatDate(post.date)}
        </div>
        <p
          className="text-[#2F2F2F]/60 text-base leading-relaxed mb-6 line-clamp-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {decodeHtml(post.excerpt)}
        </p>
        <Link
          href={`/journal/${post.slug}`}
          className="text-[#bfa88a] text-xs tracking-[0.16em] uppercase flex items-center gap-2 hover:gap-3 transition-all"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          Read Article <span>→</span>
        </Link>
      </div>
    </div>
  );
}

// ─── Grid Post Card ───────────────────────────────────────────────────────────
function GridCard({ post }: { post: Post }) {
  const primaryCategory = post.categories[0] ?? "Travel";
  return (
    <div className="group">
      {/* 2×2 mosaic */}
      <Link href={`/journal/${post.slug}`} className="block mb-4 overflow-hidden">
        <ImageMosaic imageUrl={post.imageUrl} title={post.title} />
      </Link>
      {/* Meta */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[#bfa88a] text-xs tracking-[0.14em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {primaryCategory}
        </span>
        <span className="flex items-center gap-1 text-xs text-[#2F2F2F]/40">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <polyline points="12 6 12 12 16 14" strokeWidth="1.5" />
          </svg>
          {post.readTime} min read
        </span>
      </div>
      {/* Title */}
      <Link href={`/journal/${post.slug}`}>
        <h3
          className="text-[#2F2F2F] text-lg font-light leading-snug mb-2 group-hover:text-[#bfa88a] transition-colors line-clamp-2 font-display"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </Link>
      {/* Date */}
      <div className="flex items-center gap-1.5 text-xs text-[#2F2F2F]/40 mb-3">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5" />
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5" />
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
        </svg>
        {formatDate(post.date)}
      </div>
      {/* Excerpt */}
      <p
        className="text-[#2F2F2F]/55 text-sm leading-relaxed mb-4 line-clamp-3"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {decodeHtml(post.excerpt)}
      </p>
      {/* Read more */}
      <Link
        href={`/journal/${post.slug}`}
        className="text-[#bfa88a] text-xs tracking-[0.14em] uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        READ MORE <span>→</span>
      </Link>
    </div>
  );
}

// ─── Newsletter Section ───────────────────────────────────────────────────────
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#384959] py-16 px-6 text-center">
          <h2
        className="text-white text-3xl md:text-4xl font-light mb-4 font-display"
      >
        Stay Inspired
      </h2>
      <p
        className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Subscribe to receive travel inspiration, destination guides, and exclusive offers delivered to your inbox monthly.
      </p>
      {submitted ? (
        <p className="text-[#bfa88a] text-base italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Thank you for subscribing!
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
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          />
          <button
            type="submit"
            className="bg-[#bfa88a] text-white font-smallcaps text-xs tracking-[0.18em] uppercase px-7 py-3 hover:bg-[#a8927a] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="text-white/30 text-xs mt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        No spam, unsubscribe anytime. Privacy policy applies.
      </p>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Journal() {
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const PER_PAGE = 13; // 1 featured + 12 grid per page

  const { data: posts, isLoading } = trpc.blog.getPosts.useQuery(
    { page, perPage: PER_PAGE },
    {}
  );

  // Client-side filter + search on current page
  const filtered = useMemo(() => {
    if (!posts) return [];
    let result = posts;
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
  const totalPages = hasMore ? page + 1 : page; // approximate

  // Reset page when filter changes
  function handleFilter(f: string) {
    setActiveFilter(f);
    setPage(1);
  }

  return (
    <PageLayout hideCta={false}>
      {/* ── Tan Header ──────────────────────────────────────────────────── */}
      <div className="bg-[#bfa88a]/70 pt-28 pb-16 px-6 text-center">
        <h1
          className="text-white text-5xl md:text-6xl font-light mb-4 font-display"
        >
          Travel Inspiration
        </h1>
        <p
          className="text-white/90 text-xl md:text-2xl italic mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Insights, guides, and inspiration for your next journey
        </p>
        <p
          className="text-white/75 text-base max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Explore destination guides, travel tips, and cultural insights from years of luxury travel planning and personal exploration around the world.
        </p>
      </div>

      {/* ── Filter Bar ──────────────────────────────────────────────────── */}
      <div className="bg-[#FAF0F6] border-b border-[#EBE9E3] px-6 py-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-1">
            {FILTER_LABELS.map(label => (
              <button
                key={label}
                onClick={() => handleFilter(label)}
                className={`px-4 py-2 text-xs tracking-[0.14em] uppercase transition-colors ${
                  activeFilter === label
                    ? "bg-[#bfa88a] text-white"
                    : "text-[#2F2F2F]/50 hover:text-[#bfa88a]"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {label}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="flex items-center border border-[#EBE9E3] bg-white px-4 py-2 gap-2 min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Search articles, destinations, topics..."
              className="flex-1 text-sm text-[#2F2F2F] outline-none bg-transparent placeholder:text-[#2F2F2F]/35"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
            <Search className="w-4 h-4 text-[#bfa88a]" />
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="bg-white">
        {isLoading ? (
          <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => <CardSkeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="max-w-[1280px] mx-auto px-6 py-24 text-center">
            <p className="text-[#2F2F2F]/40 text-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              No articles found. Try a different search or category.
            </p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-8">
                <FeaturedCard post={featured} />
              </div>
            )}

            {/* Divider */}
            {grid.length > 0 && (
              <div className="max-w-[1280px] mx-auto px-6">
                <div className="border-t border-[#EBE9E3] mb-12" />
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
              <div className="flex items-center justify-center gap-2 pb-16">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="border border-[#EBE9E3] px-6 py-2.5 text-[#2F2F2F]/50 text-xs tracking-[0.14em] uppercase hover:border-[#bfa88a] hover:text-[#bfa88a] transition-colors disabled:opacity-30"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-10 h-10 text-xs tracking-[0.14em] transition-colors ${
                      page === n
                        ? "bg-[#bfa88a] text-white border border-[#bfa88a]"
                        : "border border-[#EBE9E3] text-[#2F2F2F]/50 hover:border-[#bfa88a] hover:text-[#bfa88a]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="border border-[#EBE9E3] px-6 py-2.5 text-[#2F2F2F]/50 text-xs tracking-[0.14em] uppercase hover:border-[#bfa88a] hover:text-[#bfa88a] transition-colors disabled:opacity-30"
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
