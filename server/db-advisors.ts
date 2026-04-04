/**
 * db-advisors.ts — Database query helpers for the BTA advisor/team system.
 *
 * WHY: Keeping DB logic here (separate from the router) keeps procedures thin
 * and makes it easy to reuse queries across multiple routers or scripts.
 */

import { eq, asc } from "drizzle-orm";
import { getDb } from "./db";
import { advisors, type Advisor, type InsertAdvisor } from "../drizzle/schema";

// ── List all advisors (admin) ─────────────────────────────────────────────────
export async function listAdvisors(): Promise<Advisor[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(advisors).orderBy(asc(advisors.sortOrder), asc(advisors.name));
}

// ── List published advisors (public — for Our People page) ───────────────────
export async function listPublishedAdvisors(): Promise<Advisor[]> {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(advisors)
    .where(eq(advisors.published, true))
    .orderBy(asc(advisors.sortOrder), asc(advisors.name));
}

// ── Get advisor by ID ─────────────────────────────────────────────────────────
export async function getAdvisorById(id: number): Promise<Advisor | null> {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(advisors).where(eq(advisors.id, id)).limit(1);
  return rows[0] ?? null;
}

// ── Get advisor by slug (public) ──────────────────────────────────────────────
export async function getAdvisorBySlug(slug: string): Promise<Advisor | null> {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(advisors).where(eq(advisors.slug, slug)).limit(1);
  return rows[0] ?? null;
}

// ── Create advisor ────────────────────────────────────────────────────────────
export async function createAdvisor(data: InsertAdvisor): Promise<{ id: number }> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(advisors).values(data);
  return { id: Number((result as any)[0]?.insertId ?? 0) };
}

// ── Update advisor ────────────────────────────────────────────────────────────
export async function updateAdvisor(
  id: number,
  data: Partial<InsertAdvisor>
): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(advisors).set(data).where(eq(advisors.id, id));
}

// ── Delete advisor ────────────────────────────────────────────────────────────
export async function deleteAdvisor(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(advisors).where(eq(advisors.id, id));
}
