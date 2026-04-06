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

## Image and Copy Fixes
- [x] Replace plane image in Philosophy section with hot air balloon over savanna image
- [x] Fix grammar in Destinations page intro: add em dash after "right now" — "...right now — places where..."
- [x] Update homepage stats: Trips Booked → 4,000+, Travel Designed → $60M+

## Photo Swaps
- [x] Replace unrealistic elephant photo with safari bush dining image (6 locations replaced)
- [x] Update Costa Rica destination card with Monteverde canopy bridge photo (royalty-free Unsplash)
- [ ] Replace Private Safari experience page hero (game drive sunset) with safari bush dining image
- [ ] Fix: NavBar/header missing on certain pages — audit all routes and ensure NavBar renders on every page

## Land Journeys Typography Fix
- [ ] Fix H1/H2/H3 fonts and copy formatting on LandJourneys.tsx to match site standard
- [ ] Fix H1/H2/H3 fonts and copy formatting on SafariWildlife.tsx to match site standard
- [ ] Fix H1/H2/H3 fonts and copy formatting on EuropeanImmersions.tsx to match site standard
- [ ] Fix H1/H2/H3 fonts and copy formatting on ExpeditionTravel.tsx to match site standard
- [ ] Fix H1/H2/H3 fonts and copy formatting on CulturalJourneys.tsx to match site standard
- [ ] Replace Private Safari experience page hero (game drive sunset) with safari bush dining image

## Full Typography Audit (Apr 2026)
- [x] Push latest changes to GitHub (user_github remote) — synced via checkpoint
- [ ] Audit all pages for non-BTA-standard fonts, heading weights, and colors
- [ ] Fix all pages with incorrect typography

## Typography Hierarchy Fixes (Janet screenshots Apr 3)
- [x] Land Journeys: "Africa: The Great Migration" → H1 Instrument Serif; "FEATURED JOURNEY" → Cormorant Garamond italic subtitle
- [x] Land Journeys: "Your Journey, Designed Around You" → H1 Instrument Serif; "HOW WE WORK" → Cormorant Garamond italic subtitle
- [x] Experiences/WhoWeAre: "Travel That Moves You" → H1 Instrument Serif; "BESPOKE BY DESIGN" → Cormorant Garamond italic subtitle
- [x] About/OurPeople: advisor name labels → Playfair Display Medium steel blue (not all-caps smallcaps)
- [x] Cruises Hub: category labels (ULTRA-LUXURY, PREMIUM, RIVER) → Playfair Display subtitle style

## About Sub-Pages & Navigation (Apr 2026)
- [ ] Build Hotel Specialist Program page (/hotel-specialist-program)
- [ ] Build Hotel Collection Application page (/hotel-collection-application)
- [ ] Add About dropdown nav: Our People, We Give Back, Hotel Specialist Program, Hotel Collection Application

## Nav Dropdown Fix (Apr 2026)
- [x] Fix nav dropdown hover — add close delay so user can move mouse from trigger into dropdown without it closing

## Family Itinerary Photo Updates (Apr 2026)
- [ ] Replace Iceland itinerary photos with aurora/northern lights and family-at-waterfall images
- [ ] Replace Fiji itinerary photo with glass-bottom boat family image

## Admin Content Editor (Apr 2026)
- [ ] Add siteContent table to database schema (key-value store per page/section)
- [ ] Run db:push to sync schema
- [ ] Build server router: siteContent.get, siteContent.set (admin only)
- [ ] Build /admin/content page — page selector + editable fields for copy + image upload
- [ ] Add "Site Content" card to AdminPanel.tsx
- [ ] Wire public pages to pull from DB first, fallback to hardcoded defaults
- [ ] Seed initial content values from current hardcoded copy
- [ ] Test: edit a headline in admin, verify it shows live on public page
- [ ] Save checkpoint

## Admin Email+Password Login (Apr 2026)
- [ ] Add adminCredentials table (email, hashed password) to schema
- [ ] Run direct SQL to create table
- [ ] Add server procedures: admin.login (returns JWT), admin.me, admin.setPassword
- [ ] Build /admin/login page — clean BTA-branded email+password form
- [ ] Store admin JWT in httpOnly cookie, protect /admin/* routes client-side
- [ ] Seed janet@travelbta.com with initial password via setup endpoint
- [ ] Build /admin/content — page selector + editable fields + image upload
- [ ] Add "Content Editor" card to AdminPanel
- [ ] Wire public pages to pull from siteContent DB with hardcoded fallbacks

## Photo Updates (Apr 2026 — Janet uploads)
- [x] Upload family pool/infinity view photo → Family Travel hero
- [x] Upload Hakone torii gate kids photo → Japan itinerary Hakone section
- [x] Seed janet@travelbta.com admin account with password

## Copy Fixes
- [x] Remove all em dashes from AdvisorRecruitment page

## Bug Fixes
- [ ] Fix broken advisor profile photos
- [ ] Fix FAQ page not loading
- [x] Extract PR #1 images, upload to CDN, replace local /public/images refs

## Pre-Deployment Fixes (Apr 2026)
- [x] Remove /family/ images from client/public (move to CDN)
- [x] Delete HotelCollectionApplication.tsx.bak
- [x] Fix HomeV2.tsx TypeScript error (MobileLogoBar import)
- [x] Remove hardcoded JWT fallback secret and ADMIN_SETUP_KEY fallback
- [x] Fix FAQ nav link (removed from nav until FAQ page is built)
- [x] Delete font-compare.html from public
