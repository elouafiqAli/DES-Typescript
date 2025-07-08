import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Tutorial from "@/pages/tutorial";
import GitHubPagesSetup from "@/pages/github-pages-setup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Tutorial} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/setup" component={GitHubPagesSetup} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;