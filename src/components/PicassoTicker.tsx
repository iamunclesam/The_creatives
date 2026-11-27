import React from 'react';

export const PicassoTicker: React.FC = () => {
  const items = [
    "DEC 12 TECH MEETUP",
    "EMERGENCEX 2K27",
    "TELL EVERYONE ABOUT YOUR BRAND",
    "LEARN TO CHARGE IN DOLLARS",
    "LIVE CODING & DESIGN SESSIONS",
    "HONEST PORTFOLIO REVIEWS",
    "STAGE TIME FOR CREATORS",
    "ADO-EKITI",
  ];

  return (
    <div className="py-4 bg-[#FFE600] border-y-[3px] border-[#18181B] overflow-hidden my-8 select-none shadow-[0_4px_0px_#18181B]">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-4">
            <span className="font-syne font-black text-sm sm:text-base tracking-wider uppercase text-[#18181B]">
              {text === "EMERGENCEX 2K27" ? (
                <>
                  EMERGENCE<span className="text-[#E02B20] text-[1.3em] font-black inline-block ml-0.5">X</span> 2K27
                </>
              ) : (
                text
              )}
            </span>
            <span className="w-2.5 h-2.5 bg-[#FF4D00] rotate-45 border border-[#18181B]" />
          </div>
        ))}
      </div>
    </div>
  );
};

