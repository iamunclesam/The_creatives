import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PicassoGeometricStar } from './PicassoArt';

interface TicketProps {
  onRegisterClick: () => void;
}

export const PicassoTicketCanvas: React.FC<TicketProps> = ({ onRegisterClick }) => {
  return (
    <section id="passes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Picasso Exhibition Pass Canvas */}
      <div className="border-3 border-[#18181B] p-6 sm:p-12 bg-white shadow-[8px_8px_0px_#18181B] relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">
        {/* Background Geometric Color Shards */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C94A29]/15 rounded-bl-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#2563EB]/15 rounded-tr-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#C94A29] text-white px-3 py-1 text-xs font-mono font-black uppercase border border-[#18181B]">
                OFFICIAL SUMMIT PASS
              </span>
              <span className="text-xs font-mono font-bold text-[#18181B]/60">
                SERIAL: #SPK-2025-EKITI
              </span>
            </div>

            <h3 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#18181B] leading-tight">
              THE SPARK CREATIVES SUMMIT 2025
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#18181B]/80 max-w-xl leading-relaxed">
              This free pass gives you full entry to all workshops, main stage talks, free lunch, portfolio reviews, and the live ₦10,000,000 pitch competition in Ado-Ekiti.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 font-mono text-xs border-t-2 border-[#18181B]/15">
              <div>
                <span className="text-[#18181B]/50 block">DATE:</span>
                <span className="font-bold text-[#18181B]">SAT OCT 25, 2025</span>
              </div>
              <div>
                <span className="text-[#18181B]/50 block">VENUE:</span>
                <span className="font-bold text-[#18181B]">CIVIC CENTRE, EKITI</span>
              </div>
              <div>
                <span className="text-[#18181B]/50 block">COST:</span>
                <span className="font-bold text-[#C94A29]">100% FREE (RSVP)</span>
              </div>
            </div>
          </div>

          {/* Right Action & Barcode */}
          <div className="lg:col-span-4 lg:border-l-2 lg:border-[#18181B] lg:pl-8 space-y-4 text-center lg:text-left">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#18181B]/50 tracking-widest block font-bold">
                RESERVE YOUR PASS
              </span>
              <p className="font-syne font-black text-2xl text-[#18181B]">
                FREE ENTRY TICKET
              </p>
              <p className="font-mono text-xs text-[#C94A29] font-bold">
                Free for all young creatives
              </p>
            </div>

            <button
              onClick={onRegisterClick}
              className="w-full bg-[#C94A29] hover:bg-[#18181B] text-white py-4 font-mono font-black text-xs uppercase tracking-widest transition-all border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B] flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>CLAIM FREE PASS (RSVP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Vintage/Exhibition Barcode */}
            <div className="pt-2 flex flex-col items-center justify-center space-y-1">
              <div className="h-9 w-full flex items-stretch gap-[2px] opacity-80 px-2">
                {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3].map((w, i) => (
                  <div key={i} className="bg-[#18181B] h-full flex-1" style={{ maxWidth: `${w * 2}px` }} />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#18181B]/60 font-bold">
                #SPK-EKITI-2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

