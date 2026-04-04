/**
 * AdminPanel.tsx — BTA Admin Panel
 *
 * A clean, simple hub for all admin tools. Accessible at /admin.
 * Protected: redirects to login if user is not authenticated.
 * Admin-only tools (Team, Page Builder) are gated by role check.
 *
 * WHY: Admin links should never appear in the public-facing nav.
 * This panel gives the team a single, private entry point to all
 * backend tools without cluttering the site navigation.
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { useEffect } from "react";
import { useLocation } from "wouter";

// ── Admin tool cards ──────────────────────────────────────────────────────────

const ADMIN_TOOLS = [
  {
    title: "Team Management",
    description: "Add, edit, and publish advisor profiles. Each advisor gets a branded profile page automatically.",
    href: "/admin/team",
    icon: "👥",
    adminOnly: true,
  },
  {
    title: "Page Builder",
    description: "Create and publish new pages using brand-locked blocks and AI chat assistance.",
    href: "/admin/pages",
    icon: "🏗",
    adminOnly: true,
  },
  {
    title: "Media Manager",
    description: "Upload and manage images and media assets used across the site.",
    href: "/admin/media",
    icon: "🖼",
    adminOnly: false,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function AdminPanel() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      window.location.href = getLoginUrl();
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
        <div className="text-[#9C886A] text-sm tracking-widest uppercase">Loading…</div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  const isAdmin = (user as any)?.role === "admin";
  const visibleTools = ADMIN_TOOLS.filter((t) => !t.adminOnly || isAdmin);

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* Header */}
      <div className="bg-[#384959] text-white px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/60 mb-2">
            Boutique Travel Advisors
          </p>
          <h1
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Admin Panel
          </h1>
          <p className="mt-2 text-white/60 text-sm">
            Welcome back{user?.name ? `, ${user.name}` : ""}. Manage your site from here.
          </p>
        </div>
      </div>

      {/* Tool cards */}
      <div className="max-w-4xl mx-auto px-8 py-12">

        {/* Non-admin notice */}
        {!isAdmin && (
          <div className="mb-8 px-5 py-4 border border-[#9C886A]/30 bg-[#9C886A]/5 text-[#9C886A] text-sm">
            Some tools require admin access. Contact your site administrator to request elevated permissions.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="group block bg-white border border-[#e8e2d9] p-6 hover:border-[#9C886A] hover:shadow-md transition-all duration-200"
            >
              {/* Icon */}
              <div className="text-2xl mb-4">{tool.icon}</div>

              {/* Title */}
              <h2
                className="text-lg text-[#2F2F2F] mb-2 group-hover:text-[#9C886A] transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {tool.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-[#384959]/70 leading-relaxed">
                {tool.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 text-[#9C886A] text-xs tracking-widest uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Open <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Back to site */}
        <div className="mt-12 pt-8 border-t border-[#e8e2d9]">
          <a
            href="/"
            className="text-sm text-[#384959]/60 hover:text-[#384959] transition-colors tracking-wide"
          >
            ← Back to site
          </a>
        </div>
      </div>
    </div>
  );
}
