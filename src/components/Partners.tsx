import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { partnerCategories } from '../data/summitData';
import { DaVivaSunburst } from './DaVivaMotifs';

interface PartnersProps {
  onPartnerClick: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ onPartnerClick }) => {
  return (
    <section id="partners" className="py-16 lg:py-24 relative bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <DaVivaSunburst size={14} />
              <span className="text-[11px] font-mono font-bold text-[#FF4600] tracking-widest uppercase">
                COALITION & ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
              POWERED BY PARTNERS WHO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-white">
                BELIEVE IN POSSIBILITIES.
              </span>
            </h2>
            <p className="text-sm text-[#94949E]">
              Government leaders, global tech platforms, broadcast networks, and grassroots communities.
            </p>
          </div>

          <button
            onClick={onPartnerClick}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4600] to-[#FF8A00] text-white px-6 py-3 rounded-full font-display font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#FF4600]/30 transition-all shrink-0 hover:scale-105"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Tiered Sponsor Categories */}
        <div className="space-y-8">
          {partnerCategories.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <h3 className="text-xs font-mono uppercase font-bold tracking-wider text-white">
                  {category.category}
                </h3>
                <span className="text-[10px] font-mono text-[#FF8A00] uppercase tracking-widest">
                  TIER {idx + 1}
                </span>
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-xl bg-[#141416] border border-white/5 hover:border-white/20 transition-all flex flex-col items-center justify-center text-center min-h-[85px]"
                  >
                    <span className="font-display font-black text-xs sm:text-sm tracking-wider text-white/80 uppercase">
                      {partner.logoText}
                    </span>
                    {partner.tier && (
                      <span className="text-[9px] font-mono text-[#FF4600] mt-1">
                        {partner.tier}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
