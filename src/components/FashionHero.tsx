import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TapeSticker, RotatingStamp, ScribbleArrow, SparkleDoodle } from './ArtElements';

interface HeroProps {
  onRegisterClick: () => void;
}

export const FashionHero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Outer Editorial Orange Canvas Box - directly inspired by the user reference */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#FF4E00] via-[#FF5F15] to-[#FF7A29] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
        
        {/* Crisp White Architectural Inner Wireframe (from reference image) */}
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-white/60 pointer-events-none rounded-2xl z-20">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white" />
        </div>

        {/* Floating Artsy Memphis Geometric Shapes */}
        <div
          className="absolute top-12 right-16 sm:right-28 w-0 h-0 border-l-[28px] border-l-transparent border-b-[52px] border-b-[#FFD000] border-r-[28px] border-r-transparent rotate-12 pointer-events-none z-10 transition-transform duration-700 ease-out"
          style={{ transform: `translateY(${scrollY * 0.08}px) rotate(12deg)` }}
        />
        <div
          className="absolute top-28 right-8 sm:right-16 w-0 h-0 border-l-[18px] border-l-transparent border-b-[32px] border-b-white border-r-[18px] border-r-transparent -rotate-12 pointer-events-none z-10 transition-transform duration-700 ease-out"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(-12deg)` }}
        />

        {/* Top Header Row inside box */}
        <div className="relative z-30 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <TapeSticker text="NO BORING SUITS ALLOWED" color="bg-black text-[#FFD000]" />
            <span className="text-[11px] font-mono text-white/90 hidden sm:inline font-bold">
              ADO-EKITI • SAT OCT 25
            </span>
          </div>

          <div className="hidden sm:block">
            <span className="text-xs font-mono text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              1,500+ CREATIVES PULLING UP
            </span>
          </div>
        </div>

        {/* Middle Content + High Fashion Centerpiece */}
        <div className="relative z-30 my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bold Unusual Fonts & Casual Tone */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFD000] text-black px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider shadow-sm rotate-[-1deg]">
              <Sparkles className="w-3 h-3" />
              <span>THE BIGGEST CREATIVE LINK-UP IN EKITI</span>
            </div>

            <h1 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] uppercase">
              WHERE CREATIVITY <br />
              <span className="font-serif italic font-normal text-[#FFD000] lowercase tracking-normal">meets</span> REAL MONEY.
            </h1>

            <p className="text-sm sm:text-base text-white/95 max-w-lg font-sans leading-relaxed">
              Creating in your bedroom alone is cool. But doing it alongside 1,500 other crazy talented designers, filmmakers, devs, and beatmakers? That's where things actually pop off.
            </p>

            {/* Action CTA + Scribble arrow */}
            <div className="pt-2 flex flex-wrap items-center gap-4 relative">
              <button
                onClick={onRegisterClick}
                className="group inline-flex items-center gap-3 bg-black hover:bg-white text-white hover:text-black px-8 py-4 rounded-full font-mono font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0px_#FFD000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <span>I'M PULLING UP (FREE RSVP)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="hidden sm:flex items-center gap-2 text-white">
                <ScribbleArrow className="rotate-[-10deg] text-[#FFD000]" />
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider">
                  ₦10M BAG UP FOR GRABS
                </span>
              </div>
            </div>
          </div>

          {/* Right Fashion Model Hero Visual with Rotating Stamp */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Rotating Stamp Seal Overlapping the photo */}
            <div className="absolute -top-6 -left-6 z-40 hidden sm:block">
              <RotatingStamp size={105} className="bg-white rounded-full p-1 shadow-xl" />
            </div>

            {/* Framed Image */}
            <div
              className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60 group transition-transform duration-500"
              style={{ transform: `translateY(${scrollY * -0.04}px)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                alt="Nigerian Creative Leader"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                <div>
                  <TapeSticker text="LIVE IN ADO-EKITI" color="bg-[#FF5500] text-white" className="text-[9px] py-0.5" />
                  <p className="font-syne font-bold text-sm mt-1">October 25, 2025</p>
                </div>
                <SparkleDoodle className="text-[#FFD000] animate-spin" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-strip inside box */}
        <div className="relative z-30 pt-4 border-t border-white/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/90">
          <div className="flex items-center gap-6">
            <span><strong>VENUE:</strong> EKITI CIVIC CENTRE</span>
            <span className="hidden sm:inline"><strong>TIME:</strong> 9:00 AM SHARP</span>
            <span><strong>PRICE:</strong> ₦0 (FREE PASSES)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD000] animate-ping" />
            <span className="font-bold">FAST-FILLING • 2,000 CAP</span>
          </div>
        </div>
      </div>

      {/* Under-Hero Strip with Playful Tape Badges */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-b border-black/10 pb-6 text-black">
        <div className="p-3 bg-[#EFECE6] rounded-xl border border-black/5">
          <p className="font-syne font-black text-2xl sm:text-3xl">1,500+</p>
          <p className="text-[11px] font-mono text-black/60 uppercase font-bold">Dope Creatives</p>
        </div>
        <div className="p-3 bg-[#EFECE6] rounded-xl border border-black/5">
          <p className="font-syne font-black text-2xl sm:text-3xl">24+</p>
          <p className="text-[11px] font-mono text-black/60 uppercase font-bold">Mentors Who Care</p>
        </div>
        <div className="p-3 bg-[#EFECE6] rounded-xl border border-black/5">
          <p className="font-syne font-black text-2xl sm:text-3xl">₦10M+</p>
          <p className="text-[11px] font-mono text-black/60 uppercase font-bold">Pitch Seed Money</p>
        </div>
        <div className="p-3 bg-[#EFECE6] rounded-xl border border-black/5">
          <p className="font-syne font-black text-2xl sm:text-3xl">100%</p>
          <p className="text-[11px] font-mono text-black/60 uppercase font-bold">Free Food & Swag</p>
        </div>
      </div>
    </section>
  );
};
