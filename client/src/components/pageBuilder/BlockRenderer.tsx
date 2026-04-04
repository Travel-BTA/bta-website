/**
 * BlockRenderer.tsx — Renders any PageBlock to HTML.
 *
 * WHY: Shared between the editor canvas (preview) and the live page renderer
 * (/pages/:slug). Keeping rendering logic in one place ensures what you see
 * in the editor is exactly what appears on the published page.
 */

import { getFontFamily, getPaddingY } from "@/lib/brandTokens";
import type {
  PageBlock,
  HeroBlock,
  TextBlock,
  ImageBlock,
  TwoColumnBlock,
  QuoteBlock,
  CtaBannerBlock,
  CardGridBlock,
  StatsRowBlock,
} from "../../../../drizzle/schema";

// ── Padding helper ────────────────────────────────────────────────────────────
function padStyle(size: string) {
  const py = getPaddingY(size as any);
  return { paddingTop: py, paddingBottom: py };
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroRenderer({ block }: { block: HeroBlock }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "60vh", ...padStyle(block.paddingY) }}
    >
      {block.imageUrl && (
        <img
          src={block.imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: block.overlayColor !== "transparent" ? block.overlayColor : undefined,
          opacity: block.overlayColor !== "transparent" ? 0.55 : 0,
        }}
      />
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16"
        style={{ textAlign: block.textAlign, minHeight: "60vh" }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest mb-6"
          style={{
            fontFamily: getFontFamily(block.headlineFont),
            color: block.headlineColor,
          }}
        >
          {block.headline}
        </h1>
        {block.subtext && (
          <p
            className="text-lg md:text-xl max-w-2xl mb-8 font-light"
            style={{
              fontFamily: getFontFamily("playfair-display"),
              color: block.subtextColor ?? "#FFFFFF",
            }}
          >
            {block.subtext}
          </p>
        )}
        {block.ctaLabel && block.ctaHref && (
          <a
            href={block.ctaHref}
            className="inline-block border border-current px-8 py-3 text-sm uppercase tracking-widest transition-all hover:bg-white/10"
            style={{ color: block.subtextColor ?? "#FFFFFF" }}
          >
            {block.ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}

// ── Text Section ──────────────────────────────────────────────────────────────
function TextRenderer({ block }: { block: TextBlock }) {
  return (
    <section
      className="w-full px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: block.bgColor, ...padStyle(block.paddingY) }}
    >
      <div
        className="max-w-4xl mx-auto"
        style={{ textAlign: block.textAlign }}
      >
        {block.eyebrow && (
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{
              fontFamily: getFontFamily("playfair-display"),
              color: "#9C886A",
              fontStyle: "italic",
            }}
          >
            {block.eyebrow}
          </p>
        )}
        {block.heading && (
          <h2
            className="text-3xl md:text-4xl font-light uppercase tracking-wide mb-6"
            style={{
              fontFamily: getFontFamily(block.headingFont),
              color: block.headingColor,
            }}
          >
            {block.heading}
          </h2>
        )}
        {block.body && (
          <p
            className="text-base md:text-lg leading-relaxed font-light"
            style={{
              fontFamily: getFontFamily("playfair-display"),
              color: block.bodyColor,
            }}
          >
            {block.body}
          </p>
        )}
      </div>
    </section>
  );
}

// ── Image ─────────────────────────────────────────────────────────────────────
function ImageRenderer({ block }: { block: ImageBlock }) {
  return (
    <section
      className="w-full"
      style={padStyle(block.paddingY)}
    >
      {block.imageUrl && (
        <div className={block.fullWidth ? "w-full" : "max-w-4xl mx-auto px-8"}>
          <img
            src={block.imageUrl}
            alt={block.caption ?? ""}
            className="w-full"
            style={{ display: "block" }}
          />
          {block.caption && (
            <p
              className="text-sm text-center mt-3 font-light"
              style={{
                fontFamily: getFontFamily("playfair-display"),
                color: "#9C886A",
                fontStyle: "italic",
              }}
            >
              {block.caption}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

// ── Two Column ────────────────────────────────────────────────────────────────
function TwoColumnRenderer({ block }: { block: TwoColumnBlock }) {
  const renderSide = (content: TwoColumnBlock["leftContent"]) => {
    if (content.imageUrl) {
      return (
        <img
          src={content.imageUrl}
          alt=""
          className="w-full h-full object-cover"
          style={{ minHeight: "300px" }}
        />
      );
    }
    return (
      <div className="flex flex-col justify-center h-full px-8 py-8">
        {content.heading && (
          <h2
            className="text-2xl md:text-3xl font-light uppercase tracking-wide mb-4"
            style={{
              fontFamily: getFontFamily((content.headingFont as any) ?? "instrument-serif"),
              color: content.headingColor ?? "#384959",
            }}
          >
            {content.heading}
          </h2>
        )}
        {content.body && (
          <p
            className="text-base leading-relaxed font-light"
            style={{
              fontFamily: getFontFamily("playfair-display"),
              color: content.bodyColor ?? "#2F2F2F",
            }}
          >
            {content.body}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      className="w-full"
      style={{ backgroundColor: block.bgColor, ...padStyle(block.paddingY) }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto">
        <div>{renderSide(block.leftContent)}</div>
        <div>{renderSide(block.rightContent)}</div>
      </div>
    </section>
  );
}

// ── Quote ─────────────────────────────────────────────────────────────────────
function QuoteRenderer({ block }: { block: QuoteBlock }) {
  return (
    <section
      className="w-full px-8 md:px-16"
      style={{ backgroundColor: block.bgColor, ...padStyle(block.paddingY) }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="text-5xl mb-6 leading-none"
          style={{ color: block.accentColor, fontFamily: getFontFamily("allura") }}
        >
          "
        </div>
        <blockquote
          className="text-xl md:text-2xl font-light leading-relaxed mb-6"
          style={{
            fontFamily: getFontFamily("playfair-display"),
            color: block.textColor,
            fontStyle: "italic",
          }}
        >
          {block.quote}
        </blockquote>
        {block.attribution && (
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: block.accentColor }}
          >
            {block.attribution}
          </p>
        )}
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CtaBannerRenderer({ block }: { block: CtaBannerBlock }) {
  return (
    <section
      className="w-full px-8 md:px-16 text-center"
      style={{ backgroundColor: block.bgColor, ...padStyle(block.paddingY) }}
    >
      <h2
        className="text-3xl md:text-4xl font-light uppercase tracking-wide mb-4"
        style={{
          fontFamily: getFontFamily("instrument-serif"),
          color: block.headingColor,
        }}
      >
        {block.heading}
      </h2>
      {block.subtext && (
        <p
          className="text-lg mb-8 font-light max-w-2xl mx-auto"
          style={{
            fontFamily: getFontFamily("playfair-display"),
            color: block.subtextColor ?? block.headingColor,
          }}
        >
          {block.subtext}
        </p>
      )}
      <a
        href={block.ctaHref}
        className="inline-block px-10 py-3 text-sm uppercase tracking-widest transition-all"
        style={
          block.ctaStyle === "filled"
            ? { backgroundColor: block.headingColor, color: block.bgColor }
            : {
                border: `1px solid ${block.headingColor}`,
                color: block.headingColor,
              }
        }
      >
        {block.ctaLabel}
      </a>
    </section>
  );
}

// ── Card Grid ─────────────────────────────────────────────────────────────────
function CardGridRenderer({ block }: { block: CardGridBlock }) {
  return (
    <section
      className="w-full px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: block.bgColor, ...padStyle(block.paddingY) }}
    >
      <div
        className={`grid gap-8 max-w-[1400px] mx-auto ${
          block.columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {block.cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            {card.imageUrl && (
              <img
                src={card.imageUrl}
                alt={card.heading}
                className="w-full object-cover mb-4"
                style={{ height: "220px" }}
              />
            )}
            <h3
              className="text-xl font-light uppercase tracking-wide mb-2"
              style={{
                fontFamily: getFontFamily(block.headingFont),
                color: "#384959",
              }}
            >
              {card.heading}
            </h3>
            {card.body && (
              <p
                className="text-sm leading-relaxed font-light flex-1"
                style={{
                  fontFamily: getFontFamily("playfair-display"),
                  color: "#2F2F2F",
                }}
              >
                {card.body}
              </p>
            )}
            {card.ctaLabel && card.ctaHref && (
              <a
                href={card.ctaHref}
                className="mt-4 text-sm uppercase tracking-widest border-b border-current pb-0.5 self-start transition-opacity hover:opacity-70"
                style={{ color: "#9C886A" }}
              >
                {card.ctaLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Stats Row ─────────────────────────────────────────────────────────────────
function StatsRowRenderer({ block }: { block: StatsRowBlock }) {
  return (
    <section
      className="w-full px-8 md:px-16"
      style={{ backgroundColor: block.bgColor, ...padStyle(block.paddingY) }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1200px] mx-auto text-center">
        {block.stats.map((stat, i) => (
          <div key={i}>
            <div
              className="text-4xl md:text-5xl font-light mb-2"
              style={{
                fontFamily: getFontFamily("instrument-serif"),
                color: block.valueColor,
              }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs uppercase tracking-widest font-light"
              style={{
                fontFamily: getFontFamily("playfair-display"),
                color: block.labelColor,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Main dispatcher ───────────────────────────────────────────────────────────
export default function BlockRenderer({ block }: { block: PageBlock }) {
  switch (block.type) {
    case "hero":
      return <HeroRenderer block={block} />;
    case "text":
      return <TextRenderer block={block} />;
    case "image":
      return <ImageRenderer block={block} />;
    case "two-column":
      return <TwoColumnRenderer block={block} />;
    case "quote":
      return <QuoteRenderer block={block} />;
    case "cta-banner":
      return <CtaBannerRenderer block={block} />;
    case "card-grid":
      return <CardGridRenderer block={block} />;
    case "stats-row":
      return <StatsRowRenderer block={block} />;
    default:
      return null;
  }
}
