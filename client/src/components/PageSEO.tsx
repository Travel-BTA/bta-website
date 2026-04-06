/**
 * PageSEO — Injects per-page <title>, <meta description>, and Open Graph tags
 * into the document <head> using react-helmet-async.
 *
 * Why: Search engines and social platforms read these tags to understand page
 * content. Without them, every page defaults to the generic index.html title
 * and has no description or social preview image.
 *
 * Usage:
 *   <PageSEO
 *     title="Luxury Ocean Cruises | Boutique Travel Advisors"
 *     description="Sail with Explora Journeys, Regent, Silversea, and more..."
 *     image="https://cdn.../hero.jpg"  // optional, defaults to BTA logo
 *     path="/cruises/luxury-ocean"     // used for canonical URL
 *   />
 */

import { Helmet } from "react-helmet-async";

const SITE_NAME = "Boutique Travel Advisors";
const BASE_URL = "https://www.boutiquetraveladvisors.com";
const DEFAULT_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663449292159/cXyPMQeBTKSRcwla.png";

interface PageSEOProps {
  /** Full page title — will be shown in browser tab and search results */
  title: string;
  /** 150–160 character description for search snippets and social previews */
  description: string;
  /** Hero image URL for Open Graph / Twitter card previews */
  image?: string;
  /** URL path (e.g. "/cruises/luxury-ocean") for canonical tag */
  path?: string;
  /** Schema.org type — defaults to "WebPage" */
  type?: "WebPage" | "Article" | "TravelAgency";
  /** When true, adds noindex/nofollow for admin and internal pages */
  noIndex?: boolean;
}

export default function PageSEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  path = "",
  type = "WebPage",
  noIndex = false,
}: PageSEOProps) {
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* ── Open Graph (Facebook, LinkedIn, WhatsApp) ────────────────────── */}
      <meta property="og:type" content={type === "Article" ? "article" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ── Twitter Card ────────────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── Robots ──────────────────────────────────────────────────────── */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
    </Helmet>
  );
}
