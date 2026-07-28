import React, { useState } from 'react';
import { AppLanguage, DhikrPreset } from '../types';
import { UI_STRINGS } from '../data/translations';
import { DHIKR_PRESETS } from '../data/dhikrData';
import { Sparkles, RotateCcw, Volume2, Check, Award, Plus } from 'lucide-react';

interface DhikrSectionProps {
  language: AppLanguage;
  tasbihCount: number;
  setTasbihCount: React.Dispatch<React.SetStateAction<number>>;
}

export const DhikrSection: React.FC<DhikrSectionProps> = ({
  language,
  tasbihCount,
  setTasbihCount,
}) => {
  const strings = UI_STRINGS[language];
  const [selectedPreset, setSelectedPreset] = useState<DhikrPreset>(DHIKR_PRESETS[0]);
  const [count, setCount] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    setTasbihCount((prev) => prev + 1);

    if (soundEnabled && window.navigator.vibrate) {
      window.navigator.vibrate(30);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const progressPercent = Math.min(100, Math.round((count / selectedPreset.targetCount) * 100));

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
          Remembrance & Praise
        </span>
        <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#C5A059]" />
          <span>{strings.dhikr}</span>
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Interactive digital tasbih with customizable target goals, morning/evening adhkar, and virtues.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {DHIKR_PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setSelectedPreset(p);
              setCount(0);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedPreset.id === p.id
                ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-md font-bold'
                : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
            }`}
            id={`tasbih-preset-${p.id}`}
          >
            {p.titleEn}
          </button>
        ))}
      </div>

      {/* Digital Tasbih Counter Dial Card */}
      <div className="bg-[#141A17] text-white p-8 rounded-3xl shadow-2xl border border-white/5 text-center max-w-lg mx-auto relative overflow-hidden">
        {/* Selected Preset Details */}
        <div className="mb-6 space-y-2 relative z-10">
          <p className="font-serif text-3xl sm:text-4xl text-[#C5A059] italic dir-rtl tracking-wide font-bold">
            {selectedPreset.arabicText}
          </p>
          <p className="text-xs text-[#C5A059]/80 italic font-serif">
            {selectedPreset.transliteration}
          </p>
          <p className="text-xs text-white/70 font-sans max-w-xs mx-auto">
            "{selectedPreset.translationEn}"
          </p>
        </div>

        {/* Progress Ring / Counter Display */}
        <div className="relative w-48 h-48 mx-auto my-6 flex flex-col items-center justify-center rounded-full border-8 border-[#C5A059]/20 bg-[#0A0C0B] shadow-inner">
          <span className="text-5xl font-serif italic font-extrabold text-[#C5A059]">
            {count}
          </span>
          <span className="text-xs text-white/50 font-medium mt-1">
            Goal: {selectedPreset.targetCount}
          </span>

          {/* Goal Completed Badge */}
          {count >= selectedPreset.targetCount && (
            <div className="absolute -top-3 bg-[#C5A059] text-[#0A0C0B] px-3 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md animate-bounce">
              <Award className="w-3.5 h-3.5" />
              <span>Goal Reached!</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#0A0C0B] rounded-full h-2 mb-6 border border-white/5 overflow-hidden">
          <div
            className="bg-[#C5A059] h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Main Big Increment Button */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="p-3 rounded-2xl bg-[#0A0C0B] hover:bg-[#1B4332] text-[#C5A059] border border-white/5 transition-colors"
            title={strings.reset}
            id="tasbih-reset-btn"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={handleIncrement}
            className="w-28 h-28 rounded-full bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xl shadow-lg shadow-[#C5A059]/20 flex items-center justify-center transition-transform active:scale-95 border-4 border-[#0A0C0B]"
            id="tasbih-main-increment-btn"
          >
            <Plus className="w-10 h-10" />
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-3 rounded-2xl border transition-colors ${
              soundEnabled
                ? 'bg-[#1B4332] text-[#C5A059] border-[#C5A059]/30'
                : 'bg-[#0A0C0B] text-white/40 border-white/5'
            }`}
            title="Sound / Vibration Toggle"
            id="tasbih-sound-toggle-btn"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* Virtue Info */}
        <p className="text-[11px] text-white/80 mt-6 bg-[#0A0C0B] p-3.5 rounded-2xl border border-white/5">
          <strong className="text-[#C5A059]">Virtue:</strong> {selectedPreset.virtue}
        </p>
      </div>

    </div>
  );
};
