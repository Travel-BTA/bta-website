/**
 * Expedition Travel Page
 * Route: /land-journeys/expedition
 * Content: Edit client/src/content/expeditionTravel.ts
 * Layout: Shared JourneySubPage template
 */

import JourneySubPage from "@/components/JourneySubPage";
import { expeditionTravelData } from "@/content/expeditionTravel";

export default function ExpeditionTravel() {
  return <JourneySubPage data={expeditionTravelData} />;
}
