import React, { useState } from "react";
import { PRICING_PLANS } from "../data";
import { Check, X, Users, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingStrategy() {
  const [agents, setAgents] = useState(3);

  // Total cost math
  const getPlanCost = (basePrice: string) => {
    const priceNum = parseInt(basePrice.replace("£", ""), 10);
    return priceNum * agents;
  };

  return (
    <section id="pricing" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Background gradients */}
      <div className="absolute right-[-15%] top-[10%] w-[400px] h-[400px] rounded-full bg-[#FF4C5C]/5 blur-[150px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-[#DFB74A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB74A] mb-4 block">
            Transparent Pricing
          </span>
          <h2
            className="text-3xl md:text-5xl font-light text-white tracking-tight leading-[1.2] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            No minute taxes. No billing shock. <br />
            Just predictable <span className="text-[#DFB74A] italic">flat subscriptions...</span>
          </h2>
          <p className="text-[#CBD5E1] font-light leading-relaxed text-base">
            Clients should never be taxed for going over a minute just to speak to their customers. Pay flat pricing based on concurrent Serali digital workforce capacity.
          </p>
        </div>

        {/* Seat / Agent Count Selector Calculator */}
        <div className="max-w-3xl mx-auto mb-16 p-8 rounded-3xl border border-[#192032] bg-[#0B0E17]/90 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#1B1813] border border-[#BE9B43]/30 text-[#DFB74A]">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
                  Agent Concurrency Calculator
                </h3>
                <p className="text-[#CBD5E1]/80 text-xs font-light">
                  How many Serali digital employees do you want working concurrently?
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#182131]/60 border border-[#192032] p-4 rounded-2xl w-full md:w-auto justify-between">
              <button
                onClick={() => setAgents(Math.max(1, agents - 1))}
                className="w-10 h-10 rounded-xl bg-[#0B0E17] border border-[#192032] hover:border-[#DFB74A] flex items-center justify-center text-white transition-colors text-lg"
              >
                -
              </button>
              <span className="font-mono text-2xl font-bold text-white px-4">{agents}</span>
              <button
                onClick={() => setAgents(agents + 1)}
                className="w-10 h-10 rounded-xl bg-[#0B0E17] border border-[#192032] hover:border-[#DFB74A] flex items-center justify-center text-white transition-colors text-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {PRICING_PLANS.map((plan, idx) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.name}
                className={`p-6 rounded-[28px] border flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "border-[#BE9B43] bg-[#1B1813]/80 shadow-[0_15px_40px_rgba(220,188,76,0.15)] scale-[1.02] z-10"
                    : "border-[#192032] bg-[#0B0E17]/85 hover:border-[#314767]/50"
                }`}
              >
                {isPopular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#DFB74A] text-[#07090D] text-[9px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
                  <p className="text-[#CBD5E1]/80 text-[11px] leading-relaxed mb-6 h-10 font-light">
                    {plan.description}
                  </p>

                  <div className="border-b border-[#192032] pb-6 mb-6">
                    <div className="flex items-baseline gap-1 text-white">
                      <span className="text-4xl font-light tracking-tight">£{getPlanCost(plan.price).toLocaleString()}</span>
                      <span className="text-[#64748B] text-xs font-mono">/mo</span>
                    </div>
                    <span className="text-[10px] text-[#64748B] font-mono block mt-2 uppercase tracking-wider">
                      Includes {plan.minutes} minutes ({agents} Seats)
                    </span>
                  </div>

                  {/* Feature lists */}
                  <div className="space-y-4">
                    {plan.features.map((feat, fidx) => (
                      <div key={fidx} className="flex gap-3 items-center text-xs">
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-[#009678]/10 text-[#009678] flex items-center justify-center flex-shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-white/5 text-[#64748B]/30 flex items-center justify-center flex-shrink-0">
                            <X size={10} strokeWidth={3} />
                          </div>
                        )}
                        <span className={`font-light ${feat.included ? "text-[#CBD5E1]" : "text-[#64748B] line-through"}`}>
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#192032]">
                  <button
                    className={`w-full py-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] ${
                      isPopular
                        ? "bg-[#DFB74A] text-black shadow-[0_5px_15px_rgba(220,188,76,0.2)] hover:bg-[#DFB74A]/90"
                        : "bg-[#0B0E17] text-white border border-[#192032] hover:bg-[#182131]/60"
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom enterprise block */}
        <div className="p-8 rounded-[28px] border border-[#BE9B43]/20 bg-[#1B1813]/50 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 max-w-5xl mx-auto">
          <div className="absolute top-0 right-[-10%] w-[250px] h-[250px] rounded-full bg-[#DFB74A]/5 blur-[100px] pointer-events-none" />
          
          <div>
            <span className="flex items-center gap-2 text-[10px] font-mono text-[#D9B14E] uppercase font-bold mb-2">
              <ShieldCheck size={12} />
              Enterprise Dedicated Deployment
            </span>
            <h3 className="text-white text-xl md:text-2xl font-light mb-3">
              Need VPC Private Cloud, White-Labeling, or SCIM?
            </h3>
            <p className="text-[#CBD5E1] text-xs font-light max-w-2xl leading-relaxed">
              We offer bespoke licensing packages optimized for local region data residency requirements, custom on-premise GPU limitations, and SCIM user provisioning. Secure your dedicated corporate cluster.
            </p>
          </div>

          <button className="flex-shrink-0 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-[#07090D] bg-[#DFB74A] hover:bg-[#DFB74A]/90 transition-all duration-300 flex items-center gap-2 w-full lg:w-auto justify-center shadow-[0_0_20px_rgba(220,188,76,0.15)]">
            Consult Enterprise Directors
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
