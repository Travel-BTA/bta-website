/**
 * LivePageRenderer.tsx — Renders a published page at /pages/:slug
 *
 * WHY: Published pages created in the Page Builder are served here.
 * The same BlockRenderer used in the editor ensures WYSIWYG fidelity.
 * Includes the site NavBar and Footer so published pages feel native.
 */

import PageSEO from "@/components/PageSEO";
import { useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import BlockRenderer from "@/components/pageBuilder/BlockRenderer";
import NavBar from "@/components/NavBar";
import { FooterSection } from "@/components/sections/JournalSections";
import type { PageBlock } from "../../../drizzle/schema";
import { Loader2 } from "lucide-react";

export default function LivePageRenderer() {
  const [, params] = useRoute("/pages/:slug");
  const slug = params?.slug ?? "";

  const { data: page, isLoading, error } = trpc.pages.getPublished.useQuery(
    { slug },
    { enabled: !!slug }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Loader2 className="animate-spin text-[#9C886A]" size={32} />
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <div className="flex flex-col items-center justify-center py-32 text-center px-8">
          <p
            className="text-5xl font-light uppercase tracking-widest text-[#384959] mb-4"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Page Not Found
          </p>
          <p
            className="text-lg text-[#2F2F2F]/60 font-light mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            This page is not available or has not been published yet.
          </p>
          <a
            href="/"
            className="text-sm uppercase tracking-widest border-b border-[#9C886A] text-[#9C886A] pb-0.5 hover:opacity-70 transition-opacity"
          >
            Return Home
          </a>
        </div>
        <FooterSection />
      </div>
    );
  }

  const blocks = (page.blocks as PageBlock[]) ?? [];

  return (
    <div
className="min-h-screen bg-white"
    >
      <PageSEO
        title="Page | Boutique Travel Advisors"
        description="Boutique Travel Advisors — luxury travel planning with Virtuoso access."
        path="/pages"
      />
      <NavBar />
      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
      <FooterSection />
    </div>
  );
}
