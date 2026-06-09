import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedPortfolio from "./components/FeaturedPortfolio";
import ServicesAndReviews from "./components/ServicesAndReviews";
import ContactAndFooter from "./components/ContactAndFooter";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly for sticky navbar
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Setup active section detection using IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "portfolio", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Optimizes middle viewport detection
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-black font-sans antialiased selection:bg-[#F5B23C] selection:text-black relative">
      
      {/* Global Interactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky top Navigation Bar */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Content flow */}
      <main>
        
        {/* Hero Banner Area */}
        <Hero onExploreClick={() => handleNavClick("portfolio")} />

        {/* Narrative Biography / Philosophy Section */}
        <About />

        {/* Masonry Curated Gallery Showcase */}
        <FeaturedPortfolio />

        {/* Digital Expertise Provisions & Reviews block */}
        <ServicesAndReviews />

        {/* Project Contact form list & luxury footer mark */}
        <ContactAndFooter onNavClick={handleNavClick} />

      </main>

    </div>
  );
}
