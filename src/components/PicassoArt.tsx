import React from 'react';

// Picasso-Style Abstract Face / Cubist Single-Line Art
export const PicassoAbstractFace: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 280
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cubist Background Color Planes */}
    <path d="M40 30 L160 10 L180 130 L120 180 Z" fill="#D97724" fillOpacity="0.25" />
    <path d="M10 80 L100 60 L130 200 L30 220 Z" fill="#2563EB" fillOpacity="0.2" />
    <path d="M90 20 Q160 40 150 140 Q130 210 70 210 Z" fill="#F59E0B" fillOpacity="0.3" />

    {/* Continuous Picasso-Style Contour Lines */}
    <path
      d="M70 25 C110 20 150 45 155 95 C160 145 125 210 75 215 C35 210 25 150 30 110"
      stroke="#18181B"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Center Profile Nose & Brow Line */}
    <path
      d="M100 40 L95 105 L125 125 L95 130 L95 165 C85 165 75 160 70 155"
      stroke="#18181B"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Frontal Eye (Right) */}
    <ellipse cx="130" cy="85" rx="14" ry="9" stroke="#18181B" strokeWidth="3" fill="#FAF6EE" />
    <circle cx="130" cy="85" r="5" fill="#C94A29" />
    <path d="M115 75 Q130 68 145 75" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Profile Eye (Left - almond angled) */}
    <path d="M55 85 Q70 70 85 85 Q70 100 55 85 Z" stroke="#18181B" strokeWidth="3" fill="#FAF6EE" />
    <circle cx="68" cy="85" r="4" fill="#2563EB" />
    <path d="M55 70 Q70 65 85 70" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Cubist Dual-Tone Lips */}
    <path
      d="M80 180 Q100 170 120 180 Q100 195 80 180 Z"
      stroke="#18181B"
      strokeWidth="3"
      fill="#C94A29"
    />
    <line x1="80" y1="180" x2="120" y2="180" stroke="#18181B" strokeWidth="2" />

    {/* Abstract Ear / Geometric Arc */}
    <path
      d="M155 95 C175 105 175 140 150 145"
      stroke="#18181B"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="162" cy="120" r="3" fill="#18181B" />
  </svg>
);

// Picasso-Style Geometric Cubist Starburst & Guitar Accent
export const PicassoGeometricStar: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 40
}) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className}>
    <polygon points="40,5 52,28 78,40 52,52 40,75 28,52 2,40 28,28" fill="#C94A29" />
    <polygon points="40,15 48,32 65,40 48,48 40,65 32,48 15,40 32,32" fill="#FBBF24" />
    <circle cx="40" cy="40" r="7" fill="#18181B" />
  </svg>
);

// Picasso Brushstroke / Palette Patch
export const PicassoPalettePatch: React.FC<{ color?: string; className?: string }> = ({
  color = "#D97724",
  className = ""
}) => (
  <svg viewBox="0 0 100 40" className={`w-20 h-8 pointer-events-none ${className}`} fill="none">
    <path
      d="M5 25 C25 5 75 35 95 15 C80 35 30 38 5 25 Z"
      fill={color}
    />
  </svg>
);

