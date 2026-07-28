import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { Moon, Clock, Check, Sparkles, Heart, Gift, BookOpen } from 'lucide-react';

interface RamadanSectionProps {
  language: AppLanguage;
}

export const RamadanSection: React.FC<RamadanSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [completedFasts, setCompletedFasts] = useState<number[]>(Array.from({ length: 14 }, (_, i) => i + 1));
  const [juzCompleted, setJuzCompleted] = useState<number>(14);
  const [sadaqahAmount, setSadaqahAmount] = useState<number>(250);

  const toggleFast = (dayNum: number) => {
    setCompletedFasts((prev) =>
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Ramadan Special Header */}
      <div className="bg-gradient-to-br from-[#1B4332] via-[#141A17] to-[#0A0C0B] text-white p-6 rounded-3xl shadow-xl border border-[#C5A059]/30 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-1">
              <Moon className="w-4 h-4 text-[#C5A059]" />
              <span>Ramadan Mubarak Companion</span>
            </div>
            <h2 className="font-serif italic font-bold text-2xl sm:text-3xl text-[#C5A059] mb-2">
              {strings.ramadan} Mode
            </h2>
            <p className="text-xs text-white/70 max-w-xl leading-relaxed">
              Track Suhoor & Iftar times, daily fasts, Quran completion goals, Taraweeh prayers, and Sadaqah charity.
            </p>
          </div>

          <div className="bg-[#0A0C0B] p-4 rounded-2xl border border-white/5 text-center shrink-0">
            <span className="text-xs text-white/50 block mb-1">Iftar Countdown</span>
            <span className="font-serif italic font-bold text-3xl text-[#C5A059]">03:22:15</span>
            <span className="text-[10px] text-[#C5A059]/80 block mt-1">Today Iftar: 06:22 PM</span>
          </div>
        </div>
      </div>

      {/* Suhoor & Iftar Times Summary Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#141A17] p-5 rounded-3xl border border-white/5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#1B4332] text-[#C5A059] font-serif font-bold text-lg">
              🥣
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#E0E0E0]">{strings.sehriTime}</h4>
              <p className="text-xs text-white/50">Ends at 05:02 AM</p>
            </div>
          </div>
          <span className="font-serif italic font-bold text-xl text-[#C5A059]">05:02 AM</span>
        </div>

        <div className="bg-[#141A17] p-5 rounded-3xl border border-white/5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#1B4332] text-[#C5A059] font-serif font-bold text-lg">
              🌙
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#E0E0E0]">{strings.iftarTime}</h4>
              <p className="text-xs text-white/50">Maghrib Adhan</p>
            </div>
          </div>
          <span className="font-serif italic font-bold text-xl text-[#C5A059]">06:22 PM</span>
        </div>
      </div>

      {/* 30-Day Fasting Tracker Grid */}
      <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
            30-Day Fasting Tracker
          </h3>
          <span className="text-xs font-bold text-[#C5A059] font-serif italic">
            {completedFasts.length} / 30 Fasts Completed
          </span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const isCompleted = completedFasts.includes(day);
            return (
              <button
                key={day}
                onClick={() => toggleFast(day)}
                className={`p-3 rounded-2xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                  isCompleted
                    ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
                    : 'bg-[#0A0C0B] border-white/5 text-white/70 hover:border-[#C5A059]'
                }`}
                id={`ramadan-fast-day-${day}`}
              >
                <span>Day {day}</span>
                {isCompleted && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ramadan Goals & Sadaqah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Quran Khatam Progress */}
        <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-[#C5A059]" />
            <div>
              <h4 className="font-bold text-base text-[#E0E0E0]">Quran Khatam Goal</h4>
              <p className="text-xs text-white/50">Read 1 Juz per day to complete in 30 days</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#0A0C0B] p-4 rounded-2xl border border-white/5">
            <span className="text-xs text-white/70 font-medium">Completed Juz:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setJuzCompleted((prev) => Math.max(0, prev - 1))}
                className="w-8 h-8 rounded-xl bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 font-bold hover:bg-[#C5A059] hover:text-[#0A0C0B]"
                id="juz-minus-btn"
              >
                -
              </button>
              <span className="font-serif italic font-bold text-xl text-[#C5A059] w-8 text-center">
                {juzCompleted}
              </span>
              <button
                onClick={() => setJuzCompleted((prev) => Math.min(30, prev + 1))}
                className="w-8 h-8 rounded-xl bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 font-bold hover:bg-[#C5A059] hover:text-[#0A0C0B]"
                id="juz-plus-btn"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Sadaqah Log */}
        <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <Gift className="w-6 h-6 text-[#C5A059]" />
            <div>
              <h4 className="font-bold text-base text-[#E0E0E0]">Ramadan Sadaqah Log</h4>
              <p className="text-xs text-white/50">Track your daily charity and donations</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#0A0C0B] p-4 rounded-2xl border border-white/5">
            <span className="text-xs text-white/70 font-medium">Total Charity Given:</span>
            <span className="font-serif italic font-bold text-2xl text-[#C5A059]">${sadaqahAmount}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
