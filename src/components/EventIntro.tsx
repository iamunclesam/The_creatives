import React from 'react';
import { ArrowUpRight, Flame, Zap, Target, Globe } from 'lucide-react';
import { DaVivaSunburst } from './DaVivaMotifs';

interface EventIntroProps {
  onRegisterClick: () => void;
}

export const EventIntro: React.FC<EventIntroProps> = ({ onRegisterClick }) => {
  const pillars = [
    {
      icon: Flame,
      title: "Craft & Identity",
      desc: "World-class execution rooted in authentic African aesthetics."
    },
    {
      icon: Zap,
      title: "Tech Leverage",
      desc: "AI, spatial web, and digital engines to 10x creative output."
    },
    {
      icon: Target,
      title: "Monetization",
      desc: "High-earning client pricing, contracts, and IP protection."
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Direct access to international markets from Ekiti."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative bg-[#0B0B0D] border-t border-white/10 overflow-hidden">
      {/* DaViva African Wax Texture */}
      <div className="absolute inset-0 bg-daviva-waves opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <DaVivaSunburst size={14} />
          <span className="text-[11px] font-mono font-bold text-[#FF4600] tracking-widest uppercase">
            THE MANIFESTO
          </span>
        </div>

        {/* Split-screen Layout with Reduced Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual with DaViva Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 bg-[#141416] group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Creative Director in Ekiti"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Floating Quote Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 border border-[#FF4600]/30 backdrop-blur-xl">
                <p className="text-xs text-white/90 italic font-serif leading-snug">
                  "World-class creative power isn't confined to London or Lagos. It is born right here in Ekiti."
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-[#94949E] font-mono">
                  <span>Secretariat Note</span>
                  <span className="text-[#FF8A00] font-bold">The Spark 2025</span>
                </div>
              </div>
            </div>

            {/* Corner African Textile Accent Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-br from-[#FF4600] to-[#FF8A00] text-black font-display font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg items-center gap-1.5 rotate-3">
              <DaVivaSunburst size={12} />
              <span>100% SUBSIDIZED FOR YOUTH</span>
            </div>
          </div>

          {/* Right Column: Strong, Concise Headline & Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              CREATIVITY IS NO LONGER A SIDE HUSTLE.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-[#FFB800]">
                IT'S AN ECONOMY.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#94949E] leading-relaxed">
              The Spark unites 1,500+ creatives, engineers, and cultural leaders in Ekiti State—equipping Africa’s next wave of visionaries to build sustainable, globally competitive creative businesses.
            </p>

            {/* Core 4 Pillars Grid - Clean & Punchy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF4600]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#FF4600]/10 flex items-center justify-center text-[#FF4600]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-[#94949E]">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center gap-2 text-xs font-display font-bold text-white bg-[#FF4600] hover:bg-[#E03D00] px-6 py-3 rounded-full uppercase tracking-wider shadow-lg shadow-[#FF4600]/25 transition-all"
              >
                <span>Reserve Free Pass</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
