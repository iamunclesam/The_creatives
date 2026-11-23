import React from 'react';
import { Quote } from 'lucide-react';
import { communityShowcaseItems } from '../data/summitData';
import { DaVivaSunburst } from './DaVivaMotifs';

export const CommunityShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-16 lg:py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <DaVivaSunburst size={14} />
              <span className="text-[11px] font-mono font-bold text-[#FF4600] tracking-widest uppercase">
                COLLECTIVE VOICES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
              SHAPED BY THE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-white">
                COMMUNITY.
              </span>
            </h2>
            <p className="text-sm text-[#94949E]">
              Creators and technologists defining Ekiti's creative renaissance.
            </p>
          </div>

          <div className="text-xs font-mono text-white/60 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/5">
            Ekiti • Lagos • Global Diaspora
          </div>
        </div>

        {/* Masonry / Editorial Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {communityShowcaseItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden bg-[#141416] border border-white/10 hover:border-[#FF4600]/50 transition-all duration-300 flex flex-col justify-between ${
                idx === 1 || idx === 4 ? 'lg:translate-y-4' : ''
              }`}
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />

                {/* DaViva Tag */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#FF8A00] border border-[#FF4600]/30 flex items-center gap-1">
                  <DaVivaSunburst size={10} />
                  <span>{item.tag}</span>
                </div>
              </div>

              {/* Quote & Creator Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <Quote className="w-5 h-5 text-[#FF4600]/50" />
                  <p className="text-xs sm:text-sm text-white/90 italic font-serif leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#94949E] font-mono">
                      {item.discipline}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-[#FF8A00] bg-[#FF4600]/10 px-2 py-0.5 rounded">
                    {item.projectTitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
