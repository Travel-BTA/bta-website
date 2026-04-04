/**
 * PageLayout. shared wrapper for all marketing pages.
 *
 * WHY: NavBar and FooterSection are already rendered globally in App.tsx,
 * so PageLayout must NOT include them here — doing so creates a double
 * header and double footer on every page that uses this wrapper.
 *
 * PageLayout only adds the optional FinalCta section before the global footer.
 */

import { FinalCtaSection } from "@/components/sections/JournalSections";

interface PageLayoutProps {
  children: React.ReactNode;
  hideCta?: boolean;
}

export function PageLayout({ children, hideCta = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      {!hideCta && <FinalCtaSection />}
    </div>
  );
}
