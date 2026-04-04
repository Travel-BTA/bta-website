/**
 * advisors.ts — tRPC router for the BTA team member / advisor system.
 *
 * Procedures:
 *   advisors.list          — list all advisors (admin only)
 *   advisors.listPublished — list published advisors (public — for Our People page)
 *   advisors.get           — get advisor by ID (admin only)
 *   advisors.getBySlug     — get advisor by slug (public — for profile page)
 *   advisors.create        — create a new advisor (admin only)
 *   advisors.update        — update advisor fields (admin only)
 *   advisors.delete        — delete advisor (admin only)
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure, protectedProcedure } from "../_core/trpc";
import {
  listAdvisors,
  listPublishedAdvisors,
  getAdvisorById,
  getAdvisorBySlug,
  createAdvisor,
  updateAdvisor,
  deleteAdvisor,
} from "../db-advisors";

// ── Admin guard ───────────────────────────────────────────────────────────────
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

// ── Shared advisor input schema ───────────────────────────────────────────────
// WHY: Reused by both create and update so the shape is defined once.
const advisorInputSchema = z.object({
  slug: z.string().min(1).max(200).regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens only").optional(),
  name: z.string().min(1).max(200).optional(),
  title: z.string().max(300).optional(),
  tagline: z.string().optional(),
  heroImage: z.string().optional(),
  badges: z.array(z.string()).optional(),
  ctaPrimary: z.object({ label: z.string(), href: z.string() }).optional(),
  ctaSecondary: z.object({ label: z.string(), href: z.string() }).optional(),
  photoMain: z.string().optional(),
  photoAccent: z.string().optional(),
  meetEyebrow: z.string().optional(),
  meetHeading: z.string().optional(),
  bio: z.array(z.string()).optional(),
  meetQuote: z.string().optional(),
  stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
  hotels: z.array(z.object({
    badge: z.string(),
    location: z.string(),
    name: z.string(),
    quote: z.string(),
    perks: z.array(z.string()),
    image: z.string(),
  })).optional(),
  specialties: z.array(z.object({
    label: z.string(),
    description: z.string(),
    image: z.string(),
  })).optional(),
  pillars: z.array(z.object({
    icon: z.string(),
    title: z.string(),
    body: z.string(),
  })).optional(),
  experiences: z.array(z.object({
    duration: z.string(),
    region: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    href: z.string(),
  })).optional(),
  whyWorkBenefits: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
  whyWorkImage: z.string().optional(),
  testimonials: z.array(z.object({
    quote: z.string(),
    author: z.string(),
    trip: z.string(),
    rating: z.number().min(1).max(5),
  })).optional(),
  closingBannerImage: z.string().optional(),
  closingBannerQuote: z.string().optional(),
  email: z.string().email().optional(),
  published: z.boolean().optional(),
  sortOrder: z.number().optional(),
});

export const advisorsRouter = router({
  // ── List all advisors (admin) ────────────────────────────────────────────────
  list: adminProcedure.query(async () => {
    return listAdvisors();
  }),

  // ── List published advisors (public) ────────────────────────────────────────
  listPublished: publicProcedure.query(async () => {
    return listPublishedAdvisors();
  }),

  // ── Get advisor by ID (admin) ────────────────────────────────────────────────
  get: adminProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const advisor = await getAdvisorById(input.id);
      if (!advisor) throw new TRPCError({ code: "NOT_FOUND", message: "Advisor not found" });
      return advisor;
    }),

  // ── Get advisor by slug (public) ─────────────────────────────────────────────
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const advisor = await getAdvisorBySlug(input.slug);
      if (!advisor) throw new TRPCError({ code: "NOT_FOUND", message: "Advisor not found" });
      return advisor;
    }),

  // ── Create advisor (admin) ───────────────────────────────────────────────────
  create: adminProcedure
    .input(advisorInputSchema.required({ slug: true, name: true }))
    .mutation(async ({ input }) => {
      return createAdvisor(input as any);
    }),

  // ── Update advisor (admin) ───────────────────────────────────────────────────
  update: adminProcedure
    .input(z.object({ id: z.number() }).merge(advisorInputSchema))
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      await updateAdvisor(id, data as any);
      return { success: true };
    }),

  // ── Delete advisor (admin) ───────────────────────────────────────────────────
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await deleteAdvisor(input.id);
      return { success: true };
    }),
});
