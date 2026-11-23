import React from 'react';
import { DaVivaSunburst } from './DaVivaMotifs';

export const MarqueeBanner: React.FC = () => {
  const items = [
    "CREATIVE MASTERCLASSES",
    "DAVIVA WAX & AFRO-AESTHETICS",
    "GENERATIVE AI & CODE",
    "CINEMATOGRAPHY",
    "SOUND DESIGN",
    "₦10M+ SEED GRANTS",
    "BRAND ARCHITECTURE",
    "EKITI CREATIVE RENAISSANCE"
  ];

  return (
    <div className="py-3 bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-[#FF4600] text-black overflow-hidden select-none border-y-2 border-black rotate-[-1deg] my-4 shadow-xl">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 mx-3 font-display font-black text-xs sm:text-sm tracking-widest uppercase">
            <span>{item}</span>
            <DaVivaSunburst size={16} className="shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
