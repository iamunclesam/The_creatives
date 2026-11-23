import React from 'react';

export const OldNewsFaculty: React.FC = () => {
  const mentors = [
    {
      name: "Toluwani Adeyemi",
      role: "Design Director",
      desk: "Studio Ochre & Form",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chukwudi Nnamdi",
      role: "Creative Tech Lead",
      desk: "Kinetix Africa Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Eniola Fayemi",
      role: "Film Director",
      desk: "Ekiti Cinema Collective",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Babatunde Alabi",
      role: "Venture Backer",
      desk: "Spark Capital West Africa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 border-b-2 border-[#1A1815]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#1A1815] mb-6">
        <div className="flex items-center gap-2">
          <span className="bg-[#1A1815] text-[#EFE9DC] px-2 py-0.5 text-xs font-mono font-bold uppercase">
            SECTION C
          </span>
          <h3 className="font-playfair font-black text-2xl uppercase tracking-tight text-[#1A1815]">
            NOT MOTIVATIONAL SPEAKERS.
          </h3>
        </div>
        <span className="text-xs font-mono text-[#C9381A] font-bold uppercase">
          REAL PRACTITIONERS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {mentors.map((person, idx) => (
          <div
            key={idx}
            className="vintage-box p-3 space-y-2 text-center sm:text-left"
          >
            <div className="border border-[#1A1815] aspect-[4/5] overflow-hidden bg-black">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover vintage-halftone"
              />
            </div>

            <div>
              <span className="text-[9px] font-mono text-[#C9381A] font-bold uppercase block">
                FACULTY 0{idx + 1}
              </span>
              <h4 className="font-playfair font-bold text-base text-[#1A1815] uppercase leading-tight">
                {person.name}
              </h4>
              <p className="font-mono text-xs text-[#1A1815]/70 pt-0.5">
                {person.role} • <span className="font-bold">{person.desk}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

