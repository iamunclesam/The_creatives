import React, { useState } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { scheduleData, eventConfig } from '../data/summitData';
import { DaVivaSunburst } from './DaVivaMotifs';

export const Programme: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All Tracks');

  const tracks = ['All Tracks', 'Main Stage', 'Masterclass Lab', 'Tech Sandbox', 'Creative Lounge'];

  const filteredSchedule = selectedTrack === 'All Tracks'
    ? scheduleData
    : scheduleData.filter(item => item.track === selectedTrack);

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Spark Creatives Summit//EN
BEGIN:VEVENT
SUMMARY:${eventConfig.name}
DESCRIPTION:${eventConfig.tagline}
LOCATION:${eventConfig.venue}, ${eventConfig.location}, Nigeria
DTSTART:20251025T080000Z
DTEND:20251025T180000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'The-Spark-Creatives-Summit-2025.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="programme" className="py-16 lg:py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <DaVivaSunburst size={14} />
              <span className="text-[11px] font-mono font-bold text-[#FF4600] tracking-widest uppercase">
                ONE HIGH-OCTANE DAY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
              SUMMIT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4600] via-[#FF8A00] to-white">
                PROGRAMME.
              </span>
            </h2>
            <p className="text-sm text-[#94949E]">
              Zero downtime. High-octane sessions from morning check-in to the sunset live stage.
            </p>
          </div>

          <button
            onClick={handleDownloadCalendar}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FF4600]" />
            <span>Add to Calendar (.ics)</span>
          </button>
        </div>

        {/* Track Selection Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all ${
                selectedTrack === track
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-[#141416] text-white/70 hover:text-white border border-white/5'
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Concise Timeline Layout */}
        <div className="relative border-l border-[#FF4600]/30 ml-2 sm:ml-4 pl-5 sm:pl-8 space-y-5">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl p-5 sm:p-6 transition-all border ${
                item.isHighlight
                  ? 'bg-gradient-to-r from-[#17171A] to-[#121214] border-[#FF4600]/40 shadow-lg'
                  : 'bg-[#121214] border-white/5 hover:border-white/15'
              }`}
            >
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#080808] ${
                  item.isHighlight ? 'bg-[#FF4600]' : 'bg-[#44444E]'
                }`}
              />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Time & Location */}
                <div className="lg:w-60 shrink-0 space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#FF8A00]">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#94949E] pt-1">
                    <MapPin className="w-3 h-3 text-[#FF4600]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Narrative */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF4600] bg-[#FF4600]/10 px-2 py-0.5 rounded font-bold">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/50">
                      {item.track}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#94949E]">
                    {item.description}
                  </p>

                  {/* Facilitators chips */}
                  {item.speakers && item.speakers.length > 0 && (
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      {item.speakers.map((speaker, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[11px] text-white/80"
                        >
                          {speaker}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
