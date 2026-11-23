import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export const OldNewsHero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Front Page Headline Banner */}
      <div className="border-b-2 border-[#1A1815] pb-6 mb-6 text-center space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C9381A] font-black block">
          ★ EXTRA! EXTRA! LATE DISPATCH ★
        </span>

        <h2 className="font-playfair font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-[#1A1815]">
          CREATIVES TAKING OVER.
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl text-[#1A1815]/85 font-normal">
          Where raw African talent meets actual money.
        </p>
      </div>

      {/* Main Front Page Layout: Halftone Photo + Minimal Bullet Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b-2 border-[#1A1815] pb-8">
        {/* Left: Vintage Halftone Centerpiece Photo */}
        <div className="lg:col-span-7 relative">
          <div className="border-2 border-[#1A1815] p-2 bg-[#F7F3EA] shadow-[5px_5px_0px_#1A1815] relative">
            {/* Vintage Photo Corner Accents */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black border border-[#1A1815]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Creative Pioneer"
                className="w-full h-full object-cover vintage-halftone"
              />

              {/* Red Ink Rubber Stamp */}
              <div className="absolute top-4 right-4 rubber-stamp bg-[#F7F3EA]/90 text-xs sm:text-sm font-black shadow-sm">
                ★ CERTIFIED DISPATCH • OCT 25 ★
              </div>

              <div className="absolute bottom-2 left-2 bg-[#1A1815] text-[#EFE9DC] text-[9px] font-mono px-2 py-0.5 uppercase">
                FIG. 1 — THE EKITI GATHERING
              </div>
            </div>
          </div>

          <p className="font-mono text-xs text-[#1A1815]/70 italic mt-2">
            1,500 young Nigerian designers, cinematographers, sound artists, and builders gathering at Ekiti State Civic Centre.
          </p>
        </div>

        {/* Right: 3 Minimalist Vintage Bulletin Cards (Very little text) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: What is this? */}
          <div className="vintage-box p-4 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9381A] font-black block">
              01 // THE MOVE
            </span>
            <h3 className="font-playfair font-bold text-xl text-[#1A1815] uppercase">
              No Suits. No Boring Slides.
            </h3>
            <p className="font-serif text-sm text-[#1A1815]/80 leading-relaxed">
              1 day dedicated to turning your craft into a sustainable living. Practical toolkits, live portfolio reviews, and real network connections.
            </p>
          </div>

          {/* Card 2: The Grant */}
          <div className="vintage-box p-4 space-y-1 border-l-4 border-l-[#C9381A]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9381A] font-black block">
              02 // THE BAG
            </span>
            <h3 className="font-playfair font-black text-2xl text-[#1A1815] uppercase">
              ₦10,000,000 SEED GRANTS
            </h3>
            <p className="font-serif text-sm text-[#1A1815]/80 leading-relaxed">
              Awarded live on stage to young creative founders and studio builders.
            </p>
          </div>

          {/* Card 3: Instant CTA */}
          <div className="vintage-box p-5 bg-[#C9381A] text-white border-2 border-[#1A1815] space-y-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase bg-black text-[#EFE9DC] px-2 py-0.5 font-bold">
                ADMISSION: 100% FREE
              </span>
              <h4 className="font-playfair font-black text-xl uppercase mt-2">
                2,000 Passes Printed.
              </h4>
              <p className="font-serif text-xs text-white/90">
                Free lunch, badge kit, and masterclass access included.
              </p>
            </div>

            <button
              onClick={onRegisterClick}
              className="w-full bg-[#1A1815] hover:bg-white text-white hover:text-[#1A1815] py-3.5 font-mono font-black text-xs uppercase tracking-widest transition-all border border-black shadow-[3px_3px_0px_#FFF] flex items-center justify-center gap-2"
            >
              <span>CLAIM TICKET (RSVP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

