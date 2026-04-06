/**
 * Expedition Travel Page
 * Route: /land-journeys/expedition
 * Content: Edit client/src/content/expeditionTravel.ts
 * Layout: Shared JourneySubPage template
 */

import PageSEO from "@/components/PageSEO";
import JourneySubPage from "@/components/JourneySubPage";
import { expeditionTravelData } from "@/content/expeditionTravel";

export default function ExpeditionTravel() {
  return (
    <>
      <PageSEO title="Expedition Travel | Boutique Travel Advisors" description="Extraordinary expedition travel to Antarctica, the Arctic, Galápagos, and remote wilderness destinations. Expert guides and Virtuoso benefits." path="/experiences/expedition-travel" />
      <JourneySubPage data={expeditionTravelData} />
    </>
  );
}
