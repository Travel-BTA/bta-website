/**
 * Cultural Journeys Page
 * Route: /land-journeys/cultural
 * Content: Edit client/src/content/culturalJourneys.ts
 * Layout: Shared JourneySubPage template
 */

import JourneySubPage from "@/components/JourneySubPage";
import { culturalJourneysData } from "@/content/culturalJourneys";

export default function CulturalJourneys() {
  return <JourneySubPage data={culturalJourneysData} />;
}
