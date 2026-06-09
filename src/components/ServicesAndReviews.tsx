import { motion } from "motion/react";
import { SERVICES } from "../data";

export default function ServicesAndReviews() {

  return (
    <section id="services" className="relative py-24 bg-[#E5E5E5] overflow-hidden">
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-black/[0.04] pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-black/[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Creative Services Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-black uppercase tracking-tight">
            CREATIVE DESIGNS & VALUES
          </h2>
        </div>

        {/* Dynamic large cards layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 rounded-[36px] border border-black/5 hover:border-[#F5B23C]/50 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-[230px] relative group"
            >
              {/* Highlight background flash */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F5B23C]/[0.02] rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Visual number guide & title */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-black/30 font-bold">
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#E5E5E5]/50 flex items-center justify-center text-black/60 group-hover:bg-[#F5B23C]/20 group-hover:text-black transition-colors duration-300 font-bold">
                    →
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-black tracking-tight mb-3">
                  {srv.title}
                </h3>
              </div>

              {/* Bullet details expanded on hover */}
              <div className="border-t border-black/5 pt-4">
                <ul className="flex flex-wrap gap-1.5">
                  {srv.list.slice(0, 3).map((item, id) => (
                    <span 
                      key={id}
                      className="text-[9px] font-mono bg-[#E5E5E5]/60 text-black/70 border border-black/5 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:bg-[#F5B23C]/10 group-hover:border-[#F5B23C]/30 group-hover:text-black transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Showcase Area */}
        <div className="bg-[#000000] text-[#F7F6F2] rounded-[48px] p-8 sm:p-12 md:p-16 relative overflow-hidden border border-[#F7F6F2]/10 shadow-2xl">
          
          {/* Abstract pattern details */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#F5B23C]/10 to-transparent pointer-events-none -z-0" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Title */}
            <div className="lg:col-span-4">
              <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase leading-tight tracking-tight text-[#F7F6F2]">
                EXPERIENCE
              </h3>
            </div>

            {/* Right side: Bio / Internship experience description */}
            <div className="lg:col-span-8">
              <p className="text-[#EFEDE8]/90 text-sm sm:text-base md:text-lg font-sans leading-relaxed font-light">
                I'm a creative and detail-oriented Graphic Designer with 3 months of professional internship experience, specializing in branding, social media design, marketing creatives, and visual communication. I enjoy transforming ideas into visually compelling designs that help brands connect with their audience and communicate their message effectively.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
