import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LandJourneys from "./pages/LandJourneys";
import SafariWildlife from "./pages/SafariWildlife";
import EuropeanImmersions from "./pages/EuropeanImmersions";
import ExpeditionTravel from "./pages/ExpeditionTravel";
import CulturalJourneys from "./pages/CulturalJourneys";
import Book from "./pages/Book";

function Router() {
  return (
    <Switch>
      {/* Core pages */}
      <Route path={"/"} component={Home} />

      {/* Land Journeys — parent + sub-pages */}
      <Route path={"/land-journeys"} component={LandJourneys} />
      <Route path={"/land-journeys/safari"} component={SafariWildlife} />
      <Route path={"/land-journeys/europe"} component={EuropeanImmersions} />
      <Route path={"/land-journeys/expedition"} component={ExpeditionTravel} />
      <Route path={"/land-journeys/cultural"} component={CulturalJourneys} />
      <Route path={"/book"} component={Book} />

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
