import React from 'react';

export const PicassoWorkspaces: React.FC = () => {
  const workspaces = [
    {
      num: "01",
      tag: "DESIGN",
      badgeColor: "bg-[#C94A29] text-white",
      title: "Graphic Design & Branding",
      lead: "Logos, posters, fonts, and clean visuals for real paying clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      points: ["Building brand identities for clients", "Choosing the right fonts & colors", "Packaging African style for global brands"]
    },
    {
      num: "02",
      tag: "CINEMA",
      badgeColor: "bg-[#2563EB] text-white",
      title: "Video Making & Cinema",
      lead: "Shooting films, directing music videos, and editing on lean budgets.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      points: ["Camera work & lighting setups", "Editing & cinematic color grading", "Getting your videos into film festivals"]
    },
    {
      num: "03",
      tag: "AUDIO",
      badgeColor: "bg-[#F59E0B] text-black",
      title: "Music & Sound Production",
      lead: "Making beats, recording clear audio, and getting your music royalties.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      points: ["Afrobeats production & mixing", "Licensing music for movies & games", "Collecting your streaming royalties"]
    },
    {
      num: "04",
      tag: "CODE",
      badgeColor: "bg-[#18181B] text-white",
      title: "Web Design & Coding",
      lead: "Building fast, beautiful websites and apps using modern code.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      points: ["Designing responsive websites", "Adding smooth motion & animations", "Landing high-paying remote dev work"]
    }
  ];

  return (
    <section id="workspaces" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-2 border-[#18181B]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#18181B] gap-2 mb-8">
        <div className="flex items-center gap-3">
        
          <h2 className="font-syne font-black text-2xl uppercase tracking-tight text-[#18181B]">
            THE 4 CREATIVE WORKSHOPS
          </h2>
        </div>
        <span className="text-xs font-mono text-[#18181B]/60 uppercase font-bold">
          HANDS-ON • BRING YOUR LAPTOP
        </span>
      </div>

      {/* 4 Cubist Workspaces Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workspaces.map((space, idx) => (
          <div
            key={idx}
            className="picasso-card p-4 rounded-tr-3xl flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-[#18181B]/20 pb-2 mb-3">
                <span className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase ${space.badgeColor}`}>
                  {space.tag}
                </span>
                <span className="font-syne font-black text-xs text-[#18181B]">
                  CANVAS {space.num}
                </span>
              </div>

              {/* Image Frame */}
              <div className="border-2 border-[#18181B] aspect-[4/3] overflow-hidden mb-3 bg-black">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h3 className="font-syne font-bold text-lg text-[#18181B] uppercase leading-tight">
                {space.title}
              </h3>

              <p className="font-sans text-xs text-[#18181B]/75 mt-1 leading-relaxed">
                {space.lead}
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-3 border-t border-[#18181B]/15 space-y-1 font-mono text-[11px] text-[#18181B]/80">
              {space.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-1.5">
                  <span className="text-[#C94A29] font-bold">✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

