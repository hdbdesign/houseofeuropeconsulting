import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Layout Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 
import MobileNav from "@/components/layout/MobileNav";
import ScrollToTop from "@/components/layout/ScrollToTop";

function App() {
  const [location] = useLocation();
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Switch location={location} key={location}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </AnimatePresence>
          </main>
          
          <Footer />
          <MobileNav />
          <ScrollToTop />
        </div>
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
