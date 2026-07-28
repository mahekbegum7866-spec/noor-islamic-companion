import React from 'react';
import { ActiveTab, AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import {
  Home,
  Clock,
  BookOpen,
  Heart,
  Sparkles,
  Smile,
  Compass,
  GraduationCap,
  Moon,
  Gift,
  Users,
  LayoutDashboard,
  MoreHorizontal,
  X,
} from 'lucide-react';

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  language: AppLanguage;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  language,
}) => {
  const strings = UI_STRINGS[language];
  const [showMoreDrawer, setShowMoreDrawer] = React.useState(false);

  const mainTabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'prayer', label: strings.prayer, icon: <Clock className="w-5 h-5" /> },
    { id: 'quran', label: strings.quran, icon: <BookOpen className="w-5 h-5" /> },
    { id: 'duas', label: strings.duas, icon: <Heart className="w-5 h-5" /> },
    { id: 'dhikr', label: strings.dhikr, icon: <Sparkles className="w-5 h-5" /> },
    { id: 'mood', label: strings.mood, icon: <Smile className="w-5 h-5" /> },
  ];

  const secondaryTabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'learn-salah', label: strings.learnSalah, icon: <Compass className="w-5 h-5" /> },
    { id: 'women', label: strings.women, icon: <Heart className="w-5 h-5 text-rose-400" /> },
    { id: 'learning', label: strings.learning, icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'ramadan', label: strings.ramadan, icon: <Moon className="w-5 h-5 text-amber-400" /> },
    { id: 'good-deeds', label: strings.goodDeeds, icon: <Gift className="w-5 h-5 text-emerald-400" /> },
    { id: 'community', label: strings.community, icon: <Users className="w-5 h-5" /> },
    { id: 'dashboard', label: strings.dashboard, icon: <LayoutDashboard className="w-5 h-5" /> },
  ];

  const handleTabClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setShowMoreDrawer(false);
  };

  return (
    <>
      {/* Desktop Horizontal Sub-Header Bar */}
      <nav className="hidden md:block bg-[#111613] border-b border-[#C5A059]/20 text-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-auto py-2.5 no-scrollbar">
          <div className="flex items-center gap-1.5">
            {[...mainTabs, ...secondaryTabs].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  id={`nav-tab-desktop-${tab.id}`}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C5A059] text-[#0A0C0B] font-bold shadow-md shadow-[#C5A059]/10'
                      : 'hover:bg-[#141A17] text-white/70 hover:text-[#C5A059] border border-transparent hover:border-[#C5A059]/20'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Fixed Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111613]/95 backdrop-blur-lg border-t border-[#C5A059]/20 text-white/80">
        <div className="grid grid-cols-6 h-16 items-center px-1">
          {mainTabs.slice(0, 5).map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                id={`nav-tab-mobile-${tab.id}`}
                className={`flex flex-col items-center justify-center h-full gap-1 transition-colors ${
                  isActive ? 'text-[#C5A059] font-bold' : 'hover:text-[#C5A059] text-white/60'
                }`}
              >
                {tab.icon}
                <span className="text-[10px] leading-none truncate max-w-[55px] text-center">
                  {tab.label.split(' ')[0]}
                </span>
              </button>
            );
          })}

          {/* More Drawer Trigger */}
          <button
            onClick={() => setShowMoreDrawer(!showMoreDrawer)}
            id="nav-tab-mobile-more"
            className={`flex flex-col items-center justify-center h-full gap-1 transition-colors ${
              showMoreDrawer ? 'text-[#C5A059] font-bold' : 'hover:text-[#C5A059] text-white/60'
            }`}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-[10px] leading-none">More</span>
          </button>
        </div>
      </nav>

      {/* Mobile "More" Drawer Overlay */}
      {showMoreDrawer && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end flex-col animate-fade-in">
          <div className="bg-[#111613] border-t border-[#C5A059]/30 rounded-t-3xl p-5 text-white max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 border-b border-[#C5A059]/20 pb-3">
              <h3 className="font-serif italic text-lg text-[#C5A059] font-semibold">Explore Noor Features</h3>
              <button
                onClick={() => setShowMoreDrawer(false)}
                className="p-1.5 rounded-xl bg-[#141A17] text-[#C5A059] border border-[#C5A059]/30"
                id="close-more-drawer-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleTabClick('mood')}
                className={`flex items-center gap-3 p-3 rounded-2xl border text-sm font-medium transition-all ${
                  activeTab === 'mood'
                    ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] font-bold'
                    : 'bg-[#141A17] border-white/5 text-white/80 hover:border-[#C5A059]/30'
                }`}
              >
                <Smile className="w-5 h-5 text-[#C5A059]" />
                <span>{strings.mood}</span>
              </button>

              {secondaryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-3 p-3 rounded-2xl border text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#C5A059] text-[#0A0C0B] border-[#C5A059] font-bold'
                      : 'bg-[#141A17] border-white/5 text-white/80 hover:border-[#C5A059]/30'
                  }`}
                >
                  {tab.icon}
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
