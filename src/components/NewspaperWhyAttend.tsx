import React from 'react';
import { Compass, Palette, Users, Sparkles, TrendingUp, Trophy, ArrowRight } from 'lucide-react';

interface WhyAttendProps {
  onRegisterClick: () => void;
}

export const NewspaperWhyAttend: React.FC<WhyAttendProps> = ({ onRegisterClick }) => {
  const points = [
    {
      number: "01",
      title: "Learn from people who've done it",
      desc: "Get real, practical advice from people who actually run profitable studios and businesses.",
      highlight: "Real examples, zero fluffy speeches.",
      icon: <Compass className="w-5 h-5" />
    },
    {
      number: "02",
      title: "Discover the best modern tools",
      desc: "Find out what software, equipment, and simple digital tools top creatives use to work fast.",
      highlight: "Learn workflows you can use immediately.",
      icon: <Palette className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Find teammates and friends",
      desc: "Meet 1,500 other creators. Connect with video editors, designers, developers, and producers.",
      highlight: "Stop working completely alone.",
      icon: <Users className="w-5 h-5" />
    },
    {
      number: "04",
      title: "Get your work reviewed for free",
      desc: "Show your portfolio, designs, videos, or beats to top directors and get honest advice on how to improve.",
      highlight: "1-on-1 portfolio review tables.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      number: "05",
      title: "Learn how to charge more money",
      desc: "Learn how to price your work, write simple contracts, and find clients who pay in foreign currency.",
      highlight: "Get paid what your work is worth.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      number: "06",
      title: "Pitch for ₦10M in free grants",
      desc: "Submit your creative idea or project. Finalists pitch live on stage to win seed funding with zero debt.",
      highlight: "Real cash grants on the main stage.",
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  return (
    <section id="why-attend" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b-2 border-[#1A1815]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#1A1815] gap-2 mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION D
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            WHAT YOU GET BY ATTENDING
          </h3>
        </div>
        <span className="text-xs font-mono text-[#C9381A] font-bold uppercase">
          6 DIRECT OPPORTUNITIES
        </span>
      </div>

      {/* 6 Cards in Plain English */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((point) => (
          <div
            key={point.number}
            className="border-2 border-[#1A1815] p-5 bg-white shadow-[4px_4px_0px_#1A1815] flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#1A1815]/15 pb-2 mb-3">
                <span className="font-playfair font-black text-3xl text-[#C9381A]">
                  {point.number}
                </span>
                <div className="w-8 h-8 rounded-full border border-[#1A1815] flex items-center justify-center text-[#1A1815] bg-[#FAF7F0]">
                  {point.icon}
                </div>
              </div>

              <h4 className="font-playfair font-bold text-lg text-[#1A1815] uppercase leading-snug">
                {point.title}
              </h4>

              <p className="font-serif text-xs sm:text-sm text-[#1A1815]/80 mt-2 leading-relaxed">
                {point.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#1A1815]/10 font-mono text-xs text-[#C9381A] font-bold">
              ★ {point.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="mt-8 border-2 border-[#1A1815] p-6 bg-[#FAF7F0] shadow-[4px_4px_0px_#1A1815] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C9381A]">
            EVERY PASS IS COMPLETELY FREE
          </span>
          <h4 className="font-playfair font-bold text-xl text-[#1A1815]">
            Free lunch, event pack, and review access included for every attendee.
          </h4>
          <p className="font-serif text-xs text-[#1A1815]/75">
            Venue holds 2,000 seats. Claim your free pass early before registration closes.
          </p>
        </div>

        <button
          onClick={onRegisterClick}
          className="bg-[#C9381A] hover:bg-[#1A1815] text-white px-7 py-3.5 font-mono font-black text-xs uppercase tracking-widest transition-colors border-2 border-[#1A1815] shadow-[3px_3px_0px_#1A1815] shrink-0 flex items-center gap-2"
        >
          <span>GET MY PASS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
