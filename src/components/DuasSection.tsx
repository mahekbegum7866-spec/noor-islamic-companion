import React, { useState } from 'react';
import { AppLanguage, DuaItem } from '../types';
import { UI_STRINGS } from '../data/translations';
import { DUA_CATEGORIES, DUAS_LIST } from '../data/duasData';
import { ShareCardModal } from './ShareCardModal';
import { Heart, Search, Volume2, Bookmark, Share2, Sparkles, Check } from 'lucide-react';

interface DuasSectionProps {
  language: AppLanguage;
}

export const DuasSection: React.FC<DuasSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedDuas, setBookmarkedDuas] = useState<string[]>([]);
  const [playingDuaId, setPlayingDuaId] = useState<string | null>(null);
  const [selectedShareDua, setSelectedShareDua] = useState<{ arabic: string; translation: string; source: string } | null>(null);

  const filteredDuas = DUAS_LIST.filter((d) => {
    const matchesCategory = selectedCategory === 'all' || d.categoryId === selectedCategory;
    const matchesSearch =
      d.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.translationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.arabicText.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (id: string) => {
    setBookmarkedDuas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getDuaTitleByLang = (dua: DuaItem) => {
    if (language === 'ur') return dua.titleUr;
    if (language === 'hi') return dua.titleHi;
    if (language === 'ar') return dua.titleAr;
    return dua.titleEn;
  };

  const getDuaTranslationByLang = (dua: DuaItem) => {
    if (language === 'ur') return dua.translationUr;
    if (language === 'hi') return dua.translationHi;
    if (language === 'ar') return dua.translationAr;
    return dua.translationEn;
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
            Authentic Supplications
          </span>
          <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#C5A059]" />
            <span>{strings.duas}</span>
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Authentic supplications from the Holy Quran and Sunnah for every moment of life.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder={strings.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-[#141A17] border border-white/10 text-xs text-[#E0E0E0] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
            id="duas-search-input"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
            selectedCategory === 'all'
              ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
              : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
          }`}
          id="dua-cat-pill-all"
        >
          All Duas
        </button>

        {DUA_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
                : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
            }`}
            id={`dua-cat-pill-${cat.id}`}
          >
            {cat.nameEn}
          </button>
        ))}
      </div>

      {/* Duas List */}
      <div className="space-y-4">
        {filteredDuas.map((dua) => {
          const isBookmarked = bookmarkedDuas.includes(dua.id);
          const isPlaying = playingDuaId === dua.id;

          return (
            <div
              key={dua.id}
              className="bg-[#141A17] border border-white/5 rounded-3xl p-6 shadow-sm space-y-4 hover:border-[#C5A059]/40 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="font-serif italic font-bold text-base text-[#C5A059]">
                  {getDuaTitleByLang(dua)}
                </h3>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPlayingDuaId(isPlaying ? null : dua.id)}
                    className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                      isPlaying
                        ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059]'
                        : 'bg-[#1B4332] text-[#C5A059] border-[#C5A059]/20 hover:bg-[#C5A059] hover:text-[#0A0C0B]'
                    }`}
                    title="Audio Recitation"
                    id={`play-dua-${dua.id}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleBookmark(dua.id)}
                    className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                      isBookmarked
                        ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059]'
                        : 'bg-[#1B4332] text-[#C5A059] border-[#C5A059]/20 hover:bg-[#C5A059] hover:text-[#0A0C0B]'
                    }`}
                    title="Bookmark"
                    id={`bookmark-dua-${dua.id}`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      setSelectedShareDua({
                        arabic: dua.arabicText,
                        translation: getDuaTranslationByLang(dua),
                        source: `${getDuaTitleByLang(dua)} (${dua.source})`,
                      })
                    }
                    className="p-2 rounded-xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs"
                    title="Share Card"
                    id={`share-dua-${dua.id}`}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Arabic Text */}
              <p className="font-serif text-2xl sm:text-3xl text-[#C5A059] italic leading-relaxed text-right dir-rtl tracking-wide font-bold">
                {dua.arabicText}
              </p>

              {/* Transliteration */}
              <p className="text-xs text-[#C5A059]/80 font-serif italic">
                {dua.transliteration}
              </p>

              {/* Translation */}
              <p className="text-sm text-white/80 font-sans leading-relaxed">
                "{getDuaTranslationByLang(dua)}"
              </p>

              {/* Benefits & Source */}
              <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-white/70 font-medium">
                  <strong className="text-[#C5A059]">Benefits:</strong> {dua.benefits}
                </span>
                <span className="text-[#C5A059] font-semibold shrink-0">
                  Ref: {dua.source}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Share Modal */}
      {selectedShareDua && (
        <ShareCardModal
          isOpen={!!selectedShareDua}
          onClose={() => setSelectedShareDua(null)}
          arabicText={selectedShareDua.arabic}
          translationText={selectedShareDua.translation}
          sourceText={selectedShareDua.source}
          language={language}
        />
      )}

    </div>
  );
};
