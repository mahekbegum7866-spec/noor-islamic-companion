import React, { useState } from 'react';
import { AppLanguage, PrayerTime } from '../types';
import { UI_STRINGS } from '../data/translations';
import { QiblaCompass } from './QiblaCompass';
import { Clock, Check, Volume2, Plus, Minus, AlertCircle, Compass } from 'lucide-react';

interface PrayerSectionProps {
  language: AppLanguage;
  prayerStreak: number;
  setPrayerStreak: React.Dispatch<React.SetStateAction<number>>;
}

export const PrayerSection: React.FC<PrayerSectionProps> = ({
  language,
  prayerStreak,
  setPrayerStreak,
}) => {
  const strings = UI_STRINGS[language];
  const [activeSubTab, setActiveSubTab] = useState<'times' | 'tracker' | 'qada' | 'qibla'>('times');

  // Daily Prayer Times State
  const [prayers, setPrayers] = useState<PrayerTime[]>([
    { id: 'fajr', nameEn: 'Fajr', nameAr: 'الفجر', nameUr: 'فجر', nameHi: 'फज्र', time: '05:12 AM', completed: true },
    { id: 'sunrise', nameEn: 'Sunrise', nameAr: 'الشروق', nameUr: 'طلوعِ آفتاب', nameHi: 'सूर्योदय', time: '06:34 AM', completed: true },
    { id: 'dhuhr', nameEn: 'Dhuhr', nameAr: 'الظهر', nameUr: 'ظہر', nameHi: 'ज़ुहर', time: '12:28 PM', completed: true },
    { id: 'asr', nameEn: 'Asr', nameAr: 'العصر', nameUr: 'عصر', nameHi: 'असर', time: '03:52 PM', completed: false },
    { id: 'maghrib', nameEn: 'Maghrib', nameAr: 'المغرب', nameUr: 'مغرب', nameHi: 'मग़रिब', time: '06:22 PM', completed: false },
    { id: 'isha', nameEn: 'Isha', nameAr: 'العشاء', nameUr: 'عشاء', nameHi: 'इशा', time: '07:44 PM', completed: false },
  ]);

  // Qada Missed Prayer State
  const [qadaCounts, setQadaCounts] = useState({
    fajr: 12,
    dhuhr: 5,
    asr: 8,
    maghrib: 3,
    isha: 10,
  });

  const togglePrayerComplete = (id: string) => {
    setPrayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, completed: !p.completed } : p))
    );
  };

  const updateQada = (prayerKey: keyof typeof qadaCounts, delta: number) => {
    setQadaCounts((prev) => ({
      ...prev,
      [prayerKey]: Math.max(0, prev[prayerKey] + delta),
    }));
  };

  const getPrayerNameByLang = (p: PrayerTime) => {
    if (language === 'ur') return p.nameUr;
    if (language === 'hi') return p.nameHi;
    if (language === 'ar') return p.nameAr;
    return p.nameEn;
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
            Divine Timings & Qibla
          </span>
          <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
            <Clock className="w-6 h-6 text-[#C5A059]" />
            <span>{strings.prayer}</span>
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Accurate prayer times based on your location, Qibla compass & Qada tracker.
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center gap-1 bg-[#141A17] border border-white/5 p-1 rounded-2xl text-xs">
          <button
            onClick={() => setActiveSubTab('times')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              activeSubTab === 'times'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-[#C5A059]'
            }`}
            id="prayer-subtab-times"
          >
            Times
          </button>
          <button
            onClick={() => setActiveSubTab('tracker')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              activeSubTab === 'tracker'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-[#C5A059]'
            }`}
            id="prayer-subtab-tracker"
          >
            Tracker
          </button>
          <button
            onClick={() => setActiveSubTab('qada')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              activeSubTab === 'qada'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-[#C5A059]'
            }`}
            id="prayer-subtab-qada"
          >
            Qada
          </button>
          <button
            onClick={() => setActiveSubTab('qibla')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              activeSubTab === 'qibla'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-[#C5A059]'
            }`}
            id="prayer-subtab-qibla"
          >
            Qibla
          </button>
        </div>
      </div>

      {/* Sub-tab 1: Prayer Times List */}
      {activeSubTab === 'times' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prayers.map((p) => (
            <div
              key={p.id}
              className={`p-5 rounded-3xl border transition-all flex items-center justify-between shadow-sm ${
                p.id === 'asr'
                  ? 'bg-gradient-to-br from-[#1B4332] to-[#0F221A] text-white border-[#C5A059]/50 ring-1 ring-[#C5A059]/40'
                  : 'bg-[#141A17] border-white/5 text-[#E0E0E0]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-2xl text-lg font-serif italic font-bold ${
                  p.id === 'asr' ? 'bg-[#C5A059] text-[#0A0C0B]' : 'bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20'
                }`}>
                  {p.nameAr}
                </div>
                <div>
                  <h4 className="font-bold text-base">{getPrayerNameByLang(p)}</h4>
                  {p.id === 'asr' && (
                    <span className="text-[9px] bg-[#C5A059] text-[#0A0C0B] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mt-1 inline-block">
                      Next Prayer
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-serif text-xl italic font-bold text-[#C5A059]">{p.time}</span>
                <button
                  onClick={() => togglePrayerComplete(p.id)}
                  className={`p-2.5 rounded-xl border transition-colors ${
                    p.completed
                      ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059]'
                      : 'border-white/10 hover:border-[#C5A059]/40 text-white/50'
                  }`}
                  title="Mark Completed"
                  id={`toggle-prayer-${p.id}`}
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sub-tab 2: Daily Prayer Tracker & Streaks */}
      {activeSubTab === 'tracker' && (
        <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
                {strings.logSalah}
              </h3>
              <p className="text-xs text-white/50">
                Check off prayers completed today to maintain your spiritual streak!
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-serif text-[#C5A059]">{prayerStreak} Days</span>
              <p className="text-[10px] text-white/40 uppercase tracking-wider">{strings.prayerStreak}</p>
            </div>
          </div>

          <div className="space-y-3">
            {prayers.filter((p) => p.id !== 'sunrise').map((p) => (
              <div
                key={p.id}
                onClick={() => togglePrayerComplete(p.id)}
                className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  p.completed
                    ? 'bg-[#1B4332]/40 border-[#C5A059]/40'
                    : 'bg-[#0A0C0B] border-white/5 hover:border-[#C5A059]/40'
                }`}
                id={`tracker-item-${p.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    p.completed ? 'bg-[#C5A059] border-[#C5A059] text-[#0A0C0B]' : 'border-white/20'
                  }`}>
                    {p.completed && <Check className="w-4 h-4 font-bold" />}
                  </div>
                  <span className="font-bold text-sm text-[#E0E0E0]">
                    {getPrayerNameByLang(p)} ({p.nameAr})
                  </span>
                </div>
                <span className="text-xs text-[#C5A059] font-serif italic font-semibold">{p.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 3: Qada Missed Prayer Calculator */}
      {activeSubTab === 'qada' && (
        <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#C5A059]" />
            <div>
              <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
                {strings.qadaTracker}
              </h3>
              <p className="text-xs text-white/50">
                Keep an accurate log of missed prayers to fulfill your Qada responsibilities step by step.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(Object.keys(qadaCounts) as (keyof typeof qadaCounts)[]).map((key) => (
              <div
                key={String(key)}
                className="p-4 rounded-2xl bg-[#0A0C0B] border border-white/5 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm capitalize text-[#E0E0E0]">{String(key)}</h4>
                  <span className="text-xs text-white/40">Pending Qada</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQada(key, -1)}
                    className="w-8 h-8 rounded-lg bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold hover:bg-[#C5A059] hover:text-[#0A0C0B] transition-colors"
                    id={`qada-minus-${String(key)}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-serif font-bold text-lg text-[#C5A059]">
                    {qadaCounts[key]}
                  </span>
                  <button
                    onClick={() => updateQada(key, 1)}
                    className="w-8 h-8 rounded-lg bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold hover:bg-[#C5A059] hover:text-[#0A0C0B] transition-colors"
                    id={`qada-plus-${String(key)}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 4: Qibla Compass */}
      {activeSubTab === 'qibla' && (
        <div className="max-w-md mx-auto">
          <QiblaCompass />
        </div>
      )}

    </div>
  );
};
