import React from 'react';
import { Quote, Flame, Zap, Target, Globe } from 'lucide-react';
import { PicassoPalettePatch } from './PicassoArt';

interface ManifestoProps {
  onRegisterClick: () => void;
}

export const PicassoManifesto: React.FC<ManifestoProps> = ({ onRegisterClick }) => {
  const pillars = [
    {
      icon: Flame,
      color: "bg-[#C94A29] text-white",
      tag: "CRAFT",
      title: "Sharpen Your Craft",
      desc: "Hands-on workshops in graphic design, photography, film editing, and sound production from experienced mentors."
    },
    {
      icon: Zap,
      color: "bg-[#2563EB] text-white",
      tag: "TOOLS",
      title: "Use Modern Tools",
      desc: "Learn the digital tools, software, and simple workflows that help you produce great creative work much faster."
    },
    {
      icon: Target,
      color: "bg-[#F59E0B] text-black",
      tag: "PRICING",
      title: "Make Real Money",
      desc: "Learn how to price your work, pitch to serious clients, write clear contracts, and get paid on time without stress."
    },
    {
      icon: Globe,
      color: "bg-[#18181B] text-white",
      tag: "GLOBAL",
      title: "Get Global Clients",
      desc: "How to land remote work from foreign clients, get paid in foreign currency, and run a studio from right here in Ekiti."
    }
  ];

  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-2 border-[#18181B]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#18181B] gap-2 mb-8">
        <div className="flex items-center gap-3">
          
          <h2 className="font-syne font-black text-2xl uppercase tracking-tight text-[#18181B]">
            THE MANIFESTO & MISSION
          </h2>
        </div>
        <span className="text-xs font-mono text-[#18181B]/60 uppercase font-bold">
          PLAIN ENGLISH • NO FLUFF
        </span>
      </div>

      {/* Headline & Explanation */}
      <div className="max-w-3xl space-y-3 mb-10">
        <h3 className="font-syne font-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#18181B] uppercase tracking-normal sm:tracking-tight leading-snug sm:leading-[1.05] break-words">
          CREATIVITY PAYS REAL MONEY NOW.{' '}
          <span className="font-serif italic font-normal text-[#C94A29] lowercase tracking-normal">it is not a hobby.</span>
        </h3>
        <p className="font-sans text-base sm:text-lg text-[#18181B]/80 leading-relaxed">
          Young Africans are making music, shooting videos, and designing brands that people across the globe love. StandOut gives you the skills, connections, and seed money to build a real career right here in Ekiti.
        </p>
      </div>

      {/* Asymmetrical 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Narrative Box */}
        <div className="lg:col-span-5 space-y-4 font-sans text-[#18181B]/90 text-sm leading-relaxed border-b lg:border-b-0 lg:border-r-2 border-[#18181B] pb-6 lg:pb-0 lg:pr-6">
          <p>
            Too many young creatives create in isolation in their rooms. They don't know how much to charge, how to protect their work, or where to find serious paying clients.
          </p>
          <p>
            StandOut was built to fix that. We bring together experienced leaders who will open up their project files, show you their exact process, and help you grow.
          </p>

          {/* Picasso Quote Box */}
          <div className="border-2 border-[#18181B] p-5 bg-[#FFFDF9] shadow-[4px_4px_0px_#18181B] space-y-2 my-3 rounded-tr-3xl">
            <Quote className="w-6 h-6 text-[#C94A29]" />
            <blockquote className="font-serif italic text-lg text-[#18181B] leading-snug">
              "You don't need to leave your hometown to build a great business. When you have the right skills and the right tools, clients will find you anywhere."
            </blockquote>
            <p className="font-mono text-[10px] text-[#18181B]/60 uppercase pt-1 font-bold">
              — StandOut Secretariat, Ado-Ekiti
            </p>
          </div>
        </div>

        {/* Right: 4 Asymmetrical Cubist Pillar Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="picasso-card p-5 rounded-tl-2xl rounded-br-2xl flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#18181B]/15 pb-2 mb-3">
                    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${pillar.color}`}>
                      {pillar.tag}
                    </span>
                    <Icon className="w-4 h-4 text-[#18181B]" />
                  </div>
                  <h4 className="font-syne font-black text-lg text-[#18181B] uppercase">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#18181B]/80 mt-1 leading-relaxed">
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

