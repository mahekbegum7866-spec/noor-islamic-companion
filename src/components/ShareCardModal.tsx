import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { X, Copy, Check, Download, Share2, Sparkles } from 'lucide-react';

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  arabicText: string;
  translationText: string;
  sourceText: string;
  language: AppLanguage;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({
  isOpen,
  onClose,
  arabicText,
  translationText,
  sourceText,
  language,
}) => {
  const strings = UI_STRINGS[language];
  const [copied, setCopied] = useState(false);
  const [bgStyle, setBgStyle] = useState<'emerald' | 'gold' | 'dark' | 'cream'>('emerald');

  if (!isOpen) return null;

  const fullShareText = `"${arabicText}"\n\nTranslation: ${translationText}\n\n— ${sourceText}\nShared via Noor App`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullShareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bgClasses = {
    emerald: 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white border-emerald-700',
    gold: 'bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-amber-50 border-amber-600',
    dark: 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 border-slate-700',
    cream: 'bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50 text-stone-900 border-amber-200',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#141A17] border border-white/10 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-[#E0E0E0]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
              {strings.shareVerse}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            id="close-share-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Style Selector */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="text-xs text-white/50 font-medium">Card Theme:</span>
          <button
            onClick={() => setBgStyle('emerald')}
            className={`w-6 h-6 rounded-full bg-[#1B4332] border-2 ${bgStyle === 'emerald' ? 'border-[#C5A059] scale-110' : 'border-transparent'}`}
            title="Forest Emerald"
          />
          <button
            onClick={() => setBgStyle('gold')}
            className={`w-6 h-6 rounded-full bg-[#C5A059] border-2 ${bgStyle === 'gold' ? 'border-white scale-110' : 'border-transparent'}`}
            title="Gold"
          />
          <button
            onClick={() => setBgStyle('dark')}
            className={`w-6 h-6 rounded-full bg-[#0A0C0B] border-2 ${bgStyle === 'dark' ? 'border-[#C5A059] scale-110' : 'border-transparent'}`}
            title="Obsidian Dark"
          />
          <button
            onClick={() => setBgStyle('cream')}
            className={`w-6 h-6 rounded-full bg-[#E0E0E0] border-2 ${bgStyle === 'cream' ? 'border-[#C5A059] scale-110' : 'border-transparent'}`}
            title="Cream"
          />
        </div>

        {/* Visual Share Card */}
        <div className={`p-6 rounded-3xl border ${bgClasses[bgStyle]} shadow-xl relative overflow-hidden text-center transition-all`}>
          {/* Subtle Islamic Geometric Accents */}
          <div className="absolute -right-8 -top-8 w-24 h-24 border border-[#C5A059]/20 rounded-full pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-24 h-24 border border-[#C5A059]/20 rounded-full pointer-events-none" />

          {/* App Logo Emblem */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#C5A059] mb-4 opacity-90">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Noor • Daily Companion Towards Allah</span>
          </div>

          {/* Arabic Text */}
          <p className="font-serif text-2xl sm:text-3xl leading-relaxed mb-4 text-[#C5A059] italic tracking-wide dir-rtl font-bold">
            {arabicText}
          </p>

          {/* Translation */}
          <p className="text-sm font-sans leading-relaxed mb-4 italic opacity-95">
            "{translationText}"
          </p>

          {/* Source Reference */}
          <div className="pt-3 border-t border-[#C5A059]/20 text-xs font-semibold text-[#C5A059]">
            — {sourceText}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={handleCopy}
            className="flex-1 py-3 px-4 rounded-2xl bg-[#C5A059] hover:bg-[#d6b068] text-[#0A0C0B] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            id="copy-share-card-btn"
          >
            {copied ? <Check className="w-4 h-4 text-[#0A0C0B]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? strings.copied : strings.copy}</span>
          </button>

          <button
            onClick={handleCopy}
            className="py-3 px-4 rounded-2xl border border-white/10 hover:bg-[#1B4332] text-[#C5A059] font-bold text-xs flex items-center gap-2 transition-all"
            id="download-share-card-btn"
          >
            <Download className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>

      </div>
    </div>
  );
};
