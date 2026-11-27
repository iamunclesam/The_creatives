import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { PicassoGeometricStar } from './PicassoArt';

interface TicketProps {
  onRegisterClick: () => void;
}

export const PicassoTicketCanvas: React.FC<TicketProps> = ({ onRegisterClick }) => {
  return (
    <section id="passes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Picasso Exhibition Pass Canvas with High-Energy Pop */}
      <div className="border-[3px] border-[#18181B] p-6 sm:p-12 bg-white shadow-[8px_8px_0px_#18181B] relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">
        {/* Background Geometric Color Shards */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFE600]/30 rounded-bl-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#FF4D00]/15 rounded-tr-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-[#FF4D00] text-white px-3 py-1 text-xs font-mono font-black uppercase border border-[#18181B] shadow-[2px_2px_0px_#18181B]">
                OFFICIAL DELEGATE PASS
              </span>
              <span className="bg-[#FFE600] text-[#18181B] px-2.5 py-1 text-xs font-mono font-black uppercase border border-[#18181B] shadow-[2px_2px_0px_#18181B]">
                100% FREE ADMISSION
              </span>
              <span className="text-xs font-mono font-bold text-[#18181B]/60">
                #EX-2025-EKITI
              </span>
            </div>

            <h3 className="font-syne font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#18181B] leading-tight break-words">
              EMERGENCEX 2025
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#18181B]/85 max-w-xl leading-relaxed font-medium">
              One full pass unlocks everything: all 4 craft masterclasses, portfolio review slots, free lunch, delegate swag, and the live ₦10M seed pitch stage.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 font-mono text-xs border-t-2 border-[#18181B]/20">
              <div>
                <span className="text-[#18181B]/50 block uppercase font-bold">DATE:</span>
                <span className="font-black text-[#18181B]">SAT OCT 25, 2025</span>
              </div>
              <div>
                <span className="text-[#18181B]/50 block uppercase font-bold">VENUE:</span>
                <span className="font-black text-[#18181B]">CIVIC CENTRE, EKITI</span>
              </div>
              <div>
                <span className="text-[#18181B]/50 block uppercase font-bold">ADMISSION:</span>
                <span className="font-black text-[#FF4D00]">100% FREE (RSVP)</span>
              </div>
            </div>
          </div>

          {/* Right Action & Barcode */}
          <div className="lg:col-span-4 lg:border-l-2 lg:border-[#18181B] lg:pl-8 space-y-4 text-center lg:text-left">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#18181B]/60 tracking-widest block font-black">
                LIMITED SEATS AVAILABLE
              </span>
              <p className="font-syne font-black text-2xl text-[#18181B]">
                FREE ENTRY TICKET
              </p>
              <p className="font-mono text-xs text-[#FF4D00] font-bold">
                Free for all young creators & builders
              </p>
            </div>

            <button
              onClick={onRegisterClick}
              className="w-full bg-[#FF4D00] hover:bg-[#18181B] text-white py-4 font-mono font-black text-xs uppercase tracking-widest transition-all border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B] flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>CLAIM FREE PASS (RSVP)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Exhibition Barcode with Pop */}
            <div className="pt-2 flex flex-col items-center justify-center space-y-1">
              <div className="h-9 w-full flex items-stretch gap-[2px] opacity-90 px-2">
                {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3].map((w, i) => (
                  <div key={i} className="bg-[#18181B] h-full flex-1" style={{ maxWidth: `${w * 2}px` }} />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#18181B]/70 font-black">
                #EMERGENCEX-EKITI-2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
