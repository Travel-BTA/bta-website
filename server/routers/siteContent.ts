/**
 * siteContent.ts — tRPC router for the Site Content CMS.
 *
 * WHY: Provides a clean API for the admin content editor and public pages.
 * Admin writes are gated behind role === "admin". Public reads are open so
 * any page can fetch its content without authentication.
 *
 * Procedures:
 *   siteContent.getPage     — public: get all content for a page (key→value map)
 *   siteContent.getAll      — admin: get every content row (for the editor dashboard)
 *   siteContent.upsert      — admin: save a single content slot
 *   siteContent.bulkUpsert  — admin: save multiple slots at once (batch save)
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure, protectedProcedure } from "../_core/trpc";
import { getAllContent, getContentMap, upsertContent } from "../db-site-content";

// ── Admin guard ───────────────────────────────────────────────────────────────
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

// ── Content slot schema ───────────────────────────────────────────────────────
const contentSlotSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  page: z.string().min(1),
  section: z.string().min(1),
  fieldType: z.enum(["text", "textarea", "image"]),
  value: z.string().nullable(),
});

// ── Router ────────────────────────────────────────────────────────────────────
export const siteContentRouter = router({
  /** Public: returns key→value map for a page. Used by public-facing components. */
  getPage: publicProcedure
    .input(z.object({ page: z.string() }))
    .query(async ({ input }) => {
      return getContentMap(input.page);
    }),

  /** Admin: returns all content rows for the editor dashboard. */
  getAll: adminProcedure.query(async () => {
    return getAllContent();
  }),

  /** Admin: save a single content slot. */
  upsert: adminProcedure
    .input(contentSlotSchema)
    .mutation(async ({ input, ctx }) => {
      await upsertContent({ ...input, updatedBy: ctx.user.id });
      return { success: true };
    }),

  /** Admin: save multiple slots at once (batch save on page editor). */
  bulkUpsert: adminProcedure
    .input(z.array(contentSlotSchema))
    .mutation(async ({ input, ctx }) => {
      for (const slot of input) {
        await upsertContent({ ...slot, updatedBy: ctx.user.id });
      }
      return { success: true, count: input.length };
    }),
});
