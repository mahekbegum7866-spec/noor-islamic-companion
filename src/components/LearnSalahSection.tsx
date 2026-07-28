import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { SALAH_MISTAKES, SALAH_STEPS, WUDU_STEPS } from '../data/learnSalahData';
import { Compass, Volume2, CheckCircle2, AlertTriangle, UserCheck, ShieldCheck } from 'lucide-react';

interface LearnSalahSectionProps {
  language: AppLanguage;
}

export const LearnSalahSection: React.FC<LearnSalahSectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [targetAudience, setTargetAudience] = useState<'men' | 'women' | 'children' | 'wudu' | 'mistakes'>('men');

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
          Step-by-Step Prayer Mastery
        </span>
        <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
          <Compass className="w-6 h-6 text-[#C5A059]" />
          <span>{strings.learnSalah}</span>
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Complete beginner-friendly step-by-step guide for Men, Women, and Children, including Wudu and common mistakes to avoid.
        </p>
      </div>

      {/* Audience Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setTargetAudience('men')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
            targetAudience === 'men'
              ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
              : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
          }`}
          id="salah-audience-men"
        >
          {strings.forMen}
        </button>

        <button
          onClick={() => setTargetAudience('women')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
            targetAudience === 'women'
              ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
              : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
          }`}
          id="salah-audience-women"
        >
          {strings.forWomen}
        </button>

        <button
          onClick={() => setTargetAudience('children')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
            targetAudience === 'children'
              ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
              : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
          }`}
          id="salah-audience-children"
        >
          {strings.forChildren}
        </button>

        <button
          onClick={() => setTargetAudience('wudu')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
            targetAudience === 'wudu'
              ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
              : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
          }`}
          id="salah-audience-wudu"
        >
          {strings.wuduGuide}
        </button>

        <button
          onClick={() => setTargetAudience('mistakes')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
            targetAudience === 'mistakes'
              ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] shadow-sm font-bold'
              : 'bg-[#141A17] text-white/70 border-white/5 hover:border-[#C5A059]/40'
          }`}
          id="salah-audience-mistakes"
        >
          {strings.avoidMistakes}
        </button>
      </div>

      {/* Content 1: Step-by-Step Wudu Guide */}
      {targetAudience === 'wudu' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#1B4332]/40 border border-[#C5A059]/30 text-xs text-white/90 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
            <span>
              <strong className="text-[#C5A059]">Purity in Islam:</strong> Wudu is a required prerequisite for Salah. Follow these 9 authentic steps before standing for prayer.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WUDU_STEPS.map((w) => (
              <div
                key={w.stepNumber}
                className="bg-[#141A17] border border-white/5 p-5 rounded-3xl shadow-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C5A059] text-[#0A0C0B] font-bold font-serif italic flex items-center justify-center text-sm">
                    {w.stepNumber}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#E0E0E0]">{w.titleEn}</h4>
                    <span className="text-xs text-[#C5A059] font-serif italic">{w.titleAr}</span>
                  </div>
                </div>

                <p className="text-xs text-white/70 leading-relaxed">
                  {w.descriptionEn}
                </p>

                {w.arabicDua && (
                  <div className="p-3 bg-[#0A0C0B] rounded-2xl border border-white/5 text-right">
                    <p className="font-serif text-lg text-[#C5A059] italic dir-rtl mb-1 font-bold">
                      {w.arabicDua}
                    </p>
                    <p className="text-[11px] text-[#C5A059]/80 italic">
                      {w.transliteration}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content 2: Common Mistakes */}
      {targetAudience === 'mistakes' && (
        <div className="space-y-4">
          {SALAH_MISTAKES.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-serif italic">Mistake #{idx + 1}: {m.titleEn}</h4>
              </div>

              <p className="text-xs text-white/70">
                <strong className="text-white/90">What happens:</strong> {m.descriptionEn}
              </p>

              <div className="p-3.5 bg-[#1B4332]/40 rounded-2xl border border-[#C5A059]/30 text-xs text-white/90">
                <strong className="text-[#C5A059]">Sunnah Correction:</strong> {m.correctionEn}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content 3: Salah Step-by-step for Men, Women, Children */}
      {['men', 'women', 'children'].includes(targetAudience) && (
        <div className="space-y-6">
          {/* Gender-specific note */}
          {targetAudience === 'women' && (
            <div className="p-4 rounded-2xl bg-[#1B4332]/40 border border-[#C5A059]/30 text-xs text-white/90">
              <strong className="text-[#C5A059]">Note for Women:</strong> In Salah, women raise hands to shoulder level during Takbir, fold hands over chest, and stay compact during Sujud according to classic scholarly guidelines.
            </div>
          )}

          {targetAudience === 'children' && (
            <div className="p-4 rounded-2xl bg-[#1B4332]/40 border border-[#C5A059]/30 text-xs text-white/90">
              <strong className="text-[#C5A059]">Fun Learning for Kids:</strong> Take one step at a time! Practice saying 'Allahu Akbar' clearly and standing quietly facing Qibla.
            </div>
          )}

          <div className="space-y-4">
            {SALAH_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-2xl bg-[#C5A059] text-[#0A0C0B] font-bold font-serif italic flex items-center justify-center text-base shadow-sm">
                      {step.stepNumber}
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-[#E0E0E0]">
                        {step.titleEn}
                      </h3>
                      <span className="text-xs text-[#C5A059] font-serif italic">
                        {step.titleAr}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 rounded-full font-semibold capitalize">
                    {step.posture}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-white/70 leading-relaxed font-medium">
                  {step.descriptionEn}
                </p>

                {/* Recitation */}
                {step.arabicRecitation && (
                  <div className="p-4 bg-[#0A0C0B] rounded-2xl border border-white/5 text-right space-y-2">
                    <p className="font-serif text-2xl text-[#C5A059] italic dir-rtl tracking-wide font-bold">
                      {step.arabicRecitation}
                    </p>
                    {step.transliteration && (
                      <p className="text-xs text-[#C5A059]/80 italic">
                        {step.transliteration}
                      </p>
                    )}
                    {step.translationEn && (
                      <p className="text-xs text-white/80">
                        "{step.translationEn}"
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
