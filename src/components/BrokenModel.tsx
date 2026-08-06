import React from "react";
import { motion } from "motion/react";
import { PAIN_POINTS } from "../data";
import * as Icons from "lucide-react";

interface BrokenModelProps {
  onExploreSolutions: () => void;
}

export default function BrokenModel({ onExploreSolutions }: BrokenModelProps) {
  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={24} className="text-[#DFB74A]" />;
    }
    return <Icons.AlertCircle size={24} className="text-[#DFB74A]" />;
  };

  return (
    <section id="broken-model" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Decorative ambient orb */}
      <div className="absolute right-[-10%] top-[30%] w-[350px] h-[350px] rounded-full bg-[#FF4C5C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="sans text-[11px] font-semibold uppercase tracking-wider text-[#FF4C5C] mb-4 block" style={{ letterSpacing: "0.5px" }}>
            Inefficient Realities
          </span>
          <h2
            className="text-3xl md:text-5xl font-semibold text-[#F8FAFC] tracking-tight leading-[1.2] mb-6"
          >
            The human contact centre model is <span className="text-[#FF4C5C] italic font-light">structurally broken...</span>
          </h2>
          <p className="text-[#CBD5E1] font-light leading-relaxed text-base md:text-lg">
            Offshoring attempt to save costs or provide global support overlooks the fundamental limitation of a human-first architecture.
          </p>
        </div>

        {/* Structural Bottleneck callout box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-10 rounded-[28px] border border-[#FF4C5C] bg-[#1E0F14] backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 text-[#FF4C5C] transition-transform duration-500 group-hover:scale-110">
            <Icons.Skull size={120} />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div className="p-4 rounded-2xl bg-[#FF4C5C]/10 border border-[#FF4C5C]/20 text-[#FF4C5C] flex-shrink-0">
              <Icons.ShieldAlert size={32} />
            </div>
            <div>
              <div className="inline-block px-3 py-1.5 bg-[#1E0F14] border border-[#FF4C5C] text-[#FF4C5C] text-[9px] font-semibold uppercase tracking-wider mb-3" style={{ letterSpacing: "0.5px" }}>
                The Structural Bottleneck
              </div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3 tracking-wide">
                Humans don't scale linearly.
              </h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed max-w-4xl font-light">
                To guarantee 24/7 readiness and multilingual support, companies are forced to over-hire and buy massive operational waste. It's a structural flaw geography or cheap wages can't fix.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pain points 6-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-[24px] border border-[#192032] bg-[#0B0E17]/80 hover:bg-[#182131]/40 hover:border-[#FF4C5C]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#0B0E17] border border-[#192032] text-[#DFB74A] group-hover:border-[#FF4C5C]/30 transition-colors">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="font-mono text-2xl font-semibold text-[#FF4C5C]">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC] tracking-wide mb-3 group-hover:text-[#DFB74A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#CBD5E1]/80 text-sm font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div className="border-t border-[#192032] pt-4 mt-auto">
                <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-mono block">
                  {item.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onExploreSolutions}
            className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white border border-[#192032] bg-[#0B0E17] hover:bg-[#182131] transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Explore Industry Overhauls
            <Icons.ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
