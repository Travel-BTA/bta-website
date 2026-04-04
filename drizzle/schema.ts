import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ── Page Builder ──────────────────────────────────────────────────────────────
// WHY: The BTA team needs to create and edit pages without touching code.
// Pages are stored as a JSON array of blocks. Each block has a type and a
// props object that is validated against the brand token system on the client.
// Published pages are rendered at /pages/:slug by the live page renderer.

export const pages = mysqlTable("pages", {
  id: int("id").autoincrement().primaryKey(),
  /** URL slug — e.g. "maldives" renders at /pages/maldives */
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 300 }).notNull(),
  /** draft | published */
  status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
  /** JSON array of PageBlock objects — the full page content */
  blocks: json("blocks").notNull().$type<PageBlock[]>().default([]),
  /** ID of the user who created this page */
  createdBy: int("createdBy").notNull(),
  /** ID of the user who last updated this page */
  updatedBy: int("updatedBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Page = typeof pages.$inferSelect;
export type InsertPage = typeof pages.$inferInsert;

// ── Block type definitions ────────────────────────────────────────────────────
// WHY: Typed block shapes ensure the renderer and editor share the same contract.
// All style values are restricted to BTA brand tokens — no free-form CSS allowed.

export type BrandColor =
  | "#384959"   // Aegean Blue — primary dark
  | "#9C886A"   // Gold — accent
  | "#bfaf8a"   // Champagne — light gold
  | "#2F2F2F"   // Charcoal — body text
  | "#FFFFFF"   // White
  | "#faf9f6"   // Ivory — section backgrounds
  | "#041E42"   // Deep Navy — Brittany font pop
  | "transparent";

export type BrandFont =
  | "instrument-serif"   // H1/H2 uppercase — Instrument Serif
  | "playfair-display"   // Subheadings, body — Playfair Display
  | "allura"             // Decorative script pop — Allura
  | "system";            // Body copy — system sans-serif stack

export type PaddingSize = "none" | "sm" | "md" | "lg" | "xl";
export type TextAlign = "left" | "center" | "right";

export interface HeroBlock {
  type: "hero";
  id: string;
  imageUrl: string;
  headline: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlayColor?: BrandColor;
  headlineFont: BrandFont;
  headlineColor: BrandColor;
  subtextColor?: BrandColor;
  textAlign: TextAlign;
  paddingY: PaddingSize;
}

export interface TextBlock {
  type: "text";
  id: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  headingFont: BrandFont;
  headingColor: BrandColor;
  bodyColor: BrandColor;
  bgColor: BrandColor;
  textAlign: TextAlign;
  paddingY: PaddingSize;
}

export interface ImageBlock {
  type: "image";
  id: string;
  imageUrl: string;
  caption?: string;
  fullWidth: boolean;
  paddingY: PaddingSize;
}

export interface TwoColumnBlock {
  type: "two-column";
  id: string;
  /** "text-image" | "image-text" | "text-text" */
  layout: "text-image" | "image-text" | "text-text";
  leftContent: { heading?: string; body?: string; imageUrl?: string; headingFont?: BrandFont; headingColor?: BrandColor; bodyColor?: BrandColor };
  rightContent: { heading?: string; body?: string; imageUrl?: string; headingFont?: BrandFont; headingColor?: BrandColor; bodyColor?: BrandColor };
  bgColor: BrandColor;
  paddingY: PaddingSize;
}

export interface QuoteBlock {
  type: "quote";
  id: string;
  quote: string;
  attribution?: string;
  accentColor: BrandColor;
  textColor: BrandColor;
  bgColor: BrandColor;
  paddingY: PaddingSize;
}

export interface CtaBannerBlock {
  type: "cta-banner";
  id: string;
  heading: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref: string;
  bgColor: BrandColor;
  headingColor: BrandColor;
  subtextColor?: BrandColor;
  ctaStyle: "filled" | "outline";
  paddingY: PaddingSize;
}

export interface CardGridBlock {
  type: "card-grid";
  id: string;
  columns: 2 | 3;
  cards: Array<{
    imageUrl?: string;
    heading: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  }>;
  bgColor: BrandColor;
  headingFont: BrandFont;
  paddingY: PaddingSize;
}

export interface StatsRowBlock {
  type: "stats-row";
  id: string;
  stats: Array<{ value: string; label: string }>;
  bgColor: BrandColor;
  valueColor: BrandColor;
  labelColor: BrandColor;
  paddingY: PaddingSize;
}

export type PageBlock =
  | HeroBlock
  | TextBlock
  | ImageBlock
  | TwoColumnBlock
  | QuoteBlock
  | CtaBannerBlock
  | CardGridBlock
  | StatsRowBlock;
