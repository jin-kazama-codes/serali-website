import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingDown, Percent, ArrowRight, DollarSign, Calculator } from "lucide-react";

export default function UnitEconomics() {
  const [minutes, setMinutes] = useState(15000);

  // Math variables based on Slide 5
  // Human Agent: c. £0.95/min (Based on £2,500 fixed cost / 2,640 min monthly talk limit)
  const humanRate = 0.95;
  // Serali AI Agent: £0.07/min (Within Slide 5's £0.06 - £0.09 range)
  const aiRate = 0.07;

  const humanCost = Math.round(minutes * humanRate);
  const aiCost = Math.round(minutes * aiRate);
  const savings = humanCost - aiCost;
  const savingsPercent = 92.6; // ~93%

  // Equivalent headcount representation
  // Each human agent does max 2,640 mins effective talk time
  const equivalentAgents = Math.max(1, Math.ceil(minutes / 2640));

  return (
    <section id="economics" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Background radial glow */}
      <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] rounded-full bg-[#009678]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#009678] mb-4 block">
            The Strategic Arbitrage
          </span>
          <h2
            className="text-3xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-[1.2] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Irresistible unit economics that <br />
            drive <span className="text-[#009678] italic">market migration...</span>
          </h2>
          <p className="text-[#CBD5E1] font-light text-base leading-relaxed">
            The fundamental difference: we pay humans for their standby time (even if sitting idle), whereas Serali AI agents charge strictly for active talk minutes.
          </p>
        </div>

        {/* Dynamic Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Slider input panel */}
          <div className="lg:col-span-5 p-8 rounded-[28px] border border-[#192032] bg-[#0B0E17]/90 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#009678]">
                <Calculator size={20} />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  ROI & Cost Calculator
                </span>
              </div>
              <h3 className="text-lg font-normal text-white mb-4">
                Configure your monthly talk volume
              </h3>
              <p className="text-[#CBD5E1]/80 text-xs font-light leading-relaxed mb-8">
                Adjust the active talk minutes to calculate the comparative operating overhead between full-time human agent staffing and the automated Serali workforce.
              </p>

              {/* Slider Input */}
              <div className="bg-[#182131]/40 border border-[#192032] p-6 rounded-2xl mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#CBD5E1] text-xs">Active Talk Minutes</span>
                  <span className="font-mono text-xl font-bold text-[#009678]">
                    {minutes.toLocaleString()} <span className="text-xs font-light">mins</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  className="w-full accent-[#009678] h-1.5 bg-[#192032] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#64748B] font-mono mt-2">
                  <span>5,000 m</span>
                  <span>50,000 m</span>
                  <span>100,000 m</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#CBD5E1]/60">
                <span>Equivalent Human Headcount:</span>
                <span className="text-white font-bold">{equivalentAgents} FTE Agents</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#CBD5E1]/60">
                <span>Human Idle Standby Overhead:</span>
                <span className="text-[#FF4C5C] font-semibold">Charged (8h limit)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#CBD5E1]/60">
                <span>Serali Multi-agent Concurrency:</span>
                <span className="text-[#009678] font-semibold">Infinite (99%+ completion)</span>
              </div>
            </div>
          </div>

          {/* Results dashboard panel */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Human Agent overhead Card */}
            <div className="p-8 rounded-[24px] border border-[#192032] bg-[#0B0E17]/60 flex flex-col justify-between group hover:border-[#FF4C5C]/30 transition-colors">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider text-[#FF4C5C] bg-[#FF4C5C]/10 border border-[#FF4C5C]/20 mb-6">
                  Legacy Human Staffing
                </span>
                <span className="text-4xl md:text-5xl font-light text-white tracking-tighter block mb-2">
                  £{humanCost.toLocaleString()}
                </span>
                <span className="text-[#CBD5E1]/70 text-xs font-light block mb-4">
                  Based on average £0.95/min talk rate.
                </span>
              </div>
              <div className="border-t border-[#192032] pt-4 mt-6 text-[#CBD5E1]/60 text-xs font-light">
                Requires constant recruitment, sick cover, and high training retention.
              </div>
            </div>

            {/* Serali overhead Card */}
            <div className="p-8 rounded-[24px] border border-[#009678]/30 bg-[#0A2320]/40 flex flex-col justify-between group hover:border-[#009678]/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[#009678]">
                <TrendingDown size={140} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider text-[#009678] bg-[#009678]/10 border border-[#009678]/20 mb-6">
                  Serali AI Agent Stack
                </span>
                <span className="text-4xl md:text-5xl font-light text-[#009678] tracking-tighter block mb-2">
                  £{aiCost.toLocaleString()}
                </span>
                <span className="text-[#CBD5E1]/70 text-xs font-light block mb-4">
                  Strict active talk billing (£0.07/min)
                </span>
              </div>
              <div className="border-t border-[#009678]/20 pt-4 mt-6 text-[#009678] text-xs font-medium flex items-center gap-1">
                <TrendingDown size={14} />
                Zero idle costs. Unlimited 24/7 coverage.
              </div>
            </div>

            {/* Financial Savings Summary Banner */}
            <div className="md:col-span-2 p-8 rounded-[24px] border border-[#BE9B43]/30 bg-[#1B1813]/80 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="absolute top-0 right-[-10%] w-[150px] h-[150px] rounded-full bg-[#DFB74A]/5 blur-[60px]" />
              
              <div className="relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D9B14E] block mb-2">
                  Total Monthly Arbitrage
                </span>
                <h4 className="text-3xl md:text-4xl font-light text-white tracking-wide">
                  Save <span className="text-[#DFB74A] font-semibold">£{savings.toLocaleString()}</span> / month
                </h4>
                <p className="text-[#CBD5E1]/80 text-xs font-light mt-2 max-w-xl">
                  Reinvest your capital into strategic product vectors, raising enterprise margins by {savingsPercent}% natively.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#DFB74A] text-[#07090D] flex-shrink-0 flex items-center gap-2 self-stretch md:self-auto justify-center text-center font-bold text-lg md:text-2xl shadow-[0_0_20px_rgba(220,188,76,0.2)]">
                <Percent size={20} />
                90%–93%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
