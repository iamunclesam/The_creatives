import React from 'react';

export const PicassoFaculty: React.FC = () => {
  const mentors = [
    {
      num: "01",
      badgeColor: "bg-[#C94A29] text-white",
      name: "Toluwani Adeyemi",
      role: "Design Director",
      company: "Studio Ochre & Form",
      teach: "Teaches brand identity and typography for international technology clients.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      badgeColor: "bg-[#2563EB] text-white",
      name: "Chukwudi Nnamdi",
      role: "Creative Tech Lead",
      company: "Kinetix Africa Labs",
      teach: "Teaches modern website design, animations, and creative coding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      badgeColor: "bg-[#F59E0B] text-black",
      name: "Eniola Fayemi",
      role: "Film Director",
      company: "Ekiti Cinema Collective",
      teach: "Teaches indie video production, cinematic camera work, and storytelling.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04",
      badgeColor: "bg-[#18181B] text-white",
      name: "Babatunde Alabi",
      role: "Startup Investor",
      company: "Spark Capital West Africa",
      teach: "Backs young creators and manages the ₦10M seed grant fund on stage.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="faculty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-2 border-[#18181B]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#18181B] gap-2 mb-8">
        <div className="flex items-center gap-3">
         
          <h2 className="font-syne font-black text-2xl uppercase tracking-tight text-[#18181B]">
            SPEAKERS & MENTORS
          </h2>
        </div>
        <span className="text-xs font-mono text-[#C94A29] font-bold uppercase">
          REAL PRACTITIONERS • NO FLUFF
        </span>
      </div>

      {/* 4 Picasso Exhibition Portrait Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((member, idx) => (
          <div
            key={idx}
            className="picasso-card p-4 rounded-tl-3xl space-y-3"
          >
            <div className="border-2 border-[#18181B] overflow-hidden aspect-[4/5] bg-black relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-300"
              />
              <span className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase border border-[#18181B] ${member.badgeColor}`}>
                EXHIBIT {member.num}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-syne font-bold text-lg text-[#18181B] leading-tight">
                {member.name}
              </h3>
              <p className="font-mono text-xs text-[#C94A29] font-bold">
                {member.role} • {member.company}
              </p>
              <p className="font-sans text-xs text-[#18181B]/80 pt-1 leading-relaxed">
                {member.teach}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

