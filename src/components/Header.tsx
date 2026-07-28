import React from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { Moon, Sun, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  onOpenDashboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  isDarkMode,
  setIsDarkMode,
  onOpenDashboard,
}) => {
  const strings = UI_STRINGS[language];

  // Hijri Date estimation
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedGregorian = today.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', options);

  return (
    <header className="sticky top-0 z-40 bg-[#111613]/95 backdrop-blur-md text-[#E0E0E0] border-b border-[#C5A059]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* App Branding */}
        <div 
          onClick={onOpenDashboard}
          className="flex items-center gap-3 cursor-pointer group"
          id="app-header-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1B4332] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-bold text-xl shadow-lg shadow-[#1B4332]/40 group-hover:scale-105 transition-transform">
            نور
          </div>
          <div>
            <h1 className="font-serif font-bold text-xl italic tracking-tight text-[#C5A059] group-hover:text-[#d6b068] transition-colors flex items-center gap-2">
              {strings.appName}
              <span className="text-[10px] bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded-full font-sans font-normal uppercase tracking-widest">
                v2.0
              </span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-white/70 font-sans hidden sm:block">
              {strings.tagline}
            </p>
          </div>
        </div>

        {/* Gregorian / Hijri Date Indicator */}
        <div className="hidden md:flex flex-col items-end text-xs text-white/80 border-r border-[#C5A059]/20 pr-4 my-1">
          <div className="font-serif text-[#C5A059] flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>14 Safar 1448 AH</span>
          </div>
          <div className="text-white/50 text-[11px] uppercase tracking-wider">{formattedGregorian}</div>
        </div>

        {/* Controls: Language Selector & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="relative flex items-center bg-[#141A17] border border-[#C5A059]/20 hover:border-[#C5A059]/50 rounded-xl px-2.5 py-1.5 text-xs text-[#E0E0E0] transition-colors">
            <Globe className="w-3.5 h-3.5 mr-1.5 text-[#C5A059]" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as AppLanguage)}
              className="bg-transparent text-[#E0E0E0] font-medium focus:outline-none cursor-pointer pr-1"
              id="language-selector-select"
            >
              <option value="en" className="bg-[#111613] text-[#E0E0E0]">English</option>
              <option value="ur" className="bg-[#111613] text-[#E0E0E0]">اردو (Urdu)</option>
              <option value="hi" className="bg-[#111613] text-[#E0E0E0]">हिंदी (Hindi)</option>
              <option value="ar" className="bg-[#111613] text-[#E0E0E0]">العربية (Arabic)</option>
            </select>
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl bg-[#141A17] border border-[#C5A059]/20 hover:border-[#C5A059]/50 text-[#C5A059] transition-colors"
            title={strings.theme}
            id="theme-toggle-button"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#C5A059]" /> : <Moon className="w-4 h-4 text-[#C5A059]" />}
          </button>
        </div>

      </div>
    </header>
  );
};
