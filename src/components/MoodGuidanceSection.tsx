import React, { useState } from 'react';
import { AppLanguage, GuidanceResult, MoodType } from '../types';
import { UI_STRINGS } from '../data/translations';
import { MOOD_LIST, STATIC_MOOD_GUIDANCE } from '../data/moodData';
import { ShareCardModal } from './ShareCardModal';
import { Smile, Sparkles, BookOpen, Heart, RefreshCw, Share2, ArrowRight } from 'lucide-react';

interface MoodGuidanceSectionProps {
  language: AppLanguage;
  selectedMood: MoodType;
  setSelectedMood: (m: MoodType) => void;
}

export const MoodGuidanceSection: React.FC<MoodGuidanceSectionProps> = ({
  language,
  selectedMood,
  setSelectedMood,
}) => {
  const strings = UI_STRINGS[language];
  const [userCustomNote, setUserCustomNote] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [aiGuidance, setAiGuidance] = useState<GuidanceResult>(
    STATIC_MOOD_GUIDANCE[selectedMood] || STATIC_MOOD_GUIDANCE['sad']
  );
  const [selectedShareVerse, setSelectedShareVerse] = useState<{ arabic: string; translation: string; source: string } | null>(null);

  const activeMoodInfo = MOOD_LIST.find((m) => m.key === selectedMood) || MOOD_LIST[0];

  const fetchAiGuidance = async (mood: MoodType, queryNote?: string) => {
    setIsLoadingAi(true);
    try {
      const response = await fetch('/api/mood-guidance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mood,
          customQuery: queryNote || '',
          language,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAiGuidance(data);
      } else {
        setAiGuidance(STATIC_MOOD_GUIDANCE[mood] || STATIC_MOOD_GUIDANCE['sad']);
      }
    } catch (err) {
      console.warn('Backend API request failed, using authentic static data fallback:', err);
      setAiGuidance(STATIC_MOOD_GUIDANCE[mood] || STATIC_MOOD_GUIDANCE['sad']);
    } finally {
      setIsLoadingAi(false);
    }
  };

  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood);
    const staticData = STATIC_MOOD_GUIDANCE[mood] || STATIC_MOOD_GUIDANCE['sad'];
    setAiGuidance(staticData);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAiGuidance(selectedMood, userCustomNote);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
          Emotional & Spiritual Sanctuary
        </span>
        <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
          <Smile className="w-6 h-6 text-[#C5A059]" />
          <span>{strings.mood}</span>
        </h2>
        <p className="text-xs text-white/50 mt-1">
          {strings.aiPromptDesc}
        </p>
      </div>

      {/* Mood Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {MOOD_LIST.map((m) => {
          const isSelected = selectedMood === m.key;
          return (
            <button
              key={m.key}
              onClick={() => handleMoodSelect(m.key)}
              className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                isSelected
                  ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] font-bold shadow-md scale-105'
                  : 'bg-[#141A17] border-white/5 text-white/80 hover:border-[#C5A059]/40'
              }`}
              id={`mood-selector-${m.key}`}
            >
              <span className="text-2xl">{m.emoji}</span>
              <span className="text-xs font-medium">{m.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Optional Custom Input Prompt for AI */}
      <form onSubmit={handleCustomSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Or write in your own words how you are feeling right now..."
          value={userCustomNote}
          onChange={(e) => setUserCustomNote(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl bg-[#141A17] border border-white/10 text-xs text-[#E0E0E0] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
          id="custom-mood-input"
        />
        <button
          type="submit"
          disabled={isLoadingAi}
          className="px-5 py-3 rounded-2xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all shrink-0"
          id="ask-ai-guidance-btn"
        >
          {isLoadingAi ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          <span>{strings.askAI}</span>
        </button>
      </form>

      {/* Guidance Output Results */}
      {aiGuidance && (
        <div className="space-y-6">
          
          {/* Gentle Reflection Box */}
          <div className="bg-gradient-to-br from-[#1B4332] to-[#0F221A] text-white p-6 rounded-3xl shadow-lg border border-[#C5A059]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-semibold uppercase tracking-widest">
              <span>{activeMoodInfo.emoji} Spiritual Reflection for {activeMoodInfo.labelEn}</span>
            </div>
            <p className="text-sm font-sans leading-relaxed text-white/90 font-medium">
              {aiGuidance.reflection}
            </p>
          </div>

          {/* Quranic Verses */}
          <div className="space-y-4">
            <h3 className="font-serif italic font-bold text-lg text-[#C5A059] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#C5A059]" />
              <span>Quranic Consolation & Verses</span>
            </h3>

            {aiGuidance.quranVerses.map((verse, idx) => (
              <div
                key={idx}
                className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-bold text-[#C5A059]">
                    {verse.surahName} ({verse.surahNumber ? `${verse.surahNumber}:${verse.ayahNumber}` : ''})
                  </span>
                  <button
                    onClick={() =>
                      setSelectedShareVerse({
                        arabic: verse.arabicText,
                        translation: verse.translation,
                        source: `${verse.surahName}`,
                      })
                    }
                    className="p-2 rounded-xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] text-xs font-bold flex items-center gap-1"
                    id={`share-mood-verse-${idx}`}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="font-serif text-2xl sm:text-3xl text-[#C5A059] italic leading-relaxed text-right dir-rtl tracking-wide font-bold">
                  {verse.arabicText}
                </p>

                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  "{verse.translation}"
                </p>
              </div>
            ))}
          </div>

          {/* Hadith Guidance */}
          {aiGuidance.hadith && (
            <div className="space-y-4">
              <h3 className="font-serif italic font-bold text-lg text-[#C5A059] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                <span>Authentic Prophetic Hadith</span>
              </h3>

              <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-2">
                {aiGuidance.hadith.arabicText && (
                  <p className="font-serif text-xl text-[#C5A059] italic text-right dir-rtl font-bold mb-2">
                    {aiGuidance.hadith.arabicText}
                  </p>
                )}
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  "{aiGuidance.hadith.translation}"
                </p>
                <div className="text-[11px] text-[#C5A059] font-semibold pt-2 border-t border-white/5">
                  Source: {aiGuidance.hadith.source}
                </div>
              </div>
            </div>
          )}

          {/* Recommended Duas & Dhikr */}
          <div className="bg-[#1B4332]/30 border border-[#C5A059]/20 p-6 rounded-3xl space-y-4">
            <h3 className="font-serif italic font-bold text-lg text-[#C5A059] flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#C5A059]" />
              <span>Recommended Dua & Dhikr Action</span>
            </h3>

            {aiGuidance.duas.map((dua, idx) => (
              <div key={idx} className="bg-[#0A0C0B] p-4 rounded-2xl border border-white/5 space-y-2">
                <p className="font-serif text-xl text-[#C5A059] italic text-right dir-rtl font-bold">
                  {dua.arabicText}
                </p>
                {dua.transliteration && (
                  <p className="text-xs text-[#C5A059]/80 italic">
                    {dua.transliteration}
                  </p>
                )}
                <p className="text-xs text-white/80">
                  "{dua.translation}"
                </p>
              </div>
            ))}

            {aiGuidance.recommendedDhikr && (
              <div className="p-3.5 bg-[#C5A059]/15 text-[#C5A059] rounded-2xl text-xs font-semibold border border-[#C5A059]/30">
                <strong>Daily Remedy:</strong> {aiGuidance.recommendedDhikr.arabicText} ({aiGuidance.recommendedDhikr.transliteration}) — {aiGuidance.recommendedDhikr.translation}
              </div>
            )}
          </div>

        </div>
      )}

      {/* Share Modal */}
      {selectedShareVerse && (
        <ShareCardModal
          isOpen={!!selectedShareVerse}
          onClose={() => setSelectedShareVerse(null)}
          arabicText={selectedShareVerse.arabic}
          translationText={selectedShareVerse.translation}
          sourceText={selectedShareVerse.source}
          language={language}
        />
      )}

    </div>
  );
};
