import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Play, Sparkles, Shield, Zap } from "lucide-react";

interface HeroProps {
  onLearnMore: () => void;
  onOpenSandbox: () => void;
}

export default function Hero({ onLearnMore, onOpenSandbox }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-[#07090D] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Sophisticated Dark background with subtle brand gold ambient glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DFB74A] opacity-[0.03] blur-[150px] rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-white/2 opacity-[0.01] blur-[120px] rounded-full pointer-events-none" />
        
        {/* Sleek architectural grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Geographic location and badge line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[12px] uppercase tracking-[0.4em] text-[#DFB74A] font-semibold block">
            London &middot; New York &middot; India Hub
          </span>
        </motion.div>

        {/* Display heading with Inter font and gradient text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-10 gradient-text"
        >
          The AI Workforce Platform that handles <br className="hidden md:inline" />
          the brutal and hands over <span className="text-[#DFB74A]">the strategic.</span>
        </motion.h1>

        {/* Elegant sans font block */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl sans text-base sm:text-lg md:text-xl text-[#CBD5E1] font-light leading-relaxed mb-12 tracking-wide"
        >
          Serali deploys high-fidelity conversational digital employees designed on a proprietary, fully-encrypted agentic stack. Instantly eliminate operational waste.
        </motion.p>

        {/* Premium solid contrast CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-md mb-24"
        >
          <button
            onClick={onOpenSandbox}
            className="w-full sm:w-auto bg-white text-black px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#DFB74A] hover:text-[#07090D] transition-all duration-300 shadow-sm cursor-pointer"
          >
            Deploy AI Employee
          </button>
          <button
            onClick={onLearnMore}
            className="w-full sm:w-auto border border-white/20 px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-transparent hover:border-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play size={10} fill="white" />
            Explore Manifesto
          </button>
        </motion.div>

        {/* Transparent glass grid highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full max-w-5xl border-t border-white/5 pt-12"
        >
          <div className="glass p-8 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center md:items-start text-left">
            <div className="flex justify-between items-start w-full mb-8">
              <span className="text-[#94A3B8] text-[10px] sans font-bold uppercase tracking-widest">01 / Cost Arbitrage</span>
              <div className="w-2 h-2 bg-[#DFB74A]" />
            </div>
            <h3 className="sans text-2xl text-white font-semibold mb-3">90%–93% Reduction</h3>
            <p className="sans text-[#CBD5E1]/70 text-xs leading-relaxed font-light">
              Pay strictly for active talk minutes (£0.07/min) instead of paying for idle standby labor overhead.
            </p>
          </div>

          <div className="glass p-8 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center md:items-start text-left">
            <div className="flex justify-between items-start w-full mb-8">
              <span className="text-[#94A3B8] text-[10px] sans font-bold uppercase tracking-widest">02 / Enterprise Grade</span>
              <div className="w-2 h-2 bg-white/20" />
            </div>
            <h3 className="sans text-2xl text-white font-semibold mb-3">Bulletproof Security</h3>
            <p className="sans text-[#CBD5E1]/70 text-xs leading-relaxed font-light">
              Fully compliant with GDPR, SOC2, and HIPAA. Deep enterprise-grade E2E encryption and active PII redaction.
            </p>
          </div>

          <div className="glass p-8 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center md:items-start text-left">
            <div className="flex justify-between items-start w-full mb-8">
              <span className="text-[#94A3B8] text-[10px] sans font-bold uppercase tracking-widest">03 / Native Fluency</span>
              <div className="w-2 h-2 bg-white/20" />
            </div>
            <h3 className="sans text-2xl text-white font-semibold mb-3">Global Resonance</h3>
            <p className="sans text-[#CBD5E1]/70 text-xs leading-relaxed font-light">
              Streams in over 75+ languages and local accents natively, adapting instantly to regional and phonetic nuances.
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={onLearnMore}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 text-white/30 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em]"
        >
          Scroll to explore
          <ArrowDown size={12} className="text-[#DFB74A]" />
        </motion.button>
      </div>
    </section>
  );
}

