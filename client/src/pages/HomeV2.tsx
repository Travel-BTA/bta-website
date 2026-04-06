/**
 * Home. BTA Homepage
 *
 * Section order (matches Figma):
 *  1. NavBar
 *  2. Hero
 *  3. Who We Are
 *  4. Stats
 *  5. Philosophy
 *  6. Curated Hotels
 *  7. Exclusive Benefits
 *  8. VIP Access (iframe embed)
 *  9. Gives Back
 * 10. Where Will Your Story Unfold? (itinerary cards)
 * 11. Experience Strip
 * 12. Journal / Insights & Inspiration
 * 13. Testimonials (Google reviews)
 * 14. Instagram
 * 15. Final CTA
 * 16. Footer
 */

import PageSEO from "@/components/PageSEO";
// WHY: Split into two imports to avoid TS2614 with mixed default+named exports
import HeroSection from "@/components/sections/HeroSection";
import { MobileLogoBar } from "@/components/sections/HeroSection";
import {
  WhoWeAreSection,
  StatsSection,
  PhilosophySection,
  CuratedHotelsSection,
} from "@/components/sections/AboutSections";
import {
  ExclusiveBenefitsSection,
  VipAccessSection,
  GivesBackSection,
} from "@/components/sections/MembershipSections";
import { StoryUnfoldSection } from "@/components/sections/StoryUnfoldSection";
import { InfinityPoolBannerSection } from "@/components/sections/InfinityPoolBannerSection";
import {
  JournalSection,
  TestimonialsSection,
  InstagramSection,
  FinalCtaSection
} from "@/components/sections/JournalSections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Boutique Travel Advisors | Luxury Travel Design"
        description="BTA crafts extraordinary luxury journeys — from private villa escapes to expedition cruises. Virtuoso member. Every booking supports global philanthropy."
        path="/"
      />
      <HeroSection />
      {/* MobileLogoBar renders below the hero on small screens only — prevents logos from overlapping hero text */}
      <MobileLogoBar />
      <WhoWeAreSection />
      <StatsSection />
      <PhilosophySection />
      <CuratedHotelsSection />
      <ExclusiveBenefitsSection />
      <VipAccessSection />
      <GivesBackSection />
      <StoryUnfoldSection />
      <InfinityPoolBannerSection />
      <JournalSection />
      <TestimonialsSection />
      <InstagramSection />
      <FinalCtaSection />
    </div>
  );
}
