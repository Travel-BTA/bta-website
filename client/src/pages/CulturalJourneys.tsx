/**
 * Cultural Journeys Page
 * Route: /land-journeys/cultural
 * Content: Edit client/src/content/culturalJourneys.ts
 * Layout: Shared JourneySubPage template
 */

import PageSEO from "@/components/PageSEO";
import JourneySubPage from "@/components/JourneySubPage";
import { culturalJourneysData } from "@/content/culturalJourneys";

export default function CulturalJourneys() {
  return (
    <>
      <PageSEO title="Cultural Journeys | Boutique Travel Advisors" description="Immersive cultural travel experiences curated by BTA — art, history, gastronomy, and local traditions in the world’s most storied destinations." path="/experiences/cultural-journeys" />
      <JourneySubPage data={culturalJourneysData} />
    </>
  );
}
