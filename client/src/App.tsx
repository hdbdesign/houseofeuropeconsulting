import { Switch, Route, useLocation, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Header } from "./components/layout/Header";

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
import PortfolioPage from "./pages/Portfolio";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/not-found";

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
                  <Route path="/portfolio" component={PortfolioPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
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
