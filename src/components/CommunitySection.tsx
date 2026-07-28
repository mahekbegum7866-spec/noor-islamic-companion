import React, { useState } from 'react';
import { AppLanguage } from '../types';
import { UI_STRINGS } from '../data/translations';
import { Users, Heart, Share2, Award, Plus, MessageSquare } from 'lucide-react';

interface CommunitySectionProps {
  language: AppLanguage;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ language }) => {
  const strings = UI_STRINGS[language];
  const [familyMembers, setFamilyMembers] = useState([
    { name: 'Father (Abu)', streak: 12, fajrDone: true },
    { name: 'Mother (Ammi)', streak: 15, fajrDone: true },
    { name: 'Brother (Ali)', streak: 8, fajrDone: false },
  ]);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-bold mb-1">
          Brotherhood & Family Circle
        </span>
        <h2 className="font-serif italic font-bold text-2xl text-[#C5A059] flex items-center gap-2">
          <Users className="w-6 h-6 text-[#C5A059]" />
          <span>{strings.community}</span>
        </h2>
        <p className="text-xs text-white/50 mt-1">
          {strings.familyGoalInfo}
        </p>
      </div>

      {/* Family Prayer Circle */}
      <div className="bg-[#141A17] border border-white/5 p-6 rounded-3xl shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif italic font-bold text-lg text-[#C5A059]">
            Family Prayer Circle
          </h3>
          <button className="px-3.5 py-2 rounded-2xl bg-[#C5A059] text-[#0A0C0B] font-bold text-xs flex items-center gap-1 shadow-sm">
            <Plus className="w-4 h-4 text-[#0A0C0B]" />
            <span>Invite Member</span>
          </button>
        </div>

        <div className="space-y-3">
          {familyMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0A0C0B] border border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#1B4332] text-[#C5A059] font-serif italic font-bold flex items-center justify-center text-sm border border-[#C5A059]/20">
                  {member.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#E0E0E0]">{member.name}</h4>
                  <span className="text-xs text-white/50">Streak: {member.streak} Days</span>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                member.fajrDone
                  ? 'bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20'
                  : 'bg-[#C5A059]/20 text-[#C5A059]'
              }`}>
                {member.fajrDone ? 'Fajr Logged ✓' : 'Pending Fajr'}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
