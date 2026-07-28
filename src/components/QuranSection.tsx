import React, { useState } from 'react';
import { AppLanguage, Surah } from '../types';
import { UI_STRINGS } from '../data/translations';
import { QURAN_SURAHS } from '../data/quranData';
import { ShareCardModal } from './ShareCardModal';
import { BookOpen, Search, Play, Pause, Bookmark, Share2, Info, ArrowLeft, Volume2 } from 'lucide-react';

interface QuranSectionProps {
  language: AppLanguage;
}

export const QuranSection: React.FC<QuranSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [playingAyahIndex, setPlayingAyahIndex] = useState<number | null>(null);
  const [bookmarkedAyahs, setBookmarkedAyahs] = useState<number[]>([]);
  const [selectedShareAyah, setSelectedShareAyah] = useState<{ arabic: string; translation: string; source: string } | null>(null);

  const filteredSurahs = QURAN_SURAHS.filter(
    (s) =>
      s.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nameArabic.includes(searchQuery) ||
      s.number.toString().includes(searchQuery)
  );

  const toggleBookmark = (globalNum: number) => {
    setBookmarkedAyahs((prev) =>
      prev.includes(globalNum) ? prev.filter((id) => id !== globalNum) : [...prev, globalNum]
    );
  };

  const getTranslationText = (ayah: typeof QURAN_SURAHS[0]['ayahs'][0]) => {
    if (language === 'ur') return ayah.translationUr;
    if (language === 'hi') return ayah.translationHi;
    if (language === 'ar') return ayah.translationAr;
    return ayah.translationEn;
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Surah List View */}
      {!selectedSurah ? (
        <>
          {/* Header & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
                The Noble Revelation
              </span>
              <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#C5A059]" />
                <span>{strings.quran}</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                Explore the complete Holy Quran with authentic audio, translations, and tafsir.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder={strings.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-[#141A17] border border-white/10 text-xs text-[#E0E0E0] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
                id="quran-search-input"
              />
            </div>
          </div>

          {/* Surah Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSurahs.map((surah) => (
              <div
                key={surah.number}
                onClick={() => setSelectedSurah(surah)}
                className="p-4 rounded-3xl bg-[#141A17] border border-white/5 hover:border-[#C5A059]/50 shadow-sm cursor-pointer transition-all flex items-center justify-between group"
                id={`surah-card-${surah.number}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#1B4332] text-[#C5A059] font-bold font-serif italic flex items-center justify-center text-sm border border-[#C5A059]/20 group-hover:bg-[#C5A059] group-hover:text-[#0A0C0B] transition-colors">
                    {surah.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#E0E0E0] group-hover:text-[#C5A059] transition-colors">
                      {surah.nameEnglish}
                    </h4>
                    <p className="text-xs text-white/50">
                      {surah.nameTranslation} • {surah.totalAyahs} Ayahs
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif font-bold text-xl text-[#C5A059] italic">
                    {surah.nameArabic}
                  </span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-wider">
                    {surah.revelationType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Selected Surah Reader View */
        <div className="space-y-6">
          {/* Back Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <button
              onClick={() => {
                setSelectedSurah(null);
                setPlayingAyahIndex(null);
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#141A17] border border-white/10 text-xs font-bold text-[#C5A059] hover:bg-[#1B4332] transition-all"
              id="back-to-surahs-btn"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Surahs</span>
            </button>

            <div className="text-center">
              <h3 className="font-serif italic font-bold text-xl text-[#C5A059]">
                {selectedSurah.nameEnglish} ({selectedSurah.nameArabic})
              </h3>
              <p className="text-xs text-white/50">
                {selectedSurah.nameTranslation} • {selectedSurah.revelationType} • {selectedSurah.totalAyahs} Ayahs
              </p>
            </div>

            <div className="w-20" /> {/* Spacer */}
          </div>

          {/* Basmalah Header */}
          {selectedSurah.number !== 9 && (
            <div className="text-center my-6 py-4 bg-[#141A17] rounded-3xl border border-[#C5A059]/30">
              <p className="font-serif text-2xl text-[#C5A059] tracking-wide dir-rtl font-bold italic">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
            </div>
          )}

          {/* Ayah List */}
          <div className="space-y-4">
            {selectedSurah.ayahs.map((ayah, index) => {
              const isPlaying = playingAyahIndex === index;
              const isBookmarked = bookmarkedAyahs.includes(ayah.globalNumber);

              return (
                <div
                  key={ayah.numberInSurah}
                  className="bg-[#141A17] border border-white/5 rounded-3xl p-6 shadow-sm space-y-4"
                >
                  {/* Ayah Controls Bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="w-7 h-7 rounded-xl bg-[#C5A059]/20 text-[#C5A059] font-bold text-xs flex items-center justify-center font-serif italic border border-[#C5A059]/30">
                      {ayah.numberInSurah}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPlayingAyahIndex(isPlaying ? null : index)}
                        className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                          isPlaying
                            ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059]'
                            : 'bg-[#1B4332] text-[#C5A059] border-[#C5A059]/20 hover:bg-[#C5A059] hover:text-[#0A0C0B]'
                        }`}
                        title="Play Recitation"
                        id={`play-ayah-${ayah.numberInSurah}`}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                      </button>

                      <button
                        onClick={() => toggleBookmark(ayah.globalNumber)}
                        className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                          isBookmarked
                            ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059]'
                            : 'bg-[#1B4332] text-[#C5A059] border-[#C5A059]/20 hover:bg-[#C5A059] hover:text-[#0A0C0B]'
                        }`}
                        title="Bookmark Ayah"
                        id={`bookmark-ayah-${ayah.numberInSurah}`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() =>
                          setSelectedShareAyah({
                            arabic: ayah.arabicText,
                            translation: getTranslationText(ayah),
                            source: `${selectedSurah.nameEnglish} (${selectedSurah.number}:${ayah.numberInSurah})`,
                          })
                        }
                        className="p-2 rounded-xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs flex items-center gap-1"
                        title="Share Card"
                        id={`share-ayah-${ayah.numberInSurah}`}
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <p className="font-serif text-2xl sm:text-3xl text-[#C5A059] italic leading-relaxed text-right dir-rtl tracking-wide font-bold">
                    {ayah.arabicText}
                  </p>

                  {/* Transliteration */}
                  <p className="text-xs text-[#C5A059]/80 font-serif italic">
                    {ayah.transliteration}
                  </p>

                  {/* Translation */}
                  <p className="text-sm text-white/80 font-sans leading-relaxed">
                    "{getTranslationText(ayah)}"
                  </p>

                  {/* Tafsir summary */}
                  <div className="p-3.5 rounded-2xl bg-[#1B4332]/30 border border-[#C5A059]/20 text-xs text-white/80 flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong className="text-[#C5A059]">Tafsir Note:</strong> {ayah.tafsirSummary}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Share Card Modal */}
      {selectedShareAyah && (
        <ShareCardModal
          isOpen={!!selectedShareAyah}
          onClose={() => setSelectedShareAyah(null)}
          arabicText={selectedShareAyah.arabic}
          translationText={selectedShareAyah.translation}
          sourceText={selectedShareAyah.source}
          language={language}
        />
      )}

    </div>
  );
};
