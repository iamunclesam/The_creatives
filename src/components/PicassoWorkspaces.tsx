import React from 'react';

export const PicassoWorkspaces: React.FC = () => {
  const workspaces = [
    {
      num: "01",
      tag: "DESIGN",
      badgeColor: "bg-[#FF4D00] text-white",
      borderColor: "border-[#FF4D00]",
      title: "Graphic Design & Branding",
      lead: "Stop making ₦5k logos. Learn brand systems companies pay thousands of dollars for.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      skills: ["Brand Systems", "Font & Color", "USD Rate Cards"]
    },
    {
      num: "02",
      tag: "VIDEO",
      badgeColor: "bg-[#2563EB] text-white",
      borderColor: "border-[#2563EB]",
      title: "Video Making & Cinema",
      lead: "You don't need expensive gear. Shoot cinema and viral commercials on what you have.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      skills: ["Lighting on a Budget", "Color Grade", "Directing"]
    },
    {
      num: "03",
      tag: "AUDIO",
      badgeColor: "bg-[#FFE600] text-[#18181B]",
      borderColor: "border-[#FFE600]",
      title: "Music & Beat Production",
      lead: "Stop sending unplayed beats. Master pro Afrobeats mixing and streaming royalties.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      skills: ["Afrobeats Mixing", "Sync Licensing", "Royalties"]
    },
    {
      num: "04",
      tag: "CODE",
      badgeColor: "bg-[#10B981] text-white",
      borderColor: "border-[#10B981]",
      title: "Web Design & Dev",
      lead: "Build high-speed, interactive websites that growing businesses pay top dollar for.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      skills: ["Responsive UI", "Animations", "Remote Dev Gigs"]
    }
  ];

  return (
    <section id="workshops" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-[2.5px] border-[#18181B]">
      {/* Header with Pop */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-[2.5px] border-[#18181B] gap-3 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#2563EB] border-2 border-[#18181B] rotate-12" />
          <h2 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#18181B]">
            THE 4 CRAFT LABS
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#18181B] text-white font-mono text-xs font-black uppercase tracking-wider self-start sm:self-auto shadow-[2px_2px_0px_#FFE600]">
          PRACTICAL SKILLS
        </span>
      </div>

      {/* 4 Cubist Workspaces Grid with Electric Contrast */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workspaces.map((space, idx) => (
          <div
            key={idx}
            className="picasso-card p-4 rounded-tr-3xl flex flex-col justify-between space-y-4 hover:translate-y-[-3px] transition-transform"
          >
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b-2 border-[#18181B] pb-2 mb-3">
                <span className={`px-2.5 py-0.5 text-[10px] font-mono font-black uppercase border border-[#18181B] shadow-[1.5px_1.5px_0px_#18181B] ${space.badgeColor}`}>
                  {space.tag}
                </span>
                <span className="font-syne font-black text-xs text-[#18181B]">
                  LAB {space.num}
                </span>
              </div>

              {/* Image Frame */}
              <div className="border-2 border-[#18181B] aspect-[4/3] overflow-hidden mb-3 bg-black shadow-[3px_3px_0px_#18181B]">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h3 className="font-syne font-black text-lg text-[#18181B] uppercase leading-tight">
                {space.title}
              </h3>

              <p className="font-sans text-xs text-[#18181B]/80 mt-1.5 leading-relaxed font-medium">
                {space.lead}
              </p>
            </div>

            {/* Quick Skill Tags */}
            <div className="pt-3 border-t-2 border-[#18181B]/15 flex flex-wrap gap-1.5">
              {space.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-[#FAF7F0] border border-[#18181B] text-[10px] font-mono font-bold text-[#18181B] px-2 py-0.5"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
