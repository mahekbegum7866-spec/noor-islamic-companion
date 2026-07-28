import { GuidanceResult, MoodInfo, MoodType } from '../types';

export const MOOD_LIST: MoodInfo[] = [
  { key: 'sad', labelEn: 'Sadness', labelUr: 'غمگین', labelHi: 'उदासीनता', labelAr: 'الحزن', emoji: '🌧️', colorBg: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/40 dark:border-blue-800' },
  { key: 'anxiety', labelEn: 'Anxiety', labelUr: 'پریشانی', labelHi: 'घबराहट', labelAr: 'القلق', emoji: '🌪️', colorBg: 'bg-teal-50 border-teal-200 text-teal-900 dark:bg-teal-950/40 dark:border-teal-800' },
  { key: 'fear', labelEn: 'Fear', labelUr: 'خوف', labelHi: 'डर', labelAr: 'الخوف', emoji: '🛡️', colorBg: 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800' },
  { key: 'stress', labelEn: 'Stress', labelUr: 'دباؤ / تناؤ', labelHi: 'तनाव', labelAr: 'الضغط النفسي', emoji: '⚡', colorBg: 'bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-950/40 dark:border-purple-800' },
  { key: 'lonely', labelEn: 'Lonely', labelUr: 'تنہائی', labelHi: 'अकेलापन', labelAr: 'الوحدة', emoji: '🌙', colorBg: 'bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-900/60 dark:border-slate-800' },
  { key: 'angry', labelEn: 'Angry', labelUr: 'غصہ', labelHi: 'गुस्सा', labelAr: 'الغضب', emoji: '🔥', colorBg: 'bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/40 dark:border-rose-800' },
  { key: 'hopeless', labelEn: 'Hopeless', labelUr: 'مایوس', labelHi: 'मायूस', labelAr: 'اليأس', emoji: '🌅', colorBg: 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800' },
  { key: 'confused', labelEn: 'Confused', labelUr: 'الجھن', labelHi: 'उलझन', labelAr: 'الحيرة', emoji: '🧭', colorBg: 'bg-indigo-50 border-indigo-200 text-indigo-900 dark:bg-indigo-950/40 dark:border-indigo-800' },
  { key: 'grateful', labelEn: 'Grateful', labelUr: 'شکر گزار', labelHi: 'शुक्रगुज़ार', labelAr: 'الشكر', emoji: '🌸', colorBg: 'bg-emerald-100 border-emerald-300 text-emerald-950 dark:bg-emerald-900/50 dark:border-emerald-700' },
  { key: 'happy', labelEn: 'Happy', labelUr: 'خوش', labelHi: 'ख़ुश', labelAr: 'الفرح', emoji: '☀️', colorBg: 'bg-amber-100 border-amber-300 text-amber-950 dark:bg-amber-900/50 dark:border-amber-700' },
  { key: 'guilty', labelEn: 'Guilty', labelUr: 'ندامت / شرمندگی', labelHi: 'शर्मिंदगी', labelAr: 'الندم', emoji: '🤲', colorBg: 'bg-cyan-50 border-cyan-200 text-cyan-900 dark:bg-cyan-950/40 dark:border-cyan-800' },
];

export const STATIC_MOOD_GUIDANCE: Record<MoodType, GuidanceResult> = {
  sad: {
    mood: 'Sad',
    reflection: 'Allah sees every tear you shed in silence. Sadness is not a sign of weak faith; even the Prophets experienced grief. Turn your pain into whispered prayers to Ar-Rahman.',
    quranVerses: [
      {
        surahName: 'Surah Ash-Sharh',
        surahNumber: 94,
        ayahNumber: 5,
        arabicText: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.',
        explanation: 'The word ease is repeated twice to assure believers that ease is guaranteed alongside every difficulty.'
      }
    ],
    hadith: {
      arabicText: 'مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلاَ وَصَبٍ وَلاَ هَمٍّ وَلاَ حَزَنٍ وَلاَ أَذًى وَلاَ غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلاَّ كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ',
      translation: 'No fatigue, illness, anxiety, sorrow, harm, or distress afflicts a Muslim—even if it were the prick of a thorn—except that Allah expiates some of their sins by it.',
      source: 'Sahih al-Bukhari 5641'
    },
    duas: [
      {
        title: 'Dua for Sorrow & Anxiety',
        arabicText: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ',
        transliteration: 'Allaahumma innee a\'oozu bika minal-hammi wal-hazan, wal-\'ajzi wal-kasal',
        translation: 'O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness.',
        benefit: 'Taught by the Prophet (PBUH) to cleanse the heart from emotional burdens.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
      transliteration: 'Laa hawla wa laa quwwata illaa billaah',
      translation: 'There is no power nor might except with Allah',
      recommendedCount: 33,
      virtue: 'A treasure from the treasures of Paradise that relieves 99 forms of distress.'
    }
  },
  anxiety: {
    mood: 'Anxiety',
    reflection: 'Anxiety comes when we try to carry tomorrow’s burden with today’s strength. Hand over the outcomes to Al-Wakeel (The Best Disposer of Affairs) and feel peace wash over your chest.',
    quranVerses: [
      {
        surahName: 'Surah Ar-Ra\'d',
        surahNumber: 13,
        ayahNumber: 28,
        arabicText: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
        translation: 'Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts find rest.',
        explanation: 'True mental serenity comes from anchoring the mind in remembrance of the Almighty Creator.'
      }
    ],
    hadith: {
      translation: 'How wonderful is the affair of the believer, for all his affairs are good. If something good happens to him, he gives thanks, and that is good for him. If something bad happens, he bears it with patience, and that is good for him.',
      source: 'Sahih Muslim 2999'
    },
    duas: [
      {
        title: 'Dua for Immediate Tranquility',
        arabicText: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
        transliteration: 'Hasbunallaahu wa ni\'mal-wakeel',
        translation: 'Sufficient for us is Allah, and [He is] the best Disposer of affairs.',
        benefit: 'Recited by Prophet Ibrahim (AS) in the fire, turning heat into coolness and safety.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ',
      transliteration: 'Hasbiyallaahu laa ilaaha illaa Huwa \'alaihi tawakkaltu',
      translation: 'Sufficient for me is Allah; there is no deity except Him. On Him I have relied.',
      recommendedCount: 7,
      virtue: 'Whoever recites this 7 times in morning and evening, Allah will suffice them against whatever worries them.'
    }
  },
  fear: {
    mood: 'Fear',
    reflection: 'When fear surrounds you, remember that Allah is Al-Aziz (The Almighty) and Al-Hafiz (The Guardian). No creation can harm or benefit you except by His divine permission.',
    quranVerses: [
      {
        surahName: 'Surah At-Tawbah',
        surahNumber: 9,
        ayahNumber: 40,
        arabicText: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
        translation: 'Do not grieve; indeed Allah is with us.',
        explanation: 'Spoken by Prophet Muhammad (PBUH) to Abu Bakr (RA) in the Cave of Thawr under intense danger.'
      }
    ],
    hadith: {
      translation: 'Know that if the entire nation were to gather together to benefit you, they could not benefit you except with something Allah had already written for you. And if they were to gather together to harm you, they could not harm you except with something Allah had already written against you.',
      source: 'Jami at-Tirmidhi 2516 (Sahih)'
    },
    duas: [
      {
        title: 'Protection from All Harm',
        arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Bismillaahil-laze laa yadurru ma\'as-mihi shai-un fil-ardi wa laa fis-samaa-i wa Huwas-Samee\'ul-\'Aleem',
        translation: 'In the name of Allah with Whose name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, All-Knowing.',
        benefit: 'Recited 3 times morning and evening, no sudden calamity will afflict the person.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      transliteration: 'A\'oozu bikalimaatillaahit-taammaati min sharri maa khalaq',
      translation: 'I seek refuge in the Perfect Words of Allah from the evil of what He has created',
      recommendedCount: 3,
      virtue: 'Complete spiritual shield against physical and subtle dangers.'
    }
  },
  stress: {
    mood: 'Stress',
    reflection: 'Take a deep breath. Allah does not burden any soul beyond what it can bear. You do not need to figure out the whole journey today; just trust Allah for the next step.',
    quranVerses: [
      {
        surahName: 'Surah Al-Baqarah',
        surahNumber: 2,
        ayahNumber: 286,
        arabicText: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        translation: 'Allah does not charge a soul except [with that within] its capacity.',
        explanation: 'A Divine reassurance that every trial you face is matched with inner strength given by Allah.'
      }
    ],
    hadith: {
      translation: 'Make things easy for people, and do not make them difficult. Give glad tidings, and do not cause people to run away.',
      source: 'Sahih al-Bukhari 69'
    },
    duas: [
      {
        title: 'Dua for Easing Difficulties',
        arabicText: 'اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً',
        transliteration: 'Allaahumma laa sahla illaa maa ja\'altahu sahlan, wa Anta taj\'alul-hazna izaa shi\'ta sahlaa',
        translation: 'O Allah, there is no ease except in that which You have made easy, and You make the difficult easy if You wish.',
        benefit: 'Softens overwhelming tasks and brings clarity to complex situations.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
      transliteration: 'Yaa Hayyu yaa Qayyoemu birahmatika astagheeth',
      translation: 'O Ever-Living One, O Sustainer of existence, in Your mercy I seek relief',
      recommendedCount: 11,
      virtue: 'Recited by the Prophet (PBUH) whenever distressed.'
    }
  },
  lonely: {
    mood: 'Lonely',
    reflection: 'You are never truly alone. The One who created the vast universe is closer to you than your own jugular vein. Turn your solitude into intimate conversation (Munajat) with your Creator.',
    quranVerses: [
      {
        surahName: 'Surah Qaf',
        surahNumber: 50,
        ayahNumber: 16,
        arabicText: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        translation: 'And We are closer to him than his jugular vein.',
        explanation: 'Allah is intimately aware of your thoughts, feelings, and silent longings.'
      }
    ],
    hadith: {
      translation: 'Allah Almighty says: "I am as My servant thinks of Me, and I am with him when he remembers Me. If he remembers Me in himself, I remember him in Myself..."',
      source: 'Sahih al-Bukhari 7405, Sahih Muslim'
    },
    duas: [
      {
        title: 'Dua for Companionship & Love',
        arabicText: 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
        transliteration: 'Rabbi innee limaaa anzalta ilayya min khairin faqeer',
        translation: 'My Lord, indeed I am, for whatever good You would send down to me, in need.',
        benefit: 'Recited by Prophet Musa (AS) when alone in Madyan; Allah provided him home, family, and safety.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
      transliteration: 'Subhaanallaahi wa bihamdihee Subhaanallaahil-\'Azeem',
      translation: 'Glory be to Allah and His praise, Glory be to Allah the Supreme',
      recommendedCount: 33,
      virtue: 'Two words light on the tongue, heavy on the scales, and beloved to Ar-Rahman.'
    }
  },
  angry: {
    mood: 'Angry',
    reflection: 'Anger is a spark from Shaytan. True strength is not overpowering others, but mastering your self when provocation arises. Take a pause, change your posture, perform Wudu, and seek refuge in Allah.',
    quranVerses: [
      {
        surahName: 'Surah Ali \'Imran',
        surahNumber: 3,
        ayahNumber: 134,
        arabicText: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',
        translation: '...and who restrain anger and who pardon the people - and Allah loves the doers of good.',
        explanation: 'Restraining anger is one of the highest qualities of dwellers of Paradise.'
      }
    ],
    hadith: {
      translation: 'The strong man is not the one who can wrestle others down; rather, the strong man is the one who controls himself at the time of anger.',
      source: 'Sahih al-Bukhari 6114, Sahih Muslim'
    },
    duas: [
      {
        title: 'Seeking Refuge from Anger',
        arabicText: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        transliteration: 'A\'oozu billaahi minash-Shaitaanir-Rajeem',
        translation: 'I seek refuge in Allah from Satan, the accursed.',
        benefit: 'Instantly extinguishes the heat of anger.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'أَسْتَغْفِرُ اللَّهَ',
      transliteration: 'Astaghfirullah',
      translation: 'I seek forgiveness from Allah',
      recommendedCount: 33,
      virtue: 'Cools down boiling emotions and restores clarity.'
    }
  },
  hopeless: {
    mood: 'Hopeless',
    reflection: 'Never lose hope in the mercy of Allah. The dawn only comes after the darkest hour of night. Turn your hopeless feelings into a passionate plea to the Almighty.',
    quranVerses: [
      {
        surahName: 'Surah Az-Zumar',
        surahNumber: 39,
        ayahNumber: 53,
        arabicText: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفرُ الذُّنُوبَ جَمِيعًا',
        translation: 'Say, "O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful."',
        explanation: 'The most hope-giving verse in the entire Quran.'
      }
    ],
    hadith: {
      translation: 'Allah created mercy in one hundred parts. He retained ninety-nine parts with Himself and sent down one part to earth. From that single part, all creatures show compassion to one another.',
      source: 'Sahih al-Bukhari 6000'
    },
    duas: [
      {
        title: 'Dua of Prophet Yunus (AS)',
        arabicText: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
        transliteration: 'Laa ilaaha illaaa Anta Subhaanaka innee kuntu minaz-zaalimeen',
        translation: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
        benefit: 'Relieves hopeless situations when supplicated with heart-felt remorse.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'يَا أَرْحَمَ الرَّاحِمِينَ',
      transliteration: 'Yaa Arhamar-Raahimeen',
      translation: 'O Most Merciful of those who show mercy',
      recommendedCount: 21,
      virtue: 'An angel is appointed to respond "Ar-Rahman has heard you, ask what you wish!".'
    }
  },
  confused: {
    mood: 'Confused',
    reflection: 'When path seems unclear, seek light from Al-Hadi (The Guide). Istikhara and heartfelt du\'a clear mental fog and align your choices with divine wisdom.',
    quranVerses: [
      {
        surahName: 'Surah At-Talaq',
        surahNumber: 65,
        ayahNumber: 2,
        arabicText: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا • وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
        translation: 'And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect.',
        explanation: 'Righteous consciousness opens locked doors and brings unimagined clarity.'
      }
    ],
    hadith: {
      translation: 'Consulting Allah through Istikhara never brings regret.',
      source: 'Sahih al-Bukhari'
    },
    duas: [
      {
        title: 'Dua for Guidance & Righteous Path',
        arabicText: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
        transliteration: 'Rabbanaaa aatinaa mil ladunka rahmatanw wa hayyi\' lanaa min amrinaa rashadaa',
        translation: 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.',
        benefit: 'The Dua of the People of the Cave (Ashab al-Kahf) when facing impossible choices.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      transliteration: 'Ihdinas-Siraatal-Mustaqeem',
      translation: 'Guide us to the straight path',
      recommendedCount: 17,
      virtue: 'The central prayer of Surah Al-Fatiha.'
    }
  },
  grateful: {
    mood: 'Grateful',
    reflection: 'Alhamdulillah! A grateful heart is a magnet for further blessings. Gratitude preserves current gifts and unlocks extra bounty from Allah.',
    quranVerses: [
      {
        surahName: 'Surah Ibrahim',
        surahNumber: 14,
        ayahNumber: 7,
        arabicText: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        translation: 'If you are grateful, I will surely increase you [in favor].',
        explanation: 'A divine promise that Shukr guarantees expansion of blessings.'
      }
    ],
    hadith: {
      translation: 'Whoever does not thank people does not thank Allah.',
      source: 'Sunan Abi Dawud 4811'
    },
    duas: [
      {
        title: 'Dua of Gratitude & Righteous Deeds',
        arabicText: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ',
        transliteration: 'Rabbi awzi\'neee an ashkura ni\'matakal-lateee an\'amta \'alayya wa \'alaa waalidayya',
        translation: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents.',
        benefit: 'Dua of Prophet Sulaiman (AS) acknowledging divine favors.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      transliteration: 'Alhamdu lillaahi Rabbil-\'Aalameen',
      translation: 'Praise be to Allah Lord of the Worlds',
      recommendedCount: 100,
      virtue: 'The best supplication is Alhamdulillah.'
    }
  },
  happy: {
    mood: 'Happy',
    reflection: 'Joy is a gift from Ar-Rahman! Channel your happiness into acts of charity, sharing smiles, and remembering Allah who blessed you with this moment.',
    quranVerses: [
      {
        surahName: 'Surah An-Nahl',
        surahNumber: 16,
        ayahNumber: 53,
        arabicText: 'وَمَا بِكُم مِّن نِّعْمَةٍ فَمِنَ اللَّهِ',
        translation: 'And whatever you have of favor - it is from Allah.',
        explanation: 'Recognizing that every joy originates from Allah protects against arrogance.'
      }
    ],
    hadith: {
      translation: 'Your smiling in the face of your brother is charity for you.',
      source: 'Jami at-Tirmidhi 1956'
    },
    duas: [
      {
        title: 'Dua when Receiving Pleasing News',
        arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
        transliteration: 'Alhamdu lillaahil-laze bini\'matihee tatimmus-saalihaat',
        translation: 'Praise be to Allah by Whose grace good deeds are completed.',
        benefit: 'Recited by the Prophet (PBUH) whenever he experienced something joyful.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ',
      transliteration: 'Maa shaaa-Allaahu laa quwwata illaa billaah',
      translation: 'What Allah has willed! There is no power except with Allah',
      recommendedCount: 33,
      virtue: 'Protects your blessings and wealth from evil eye.'
    }
  },
  guilty: {
    mood: 'Guilty',
    reflection: 'Fearing your sins shows that your heart is alive with Iman. Guilt is the first step toward Tawbah (repentance). Allah loves the repentant more than those who feel self-righteous.',
    quranVerses: [
      {
        surahName: 'Surah Az-Zumar',
        surahNumber: 39,
        ayahNumber: 53,
        arabicText: 'إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ',
        translation: 'Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.',
        explanation: 'No matter how deep the mistake, Tawbah instantly washes it clean.'
      }
    ],
    hadith: {
      translation: 'The one who repents from sin is like one who has no sin at all.',
      source: 'Sunan Ibn Majah 4250 (Hasan)'
    },
    duas: [
      {
        title: 'Dua for Forgiveness (Prophet Adam\'s Repentance)',
        arabicText: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
        transliteration: 'Rabbanaa zalamnaaa anfusanaa wa il-lam taghfir lanaa wa tarhamnaa lanakoonanna minal-khaasireen',
        translation: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
        benefit: 'Accepted by Allah from Adam & Hawa (AS) granting complete forgiveness.'
      }
    ],
    recommendedDhikr: {
      arabicText: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ',
      transliteration: 'Astaghfirullaahal-\'Azeemal-laze laa ilaaha illaa Huwal-Hayyul-Qayyoemu wa atoobu ilaih',
      translation: 'I seek forgiveness from Allah the Magnificent, besides Whom there is no deity, the Ever-Living, the Sustainer, and I turn to Him in repentance',
      recommendedCount: 100,
      virtue: 'Forgives sins even if as vast as the foam on the ocean.'
    }
  }
};
