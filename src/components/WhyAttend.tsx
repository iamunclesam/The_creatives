import React from 'react';
import { ArrowUpRight, Compass, Palette, Users, Sparkles, TrendingUp, Trophy, Check } from 'lucide-react';
import { whyAttendPoints } from '../data/summitData';
import { DaVivaSunburst, DaVivaCornerFrame } from './DaVivaMotifs';

interface WhyAttendProps {
  onRegisterClick: () => void;
}

export const WhyAttend: React.FC<WhyAttendProps> = ({ onRegisterClick }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Trophy: <Trophy className="w-5 h-5" />
  };

  return (
    <section className="py-16 lg:py-24 relative bg-[#0B0B0D] border-t border-white/10 overflow-hidden">
      {/* DaViva African Wax Pattern Overlay */}
      <div className="absolute inset-0 bg-daviva-wax opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with DaViva Rosette */}
        <div className="max-w-2xl space-y-2 mb-10">
          <div className="flex items-center gap-2">
            <DaVivaSunburst size={16} />
            <span className="text-[11px] font-mono font-bold text-[#FF8A00] tracking-widest uppercase">
              TANGIBLE VALUE & ROI
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
            YOUR NEXT OPPORTUNITY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-[#FFB800]">
              STARTS HERE.
            </span>
          </h2>
          <p className="text-sm text-[#94949E]">
            Direct investment into your creative craft, network, and economic independence.
          </p>
        </div>

        {/* 6 High-Impact Cards with DaViva Corner Framing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {whyAttendPoints.map((point) => (
            <div
              key={point.number}
              className="group relative rounded-3xl p-6 bg-[#141416] border border-white/10 hover:border-[#FF4600]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
            >
              {/* DaViva Corner Accent */}
              <DaVivaCornerFrame className="absolute top-0 left-0 opacity-40 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white/20 group-hover:text-[#FF4600] transition-colors">
                    {point.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4600]/20 to-[#FF8A00]/10 border border-[#FF4600]/30 flex items-center justify-center text-[#FF4600]">
                    {iconMap[point.iconName] || <Palette className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FF4600] transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs text-[#94949E] mt-2 leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/80">
                <Check className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                <span className="truncate">{point.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout with DaViva styling */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#17171A] to-[#121214] border border-[#FF4600]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <DaVivaSunburst size={14} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF4600]">
                FREE CATERING & DELEGATE PASSES
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Limited to 2,000 Accredited Creatives.
            </h3>
            <p className="text-xs text-[#94949E]">
              Reserve your spot early to access masterclass breakout sessions and pitch grants.
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 bg-[#FF4600] hover:bg-[#E03D00] text-white px-7 py-3.5 rounded-full font-display font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#FF4600]/30 transition-all shrink-0"
          >
            <span>REGISTER PASS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
