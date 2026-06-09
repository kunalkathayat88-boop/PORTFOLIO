import { motion } from "motion/react";
import { AWARDS } from "../data";

export default function AwardsAndRecognition() {
  return (
    <section id="exhibitions-awards" className="relative py-20 bg-[#EFEDE8] overflow-hidden">
      
      {/* Decorative architectural grid guides */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/[0.04] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Awards Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#F5B23C] uppercase block mb-2">
            RECOGNITION METRIC
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-black uppercase tracking-tight">
            HONORS & SELECTIONS
          </h2>
          <p className="text-sm text-black/60 font-sans mt-3 leading-relaxed max-w-xl">
            Elegant chronicle detailing annual studio awards, independent short film trophies, and digital design system features granted by international agencies.
          </p>
        </div>

        {/* Beautiful Timeline layout */}
        <div className="relative border-l border-black/10 ml-4 sm:ml-8 pl-8 md:pl-16 space-y-12">
          
          {/* Glowing animated visual bullet connector lines */}
          <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#F5B23C] via-black/20 to-black/5" />

          {AWARDS.map((aw, idx) => (
            <motion.div
              key={aw.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline marker node dot */}
              <div className="absolute -left-[37px] sm:-left-[53px] md:-left-[85px] top-1.5 w-4 h-4 rounded-full border-2 border-black bg-[#EFEDE8] group-hover:bg-[#F5B23C] group-hover:border-[#F5B23C] group-hover:scale-125 transition-all duration-300" />
              
              {/* Timeline segment label */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                
                {/* Year tag */}
                <span className="text-sm font-mono font-bold text-black bg-[#F5B23C]/20 border border-[#F5B23C]/40 px-3 py-1 rounded-full w-max text-center self-start">
                  {aw.year}
                </span>

                {/* Organization title */}
                <span className="text-xs font-mono text-black/40 uppercase tracking-widest block sm:inline">
                  {aw.organization}
                </span>

              </div>

              {/* Award descriptive info block */}
              <div className="mt-3">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-black uppercase tracking-tight group-hover:text-[#F5B23C] transition-colors duration-200 leading-tight">
                  {aw.title}
                </h4>
                <p className="text-xs sm:text-sm text-black/60 font-sans mt-1.5">
                  Honored for: <span className="font-semibold text-black">{aw.category}</span>
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
