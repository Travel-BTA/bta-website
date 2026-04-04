/**
 * BlogPost. Individual blog article page
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
    .replace(/&#8212;/g, ".")
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
// WHY: WordPress embeds inline styles directly on elements (button colors,
// image dimensions, font sizes). We post-process the HTML string here to
// override those inline styles so our design system takes precedence without
// needing to edit WordPress content.
function processWordPressHtml(html: string): string {
  return html
    // ── BOOK WITH VIP AMENITIES button ──────────────────────────────────────
    // Override WP inline style: change bg to #2f2f2f, reduce padding for a
    // smaller, more refined button that fits the editorial context
    .replace(
      /(<a)([^>]*href="https:\/\/luxurytravelclubs\.com[^"]*")([^>]*)style="[^"]*"([^>]*>)/gi,
      "$1$2$3 style=\"display:inline-block;padding:10px 28px;background-color:#2f2f2f;color:#ffffff;text-align:center;text-decoration:none;font-family:Georgia,serif;font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;border:none;\"$4"
    )
    // ── Images ──────────────────────────────────────────────────────────────
    // Remove inline width/height/style attrs that cause images to overflow
    // the article column or render at wrong aspect ratios. CSS handles sizing.
    .replace(
      /<img([^>]*?)>/gi,
      (_match, attrs) => {
        const cleaned = attrs
          .replace(/\s+width="[^"]*"/gi, '')
          .replace(/\s+height="[^"]*"/gi, '')
          .replace(/\s+style="[^"]*"/gi, '')
          .replace(/\s+class="[^"]*"/gi, '');
        return `<img${cleaned} loading="lazy" style="width:100%;height:auto;display:block;margin:2rem auto;">`;
      }
    )
    // ── *Benefits apply disclaimer ───────────────────────────────────────────
    // The WP source wraps this in a <span style="font-size:16px"> which makes
    // it look the same weight as the amenity list items. Override to make it
    // small, italic, and muted so it reads as a footnote, not a feature.
    .replace(
      /<span[^>]*font-size:\s*16px[^>]*>(\s*\*Benefits apply[\s\S]*?)<\/span>/gi,
      '<span style="display:block;font-size:0.72rem;font-style:italic;color:#9C886A;opacity:0.75;text-align:center;margin-top:0.5rem;letter-spacing:0.02em;text-transform:none;">$1</span>'
    )
    // ── Strip travel insurance boilerplate ──────────────────────────────────
    // WHY: Every WP post ends with a boilerplate travel insurance paragraph
    // and a follow-up sentence about contacting a BTA advisor. These are
    // WordPress editorial footers that don't belong in the new editorial
    // design — the site's own CTA section handles this instead.
    //
    // The WP source wraps the text in <strong> inside <p>, so we match any
    // <p> whose *text content* contains these phrases, regardless of inner tags.
    // Strategy: replace the entire <p>…</p> block using a lookahead for the
    // identifying phrase anywhere inside it.
    .replace(
      /<p[^>]*>(?:(?!<\/p>)[\s\S])*?(?:We highly recommend the purchase of travel insurance|If you would like assistance purchasing a travel insurance|please get in touch with a[^<]*BTA advisor|Arch RoamRight)(?:(?!<\/p>)[\s\S])*?<\/p>/gi,
      ''
    );
}

function BlogBody({ html }: { html: string }) {
  return (
    <div
      className="blog-body"
      dangerouslySetInnerHTML={{ __html: processWordPressHtml(html) }}
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
        <p className="text-[#bfaf8a] text-sm tracking-[0.15em] uppercase bta-eyebrow mb-4">Article Not Found</p>
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
              className="text-[#bfaf8a] bta-eyebrow tracking-[0.15em] uppercase text-xs"
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
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
 <span className="text-[#bfaf8a] text-xl " style={{ fontFamily: "'Playfair Display', serif" }}>
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
              <p className="text-[#2F2F2F]/50 text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Article body panel (white on cream for visual separation) ──── */}
      {/* overflow-hidden: prevents WP images with absolute/fixed widths from
          bleeding outside the white column into the cream sidebar area */}
      <div className="bg-white shadow-sm overflow-hidden">

      {/* ── Article Body ──────────────────────────────────────────────────── */}
      <article className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
        <BlogBody html={post.content} />
      </article>

      {/* ── Share bar ────────────────────────────────────────────── */}
      <div className="max-w-[720px] mx-auto px-6 pb-12">
        <div className="flex items-center justify-between border-t border-[#edeae4] pt-8">
          <span
            className="text-[#bfaf8a] text-sm italic"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let us help you create an unforgettable travel experience tailored
              to your interests, style, and budget.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#bfaf8a] transition-colors"
          >
            Start Planning Your Journey
          </a>
        </div>
      </div>

      </div>

    </PageLayout>
  );
}
