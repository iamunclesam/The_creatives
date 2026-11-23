import React from 'react';

export const NewspaperTicker: React.FC = () => {
  const headlines = [
    "EXTRA! EXTRA! READ ALL ABOUT IT",
    "THE SPARK CREATIVES SUMMIT 2025",
    "1,500 CREATIVES HEADED TO ADO-EKITI",
    "₦10,000,000 SEED GRANTS AWARDED LIVE",
    "NO SUITS ALLOWED — PULL UP READY TO WORK",
    "DESIGN • CINEMA • AFROBEATS • CODE",
    "FREE ACCREDITATION WITH DIGITAL STUB",
    "SATURDAY, OCTOBER 25 • CIVIC CENTRE"
  ];

  return (
    <div className="border-y-2 border-black bg-[#FF4500] text-white py-2 overflow-hidden select-none my-6 shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...headlines, ...headlines, ...headlines].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4 font-mono font-black text-xs uppercase tracking-widest">
            <span>{text}</span>
            <span className="text-black">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

