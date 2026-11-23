import React from 'react';
import { TapeSticker } from './ArtElements';

export const FashionVisionaries: React.FC = () => {
  const faculty = [
    {
      id: "01",
      name: "Toluwani Adeyemi",
      role: "Design Director",
      company: "Studio Ochre & Form",
      vibe: "Designing world-class brand systems for global tech leaders straight out of West Africa.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      name: "Chukwudi Nnamdi",
      role: "Creative Technologist",
      company: "Kinetix Africa Labs",
      vibe: "Making digital websites and 3D web spaces that actually look and feel like magic.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "03",
      name: "Eniola Fayemi",
      role: "Documentary Director",
      company: "Ekiti Cinema Collective",
      vibe: "Shooting high-end cinematic documentaries on lean indie budgets that hit major festivals.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      name: "Babatunde Alabi",
      role: "Early-Stage Backer",
      company: "Spark Capital West Africa",
      vibe: "Investor in creative startups with a ₦10M+ pitch grant bag to award live on the main stage.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="faculty" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-black/10 gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF5500] font-black block mb-1">
            PEOPLE WHO'VE ACTUALLY DONE IT
          </span>
          <h2 className="font-syne font-black text-2xl sm:text-4xl text-black uppercase tracking-tight">
            NOT MOTIVATIONAL SPEAKERS.
          </h2>
        </div>
        <TapeSticker text="REAL MENTORS • REAL WORK" color="bg-[#FFD000] text-black" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((speaker) => (
          <div key={speaker.id} className="group space-y-3 bg-[#F2EFE9] p-4 rounded-3xl border border-black/5 hover:border-black transition-all">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black shadow-md">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-black/85 text-white font-mono text-[9px] px-2 py-0.5 rounded font-bold">
                {speaker.id} // {speaker.role}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-syne font-bold text-base text-black group-hover:text-[#FF5500] transition-colors">
                {speaker.name}
              </h3>
              <p className="text-xs font-mono text-[#FF5500] font-bold">
                {speaker.company}
              </p>
              <p className="text-xs text-black/60 pt-1 leading-relaxed">
                {speaker.vibe}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
