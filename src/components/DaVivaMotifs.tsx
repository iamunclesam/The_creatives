import React from 'react';

// DaViva Fabric Patterns & Authentic Afro-Centric Ornamental Motifs

// 1. Classic DaViva Spiral Fan / "Record" Wax Motif
export const DaVivaSpiralFan: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" className={className} fill="none">
    {/* Outer decorative ring */}
    <circle cx="60" cy="60" r="56" stroke="#FF4600" strokeWidth="2.5" strokeDasharray="4 4" />
    <circle cx="60" cy="60" r="50" stroke="#FF8A00" strokeWidth="1.5" opacity="0.7" />
    <circle cx="60" cy="60" r="42" fill="#FF4600" fillOpacity="0.1" stroke="#FFB800" strokeWidth="2" />
    
    {/* Concentric spiral wax ribs */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 60 60)`}>
        <path
          d="M60 20 Q68 35 60 48"
          stroke={i % 2 === 0 ? "#FF4600" : "#FFB800"}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="60" cy="14" r="2.5" fill="#FFB800" />
      </g>
    ))}

    {/* Center rosette */}
    <circle cx="60" cy="60" r="18" fill="#FF4600" />
    <circle cx="60" cy="60" r="12" fill="#FFB800" />
    <circle cx="60" cy="60" r="6" fill="#080808" />
  </svg>
);

// 2. DaViva Sunburst Rosette Seal
export const DaVivaSunburst: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
    <circle cx="50" cy="50" r="46" stroke="#FF4600" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.7" />
    <circle cx="50" cy="50" r="38" stroke="#FF8A00" strokeWidth="2" opacity="0.9" />
    <circle cx="50" cy="50" r="26" fill="#FF4600" fillOpacity="0.2" stroke="#FFB800" strokeWidth="2" />
    
    {/* 8 Floral Wax Petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
      <g key={idx} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 12 C46 24 46 30 50 36 C54 30 54 24 50 12 Z"
          fill={idx % 2 === 0 ? "#FF4600" : "#FF8A00"}
        />
        <circle cx="50" cy="7" r="3" fill="#FFB800" />
      </g>
    ))}
    <circle cx="50" cy="50" r="12" fill="#FAF8F5" />
    <circle cx="50" cy="50" r="5" fill="#FF4600" />
  </svg>
);

// 3. Full-Width DaViva Fabric Border / Ribbon
export const DaVivaRibbon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full overflow-hidden relative shadow-lg ${className}`}>
    <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="w-full h-5 block">
      <defs>
        <pattern id="daviva-ribbon-pattern" width="60" height="24" patternUnits="userSpaceOnUse">
          {/* Triangular Chevron Band */}
          <polygon points="0,0 30,24 60,0" fill="#FF4600" />
          <polygon points="0,24 30,0 60,24" fill="#FF8A00" />
          <polygon points="15,12 30,24 45,12" fill="#FFB800" />
          <circle cx="30" cy="12" r="3" fill="#080808" />
          <circle cx="0" cy="12" r="2" fill="#FAF8F5" />
          <circle cx="60" cy="12" r="2" fill="#FAF8F5" />
        </pattern>
      </defs>
      <rect width="100%" height="24" fill="url(#daviva-ribbon-pattern)" />
    </svg>
  </div>
);

// 4. DaViva Fabric Section Header Accent
export const DaVivaHeaderDivider: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="flex flex-col items-center justify-center my-6 text-center">
    <div className="flex items-center gap-3">
      <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#FF4600] to-[#FF8A00]" />
      <DaVivaSpiralFan size={28} />
      <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-black text-[#FF8A00]">
        {title}
      </span>
      <DaVivaSpiralFan size={28} />
      <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#FF4600] to-[#FF8A00]" />
    </div>
    {subtitle && (
      <span className="text-[11px] font-mono text-[#94949E] uppercase tracking-widest mt-1">
        {subtitle}
      </span>
    )}
  </div>
);

// 5. DaViva Corner Ornamental Frame for Cards & Images
export const DaVivaCornerFrame: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={`w-8 h-8 pointer-events-none ${className}`} fill="none">
    <path d="M0 0 L40 0 L40 10 L10 10 L10 40 L0 40 Z" fill="#FF4600" />
    <path d="M10 10 L25 10 L25 16 L16 16 L16 25 L10 25 Z" fill="#FF8A00" />
    <circle cx="5" cy="5" r="2" fill="#FFB800" />
  </svg>
);
