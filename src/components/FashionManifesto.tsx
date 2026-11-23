import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TapeSticker, SparkleDoodle } from './ArtElements';

interface ManifestoProps {
  onRegisterClick: () => void;
}

export const FashionManifesto: React.FC<ManifestoProps> = ({ onRegisterClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Editorial Subhead */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-black/10">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/60 font-bold">
          THE REAL TALK
        </span>
        <TapeSticker text="ZERO CORPORATE BS" color="bg-black text-[#FFD000]" className="text-[10px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Artsy Model with Memphis Doodles */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-black shadow-xl border-2 border-black">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Creative Leader in Nigeria"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-4 left-4">
              <TapeSticker text="CREATIVE & PROUD" color="bg-[#FF5500] text-white" />
            </div>
          </div>

          {/* Memphis Wireframe Zig-Zag Accent (from reference) */}
          <svg className="absolute -bottom-6 -right-6 w-20 h-10 text-black hidden sm:block" viewBox="0 0 80 40" fill="none">
            <path d="M0 20 L20 0 L40 20 L60 0 L80 20" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        {/* Right Column: Casual Relatable Manifesto Box */}
        <div className="lg:col-span-7 bg-[#EFECE6] p-8 sm:p-12 rounded-3xl relative border border-black/10 shadow-sm">
          {/* Floating Doodles */}
          <div className="absolute top-6 right-8 hidden sm:block text-[#FF5500]">
            <SparkleDoodle size={28} />
          </div>

          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF5500] font-black">
              WHY THIS MATTERS
            </span>

            <h2 className="font-syne font-black text-2xl sm:text-4xl text-black tracking-tight uppercase leading-snug">
              CREATIVITY PAYS THE RENT NOW. <br />
              <span className="font-serif italic font-normal text-[#FF5500] lowercase">let's talk about it.</span>
            </h2>

            <p className="text-sm sm:text-base text-black/75 leading-relaxed font-sans">
              Remember when everyone treated design, filmmaking, writing code, or cooking beats like a little hobby you do after church? Yeah, that era is completely dead.
            </p>

            <p className="text-sm sm:text-base text-black/75 leading-relaxed font-sans">
              The Spark is one high-energy day built for young Nigerians who want to make serious income from their taste and craft. No endless PowerPoint slides. No motivational talk. Just real playbooks, honest portfolio reviews, and people who can actually hire or fund you.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest bg-black text-white hover:bg-[#FF5500] px-6 py-3.5 rounded-full transition-all shadow-[3px_3px_0px_#FF5500]"
              >
                <span>CLAIM YOUR FREE PASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-black/50 font-bold">
                100% FREE ADMISSION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
