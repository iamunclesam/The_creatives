import React, { useState } from 'react';
import { X, Handshake, Check, ArrowRight, Building2, Mail, Phone, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { eventConfig } from '../data/summitData';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [tierInterest, setTierInterest] = useState('Strategic Headline Sponsor');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF4600', '#FF8A00', '#FFFFFF']
    });
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
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
                <Handshake className="w-3.5 h-3.5" />
                <span>PARTNER & SPONSOR COLLABORATION</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Partner With The Spark
              </h3>
              <p className="text-xs sm:text-sm text-[#94949E]">
                Connect your brand with 1,500+ top creative talents, innovators, and leaders across Nigeria.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Tech Africa or Studio Seven"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Funke Johnson"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partnerships@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                  Partnership Category of Interest
                </label>
                <select
                  value={tierInterest}
                  onChange={e => setTierInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1B1B1E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4600]"
                >
                  <option value="Strategic Headline Sponsor">Strategic Headline Partner / Co-Convener</option>
                  <option value="Technology & Cloud Sponsor">Technology, AI & Cloud Infrastructure Sponsor</option>
                  <option value="Creative Masterclass Track Sponsor">Creative Masterclass Track Sponsor</option>
                  <option value="Creative Pitch Grants Donor (₦10M+)">Creative Pitch Grants Donor / Seed Fund</option>
                  <option value="Exhibition Booth & Experience Dome">Exhibition Booth & Experience Dome</option>
                  <option value="Media & Broadcast Partner">Media & Broadcast Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-1.5">
                  Brief Note / Objectives (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you'd like to achieve at the summit..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FF4600]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FF4600] hover:bg-[#E03D00] text-white py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FF4600]/30 transition-all hover:scale-[1.01]"
                >
                  <span>SUBMIT PARTNERSHIP INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-[#94949E]">
                Direct Secretariat inquiries: <strong className="text-white">{eventConfig.contact.email}</strong>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-[#FF4600]/20 border border-[#FF4600] flex items-center justify-center text-[#FF4600] mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Inquiry Received!
              </h3>
              <p className="text-sm text-[#94949E]">
                Thank you, <strong className="text-white">{contactName}</strong> from <strong className="text-white">{company}</strong>. Our partnership secretariat will contact you within 24 hours with the detailed 2025 Sponsorship Deck.
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-[#FF4600] text-white font-display font-bold text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

