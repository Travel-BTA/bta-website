/**
 * tRPC API client for BTA backend procedures.
 *
 * WHY: client/src/lib/trpc.ts is a WordPress REST API shim used by the blog
 * (Journal.tsx, BlogPost.tsx) to fetch content from the headless WordPress CMS.
 * This file is the REAL tRPC client that connects to the Express backend at
 * /api/trpc for auth, user management, and any future server procedures.
 *
 * Usage:
 *   import { api } from "@/lib/api";
 *   const { data } = api.auth.me.useQuery();
 */
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../server/routers";

export const api = createTRPCReact<AppRouter>();
