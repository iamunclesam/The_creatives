import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { eventConfig } from '../data/summitData';

interface HeroProps {
  onRegisterClick: () => void;
}

export const NewspaperHero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section id="front-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner */}
      <div className="bg-[#1A1815] text-[#EFE9DC] px-4 py-2 flex flex-wrap items-center justify-between text-xs font-mono font-bold uppercase tracking-wider mb-6">
        <div className="flex items-center gap-2">
          <span className="bg-[#C9381A] text-white px-2 py-0.5 text-[10px]">LATE CITY NEWS</span>
          <span>THE SPARK CREATIVES SUMMIT IS SET FOR OCTOBER 25</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#EFE9DC]/80">
          <span>ADO-EKITI CIVIC CENTRE</span>
          <span>•</span>
          <span className="text-[#C9381A]">FREE REGISTRATION IS OPEN</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="border-b-2 border-[#1A1815] pb-6 mb-6">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9381A] font-black block">
            ★ FRONT PAGE NEWS ★
          </span>
          <h2 className="font-playfair font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-[#1A1815]">
            WHERE CREATIVITY MEETS OPPORTUNITY.
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#1A1815]/85 max-w-3xl mx-auto leading-snug">
            "One gathering in Ekiti for young designers, filmmakers, developers, and music makers ready to turn their skills into real careers."
          </p>
        </div>
      </div>

      {/* 3-Column Front Page Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b-2 border-[#1A1815] pb-8">
        
        {/* Left Column: Short Story in Plain English */}
        <div className="lg:col-span-4 space-y-3 font-serif text-[#1A1815]/90 text-sm sm:text-base leading-relaxed border-b lg:border-b-0 lg:border-r border-[#1A1815]/20 pb-6 lg:pb-0 lg:pr-6">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase text-[#1A1815]/60 border-b border-[#1A1815]/15 pb-1 mb-2">
            <span>EVENT REPORT</span>
            <span>ADO-EKITI</span>
          </div>

          <p className="drop-cap">
            For a long time, people believed you had to move to Lagos or leave Nigeria to build a great creative career. We are here to change that story.
          </p>

          <p>
            On Saturday, October 25, 2025, 1,500 young creatives are gathering at the Ekiti State Civic Centre in Ado-Ekiti. No boring lectures or long speeches. Just real practitioners showing you how to get better at your craft, find good clients, and get paid what you deserve.
          </p>

          <div className="p-3 bg-[#1A1815]/5 border-l-4 border-[#C9381A] my-3 font-sans text-xs italic">
            "Stop creating alone in your room. Come meet 1,500 people who do what you do, learn from the best, and walk away with real opportunities."
          </div>

          <p>
            You will get practical workshops, free reviews of your work from top directors, and a chance to pitch for ₦10,000,000 in free grants.
          </p>
        </div>

        {/* Center Column: Halftone Photo */}
        <div className="lg:col-span-5 relative space-y-3 border-b lg:border-b-0 lg:border-r border-[#1A1815]/20 pb-6 lg:pb-0 lg:pr-6">
          <div className="border-2 border-[#1A1815] p-2 bg-[#FAF7F0] shadow-[5px_5px_0px_#1A1815] relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-black border border-[#1A1815]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Creative in Ekiti"
                className="w-full h-full object-cover vintage-halftone"
              />

              {/* Rubber Stamp */}
              <div className="absolute top-4 right-4 rubber-stamp bg-[#FAF7F0]/95 text-xs sm:text-sm font-black shadow-md">
                ★ FREE PASS • OCT 25 ★
              </div>

              <div className="absolute bottom-2 left-2 bg-[#1A1815] text-[#EFE9DC] font-mono text-[9px] px-2 py-0.5 uppercase font-bold">
                ADO-EKITI CIVIC CENTRE
              </div>
            </div>
          </div>

          <div className="border-t border-[#1A1815]/15 pt-2">
            <p className="font-mono text-xs text-[#1A1815]/75 italic leading-snug">
              <strong className="text-[#1A1815] not-italic font-bold">FIG 1.0: </strong> 
              1,500 young creatives are coming together in Ado-Ekiti on October 25 to learn, connect, and collaborate across 4 main areas.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
            <div className="border border-[#1A1815] p-2 bg-[#F7F3EA]">
              <span className="font-playfair font-black text-lg block text-[#1A1815]">1,500+</span>
              <span className="text-[10px] text-[#1A1815]/60 uppercase">Creatives</span>
            </div>
            <div className="border border-[#1A1815] p-2 bg-[#F7F3EA]">
              <span className="font-playfair font-black text-lg block text-[#1A1815]">24+</span>
              <span className="text-[10px] text-[#1A1815]/60 uppercase">Mentors</span>
            </div>
            <div className="border border-[#1A1815] p-2 bg-[#F7F3EA]">
              <span className="font-playfair font-black text-lg block text-[#C9381A]">₦10M+</span>
              <span className="text-[10px] text-[#1A1815]/60 uppercase">Free Grants</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clear Action Box in Plain English */}
        <div className="lg:col-span-3 space-y-5">
          <div className="border-2 border-[#1A1815] p-5 bg-[#FAF7F0] shadow-[4px_4px_0px_#1A1815] space-y-4">
            <div className="border-b-2 border-[#1A1815] pb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9381A] font-black block">
                FREE ATTENDANCE
              </span>
              <h3 className="font-playfair font-black text-xl text-[#1A1815] uppercase leading-tight mt-1">
                2,000 FREE PASSES PRINTED.
              </h3>
            </div>

            <p className="font-serif text-xs text-[#1A1815]/80 leading-relaxed">
              Admission is completely free because our partners covered the cost. You get full access to all talks, workshops, and lunch.
            </p>

            <div className="space-y-2 pt-2 border-t border-[#1A1815]/15 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-[#1A1815] font-bold">
                <Check className="w-3.5 h-3.5 text-[#C9381A]" />
                <span>₦10M PITCH COMPETITION</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#1A1815] font-bold">
                <Check className="w-3.5 h-3.5 text-[#C9381A]" />
                <span>FREE REVIEWS OF YOUR WORK</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#1A1815] font-bold">
                <Check className="w-3.5 h-3.5 text-[#C9381A]" />
                <span>FREE LUNCH & SUMMIT PACK</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onRegisterClick}
                className="w-full bg-[#C9381A] hover:bg-[#1A1815] text-white py-3.5 font-mono font-black text-xs uppercase tracking-widest transition-colors border-2 border-[#1A1815] shadow-[3px_3px_0px_#1A1815] flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>GET FREE PASS (RSVP)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[10px] font-mono text-center text-[#1A1815]/60">
              * SEATS ARE LIMITED • CLAIM EARLY
            </p>
          </div>

          {/* Quick Date & Place Box */}
          <div className="border border-[#1A1815] p-3.5 bg-[#F7F3EA] text-xs font-mono space-y-1.5">
            <span className="font-bold uppercase text-[#1A1815] block border-b border-[#1A1815]/20 pb-1">
              WHEN & WHERE
            </span>
            <div className="flex justify-between">
              <span className="text-[#1A1815]/60">CITY:</span>
              <span className="font-bold text-[#1A1815]">ADO-EKITI</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1A1815]/60">VENUE:</span>
              <span className="font-bold text-[#1A1815]">CIVIC CENTRE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1A1815]/60">DATE:</span>
              <span className="font-bold text-[#C9381A]">SATURDAY, OCT 25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1A1815]/60">TIME:</span>
              <span className="font-bold text-[#1A1815]">STARTS AT 9:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
