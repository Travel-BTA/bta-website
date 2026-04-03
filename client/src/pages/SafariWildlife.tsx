/**
 * Safari & Wildlife Page
 * Route: /land-journeys/safari
 * Content: Edit client/src/content/safariWildlife.ts
 * Layout: Shared JourneySubPage template
 */

import JourneySubPage from "@/components/JourneySubPage";
import { safariWildlifeData } from "@/content/safariWildlife";

export default function SafariWildlife() {
  return <JourneySubPage data={safariWildlifeData} />;
}
