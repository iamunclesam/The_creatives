import React from 'react';

export const OldNewsClassifieds: React.FC = () => {
  const pillars = [
    {
      num: "SEC. 01",
      title: "Design That Slaps",
      desc: "Brand systems, typography, and international art direction.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "SEC. 02",
      title: "Film & Visual Direction",
      desc: "Documentary lighting, indie production, and editing on real budgets.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "SEC. 03",
      title: "Sound & Beats Magic",
      desc: "Sonic production, sample culture, and international royalties.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "SEC. 04",
      title: "Creative Code & Web",
      desc: "Interactive spatial web, digital tools, and creative engineering.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 border-b-2 border-[#1A1815]">
      {/* Classifieds Bar */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#1A1815] mb-6">
        <div className="flex items-center gap-2">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION B
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            THE 4 CREATIVE WORKSPACES
          </h3>
        </div>
        <span className="text-xs font-mono text-[#1A1815]/60 uppercase hidden sm:inline">
          OCTOBER 25 • ADO-EKITI
        </span>
      </div>

      {/* 4 Vintage Classified Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="vintage-box p-3.5 space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#1A1815]/20 pb-1 mb-2 font-mono text-[10px] font-bold">
                <span className="text-[#C9381A]">{item.num}</span>
                <span className="text-[#1A1815]/60">STUDIO LAB</span>
              </div>

              <div className="border border-[#1A1815] aspect-[4/3] overflow-hidden mb-2 bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover vintage-halftone"
                />
              </div>

              <h4 className="font-playfair font-bold text-base uppercase text-[#1A1815] leading-snug">
                {item.title}
              </h4>
            </div>

            <p className="font-serif text-xs text-[#1A1815]/80 leading-relaxed pt-1 border-t border-[#1A1815]/10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

