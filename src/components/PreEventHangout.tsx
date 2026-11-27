import React from 'react';
import { Calendar, MapPin, Laptop, Sparkles, ArrowRight, Users, Coffee } from 'lucide-react';

interface PreEventProps {
  onRegisterClick: () => void;
}

export const PreEventHangout: React.FC<PreEventProps> = ({ onRegisterClick }) => {
  return (
    <section id="hangout" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Container with High-Energy Pop Visuals */}
      <div className="border-[3px] border-[#18181B] bg-[#FEF9C3] p-6 sm:p-10 shadow-[8px_8px_0px_#18181B] relative overflow-hidden rounded-3xl">
        {/* Decorative corner tag */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FF4D00] rotate-45 border-b-[3px] border-[#18181B] hidden sm:block" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#FF4D00] text-white border-2 border-[#18181B] font-mono font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#18181B] rotate-[-1deg]">
                ★ UPCOMING EDITION
              </span>
              <span className="px-3 py-1 bg-white text-[#18181B] border-2 border-[#18181B] font-mono font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#18181B]">
                DECEMBER 12TH
              </span>
            </div>

            <h2 className="font-syne font-black text-2xl sm:text-4xl lg:text-[2.6rem] text-[#18181B] uppercase leading-tight">
              DEC 12: TECH WORKSHOP.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#18181B]/85 leading-relaxed font-medium max-w-xl">
              An intimate hands-on workshop in Ado-Ekiti. 80 seats. Bring your laptop for live building, design teardowns, and 1-on-1 portfolio feedback before the main 2K27 summit.
            </p>

            {/* Quick Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white border-2 border-[#18181B] p-3 shadow-[2px_2px_0px_#18181B]">
                <Laptop className="w-4 h-4 text-[#FF4D00] mb-1 stroke-[2.5]" />
                <p className="font-syne font-black text-xs uppercase text-[#18181B]">Live Builds</p>
                <p className="font-sans text-[11px] text-[#18181B]/70">Screen-sharing client projects</p>
              </div>

              <div className="bg-white border-2 border-[#18181B] p-3 shadow-[2px_2px_0px_#18181B]">
                <Users className="w-4 h-4 text-[#2563EB] mb-1 stroke-[2.5]" />
                <p className="font-syne font-black text-xs uppercase text-[#18181B]">Portfolio Review</p>
                <p className="font-sans text-[11px] text-[#18181B]/70">Direct feedback on your book</p>
              </div>

              <div className="bg-white border-2 border-[#18181B] p-3 shadow-[2px_2px_0px_#18181B]">
                <Sparkles className="w-4 h-4 text-[#10B981] mb-1 stroke-[2.5]" />
                <p className="font-syne font-black text-xs uppercase text-[#18181B]">The Network</p>
                <p className="font-sans text-[11px] text-[#18181B]/70">Connect with active builders</p>
              </div>
            </div>
          </div>

          {/* Right: Date Badge & Action */}
          <div className="lg:col-span-5 bg-white border-[3px] border-[#18181B] p-6 sm:p-8 shadow-[6px_6px_0px_#18181B] text-center space-y-4 rounded-2xl">
            <div className="inline-block px-3 py-1 bg-[#18181B] text-[#FFE600] font-mono font-black text-[10px] uppercase tracking-widest border border-[#18181B]">
              LIMITED TO 80 SEATS
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#FF4D00] uppercase font-black block">
                DATE & LOCATION
              </span>
              <p className="font-syne font-black text-3xl sm:text-4xl text-[#18181B] uppercase">
                DEC 12TH
              </p>
              <p className="font-mono text-xs text-[#18181B]/70 font-bold">
                ADO-EKITI • 2:00 PM – 6:00 PM WAT
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onRegisterClick}
                className="w-full bg-[#FF4D00] hover:bg-[#18181B] text-white py-4 font-mono font-black text-xs uppercase tracking-wider border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B] transition-all flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>RSVP FOR DEC 12</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <p className="text-[10px] font-mono text-[#18181B]/60 font-bold mt-2">
                100% Free • Limited to 80 Seats
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

