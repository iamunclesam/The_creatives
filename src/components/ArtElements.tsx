import React from 'react';

// Sticker Tape Badge
export const TapeSticker: React.FC<{ text: string; className?: string; color?: string }> = ({
  text,
  className = "",
  color = "bg-[#FFD000] text-black"
}) => (
  <div className={`inline-block px-3 py-1 font-mono font-black text-[11px] tracking-wider uppercase border border-black shadow-[3px_3px_0px_#000000] rotate-[-2deg] ${color} ${className}`}>
    {text}
  </div>
);

// Rotating Stamp Seal ("PULL UP • THE SPARK 2025 •")
export const RotatingStamp: React.FC<{ size?: number; className?: string }> = ({
  size = 90,
  className = ""
}) => (
  <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_18s_linear_infinite]">
      <defs>
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
      </defs>
      <circle cx="50" cy="50" r="47" stroke="#000000" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <text fill="#000000" fontSize="9.5" fontFamily="Space Grotesk, monospace" fontWeight="bold" letterSpacing="0.18em">
        <textPath href="#circlePath" startOffset="0%">
          PULL UP • THE SPARK 2025 • EKITI OUTSIDE •
        </textPath>
      </text>
    </svg>
    <div className="absolute w-7 h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center text-xs font-black shadow-sm">
      ✦
    </div>
  </div>
);

// Hand-Drawn Arrow Scribble
export const ScribbleArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="60" height="40" viewBox="0 0 80 50" fill="none" className={`text-black ${className}`}>
    <path
      d="M5 25 C 25 10, 45 35, 70 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M58 12 L72 20 L62 30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Doodle Asterisk / Sparkle
export const SparkleDoodle: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

