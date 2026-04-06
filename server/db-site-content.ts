/**
 * db-site-content.ts — Database helpers for the Site Content CMS.
 *
 * WHY: Centralises all siteContent queries so the tRPC router and any
 * future server jobs share the same data access layer. Public pages call
 * getContentMap() to get a key→value lookup; the admin editor calls
 * upsertContent() to save changes.
 */

import { eq, inArray } from "drizzle-orm";
import { getDb } from "./db";
import { siteContent, InsertSiteContent } from "../drizzle/schema";

// ── Read ──────────────────────────────────────────────────────────────────────

/** Return all content rows for a given page slug (e.g. "homepage"). */
export async function getPageContent(page: string) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(siteContent).where(eq(siteContent.page, page));
}

/** Return a key→value map for a page — used by public page components. */
export async function getContentMap(page: string): Promise<Record<string, string>> {
  const rows = await getPageContent(page);
  return Object.fromEntries(
    rows.filter((r) => r.value !== null).map((r) => [r.key, r.value as string])
  );
}

/** Return all content rows across all pages — used by the admin dashboard. */
export async function getAllContent() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(siteContent).orderBy(siteContent.page, siteContent.section);
}

/** Return a single content row by key. */
export async function getContentByKey(key: string) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(siteContent).where(eq(siteContent.key, key)).limit(1);
  return rows[0] ?? null;
}

// ── Write ─────────────────────────────────────────────────────────────────────

/** Insert or update a content slot. */
export async function upsertContent(
  data: Pick<InsertSiteContent, "key" | "label" | "page" | "section" | "fieldType" | "value" | "updatedBy">
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Try update first; if no rows affected, insert.
  const result = await db
    .update(siteContent)
    .set({ value: data.value, updatedBy: data.updatedBy, label: data.label })
    .where(eq(siteContent.key, data.key));

  const affected = (result as any)[0]?.affectedRows ?? 0;
  if (affected === 0) {
    await db.insert(siteContent).values(data);
  }
}

/** Bulk upsert — used to seed initial content values. */
export async function seedContent(
  rows: Array<Pick<InsertSiteContent, "key" | "label" | "page" | "section" | "fieldType" | "value">>
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  for (const row of rows) {
    await upsertContent({ ...row, updatedBy: undefined });
  }
}
