import React from 'react';

export const PicassoFaculty: React.FC = () => {
  const mentors = [
    {
      num: "01",
      badgeColor: "bg-[#FF4D00] text-white",
      name: "Toluwani Adeyemi",
      role: "Design Director",
      company: "Studio Ochre & Form",
      teach: "Teaches you how to package African visual identity to land $2k+ remote branding contracts.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      badgeColor: "bg-[#2563EB] text-white",
      name: "Chukwudi Nnamdi",
      role: "Creative Tech Lead",
      company: "Kinetix Africa Labs",
      teach: "Shows you how to code smooth animated websites that high-growth startups pay 7 figures for.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      badgeColor: "bg-[#FFE600] text-[#18181B]",
      name: "Eniola Fayemi",
      role: "Film Director",
      company: "Ekiti Cinema Collective",
      teach: "Breaks down low-budget cinematography, pro lighting setups, and directing viral music videos.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04",
      badgeColor: "bg-[#18181B] text-white",
      name: "Babatunde Alabi",
      role: "Brand & Venture Strategist",
      company: "EmergenceX Ecosystem",
      teach: "Shows you how to package your creative studio, position your brand, and tell your story effectively on stage.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="mentors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-[2.5px] border-[#18181B]">
      {/* Header with Pop */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-[2.5px] border-[#18181B] gap-3 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#FF4D00] border-2 border-[#18181B] rotate-12" />
          <h2 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#18181B]">
            PEOPLE LEADING THE WORKSHOPS
          </h2>
        </div>
        <span className="px-3 py-1 bg-[#2563EB] text-white font-mono text-xs font-black uppercase tracking-wider self-start sm:self-auto shadow-[2px_2px_0px_#18181B]">
          WORKING CREATIVES
        </span>
      </div>

      {/* 4 Picasso Exhibition Portrait Cards with Pop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((member, idx) => (
          <div
            key={idx}
            className="picasso-card p-4 rounded-tl-3xl space-y-3 hover:translate-y-[-3px] transition-transform"
          >
            <div className="border-2 border-[#18181B] overflow-hidden aspect-[4/5] bg-black relative shadow-[3px_3px_0px_#18181B]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-300"
              />
              <span className={`absolute top-2 left-2 px-2.5 py-0.5 text-[9px] font-mono font-black uppercase border border-[#18181B] shadow-[1.5px_1.5px_0px_#18181B] ${member.badgeColor}`}>
                EXHIBIT {member.num}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-syne font-black text-lg text-[#18181B] leading-tight">
                {member.name}
              </h3>
              <p className="font-mono text-xs text-[#FF4D00] font-black uppercase tracking-wider">
                {member.role} • {member.company.includes("EmergenceX") ? (
                  <>
                    Emergence<span className="text-[#E02B20] text-[1.18em] font-black inline-block">X</span> Ecosystem
                  </>
                ) : (
                  member.company
                )}
              </p>
              <p className="font-sans text-xs text-[#18181B]/80 pt-1 leading-relaxed font-medium">
                {member.teach}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
