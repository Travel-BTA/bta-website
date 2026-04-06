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

// ── Advisor / Team Member ────────────────────────────────────────────────────
// WHY: Each advisor has a rich profile page (based on the Julie Rose template).
// All content is stored as JSON so the admin form can edit every section without
// a schema migration every time copy changes.

export const advisors = mysqlTable("advisors", {
  id: int("id").autoincrement().primaryKey(),
  /** URL slug — e.g. "julie-rose" renders at /advisors/julie-rose */
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  /** Display name used in nav, listings, and the hero section */
  name: varchar("name", { length: 200 }).notNull(),
  /** Short title shown under the name, e.g. "Luxury Travel Advisor & Virtuoso Member" */
  title: varchar("title", { length: 300 }).notNull().default(""),
  /** One-line tagline shown in the hero */
  tagline: text("tagline"),
  /** Hero background image CDN URL */
  heroImage: text("heroImage"),
  /** Credential badges array, e.g. ["Virtuoso Member", "15+ Years Experience"] */
  badges: json("badges").$type<string[]>().default([]),
  /** Primary CTA in hero, e.g. { label: "Start Planning", href: "#contact" } */
  ctaPrimary: json("ctaPrimary").$type<{ label: string; href: string }>(),
  /** Secondary CTA in hero */
  ctaSecondary: json("ctaSecondary").$type<{ label: string; href: string }>(),
  /** Meet section: main portrait photo CDN URL */
  photoMain: text("photoMain"),
  /** Meet section: accent/overlap portrait photo CDN URL */
  photoAccent: text("photoAccent"),
  /** Meet section eyebrow script text, e.g. "Meet Julie" */
  meetEyebrow: varchar("meetEyebrow", { length: 100 }).default(""),
  /** Meet section heading (use \n for line breaks) */
  meetHeading: text("meetHeading"),
  /** Bio paragraphs array */
  bio: json("bio").$type<string[]>().default([]),
  /** Blockquote shown in the meet section */
  meetQuote: text("meetQuote"),
  /** Stats bar: array of { value, label } */
  stats: json("stats").$type<Array<{ value: string; label: string }>>().default([]),
  /** Curated hotels: array of { badge, location, name, quote, perks[], image } */
  hotels: json("hotels").$type<Array<{
    badge: string; location: string; name: string;
    quote: string; perks: string[]; image: string;
  }>>().default([]),
  /** Specialties: array of { label, description, image } */
  specialties: json("specialties").$type<Array<{ label: string; description: string; image: string }>>().default([]),
  /** Philosophy pillars: array of { icon, title, body } */
  pillars: json("pillars").$type<Array<{ icon: string; title: string; body: string }>>().default([]),
  /** Featured experiences: array of { duration, region, title, description, image, href } */
  experiences: json("experiences").$type<Array<{
    duration: string; region: string; title: string;
    description: string; image: string; href: string;
  }>>().default([]),
  /** Why work with section: array of { title, body } */
  whyWorkBenefits: json("whyWorkBenefits").$type<Array<{ title: string; body: string }>>().default([]),
  /** Why work with section: side image CDN URL */
  whyWorkImage: text("whyWorkImage"),
  /** Testimonials: array of { quote, author, trip, rating } */
  testimonials: json("testimonials").$type<Array<{ quote: string; author: string; trip: string; rating: number }>>().default([]),
  /** Closing banner image CDN URL */
  closingBannerImage: text("closingBannerImage"),
  /** Closing banner quote text */
  closingBannerQuote: text("closingBannerQuote"),
  /** Email address shown on the contact form */
  email: varchar("email", { length: 320 }),
  /** Whether this advisor is visible on the public Our People page */
  published: boolean("published").default(false).notNull(),
  /** Sort order on the Our People listing */
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Advisor = typeof advisors.$inferSelect;
export type InsertAdvisor = typeof advisors.$inferInsert;

// ── Admin Credentials ──────────────────────────────────────────────────────────────────────────────
// WHY: Standalone email+password login for the admin panel. Completely
// independent of Manus OAuth so it works on any deployment (Vercel, etc.).
// Passwords are stored as bcrypt hashes — never plaintext.

export const adminCredentials = mysqlTable("adminCredentials", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  /** bcrypt hash of the password */
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  /** Display name shown in the admin header */
  name: varchar("name", { length: 200 }).notNull().default(""),
  /** Whether this admin account is active */
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AdminCredential = typeof adminCredentials.$inferSelect;
export type InsertAdminCredential = typeof adminCredentials.$inferInsert;

// ── Site Content (CMS key-value store) ──────────────────────────────────────
// WHY: Allows the admin to edit copy and swap photos on any public page
// without touching code. Each row is a named content slot (e.g.
// "homepage.hero.headline") with a text value and an optional image URL.
// Public pages read from this table first and fall back to hardcoded defaults.

export const siteContent = mysqlTable("siteContent", {
  id: int("id").autoincrement().primaryKey(),
  /** Dot-notation key, e.g. "homepage.hero.headline" or "familytravel.southafrica.header_image" */
  key: varchar("key", { length: 300 }).notNull().unique(),
  /** Human-readable label shown in the admin editor */
  label: varchar("label", { length: 300 }).notNull(),
  /** The page this slot belongs to, e.g. "homepage", "familytravel" */
  page: varchar("page", { length: 100 }).notNull(),
  /** Section within the page, e.g. "hero", "southafrica" */
  section: varchar("section", { length: 100 }).notNull(),
  /** Field type — determines the editor widget shown in admin */
  fieldType: mysqlEnum("fieldType", ["text", "textarea", "image"]).notNull().default("text"),
  /** The current value (text copy or CDN image URL) */
  value: text("value"),
  /** ID of the admin user who last updated this slot */
  updatedBy: int("updatedBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SiteContent = typeof siteContent.$inferSelect;
export type InsertSiteContent = typeof siteContent.$inferInsert;

export type PageBlock =
  | HeroBlock
  | TextBlock
  | ImageBlock
  | TwoColumnBlock
  | QuoteBlock
  | CtaBannerBlock
  | CardGridBlock
  | StatsRowBlock;
