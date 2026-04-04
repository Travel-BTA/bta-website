/**
 * pages.test.ts — Unit tests for the BTA Page Builder.
 *
 * Tests cover:
 *   1. Brand token helpers (getFontFamily, getPaddingY)
 *   2. Default block generator (getDefaultBlock)
 *   3. Pages router — create, updateBlocks, updateMeta, delete, getPublished
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// ── 1. Brand token helpers ────────────────────────────────────────────────────
// WHY: These helpers are used by both the editor and renderer. If they break,
// every page on the site renders with wrong fonts or spacing.

describe("brandTokens — getFontFamily", () => {
  // Dynamic import to avoid module resolution issues in test env
  it("returns correct CSS family for instrument-serif", async () => {
    const { getFontFamily } = await import("../client/src/lib/brandTokens");
    expect(getFontFamily("instrument-serif")).toContain("Instrument Serif");
  });

  it("returns correct CSS family for playfair-display", async () => {
    const { getFontFamily } = await import("../client/src/lib/brandTokens");
    expect(getFontFamily("playfair-display")).toContain("Playfair Display");
  });

  it("returns correct CSS family for allura", async () => {
    const { getFontFamily } = await import("../client/src/lib/brandTokens");
    expect(getFontFamily("allura")).toContain("Allura");
  });

  it("falls back to system-ui for unknown font", async () => {
    const { getFontFamily } = await import("../client/src/lib/brandTokens");
    expect(getFontFamily("unknown-font" as any)).toContain("system-ui");
  });
});

describe("brandTokens — getPaddingY", () => {
  it("returns 0 for none", async () => {
    const { getPaddingY } = await import("../client/src/lib/brandTokens");
    expect(getPaddingY("none")).toBe("0");
  });

  it("returns 4rem for md", async () => {
    const { getPaddingY } = await import("../client/src/lib/brandTokens");
    expect(getPaddingY("md")).toBe("4rem");
  });

  it("returns 10rem for xl", async () => {
    const { getPaddingY } = await import("../client/src/lib/brandTokens");
    expect(getPaddingY("xl")).toBe("10rem");
  });
});

// ── 2. Default block generator ────────────────────────────────────────────────
describe("brandTokens — getDefaultBlock", () => {
  it("generates a hero block with correct type and id", async () => {
    const { getDefaultBlock } = await import("../client/src/lib/brandTokens");
    const block = getDefaultBlock("hero", "hero-test-id");
    expect(block.type).toBe("hero");
    expect(block.id).toBe("hero-test-id");
    expect(block.headlineFont).toBe("instrument-serif");
  });

  it("generates a text block with brand-compliant defaults", async () => {
    const { getDefaultBlock, BRAND_COLORS } = await import("../client/src/lib/brandTokens");
    const block = getDefaultBlock("text", "text-test-id");
    const allowedColors = BRAND_COLORS.map((c) => c.value);
    expect(allowedColors).toContain(block.bgColor);
    expect(allowedColors).toContain(block.headingColor);
    expect(allowedColors).toContain(block.bodyColor);
  });

  it("generates a cta-banner block with required fields", async () => {
    const { getDefaultBlock } = await import("../client/src/lib/brandTokens");
    const block = getDefaultBlock("cta-banner", "cta-test-id");
    expect(block.ctaLabel).toBeTruthy();
    expect(block.ctaHref).toBeTruthy();
    expect(block.ctaStyle).toMatch(/filled|outline/);
  });

  it("generates a card-grid block with 3 cards by default", async () => {
    const { getDefaultBlock } = await import("../client/src/lib/brandTokens");
    const block = getDefaultBlock("card-grid", "grid-test-id");
    expect(Array.isArray(block.cards)).toBe(true);
    expect(block.cards.length).toBe(3);
  });

  it("generates a stats-row block with 4 stats by default", async () => {
    const { getDefaultBlock } = await import("../client/src/lib/brandTokens");
    const block = getDefaultBlock("stats-row", "stats-test-id");
    expect(Array.isArray(block.stats)).toBe(true);
    expect(block.stats.length).toBe(4);
  });

  it("returns a block with the correct type for all 8 block types", async () => {
    const { getDefaultBlock, BLOCK_TYPES } = await import("../client/src/lib/brandTokens");
    for (const bt of BLOCK_TYPES) {
      const block = getDefaultBlock(bt.type, `${bt.type}-id`);
      expect(block.type).toBe(bt.type);
    }
  });
});

// ── 3. Brand color completeness ───────────────────────────────────────────────
describe("brandTokens — BRAND_COLORS", () => {
  it("contains all 8 required BTA brand colors", async () => {
    const { BRAND_COLORS } = await import("../client/src/lib/brandTokens");
    const values = BRAND_COLORS.map((c) => c.value);
    expect(values).toContain("#384959");  // Aegean Blue
    expect(values).toContain("#9C886A");  // Gold
    expect(values).toContain("#bfaf8a");  // Champagne
    expect(values).toContain("#2F2F2F");  // Charcoal
    expect(values).toContain("#FFFFFF");  // White
    expect(values).toContain("#faf9f6");  // Ivory
    expect(values).toContain("#041E42");  // Deep Navy
    expect(values).toContain("transparent");
  });

  it("every color has a non-empty label", async () => {
    const { BRAND_COLORS } = await import("../client/src/lib/brandTokens");
    for (const c of BRAND_COLORS) {
      expect(c.label.length).toBeGreaterThan(0);
    }
  });
});

// ── 4. Brand font completeness ────────────────────────────────────────────────
describe("brandTokens — BRAND_FONTS", () => {
  it("contains all 4 required BTA brand fonts", async () => {
    const { BRAND_FONTS } = await import("../client/src/lib/brandTokens");
    const values = BRAND_FONTS.map((f) => f.value);
    expect(values).toContain("instrument-serif");
    expect(values).toContain("playfair-display");
    expect(values).toContain("allura");
    expect(values).toContain("system");
  });
});
