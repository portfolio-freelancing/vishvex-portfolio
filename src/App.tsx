import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoachingAutomation from "./pages/CoachingAutomation";
import RealEstateAutomation from "./pages/RealEstateAutomation";
import ClinicAutomation from "./pages/ClinicAutomation";
import { useDomainRedirect } from "./hooks/useDomainRedirect";

const queryClient = new QueryClient();

const App = () => {
  useDomainRedirect();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/coaching-automation" element={<CoachingAutomation />} />
            <Route path="/real-estate-automation" element={<RealEstateAutomation />} />
            <Route path="/clinic-automation" element={<ClinicAutomation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
