import React from 'react';
import { eventConfig } from '../data/summitData';

export const PicassoFooter: React.FC = () => {
  return (
    <footer className="border-t-[2.5px] border-[#18181B] bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-8 shadow-[0_-4px_0px_#18181B]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#18181B]/20 font-mono text-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#FF4D00] border border-[#18181B]" />
            <span className="font-syne font-black text-xl text-[#18181B] uppercase">
              EMERGENCE<span className="text-[#E02B20] text-[1.3em] font-black inline-block ml-0.5">X</span> 2K27
            </span>
          </div>
          <p className="text-[#18181B]/70 mt-1 font-bold">
            Next Up: Pre-Summit Tech Hangout (Dec 12th) • Main Stage 2K27 • Ado-Ekiti, Nigeria.
          </p>
        </div>

        <div className="flex items-center gap-6 font-black text-[#18181B]">
          <a href={eventConfig.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-[#FF4D00] transition-colors">
            X (Twitter)
          </a>
          <a href={eventConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-[#FF4D00] transition-colors">
            Instagram
          </a>
          <a href={eventConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF4D00] transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#18181B]/60 font-bold gap-2">
        <span>© 2K27 EMERGENCE<span className="text-[#E02B20] text-[1.2em] font-black inline-block ml-0.5">X</span> • ALL RIGHTS RESERVED</span>
        <span className="text-[#FF4D00]">BUILT FOR THE AMBITIOUS AFRICAN CREATIVE</span>
      </div>
    </footer>
  );
};
