import React from 'react';
import { eventConfig } from '../data/summitData';

export const PicassoFooter: React.FC = () => {
  return (
    <footer className="border-t-2 border-[#18181B] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#18181B]/20 font-mono text-xs">
        <div>
          <span className="font-syne font-black text-lg text-[#18181B] uppercase">
            STANDOUT SUMMIT
          </span>
          <p className="text-[#18181B]/60 mt-0.5">
            Ekiti State Civic & Cultural Centre, Ado-Ekiti, Nigeria.
          </p>
        </div>

        <div className="flex items-center gap-6 font-bold text-[#18181B]">
          <a href={eventConfig.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-[#C94A29]">
            X (Twitter)
          </a>
          <a href={eventConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-[#C94A29]">
            Instagram
          </a>
          <a href={eventConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C94A29]">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#18181B]/50 gap-2">
        <span>© 2025 STANDOUT CREATIVES SUMMIT • ALL RIGHTS RESERVED</span>
        <span>A GATHERING FOR THE NEXT GENERATION OF AFRICAN CREATORS</span>
      </div>
    </footer>
  );
};

