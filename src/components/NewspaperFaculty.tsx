import React from 'react';

export const NewspaperFaculty: React.FC = () => {
  const mentors = [
    {
      name: "Toluwani Adeyemi",
      role: "Design Director",
      company: "Studio Ochre & Form",
      teach: "Teaches brand identity and typography for international technology clients.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chukwudi Nnamdi",
      role: "Creative Tech Lead",
      company: "Kinetix Africa Labs",
      teach: "Teaches modern website design, animations, and creative coding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Eniola Fayemi",
      role: "Film Director",
      company: "Ekiti Cinema Collective",
      teach: "Teaches indie video production, cinematic camera work, and storytelling.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Babatunde Alabi",
      role: "Startup Investor",
      company: "Spark Capital West Africa",
      teach: "Backs young creators and manages the ₦10M seed grant fund on stage.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="faculty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b-2 border-[#1A1815]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#1A1815] gap-2 mb-8">
        <div className="flex items-center gap-3">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION E
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            SPEAKERS & MENTORS
          </h3>
        </div>
        <span className="text-xs font-mono text-[#C9381A] font-bold uppercase">
          REAL PRACTITIONERS • NO FLUFF
        </span>
      </div>

      {/* 4-column profile grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((member, idx) => (
          <div
            key={idx}
            className="border-2 border-[#1A1815] p-4 bg-white shadow-[3px_3px_0px_#1A1815] space-y-3"
          >
            <div className="border border-[#1A1815] overflow-hidden aspect-[4/5] bg-black">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover vintage-halftone"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#C9381A] font-black uppercase">
                MENTOR 0{idx + 1}
              </span>
              <h4 className="font-playfair font-bold text-lg text-[#1A1815] leading-tight">
                {member.name}
              </h4>
              <p className="font-mono text-xs text-[#1A1815]/70 font-bold">
                {member.role} • {member.company}
              </p>
              <p className="font-serif text-xs text-[#1A1815]/80 pt-1 leading-relaxed">
                {member.teach}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
