import React from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { LayoutDashboard, Award, Flame, Sparkles, Shield, CheckCircle, Download, Trash2 } from 'lucide-react';

interface DashboardSectionProps {
  language: AppLanguage;
  prayerStreak: number;
  tasbihCount: number;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  language,
  prayerStreak,
  tasbihCount,
}) => {
  const strings = UI_STRINGS[language];

  const badges = [
    { title: 'Fajr Defender', desc: 'Logged 7 consecutive Fajr prayers', earned: prayerStreak >= 7, icon: '🕌' },
    { title: 'Tasbih Master', desc: 'Completed over 100 Dhikr counts', earned: tasbihCount >= 100, icon: '✨' },
    { title: 'Quran Seeker', desc: 'Read Daily Ayah & Tafsir', earned: true, icon: '📖' },
    { title: 'Sunnah Learner', desc: 'Completed Wudu & Salah tutorial', earned: true, icon: '🎓' },
    { title: 'Ramadan Ready', desc: 'Configured Suhoor & Iftar alerts', earned: true, icon: '🌙' },
  ];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
          Personal Analytics & Milestones
        </span>
        <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
          <LayoutDashboard className="w-6 h-6 text-[#C5A059]" />
          <span>{strings.dashboard}</span>
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Your personal spiritual analytics, achievement badges, and privacy settings.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#141A17] text-white p-6 rounded-3xl shadow-lg border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
            <Flame className="w-5 h-5 text-[#C5A059]" />
            <span>Prayer Consistency Streak</span>
          </div>
          <p className="font-serif italic font-bold text-4xl text-[#C5A059]">{prayerStreak} Days</p>
          <p className="text-xs text-white/60">Keep going! Allah loves consistent deeds, even if small.</p>
        </div>

        <div className="bg-[#141A17] text-white p-6 rounded-3xl shadow-lg border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <span>Total Tasbih Recitations</span>
          </div>
          <p className="font-serif italic font-bold text-4xl text-[#C5A059]">{tasbihCount}</p>
          <p className="text-xs text-white/60">SubhanAllah, Alhamdulillah, Allahu Akbar</p>
        </div>
      </div>

      {/* Spiritual Badges */}
      <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
        <h3 className="font-serif italic font-bold text-lg text-[#C5A059] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#C5A059]" />
          <span>Spiritual Achievement Badges</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                b.earned
                  ? 'bg-[#1B4332]/50 border-[#C5A059]/40 text-[#E0E0E0]'
                  : 'bg-[#0A0C0B] border-white/5 opacity-50 text-white/50'
              }`}
            >
              <span className="text-3xl">{b.icon}</span>
              <div>
                <h4 className="font-bold text-sm text-[#E0E0E0]">{b.title}</h4>
                <p className="text-[11px] text-white/50 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
