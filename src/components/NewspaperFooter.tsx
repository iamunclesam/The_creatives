import React from 'react';
import { eventConfig } from '../data/summitData';

export const NewspaperFooter: React.FC = () => {
  return (
    <footer className="border-t-2 border-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-8">
      {/* Impressum Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-black/30 font-mono text-xs">
        <div>
          <span className="font-bold text-black uppercase block mb-1">
            IMPRESSUM & PUBLISHER
          </span>
          <p className="text-black/70 leading-relaxed font-serif text-sm">
            The Spark Gazette is the official broadsheet and summit journal of The Spark Creatives Summit, published in Ado-Ekiti, Ekiti State, Nigeria.
          </p>
        </div>

        <div>
          <span className="font-bold text-black uppercase block mb-1">
            SECRETARIAT ADDRESS
          </span>
          <p className="text-black/70 leading-relaxed">
            {eventConfig.venue},<br />
            {eventConfig.location}, {eventConfig.state}, Nigeria.<br />
            Direct Wire: {eventConfig.contact.email}
          </p>
        </div>

        <div>
          <span className="font-bold text-black uppercase block mb-1">
            TELEGRAPH & CABLES
          </span>
          <div className="flex flex-col space-y-1 text-black/80 font-bold">
            <a href={eventConfig.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-[#FF4500] underline">
              X (TWITTER): @THESPARKSUMMIT
            </a>
            <a href={eventConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-[#FF4500] underline">
              INSTAGRAM: @THESPARKSUMMIT
            </a>
            <a href={eventConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF4500] underline">
              LINKEDIN: THE SPARK SUMMIT
            </a>
          </div>
        </div>

        <div>
          <span className="font-bold text-black uppercase block mb-1">
            PRESS DISPATCH
          </span>
          <p className="text-black/70 leading-relaxed">
            Authorized circulation: 2,000 registered delegates. First Edition. Printed on sustainable digital broadsheet.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-black/60 gap-2">
        <span>© 2025 THE SPARK GAZETTE • ALL RIGHTS RESERVED • ADO-EKITI, NIGERIA</span>
        <span>A GATHERING FOR THE NEXT GENERATION OF AFRICAN CREATORS</span>
      </div>
    </footer>
  );
};

