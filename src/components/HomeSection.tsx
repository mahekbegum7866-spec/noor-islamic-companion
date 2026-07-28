import React, { useState, useEffect } from 'react';
import { ActiveTab, AppLanguage, MoodType, PrayerTime } from '../types';
import { UI_STRINGS } from '../data/translations';
import { QURAN_SURAHS } from '../data/quranData';
import { MOOD_LIST } from '../data/moodData';
import { ShareCardModal } from './ShareCardModal';
import {
  Clock,
  Volume2,
  VolumeX,
  Share2,
  Bookmark,
  Check,
  Play,
  Pause,
  Sparkles,
  Heart,
  BookOpen,
  Compass,
  Gift,
  Flame,
  ArrowRight,
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
  language: AppLanguage;
  onSelectMood: (mood: MoodType) => void;
  prayerStreak: number;
  tasbihCount: number;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  setActiveTab,
  language,
  onSelectMood,
  prayerStreak,
  tasbihCount,
}) => {
  const strings = UI_STRINGS[language];
  const [adhanEnabled, setAdhanEnabled] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Default Daily Ayah (Surah Al-Fatiha Ayah 1 or Ayah al-Kursi)
  const dailySurah = QURAN_SURAHS[0];
  const dailyAyah = dailySurah.ayahs[0];

  // Prayer times sample
  const prayerTimes: PrayerTime[] = [
    { id: 'fajr', nameEn: 'Fajr', nameAr: 'الفجر', nameUr: 'فجر', nameHi: 'फज्र', time: '05:12 AM', completed: true },
    { id: 'sunrise', nameEn: 'Sunrise', nameAr: 'الشروق', nameUr: 'طلوعِ آفتاب', nameHi: 'सूर्योदय', time: '06:34 AM', completed: true },
    { id: 'dhuhr', nameEn: 'Dhuhr', nameAr: 'الظهر', nameUr: 'ظہر', nameHi: 'ज़ुहर', time: '12:28 PM', completed: true },
    { id: 'asr', nameEn: 'Asr', nameAr: 'العصر', nameUr: 'عصر', nameHi: 'असर', time: '03:52 PM', completed: false },
    { id: 'maghrib', nameEn: 'Maghrib', nameAr: 'المغرب', nameUr: 'مغرب', nameHi: 'मग़रिब', time: '06:22 PM', completed: false },
    { id: 'isha', nameEn: 'Isha', nameAr: 'العشاء', nameUr: 'عشاء', nameHi: 'इशा', time: '07:44 PM', completed: false },
  ];

  const nextPrayer = prayerTimes[3]; // Asr

  const handleAudioToggle = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const getTranslationByLang = () => {
    if (language === 'ur') return dailyAyah.translationUr;
    if (language === 'hi') return dailyAyah.translationHi;
    if (language === 'ar') return dailyAyah.translationAr;
    return dailyAyah.translationEn;
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* 🕌 Next Prayer Time Banner */}
      <div className="bg-gradient-to-br from-[#1B4332] to-[#0F221A] text-white rounded-3xl p-6 shadow-xl border border-[#C5A059]/20 relative overflow-hidden">
        {/* Subtle Background Geometric SVG */}
        <div className="absolute -right-8 -top-8 w-48 h-48 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="fill-white"><path d="M50 0L61 39H100L69 61L80 100L50 77L20 100L31 61L0 39H39L50 0Z"/></svg>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] mb-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Current & Next Prayer • {nextPrayer.nameEn} ({nextPrayer.nameAr})</span>
            </div>
            <h2 className="text-4xl font-serif italic text-[#C5A059] mb-1">
              {nextPrayer.time}
            </h2>
            <p className="text-xs text-white/70 font-sans">
              {strings.timeRemaining}: <strong className="text-[#C5A059] font-semibold">1 hr 45 mins</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAdhanEnabled(!adhanEnabled)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                adhanEnabled
                  ? 'bg-[#C5A059]/20 text-[#C5A059] border-[#C5A059]/30'
                  : 'bg-[#141A17] text-white/70 border-white/10'
              }`}
              id="adhan-notification-toggle"
            >
              {adhanEnabled ? <Volume2 className="w-4 h-4 text-[#C5A059]" /> : <VolumeX className="w-4 h-4" />}
              <span>Adhan {adhanEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => setActiveTab('prayer')}
              className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs shadow-md shadow-[#C5A059]/10 transition-all flex items-center gap-1.5"
              id="view-all-prayers-btn"
            >
              <span>View Times</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 📖 Daily Quran Ayah Section */}
      <div className="bg-[#141A17] border border-white/5 dark:border-[#C5A059]/20 rounded-3xl p-6 shadow-md relative">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#1B4332] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold text-sm">
              ✨
            </div>
            <div>
              <span className="text-[#C5A059] text-[10px] uppercase tracking-widest block font-semibold">
                {strings.dailyAyah}
              </span>
              <h3 className="font-serif italic text-lg text-white">
                Surah {dailySurah.nameEnglish} ({dailySurah.nameArabic})
              </h3>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleAudioToggle}
              className={`p-2 rounded-xl border text-xs font-medium transition-all ${
                isPlayingAudio
                  ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059]'
                  : 'bg-[#0A0C0B] text-white/80 border-white/10 hover:border-[#C5A059]/40'
              }`}
              title={isPlayingAudio ? strings.pauseAudio : strings.playAudio}
              id="daily-ayah-audio-btn"
            >
              {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-xl border text-xs transition-all ${
                isBookmarked
                  ? 'bg-[#1B4332] text-[#C5A059] border-[#C5A059]/40'
                  : 'bg-[#0A0C0B] text-white/80 border-white/10 hover:border-[#C5A059]/40'
              }`}
              title={isBookmarked ? strings.bookmarked : strings.bookmark}
              id="daily-ayah-bookmark-btn"
            >
              {isBookmarked ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="p-2 rounded-xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs flex items-center gap-1 shadow-sm transition-colors"
              id="daily-ayah-share-btn"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{strings.shareVerse}</span>
            </button>
          </div>
        </div>

        {/* Ayah Content */}
        <div className="text-center py-5 my-2 bg-[#0A0C0B] rounded-2xl p-6 border border-white/5">
          <p className="font-serif text-3xl text-right leading-relaxed mb-4 dir-rtl tracking-wide text-[#C5A059] italic">
            {dailyAyah.arabicText}
          </p>
          <p className="text-xs text-[#C5A059]/80 font-serif italic mb-3">
            {dailyAyah.transliteration}
          </p>
          <p className="text-base text-white/80 font-sans leading-relaxed font-medium max-w-2xl mx-auto">
            "{getTranslationByLang()}"
          </p>
          <p className="text-xs text-white/40 uppercase tracking-widest mt-3">
            Surah {dailySurah.nameEnglish} [1:{dailyAyah.numberInSurah}]
          </p>
        </div>

        {/* Authentic Tafsir Summary */}
        <div className="mt-3 p-3.5 rounded-xl bg-[#1B4332]/40 border border-[#C5A059]/20 text-xs text-[#E0E0E0]">
          <strong className="font-semibold text-[#C5A059]">Authentic Tafsir Note:</strong> {dailyAyah.tafsirSummary}
        </div>
      </div>

      {/* ❤️ Mood -> Quran Guidance AI Feature Shortcut */}
      <div className="bg-[#1B4332]/40 rounded-3xl p-6 shadow-lg border border-[#C5A059]/20 text-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
              {strings.feelingHow}
            </span>
          </div>
          <button
            onClick={() => setActiveTab('mood')}
            className="text-xs text-[#C5A059] hover:text-[#d6b068] font-semibold flex items-center gap-1"
            id="open-ai-mood-tab-btn"
          >
            <span>{strings.askAI}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-white/60 mb-4 max-w-xl">
          {strings.aiPromptDesc}
        </p>

        {/* Mood Pills Grid */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {MOOD_LIST.map((m) => (
            <button
              key={m.key}
              onClick={() => {
                onSelectMood(m.key);
                setActiveTab('mood');
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A0C0B] hover:bg-[#C5A059] hover:text-[#0A0C0B] border border-white/5 hover:border-[#C5A059] text-xs font-medium transition-all whitespace-nowrap shadow-sm group text-white/80"
              id={`home-mood-pill-${m.key}`}
            >
              <span className="text-base group-hover:scale-110 transition-transform">{m.emoji}</span>
              <span>{m.labelEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 📊 Quick Spiritual Progress Bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[#141A17] p-5 rounded-3xl border border-white/5 shadow-sm flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#C5A059]">
              {prayerStreak} Days
            </div>
            <p className="text-xs text-white/50 uppercase tracking-wider">{strings.prayerStreak}</p>
          </div>
        </div>

        <div className="bg-[#141A17] p-5 rounded-3xl border border-white/5 shadow-sm flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#C5A059]">
              {tasbihCount}
            </div>
            <p className="text-xs text-white/50 uppercase tracking-wider">Tasbih Count</p>
          </div>
        </div>

        <div className="bg-[#141A17] p-5 rounded-3xl border border-white/5 shadow-sm col-span-2 md:col-span-1 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-serif text-[#C5A059]">
              3 Done
            </div>
            <p className="text-xs text-white/50 uppercase tracking-wider">Deeds Today</p>
          </div>
        </div>
      </div>

      {/* 🚀 Feature Shortcuts Grid */}
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block mb-2 font-bold">
          Quick Access
        </span>
        <h3 className="font-serif italic text-xl text-white mb-4">
          Core Islamic Companions
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <button
            onClick={() => setActiveTab('duas')}
            className="p-5 rounded-3xl bg-[#141A17] border border-white/5 hover:border-[#C5A059]/40 transition-all text-left group"
            id="shortcut-card-duas"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#1B4332] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#E0E0E0]">{strings.duas}</h4>
            <p className="text-xs text-white/50 mt-1">Authentic Everyday Prayers</p>
          </button>

          <button
            onClick={() => setActiveTab('learn-salah')}
            className="p-5 rounded-3xl bg-[#141A17] border border-white/5 hover:border-[#C5A059]/40 transition-all text-left group"
            id="shortcut-card-salah"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#1B4332] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#E0E0E0]">{strings.learnSalah}</h4>
            <p className="text-xs text-white/50 mt-1">Step-by-Step & Wudu Guide</p>
          </button>

          <button
            onClick={() => setActiveTab('women')}
            className="p-5 rounded-3xl bg-[#141A17] border border-white/5 hover:border-[#C5A059]/40 transition-all text-left group"
            id="shortcut-card-women"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#1B4332] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h4 className="font-bold text-sm text-[#E0E0E0]">{strings.women}</h4>
            <p className="text-xs text-white/50 mt-1">Cycle & Worship Guide</p>
          </button>

          <button
            onClick={() => setActiveTab('dhikr')}
            className="p-5 rounded-3xl bg-[#141A17] border border-white/5 hover:border-[#C5A059]/40 transition-all text-left group"
            id="shortcut-card-dhikr"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#1B4332] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#E0E0E0]">{strings.dhikr}</h4>
            <p className="text-xs text-white/50 mt-1">Tasbih Counter & Adhkar</p>
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareCardModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        arabicText={dailyAyah.arabicText}
        translationText={getTranslationByLang()}
        sourceText={`${dailySurah.nameEnglish} (1:${dailyAyah.numberInSurah})`}
        language={language}
      />

    </div>
  );
};
