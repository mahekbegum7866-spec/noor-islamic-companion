import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { WOMENS_ARTICLES } from '../data/womensData';
import { Heart, Calendar, Sparkles, BookOpen, Volume2, Shield, CheckCircle, Plus } from 'lucide-react';

interface WomensSectionProps {
  language: AppLanguage;
}

export const WomensSection: React.FC<WomensSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [isPeriodActive, setIsPeriodActive] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>('2026-07-25');
  const [dhikrCount, setDhikrCount] = useState<number>(0);

  const article = WOMENS_ARTICLES[0]; // Primary worship article

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Private Header */}
      <div className="bg-gradient-to-br from-[#1B4332] via-[#141A17] to-[#0A0C0B] text-white p-6 rounded-3xl shadow-xl border border-[#C5A059]/30 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">
            <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
            <span>Private & Sacred Sanctuary</span>
          </div>
          <h2 className="font-serif italic font-bold text-2xl sm:text-3xl text-[#C5A059] mb-2">
            {strings.women}
          </h2>
          <p className="text-xs text-white/70 max-w-xl leading-relaxed">
            {strings.periodExemptionInfo}
          </p>
        </div>
      </div>

      {/* Cycle & Period Status Card */}
      <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${isPeriodActive ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-[#1B4332] text-[#C5A059]'}`}>
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
                {strings.periodTracker}
              </h3>
              <p className="text-xs text-white/50">
                Status: <strong className={isPeriodActive ? 'text-[#C5A059]' : 'text-[#C5A059]/80'}>
                  {isPeriodActive ? 'Period Active (Exempted from Salah/Fasting)' : 'Regular Worship Active'}
                </strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsPeriodActive(!isPeriodActive)}
            className={`px-4 py-2.5 rounded-2xl font-bold text-xs transition-all shadow-sm ${
              isPeriodActive
                ? 'bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-[#0A0C0B]'
                : 'bg-[#C5A059] text-[#0A0C0B] hover:bg-[#d6b068]'
            }`}
            id="toggle-period-status-btn"
          >
            {isPeriodActive ? 'Mark Period Ended' : 'Log Start of Period'}
          </button>
        </div>

        {/* Worship Reassurance Banner when active */}
        {isPeriodActive && (
          <div className="p-4 rounded-2xl bg-[#1B4332]/40 border border-[#C5A059]/30 text-xs text-white/90 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#C5A059]">
              <CheckCircle className="w-4 h-4" />
              <span>Full Reward Recorded by Intention!</span>
            </div>
            <p>
              By following Allah's command to refrain from Salah, you are obeying Him. Your intention to pray grants you full daily reward. Engage in Dhikr, Duas, and Quran listening below.
            </p>
          </div>
        )}
      </div>

      {/* Period Dhikr Counter */}
      <div className="bg-[#141A17] text-white p-6 rounded-3xl shadow-xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Recommended Dhikr for Menstruation</span>
          </div>
          <h3 className="font-serif italic font-bold text-xl text-[#C5A059] dir-rtl">
            أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ
          </h3>
          <p className="text-xs text-white/60 mt-1 italic">
            "Astaghfirullahal-'Azeema wa atoobu ilaih" (100x Daily)
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#0A0C0B] p-4 rounded-2xl border border-white/5 shrink-0">
          <div className="text-center">
            <span className="font-serif italic font-bold text-3xl text-[#C5A059]">{dhikrCount}</span>
            <span className="block text-[10px] text-white/40">/ 100 Goal</span>
          </div>
          <button
            onClick={() => setDhikrCount((prev) => prev + 1)}
            className="w-12 h-12 rounded-2xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold flex items-center justify-center text-lg shadow-md transition-transform active:scale-95"
            id="period-dhikr-increment-btn"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Articles & Authentic Teachings */}
      <div className="space-y-4">
        <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
          Authentic Teachings for Women
        </h3>

        {WOMENS_ARTICLES.map((art) => (
          <div
            key={art.id}
            className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-3"
          >
            <h4 className="font-bold text-base text-[#E0E0E0]">{art.titleEn}</h4>
            <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line">
              {art.contentEn}
            </p>
            <div className="pt-2 text-[11px] text-[#C5A059] font-semibold">
              Source: {art.sources}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
