/**
 * Home. BTA Homepage
 *
 * Assembles all sections in the order defined by the Figma design:
 * 1. NavBar (sticky, transparent → solid on scroll)
 * 2. Hero
 * 3. Who We Are
 * 4. Stats
 * 5. Philosophy
 * 6. Curated Hotels (full-width image)
 * 7. Exclusive Benefits
 * 8. VIP Access + Hotel Search
 * 9. Gives Back
 * 10. Experience Strip (full-width image)
 * 11. Journal / Blog
 * 12. Testimonials
 * 13. Instagram Feed
 * 14. Final CTA
 * 15. Footer
 *
 * To update content: edit /src/content/homepage.ts only.
 * To update design: edit the individual section component files.
 */

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/sections/HeroSection";
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
import {
  ExperienceStripSection,
  JournalSection,
  TestimonialsSection,
  InstagramSection,
  FinalCtaSection,
  FooterSection,
} from "@/components/sections/JournalSections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <PhilosophySection />
      <CuratedHotelsSection />
      <ExclusiveBenefitsSection />
      <VipAccessSection />
      <GivesBackSection />
      <ExperienceStripSection />
      <JournalSection />
      <TestimonialsSection />
      <InstagramSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
}
