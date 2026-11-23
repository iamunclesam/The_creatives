import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PicassoAbstractFace, PicassoGeometricStar, PicassoPalettePatch } from './PicassoArt';
import { eventConfig } from '../data/summitData';

interface HeroProps {
  onRegisterClick: () => void;
}

export const PicassoHero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 relative">
      {/* Top Picasso Exhibition Ear */}
      {/* <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b-2 border-[#18181B] text-xs font-mono font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#C94A29] border border-[#18181B] rotate-45" />
          <span>CANVAS NO. 01 — EKITI STATE, NIGERIA</span>
        </div>
        <div className="flex items-center gap-4 text-[#18181B]/70">
          <span>DATE: SATURDAY, OCT 25, 2025</span>
          <span>•</span>
          <span className="text-[#C9381A] font-black">ADMISSION: 100% FREE</span>
        </div>
      </div> */}

      {/* Main Cubist Canvas Hero Frame */}
      <div className="border-3 border-[#18181B] bg-white p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#18181B] relative overflow-hidden">
        
        {/* Abstract Cubist Geometry Watermarks in Background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97724]/10 rounded-bl-full pointer-events-none -z-0" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#2563EB]/10 rounded-tr-full pointer-events-none -z-0" />
        <div className="absolute top-10 right-10 hidden lg:block opacity-70">
          <PicassoGeometricStar size={50} />
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Bold Avant-Garde Typography & Plain English */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#2563EB] text-white border-2 border-[#18181B] shadow-[2px_2px_0px_#18181B] font-mono text-[11px] font-bold uppercase tracking-wider">
              <span>★ 1-DAY CREATIVE MOVEMENT</span>
            </div>

            <h1 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl text-[#18181B] tracking-tight uppercase leading-[0.93]">
              WHERE CREATIVITY <br />
              <span className="font-serif italic font-normal text-[#C94A29] lowercase tracking-normal">meets</span> OPPORTUNITY.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#18181B]/80 max-w-lg leading-relaxed">
              One full day in Ekiti for young designers, filmmakers, developers, and music makers ready to turn their skills into real, profitable careers.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onRegisterClick}
                className="group inline-flex items-center gap-3 bg-[#C94A29] hover:bg-[#18181B] text-white px-8 py-4 font-mono font-black text-xs uppercase tracking-widest transition-all border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B] active:translate-x-1 active:translate-y-1"
              >
                <span>CLAIM FREE PASS (RSVP)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs font-mono text-[#18181B]/70 font-bold">
                CIVIC CENTRE • ADO-EKITI
              </span>
            </div>

            {/* Picasso Signature Tag */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#18181B]/60">
              <PicassoPalettePatch color="#F59E0B" className="w-16 h-6" />
              <span>Free lunch, delegate kit, and ₦10M pitch included.</span>
            </div>
          </div>

          {/* Right Column: Deconstructed Picasso Cubist Collage Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Abstract Picasso Contour Face Layer */}
            <div className="absolute -top-10 -right-6 hidden sm:block z-20 pointer-events-none opacity-90">
              <PicassoAbstractFace size={240} />
            </div>

            {/* Overlapping Asymmetrical Framed Portrait */}
            <div className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4] border-3 border-[#18181B] bg-[#C94A29] p-2 shadow-[6px_6px_0px_#18181B] rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full overflow-hidden border border-[#18181B] bg-black relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="Young Nigerian Creative"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Cubist Color Chip Badge */}
                <div className="absolute top-3 left-3 bg-[#FBBF24] text-[#18181B] border-2 border-[#18181B] font-mono font-black text-[9px] px-2 py-0.5 uppercase tracking-wider shadow-[2px_2px_0px_#18181B]">
                  ADO-EKITI 2025
                </div>

                <div className="absolute bottom-2 left-2 right-2 bg-white/95 border border-[#18181B] p-2 text-center">
                  <span className="font-syne font-black text-xs text-[#18181B] uppercase block">
                    THE GATHERING
                  </span>
                  <span className="font-mono text-[9px] text-[#18181B]/70 uppercase">
                    1,500+ CREATIVES OUTSIDE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under-Hero Cubist Metric Blocks */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="border-2 border-[#18181B] p-5 bg-[#FAF6EE] shadow-[4px_4px_0px_#18181B] flex items-center justify-between">
          <div>
            <p className="font-syne font-black text-3xl text-[#18181B]">1,500+</p>
            <p className="font-mono text-xs text-[#18181B]/70 uppercase font-bold mt-0.5">Young Creatives</p>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#C94A29] border border-[#18181B] flex items-center justify-center text-white text-xs font-bold">
            01
          </span>
        </div>

        <div className="border-2 border-[#18181B] p-5 bg-[#FAF6EE] shadow-[4px_4px_0px_#18181B] flex items-center justify-between">
          <div>
            <p className="font-syne font-black text-3xl text-[#18181B]">24+</p>
            <p className="font-mono text-xs text-[#18181B]/70 uppercase font-bold mt-0.5">Industry Mentors</p>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#2563EB] border border-[#18181B] flex items-center justify-center text-white text-xs font-bold">
            02
          </span>
        </div>

        <div className="border-2 border-[#18181B] p-5 bg-[#FAF6EE] shadow-[4px_4px_0px_#18181B] flex items-center justify-between">
          <div>
            <p className="font-syne font-black text-3xl text-[#C94A29]">₦10,000,000</p>
            <p className="font-mono text-xs text-[#18181B]/70 uppercase font-bold mt-0.5">Free Pitch Grants</p>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#F59E0B] border border-[#18181B] flex items-center justify-center text-[#18181B] text-xs font-bold">
            03
          </span>
        </div>
      </div>
    </section>
  );
};

