import React from "react";
import MagneticButton from "./MagneticButton";

interface ContactProps {
  onNavClick: (sectionId: string) => void;
}

export default function ContactAndFooter({ onNavClick }: ContactProps) {
  return (
    <section 
      id="contact" 
      className="relative pt-24 bg-[#000000] text-[#F7F6F2] overflow-hidden"
    >
      {/* Decorative vertical rails */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-white/[0.04] pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-white/[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Typography Call to Action */}
        <div className="text-center md:text-left space-y-4 mb-20">
          <span className="text-xs font-mono tracking-widest text-[#F5B23C] uppercase block">
            INITIATE WORK
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black leading-[0.95] tracking-tighter uppercase select-none">
            LET'S CREATE <br />
            <span className="text-[#F5B23C]">SOMETHING EXTRAORDINARY.</span>
          </h2>
        </div>

        {/* Info columns block layout */}
        <div className="pb-20 border-b border-[#F7F6F2]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-white/30 block uppercase tracking-widest">COMMISSION INBOX</span>
              <a href="mailto:kunalkathayat88@gmail.com" className="text-base sm:text-lg font-semibold text-white hover:text-[#F5B23C] transition-colors duration-200">
                kunalkathayat88@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-white/30 block uppercase tracking-widest">SECURE CHAT LINE</span>
              <a href="tel:+8800302889" className="text-base sm:text-lg font-semibold text-white/80 hover:text-[#F5B23C] transition-colors duration-200">
                +8800302889
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-white/30 block uppercase tracking-widest">ADDRESS</span>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">467/8 parvatiya colony , faridabad</p>
            </div>

          </div>
        </div>

        {/* Luxury Museum-Inspired Footer block */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          {/* Footer Logo */}
          <button
            onClick={() => onNavClick("home")}
            className="flex items-center gap-1.5 focus:outline-none cursor-pointer group"
          >
            <div className="flex items-center gap-1">
              <div className="w-4.5 h-4.5 rounded-full bg-white group-hover:scale-110 transition-transform" />
              <div className="w-4.5 h-4.5 rounded-full bg-white group-hover:scale-110 transition-transform" />
              <div className="w-1.5 h-4.5 bg-white rounded-sm group-hover:scale-y-110 transition-transform" />
            </div>
          </button>

          {/* Footer Links with standard layout */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-widest">
            {["home", "about", "portfolio", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => onNavClick(section)}
                className="text-[#F7F6F2]/60 hover:text-[#F5B23C] transition-colors duration-200"
              >
                {section}
              </button>
            ))}
          </div>

          <p className="text-xs font-mono text-white/30 hidden md:block">
            © 2026 KUNAL. ALL SECRETS RECORDED.
          </p>
        </div>

        {/* Giant Bottom Marquee text 'designs' as requested */}
        <div className="w-full text-center pb-8 select-none pointer-events-none opacity-10 overflow-hidden">
          <h4 className="text-[14vw] sm:text-[16vw] font-display font-black text-white hover:text-[#F5B23C] transition-colors duration-1000 leading-none tracking-tighter uppercase whitespace-nowrap">
            designs
          </h4>
        </div>

      </div>

    </section>
  );
}
