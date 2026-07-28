import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { Gift, CheckCircle, Sparkles, Plus, Heart, Award } from 'lucide-react';

interface GoodDeedsSectionProps {
  language: AppLanguage;
}

export const GoodDeedsSection: React.FC<GoodDeedsSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [deedList, setDeedList] = useState<string[]>([
    'Smiled at a Muslim brother/sister today',
    'Shared food or water with someone in need',
    'Recited Surah Al-Mulk before sleeping',
  ]);
  const [newDeed, setNewDeed] = useState('');

  const handleAddDeed = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDeed.trim()) {
      setDeedList([newDeed.trim(), ...deedList]);
      setNewDeed('');
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
          Noble Actions & Charity
        </span>
        <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
          <Gift className="w-6 h-6 text-[#C5A059]" />
          <span>{strings.goodDeeds}</span>
        </h2>
        <p className="text-xs text-white/50 mt-1">
          {strings.deedsChallenge}
        </p>
      </div>

      {/* Featured Daily Challenge Card */}
      <div className="bg-[#141A17] text-white p-6 rounded-3xl shadow-xl border border-white/5 space-y-3">
        <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span>Daily Sunnah Kindness Challenge</span>
        </div>
        <h3 className="font-serif italic font-bold text-xl text-[#C5A059]">
          "Call a family member or friend to check on them and make Dua for them."
        </h3>
        <p className="text-xs text-white/70 italic">
          Prophet Muhammad (PBUH) said: "The best among you are those who maintain family ties."
        </p>
      </div>

      {/* Add Custom Good Deed Form */}
      <form onSubmit={handleAddDeed} className="flex gap-2">
        <input
          type="text"
          placeholder="Log a good deed completed today..."
          value={newDeed}
          onChange={(e) => setNewDeed(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-2xl bg-[#141A17] border border-white/10 text-xs text-[#E0E0E0] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
          id="good-deed-input"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-2xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs flex items-center gap-1 shadow-sm shrink-0"
          id="add-good-deed-btn"
        >
          <Plus className="w-4 h-4 text-[#0A0C0B]" />
          <span>Log Deed</span>
        </button>
      </form>

      {/* Deed Journal List */}
      <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
        <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
          Your Good Deed Journal Today ({deedList.length})
        </h3>

        <div className="space-y-3">
          {deedList.map((deed, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0A0C0B] border border-white/5 flex items-center gap-3 text-xs text-[#E0E0E0] font-medium"
            >
              <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span>{deed}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
