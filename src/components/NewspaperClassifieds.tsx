import React from 'react';

export const NewspaperClassifieds: React.FC = () => {
  const desks = [
    {
      deskNo: "DESK 01",
      title: "Graphic Design & Branding",
      lead: "Logos, posters, fonts, and clean visuals for real paying clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      skills: ["Building brand identities for clients", "Choosing the right fonts & colors", "Packaging African style for global brands"]
    },
    {
      deskNo: "DESK 02",
      title: "Video Making & Cinema",
      lead: "Shooting films, directing music videos, and editing on lean budgets.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      skills: ["Camera work & lighting setups", "Editing & cinematic color grading", "Getting your videos into film festivals"]
    },
    {
      deskNo: "DESK 03",
      title: "Music & Sound Production",
      lead: "Making beats, recording clear audio, and getting your music royalties.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      skills: ["Afrobeats production & mixing", "Licensing music for movies & games", "Collecting your streaming royalties"]
    },
    {
      deskNo: "DESK 04",
      title: "Web Design & Coding",
      lead: "Building fast, beautiful websites and apps using modern code.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      skills: ["Designing responsive websites", "Adding smooth motion & animations", "Landing high-paying remote dev work"]
    }
  ];

  return (
    <section id="desks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b-2 border-[#1A1815]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#1A1815] gap-2 mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION C
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            THE 4 CREATIVE WORKSHOPS
          </h3>
        </div>
        <span className="text-xs font-mono text-[#1A1815]/60 uppercase">
          HANDS-ON • BRING YOUR LAPTOP
        </span>
      </div>

      {/* 4 Newspaper Desks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {desks.map((desk, idx) => (
          <div
            key={idx}
            className="border-2 border-[#1A1815] p-4 bg-white shadow-[3px_3px_0px_#1A1815] flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Desk Top Bar */}
              <div className="flex items-center justify-between border-b border-[#1A1815] pb-2 mb-3 text-xs font-mono font-bold">
                <span className="text-[#C9381A]">{desk.deskNo}</span>
                <span className="text-[#1A1815]/60">STUDIO</span>
              </div>

              {/* Halftone Image */}
              <div className="border border-[#1A1815] aspect-[4/3] overflow-hidden mb-3 bg-black">
                <img
                  src={desk.image}
                  alt={desk.title}
                  className="w-full h-full object-cover vintage-halftone"
                />
              </div>

              <h4 className="font-playfair font-bold text-lg text-[#1A1815] uppercase leading-snug">
                {desk.title}
              </h4>

              <p className="font-serif text-xs text-[#1A1815]/75 mt-1 leading-relaxed">
                {desk.lead}
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-3 border-t border-[#1A1815]/10 space-y-1 font-mono text-[11px] text-[#1A1815]/80">
              {desk.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-start gap-1.5">
                  <span className="text-[#C9381A] font-bold">✓</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
