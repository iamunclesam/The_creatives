import React from 'react';
import { partnerCategories } from '../data/summitData';
import { ArrowRight } from 'lucide-react';

interface PartnersProps {
  onPartnerClick: () => void;
}

export const NewspaperPartners: React.FC<PartnersProps> = ({ onPartnerClick }) => {
  return (
    <section id="partners" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b-2 border-[#1A1815]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#1A1815] gap-2 mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION F
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            POWERED BY PARTNERS WHO BELIEVE IN POSSIBILITIES
          </h3>
        </div>

        <button
          onClick={onPartnerClick}
          className="bg-[#1A1815] hover:bg-[#C9381A] text-white px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-colors border border-black shadow-[2px_2px_0px_#C9381A] shrink-0"
        >
          PARTNER WITH US →
        </button>
      </div>

      {/* Tiered Partner Grids */}
      <div className="space-y-8">
        {partnerCategories.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#1A1815]/20 pb-1.5 font-mono text-xs">
              <span className="font-bold text-[#1A1815] uppercase">{cat.category}</span>
              <span className="text-[#C9381A] font-bold">TIER 0{idx + 1}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {cat.partners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="border border-[#1A1815] p-4 bg-white shadow-[2px_2px_0px_#1A1815] flex flex-col items-center justify-center text-center min-h-[75px]"
                >
                  <span className="font-playfair font-black text-xs sm:text-sm tracking-wider text-[#1A1815] uppercase">
                    {partner.logoText}
                  </span>
                  {partner.tier && (
                    <span className="font-mono text-[9px] text-[#C9381A] mt-1 font-bold">
                      {partner.tier}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

