import React from "react";
import { Check, X, Info, Sparkles, TrendingUp, AlertTriangle } from "lucide-react";

interface MatrixRow {
  category: "Voice" | "Business" | "Orchestration" | "Security" | "Economics";
  capability: string;
  seraliToday: "yes" | "partial" | "no";
  seraliY1: "yes" | "yes" | "yes"; // Serali always wins in Y1
  elevenLabs: "yes" | "partial" | "no";
  vapi: "yes" | "partial" | "no";
  retell: "yes" | "partial" | "no";
}

export default function CapabilityMatrix() {
  const matrix: MatrixRow[] = [
    // Voice Capabilities
    {
      category: "Voice",
      capability: "Human-like, Low-Latency Voice Agents",
      seraliToday: "yes",
      seraliY1: "yes",
      elevenLabs: "yes",
      vapi: "yes",
      retell: "yes",
    },
    {
      category: "Voice",
      capability: "Multilingual, Local Accents Capable Agents",
      seraliToday: "yes",
      seraliY1: "yes",
      elevenLabs: "partial",
      vapi: "partial",
      retell: "partial",
    },
    {
      category: "Voice",
      capability: "Customer Mood-Adaptive & Emotionally Dynamic",
      seraliToday: "partial",
      seraliY1: "yes",
      elevenLabs: "no",
      vapi: "no",
      retell: "no",
    },
    // Business Results
    {
      category: "Business",
      capability: "Context, Campaign & Edge Case Human Handoffs",
      seraliToday: "yes",
      seraliY1: "yes",
      elevenLabs: "partial",
      vapi: "partial",
      retell: "partial",
    },
    // Orchestrations
    {
      category: "Orchestration",
      capability: "Admin Area: Analytics & Campaign Kanban Boards",
      seraliToday: "yes",
      seraliY1: "yes",
      elevenLabs: "partial",
      vapi: "partial",
      retell: "partial",
    },
    {
      category: "Orchestration",
      capability: "Multi-Agent Orchestration (Voice, Omni-comms, SMS)",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "no",
      vapi: "no",
      retell: "no",
    },
    {
      category: "Orchestration",
      capability: "Org Memory, Cross-Channel Context & BI Layers",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "no",
      vapi: "no",
      retell: "no",
    },
    {
      category: "Orchestration",
      capability: "WhatsApp, SMS, Email & Calendars for Comms",
      seraliToday: "yes",
      seraliY1: "yes",
      elevenLabs: "partial",
      vapi: "partial",
      retell: "partial",
    },
    {
      category: "Orchestration",
      capability: "Native/Deep CRM Integrations (Salesforce, HubSpot)",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "partial",
      vapi: "partial",
      retell: "partial",
    },
    // Security
    {
      category: "Security",
      capability: "GDPR/SOC2/HIPAA: E2E Encryption & PII Redaction",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "yes",
      vapi: "partial",
      retell: "partial",
    },
    {
      category: "Security",
      capability: "Private Cloud / On-Premise VPC Compatible",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "no",
      vapi: "no",
      retell: "no",
    },
    // Economics
    {
      category: "Economics",
      capability: "Full Implementation & 24/7 Custom Support",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "no",
      vapi: "no",
      retell: "no",
    },
    {
      category: "Economics",
      capability: "No Pay-Per-Minute Billing (Flat Subscription)",
      seraliToday: "no",
      seraliY1: "yes",
      elevenLabs: "no",
      vapi: "no",
      retell: "no",
    },
  ];

  const renderStatus = (status: "yes" | "partial" | "no") => {
    if (status === "yes") {
      return (
        <div className="flex items-center justify-center font-sans">
          <span className="inline-flex items-center justify-center px-2.5 py-1 bg-[#0A2320] border border-[#009678] text-[#009678] text-[9px] font-semibold tracking-wider" style={{ letterSpacing: "0.5px" }}>
            YES
          </span>
        </div>
      );
    }
    if (status === "partial") {
      return (
        <div className="flex items-center justify-center font-sans">
          <span className="inline-flex items-center justify-center px-2.5 py-1 bg-[#1B1813] border border-[#BE9B43] text-[#D9B14E] text-[9px] font-semibold tracking-wider" style={{ letterSpacing: "0.5px" }}>
            PARTIAL
          </span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center font-sans">
        <span className="inline-flex items-center justify-center px-2.5 py-1 bg-[#1E0F14] border border-[#FF4C5C] text-[#FF4C5C] text-[9px] font-semibold tracking-wider" style={{ letterSpacing: "0.5px" }}>
          NO
        </span>
      </div>
    );
  };

  return (
    <section id="capabilities" className="relative py-32 bg-[#07090D] overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute left-[20%] top-[-10%] w-[450px] h-[450px] bg-[#DFB74A]/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="sans text-[12px] uppercase tracking-[0.3em] text-[#DFB74A] font-semibold mb-4 block">
            Competitive Edge
          </span>
          <h2 className="sans text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
            What we're building that will <br />
            allow us to <span className="text-[#DFB74A]">dominate...</span>
          </h2>
          <p className="sans text-[#CBD5E1] font-light leading-relaxed text-sm">
            Serali is built to win. Where competitors offer raw developer APIs and self-serve blocks, we deliver complete, secure, vertically-integrated digital employees on a flat, predictable enterprise subscription.
          </p>
        </div>

        {/* Matrix Table Wrapper */}
        <div className="border border-white/5 rounded-none bg-[#07090D] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.01]">
                  <th className="p-6 text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono font-bold w-[35%]">
                    Capability Matrix
                  </th>
                  <th className="p-6 text-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono font-medium">
                    Serali Today
                  </th>
                  {/* Highlight Serali Y1 Post-Pre-Seed */}
                  <th className="p-6 text-center text-[10px] uppercase tracking-widest text-[#DFB74A] font-mono font-bold bg-[#DFB74A]/[0.03] border-x border-[#DFB74A]/15 relative">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-[#DFB74A]" />
                    Serali Year 1
                    <span className="text-[8px] block text-[#DFB74A]/80 mt-1 font-light tracking-wide uppercase">
                      Post Pre-Seed
                    </span>
                  </th>
                  <th className="p-6 text-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono font-medium">
                    ElevenLabs
                    <span className="text-[8px] block text-white/20 mt-1 font-light tracking-wide">
                      $500m ARR
                    </span>
                  </th>
                  <th className="p-6 text-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono font-medium">
                    Vapi
                    <span className="text-[8px] block text-white/20 mt-1 font-light tracking-wide">
                      $60m ARR
                    </span>
                  </th>
                  <th className="p-6 text-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono font-medium">
                    Retell
                    <span className="text-[8px] block text-white/20 mt-1 font-light tracking-wide">
                      $50m ARR
                    </span>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-white/5">
                {matrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Capability Name & Category */}
                    <td className="p-6 flex flex-col gap-1.5 text-left">
                      <span className="text-white text-xs font-semibold tracking-wide">
                        {row.capability}
                      </span>
                      <span className="text-[9px] font-mono font-light text-white/30 uppercase tracking-widest">
                        {row.category} Vector
                      </span>
                    </td>

                    {/* Serali Today status */}
                    <td className="p-6 text-center">
                      {renderStatus(row.seraliToday)}
                    </td>

                    {/* Serali Y1 status (always yes!) */}
                    <td className="p-6 text-center bg-[#DFB74A]/[0.01] border-x border-[#DFB74A]/10 font-bold">
                      {renderStatus("yes")}
                    </td>

                    {/* Competitors */}
                    <td className="p-6 text-center">
                      {renderStatus(row.elevenLabs)}
                    </td>
                    <td className="p-6 text-center">
                      {renderStatus(row.vapi)}
                    </td>
                    <td className="p-6 text-center">
                      {renderStatus(row.retell)}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Support Callout banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-12 max-w-5xl mx-auto">
          <div className="glass p-8 flex items-start gap-4 text-left">
            <TrendingUp size={20} className="text-[#DFB74A] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="sans text-white text-lg font-semibold mb-1.5">Proprietary Orchestration Layer</h4>
              <p className="sans text-xs text-[#CBD5E1]/75 leading-relaxed font-light">
                Serali does not tether to generic wrappers or pay-per-minute wrappers, ensuring 3x faster delivery and higher custom margins.
              </p>
            </div>
          </div>

          <div className="glass p-8 flex items-start gap-4 text-left">
            <AlertTriangle size={20} className="text-white/40 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="sans text-white text-lg font-semibold mb-1.5">Avoid Hold-Time Churn</h4>
              <p className="sans text-xs text-[#CBD5E1]/75 leading-relaxed font-light">
                Competitors bill pay-per-minute, forcing you to pay for passive hold times. Serali charges flat, predictable subscriptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

