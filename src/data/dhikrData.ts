import { DhikrPreset } from '../types';

export const DHIKR_PRESETS: DhikrPreset[] = [
  {
    id: 'subhanallah',
    titleEn: 'SubhanAllah (Glory be to Allah)',
    titleAr: 'سُبْحَانَ اللَّهِ',
    titleUr: 'سبحان اللہ',
    arabicText: 'سُبْحَانَ اللَّهِ',
    transliteration: 'SubhaanAllah',
    translationEn: 'Glory be to Allah (Free is Allah from all imperfections)',
    targetCount: 33,
    category: 'post-prayer',
    virtue: 'Plants a tree in Jannah and cleanses minor sins like foam on the sea.'
  },
  {
    id: 'alhamdulillah',
    titleEn: 'Alhamdulillah (Praise be to Allah)',
    titleAr: 'الْحَمْدُ لِلَّهِ',
    titleUr: 'الحمد للہ',
    arabicText: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    translationEn: 'All praise is due to Allah',
    targetCount: 33,
    category: 'post-prayer',
    virtue: 'Fills the scale of good deeds on Judgment Day.'
  },
  {
    id: 'allahuakbar',
    titleEn: 'Allahu Akbar (Allah is Greatest)',
    titleAr: 'اللَّهُ أَكْبَرُ',
    titleUr: 'اللہ اکبر',
    arabicText: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    translationEn: 'Allah is the Greatest',
    targetCount: 34,
    category: 'post-prayer',
    virtue: 'Fills the space between heavens and earth with divine light.'
  },
  {
    id: 'astaghfirullah',
    titleEn: 'Astaghfirullah (I seek forgiveness from Allah)',
    titleAr: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    titleUr: 'استغفر اللہ واتوب الیہ',
    arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullaaha wa atoobu ilaih',
    translationEn: 'I seek forgiveness from Allah and repent to Him',
    targetCount: 100,
    category: 'morning',
    virtue: 'Prophet Muhammad (PBUH) recited this over 70-100 times daily. Opens doors of sustenance and relief.'
  },
  {
    id: 'lailahaillallah',
    titleEn: 'La ilaha illallah (No deity except Allah)',
    titleAr: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ',
    titleUr: 'لا الہ الا اللہ وحدہ لا شریک لہ',
    arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'Laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa \'alaa kulli shai-in Qadeer',
    translationEn: 'None has the right to be worshipped except Allah alone, without partner. To Him belongs kingdom and praise, and He is over all things competent.',
    targetCount: 100,
    category: 'morning',
    virtue: 'Equal to freeing 10 slaves, 100 good deeds written, 100 sins erased, and protected from Shaytan all day.'
  },
  {
    id: 'durood',
    titleEn: 'Salawat upon the Prophet (PBUH)',
    titleAr: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
    titleUr: 'اللہم صل علی محمد وعلی آل محمد',
    arabicText: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
    transliteration: 'Allaahumma salli \'alaa Muhammadin wa \'alaa aali Muhammad',
    translationEn: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad',
    targetCount: 100,
    category: 'evening',
    virtue: 'Whoever sends 1 blessing upon the Prophet, Allah sends 10 blessings upon them, forgives 10 sins, and raises them 10 ranks.'
  }
];
