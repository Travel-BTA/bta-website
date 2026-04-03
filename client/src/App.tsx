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
import OurPeople from "@/pages/OurPeople";
import CustomItineraries from "@/pages/CustomItineraries";
import JulieRose from "@/pages/advisors/JulieRose";
import Journal from "@/pages/Journal";
import BlogPost from "@/pages/BlogPost";
import MediaManager from "@/pages/MediaManager";
import PhilanthropicInitiatives from "./pages/PhilanthropicInitiatives";

function Router() {
  return (
    <Switch>
      {/* Core pages */}
      <Route path={"/"} component={HomeV2} />

      {/* Land Journeys — parent + sub-pages */}
      <Route path={"/land-journeys"} component={LandJourneys} />
      <Route path={"/land-journeys/safari"} component={SafariWildlife} />
      <Route path={"/land-journeys/europe"} component={EuropeanImmersions} />
      <Route path={"/land-journeys/expedition"} component={ExpeditionTravel} />
      <Route path={"/land-journeys/cultural"} component={CulturalJourneys} />
      <Route path={"/book"} component={Book} />
      <Route path={"/about"} component={About} />
      {/* Merged from boutique-travel-advisors repo */}
      {/* HomeLegacy — original BTA project homepage, kept at /home-legacy */}
      <Route path={"/home-legacy"} component={HomeLegacy} />
      {/* Cruise pages */}
      <Route path={"/cruises"} component={CruisesHub} />
      <Route path={"/cruises/luxury-ocean"} component={LuxuryOcean} />
      <Route path={"/cruises/premium-ocean"} component={PremiumOcean} />
      <Route path={"/cruises/river"} component={RiverCruises} />
      <Route path={"/cruises/expedition"} component={ExpeditionCruises} />
      <Route path={"/cruises/partners"} component={PartnerDirectory} />
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
      {/* Philanthropic Initiatives */}
      <Route path={"/philanthropic-initiatives"} component={PhilanthropicInitiatives} />

      {/* Fallback */}
      <Route path={"/404"} component={NotFound} />
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
