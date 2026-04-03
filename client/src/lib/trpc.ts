/**
 * WordPress REST API client — replaces the tRPC stub.
 *
 * WHY: The new BTA site fetches blog content live from the existing
 * travelbta.com WordPress installation via its public REST API.
 * This keeps WordPress as a headless CMS (content editing only) while
 * the new React site handles all presentation. No content migration needed.
 *
 * All posts, images, and categories remain on WordPress servers.
 * The React pages (Journal.tsx, BlogPost.tsx) call these hooks exactly
 * as they did before — the interface is identical to the old tRPC stub.
 */

import { useState, useEffect } from "react";

const WP_API = "https://travelbta.com/wp-json/wp/v2";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Strip HTML tags from a string (used for excerpt cleanup) */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/** Estimate reading time from HTML content (~200 words per minute) */
function estimateReadTime(html: string): number {
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Remove the affiliate disclaimer paragraph that appears at the top of every post */
function removeDisclaimer(html: string): string {
  // Strips the <h6> affiliate notice that WordPress prepends to every post
  return html.replace(
    /<h6[^>]*>[\s\S]*?affiliate[\s\S]*?<\/h6>/i,
    ""
  );
}

/**
 * Map WordPress category names to the filter pill labels used in Journal.tsx.
 * WHY: Journal.tsx has 5 filter pills (DESTINATION GUIDE, TRAVEL TIPS, CULTURE,
 * ADVENTURE, TRAVEL PHILOSOPHY). WordPress has 64 categories. This maps the
 * WordPress taxonomy to the simplified filter system so pills actually work.
 * Posts can match multiple pills — we keep all original names AND add mapped labels.
 */
const CATEGORY_MAP: Record<string, string> = {
  // Destination Guides pill
  "Destination Guides": "Destination Guide",
  "City Guides": "Destination Guide",
  "Italy Travel": "Destination Guide",
  "Italy Travel Guides": "Destination Guide",
  "International Destinations": "Destination Guide",
  "USA Travel": "Destination Guide",
  // Travel Tips pill
  "Travel Tips": "Travel Tips",
  "Travel Planning Advice": "Travel Tips",
  "Travel Planning": "Travel Tips",
  "Seasonal Travel Planning": "Travel Tips",
  "Travel Gear": "Travel Tips",
  "Travel Safety": "Travel Tips",
  // Culture pill
  "Cultural and Historical Travel": "Culture",
  "Cultural Travel": "Culture",
  "Culinary Travel": "Culture",
  "Personal Stories": "Culture",
  "BTA Advisor Stories": "Culture",
  // Adventure pill
  "Adventure Travel": "Adventure",
  "Expedition Cruises": "Adventure",
  "Cruises": "Adventure",
  // Travel Philosophy pill
  "Luxury Travel Insights": "Travel Philosophy",
  "Luxury Travel": "Travel Philosophy",
  "Wellness Travel": "Travel Philosophy",
};

function mapCategoriesToFilterLabels(wpCategories: string[]): string[] {
  const result = new Set<string>(wpCategories);
  for (const cat of wpCategories) {
    const mapped = CATEGORY_MAP[cat];
    if (mapped) result.add(mapped);
  }
  return Array.from(result);
}

// ─── Post shape (matches what Journal.tsx and BlogPost.tsx expect) ─────────────

interface WpPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: string[];
  date: string;
  readTime: number;
}

interface WpPostFull extends WpPost {
  content: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

// ─── Fetch helpers ─────────────────────────────────────────────────────────────

/**
 * Transform a raw WordPress post (with _embedded data) into the WpPost shape.
 * Uses _embed to get featured image and categories in a single API call.
 */
function transformPost(raw: any): WpPost {
  const embedded = raw._embedded ?? {};

  // Featured image — from embedded wp:featuredmedia
  const mediaArr = embedded["wp:featuredmedia"] ?? [];
  const imageUrl =
    mediaArr[0]?.media_details?.sizes?.large?.source_url ??
    mediaArr[0]?.source_url ??
    "";

  // Category names — from embedded wp:term[0]
  const termGroups = embedded["wp:term"] ?? [];
  const categoryTerms: any[] = termGroups[0] ?? [];
  const categories = mapCategoriesToFilterLabels(
    categoryTerms.map((t: any) => t.name as string)
  );

  const excerpt = stripHtml(raw.excerpt?.rendered ?? "");
  const content = raw.content?.rendered ?? "";

  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title?.rendered ?? "",
    excerpt,
    imageUrl,
    categories,
    date: raw.date ?? "",
    readTime: estimateReadTime(content || excerpt),
  };
}

/**
 * Transform a raw WordPress post into the full WpPostFull shape (includes content + author).
 */
function transformPostFull(raw: any): WpPostFull {
  const base = transformPost(raw);
  const embedded = raw._embedded ?? {};

  // Author — from embedded author array (may be restricted on some WP installs)
  const authorArr = embedded["author"] ?? [];
  const authorRaw = authorArr[0] ?? {};
  const author = {
    name: authorRaw.name ?? "Boutique Travel Advisors",
    role: "Luxury Travel Advisor",
    avatarUrl: authorRaw.avatar_urls?.["96"] ?? "",
  };

  const content = removeDisclaimer(raw.content?.rendered ?? "");

  return {
    ...base,
    content,
    author,
  };
}

// ─── React hooks (drop-in replacements for tRPC useQuery) ─────────────────────

function useWpPosts(args: { page: number; perPage: number }) {
  const [data, setData] = useState<WpPost[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams({
      per_page: String(args.perPage),
      page: String(args.page),
      _embed: "1",
      _fields: "id,slug,title,date,excerpt,content,categories,featured_media,_embedded,_links",
    });

    fetch(`${WP_API}/posts?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);
        return res.json();
      })
      .then((posts: any[]) => {
        if (!cancelled) {
          setData(posts.map(transformPost));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [args.page, args.perPage]);

  return { data, isLoading, error };
}

function useWpPost(args: { slug: string }, opts?: { enabled?: boolean }) {
  const [data, setData] = useState<WpPostFull | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const enabled = opts?.enabled !== false;

  useEffect(() => {
    if (!enabled || !args.slug) return;

    let cancelled = false;
    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams({
      slug: args.slug,
      _embed: "1",
      _fields: "id,slug,title,date,excerpt,content,categories,featured_media,author,_embedded,_links",
    });

    fetch(`${WP_API}/posts?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);
        return res.json();
      })
      .then((posts: any[]) => {
        if (!cancelled) {
          if (posts.length === 0) {
            setError(new Error("Post not found"));
          } else {
            setData(transformPostFull(posts[0]));
          }
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [args.slug, enabled]);

  return { data, isLoading, error };
}

// ─── Public API (identical interface to the old tRPC stub) ────────────────────

export const trpc = {
  blog: {
    getPosts: {
      useQuery: (args: { page: number; perPage: number }, _opts?: any) =>
        useWpPosts(args),
    },
    getPost: {
      useQuery: (args: { slug: string }, opts?: { enabled?: boolean }) =>
        useWpPost(args, opts),
    },
  },
  // Storage stub retained for MediaManager compatibility
  storage: {
    listFiles: {
      useQuery: (_args?: unknown) => ({ data: undefined, isLoading: false, error: null }),
    },
    deleteFile: {
      useMutation: () => ({ mutate: () => {}, isLoading: false }),
    },
    getUploadUrl: {
      useMutation: () => ({ mutateAsync: async () => ({ url: "", key: "" }), isLoading: false }),
    },
  },
} as any;
