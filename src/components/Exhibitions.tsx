import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EXHIBITIONS } from "../data";
import { Exhibition } from "../types";
import MagneticButton from "./MagneticButton";

export default function Exhibitions() {
  const [expandedExh, setExpandedExh] = useState<string | null>(null);
  const [checkoutExh, setCheckoutExh] = useState<Exhibition | null>(null);
  const [email, setEmail] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [bookedTicket, setBookedTicket] = useState<{
    id: string;
    exh: Exhibition;
    buyerName: string;
    buyerEmail: string;
    serial: string;
    date: string;
  } | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedExh === id) {
      setExpandedExh(null);
    } else {
      setExpandedExh(id);
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutExh || !ticketName || !email) return;

    // Simulate real ticket booking structure
    const serialNum = `VP-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookedTicket({
      id: Math.random().toString(35).substring(2, 9),
      exh: checkoutExh,
      buyerName: ticketName,
      buyerEmail: email,
      serial: serialNum,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    });

    setCheckoutExh(null);
    setTicketName("");
    setEmail("");
  };

  return (
    <section 
      id="exhibitions" 
      className="relative py-24 bg-[#F7F6F2] overflow-hidden"
    >
      {/* Scroll Marquee indicator */}
      <div className="w-full overflow-hidden whitespace-nowrap flex leading-none py-2 border-b border-black/10 select-none bg-black mb-16">
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ ease: "linear", duration: 28, repeat: Infinity }}
          className="flex gap-8 uppercase text-6xl sm:text-7xl md:text-8xl font-display font-black text-[#F7F6F2]/20 tracking-wider"
        >
          <span>exhibitions . exhibitions . exhibitions . exhibitions .</span>
          <span>exhibitions . exhibitions . exhibitions . exhibitions .</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-15">
        
        {/* Intro */}
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-mono tracking-widest text-[#F5B23C] uppercase block mb-2">
            CHRONICLE TIMELINE
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-black uppercase tracking-tight">
            MUSEUM & GALLERY APPEARANCES
          </h2>
          <p className="text-sm text-black/60 font-sans mt-3 leading-relaxed">
            Chronological log of appearances, physical art displays, interactive projection rooms, and custom creative direction installations worldwide. Click any listing to expand descriptive guides.
          </p>
        </div>

        {/* Chronological List of Entries matching screen visual perfectly */}
        <div className="border-t border-black/10 divide-y divide-black/15">
          {EXHIBITIONS.map((exh) => {
            const isExpanded = expandedExh === exh.id;

            return (
              <div 
                key={exh.id}
                className="group relative transition-all duration-300"
              >
                {/* Visual hover background expansion */}
                <div className="absolute inset-0 bg-[#F5B23C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Main line header */}
                <div 
                  className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 px-4 gap-6 cursor-pointer relative"
                  onClick={() => toggleExpand(exh.id)}
                >
                  
                  {/* Left part: Index & Large Bold Title */}
                  <div className="flex items-start gap-6 lg:gap-10 lg:w-1/2">
                    <span className="text-xs font-mono text-black/40 mt-1.5 font-bold">
                      {exh.index}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-2xl sm:text-3xl font-display font-black italic tracking-tight text-black group-hover:text-black leading-tight select-none">
                        {exh.title}
                      </h4>
                      <p className="text-xs font-mono text-black/40 block lg:hidden uppercase tracking-widest mt-1">
                        {exh.venue}
                      </p>
                    </div>
                  </div>

                  {/* Center venue & dates info (only on large displays) */}
                  <div className="hidden lg:block lg:w-1/3">
                    <p className="text-sm font-sans font-semibold text-black/70">
                      {exh.venue}
                    </p>
                    <p className="text-xs font-mono text-black/40 mt-1 uppercase">
                      {exh.date}
                    </p>
                  </div>

                  {/* Right part: Action buttons */}
                  <div className="flex items-center gap-3 ml-12 lg:ml-0 relative z-20">
                    <MagneticButton tolerance={0.2}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCheckoutExh(exh);
                        }}
                        data-cursor="buy"
                        className="px-5 py-2.5 rounded-full border border-black/60 bg-transparent text-black text-xs font-mono font-semibold uppercase hover:bg-black hover:text-white tracking-widest transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        Buy Ticket
                      </button>
                    </MagneticButton>
                    
                    {/* Expand guide marker */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exh.id);
                      }}
                      className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 bg-white/40 focus:outline-[#F5B23C]"
                    >
                      <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        className="inline-block font-mono text-sm leading-none"
                      >
                        ＋
                      </motion.span>
                    </button>
                  </div>

                </div>

                {/* Animated expandable detailed description */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden bg-[#EFEDE8]/40 border-b border-black/10"
                    >
                      <div className="py-6 px-10 sm:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8 space-y-3">
                          <p className="text-xs font-mono tracking-wider text-[#F5B23C] font-semibold uppercase">EXHIBIT SYNOPSIS</p>
                          <p className="text-sm text-black/70 font-sans leading-relaxed">
                            {exh.details}
                          </p>
                        </div>
                        <div className="md:col-span-4 p-4 rounded-2xl bg-white border border-black/5 space-y-3 shadow-inner">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-black/50">ENTRY PRICE</span>
                            <span className="font-bold text-black">{exh.ticketPrice}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-black/50">ACCESS PERKS</span>
                            <span className="font-bold text-black">Q&A Session & Booklet</span>
                          </div>
                          <button
                            onClick={() => setCheckoutExh(exh)}
                            className="w-full text-center py-2 rounded-xl bg-black text-white hover:bg-[#F5B23C] hover:text-black font-semibold text-xs font-mono uppercase tracking-widest transition-colors duration-200"
                          >
                            Reserve Pass
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* Ticket Checkout Modal Dialog Sheet */}
      <AnimatePresence>
        {checkoutExh && (
          <motion.div
            id="ticket-modal"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black w-full max-w-md rounded-3xl overflow-hidden shadow-2xl p-8 space-y-6"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/40">CHECKOUT DIRECT</span>
                  <h3 className="text-xl font-display font-extrabold text-black uppercase">RESERVE ENTRY GAP</h3>
                </div>
                <button
                  onClick={() => setCheckoutExh(null)}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 focus:outline-[#F5B23C]"
                >
                  ✕
                </button>
              </div>

              {/* Seminar stats */}
              <div className="p-4 rounded-2xl bg-[#EFEDE8]/50 border border-black/5 space-y-2">
                <p className="text-xs font-mono text-black/40 uppercase">SEMINAR EXHIBITION</p>
                <p className="text-sm font-semibold font-display italic text-black leading-tight">{checkoutExh.title}</p>
                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-black/5 text-black/60">
                  <span>{checkoutExh.venue}</span>
                  <span className="text-black font-semibold">{checkoutExh.ticketPrice}</span>
                </div>
              </div>

              {/* Form elements */}
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-black/50 uppercase block">ATTENDEE NAME</label>
                  <input
                    type="text"
                    required
                    value={ticketName}
                    onChange={(e) => setTicketName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 border border-black/10 rounded-xl font-sans text-sm focus:outline-[#F5B23C] bg-black/[0.02]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-black/50 uppercase block">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 border border-black/10 rounded-xl font-sans text-sm focus:outline-[#F5B23C] bg-black/[0.02]"
                  />
                </div>

                {/* Submitting items button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white hover:bg-[#F5B23C] hover:text-black rounded-xl font-mono text-xs uppercase font-bold tracking-widest transition-colors duration-200 shadow-md"
                >
                  CONFIRM & GENERATE ACCESS PASS
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated Ticket Success Overlay */}
      <AnimatePresence>
        {bookedTicket && (
          <motion.div
            id="ticket-generation-success"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#000000] text-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              
              {/* Ticket cutouts on sides */}
              <div className="absolute top-[40%] -left-4 w-8 h-8 rounded-full bg-[#EFEDE8]/10 mix-blend-difference" />
              <div className="absolute top-[40%] -right-4 w-8 h-8 rounded-full bg-[#EFEDE8]/10 mix-blend-difference" />

              {/* Receipt Body */}
              <div className="p-8 space-y-6">
                
                {/* Logo and title */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#F5B23C]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">KUNAL</span>
                </div>

                {/* Ticket Details */}
                <div className="space-y-4 pt-2">
                  <span className="text-[9px] font-mono bg-[#F5B23C] text-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Official Access Pass
                  </span>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-white/30 block uppercase">EXHIBIT</span>
                    <h4 className="text-xl font-display font-black italic text-[#F5B23C] leading-tight leading-none uppercase">
                      {bookedTicket.exh.title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-white/30 block uppercase">HOLDER</span>
                      <p className="text-xs font-sans font-semibold text-white truncate">{bookedTicket.buyerName}</p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-white/30 block uppercase">LOCATION</span>
                      <p className="text-xs font-sans text-white/80">{bookedTicket.exh.venue.split(",")[0]}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-white/30 block uppercase">DATE</span>
                      <p className="text-xs font-mono text-white/80">{bookedTicket.exh.date}</p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-white/30 block uppercase">TICKET ID</span>
                      <p className="text-xs font-mono text-white/80">{bookedTicket.serial}</p>
                    </div>
                  </div>
                </div>

                {/* Barcode/QR Code visual representation */}
                <div className="border-t border-dashed border-white/20 pt-6 flex flex-col items-center gap-3">
                  {/* Decorative Barcode */}
                  <div className="h-10 w-full flex items-center justify-between bg-white/5 p-2 rounded-lg opacity-85">
                    {Array.from({ length: 42 }).map((_, i) => {
                      const widthValue = i % 3 === 0 ? "w-1.5" : i % 5 === 0 ? "w-[1px]" : "w-[3px]";
                      const opac = i % 7 === 0 ? "opacity-30" : "opacity-100";
                      return (
                        <div 
                          key={i} 
                          className={`h-full bg-white rounded-sm ${widthValue} ${opac}`} 
                        />
                      );
                    })}
                  </div>
                  <span className="text-[8px] font-mono text-white/40 tracking-widest">{bookedTicket.id.toUpperCase()}-{bookedTicket.serial}</span>
                </div>

                {/* Close Success Modal button */}
                <button
                  onClick={() => setBookedTicket(null)}
                  className="w-full py-3 mt-4 bg-white text-black hover:bg-[#F5B23C] hover:text-black rounded-2xl font-mono text-xs uppercase font-bold tracking-widest transition-colors duration-200 text-center"
                >
                  Download & Close Stub
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
