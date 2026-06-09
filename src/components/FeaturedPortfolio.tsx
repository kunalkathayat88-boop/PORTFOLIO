import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import MagneticButton from "./MagneticButton";

export default function FeaturedPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Derive unique categories from static data
  const categories = ["All", "Digital Design", "Brand Identity", "Product Posters"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => 
        p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <section 
      id="portfolio" 
      className="relative py-24 bg-[#EFEDE8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header section with categories */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#F5B23C] uppercase block mb-2">
              CLEAN DESIGN
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-black uppercase tracking-tight">
              INSTAGRAM POSTERS
            </h2>
          </div>

          {/* Minimal filters tab block */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {categories.map((cat) => (
              <MagneticButton key={cat} tolerance={0.2}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-black text-white border-black shadow"
                      : "bg-white/40 text-black/60 border-black/10 hover:border-black hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* 12-Column Grid Layout with Massive "portfolio" letters layered behind */}
        <div className="relative min-h-[700px] z-10">
          
          {/* Overlapping Absolute text behind portfolio cards as seen in the custom file */}
          <div className="absolute top-[28%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
            <h3 className="text-[12vw] sm:text-[14vw] font-display font-black text-black/[0.07] leading-none tracking-tighter uppercase whitespace-nowrap">
              portfolio
            </h3>
          </div>

          {/* Cards gallery */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-10 md:gap-y-12 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                // Determine responsive grid layout to mimic the reference perfectly
                let gridSpan = "md:col-span-6 lg:col-span-4";
                if (project.id === "craviq-soup-bowl") {
                  gridSpan = "md:col-span-6 lg:col-span-4";
                }

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                    className={`${gridSpan} group`}
                    data-cursor="view"
                  >
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full cursor-pointer rounded-[32px] focus:outline-none focus:ring-2 focus:ring-[#F5B23C]/50"
                      id={`poster-link-${project.id}`}
                    >
                      {/* Artistic Card Container */}
                      <div className="flex flex-col h-full bg-white/20 p-3 rounded-[32px] border border-black/5 hover:border-[#F5B23C]/30 hover:bg-white/40 transition-all duration-500 shadow-sm">
                        
                        {/* Image Frame */}
                        <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-black/5">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/15 transition-all duration-500" />
                          
                          {/* Hover Quick Indicator arrow on image */}
                          <div className="absolute bottom-4 right-4 bg-[#F5B23C] w-10 h-10 rounded-full flex items-center justify-center text-black font-bold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow">
                            ↗
                          </div>

                          {/* Top-left category tag inside thumbnail */}
                          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#F7F6F2] font-mono text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {project.category}
                          </div>
                        </div>

                        {/* Content block */}
                        <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest">{project.year}</p>
                            <h4 className="text-lg font-display font-semibold text-black tracking-tight group-hover:text-[#F5B23C] transition-colors duration-200">
                              {project.title}
                            </h4>
                          </div>
                          <span className="text-xs font-mono text-black/50 pr-1">
                            ●
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Slide-Up Detailed Showcase Overlay Drawer */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            id="portfolio-exhibitions-drawer"
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#F7F6F2] w-full max-w-4xl rounded-[40px] overflow-hidden shadow-2xl relative block"
              initial={{ y: 100, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              
              {/* Top Banner on Drawer */}
              <div className="relative h-[250px] sm:h-[350px] bg-neutral-950">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close absolute anchor inside Drawer */}
                <button
                  id="close-drawer-btn"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black hover:bg-[#F5B23C] cursor-pointer flex items-center justify-center transition-all duration-300 shadow justify-center"
                >
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main Contents */}
              <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left Meta Specs */}
                <div className="md:col-span-4 space-y-6 md:border-r border-black/10 md:pr-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-black/40 uppercase block">PROJECT INCEPTION</span>
                    <p className="text-sm font-semibold text-black">{activeProject.year}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-black/40 uppercase block">CLUSTERING DIVISION</span>
                    <p className="text-sm font-semibold text-[#F5B23C] uppercase tracking-wide">{activeProject.category}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-black/40 uppercase block">CREATIVE FOCUS</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeProject.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono bg-black/5 text-black border border-black/10 px-2.5 py-1 rounded-full uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Core Story Content */}
                <div className="md:col-span-8 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-black uppercase tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70 font-sans leading-relaxed">
                      {activeProject.description}
                    </p>
                    <p className="text-xs text-black/50 leading-relaxed font-mono italic">
                      "Analyzing the physical geometry, visual rhythm, and structural shadows of the scene to provoke a deep emotional footprint inside modern museum galleries."
                    </p>
                  </div>

                  {/* Return button */}
                  <div className="pt-6 border-t border-black/5 flex justify-end">
                    <MagneticButton tolerance={0.2}>
                      <button
                        onClick={() => setActiveProject(null)}
                        className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-[#F5B23C] hover:text-black font-semibold text-xs uppercase tracking-wider transition-colors duration-300"
                      >
                        Back to Gallery Archive
                      </button>
                    </MagneticButton>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
