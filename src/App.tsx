import React, { useState, useEffect } from 'react';
import { ActiveTab, AppLanguage, MoodType } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeSection } from './components/HomeSection';
import { PrayerSection } from './components/PrayerSection';
import { QuranSection } from './components/QuranSection';
import { DuasSection } from './components/DuasSection';
import { LearnSalahSection } from './components/LearnSalahSection';
import { WomensSection } from './components/WomensSection';
import { DhikrSection } from './components/DhikrSection';
import { MoodGuidanceSection } from './components/MoodGuidanceSection';
import { IslamicLearningSection } from './components/IslamicLearningSection';
import { RamadanSection } from './components/RamadanSection';
import { GoodDeedsSection } from './components/GoodDeedsSection';
import { CommunitySection } from './components/CommunitySection';
import { DashboardSection } from './components/DashboardSection';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [language, setLanguage] = useState<AppLanguage>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [selectedMood, setSelectedMood] = useState<MoodType>('sad');

  // Stats state
  const [prayerStreak, setPrayerStreak] = useState<number>(7);
  const [tasbihCount, setTasbihCount] = useState<number>(142);

  // Apply dark mode class to root HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Set document dir attribute based on language (RTL for Arabic and Urdu)
  useEffect(() => {
    if (language === 'ar' || language === 'ur') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-[#0A0C0B] text-[#E0E0E0] font-sans transition-colors duration-200 selection:bg-[#C5A059]/30">
      
      {/* App Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenDashboard={() => setActiveTab('home')}
      />

      {/* Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
      />

      {/* Main View Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pb-12">
        {activeTab === 'home' && (
          <HomeSection
            setActiveTab={setActiveTab}
            language={language}
            onSelectMood={(mood) => setSelectedMood(mood)}
            prayerStreak={prayerStreak}
            tasbihCount={tasbihCount}
          />
        )}

        {activeTab === 'prayer' && (
          <PrayerSection
            language={language}
            prayerStreak={prayerStreak}
            setPrayerStreak={setPrayerStreak}
          />
        )}

        {activeTab === 'quran' && <QuranSection language={language} />}

        {activeTab === 'duas' && <DuasSection language={language} />}

        {activeTab === 'learn-salah' && <LearnSalahSection language={language} />}

        {activeTab === 'women' && <WomensSection language={language} />}

        {activeTab === 'dhikr' && (
          <DhikrSection
            language={language}
            tasbihCount={tasbihCount}
            setTasbihCount={setTasbihCount}
          />
        )}

        {activeTab === 'mood' && (
          <MoodGuidanceSection
            language={language}
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
          />
        )}

        {activeTab === 'learning' && <IslamicLearningSection language={language} />}

        {activeTab === 'ramadan' && <RamadanSection language={language} />}

        {activeTab === 'good-deeds' && <GoodDeedsSection language={language} />}

        {activeTab === 'community' && <CommunitySection language={language} />}

        {activeTab === 'dashboard' && (
          <DashboardSection
            language={language}
            prayerStreak={prayerStreak}
            tasbihCount={tasbihCount}
          />
        )}
      </main>

    </div>
  );
}

export default App;
