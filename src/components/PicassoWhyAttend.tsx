import React from 'react';
import { Compass, Palette, Users, Sparkles, TrendingUp, Trophy, ArrowRight } from 'lucide-react';

interface WhyAttendProps {
  onRegisterClick: () => void;
}

export const PicassoWhyAttend: React.FC<WhyAttendProps> = ({ onRegisterClick }) => {
  const points = [
    {
      num: "01",
      badgeColor: "bg-[#C94A29] text-white",
      title: "Learn from people who've done it",
      desc: "Get real, practical advice from people who actually run profitable studios and businesses.",
      highlight: "Real examples, zero fluffy speeches.",
      icon: <Compass className="w-5 h-5" />
    },
    {
      num: "02",
      badgeColor: "bg-[#2563EB] text-white",
      title: "Discover the best modern tools",
      desc: "Find out what software, equipment, and simple digital tools top creatives use to work fast.",
      highlight: "Workflows you can use immediately.",
      icon: <Palette className="w-5 h-5" />
    },
    {
      num: "03",
      badgeColor: "bg-[#F59E0B] text-black",
      title: "Find teammates and friends",
      desc: "Meet 1,500 other creators. Connect with video editors, designers, developers, and producers.",
      highlight: "Stop working completely alone.",
      icon: <Users className="w-5 h-5" />
    },
    {
      num: "04",
      badgeColor: "bg-[#18181B] text-white",
      title: "Get your work reviewed for free",
      desc: "Show your portfolio, designs, videos, or beats to top directors and get honest advice on how to improve.",
      highlight: "1-on-1 portfolio review tables.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      num: "05",
      badgeColor: "bg-[#C94A29] text-white",
      title: "Learn how to charge more money",
      desc: "Learn how to price your work, write simple contracts, and find clients who pay in foreign currency.",
      highlight: "Get paid what your work is worth.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      num: "06",
      badgeColor: "bg-[#2563EB] text-white",
      title: "Pitch for ₦10M in free grants",
      desc: "Submit your creative idea or project. Finalists pitch live on stage to win seed funding with zero debt.",
      highlight: "Real cash grants on the main stage.",
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  return (
    <section id="why-attend" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-2 border-[#18181B]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#18181B] gap-2 mb-8">
        <div className="flex items-center gap-3">
       
          <h2 className="font-syne font-black text-2xl uppercase tracking-tight text-[#18181B]">
            WHAT YOU GET BY ATTENDING
          </h2>
        </div>
        <span className="text-xs font-mono text-[#C94A29] font-bold uppercase">
          6 DIRECT OPPORTUNITIES
        </span>
      </div>

      {/* 6 Picasso Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((pt) => (
          <div
            key={pt.num}
            className="picasso-card p-5 rounded-bl-3xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#18181B]/15 pb-2 mb-3">
                <span className="font-syne font-black text-3xl text-[#18181B]">
                  {pt.num}
                </span>
                <div className={`w-8 h-8 rounded-full border border-[#18181B] flex items-center justify-center ${pt.badgeColor}`}>
                  {pt.icon}
                </div>
              </div>

              <h3 className="font-syne font-bold text-lg text-[#18181B] uppercase leading-snug">
                {pt.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#18181B]/80 mt-2 leading-relaxed">
                {pt.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#18181B]/15 font-mono text-xs text-[#C94A29] font-bold">
              ★ {pt.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* Callout Strip */}
      <div className="mt-8 picasso-card p-6 bg-[#FAF6EE] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-tr-3xl">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C94A29]">
            EVERY PASS IS COMPLETELY FREE
          </span>
          <h4 className="font-syne font-bold text-xl text-[#18181B]">
            Free lunch, event pack, and review access included for every attendee.
          </h4>
          <p className="font-sans text-xs text-[#18181B]/75">
            Venue holds 2,000 seats. Claim your free pass early before registration closes.
          </p>
        </div>

        <button
          onClick={onRegisterClick}
          className="bg-[#C94A29] hover:bg-[#18181B] text-white px-7 py-3.5 font-mono font-bold text-xs uppercase tracking-widest transition-all border-2 border-[#18181B] shadow-[3px_3px_0px_#18181B] shrink-0 flex items-center gap-2"
        >
          <span>GET MY PASS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

