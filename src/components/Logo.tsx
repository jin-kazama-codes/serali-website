import React, { useState, useEffect } from "react";

interface LogoProps {
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ theme = "dark", size = "md" }: LogoProps) {
  const isDarkBg = theme === "dark";
  const [imgError, setImgError] = useState(false);

  // Size configurations
  const sizes = {
    sm: { container: "w-6 h-6", iconSize: 24, img: "h-6 w-auto", text: "text-lg", tracking: "tracking-[0.25em]" },
    md: { container: "w-8 h-8", iconSize: 32, img: "h-8 w-auto", text: "text-xl", tracking: "tracking-[0.3em]" },
    lg: { container: "w-10 h-10", iconSize: 40, img: "h-10 w-auto", text: "text-2xl md:text-3xl", tracking: "tracking-[0.35em]" },
  };

  const current = sizes[size];
  const textColor = isDarkBg ? "text-white" : "text-black";
  const strokeColor = isDarkBg ? "#FFFFFF" : "#000000";
  const brandGold = "#DFB74A";

  // Check both root and public paths for robustness
  const logoSrc = isDarkBg ? "/logo_white.png" : "/logo_black.png";

  return (
    <div className="flex items-center gap-3.5 select-none font-sans">
      {!imgError ? (
        <img
          src={logoSrc}
          alt="Serali Logo"
          className={`${current.img} object-contain transition-transform duration-300 hover:scale-[1.05]`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Sophisticated custom-designed Serali SVG brand mark */
        <svg
          width={current.iconSize}
          height={current.iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:rotate-45 cursor-pointer"
        >
          {/* Outer diamond frame */}
          <rect
            x="6"
            y="6"
            width="28"
            height="28"
            rx="2"
            transform="rotate(45 20 20)"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeOpacity="0.2"
          />
          {/* Inner accent diamond */}
          <rect
            x="12"
            y="12"
            width="16"
            height="16"
            transform="rotate(45 20 20)"
            stroke={brandGold}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          {/* Central minimalist 'S' logo curve */}
          <path
            d="M 15 15 C 15 11.5, 25 11.5, 25 15 C 25 18.5, 15 19.5, 15 23 C 15 26.5, 25 26.5, 25 23"
            stroke={brandGold}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_8px_rgba(223,183,74,0.3)]"
          />
          {/* Dot indicators representing AI Nodes / Workforce */}
          <circle cx="20" cy="7" r="1.5" fill={strokeColor} fillOpacity="0.6" />
          <circle cx="20" cy="33" r="1.5" fill={strokeColor} fillOpacity="0.6" />
        </svg>
      )}

      {/* Brand typography */}
      <span className={`${current.text} ${current.tracking} font-light uppercase ${textColor} leading-none`}>
        Serali
      </span>
    </div>
  );
}



