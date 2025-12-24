import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/CookieConsent";
import Home from "@/pages/Home";
import VehicleFleet from "@/pages/VehicleFleet";
import GlassWraps from "@/pages/GlassWraps";
import Signs from "@/pages/Signs";
import CNCLetters from "@/pages/CNCLetters";
import Configurator from "@/pages/Configurator";
import News from "@/pages/News";
import Team from "@/pages/Team";
import Shop from "@/pages/Shop";
import Checkout from "@/pages/Checkout";
import Upload from "@/pages/Upload";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vehicle-fleet" component={VehicleFleet} />
      <Route path="/glass-wraps" component={GlassWraps} />
      <Route path="/signs" component={Signs} />
      <Route path="/cnc-letters" component={CNCLetters} />
      <Route path="/configurator" component={Configurator} />
      <Route path="/cocreate" component={News} />
      <Route path="/team" component={Team} />
      <Route path="/shop" component={Shop} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/upload" component={Upload} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
