/**
 * db-pages.ts — Query helpers for the Page Builder feature.
 *
 * WHY: Keeps raw Drizzle queries out of the router layer.
 * Uses the same lazy getDb() pattern as db.ts to avoid startup failures
 * when the database is not yet available.
 */

import { getDb } from "./db";
import { pages } from "../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import type { PageBlock } from "../drizzle/schema";

// ── List all pages (for dashboard) ───────────────────────────────────────────
export async function listPages() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db
    .select({
      id: pages.id,
      slug: pages.slug,
      title: pages.title,
      status: pages.status,
      createdBy: pages.createdBy,
      updatedBy: pages.updatedBy,
      createdAt: pages.createdAt,
      updatedAt: pages.updatedAt,
    })
    .from(pages)
    .orderBy(desc(pages.updatedAt));
}

// ── Get a single page by ID ───────────────────────────────────────────────────
export async function getPageById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const rows = await db.select().from(pages).where(eq(pages.id, id)).limit(1);
  return rows[0] ?? null;
}

// ── Get a published page by slug (for live renderer) ─────────────────────────
export async function getPublishedPageBySlug(slug: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const rows = await db
    .select()
    .from(pages)
    .where(eq(pages.slug, slug))
    .limit(1);
  const page = rows[0] ?? null;
  if (!page || page.status !== "published") return null;
  return page;
}

// ── Create a new page ─────────────────────────────────────────────────────────
export async function createPage(data: {
  slug: string;
  title: string;
  blocks: PageBlock[];
  userId: number;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(pages).values({
    slug: data.slug,
    title: data.title,
    status: "draft",
    blocks: data.blocks,
    createdBy: data.userId,
    updatedBy: data.userId,
  });
  // drizzle mysql2 returns [ResultSetHeader, ...]
  const insertId = (result as any)[0]?.insertId ?? (result as any).insertId;
  return getPageById(Number(insertId));
}

// ── Update page blocks (auto-save) ────────────────────────────────────────────
export async function updatePageBlocks(id: number, blocks: PageBlock[], userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db
    .update(pages)
    .set({ blocks, updatedBy: userId })
    .where(eq(pages.id, id));
  return getPageById(id);
}

// ── Update page metadata ──────────────────────────────────────────────────────
export async function updatePageMeta(
  id: number,
  data: { title?: string; slug?: string; status?: "draft" | "published" },
  userId: number
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db
    .update(pages)
    .set({ ...data, updatedBy: userId })
    .where(eq(pages.id, id));
  return getPageById(id);
}

// ── Delete a page ─────────────────────────────────────────────────────────────
export async function deletePage(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(pages).where(eq(pages.id, id));
}
