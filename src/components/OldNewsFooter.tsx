import React from 'react';
import { eventConfig } from '../data/summitData';

export const OldNewsFooter: React.FC = () => {
  return (
    <footer className="border-t-2 border-[#1A1815] max-w-6xl mx-auto px-4 sm:px-6 py-8 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1A1815]/70 pb-4 border-b border-[#1A1815]/20">
        <div>
          <span className="font-bold text-[#1A1815] uppercase">THE SPARK GAZETTE</span>
          <p className="text-[11px] text-[#1A1815]/60 mt-0.5">
            Ekiti State Civic & Cultural Centre, Ado-Ekiti, Nigeria.
          </p>
        </div>

        <div className="flex items-center gap-6 font-bold text-[#1A1815]">
          <a href={eventConfig.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-[#C9381A] underline">
            X (Twitter)
          </a>
          <a href={eventConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-[#C9381A] underline">
            Instagram
          </a>
          <a href={eventConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C9381A] underline">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#1A1815]/50 gap-2">
        <span>© 2025 THE SPARK GAZETTE • ALL RIGHTS RESERVED</span>
        <span>A GATHERING FOR THE NEXT GENERATION OF AFRICAN CREATORS</span>
      </div>
    </footer>
  );
};

