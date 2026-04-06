/**
 * Safari & Wildlife Page
 * Route: /land-journeys/safari
 * Content: Edit client/src/content/safariWildlife.ts
 * Layout: Shared JourneySubPage template
 */

import PageSEO from "@/components/PageSEO";
import JourneySubPage from "@/components/JourneySubPage";
import { safariWildlifeData } from "@/content/safariWildlife";

export default function SafariWildlife() {
  return (
    <>
      <PageSEO title="Safari & Wildlife | Boutique Travel Advisors" description="Luxury safari and wildlife experiences in Africa, the Galápagos, and beyond. BTA secures the finest camps, lodges, and guides for an unforgettable encounter." path="/experiences/safari-wildlife" />
      <JourneySubPage data={safariWildlifeData} />
    </>
  );
}
