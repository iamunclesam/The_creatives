import React from 'react';
import { Quote } from 'lucide-react';

interface EditorialProps {
  onRegisterClick: () => void;
}

export const NewspaperEditorial: React.FC<EditorialProps> = ({ onRegisterClick }) => {
  return (
    <section id="editorial" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b-2 border-black">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-black gap-2 mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-black text-white px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION B
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-black">
            EDITORIAL OPINION & MANIFESTO
          </h3>
        </div>
        <span className="text-xs font-mono text-black/60 uppercase">
          WRITTEN BY CONVENERS & THE CREATIVE GUILD
        </span>
      </div>

      {/* 3-Column Broadsheet Story Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start font-serif text-black/85 text-sm leading-relaxed">
        {/* Column 1 */}
        <div className="space-y-4">
          <h4 className="font-playfair font-bold text-xl uppercase text-black leading-snug border-b border-black/20 pb-2">
            The Myth of the 'Side Hustle' is Officially Dead
          </h4>

          <p>
            For more than two decades, African society treated design, photography, video editing, and beat-making as supplementary hobbies—things you did in your free time after finishing a 'real' degree or office shift.
          </p>

          <p>
            That outdated thinking cost young people billions of Naira in lost agency value, unpaid intellectual property, and underpriced foreign-exchange services.
          </p>

          <p>
            Today, global media networks, international tech unicorns, and cultural brands run on the visual, sonic, and interactive taste of African creators.
          </p>
        </div>

        {/* Column 2: Large Pull Quote */}
        <div className="space-y-4 border-y md:border-y-0 md:border-x border-black/20 py-6 md:py-0 md:px-6 bg-[#F8F5EE] p-6 rounded-lg">
          <Quote className="w-8 h-8 text-[#FF4500]" />
          
          <blockquote className="font-playfair font-black text-xl sm:text-2xl text-black leading-snug">
            "You do not need to abandon your roots or migrate to Lagos to build a global studio. The internet leveled the playing field; your taste is your passport."
          </blockquote>

          <div className="pt-2 border-t border-black/10 text-xs font-mono uppercase text-black/60">
            — Convener's Note, Ado-Ekiti 2025
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h4 className="font-playfair font-bold text-xl uppercase text-black leading-snug border-b border-black/20 pb-2">
            What Happens When 1,500 Minds Converge?
          </h4>

          <p>
            When a graphic designer meets an indie film director, a world-class movie poster is born. When a sound engineer links with a creative web developer, high-earning digital experiences are forged.
          </p>

          <p>
            The Spark Creatives Summit is the physical catalyst for these collisions. We provide the masterclass stages, portfolio reviews, and ₦10M seed grant funding. You bring the hunger.
          </p>

          <div className="pt-2">
            <button
              onClick={onRegisterClick}
              className="w-full bg-black text-white hover:bg-[#FF4500] py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors border border-black shadow-[2px_2px_0px_#FF4500]"
            >
              JOIN THE GATHERING (FREE) →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

