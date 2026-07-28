import { NameOfAllah, ProphetStory, QuizQuestion, SahabahStory } from '../types';

export const NAMES_OF_ALLAH: NameOfAllah[] = [
  { number: 1, arabic: 'الرَّحْمَٰنُ', transliteration: 'Ar-Rahman', meaningEn: 'The Entirely Merciful', meaningUr: 'بڑا مہربان', meaningHi: 'सब पर रहम करने वाला', meaningAr: 'الرحيم بجميع خلقه', explanation: 'He whose mercy encompasses all created beings in the universe.' },
  { number: 2, arabic: 'الرَّحِيمُ', transliteration: 'Ar-Raheem', meaningEn: 'The Especially Merciful', meaningUr: 'نہایت رحم والا', meaningHi: 'विशेष रहम फरमाने वाला', meaningAr: 'الخاص برحمته للمؤمنين', explanation: 'He who bestows continuous and special mercy upon believers.' },
  { number: 3, arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', meaningEn: 'The King / Sovereign', meaningUr: 'سچا بادشاہ', meaningHi: 'सच्चा बादशाह', meaningAr: 'الملك الحق لكل شيء', explanation: 'The absolute ruler and supreme controller of all kingdoms.' },
  { number: 4, arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', meaningEn: 'The Most Holy', meaningUr: 'عائب سے پاک', meaningHi: 'हर ऐब से पाक', meaningAr: 'المنزه عن كل عيب', explanation: 'Pure and free from any defect, flaw, or anthropomorphic resemblance.' },
  { number: 5, arabic: 'السَّلَامُ', transliteration: 'As-Salam', meaningEn: 'The Giver of Peace', meaningUr: 'سلامتی دینے والا', meaningHi: 'सलामती देने वाला', meaningAr: 'مصدر السلام والأمان', explanation: 'The source of ultimate peace, safety, and tranquility for hearts.' },
  { number: 6, arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', meaningEn: 'The Granter of Security', meaningUr: 'امان دینے والا', meaningHi: 'अमन देने वाला', meaningAr: 'المصدق لرسله والواهب للأمن', explanation: 'He who grants faith and complete safety from fear.' },
  { number: 7, arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', meaningEn: 'The Guardian / Overseer', meaningUr: 'نگہبان', meaningHi: 'निगहबान', meaningAr: 'الرقيب الحافظ لكل شيء', explanation: 'The supreme protector who watches over and preserves all things.' },
  { number: 8, arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', meaningEn: 'The All-Mighty', meaningUr: 'زبردست / غالب', meaningHi: 'सब पर ग़ालिब', meaningAr: 'القوي الذي لا يُغلب', explanation: 'The invincible, honorable Lord whom nothing can overcome.' },
  { number: 9, arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', meaningEn: 'The Restorer / Compeller', meaningUr: 'ٹوٹی ہوئی چیزیں جوڑنے والا', meaningHi: 'टूटी हुई चीज़ों को जोड़ने वाला', meaningAr: 'المصلح لأحوال عباده', explanation: 'He who mends broken hearts, restores loss, and executes His divine will.' },
  { number: 10, arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', meaningEn: 'The Supreme / Majestic', meaningUr: 'بڑائی والا', meaningHi: 'बड़ाई वाला', meaningAr: 'المنفرد بالعظمة والكبرياء', explanation: 'The Possessor of supreme greatness and majesty.' }
];

export const PROPHET_STORIES: ProphetStory[] = [
  {
    id: 'p1',
    nameEn: 'Prophet Adam (AS)',
    nameAr: 'آدم عليه السلام',
    titleEn: 'The First Human & Prophet',
    summary: 'Adam (AS) was created by Allah from clay as the father of humanity. Allah taught him the names of all things. When Adam and Hawa erred, they immediately made sincere Tawbah, teaching humanity how to repent.',
    keyLessons: [
      'Sincere repentance (Tawbah) wipes away mistakes.',
      'Arrogance (like Iblees) destroys; humility elevates.',
      'Knowledge of Allah\'s guidance is man\'s greatest honor.'
    ]
  },
  {
    id: 'p2',
    nameEn: 'Prophet Ibrahim (AS)',
    nameAr: 'إبراهيم عليه السلام',
    titleEn: 'Khalilullah (The Friend of Allah)',
    summary: 'Ibrahim (AS) used intellect and courage to stand against idol worship. He demonstrated absolute submission when commanded to sacrifice his son Ismail, leading to the annual ritual of Qurbani and the rebuilding of the Kaaba.',
    keyLessons: [
      'Unwavering Tawhid (Monotheism) above all else.',
      'Trust in Allah (Tawakkul) turns fire into peace.',
      'Legacy of devotion through the Kaaba and Hajj.'
    ]
  },
  {
    id: 'p3',
    nameEn: 'Prophet Muhammad (PBUH)',
    nameAr: 'محمّد صلى الله عليه وسلم',
    titleEn: 'Khatam an-Nabiyyin (The Seal of the Prophets)',
    summary: 'Born in Makkah, known as Al-Amin (The Trustworthy). Received the divine revelation of the Quran at age 40 in Cave Hira. Transformed Arabia and humanity through compassion, justice, and perfect character.',
    keyLessons: [
      'Mercy to all creations (Rahmatan lil-\'Alameen).',
      'Patience in adversity and forgiveness in victory.',
      'Following the Sunnah brings peace in Dunya and Akhirah.'
    ]
  }
];

export const SAHABAH_STORIES: SahabahStory[] = [
  {
    id: 's1',
    nameEn: 'Abu Bakr As-Siddiq (RA)',
    nameAr: 'أبو بكر الصديق رضي الله عنه',
    role: 'First Caliph & Closest Companion',
    summary: 'Known as As-Siddiq for immediately believing the Prophet\'s Isra and Mi\'raj without hesitation. Spent all his wealth for Islam and freed Bilal (RA).',
    lessons: ['Unconditional truthfulness and faith.', 'Generosity without fear of poverty.']
  },
  {
    id: 's2',
    nameEn: 'Khadijah bint Khuwaylid (RA)',
    nameAr: 'خديجة بنت خويلد رضي الله عنها',
    role: 'First Believer & Mother of Believers',
    summary: 'Supported the Prophet (PBUH) with her heart, wealth, and words during the first daunting moments of revelation in Cave Hira. Received greetings of Peace directly from Allah.',
    lessons: ['Emotional and spiritual partnership.', 'Steadfast encouragement in truth.']
  }
];

export const ISLAMIC_QUIZZES: QuizQuestion[] = [
  {
    id: 'q1',
    target: 'children',
    questionEn: 'How many daily obligatory prayers (Salah) are there in Islam?',
    optionsEn: ['3', '5', '7', '10'],
    correctIndex: 1,
    explanationEn: 'Muslims perform 5 obligatory prayers daily: Fajr, Dhuhr, Asr, Maghrib, and Isha.'
  },
  {
    id: 'q2',
    target: 'children',
    questionEn: 'What is the holy book revealed to Prophet Muhammad (PBUH)?',
    optionsEn: ['Torah', 'Gospel', 'Quran', 'Psalms'],
    correctIndex: 2,
    explanationEn: 'The Holy Quran was revealed through Angel Jibreel (AS) to Prophet Muhammad (PBUH).'
  },
  {
    id: 'q3',
    target: 'adults',
    questionEn: 'Which Surah is known as the "Heart of the Quran"?',
    optionsEn: ['Surah Al-Baqarah', 'Surah Ya-Sin', 'Surah Ar-Rahman', 'Surah Al-Mulk'],
    correctIndex: 1,
    explanationEn: 'Surah Ya-Sin (Chapter 36) is traditionally referred to as the Heart of the Quran.'
  },
  {
    id: 'q4',
    target: 'adults',
    questionEn: 'In which year of Hijrah was the obligation of Fasting in Ramadan prescribed?',
    optionsEn: ['1st Year', '2nd Year', '5th Year', '8th Year'],
    correctIndex: 1,
    explanationEn: 'Fasting during Ramadan was made obligatory in the 2nd Year after Hijrah in Madinah.'
  }
];
