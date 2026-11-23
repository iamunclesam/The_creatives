import React from 'react';
import { Quote, Flame, Zap, Target, Globe } from 'lucide-react';

interface ManifestoProps {
  onRegisterClick: () => void;
}

export const NewspaperManifesto: React.FC<ManifestoProps> = ({ onRegisterClick }) => {
  const pillars = [
    {
      icon: Flame,
      title: "Sharpen Your Craft",
      desc: "Hands-on workshops in graphic design, photography, film editing, and sound production from experienced mentors."
    },
    {
      icon: Zap,
      title: "Use Modern Tools",
      desc: "Learn the digital tools, software, and simple workflows that help you produce great creative work much faster."
    },
    {
      icon: Target,
      title: "Make Real Money",
      desc: "Learn how to price your work, pitch to serious clients, write clear contracts, and get paid on time without stress."
    },
    {
      icon: Globe,
      title: "Get Global Clients",
      desc: "How to land remote work from foreign clients, get paid in foreign currency, and run a studio from right here in Ekiti."
    }
  ];

  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b-2 border-[#1A1815]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#1A1815] gap-2 mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION B
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            WHY WE ARE DOING THIS
          </h3>
        </div>
        <span className="text-xs font-mono text-[#1A1815]/60 uppercase">
          PLAIN TALK • NO CORPORATE JARGON
        </span>
      </div>

      {/* Main Headline */}
      <div className="max-w-3xl space-y-3 mb-8">
        <h2 className="font-playfair font-black text-3xl sm:text-5xl text-[#1A1815] uppercase tracking-tight leading-[1.05]">
          CREATIVITY PAYS REAL MONEY NOW.{' '}
          <span className="text-[#C9381A] italic font-serif lowercase">it is not a hobby.</span>
        </h2>
        <p className="font-serif text-base sm:text-lg text-[#1A1815]/85 leading-relaxed">
          Young Africans are making music, shooting videos, and designing brands that people across the globe love. The Spark gives you the skills, connections, and seed money to build a real career right here in Ekiti.
        </p>
      </div>

      {/* 2-Column: Story & 4 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-5 space-y-4 font-serif text-[#1A1815]/90 text-sm leading-relaxed border-b lg:border-b-0 lg:border-r border-[#1A1815]/20 pb-6 lg:pb-0 lg:pr-6">
          <p>
            Too many young creatives create in isolation in their rooms. They don't know how much to charge, how to protect their work, or where to find serious paying clients.
          </p>
          <p>
            The Spark was built to fix that. We bring together experienced leaders who will open up their project files, show you their exact process, and help you grow.
          </p>

          <div className="border-2 border-[#1A1815] p-4 bg-[#FAF7F0] shadow-[3px_3px_0px_#1A1815] space-y-2 my-2">
            <Quote className="w-5 h-5 text-[#C9381A]" />
            <blockquote className="font-playfair font-bold text-base text-[#1A1815] leading-snug">
              "You don't need to leave your hometown to build a great business. When you have the right skills and the right tools, clients will find you anywhere."
            </blockquote>
            <p className="font-mono text-[10px] text-[#1A1815]/60 uppercase pt-1">
              — The Spark Secretariat
            </p>
          </div>
        </div>

        {/* Right: 4 Pillars in Plain English */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="border-2 border-[#1A1815] p-4 bg-white shadow-[3px_3px_0px_#1A1815] space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#1A1815]/15 pb-2 mb-2 font-mono text-xs">
                    <span className="text-[#C9381A] font-bold">PILLAR 0{idx + 1}</span>
                    <Icon className="w-4 h-4 text-[#1A1815]" />
                  </div>
                  <h4 className="font-playfair font-bold text-base text-[#1A1815] uppercase">
                    {pillar.title}
                  </h4>
                  <p className="font-serif text-xs text-[#1A1815]/80 mt-1 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
