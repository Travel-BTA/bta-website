/**
 * European Immersions Page
 * Route: /land-journeys/europe
 * Content: Edit client/src/content/europeanImmersions.ts
 * Layout: Shared JourneySubPage template
 */

import JourneySubPage from "@/components/JourneySubPage";
import { europeanImmersionsData } from "@/content/europeanImmersions";

export default function EuropeanImmersions() {
  return <JourneySubPage data={europeanImmersionsData} />;
}
