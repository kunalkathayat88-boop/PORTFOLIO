import { motion } from "motion/react";

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-8 h-8 pointer-events-none z-10 ${className}`}>
    <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-black/30 -translate-y-1/2" />
    <div className="absolute top-0 left-1/2 w-[1px] h-8 bg-black/30 -translate-x-1/2" />
    <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-black/35 rounded-full -translate-x-1/2 -translate-y-1/2" />
  </div>
);

export default function About() {
  const skilsCategories = [
    {
      title: "Brand & Visual Design",
      items: ["Brand Identity Design", "Logo Design", "Typography", "Visual Systems"]
    },
    {
      title: "Digital Design",
      items: ["Social Media Creatives", "Marketing Campaigns", "Poster & Banner Design", "Content Design"]
    },
    {
      title: "Visual Storytelling",
      items: ["Cinematography (Learning)", "Composition & Framing", "Lighting Fundamentals", "Creative Direction"]
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 bg-[#000000] text-[#F7F6F2] overflow-hidden"
    >
      
      {/* 1. Large scrolling text marquee: about . about . about . about . */}
      <div className="w-full overflow-hidden whitespace-nowrap flex leading-none py-2 border-b border-[#F7F6F2]/10 mb-16 select-none bg-black">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ ease: "linear", duration: 32, repeat: Infinity }}
          className="flex gap-8 uppercase text-6xl sm:text-7xl md:text-8xl font-display font-black text-[#F7F6F2]/10 select-none tracking-widest"
        >
          <span>about . about . about . about . about . about . about . about .</span>
          <span>about . about . about . about . about . about . about . about .</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Asymmetrical layout - Grid split screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Animated Portrait frame with abstract radial backplates & crosshairs */}
          <div className="lg:col-span-5 relative flex justify-center py-8">
            
            {/* Technical Crosshair indicators matching image */}
            <Crosshair className="-top-4 -left-4 text-[#F7F6F2]/20" />
            <Crosshair className="-top-4 -right-4 text-[#F7F6F2]/20" />
            <Crosshair className="-bottom-4 -left-4 text-[#F7F6F2]/20" />
            <Crosshair className="-bottom-4 -right-4 text-[#F7F6F2]/20" />
            
            {/* Left and right guide lines */}
            <div className="absolute top-12 -left-6 bottom-12 w-[1px] bg-[#F7F6F2]/10" />
            <div className="absolute top-12 -right-6 bottom-12 w-[1px] bg-[#F7F6F2]/10" />
            <div className="absolute left-10 right-10 top-1/2 h-[1px] bg-[#F7F6F2]/10 -z-0" />
            
            {/* Abstract radial petal element radiating behind portrait */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-[#F7F6F2]/5 bg-[#F7F6F2]/[0.01] -z-0 animate-[spin_100s_linear_infinite]" />
            <div className="absolute w-[280px] h-[280px] rounded-full border-2 border-dashed border-[#F7F6F2]/10 -z-0 animate-[spin_60s_linear-reverse_infinite]" />

            {/* Main Rounded Box for B&W Portrait */}
            <motion.div
              className="relative w-full max-w-[340px] aspect-square rounded-full overflow-hidden bg-[#EFEDE8]/10 border-2 border-[#F7F6F2]/20 z-10 shadow-2xl group cursor-crosshair"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://i.ibb.co/Q3Hqh3gZ/Whats-App-Image-2026-06-09-at-5-31-29-AM.jpg"
                alt="Kunal portrait"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 group-hover:rotate-1 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay shadow tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

          {/* Right Side: Narrative Biography, Philosophy & Complex Skills Grid */}
          <div className="lg:col-span-7 space-y-10 z-10">
            
            {/* Split Title */}
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#F5B23C] uppercase block">
                CREATIVE DESIGNS
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight uppercase tracking-tight text-[#F7F6F2]">
                TURNING IDEAS INTO <br />
                VISUAL EXPERIENCES.
              </h2>
            </div>

            {/* Interactive Biography */}
            <div className="space-y-6 font-sans text-[#EFEDE8]/80 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                I create clean, meaningful, and visually engaging designs for brands and businesses. From social media campaigns to branding and digital content, my goal is to craft visuals that tell stories and leave lasting impressions. Alongside design, I am actively learning cinematography and visual storytelling.
              </p>
            </div>

            {/* Experience timeline info pills */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-[#F7F6F2]/10">
              <div>
                <p className="text-xs font-mono text-[#F7F6F2]/40">ROLE</p>
                <p className="text-sm font-medium text-white">Graphic Designer & Visual Storyteller</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#F7F6F2]/40">SPATIAL BASE</p>
                <p className="text-sm font-medium text-white">Faridabad, Haryana, India</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#F7F6F2]/40">CREATIVE STYLE</p>
                <p className="text-sm font-medium text-white text-[#F5B23C]">Minimal • Modern • Purpose-Driven</p>
              </div>
            </div>

            {/* Modular Skills Breakdown */}
            <div className="space-y-6 pt-6 border-t border-[#F7F6F2]/10">
              <p className="text-xs font-mono tracking-widest text-[#F7F6F2]/40 uppercase">
                PROFESSIONAL CAPABILITIES
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skilsCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <p className="text-xs font-mono text-[#F5B23C] font-semibold uppercase">{cat.title}</p>
                    <ul className="space-y-1.5 text-xs text-[#EFEDE8]/70 font-mono">
                      {cat.items.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#F5B23C]" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
