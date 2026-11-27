import React from 'react';
import { DollarSign, EyeOff, Flame, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface ManifestoProps {
  onRegisterClick: () => void;
}

export const PicassoManifesto: React.FC<ManifestoProps> = ({ onRegisterClick }) => {
  const painPoints = [
    {
      badge: "PAIN POINT 01",
      badgeColor: "bg-[#FF4D00] text-white",
      cardBg: "bg-[#FFF1F2]",
      icon: DollarSign,
      problem: "Ghost Invoices",
      reality: "Clients promising future gigs then vanishing when payment is due.",
      solution: "Upfront pricing structures & simple deposit contracts.",
    },
    {
      badge: "PAIN POINT 02",
      badgeColor: "bg-[#2563EB] text-white",
      cardBg: "bg-[#EFF6FF]",
      icon: EyeOff,
      problem: "Building Alone",
      reality: "Stuck in your room guessing if your portfolio actually works.",
      solution: "Live portfolio teardowns from working practitioners.",
    },
    {
      badge: "PAIN POINT 03",
      badgeColor: "bg-[#18181B] text-[#FFE600]",
      cardBg: "bg-[#FEF9C3]",
      icon: Flame,
      problem: "Undercharging",
      reality: "Charging ₦10,000 for work worth $1,500+ on global markets.",
      solution: "The exact blueprint to pitch and close international clients.",
    }
  ];

  return (
    <section id="struggle" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header with Pop */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-[2.5px] border-[#18181B] gap-3 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#FF4D00] border-2 border-[#18181B] rotate-45" />
          <h2 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#18181B]">
            WHAT WE FIX
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#FFE600] text-[#18181B] border-2 border-[#18181B] font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#18181B] self-start sm:self-auto">
          THE GAP
        </span>
      </div>

      {/* 3 High-Impact Cards: Direct Pain to Solution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`border-[2.5px] border-[#18181B] ${item.cardBg} p-6 shadow-[5px_5px_0px_#18181B] flex flex-col justify-between space-y-4 rounded-tl-2xl rounded-br-2xl hover:translate-y-[-3px] transition-transform`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 text-[10px] font-mono font-black uppercase border border-[#18181B] ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-[#18181B] flex items-center justify-center text-[#18181B] shadow-[2px_2px_0px_#18181B]">
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="font-syne font-black text-xl text-[#18181B] uppercase leading-tight pt-1">
                  {item.problem}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#18181B]/80 leading-relaxed">
                  {item.reality}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-[#18181B]/20 bg-white/70 p-3 rounded-lg border border-[#18181B]/20">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5 stroke-[2.5]" />
                  <p className="font-sans text-xs text-[#18181B] font-bold leading-snug">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Brand Spotlight Callout with Massive Visual Pop */}
      <div className="mt-8 border-[3px] border-[#18181B] bg-[#FF4D00] text-white p-6 sm:p-8 shadow-[6px_6px_0px_#18181B] flex flex-col md:flex-row items-center justify-between gap-6 rounded-tr-3xl">
        <div className="space-y-1 text-center md:text-left">
          <span className="inline-block px-2.5 py-0.5 bg-[#FFE600] text-[#18181B] border border-[#18181B] font-mono text-[10px] font-black uppercase tracking-wider mb-2">
            NO PITCH DECKS • REAL AUDIENCE EXPOSURE
          </span>
          <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase leading-tight">
            STAGE SPOTLIGHT FOR YOUR BRAND.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-white/90 max-w-xl">
            Have a design studio, fashion capsule, agency, or tech product? Get on stage in front of 1,500+ attendees to tell your story and meet paying clients.
          </p>
        </div>

        <button
          onClick={onRegisterClick}
          className="bg-white hover:bg-[#FFE600] text-[#18181B] px-6 py-3.5 font-mono font-black text-xs uppercase tracking-wider border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] shrink-0 transition-all flex items-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>APPLY FOR SPOTLIGHT</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};
