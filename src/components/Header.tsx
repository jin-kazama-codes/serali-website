import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenSandbox: () => void;
}

export default function Header({ onScrollTo, onOpenSandbox }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Manifesto", id: "manifesto" },
    { label: "Capabilities", id: "capabilities" },
    { label: "Economics", id: "economics" },
    { label: "Sandbox", id: "sandbox" },
    { label: "Pricing", id: "pricing" },
    { label: "Founders", id: "founders" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#07090D]/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => onScrollTo("hero")}>
          <Logo theme="dark" size="sm" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="text-white/60 hover:text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4 font-sans">
          <button
            onClick={onOpenSandbox}
            className="px-6 py-2.5 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-[#F8F8F8] hover:bg-[#DFB74A] hover:text-[#07090D] hover:border-[#DFB74A] transition-all duration-300 cursor-pointer"
          >
            Access Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white p-1"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#07090D]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollTo(item.id);
              }}
              className="text-white/70 hover:text-[#DFB74A] text-left text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSandbox();
            }}
            className="w-full text-center px-6 py-3.5 border border-white/20 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F8F8] hover:bg-[#DFB74A] hover:text-[#07090D] hover:border-[#DFB74A] transition-all duration-300"
          >
            Access Portal
          </button>
        </div>
      )}
    </header>
  );
}

