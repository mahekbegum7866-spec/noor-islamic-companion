import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { ISLAMIC_QUIZZES, NAMES_OF_ALLAH, PROPHET_STORIES, SAHABAH_STORIES } from '../data/learningData';
import { GraduationCap, Search, Sparkles, BookOpen, Award, CheckCircle, XCircle } from 'lucide-react';

interface IslamicLearningSectionProps {
  language: AppLanguage;
}

export const IslamicLearningSection: React.FC<IslamicLearningSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [activeSubTab, setActiveSubTab] = useState<'names' | 'stories' | 'quiz'>('names');
  const [nameSearch, setNameSearch] = useState('');
  const [quizScore, setQuizScore] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const filteredNames = NAMES_OF_ALLAH.filter(
    (n) =>
      n.transliteration.toLowerCase().includes(nameSearch.toLowerCase()) ||
      n.meaningEn.toLowerCase().includes(nameSearch.toLowerCase()) ||
      n.arabic.includes(nameSearch)
  );

  const handleAnswerSelect = (questionId: string, optionIndex: number, correctIndex: number) => {
    if (selectedAnswers[questionId] !== undefined) return; // already answered

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    if (optionIndex === correctIndex) {
      setQuizScore((prev) => prev + 10);
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
            Knowledge & Wisdom
          </span>
          <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#C5A059]" />
            <span>{strings.learning}</span>
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Explore the 99 Names of Allah, Prophet & Sahabah Stories, and interactive Islamic Quizzes.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="flex items-center gap-1 bg-[#141A17] border border-white/10 p-1.5 rounded-2xl text-xs">
          <button
            onClick={() => setActiveSubTab('names')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeSubTab === 'names'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
            id="learning-subtab-names"
          >
            {strings.namesOfAllah}
          </button>
          <button
            onClick={() => setActiveSubTab('stories')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeSubTab === 'stories'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
            id="learning-subtab-stories"
          >
            {strings.prophetStories}
          </button>
          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              activeSubTab === 'quiz'
                ? 'bg-[#C5A059] text-[#0A0C0B] shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
            id="learning-subtab-quiz"
          >
            {strings.quiz}
          </button>
        </div>
      </div>

      {/* Subtab 1: 99 Names of Allah */}
      {activeSubTab === 'names' && (
        <div className="space-y-4">
          <div className="relative max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search by name, meaning, or Arabic..."
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-[#141A17] border border-white/10 text-xs text-[#E0E0E0] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
              id="names-search-input"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNames.map((n) => (
              <div
                key={n.number}
                className="p-5 rounded-3xl bg-[#141A17] border border-white/5 shadow-sm space-y-2 hover:border-[#C5A059]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 font-bold text-xs flex items-center justify-center font-serif italic">
                    #{n.number}
                  </span>
                  <p className="font-serif italic font-bold text-2xl text-[#C5A059] dir-rtl">
                    {n.arabic}
                  </p>
                </div>

                <h4 className="font-bold text-base text-[#E0E0E0]">
                  {n.transliteration}
                </h4>

                <p className="text-xs text-[#C5A059] font-semibold italic">
                  "{n.meaningEn}"
                </p>

                <p className="text-xs text-white/70 pt-2 border-t border-white/5 leading-relaxed">
                  {n.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 2: Prophet & Sahabah Stories */}
      {activeSubTab === 'stories' && (
        <div className="space-y-6">
          <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
            Stories of the Holy Prophets (Alayhimus-Salam)
          </h3>

          <div className="space-y-4">
            {PROPHET_STORIES.map((p) => (
              <div
                key={p.id}
                className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div>
                    <h4 className="font-bold text-base text-[#E0E0E0]">{p.nameEn}</h4>
                    <span className="text-xs text-white/50">{p.titleEn}</span>
                  </div>
                  <span className="font-serif italic text-xl text-[#C5A059] font-bold">{p.nameAr}</span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed">
                  {p.summary}
                </p>

                <div className="p-4 bg-[#1B4332]/40 rounded-2xl border border-[#C5A059]/30 text-xs text-white/90 space-y-1">
                  <strong className="text-[#C5A059]">Key Spiritual Lessons:</strong>
                  <ul className="list-disc list-inside space-y-0.5 opacity-90">
                    {p.keyLessons.map((l, idx) => (
                      <li key={idx}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 3: Islamic Quiz */}
      {activeSubTab === 'quiz' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-[#141A17] text-white p-5 rounded-3xl shadow-lg border border-white/5">
            <div>
              <h3 className="font-serif italic font-bold text-xl text-[#C5A059]">Test Your Knowledge</h3>
              <p className="text-xs text-white/50">Earn points for every correct answer!</p>
            </div>
            <div className="flex items-center gap-2 bg-[#C5A059] text-[#0A0C0B] px-4 py-2 rounded-2xl font-bold text-xs shadow-sm">
              <Award className="w-4 h-4" />
              <span>Score: {quizScore} XP</span>
            </div>
          </div>

          <div className="space-y-4">
            {ISLAMIC_QUIZZES.map((q) => {
              const selectedOpt = selectedAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;

              return (
                <div
                  key={q.id}
                  className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      For {q.target}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#E0E0E0]">
                    {q.questionEn}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.optionsEn.map((opt, optIdx) => {
                      let btnStyle = 'bg-[#0A0C0B] border-white/5 text-white/80 hover:border-[#C5A059]';

                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = 'bg-[#1B4332] text-[#C5A059] border-[#C5A059] font-bold';
                        } else if (optIdx === selectedOpt) {
                          btnStyle = 'bg-rose-950/60 text-rose-300 border-rose-800 font-bold';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => handleAnswerSelect(q.id, optIdx, q.correctIndex)}
                          className={`p-3.5 rounded-2xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                          id={`quiz-option-${q.id}-${optIdx}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && optIdx === q.correctIndex && <CheckCircle className="w-4 h-4 text-[#C5A059]" />}
                          {isAnswered && optIdx === selectedOpt && optIdx !== q.correctIndex && <XCircle className="w-4 h-4" />}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="p-3.5 bg-[#0A0C0B] rounded-2xl border border-white/5 text-xs text-white/80">
                      <strong className="text-[#C5A059]">Explanation:</strong> {q.explanationEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
