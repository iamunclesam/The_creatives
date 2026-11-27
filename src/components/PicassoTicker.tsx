import React from 'react';

export const PicassoTicker: React.FC = () => {
  const items = [
    "NEXT UP: TECH WORKSHOP HANGOUT (DEC 12TH)",
    "ROAD TO EMERGENCEX 2K27",
    "TELL 1,500+ ABOUT YOUR BRAND",
    "LEARN TO CHARGE IN DOLLARS",
    "HANDS-ON LIVE CODING & DESIGN",
    "PORTFOLIO ROASTS",
    "STAGE SPOTLIGHT OPPORTUNITY",
    "FREE FOOD & MERCH",
    "ADO-EKITI 2K27",
  ];

  return (
    <div className="py-4 bg-[#FFE600] border-y-[3px] border-[#18181B] overflow-hidden my-8 select-none shadow-[0_4px_0px_#18181B]">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-4">
            <span className="font-syne font-black text-sm sm:text-base tracking-wider uppercase text-[#18181B]">
              {text}
            </span>
            <span className="w-2.5 h-2.5 bg-[#FF4D00] rotate-45 border border-[#18181B]" />
          </div>
        ))}
      </div>
    </div>
  );
};

