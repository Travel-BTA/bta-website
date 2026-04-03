/**
 * BlogPost — Individual blog article page
 *
 * Design matches Figma:
 * - White header: category tag (gold), date, read time, large centered title,
 *   italic gold subtitle/excerpt, author avatar + name
 * - Full-width hero image below header
 * - Narrow centered body (~700px): paragraphs, gold h2/h3 headings,
 *   tan pull-quote blocks
 * - Share bar + cream CTA box at bottom
 * - Full-width closing banner (reuses site footer banner)
 *
 * Content is fetched live from travelbta.com WordPress REST API via tRPC.
 */

import { useParams, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { PageLayout } from "@/components/PageLayout";

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
    .replace(/&#8221;/g, "\u201d")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

// ─── Blog body renderer ───────────────────────────────────────────────────────
// Renders WordPress HTML with BTA brand styles applied
function BlogBody({ html }: { html: string }) {
  return (
    <div
      className="blog-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// ─── Skeleton loader ─────────────────────────────────────────────────────────
function BlogPostSkeleton() {
  return (
    <PageLayout hideCta>
      <div className="max-w-3xl mx-auto px-6 py-20 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-6" />
        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4" />
        <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-12" />
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-14 h-14 bg-gray-200 rounded" />
          <div>
            <div className="h-4 bg-gray-200 rounded w-28 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-20" />
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh] bg-gray-200" />
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${70 + Math.random() * 30}%` }} />
        ))}
      </div>
    </PageLayout>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";

  const { data: post, isLoading, error } = trpc.blog.getPost.useQuery(
    { slug },
    { enabled: !!slug }
  );

  if (isLoading) return <BlogPostSkeleton />;

  if (error || !post) {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="text-[#bfaf8a] text-sm tracking-[0.15em] uppercase font-smallcaps mb-4">Article Not Found</p>
        <h1 className="text-[#384959] text-4xl font-light mb-6 font-display">
          This article couldn't be loaded
        </h1>
        <Link href="/journal" className="text-[#bfaf8a] underline underline-offset-4 hover:text-[#bfaf8a] transition-colors">
          ← Back to Journal
        </Link>
      </div>
    </PageLayout>
  );
  }

  const primaryCategory = post.categories[0] ?? "Travel";
  const displayTitle = decodeHtml(post.title);
  const displayExcerpt = decodeHtml(post.excerpt);

  return (
    <PageLayout>

      {/* ── Article Header ─────────────────────────────────────────────── */}
      <header className="bg-white pt-16 pb-10 px-6 border-b border-[#edeae4]">
        <div className="max-w-3xl mx-auto text-center">
          {/* Meta row */}
          <div className="flex items-center justify-center gap-5 mb-8 text-sm text-[#2F2F2F]/50">
            <span
              className="text-[#bfaf8a] font-smallcaps tracking-[0.15em] uppercase text-xs"
            >
              {primaryCategory}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
              </svg>
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <polyline points="12 6 12 12 16 14" strokeWidth="1.5" />
              </svg>
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[#2F2F2F] text-4xl md:text-5xl lg:text-[52px] font-light leading-tight mb-8 font-display"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          {/* Excerpt / subtitle */}
          {displayExcerpt && (
            <p
              className="text-[#bfaf8a] text-xl md:text-2xl italic leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {displayExcerpt.length > 160
                ? displayExcerpt.slice(0, 160).replace(/\s\S+$/, "") + "…"
                : displayExcerpt}
            </p>
          )}

          {/* Divider */}
          <div className="w-16 h-px bg-[#edeae4] mx-auto mb-10" />

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            {post.author.avatarUrl ? (
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="w-14 h-14 object-cover"
              />
            ) : (
              <div className="w-14 h-14 bg-[#edeae4] flex items-center justify-center">
                <span className="text-[#bfaf8a] text-xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {post.author.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="text-left">
              <p
                className="text-[#2F2F2F] text-base font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.author.name.split(" ").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")}
              </p>
              <p className="text-[#2F2F2F]/50 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Article body panel (white on cream for visual separation) ────── */}
      <div className="bg-white shadow-sm">

      {/* ── Article Body ───────────────────────────────────────────── */}
      <article className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
        <BlogBody html={post.content} />
      </article>

      {/* ── Share bar ────────────────────────────────────────────── */}
      <div className="max-w-[720px] mx-auto px-6 pb-12">
        <div className="flex items-center justify-between border-t border-[#edeae4] pt-8">
          <span
            className="text-[#bfaf8a] text-sm italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Share this article
          </span>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: displayTitle, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="flex items-center gap-2 border border-[#edeae4] px-4 py-2 text-[#2F2F2F]/60 text-sm hover:border-[#bfaf8a] hover:text-[#bfaf8a] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="18" cy="5" r="3" strokeWidth="1.5" />
              <circle cx="6" cy="12" r="3" strokeWidth="1.5" />
              <circle cx="18" cy="19" r="3" strokeWidth="1.5" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth="1.5" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth="1.5" />
            </svg>
            Share
          </button>
        </div>
      </div>

      {/* ── CTA Box ────────────────────────────────────────────────────── */}
      <div className="max-w-[720px] mx-auto px-6 pb-20">
        <div className="bg-[#faf9f6] px-10 py-12 text-center">
          <p
            className="text-[#bfaf8a] text-2xl italic mb-4"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Ready to Plan Your Journey?
          </p>
          <p
            className="text-[#2F2F2F]/70 text-lg leading-relaxed mb-8 max-w-md mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let me help you create an unforgettable travel experience tailored
            to your interests, style, and budget.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#bfaf8a] text-white font-smallcaps text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#bfaf8a] transition-colors"
          >
            Start Planning Your Journey
          </a>
        </div>
      </div>

      </div>

    </PageLayout>
  );
}
