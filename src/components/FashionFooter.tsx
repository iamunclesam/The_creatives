import React from 'react';
import { eventConfig } from '../data/summitData';

export const FashionFooter: React.FC = () => {
  return (
    <footer className="border-t border-black/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-black/10">
        <div>
          <span className="font-display font-black text-xl text-black uppercase tracking-tight">
            THE SPARK SUMMIT
          </span>
          <p className="text-xs font-mono text-black/50 mt-1">
            Ekiti State Civic & Cultural Centre, Ado-Ekiti, Nigeria
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-black/70">
          <a href={eventConfig.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-[#FF5500]">
            X (Twitter)
          </a>
          <a href={eventConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-[#FF5500]">
            Instagram
          </a>
          <a href={eventConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF5500]">
            LinkedIn
          </a>
          <a href={`mailto:${eventConfig.contact.email}`} className="hover:text-[#FF5500]">
            Contact
          </a>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-black/40">
        <span>© 2025 The Spark Creatives Summit. All rights reserved.</span>
        <span>A Gathering for the Next Generation of African Creators.</span>
      </div>
    </footer>
  );
};

