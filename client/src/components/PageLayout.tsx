/**
 * PageLayout — shared wrapper for all marketing pages
 * Includes NavBar at top, FinalCta + Footer at bottom.
 * Use this on every page except the homepage (which manages its own order).
 */

import NavBar from "@/components/NavBar";
import { FinalCtaSection, FooterSection } from "@/components/sections/JournalSections";

interface PageLayoutProps {
  children: React.ReactNode;
  hideCta?: boolean;
}

export function PageLayout({ children, hideCta = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      {!hideCta && <FinalCtaSection />}
      <FooterSection />
    </div>
  );
}
