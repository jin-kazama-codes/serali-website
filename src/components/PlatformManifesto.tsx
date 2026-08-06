import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Cpu, ShieldCheck, UserCheck, Play, ArrowRight, Activity, Zap, Globe, Layers, Link2, ShieldAlert } from "lucide-react";

export default function PlatformManifesto() {
  const pillars = [
    {
      num: "1",
      title: "Customer Voice",
      description: "Inbound and outbound real-time conversations in 75+ languages and local accents, with a human-like, low-latency feel.",
      icon: MessageSquare,
      color: "#DFB74A",
    },
    {
      num: "2",
      title: "AI Employee",
      description: "Validates context, maps system actions, executes task workflows, manages omni-channel comms and drives business results.",
      icon: Cpu,
      color: "#FFFFFF",
    },
    {
      num: "3",
      title: "Secure CRM/ERP Sync",
      description: "Live updates to systems of record, with full E2E encryption, PII redaction and zero data retention.",
      icon: ShieldCheck,
      color: "#FFFFFF",
    },
    {
      num: "4",
      title: "Human Handoff",
      description: "Escalates edge cases—seamlessly syncing the full context, campaign ranking and qualification data.",
      icon: UserCheck,
      color: "#DFB74A",
    },
  ];

  const strengths = [
    {
      title: "An Autonomous AI Workforce",
      tag: "System-Wide Intelligence",
      description: "Voice is just the interface; Serali is the brain. We deploy end-to-end digital workers capable of managing complex workflows, running calendars, SMS, WhatsApp, and updating CRM systems.",
      icon: Activity,
    },
    {
      title: "99%+ Execution & Completion",
      tag: "Performance",
      description: "Natural pauses, rapid interruptions, and fluid, mood-adaptive conversations. Our workers deliver a 99%+ autonomous completion rate—seamlessly closing deals and crushing support cases.",
      icon: Zap,
    },
    {
      title: "True Multilingual Fluency",
      tag: "Global Resonance",
      description: "Streams in over 75+ languages. Adapts instantly to regional accents, cultural idioms, and phonetic nuances across countries. From Mumbai to London, your brand sounds native.",
      icon: Globe,
    },
    {
      title: "Multi-Agent Sync & Handoff",
      tag: "Team Orchestration",
      description: "Allows multiple AI workers to collaborate, share context, and transfer tasks dynamically behind the scenes. Transfers the call instantly to human teams with full logged details.",
      icon: Layers,
    },
    {
      title: "Plug-and-Play Architecture",
      tag: "Integration & Scale",
      description: "Seamlessly integrates into any off-the-shelf or custom technology stack, including CRM, ERP, telephony, and calendar apps. No rip-and-replace—just instant deployment.",
      icon: Link2,
    },
    {
      title: "Bulletproof Guardrails",
      tag: "Governance & Controls",
      description: "Enterprise-ready, privately hostable, and fully compliant with GDPR, SOC2 and HIPAA. Active zero-retention data policies, granular PII redaction and strict brand security.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="manifesto" className="relative py-32 bg-[#07090D] overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute right-0 top-[20%] w-[400px] h-[400px] bg-[#DFB74A]/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-[10%] w-[350px] h-[350px] bg-white/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* PART 1: The Serali Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-5 text-left">
            <span className="sans text-[12px] uppercase tracking-[0.3em] text-[#DFB74A] font-semibold mb-4 block">
              The Serali Manifesto
            </span>
            <h2 className="sans text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
              We are not building another <br />
              <span className="text-[#DFB74A]">AI Voice Platform.</span>
            </h2>
            <p className="sans text-[#CBD5E1] text-sm md:text-base leading-relaxed font-light mb-8">
              Serali is built on a fully proprietary stack. By owning our orchestration engine and reasoning architecture, we ensure higher reliability, lower latency, and optimized operational costs.
            </p>
            <div className="p-6 border border-white/10 bg-white/[0.02] text-xs text-[#CBD5E1] font-mono leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#DFB74A]" />
              "We're building the complete AI Workforce Platform. Serali handles brutal communication volumes with zero delay while driving actual business results."
            </div>
          </div>

          <div className="lg:col-span-7 p-1 border border-white/5 rounded-none bg-white/[0.01] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 bg-[#07090D] rounded-none">
              {pillars.map((pil) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={pil.num}
                    className="glass p-8 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="p-3 border"
                        style={{
                          borderColor: pil.color === "#DFB74A" ? "rgba(223, 183, 74, 0.3)" : "rgba(255, 255, 255, 0.15)",
                          color: pil.color,
                          backgroundColor: pil.color === "#DFB74A" ? "rgba(223, 183, 74, 0.05)" : "rgba(255, 255, 255, 0.02)",
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] sans font-semibold uppercase tracking-widest text-white/30">Pillar 0{pil.num}</span>
                    </div>
                    <h3 className="sans text-lg text-white font-semibold mb-2">{pil.title}</h3>
                    <p className="sans text-[#CBD5E1]/70 text-xs leading-relaxed font-light">{pil.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PART 2: Six Product Strengths */}
        <div className="border-t border-white/5 pt-28">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="sans text-[12px] uppercase tracking-[0.3em] text-[#DFB74A] font-semibold mb-4 block">
              Core Capabilities
            </span>
            <h2 className="sans text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2]">
              Why Serali is the obvious <br className="hidden md:inline" />
              choice for <span className="text-[#DFB74A]">enterprise...</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {strengths.map((str, idx) => {
              const Icon = str.icon;
              return (
                <div
                  key={idx}
                  className="glass p-8 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="border border-white/10 text-[9px] sans font-bold uppercase tracking-widest px-3 py-1 text-white/40 bg-white/[0.02]">
                        {str.tag}
                      </span>
                      <Icon size={18} className="text-[#DFB74A]" />
                    </div>
                    <h3 className="sans text-lg text-white font-semibold mb-3">
                      {str.title}
                    </h3>
                    <p className="sans text-[#CBD5E1]/70 text-xs font-light leading-relaxed">
                      {str.description}
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4 mt-8">
                    <span className="text-[9px] sans font-bold text-white/20 uppercase tracking-widest block">
                      Autonomous Vector 0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

