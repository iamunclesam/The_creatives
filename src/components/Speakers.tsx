import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, ExternalLink, X, Plus } from 'lucide-react';
import { speakersData } from '../data/summitData';
import { Speaker } from '../types';
import { DaVivaSunburst, DaVivaSpiralFan } from './DaVivaMotifs';

export const Speakers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  const categories = ['All', 'Design', 'Tech', 'Film & Media', 'Music & Culture', 'Business & Venture'];

  const filteredSpeakers = selectedCategory === 'All'
    ? speakersData
    : speakersData.filter(s => s.category === selectedCategory);

  return (
    <section id="speakers" className="py-16 lg:py-24 relative bg-[#0B0B0D] border-t border-white/10 overflow-hidden">
      {/* Background DaViva Textile Watermark */}
      <div className="absolute top-0 right-0 opacity-15 pointer-events-none translate-x-20 -translate-y-20">
        <DaVivaSpiralFan size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <DaVivaSunburst size={16} />
              <span className="text-[11px] font-mono font-bold text-[#FF8A00] tracking-widest uppercase">
                THE FACULTY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
              LEARN FROM PEOPLE WHO ARE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-white">
                BUILDING THE FUTURE.
              </span>
            </h2>
            <p className="text-sm text-[#94949E]">
              Visionaries redefining African design, cinematography, sound, and creative technology.
            </p>
          </div>

          <div className="text-xs font-mono text-white/80 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/5">
            24+ Keynotes & Mentors
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#FF4600] to-[#FF8A00] text-white font-bold shadow-md shadow-[#FF4600]/30'
                  : 'bg-white/[0.04] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setActiveSpeaker(speaker)}
              className="group cursor-pointer rounded-2xl bg-[#141416] border border-white/10 hover:border-[#FF4600]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Speaker Portrait */}
              <div className="relative aspect-[4/4.2] overflow-hidden bg-black/60">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-85" />

                {/* Keynote Tag with DaViva motif */}
                {speaker.isKeynote && (
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-[#FF4600] to-[#FF8A00] text-white px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                    <DaVivaSunburst size={10} />
                    KEYNOTE
                  </div>
                )}

                <div className="absolute top-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded-full text-[9px] font-mono text-white/80 border border-white/10">
                  {speaker.category}
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#FF4600] text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Speaker Meta */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF4600] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5 truncate">
                    {speaker.role}
                  </p>
                  <p className="text-[11px] font-mono text-[#FF8A00] mt-0.5 truncate">
                    {speaker.company}
                  </p>
                </div>

                {/* Talk topic pill */}
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94949E] truncate max-w-[140px]">
                    {speaker.topic || "Faculty Session"}
                  </span>

                  <div className="flex items-center gap-2 text-white/50" onClick={e => e.stopPropagation()}>
                    {speaker.socials.twitter && (
                      <a href={speaker.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Twitter">
                        <Twitter className="w-3 h-3" />
                      </a>
                    )}
                    {speaker.socials.linkedin && (
                      <a href={speaker.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
                        <Linkedin className="w-3 h-3" />
                      </a>
                    )}
                    {speaker.socials.instagram && (
                      <a href={speaker.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Instagram">
                        <Instagram className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proposal Strip */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
            Have a game-changing creative masterclass to lead? We welcome visionary speaker proposals.
          </p>
          <a
            href="mailto:speakers@thesparksummit.ng"
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-colors shrink-0"
          >
            <Plus className="w-3 h-3 text-[#FF4600]" />
            <span>Submit Proposal</span>
          </a>
        </div>
      </div>

      {/* Speaker Details Modal */}
      {activeSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-7">
            <button
              onClick={() => setActiveSpeaker(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <img
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-white/10 shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-[#FF4600]/20 text-[#FF4600] border border-[#FF4600]/30">
                  <DaVivaSunburst size={10} />
                  <span>{activeSpeaker.category}</span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  {activeSpeaker.name}
                </h3>
                <p className="text-xs text-white/90">
                  {activeSpeaker.role} • <span className="text-[#FF8A00] font-semibold">{activeSpeaker.company}</span>
                </p>

                {activeSpeaker.topic && (
                  <p className="text-xs text-white/70 italic pt-1">
                    "{activeSpeaker.topic}"
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed mt-4 pt-4 border-t border-white/10">
              {activeSpeaker.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
