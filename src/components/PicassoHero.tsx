import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PicassoAbstractFace, PicassoGeometricStar, PicassoPalettePatch } from './PicassoArt';
import { eventConfig } from '../data/summitData';

interface HeroProps {
  onRegisterClick: () => void;
}

export const PicassoHero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 relative">
      {/* Main Cubist Canvas Hero Frame */}
      <div className="border-2 sm:border-[3px] border-[#18181B] bg-white p-5 sm:p-8 lg:p-12 shadow-[5px_5px_0px_#18181B] sm:shadow-[8px_8px_0px_#18181B] relative overflow-hidden">
        
        {/* Abstract Cubist Geometry Watermarks in Background */}
        <div className="absolute top-0 right-0 w-52 sm:w-80 h-52 sm:h-80 bg-[#D97724]/10 rounded-bl-full pointer-events-none -z-0" />
        <div className="absolute -bottom-10 -left-10 w-44 sm:w-64 h-44 sm:h-64 bg-[#2563EB]/10 rounded-tr-full pointer-events-none -z-0" />
        <div className="absolute top-8 right-8 hidden lg:block opacity-70">
          <PicassoGeometricStar size={44} />
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Bold Avant-Garde Typography & Plain English */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2563EB] text-white border-2 border-[#18181B] shadow-[2px_2px_0px_#18181B] font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
              <span>★ 1-DAY CREATIVE MOVEMENT</span>
            </div>

            <h1 className="font-syne font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#18181B] tracking-normal sm:tracking-tight uppercase leading-[1.12] sm:leading-[1.02] lg:leading-[0.96] break-words">
              WHERE CREATIVITY <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#C94A29] lowercase tracking-normal">meets</span> OPPORTUNITY.
            </h1>

            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#18181B]/80 max-w-lg leading-relaxed">
              One full day in Ekiti for young designers, filmmakers, developers, and music makers ready to turn their skills into real, profitable careers.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={onRegisterClick}
                className="group inline-flex items-center justify-center gap-3 bg-[#C94A29] hover:bg-[#18181B] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-mono font-bold sm:font-black text-xs uppercase tracking-wider sm:tracking-widest transition-all border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] sm:shadow-[4px_4px_0px_#18181B] active:translate-x-1 active:translate-y-1 w-full sm:w-auto"
              >
                <span>CLAIM FREE PASS (RSVP)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[11px] sm:text-xs font-mono text-[#18181B]/70 font-bold text-center sm:text-left py-1">
                CIVIC CENTRE • ADO-EKITI
              </span>
            </div>

            {/* Picasso Signature Tag */}
            <div className="pt-1 flex items-center gap-3 text-[11px] sm:text-xs font-mono text-[#18181B]/60">
              <PicassoPalettePatch color="#F59E0B" className="w-12 sm:w-16 h-5 sm:h-6 shrink-0" />
              <span>Free lunch, delegate kit, and ₦10M pitch included.</span>
            </div>
          </div>

          {/* Right Column: Deconstructed Picasso Cubist Collage Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center pt-2 sm:pt-0">
            {/* Abstract Picasso Contour Face Layer */}
            <div className="absolute -top-8 -right-4 hidden sm:block z-20 pointer-events-none opacity-90">
              <PicassoAbstractFace size={220} />
            </div>

            {/* Overlapping Asymmetrical Framed Portrait */}
            <div className="relative w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[290px] lg:max-w-[320px] aspect-[3/4] border-2 sm:border-[3px] border-[#18181B] bg-[#C94A29] p-2 shadow-[5px_5px_0px_#18181B] sm:shadow-[6px_6px_0px_#18181B] rotate-0 sm:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full overflow-hidden border border-[#18181B] bg-black relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="Young Nigerian Creative"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Cubist Color Chip Badge */}
                <div className="absolute top-2.5 left-2.5 bg-[#FBBF24] text-[#18181B] border-2 border-[#18181B] font-mono font-black text-[9px] px-2 py-0.5 uppercase tracking-wider shadow-[2px_2px_0px_#18181B]">
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
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        <div className="border-2 border-[#18181B] p-4 sm:p-5 bg-[#FAF6EE] shadow-[3px_3px_0px_#18181B] sm:shadow-[4px_4px_0px_#18181B] flex items-center justify-between">
          <div>
            <p className="font-syne font-black text-2xl sm:text-3xl text-[#18181B]">1,500+</p>
            <p className="font-mono text-xs text-[#18181B]/70 uppercase font-bold mt-0.5">Young Creatives</p>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#C94A29] border border-[#18181B] flex items-center justify-center text-white text-xs font-bold shrink-0">
            01
          </span>
        </div>

        <div className="border-2 border-[#18181B] p-4 sm:p-5 bg-[#FAF6EE] shadow-[3px_3px_0px_#18181B] sm:shadow-[4px_4px_0px_#18181B] flex items-center justify-between">
          <div>
            <p className="font-syne font-black text-2xl sm:text-3xl text-[#18181B]">24+</p>
            <p className="font-mono text-xs text-[#18181B]/70 uppercase font-bold mt-0.5">Industry Mentors</p>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#2563EB] border border-[#18181B] flex items-center justify-center text-white text-xs font-bold shrink-0">
            02
          </span>
        </div>

        <div className="border-2 border-[#18181B] p-4 sm:p-5 bg-[#FAF6EE] shadow-[3px_3px_0px_#18181B] sm:shadow-[4px_4px_0px_#18181B] flex items-center justify-between">
          <div>
            <p className="font-syne font-black text-xl sm:text-2xl lg:text-3xl text-[#C94A29] tracking-tight">₦10,000,000</p>
            <p className="font-mono text-xs text-[#18181B]/70 uppercase font-bold mt-0.5">Free Pitch Grants</p>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#F59E0B] border border-[#18181B] flex items-center justify-center text-[#18181B] text-xs font-bold shrink-0">
            03
          </span>
        </div>
      </div>
    </section>
  );
};
