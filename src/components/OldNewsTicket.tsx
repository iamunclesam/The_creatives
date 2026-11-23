import React from 'react';
import { Scissors, ArrowRight } from 'lucide-react';

interface TicketProps {
  onRegisterClick: () => void;
}

export const OldNewsTicket: React.FC<TicketProps> = ({ onRegisterClick }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Cut along dotted line */}
      <div className="flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1A1815]/60 mb-3">
        <Scissors className="w-4 h-4 text-[#C9381A]" />
        <span>✂ CUT ALONG THE DOTTED LINE FOR YOUR SUMMIT ADMISSION ✂</span>
        <Scissors className="w-4 h-4 text-[#C9381A]" />
      </div>

      {/* Vintage Ticket Stub Box */}
      <div className="border-4 border-dashed border-[#1A1815] p-6 sm:p-10 bg-[#FAF7F0] shadow-[6px_6px_0px_#1A1815] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="bg-[#C9381A] text-white px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
                OFFICIAL PRESS PASS
              </span>
              <span className="font-mono text-xs text-[#1A1815]/60 font-bold">
                NO. #SPK-2025-EKITI
              </span>
            </div>

            <h3 className="font-playfair font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#1A1815] leading-tight">
              THE SPARK CREATIVES SUMMIT
            </h3>

            <p className="font-serif text-sm sm:text-base text-[#1A1815]/80 max-w-lg leading-relaxed">
              Grants bearer full admission to all keynotes, 4 studio workspaces, the ₦10M seed pitch, and free delegate lunch in Ado-Ekiti.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs border-t border-[#1A1815]/20">
              <span><strong>DATE:</strong> OCT 25, 2025</span>
              <span><strong>TIME:</strong> 9:00 AM SHARP</span>
              <span className="text-[#C9381A] font-bold">★ 100% FREE ENTRY ★</span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:border-l-2 lg:border-dashed lg:border-[#1A1815] lg:pl-8 space-y-4 text-center lg:text-left">
            <button
              onClick={onRegisterClick}
              className="w-full bg-[#C9381A] hover:bg-[#1A1815] text-white py-4 font-mono font-black text-xs uppercase tracking-widest transition-colors border-2 border-[#1A1815] shadow-[4px_4px_0px_#1A1815] flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>CLAIM TICKET (RSVP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Vintage barcode */}
            <div className="flex flex-col items-center justify-center space-y-1 pt-1 opacity-75">
              <div className="h-8 w-full flex items-stretch gap-[2px] px-2">
                {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3].map((w, i) => (
                  <div key={i} className="bg-[#1A1815] h-full flex-1" style={{ maxWidth: `${w * 2}px` }} />
                ))}
              </div>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#1A1815]/70">
                #SPK-EKITI-2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

