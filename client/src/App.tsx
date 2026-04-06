import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import NavBar from "@/components/NavBar";
import { FooterSection } from "@/components/sections/JournalSections";
import HomeLegacy from "./pages/HomeLegacy";
import LandJourneys from "./pages/LandJourneys";
import SafariWildlife from "./pages/SafariWildlife";
import EuropeanImmersions from "./pages/EuropeanImmersions";
import ExpeditionTravel from "./pages/ExpeditionTravel";
import CulturalJourneys from "./pages/CulturalJourneys";
import Book from "@/pages/Book";
import About from "@/pages/About";
// Merged from boutique-travel-advisors repo
import HomeV2 from "@/pages/HomeV2";
import CruisesHub from "@/pages/CruisesHub";
import LuxuryOcean from "@/pages/cruises/LuxuryOcean";
import PremiumOcean from "@/pages/cruises/PremiumOcean";
import RiverCruises from "@/pages/cruises/RiverCruises";
import ExpeditionCruises from "@/pages/cruises/ExpeditionCruises";
import PartnerDirectory from "@/pages/cruises/PartnerDirectory";
import PrivateCharters from "@/pages/cruises/PrivateCharters";
import OurPeople from "@/pages/OurPeople";
import CustomItineraries from "@/pages/CustomItineraries";
import JulieRose from "@/pages/advisors/JulieRose";
import Journal from "@/pages/Journal";
import BlogPost from "@/pages/BlogPost";
import MediaManager from "@/pages/MediaManager";
import PhilanthropicInitiatives from "./pages/PhilanthropicInitiatives";
import PreferredPartners from "./pages/PreferredPartners";
import PartnerDetail from "./pages/PartnerDetail";
import PrivateJetCharters from "./pages/PrivateJetCharters";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import FamilyTravel from "./pages/FamilyTravel";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FulfillmentPolicy from "./pages/FulfillmentPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import HotelSpecialistProgram from "./pages/HotelSpecialistProgram";
import HotelCollectionApplication from "./pages/HotelCollectionApplication";
import AdvisorPrograms from "./pages/AdvisorPrograms";
import AdvisorRecruitment from "./pages/AdvisorRecruitment";
import EmployeeBenefit from "./pages/EmployeeBenefit";
import LuxuryTravelAgency from "./pages/LuxuryTravelAgency";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Press from "./pages/Press";
import PagesDashboard from "./pages/PagesDashboard";
import PageBuilder from "./pages/PageBuilder";
import LivePageRenderer from "./pages/LivePageRenderer";
import AdvisorPage from "./pages/advisors/AdvisorPage";
import TeamAdmin from "./pages/admin/TeamAdmin";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminLogin from "./pages/admin/AdminLogin";
import ContentEditor from "./pages/admin/ContentEditor";
import FAQ from "./pages/FAQ";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Core pages */}
      <Route path={"/"} component={HomeV2} />

      {/* Land Journeys. parent + sub-pages */}
      <Route path={"/land-journeys"} component={LandJourneys} />
      <Route path={"/land-journeys/safari"} component={SafariWildlife} />
      <Route path={"/land-journeys/europe"} component={EuropeanImmersions} />
      <Route path={"/land-journeys/expedition"} component={ExpeditionTravel} />
      <Route path={"/land-journeys/cultural"} component={CulturalJourneys} />
      <Route path={"/book"} component={Book} />
      <Route path={"/about"} component={About} />
      {/* HomeLegacy. original homepage kept for reference at /home-legacy */}
      <Route path={"/home-legacy"} component={HomeLegacy} />
      {/* Cruise pages */}
      <Route path={"/cruises"} component={CruisesHub} />
      <Route path={"/cruises/luxury-ocean"} component={LuxuryOcean} />
      <Route path={"/cruises/premium-ocean"} component={PremiumOcean} />
      <Route path={"/cruises/river"} component={RiverCruises} />
      <Route path={"/cruises/expedition"} component={ExpeditionCruises} />
      <Route path={"/cruises/partners"} component={PartnerDirectory} />
      <Route path={"/cruises/private-charters"} component={PrivateCharters} />
      {/* About sub-pages */}
      <Route path={"/about/our-people"} component={OurPeople} />
      <Route path={"/about/philanthropic-initiatives"} component={PhilanthropicInitiatives} />
      <Route path={"/hotel-specialist-program"} component={HotelSpecialistProgram} />
      <Route path={"/hotel-collection-application"} component={HotelCollectionApplication} />
      <Route path={"/advisor-programs"} component={AdvisorPrograms} />
      {/* WHY: New elite recruitment page — separate from /advisor-programs for A/B comparison */}
      <Route path={"/advisor-recruitment"} component={AdvisorRecruitment} />
      <Route path={"/employee-benefit-program"} component={EmployeeBenefit} />
      <Route path={"/luxury-travel-agency-bta"} component={LuxuryTravelAgency} />
      <Route path={"/contact-us"} component={ContactUs} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/press"} component={Press} />
      {/* Land Journeys sub-pages */}
      <Route path={"/custom-itineraries"} component={CustomItineraries} />
      {/* Journal / Blog */}
      <Route path={"/journal"} component={Journal} />
      <Route path={"/journal/:slug"} component={BlogPost} />
      {/* Advisor profile pages — static Julie Rose + dynamic template for all DB-driven advisors */}
      <Route path={"/advisors/julie-rose"} component={JulieRose} />
      <Route path={"/advisors/:slug"} component={AdvisorPage} />
      {/* Admin — /admin is the hub, all sub-routes are tools */}
      <Route path={"/admin"} component={AdminPanel} />
      <Route path={"/admin/media"} component={MediaManager} />
      <Route path={"/admin/team"} component={TeamAdmin} />
      <Route path={"/admin/login"} component={AdminLogin} />
      <Route path={"/admin/content"} component={ContentEditor} />
      {/* Page Builder — admin only, no NavBar/Footer wrapper needed (full-screen editor) */}
      <Route path={"/admin/pages"} component={PagesDashboard} />
      <Route path={"/admin/page-builder"} component={PageBuilder} />
      <Route path={"/admin/page-builder/:id"} component={PageBuilder} />
      {/* Live pages published via the Page Builder */}
      <Route path={"/pages/:slug"} component={LivePageRenderer} />
      {/* New pages */}
      <Route path={"/philanthropic-initiatives"} component={PhilanthropicInitiatives} />
      {/* Preferred Partners hub + individual partner pages */}
      <Route path={"/preferred-partners"} component={PreferredPartners} />
      <Route path={"/preferred-partners/:id"} component={PartnerDetail} />
      {/* Private Jet Charters */}
      <Route path={"/private-jet-charters"} component={PrivateJetCharters} />
      {/* Destinations & Experiences */}
      <Route path={"/destinations"} component={Destinations} />
      <Route path={"/experiences"} component={Experiences} />
      {/* Experience sub-pages */}
      <Route path={"/experiences/family-travel"} component={FamilyTravel} />
      {/* Fallback */}
      <Route path={"/404"} component={NotFound} />
      <Route path={"/terms-of-service"} component={TermsOfService} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
      <Route path={"/fulfillment-policy"} component={FulfillmentPolicy} />
      <Route path={"/cookie-policy"} component={CookiePolicy} />
      <Route path={"/faq"} component={FAQ} />
      {/*
        WHY: WordPress blog posts live at root-level slugs (e.g. /lake-garda-holidays-planning-guide).
        This catch-all route intercepts any unmatched path, treats it as a blog post slug,
        and passes it to BlogPost.tsx which fetches from the WordPress REST API.
        It must be LAST so it never intercepts named routes above.
      */}
      <Route path={"/:slug"} component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {/* WHY: NavBar and FooterSection are rendered here at the app level so every
              route automatically gets the header and footer without each page needing
              to import and render them individually. Pages that previously included
              NavBar/FooterSection directly still work because NavBar is fixed-position
              and FooterSection renders inline — duplicates are removed from those pages. */}
          <NavBar />
          <Router />
          <FooterSection />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
