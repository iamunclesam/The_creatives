import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Ticket, Calendar, MapPin, Download, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { eventConfig, ticketTiers } from '../data/summitData';
import { TicketTier } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: TicketTier | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedTier: initialSelectedTier
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(
    initialSelectedTier ? initialSelectedTier.id : ticketTiers[0].id
  );
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [discipline, setDiscipline] = useState('Design & UI/UX');
  const [experienceLevel, setExperienceLevel] = useState('1 - 3 years');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationRef, setRegistrationRef] = useState('');

  if (!isOpen) return null;

  const currentTier = ticketTiers.find(t => t.id === selectedTierId) || ticketTiers[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4600', '#FF8A00', '#FFFFFF', '#FF2A2A']
    });

    const ref = `EX-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegistrationRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4600]/10 border border-[#FF4600]/30 text-xs font-mono font-bold text-[#FF4600]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL SUMMIT ACCREDITATION</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Reserve Your Spot
              </h3>
              <p className="text-xs sm:text-sm text-[#94949E]">
                RSVP for the <strong>Dec 12th Tech Workshop Hangout</strong> or reserve your <strong>EmergenceX 2K27</strong> pass in Ado-Ekiti.
              </p>
            </div>

            {/* Select Tier Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {ticketTiers.map(tier => (
                <button
                  type="button"
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedTierId === tier.id
                      ? 'border-[#FF4600] bg-[#FF4600]/10 shadow-lg'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/5'
                  }`}
                >
                  <p className="text-[10px] font-mono text-[#FF4600] uppercase font-bold">{tier.badge}</p>
                  <p className="font-display font-bold text-xs text-white mt-1">{tier.name}</p>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oluwaseun Adeleke"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. seun@creativestudio.ng"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                    Primary Creative Discipline
                  </label>
                  <select
                    value={discipline}
                    onChange={e => setDiscipline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1B1B1E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4600]"
                  >
                    <option value="Design & UI/UX">Design & UI/UX</option>
                    <option value="Software & Creative Dev">Software & Creative Dev</option>
                    <option value="Photography & Cinematography">Photography & Cinematography</option>
                    <option value="Music & Audio Engineering">Music & Audio Engineering</option>
                    <option value="Content Creation & Media">Content Creation & Media</option>
                    <option value="Startup Founder / Entrepreneur">Startup Founder / Entrepreneur</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                  Experience Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Aspiring / Student', '1 - 3 years', 'Senior / Lead'].map(lvl => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setExperienceLevel(lvl)}
                      className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                        experienceLevel === lvl
                          ? 'border-[#FF4600] bg-[#FF4600]/20 text-white font-bold'
                          : 'border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FF4600] hover:bg-[#E03D00] text-white py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FF4600]/30 transition-all hover:scale-[1.01]"
                >
                  <span>CONFIRM RESERVATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-[#94949E]">
                By registering, you agree to receive official event dispatches and calendar synchronization.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State with Digital Boarding Pass */
          <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FF4600]/20 border border-[#FF4600] flex items-center justify-center text-[#FF4600] mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Spot Reserved Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-[#94949E]">
                Welcome to the movement, <strong className="text-white">{fullName}</strong>. Your registration is confirmed.
              </p>
            </div>

            {/* Digital Pass Card */}
            <div className="max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-b from-[#1E1E24] to-[#141416] border border-white/15 shadow-2xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FF4600] text-white font-mono font-bold text-[10px] px-3 py-1 rounded-bl-xl tracking-wider">
                {currentTier.name}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#FF4600]" />
                <span className="font-display font-bold text-sm text-white">EMERGENCEX 2K27</span>
              </div>

              <div className="space-y-2 border-b border-white/10 pb-4">
                <p className="text-[10px] font-mono uppercase text-white/50">DELEGATE NAME</p>
                <p className="font-display font-bold text-lg text-white">{fullName || "Honored Creative Delegate"}</p>
                <p className="text-xs text-[#94949E] font-mono">{discipline} • {experienceLevel}</p>
              </div>

              <div className="py-4 grid grid-cols-2 gap-4 border-b border-white/10 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-white/50 block">EVENT ACCESS</span>
                  <span className="font-semibold text-white">Dec 12th Hangout & 2K27</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/50 block">PASS CODE</span>
                  <span className="font-mono font-bold text-[#FF4600]">{registrationRef}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-white/50">VENUE</p>
                  <p className="text-xs font-semibold text-white">Civic Centre, Ado-Ekiti</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full bg-[#FF4600] text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

