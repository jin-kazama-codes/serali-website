import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrokenModel from "./components/BrokenModel";
import IndustryOverhaul from "./components/IndustryOverhaul";
import UnitEconomics from "./components/UnitEconomics";
import PlatformManifesto from "./components/PlatformManifesto";
import CapabilityMatrix from "./components/CapabilityMatrix";
import AgentSandbox from "./components/AgentSandbox";
import PricingStrategy from "./components/PricingStrategy";
import VisionRoadmap from "./components/VisionRoadmap";
import Founders from "./components/Founders";
import Footer from "./components/Footer";

export default function App() {
  const [sandboxAgentId, setSandboxAgentId] = useState("arthur");

  // Smooth scroll handler
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // When clicking an industry's test trigger
  const handleSimulateIndustry = (industryId: string) => {
    // Map industry vertical to agent IDs
    const industryAgentMap: Record<string, string> = {
      "real-estate": "arthur",
      healthcare: "clara",
      banking: "sarah",
      "higher-education": "charles",
    };

    const targetAgentId = industryAgentMap[industryId] || "arthur";
    setSandboxAgentId(targetAgentId);
    
    // Smooth scroll to the sandbox demo element
    handleScrollTo("sandbox");
  };

  return (
    <div className="bg-[#07090D] min-h-screen text-[#F8FAFC] selection:bg-[#DFB74A] selection:text-[#07090D]">
      {/* 1. Header with dynamic triggers */}
      <Header
        onScrollTo={handleScrollTo}
        onOpenSandbox={() => handleScrollTo("sandbox")}
      />

      {/* 2. Hero Section with responsive entrances */}
      <Hero
        onLearnMore={() => handleScrollTo("manifesto")}
        onOpenSandbox={() => handleScrollTo("sandbox")}
      />

      {/* 3. Inefficiencies Analysis (Slide 2) */}
      <BrokenModel onExploreSolutions={() => handleScrollTo("capabilities")} />

      {/* 4. Target Industry Verticals & Overhaul case metrics (Slide 3) */}
      <IndustryOverhaul onSimulateIndustry={handleSimulateIndustry} />

      {/* 5. Cost-Benefit Calculator Slider (Slide 5) */}
      <UnitEconomics />

      {/* 6. Serali Manifesto & Pillars (Slide 8 & 9) */}
      <PlatformManifesto />

      {/* 7. Competitive Feature Matrix checklist (Slide 7) */}
      <CapabilityMatrix />

      {/* 8. Interactive Serali Platform Admin Sandbox (The Product Canvas) */}
      <AgentSandbox preselectedAgentId={sandboxAgentId} />

      {/* 9. Concurrency Plans pricing blocks (Slide 10) */}
      <PricingStrategy />

      {/* 10. Vision stages & Capital Fundraising timeline (Slide 11 & 14) */}
      <VisionRoadmap />

      {/* 11. Co-Founders, previous firms, and India Hub synergies (Slide 20 & 13) */}
      <Founders />

      {/* 12. Corporate Footer & Compliance Seals */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
