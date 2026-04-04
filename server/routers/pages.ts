/**
 * pages.ts — tRPC router for the BTA Page Builder.
 *
 * WHY: Separating the pages router into its own file keeps routers.ts clean
 * and makes this feature easy to extend or disable independently.
 *
 * Procedures:
 *   pages.list          — list all pages (admin only)
 *   pages.get           — get a page by ID with full blocks (admin only)
 *   pages.getPublished  — get a published page by slug (public)
 *   pages.create        — create a new draft page (admin only)
 *   pages.updateBlocks  — auto-save blocks (admin only)
 *   pages.updateMeta    — update title, slug, status (admin only)
 *   pages.delete        — delete a page (admin only)
 *   pages.aiEdit        — AI chat: describe changes, get updated blocks back (admin only)
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure, protectedProcedure } from "../_core/trpc";
import {
  listPages,
  getPageById,
  getPublishedPageBySlug,
  createPage,
  updatePageBlocks,
  updatePageMeta,
  deletePage,
} from "../db-pages";
import { invokeLLM } from "../_core/llm";
import type { PageBlock } from "../../drizzle/schema";

// ── Admin guard ───────────────────────────────────────────────────────────────
// WHY: Page builder is team-only. Any logged-in user with role "admin" can access.
// Promote users to admin via the Database panel in the Management UI.
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

// ── BTA brand system prompt ───────────────────────────────────────────────────
// WHY: The AI must only produce blocks using BTA brand tokens. This system prompt
// is injected into every AI edit request so the model never goes off-brand.
const BRAND_SYSTEM_PROMPT = `You are the BTA (Boutique Travel Advisors) page builder AI.
Your job is to create and edit page blocks for the BTA website.

STRICT BRAND RULES — you must NEVER violate these:

COLORS (only these hex values are allowed):
- "#384959"   Aegean Blue — primary dark backgrounds, headings on light
- "#9C886A"   Gold — accent, CTA buttons, borders
- "#bfaf8a"   Champagne — light gold, eyebrow labels, subtle accents
- "#2F2F2F"   Charcoal — body text on white
- "#FFFFFF"   White — text on dark backgrounds, clean section backgrounds
- "#faf9f6"   Ivory — warm off-white section backgrounds
- "#041E42"   Deep Navy — Brittany script font pop color only
- "transparent"

FONTS (only these values are allowed):
- "instrument-serif"   — H1/H2 headings, ALWAYS uppercase, NEVER italic
- "playfair-display"   — subheadings, body, eyebrow labels (italic for eyebrows)
- "allura"             — decorative script pops only (sparingly)
- "system"             — body copy, descriptions

BLOCK TYPES available: hero, text, image, two-column, quote, cta-banner, card-grid, stats-row

TONE: Luxury, elevated, professional, sophisticated. No emojis. No exclamation marks.
Use sentence-case for eyebrow labels. Use UPPERCASE for headings (instrument-serif only).

When the user asks you to create or edit blocks, respond with a JSON object in this exact format:
{
  "action": "replace_all" | "add_blocks" | "update_block" | "remove_block",
  "blocks": [...],         // for replace_all or add_blocks
  "blockId": "...",        // for update_block or remove_block
  "updatedBlock": {...},   // for update_block
  "explanation": "..."     // brief explanation of what you did
}

Always generate unique IDs for new blocks using the format: "{type}-{timestamp}-{random4chars}"
Example: "hero-1712345678-a3f2"
`;

export const pagesRouter = router({
  // ── List all pages ──────────────────────────────────────────────────────────
  list: adminProcedure.query(async () => {
    return listPages();
  }),

  // ── Get page by ID (full blocks) ────────────────────────────────────────────
  get: adminProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const page = await getPageById(input.id);
      if (!page) throw new TRPCError({ code: "NOT_FOUND", message: "Page not found" });
      return page;
    }),

  // ── Get published page by slug (public — for live renderer) ─────────────────
  getPublished: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const page = await getPublishedPageBySlug(input.slug);
      if (!page) throw new TRPCError({ code: "NOT_FOUND", message: "Page not found" });
      return page;
    }),

  // ── Create a new draft page ─────────────────────────────────────────────────
  create: adminProcedure
    .input(
      z.object({
        title: z.string().min(1).max(300),
        slug: z
          .string()
          .min(1)
          .max(200)
          .regex(/^[a-z0-9-/]+$/, "Slug must be lowercase letters, numbers, hyphens, and slashes only"),
        blocks: z.array(z.any()).default([]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return createPage({
        title: input.title,
        slug: input.slug,
        blocks: input.blocks as PageBlock[],
        userId: ctx.user.id,
      });
    }),

  // ── Auto-save blocks ────────────────────────────────────────────────────────
  updateBlocks: adminProcedure
    .input(
      z.object({
        id: z.number(),
        blocks: z.array(z.any()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return updatePageBlocks(input.id, input.blocks as PageBlock[], ctx.user.id);
    }),

  // ── Update page metadata ────────────────────────────────────────────────────
  updateMeta: adminProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1).max(300).optional(),
        slug: z
          .string()
          .min(1)
          .max(200)
          .regex(/^[a-z0-9-/]+$/)
          .optional(),
        status: z.enum(["draft", "published"]).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, ...data } = input;
      return updatePageMeta(id, data, ctx.user.id);
    }),

  // ── Delete a page ───────────────────────────────────────────────────────────
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await deletePage(input.id);
      return { success: true };
    }),

  // ── AI chat edit ────────────────────────────────────────────────────────────
  // WHY: The team can describe changes in plain English. The AI returns a
  // structured block update that is always brand-compliant (enforced by the
  // system prompt above). The client applies the returned action to the canvas.
  aiEdit: adminProcedure
    .input(
      z.object({
        pageId: z.number(),
        message: z.string().min(1).max(2000),
        currentBlocks: z.array(z.any()),
        conversationHistory: z
          .array(
            z.object({
              role: z.enum(["user", "assistant"]),
              content: z.string(),
            })
          )
          .default([]),
      })
    )
    .mutation(async ({ input }) => {
      const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
        { role: "system", content: BRAND_SYSTEM_PROMPT },
        {
          role: "user",
          content: `Current page blocks:\n${JSON.stringify(input.currentBlocks, null, 2)}`,
        },
        // Include conversation history for context
        ...input.conversationHistory.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
        { role: "user", content: input.message },
      ];

      const response = await invokeLLM({
        messages,
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "page_edit_action",
            strict: true,
            schema: {
              type: "object",
              properties: {
                action: {
                  type: "string",
                  enum: ["replace_all", "add_blocks", "update_block", "remove_block", "no_change"],
                },
                blocks: { type: "array", items: { type: "object" } },
                blockId: { type: "string" },
                updatedBlock: { type: "object" },
                explanation: { type: "string" },
              },
              required: ["action", "explanation"],
              additionalProperties: false,
            },
          },
        },
      });

      const raw = response?.choices?.[0]?.message?.content ?? "{}";
      let parsed: any;
      try {
        parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
      } catch {
        parsed = { action: "no_change", explanation: "Could not parse AI response." };
      }

      return {
        action: parsed.action ?? "no_change",
        blocks: parsed.blocks ?? null,
        blockId: parsed.blockId ?? null,
        updatedBlock: parsed.updatedBlock ?? null,
        explanation: parsed.explanation ?? "",
      };
    }),
});
