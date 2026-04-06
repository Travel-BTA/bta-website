/**
 * adminAuth.ts — tRPC router for standalone admin email+password auth.
 *
 * WHY: The BTA admin panel needs a login that works on any deployment
 * (Vercel, etc.) without depending on Manus OAuth. This router handles
 * email+password login, session validation, and initial account setup.
 *
 * Procedures:
 *   adminAuth.login    — public: verify email+password, set httpOnly cookie
 *   adminAuth.me       — public: return current admin from cookie (or null)
 *   adminAuth.logout   — public: clear the admin session cookie
 *   adminAuth.setup    — public (one-time): create the first admin account
 *   adminAuth.changePassword — protected: update password for current admin
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { router, publicProcedure, protectedProcedure } from "../_core/trpc";
import { getDb } from "../db";
import { adminCredentials } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

// ── Constants ─────────────────────────────────────────────────────────────────
const ADMIN_COOKIE = "bta_admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getJwtSecret() {
  // WHY: JWT_SECRET must be set in production env vars — no fallback to prevent
  // accidental insecure deployments. Set this in Vercel/Railway environment settings.
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET environment variable is not set");
  return new TextEncoder().encode(secret);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function signAdminToken(payload: { id: number; email: string; name: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(getJwtSecret());
}

async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    return payload as { id: number; email: string; name: string };
  } catch {
    return null;
  }
}

function setAdminCookie(res: any, token: string) {
  res.cookie(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE * 1000,
    path: "/",
  });
}

function clearAdminCookie(res: any) {
  res.clearCookie(ADMIN_COOKIE, { path: "/" });
}

async function getCurrentAdmin(req: any) {
  const token = req.cookies?.[ADMIN_COOKIE];
  if (!token) return null;
  return verifyAdminToken(token);
}

// ── Router ────────────────────────────────────────────────────────────────────
export const adminAuthRouter = router({
  /** Verify email+password and set session cookie. */
  login: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(1) }))
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const rows = await db
        .select()
        .from(adminCredentials)
        .where(eq(adminCredentials.email, input.email.toLowerCase().trim()))
        .limit(1);

      const admin = rows[0];
      if (!admin || !admin.active) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid email or password" });
      }

      const valid = await bcrypt.compare(input.password, admin.passwordHash);
      if (!valid) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid email or password" });
      }

      const token = await signAdminToken({ id: admin.id, email: admin.email, name: admin.name });
      setAdminCookie(ctx.res, token);

      return { success: true, name: admin.name, email: admin.email };
    }),

  /** Return the current admin from the session cookie. */
  me: publicProcedure.query(async ({ ctx }) => {
    return getCurrentAdmin(ctx.req);
  }),

  /** Clear the admin session cookie. */
  logout: publicProcedure.mutation(async ({ ctx }) => {
    clearAdminCookie(ctx.res);
    return { success: true };
  }),

  /**
   * One-time setup: create the first admin account.
   * Disabled once any admin account exists.
   */
  setup: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(8),
      name: z.string().min(1),
      setupKey: z.string(), // simple guard against accidental public use
    }))
    .mutation(async ({ input }) => {
      // WHY: ADMIN_SETUP_KEY must be explicitly set — no default fallback to prevent
      // unauthorized account creation on public deployments.
      const expectedKey = process.env.ADMIN_SETUP_KEY;
      if (!expectedKey) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Setup is disabled on this deployment" });
      }
      if (input.setupKey !== expectedKey) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Invalid setup key" });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      // Check if any admin already exists
      const existing = await db.select().from(adminCredentials).limit(1);
      if (existing.length > 0) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Admin account already exists. Use changePassword instead." });
      }

      const passwordHash = await bcrypt.hash(input.password, 12);
      await db.insert(adminCredentials).values({
        email: input.email.toLowerCase().trim(),
        passwordHash,
        name: input.name,
        active: true,
      });

      return { success: true };
    }),

  /** Change password for the currently logged-in admin. */
  changePassword: publicProcedure
    .input(z.object({
      currentPassword: z.string().min(1),
      newPassword: z.string().min(8),
    }))
    .mutation(async ({ input, ctx }) => {
      const adminPayload = await getCurrentAdmin(ctx.req);
      if (!adminPayload) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Not logged in" });
      }

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable" });

      const rows = await db
        .select()
        .from(adminCredentials)
        .where(eq(adminCredentials.id, adminPayload.id))
        .limit(1);

      const admin = rows[0];
      if (!admin) throw new TRPCError({ code: "NOT_FOUND", message: "Admin not found" });

      const valid = await bcrypt.compare(input.currentPassword, admin.passwordHash);
      if (!valid) throw new TRPCError({ code: "UNAUTHORIZED", message: "Current password is incorrect" });

      const newHash = await bcrypt.hash(input.newPassword, 12);
      await db.update(adminCredentials).set({ passwordHash: newHash }).where(eq(adminCredentials.id, admin.id));

      return { success: true };
    }),
});
