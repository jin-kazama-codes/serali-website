import React, { useState } from "react";
import { motion } from "motion/react";
import { Compass, Milestone, Coins, HelpCircle, ArrowRight, Zap, Target } from "lucide-react";

export default function VisionRoadmap() {
  const [activeStep, setActiveStep] = useState(1);

  const movementSteps = [
    {
      level: 1,
      title: "Human Workforce",
      sub: "Empowering legacy contact centres to achieve efficiency.",
      details: "Legacy call-centers represent structural limitations: 13-week onboarding times and high agent burnout thresholds.",
    },
    {
      level: 2,
      title: "AI Voice Agents",
      sub: "Moving past basic wrappers and fragmented voice wrappers.",
      details: "Current voice wrappers are rigid, API-based developer bricks that drain clients with pay-per-minute billing.",
    },
    {
      level: 3,
      title: "AI Workforce Platform",
      sub: "Unifying AI employees on a single custom database stack.",
      details: "Serali orchestrates concurrent voice, CRM sync, SMS, and WhatsApp workflows natively for complete business outcomes.",
    },
    {
      level: 4,
      title: "AI-First Enterprise",
      sub: "Scaling autonomous AI workforces to permanently erase waste.",
      details: "The ultimate peak of operational leverage. Businesses run zero-latency operations with secure on-premise dedicated models.",
    }
  ];

  const operationalTimeline = [
    {
      id: 1,
      phase: "MVP1 Complete",
      status: "Achieved",
      description: "High performance core voice model completed. Early CRM integrations and sandbox user interfaces validated.",
    },
    {
      id: 2,
      phase: "Pre-Seed Stage",
      status: "Active (Raising £450k)",
      description: "Build MVP2 with full proprietary stack, client pilots, and expand elite core engineering depth locally in India.",
    },
    {
      id: 3,
      phase: "PMF Ready",
      status: "Y1 Target",
      description: "Secure product-market-fit validation and cloud compute infrastructure optimizations by the end of Year 1.",
    },
    {
      id: 4,
      phase: "Seed Raise",
      status: "Y2 Forecast",
      description: "Expected 'Seed' round venture capital raise of £8M by early Y2 to accelerate US & UK enterprise distribution.",
    }
  ];

  return (
    <section id="roadmap" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Background ambient lighting */}
      <div className="absolute right-[-10%] top-[10%] w-[350px] h-[350px] rounded-full bg-[#314767]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB74A] mb-4 block">
            The Movement
          </span>
          <h2
            className="text-3xl md:text-5xl font-light text-white tracking-tight leading-[1.2] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our vision and the movement we <br />
            intend to <span className="text-[#DFB74A] italic">kick start...</span>
          </h2>
          <p className="text-[#CBD5E1] font-light leading-relaxed text-base">
            Transitioning global enterprise operations from fragile human staffing models to unified, secure, high-leveraged digital workspace architecture.
          </p>
        </div>

        {/* 1. Interactive Vision Blocks (Slide 11 style nested design) */}
        <div className="mb-24 p-1 border border-[#192032] rounded-[30px] bg-[#0B0E17]/60 overflow-hidden max-w-5xl mx-auto">
          <div className="p-8 bg-[#07090D]/50 rounded-[28px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="font-mono text-[10px] text-[#D9B14E] uppercase tracking-wider block">
                Vision Matrix
              </span>
              <h3 className="text-white text-xl font-light leading-snug">
                Eradicating Operational Waste
              </h3>
              <p className="text-[#CBD5E1]/80 text-xs font-light leading-relaxed mb-4">
                Click on the core stages to explore Serali's progression roadmap towards the AI-First enterprise environment.
              </p>

              <div className="flex flex-col gap-2">
                {movementSteps.map((s) => (
                  <button
                    key={s.level}
                    onClick={() => setActiveStep(s.level)}
                    className={`text-left px-4 py-3 rounded-xl border text-xs font-semibold transition-all ${
                      activeStep === s.level
                        ? "border-[#DFB74A] bg-[#1B1813] text-[#DFB74A]"
                        : "border-transparent text-[#CBD5E1]/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Level 0{s.level}: {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Nested graphics representing the nested visual inside Slide 11 */}
            <div className="lg:col-span-8 bg-[#0B0E17] border border-[#192032] rounded-2xl p-8 relative min-h-[250px] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] text-[#64748B] uppercase tracking-widest block mb-2">
                  Level 0{activeStep} Active Focus
                </span>
                <h4 className="text-white font-medium text-lg mb-2">
                  {movementSteps[activeStep - 1].title}
                </h4>
                <p className="text-[#D9B14E] text-xs font-medium italic mb-4">
                  {movementSteps[activeStep - 1].sub}
                </p>
                <p className="text-[#CBD5E1]/90 text-xs font-light leading-relaxed max-w-lg">
                  {movementSteps[activeStep - 1].details}
                </p>
              </div>

              {/* Progress visual ladder */}
              <div className="flex items-center gap-2 mt-8">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-1 flex-1 rounded transition-all duration-500 ${
                      step <= activeStep ? "bg-[#DFB74A]" : "bg-[#192032]"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2. Operational Journey (Slide 14 and 18) */}
        <div className="border-t border-[#192032] pt-24 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center text-[#DFB74A]">
            <Milestone size={24} />
            <h3 className="text-xl font-light tracking-wide text-white">
              Pre-Seed Operational Journey & Capital Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalTimeline.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-[24px] border flex flex-col justify-between min-h-[250px] ${
                  item.id === 2
                    ? "border-[#BE9B43] bg-[#1B1813]/60 relative"
                    : "border-[#192032] bg-[#0B0E17]/80"
                }`}
              >
                {item.id === 2 && (
                  <span className="absolute top-0 right-6 translate-y-[-50%] bg-[#DFB74A] text-[#07090D] text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Raising Today
                  </span>
                )}

                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider block mb-2">
                    Phase 0{item.id}
                  </span>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.phase}</h4>
                  <span className={`text-[10px] font-mono font-medium block mb-4 ${
                    item.id === 1 ? "text-[#009678]" : item.id === 2 ? "text-[#DFB74A]" : "text-[#38BDF8]"
                  }`}>
                    {item.status}
                  </span>
                  <p className="text-[#CBD5E1]/85 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-[#192032] pt-4 mt-6">
                  <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest block">
                    Strategic Target 0{item.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pre-Seed fundraising breakdown banner */}
          <div className="p-8 rounded-[24px] border border-[#192032] bg-[#0B0E17]/90 backdrop-blur-md mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[#DFB74A] uppercase tracking-wider block mb-1">
                Fund Usage Breakdown
              </span>
              <h4 className="text-white font-light text-2xl tracking-wide">
                £450,000 Pre-Seed Round
              </h4>
              <p className="text-[#CBD5E1] text-xs font-light mt-2 leading-relaxed">
                We are raising capital to validate PMF, complete client pilots, and expand our core Indian technology hub.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#182131]/30 border border-[#192032] text-center">
                <span className="text-[#DFB74A] text-lg font-bold block">49%</span>
                <span className="text-[#CBD5E1] text-[10px] uppercase font-mono block">Eng & Dev (£220k)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#182131]/30 border border-[#192032] text-center">
                <span className="text-[#DFB74A] text-lg font-bold block">20%</span>
                <span className="text-[#CBD5E1] text-[10px] uppercase font-mono block">Sales & Pilots (£90k)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#182131]/30 border border-[#192032] text-center">
                <span className="text-[#DFB74A] text-lg font-bold block">9%</span>
                <span className="text-[#CBD5E1] text-[10px] uppercase font-mono block">R&D (£40k)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#182131]/30 border border-[#192032] text-center">
                <span className="text-[#DFB74A] text-lg font-bold block">9%</span>
                <span className="text-[#CBD5E1] text-[10px] uppercase font-mono block">Infras (£40k)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#182131]/30 border border-[#192032] text-center">
                <span className="text-[#DFB74A] text-lg font-bold block">7%</span>
                <span className="text-[#CBD5E1] text-[10px] uppercase font-mono block">Legal & FX (£30k)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#182131]/30 border border-[#192032] text-center">
                <span className="text-[#DFB74A] text-lg font-bold block">7%</span>
                <span className="text-[#CBD5E1] text-[10px] uppercase font-mono block">Emergency Buffer (£30k)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
