import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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

function Router() {
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
      {/* Land Journeys sub-pages */}
      <Route path={"/custom-itineraries"} component={CustomItineraries} />
      {/* Journal / Blog */}
      <Route path={"/journal"} component={Journal} />
      <Route path={"/journal/:slug"} component={BlogPost} />
      {/* Advisor profile pages */}
      <Route path={"/advisors/julie-rose"} component={JulieRose} />
      {/* Admin */}
      <Route path={"/admin/media"} component={MediaManager} />
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
      {/* Fallback */}
      <Route path={"/404"} component={NotFound} />
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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
