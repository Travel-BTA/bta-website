# BTA Website TODO

## Backend (Full-Stack Upgrade)
- [x] Upgrade from static frontend to full-stack (Node.js + Express + tRPC + MySQL/TiDB)
- [x] Database schema created (drizzle/schema.ts — users table)
- [x] db:push run — schema synced to TiDB cloud database
- [x] tRPC backend live at /api/trpc (auth.me, auth.logout)
- [x] Fix main.tsx — use real tRPC api client (lib/api.ts) for backend, keep WordPress shim (lib/trpc.ts) for blog
- [x] Fix useAuth.ts — import from lib/api.ts not lib/trpc.ts
- [x] All TypeScript errors resolved (0 errors)
- [x] Vitest test passing (auth.logout)
- [ ] Google OAuth — replace Manus OAuth with Google OAuth (needs GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET)
- [ ] Wire Google OAuth callback route in server/_core/oauth.ts
- [ ] Update client const.ts getLoginUrl() to point to Google OAuth

## Legal Pages
- [x] Terms of Service (/terms-of-service)
- [x] Privacy Policy (/privacy-policy)
- [x] Terms and Conditions (/terms-and-conditions)
- [x] Fulfillment Policy page (/fulfillment-policy)
- [x] Cookie Policy page (/cookie-policy)
- [x] Standardize all 5 legal pages — identical typography, photo header style, section spacing
- [x] Update footer legal links to correct routes (currently /privacy and /terms, should be /privacy-policy and /terms-and-conditions)
- [x] Add Fulfillment Policy and Cookie Policy to footer legal links

## Navigation / Footer
- [x] NavBar redesigned with luxury styling (transparent → frosted Aegean Blue on scroll)
- [x] Footer legal links updated to match actual routes

## Typography Audit
- [x] Instrument Serif ALL CAPS for H1 heroes sitewide
- [x] Playfair Display SemiBold Italic for H2/H3 subheadings
- [x] Playfair Display Regular for body
- [x] Allura for script accents only
- [x] Champagne Gold only on plain backgrounds, white on photo overlays
- [x] All em dashes removed sitewide
- [ ] Home page typography audit
- [ ] About page typography audit

## Pages Built
- [x] Home (HomeV2)
- [x] Destinations hub
- [x] Cruises hub
- [x] Luxury Ocean Cruises
- [x] Premium Ocean Cruises
- [x] River Cruises
- [x] Expedition Cruises
- [x] Private Charters
- [x] Journal (editorial blog feed — live WordPress API)
- [x] Blog Post detail
- [x] Preferred Partners
- [x] Private Jet Charters
- [x] About / Our People
- [x] Custom Itineraries
- [x] Philanthropic Initiatives
- [x] Experiences
- [x] Legal pages (ToS, Privacy, T&C)
- [x] Fulfillment Policy
- [x] Cookie Policy

## Images
- [x] Fixed mismatched destination/property images (Carlton Cannes, Six Senses, Borgo Egnazia, Grand Hyatt Vail)
- [x] Santorini photo for Luxury Ocean
- [x] Azamara photo for Premium Ocean

## Git / Deployment
- [x] Push backend upgrade to user_github (Travel-BTA/bta-website) — already in sync
- [ ] Push backend upgrade to bta2 (Travel-BTA/BTA-website-2.0) — needs manus-connector[bot] write access granted in GitHub repo settings

## Live Blog Feed
- [x] Journal page: already pulling live from WordPress REST API (was already wired)
- [x] Journal page: pagination already implemented (Previous/Next buttons)
- [x] Homepage Inspiration/Journal section: now fetches live latest 3 posts from WordPress REST API
- [x] Homepage Inspiration section: shows real featured image, category, read time, title from live feed; skeleton loading states added

## Philosophy Section Figma Match
- [x] Update PhilosophySection in AboutSections.tsx to match Figma: gold heading, bold italic eyebrow, Lucide icons, bold item titles, Learn More button
- [x] Update PhilosophySection in AboutSectionsV2.tsx to match same Figma design
