import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqList, eventConfig } from '../data/summitData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#080808] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-medium text-[#FF4600] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            EVERYTHING YOU NEED TO KNOW.
          </h2>
          <p className="text-sm sm:text-base text-[#94949E]">
            Have more questions? Contact our secretariat at <a href={`mailto:${eventConfig.contact.email}`} className="text-white underline hover:text-[#FF4600]">{eventConfig.contact.email}</a>
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#141416] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#FF4600] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-[#FF4600] text-white rotate-180' : 'bg-white/5 text-white/70'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#94949E] leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

