import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INDUSTRY_OVERHAUL } from "../data";
import { Home, Stethoscope, Landmark, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

interface IndustryOverhaulProps {
  onSimulateIndustry: (industryId: string) => void;
}

export default function IndustryOverhaul({ onSimulateIndustry }: IndustryOverhaulProps) {
  const [activeTab, setActiveTab] = useState("real-estate");

  const iconsMap: Record<string, any> = {
    "real-estate": Home,
    healthcare: Stethoscope,
    banking: Landmark,
    "higher-education": GraduationCap,
  };

  const activeData = INDUSTRY_OVERHAUL.find((ind) => ind.id === activeTab) || INDUSTRY_OVERHAUL[0];
  const ActiveIconComponent = iconsMap[activeTab];

  return (
    <section id="capabilities" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Background ambient light */}
      <div className="absolute left-[-15%] top-[10%] w-[400px] h-[400px] rounded-full bg-[#314767]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB74A] mb-4 block">
            Target Industry Verticals
          </span>
          <h2
            className="text-3xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-[1.2] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The pain in key industries reinforces <br />
            an <span className="text-[#DFB74A] italic">overhaul is needed...</span>
          </h2>
          <p className="text-[#CBD5E1] font-light leading-relaxed text-base">
            Serali eliminates structural leakages in high-touch sectors by executing human-like conversations and database workflows simultaneously.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-[#192032] pb-6 max-w-4xl mx-auto">
          {INDUSTRY_OVERHAUL.map((ind) => {
            const TabIcon = iconsMap[ind.id];
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-[#07090D] bg-[#DFB74A] shadow-[0_0_20px_rgba(220,188,76,0.25)] scale-[1.03]"
                    : "text-[#CBD5E1] hover:text-white border border-[#192032] hover:bg-[#182131]/30"
                }`}
              >
                {TabIcon && <TabIcon size={16} />}
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Main Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Pain and Solutions */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-[28px] border border-[#192032] bg-[#0B0E17]/90 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3.5 rounded-2xl bg-[#1B1813] border border-[#BE9B43]/30 text-[#DFB74A]">
                    <ActiveIconComponent size={28} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#D9B14E]">
                      {activeData.tagline}
                    </span>
                    <h3 className="text-2xl font-light text-white tracking-wide">
                      {activeData.name} Sector
                    </h3>
                  </div>
                </div>

                {/* Pain list */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono mb-3">
                    Critical Pain points:
                  </h4>
                  {activeData.pains.map((pain, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="text-[#FF4C5C] flex-shrink-0 mt-1">•</div>
                      <p className="text-[#CBD5E1]/90 text-sm font-light leading-relaxed">
                        {pain}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution statement */}
              <div className="border-t border-[#192032] pt-6 mt-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#009678] font-mono mb-2 flex items-center gap-2">
                  <CheckCircle2 size={12} />
                  The Serali Solution
                </h4>
                <p className="text-[#F8FAFC]/95 text-sm leading-relaxed mb-6 font-light">
                  {activeData.solution}
                </p>

                <button
                  onClick={() => onSimulateIndustry(activeData.id)}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DFB74A] hover:text-[#DFB74A]/80 transition-colors group"
                >
                  Configure and Test {activeData.name} Agent
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Case Studies & Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {activeData.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[24px] border border-[#192032] bg-[#0B0E17]/80 hover:border-[#314767]/40 transition-all duration-300 flex-1 flex flex-col justify-center"
                >
                  <span className="text-5xl md:text-6xl font-light text-[#DFB74A] tracking-tighter mb-2 block">
                    {metric.value}
                  </span>
                  <span className="text-white font-medium text-sm uppercase tracking-wide mb-2 block">
                    {metric.label}
                  </span>
                  <p className="text-[#CBD5E1]/80 text-xs font-light">
                    {metric.comparison}
                  </p>
                </div>
              ))}

              {/* Platform speed banner */}
              <div className="p-8 rounded-[24px] border border-[#BE9B43]/20 bg-[#1B1813]/60 flex items-center gap-6">
                <div className="p-3 rounded-xl bg-[#DFB74A]/10 text-[#DFB74A] border border-[#DFB74A]/20">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-wider font-semibold mb-1">
                    Instant Resolution
                  </h4>
                  <p className="text-[#CBD5E1]/80 text-xs leading-normal">
                    0-second hold times. Fully automated database logs generated immediately on call completion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
