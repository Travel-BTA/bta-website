/**
 * European Immersions Page
 * Route: /land-journeys/europe
 * Content: Edit client/src/content/europeanImmersions.ts
 * Layout: Shared JourneySubPage template
 */

import PageSEO from "@/components/PageSEO";
import JourneySubPage from "@/components/JourneySubPage";
import { europeanImmersionsData } from "@/content/europeanImmersions";

export default function EuropeanImmersions() {
  return (
    <>
      <PageSEO title="European Immersions | Boutique Travel Advisors" description="Curated European travel experiences — private château stays, vineyard tours, art history walks, and culinary journeys across France, Italy, Spain, and beyond." path="/experiences/european-immersions" />
      <JourneySubPage data={europeanImmersionsData} />
    </>
  );
}
