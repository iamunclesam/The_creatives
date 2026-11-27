import React from 'react';
import { Eye, DollarSign, Trophy, Users, Zap, Coffee, ArrowRight } from 'lucide-react';

interface WhyAttendProps {
  onRegisterClick: () => void;
}

export const PicassoWhyAttend: React.FC<WhyAttendProps> = ({ onRegisterClick }) => {
  const points = [
    {
      num: "01",
      badgeColor: "bg-[#FF4D00] text-white",
      title: "Honest Portfolio Roasts",
      desc: "No polite fake compliments. Top directors review your work live and tell you exactly what's stopping you from charging premium rates.",
      tag: "FIX YOUR BOOK",
      icon: Eye
    },
    {
      num: "02",
      badgeColor: "bg-[#2563EB] text-white",
      title: "Actual Pricing Breakdowns",
      desc: "See real invoices from creators making $1,000 to $5,000+ monthly from Nigeria. Learn contract clauses and upfront deposit tactics.",
      tag: "STOP UNDERCHARGING",
      icon: DollarSign
    },
    {
      num: "03",
      badgeColor: "bg-[#FFE600] text-[#18181B]",
      title: "Main Stage Brand Spotlight",
      desc: "Have a design studio, fashion capsule, agency, or creative app? You get the microphone to tell 1,500+ attendees and prospective clients what you do.",
      tag: "TELL YOUR STORY",
      icon: Trophy
    },
    {
      num: "04",
      badgeColor: "bg-[#10B981] text-white",
      title: "Stop Creating in Isolation",
      desc: "Meet 1,500+ ambitious videographers, graphic designers, audio engineers, and developers who can become your co-founders and team.",
      tag: "FIND COLLABORATORS",
      icon: Users
    },
    {
      num: "05",
      badgeColor: "bg-[#18181B] text-white",
      title: "The Modern Tech Stack",
      desc: "Discover the exact AI plugins, design templates, and lighting gear that allow lean 1-person studios to deliver agency-grade work.",
      tag: "FASTER EXECUTION",
      icon: Zap
    },
    {
      num: "06",
      badgeColor: "bg-[#FF4D00] text-white",
      title: "Creator Kit & Templates",
      desc: "Take home ready-to-use client contract templates, pricing calculators, invoice scripts, and official EmergenceX merch.",
      tag: "TAKE-HOME VALUE",
      icon: Coffee
    }
  ];

  return (
    <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-[2.5px] border-[#18181B]">
      {/* Header with Pop */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-[2.5px] border-[#18181B] gap-3 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#FFE600] border-2 border-[#18181B] rotate-45" />
          <h2 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#18181B]">
            WHAT YOU GET BY ATTENDING
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#FF4D00] text-white font-mono text-xs font-black uppercase tracking-wider self-start sm:self-auto shadow-[2px_2px_0px_#18181B]">
          6 REASONS TO COME
        </span>
      </div>

      {/* 6 Picasso Cards with Electric Visual Pop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((pt) => {
          const Icon = pt.icon;
          return (
            <div
              key={pt.num}
              className="picasso-card p-5 rounded-bl-3xl flex flex-col justify-between space-y-4 hover:translate-y-[-3px] transition-transform"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#18181B] pb-2 mb-3">
                  <span className="font-syne font-black text-2xl text-[#18181B]">
                    {pt.num}
                  </span>
                  <div className={`w-8 h-8 rounded-full border-2 border-[#18181B] flex items-center justify-center shadow-[1.5px_1.5px_0px_#18181B] ${pt.badgeColor}`}>
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="font-syne font-black text-lg text-[#18181B] uppercase leading-tight">
                  {pt.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#18181B]/80 mt-2 leading-relaxed font-medium">
                  {pt.desc.includes("EmergenceX") ? (
                    <>
                      {pt.desc.split("EmergenceX")[0]}
                      Emergence<span className="text-[#E02B20] text-[1.2em] font-black inline-block">X</span>
                      {pt.desc.split("EmergenceX")[1]}
                    </>
                  ) : (
                    pt.desc
                  )}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-[#18181B]/15 font-mono text-[11px] text-[#FF4D00] font-black uppercase tracking-wider">
                ★ {pt.tag}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pop Callout Banner */}
      <div className="mt-8 border-[2.5px] border-[#18181B] p-6 bg-[#FEF9C3] shadow-[5px_5px_0px_#18181B] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-tr-3xl">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FF4D00]">
            ZERO HIDDEN FEES • ZERO UPSALE
          </span>
          <h4 className="font-syne font-black text-xl text-[#18181B] uppercase">
            EVERY TICKET GIVES YOU 100% ACCESS TO ALL SESSIONS & STAGES.
          </h4>
        </div>

        <button
          onClick={onRegisterClick}
          className="bg-[#18181B] hover:bg-[#FF4D00] text-white px-6 py-3 font-mono font-black text-xs uppercase tracking-wider border-2 border-[#18181B] shadow-[3px_3px_0px_#FF4D00] shrink-0 transition-all active:translate-x-0.5 active:translate-y-0.5"
        >
          CLAIM PASS NOW
        </button>
      </div>
    </section>
  );
};
