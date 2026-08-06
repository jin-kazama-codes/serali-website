import React from "react";
import { FOUNDERS } from "../data";
import { Shield, Sparkles, Award, Star, Briefcase, GraduationCap } from "lucide-react";

export default function Founders() {
  return (
    <section id="founders" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Background gradients */}
      <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] rounded-full bg-[#314767]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-[#DFB74A]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB74A] mb-4 block">
            The Leadership
          </span>
          <h2
            className="text-3xl md:text-5xl font-light text-white tracking-tight leading-[1.2] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The founders you can feel <br />
            confident <span className="text-[#DFB74A] italic">backing...</span>
          </h2>
          <p className="text-[#CBD5E1] font-light leading-relaxed text-base">
            An elite team of product, enterprise, and agentic AI specialists representing the top financial institutions and technology hubs.
          </p>
        </div>

        {/* Founders Bento-Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="p-8 rounded-[30px] border border-[#192032] bg-[#0B0E17]/85 backdrop-blur-md flex flex-col justify-between hover:border-[#314767]/60 transition-all duration-300 relative group"
            >
              {/* Flag Badge */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-mono text-[9px] uppercase font-semibold">
                <span>{founder.flag === "uk" ? "🇬🇧" : "🇮🇳"}</span>
                <span>{founder.flag === "uk" ? "London, UK" : "Hub India"}</span>
              </div>

              <div>
                {/* Profile Image with subtle gold circle frame */}
                <div className="relative mb-6 w-20 h-20 rounded-2xl overflow-hidden border border-[#BE9B43]/30 p-1 bg-gradient-to-tr from-[#DFB74A] to-[#182131]">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Profile Details */}
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-1.5">
                  {founder.name}
                </h3>
                <span className="font-mono text-xs text-[#DFB74A] uppercase tracking-wider block mb-6 font-semibold">
                  {founder.role}
                </span>

                {/* Bio List */}
                <div className="space-y-4 mb-8">
                  {founder.bio.map((b, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs leading-relaxed text-[#CBD5E1]/90">
                      <Briefcase size={12} className="text-[#64748B] flex-shrink-0 mt-1" />
                      <p className="font-light">{b}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills and Corporate Experience logos */}
              <div>
                <div className="border-t border-[#192032] pt-6 mb-6">
                  <h4 className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-3">
                    Corporate Experience:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.companies.map((comp) => (
                      <span
                        key={comp}
                        className="text-[9px] font-mono text-[#CBD5E1]/80 px-2.5 py-1 rounded-md bg-[#182131]/40 border border-[#192032]"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#192032] pt-4 flex items-center gap-2">
                  <Award size={14} className="text-[#009678]" />
                  <span className="text-[10px] font-mono text-[#009678] uppercase font-semibold">
                    12+ Years Executive Standing
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Hub synergy explanation (Slide 13) */}
        <div className="mt-16 p-8 rounded-[28px] border border-[#192032] bg-[#0B0E17]/90 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[200px] h-[200px] rounded-full bg-[#009678]/5 blur-[100px] pointer-events-none" />
          
          <div className="p-4 rounded-2xl bg-[#1B1813] border border-[#BE9B43]/30 text-[#D9B14E] flex-shrink-0 text-center">
            <span className="text-3xl font-bold block">3x</span>
            <span className="text-[9px] uppercase font-mono tracking-wider">Velocity Moat</span>
          </div>

          <div>
            <span className="font-mono text-[9px] text-[#D9B14E] uppercase tracking-widest block mb-1">
              Dual-Hub Strategy (UK & India)
            </span>
            <h4 className="text-white text-base font-semibold mb-2">
              Why our India Technology Hub acts as a powerful operational moat
            </h4>
            <p className="text-[#CBD5E1]/80 text-xs font-light leading-relaxed">
              Building from India for the world doesn't just save serious capital—it creates an operational superpower. We deliver AI workforce integrations at 30-50% lower engineering costs than US competitors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
