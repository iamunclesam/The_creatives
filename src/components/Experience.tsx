import React from 'react';
import { Layers } from 'lucide-react';
import { experienceCards } from '../data/summitData';
import { DaVivaSunburst, DaVivaCornerFrame } from './DaVivaMotifs';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <DaVivaSunburst size={16} />
              <span className="text-[11px] font-mono font-bold text-[#FF8A00] tracking-widest uppercase">
                THE SUMMIT JOURNEY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
              MORE THAN A SUMMIT.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-white">
                AN EXPERIENCE.
              </span>
            </h2>
            <p className="text-sm text-[#94949E]">
              6 dynamic spaces designed for hands-on execution, collaboration, and high-impact industry insight.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-white/80">
            <Layers className="w-3.5 h-3.5 text-[#FF4600]" />
            <span>6 SPECIALIZED SPACES</span>
          </div>
        </div>

        {/* Visually Distinctive Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {experienceCards.map((card, idx) => (
            <div
              key={card.id}
              className="group relative rounded-3xl overflow-hidden bg-[#141416] border border-white/10 hover:border-[#FF4600]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF4600]/10 flex flex-col justify-between"
            >
              {/* DaViva Corner Frame on Card */}
              <DaVivaCornerFrame className="absolute top-0 right-0 z-10 rotate-90 opacity-40 group-hover:opacity-100 transition-opacity" />

              {/* Image Container with Editorial Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                
                {/* DaViva Inspired Category Tag */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#FF4600]/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-[#FF8A00] uppercase flex items-center gap-1.5">
                  <DaVivaSunburst size={10} />
                  <span>{card.tag}</span>
                </div>

                <div className="absolute top-2.5 right-10 font-display font-black text-3xl text-white/10 select-none">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Block - Clean & Concise */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#FF4600] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-[#FF8A00] uppercase mt-0.5">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-[#94949E] mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  {card.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-[11px] text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4600]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#FF4600] to-[#FF8A00] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
