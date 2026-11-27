import React from 'react';
import { ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { PicassoAbstractFace, PicassoGeometricStar, PicassoPalettePatch } from './PicassoArt';

interface HeroProps {
  onRegisterClick: () => void;
}

export const PicassoHero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 relative">
      {/* Main Cubist Canvas Frame with Electric Pop Border & Shadows */}
      <div className="border-[3px] border-[#18181B] bg-white p-5 sm:p-8 lg:p-12 shadow-[7px_7px_0px_#18181B] sm:shadow-[10px_10px_0px_#18181B] relative overflow-hidden">
        
        {/* Abstract Cubist Geometry Watermarks with Vibrant Fills */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FFE600]/30 rounded-bl-full pointer-events-none -z-0" />
        <div className="absolute -bottom-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#2563EB]/15 rounded-tr-full pointer-events-none -z-0" />
        <div className="absolute top-6 right-6 hidden lg:block opacity-90 rotate-12">
          <PicassoGeometricStar size={52} />
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Bold Pop Typography & Direct Pain-Point Callout */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Pop Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#18181B] text-white border-2 border-[#18181B] font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#18181B]">
                <span>EMERGENCEX PLATFORM</span>
              </span>
              <a href="#hangout" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFE600] text-[#18181B] border-2 border-[#18181B] font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#18181B] rotate-[-1deg] hover:bg-[#FF4D00] hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#E02B20] animate-ping" />
                <span>UPCOMING: DEC 12 MEETUP</span>
              </a>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="font-syne font-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#18181B] tracking-tight uppercase leading-[1.05] sm:leading-[0.98] break-words">
              STOP WORKING FOR "EXPOSURE". <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#FF4D00] lowercase tracking-normal">time to</span> EMERGE.
            </h1>

            {/* Lean Product Copy */}
            <p className="font-sans text-base sm:text-lg text-[#18181B]/85 max-w-lg leading-relaxed font-medium">
              EmergenceX is the product and platform helping African creatives master high-income craft, stop undercharging, and get paid what they're actually worth.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onRegisterClick}
                className="group inline-flex items-center justify-center gap-3 bg-[#FF4D00] hover:bg-[#18181B] text-white px-7 sm:px-9 py-4 font-mono font-black text-xs uppercase tracking-wider transition-all border-2 border-[#18181B] shadow-[4px_4px_0px_#18181B] active:translate-x-1 active:translate-y-1 w-full sm:w-auto"
              >
                <span>JOIN EMERGENCEX</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
              </button>

              <a
                href="#hangout"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FEF9C3] text-[#18181B] px-6 py-4 font-mono font-black text-xs uppercase tracking-wider border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] transition-colors"
              >
                <span>SEE DEC 12 MEETUP ↓</span>
              </a>
            </div>

            {/* Perks Tag */}
            <div className="pt-1 flex items-center gap-3 text-xs font-mono text-[#18181B]/70 font-bold">
              <PicassoPalettePatch color="#FF4D00" className="w-14 h-5 shrink-0" />
              <span>4 Craft Labs • Business toolkits • Stage spotlight</span>
            </div>
          </div>

          {/* Right Column: High-Contrast Pop Collage Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center pt-2 sm:pt-0">
            {/* Abstract Picasso Contour Face Layer */}
            <div className="absolute -top-10 -right-6 hidden sm:block z-20 pointer-events-none opacity-90 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
              <PicassoAbstractFace size={230} />
            </div>

            {/* Overlapping Asymmetrical Framed Portrait with Electric Canary & Orange Pop */}
            <div className="relative w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[310px] aspect-[3/4] border-[3px] border-[#18181B] bg-[#FFE600] p-2.5 shadow-[8px_8px_0px_#18181B] rotate-0 sm:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full overflow-hidden border-2 border-[#18181B] bg-black relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="Young Nigerian Creative"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Pop Sticker Top-Left */}
                <div className="absolute top-2.5 left-2.5 bg-[#18181B] text-white border-2 border-[#18181B] font-mono font-black text-[10px] px-2.5 py-1 uppercase tracking-wider shadow-[2px_2px_0px_#18181B] rotate-[-3deg]">
                  CREATIVE PLATFORM
                </div>

                {/* Pop Sticker Bottom */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white border-2 border-[#18181B] p-2 text-center shadow-[3px_3px_0px_#18181B]">
                  <span className="font-syne font-extrabold text-xs text-[#18181B] uppercase block">
                    EMERGENCE<span className="text-[#E02B20] text-[1.28em] font-black inline-block ml-0.5">X</span>
                  </span>
                  <span className="font-mono text-[9px] text-[#FF4D00] font-black uppercase">
                    ACCELERATOR FOR BUILDERS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under-Hero Electric Metric Blocks with Vivid Contrast */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        <div className="border-[2.5px] border-[#18181B] p-5 bg-[#FEF9C3] shadow-[4px_4px_0px_#18181B] flex items-center justify-between hover:translate-y-[-2px] transition-transform">
          <div>
            <p className="font-syne font-black text-3xl text-[#18181B]">1,500+</p>
            <p className="font-mono text-xs text-[#18181B] uppercase font-black mt-0.5">Creatives in Ecosystem</p>
          </div>
          <span className="w-9 h-9 rounded-full bg-[#18181B] border-2 border-[#18181B] flex items-center justify-center text-[#FFE600] font-mono text-xs font-black shrink-0 shadow-[2px_2px_0px_#FF4D00]">
            ★
          </span>
        </div>

        <div className="border-[2.5px] border-[#18181B] p-5 bg-[#EFF6FF] shadow-[4px_4px_0px_#18181B] flex items-center justify-between hover:translate-y-[-2px] transition-transform">
          <div>
            <p className="font-syne font-black text-3xl text-[#2563EB]">4 Labs</p>
            <p className="font-mono text-xs text-[#18181B] uppercase font-black mt-0.5">Design, Cinema, Audio, Code</p>
          </div>
          <span className="w-9 h-9 rounded-full bg-[#2563EB] border-2 border-[#18181B] flex items-center justify-center text-white font-mono text-xs font-black shrink-0 shadow-[2px_2px_0px_#18181B]">
            4
          </span>
        </div>

        <div className="border-[2.5px] border-[#18181B] p-5 bg-[#FFF1F2] shadow-[4px_4px_0px_#18181B] flex items-center justify-between hover:translate-y-[-2px] transition-transform">
          <div>
            <p className="font-syne font-black text-2xl lg:text-3xl text-[#FF4D00] tracking-tight">SPOTLIGHT</p>
            <p className="font-mono text-xs text-[#18181B] uppercase font-black mt-0.5">Showcase Your Brand</p>
          </div>
          <span className="w-9 h-9 rounded-full bg-[#FF4D00] border-2 border-[#18181B] flex items-center justify-center text-white font-mono text-xs font-black shrink-0 shadow-[2px_2px_0px_#18181B]">
            ★
          </span>
        </div>
      </div>
    </section>
  );
};
