import React from 'react';
import { TapeSticker } from './ArtElements';

export const FashionLookbook: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "Design That Slaps",
      badge: "VISUAL CRAFT",
      badgeColor: "bg-[#FFD000] text-black",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      desc: "Brand identities, avant-garde typography, and editorial art direction that global clients actually pay top dollar for."
    },
    {
      id: "02",
      title: "Film & Visual Storytelling",
      badge: "CINEMA",
      badgeColor: "bg-[#FF5500] text-white",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      desc: "How to direct music videos, indie short films, and documentaries without needing a Hollywood budget."
    },
    {
      id: "03",
      title: "Afrobeats & Sound Magic",
      badge: "AUDIO",
      badgeColor: "bg-black text-[#FFD000]",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      desc: "Sonic production, sample flipping, sync licensing, and making sure your streaming royalties don't get lost."
    },
    {
      id: "04",
      title: "Creative Code & Interactive Web",
      badge: "DEV & TECH",
      badgeColor: "bg-white text-black",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      desc: "Building weird, gorgeous, interactive websites and creative digital toys using modern code."
    }
  ];

  return (
    <section id="focus" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header Row like "NEW LOOOOKS // BROOKLYN" */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-black/10 gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF5500] font-black block mb-1">
            WHAT WE'RE COOKING
          </span>
          <div className="inline-block bg-black text-white px-4 py-1.5 font-syne font-black text-xl sm:text-2xl uppercase tracking-wider">
            WHAT TO EXPECT ON THE DAY
          </div>
        </div>

        <p className="text-xs font-mono text-black/60 uppercase font-bold">
          HANDS-ON STUDIOS • BRING YOUR LAPTOP
        </p>
      </div>

      {/* 4 Lookbook Cards (Directly inspired by reference) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item) => (
          <div
            key={item.id}
            className="group relative bg-[#F2EFE9] rounded-3xl overflow-hidden p-4 border border-black/10 hover:border-black transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Visual Portrait */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale contrast-110 group-hover:grayscale-0"
              />
              <div className="absolute top-3 left-3">
                <TapeSticker text={item.badge} color={item.badgeColor} className="text-[9px]" />
              </div>
            </div>

            {/* Label and clean text */}
            <div className="space-y-1">
              <h3 className="font-syne font-bold text-lg text-black group-hover:text-[#FF5500] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-black/65 leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
