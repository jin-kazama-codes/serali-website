import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-[#07090D] border-t border-[#192032] pt-20 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-[-10%] w-[300px] h-[300px] rounded-full bg-[#314767]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand block */}
          <div className="md:col-span-5 space-y-6">
            <Logo theme="dark" size="sm" />
            <p className="text-[#CBD5E1]/80 text-xs font-light leading-relaxed max-w-sm">
              Serali is the complete enterprise AI Workforce Platform, deploying compliant, vertically-optimized conversational digital employees. Engineered for absolute operational scale.
            </p>
            <div className="flex gap-4 text-[#64748B]">
              <a href="#" className="hover:text-[#DFB74A] transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="hover:text-[#DFB74A] transition-colors"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Product Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onScrollTo("manifesto")} className="text-[#CBD5E1]/70 hover:text-[#DFB74A] text-xs font-light transition-colors">
                  The Serali Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("capabilities")} className="text-[#CBD5E1]/70 hover:text-[#DFB74A] text-xs font-light transition-colors">
                  Capability Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("economics")} className="text-[#CBD5E1]/70 hover:text-[#DFB74A] text-xs font-light transition-colors">
                  Unit Economics Slider
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("sandbox")} className="text-[#CBD5E1]/70 hover:text-[#DFB74A] text-xs font-light transition-colors">
                  Agent Simulator Sandbox
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">
              Corporate Headquarters
            </h4>
            <div className="space-y-3 text-xs text-[#CBD5E1]/85 font-light leading-relaxed">
              <div className="flex gap-3 items-center">
                <MapPin size={14} className="text-[#DFB74A]" />
                <span>London Financial District, London, United Kingdom</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="text-[#DFB74A]" />
                <span>board@serali.ai</span>
              </div>
              <div className="flex gap-3 items-center">
                <ShieldCheck size={14} className="text-[#009678]" />
                <span className="text-[#009678]">GDPR Registrar & Compliance Officer active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#192032] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-[#64748B]">
            © {new Date().getFullYear()} Serali Technologies Ltd. All institutional investor rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-[#64748B]">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocols</a>
            <a href="#" className="hover:text-white transition-colors">System Telemetry Logs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
