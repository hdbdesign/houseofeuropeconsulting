import { Switch, Route, useLocation, Router, useRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Header } from "./components/layout/Header";
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/Terms';
import CookiesPage from './pages/Cookies';

// Initialize EmailJS
emailjs.init({
  publicKey: 'YOUR_PUBLIC_KEY',
});

// Layout Components
import Footer from "./components/layout/Footer"; 
import MobileNav from "./components/layout/MobileNav";
import MobileHeader from "./components/layout/MobileHeader";
import ScrollToTop from "./components/layout/ScrollToTop";

// Pages
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/not-found";
import ExpansionService from "./pages/services/expansion";
import MarketService from "./pages/services/market";
import MigrationService from "./pages/services/migration";
import CareerService from "./pages/services/career";
import DigitalService from "./pages/services/digital";
import ResearchService from "./pages/services/research";
import BusinessTranslationService from "./pages/services/business-translation";
import FairRepresentationService from "./pages/services/fair-representation";

// Styles
import "./styles/globals.css";

export default function App() {
  const [location] = useLocation();
  
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Switch location={location} key={location}>
                  <Route path="/" component={HomePage} />
                  <Route path="/services" component={ServicesPage} />
                  <Route path="/services/expansion" component={ExpansionService} />
                  <Route path="/services/market" component={MarketService} />
                  <Route path="/services/migration" component={MigrationService} />
                  <Route path="/services/career" component={CareerService} />
                  <Route path="/services/digital" component={DigitalService} />
                  <Route path="/services/research" component={ResearchService} />
                  <Route path="/services/business-translation" component={BusinessTranslationService} />
                  <Route path="/services/fair-representation" component={FairRepresentationService} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/privacy" component={PrivacyPage} />
                  <Route path="/terms" component={TermsPage} />
                  <Route path="/cookies" component={CookiesPage} />
                  <Route path="*" component={NotFoundPage} />
                </Switch>
              </AnimatePresence>
            </main>
            <Footer />
            <MobileNav />
            <MobileHeader />
            <ScrollToTop />
          </div>
          <Toaster />
        </LanguageProvider>
      </QueryClientProvider>
    </Router>
  );
}
