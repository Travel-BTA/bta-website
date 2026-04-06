/**
 * AdminLogin.tsx — Standalone admin login page at /admin/login
 *
 * WHY: Provides a simple, secure email+password login that works on any
 * deployment without depending on Manus OAuth. Credentials are verified
 * server-side; a signed JWT is stored in an httpOnly cookie on success.
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, navigate] = useLocation();

  const loginMutation = trpc.adminAuth.login.useMutation({
    onSuccess: () => {
      navigate("/admin");
    },
    onError: (err: { message?: string }) => {
      setError(err.message || "Invalid email or password");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    loginMutation.mutate({ email, password });
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#faf9f6]"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      <div className="w-full max-w-sm px-8 py-10 bg-white border border-[#e8e2d9] shadow-sm">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#9C886A] mb-1">
            Boutique Travel Advisors
          </p>
          <h1
            className="text-2xl text-[#384959]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Admin Access
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs tracking-widest uppercase text-[#384959]/60 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#e8e2d9] px-4 py-2.5 text-sm text-[#2F2F2F] bg-white focus:outline-none focus:border-[#9C886A] transition-colors"
              placeholder="janet@travelbta.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs tracking-widest uppercase text-[#384959]/60 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#e8e2d9] px-4 py-2.5 text-sm text-[#2F2F2F] bg-white focus:outline-none focus:border-[#9C886A] transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-[#384959] text-white text-xs tracking-widest uppercase py-3 hover:bg-[#2a3847] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loginMutation.isPending ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {/* Back to site */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-xs text-[#384959]/40 hover:text-[#384959]/70 transition-colors tracking-wide"
          >
            ← Back to site
          </a>
        </div>
      </div>
    </div>
  );
}
