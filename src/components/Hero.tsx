import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center bg-[#F7F6F2] overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Massive Typography & Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Massive letters stacked */}
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-display font-black text-black leading-[0.8] tracking-tighter select-none uppercase">
                <span className="block">kunal</span>
              </h1>
            </motion.div>

            {/* Intro paragraph aligned like in mockup */}
            <motion.div
              className="mt-8 max-w-md ml-auto md:mr-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-sm md:text-base text-black/70 font-sans leading-relaxed">
                Creative and detail-oriented Graphic Designer with a passion for transforming ideas into impactful visual designs. Skilled in branding, social media creatives, poster design, marketing materials, and digital content creation. Proficient in Adobe Photoshop, Illustrator, InDesign, and Canva. Eager to contribute fresh ideas, strong design fundamentals, and a commitment to delivering high-quality work. Currently seeking opportunities to grow and collaborate in creative environments.
              </p>
            </motion.div>

            {/* Interactive CTA */}
            <motion.div 
              className="mt-10 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Call to Action Button */}
              <MagneticButton tolerance={0.25}>
                <button
                  id="hero-explore-cta"
                  onClick={onExploreClick}
                  data-cursor="pointer"
                  className="px-6 py-3 rounded-full bg-black text-white hover:bg-[#F5B23C] hover:text-black transition-all duration-300 font-sans font-semibold text-xs tracking-wider uppercase flex items-center gap-2 group shadow-sm cursor-pointer"
                >
                  Explore Showcase
                  <motion.span 
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    ⟶
                  </motion.span>
                </button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Large Featured Image Card Layout - Highly customized */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end z-0 mt-8 lg:mt-0">
          
          {/* Main Card with Background Accent Golden Yellow (#F5B23C) */}
          <motion.div
            id="hero-photo-wrapper"
            className="relative w-full max-w-[380px] aspect-[3/4]"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The behind accent element forming overlapping curves */}
            <div className="absolute inset-0 bg-[#F5B23C] rounded-[40px] transform rotate-3 scale-[1.02] -z-10" />

            {/* Main Rounded Box */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black/5 border border-black/10 shadow-lg">
              <img
                src="https://i.ibb.co/2YKHRsr8/Whats-App-Image-2026-06-08-at-9-47-14-PM-1.jpg"
                alt="Graphic Designer Kunal profile portrait"
                className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Decorative signature overlay line */}
              <div className="absolute top-6 left-6 pointer-events-none invert mix-blend-difference select-none opacity-80">
                <p className="font-serif italic text-2xl tracking-normal">Kunal</p>
              </div>

              {/* Rotating Globe Badge Top Right */}
              <motion.div 
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white cursor-help shadow-md"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-6 h-6 animate-[spin_10s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </motion.div>
            </div>

            {/* Overlapping small circular avatars / buttons below portrait */}
            <div className="absolute -bottom-8 left-6 flex items-center gap-3">
              {/* Small mini-avatar */}
              <motion.div 
                className="w-12 h-12 rounded-full border-2 border-[#F7F6F2] overflow-hidden shadow-md"
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <img 
                  src="https://i.ibb.co/2YKHRsr8/Whats-App-Image-2026-06-08-at-9-47-14-PM-1.jpg" 
                  alt="Kunal mini portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Second mini-graphic button (yellow camera item) */}
              <motion.div 
                className="w-12 h-12 rounded-full bg-[#F5B23C] flex items-center justify-center border-2 border-[#F7F6F2] text-black shadow-md"
                whileHover={{ scale: 1.15, rotate: -15, y: -4 }}
                data-cursor="pointer"
              >
                <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>

              {/* Black action circle (diagonal link arrow circle button) */}
              <motion.div
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center border-2 border-[#F7F6F2] cursor-pointer shadow-md"
                whileHover={{ scale: 1.15, y: -4 }}
                onClick={onExploreClick}
                data-cursor="view"
              >
                {/* Diagonal Arrow Icon ↗ */}
                <span className="text-lg font-bold">↗</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Artistic Crosshairs and subtle grid guides behind hero card for luxury look */}
          <div className="absolute top-10 right-10 w-24 h-24 border border-black/[0.03] rounded-full pointer-events-none -z-20" />
          <div className="absolute bottom-20 left-10 w-56 h-[1px] bg-black/[0.04] pointer-events-none -z-20" />
        </div>

      </div>
    </section>
  );
}
