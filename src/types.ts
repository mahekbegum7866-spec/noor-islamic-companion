export type AppLanguage = 'en' | 'ur' | 'hi' | 'ar';

export type ActiveTab =
  | 'home'
  | 'prayer'
  | 'quran'
  | 'duas'
  | 'learn-salah'
  | 'women'
  | 'dhikr'
  | 'mood'
  | 'learning'
  | 'ramadan'
  | 'good-deeds'
  | 'community'
  | 'dashboard';

export interface PrayerTime {
  id: 'fajr' | 'sunrise' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
  nameEn: string;
  nameAr: string;
  nameUr: string;
  nameHi: string;
  time: string; // e.g. "05:15 AM"
  completed: boolean;
}

export interface PrayerLog {
  date: string; // YYYY-MM-DD
  fajr: boolean;
  dhuhr: boolean;
  asr: boolean;
  maghrib: boolean;
  isha: boolean;
  missedQadaCount: {
    fajr: number;
    dhuhr: number;
    asr: number;
    maghrib: number;
    isha: number;
  };
}

export interface Ayah {
  numberInSurah: number;
  globalNumber: number;
  arabicText: string;
  transliteration: string;
  translationEn: string;
  translationUr: string;
  translationHi: string;
  translationAr: string;
  tafsirSummary: string;
  audioUrl?: string;
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameEnglish: string;
  nameTranslation: string;
  revelationType: 'Meccan' | 'Medinan';
  totalAyahs: number;
  ayahs: Ayah[];
}

export interface DuaCategory {
  id: string;
  nameEn: string;
  nameUr: string;
  nameHi: string;
  nameAr: string;
  iconName: string;
}

export interface DuaItem {
  id: string;
  categoryId: string;
  titleEn: string;
  titleUr: string;
  titleHi: string;
  titleAr: string;
  arabicText: string;
  transliteration: string;
  translationEn: string;
  translationUr: string;
  translationHi: string;
  translationAr: string;
  benefits: string;
  source: string;
  audioText?: string;
  isBookmarked?: boolean;
}

export interface SalahStep {
  stepNumber: number;
  titleEn: string;
  titleUr: string;
  titleHi: string;
  titleAr: string;
  arabicRecitation?: string;
  transliteration?: string;
  translationEn?: string;
  descriptionEn: string;
  descriptionUr: string;
  descriptionHi: string;
  descriptionAr: string;
  guidanceFor: 'all' | 'men' | 'women' | 'children';
  posture: 'standing' | 'ruku' | 'sujud' | 'sitting' | 'wudu';
  audioRecitation?: string;
}

export interface WuduStep {
  stepNumber: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  arabicDua?: string;
  transliteration?: string;
  translationEn?: string;
}

export interface CommonSalahMistake {
  titleEn: string;
  descriptionEn: string;
  correctionEn: string;
}

export interface PeriodCycleLog {
  startDate: string; // YYYY-MM-DD
  endDate?: string;
  notes?: string;
}

export interface DhikrPreset {
  id: string;
  titleEn: string;
  titleAr: string;
  titleUr: string;
  arabicText: string;
  transliteration: string;
  translationEn: string;
  targetCount: number;
  category: 'morning' | 'evening' | 'post-prayer' | 'general';
  virtue: string;
}

export type MoodType =
  | 'sad'
  | 'anxiety'
  | 'fear'
  | 'stress'
  | 'lonely'
  | 'angry'
  | 'hopeless'
  | 'confused'
  | 'grateful'
  | 'happy'
  | 'guilty';

export interface MoodInfo {
  key: MoodType;
  labelEn: string;
  labelUr: string;
  labelHi: string;
  labelAr: string;
  emoji: string;
  colorBg: string;
}

export interface GuidanceResult {
  mood: string;
  reflection: string;
  quranVerses: {
    surahName: string;
    surahNumber?: number;
    ayahNumber?: number;
    arabicText: string;
    translation: string;
    explanation?: string;
  }[];
  hadith: {
    arabicText?: string;
    translation: string;
    source: string;
    lesson?: string;
  };
  duas: {
    title?: string;
    arabicText: string;
    transliteration?: string;
    translation: string;
    benefit?: string;
  }[];
  recommendedDhikr: {
    arabicText: string;
    transliteration: string;
    translation: string;
    recommendedCount?: number;
    virtue?: string;
  };
  isFallback?: boolean;
}

export interface NameOfAllah {
  number: number;
  arabic: string;
  transliteration: string;
  meaningEn: string;
  meaningUr: string;
  meaningHi: string;
  meaningAr: string;
  explanation: string;
}

export interface ProphetStory {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  summary: string;
  keyLessons: string[];
}

export interface SahabahStory {
  id: string;
  nameEn: string;
  nameAr: string;
  role: string;
  summary: string;
  lessons: string[];
}

export interface QuizQuestion {
  id: string;
  target: 'children' | 'adults';
  questionEn: string;
  optionsEn: string[];
  correctIndex: number;
  explanationEn: string;
}

export interface GoodDeedChallenge {
  id: string;
  titleEn: string;
  titleUr: string;
  titleHi: string;
  titleAr: string;
  description: string;
  points: number;
  completed: boolean;
}

export interface GoodDeedJournalEntry {
  id: string;
  date: string;
  text: string;
  category: string;
}

export interface UserStats {
  prayerStreakDays: number;
  quranPagesRead: number;
  totalTasbihCount: number;
  goodDeedsCompleted: number;
  lastActiveDate: string;
  qadaPending: {
    fajr: number;
    dhuhr: number;
    asr: number;
    maghrib: number;
    isha: number;
  };
  achievements: {
    id: string;
    titleEn: string;
    descriptionEn: string;
    icon: string;
    unlocked: boolean;
  }[];
}
