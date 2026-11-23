import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TapeSticker } from './ArtElements';

interface RegisterProps {
  onRegisterClick: () => void;
}

export const FashionRegister: React.FC<RegisterProps> = ({ onRegisterClick }) => {
  return (
    <section id="attend" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Orange Framed Action Box */}
      <div className="rounded-3xl bg-gradient-to-br from-[#FF4E00] to-[#FF6F1E] p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
        {/* Subtle White Inset Line (Signature Reference Feature) */}
        <div className="absolute inset-4 sm:inset-6 border border-white/40 pointer-events-none rounded-2xl" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <TapeSticker text="FREE PASSES • LIMITED HALL CAPACITY" color="bg-black text-[#FFD000]" />
          </div>

          <h2 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95]">
            WE OUTSIDE OCT 25. <br />
            <span className="font-serif italic font-normal text-[#FFD000] lowercase">are you in or what?</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 max-w-md mx-auto font-sans leading-relaxed">
            Admission is 100% free because our ecosystem partners covered your seat. Free chow, ₦10M seed pitch, and 1,500 crazy talented peers.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="group bg-black hover:bg-white text-white hover:text-black px-8 py-4 rounded-full font-mono font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0px_#FFD000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 flex items-center gap-2"
            >
              <span>SECURE MY FREE TICKET</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] font-mono text-white/90">
            <span>✓ EKITI CIVIC CENTRE</span>
            <span>✓ FREE LUNCH & SWAG</span>
            <span>✓ 9:00 AM SHARP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
