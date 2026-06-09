import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set real-time updates for location metadata
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(now.toLocaleTimeString("en-US", options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? "py-3 bg-[#F7F6F2]/85 backdrop-blur-md border-b border-black/5 shadow-sm" 
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Custom Logo (Perfect replica from user image) */}
          <button
            id="brand-logo-btn"
            onClick={() => onNavClick("home")}
            className="flex items-center gap-1.5 focus:outline-none cursor-pointer group"
          >
            <div className="flex items-center gap-1">
              <motion.div 
                className="w-4.5 h-4.5 rounded-full bg-black"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <motion.div 
                className="w-4.5 h-4.5 rounded-full bg-black"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.05 }}
              />
              <motion.div 
                className="w-1.5 h-4.5 bg-black rounded-sm"
                whileHover={{ scaleY: 1.25 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.1 }}
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <MagneticButton key={item.id} tolerance={0.2}>
                  <button
                    id={`nav-item-${item.id}`}
                    onClick={() => onNavClick(item.id)}
                    className="relative py-1 text-sm font-medium text-black focus:outline-none cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    <span 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </MagneticButton>
              );
            })}
          </div>

          {/* Location / Local Time container */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-black/60">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B23C] animate-pulse" />
              <span>Faridabad, India</span>
              <span className="text-black/30">|</span>
              <span className="text-black">{localTime || "16:03:39"}</span>
            </div>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none group"
            aria-label="Toggle mobile menu"
          >
            <span className="w-6 h-[2px] bg-black transition-all duration-300 group-hover:w-4 align-self-end" />
            <span className="w-5 h-[2px] bg-black transition-all duration-300 self-end" />
            <span className="w-6 h-[2px] bg-black transition-all duration-300" />
          </button>
        </div>
      </motion.nav>

      {/* Screen Overlay Menu for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="fullscreen-mobile-menu"
            className="fixed inset-0 bg-[#F7F6F2] z-50 flex flex-col justify-between p-8 md:p-16 h-svh"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Header in mobile overlay */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <div className="w-1.5 h-4 bg-black rounded-sm"></div>
              </div>

              {/* Close Button */}
              <button
                id="close-mobile-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 focus:outline-[#F5B23C]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Huge Navigation items */}
            <div className="flex flex-col gap-6 my-auto">
              <span className="text-[10px] font-mono tracking-widest text-black/40 uppercase">INDEX</span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <button
                      id={`mobile-nav-${item.id}`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => onNavClick(item.id), 350);
                      }}
                      className="text-4xl sm:text-5xl font-display font-extrabold text-black hover:text-[#F5B23C] text-left leading-none tracking-tight transition-colors duration-200 uppercase"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer metadata in mobile menu overlay */}
            <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-mono text-black/50">© 2026 KUNAL. ALL RIGHTS SECURED.</p>
              <div className="flex items-center gap-4 text-xs font-mono text-black/60">
                <span>FARIDABAD, INDIA</span>
                <span>|</span>
                <span>{localTime || "16:03:39"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
