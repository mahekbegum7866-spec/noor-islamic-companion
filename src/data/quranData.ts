import { Surah } from '../types';

export const QURAN_SURAHS: Surah[] = [
  {
    number: 1,
    nameArabic: "الفاتحة",
    nameEnglish: "Al-Fatiha",
    nameTranslation: "The Opening",
    revelationType: "Meccan",
    totalAyahs: 7,
    ayahs: [
      {
        numberInSurah: 1,
        globalNumber: 1,
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Bismillaahir Rahmaanir Raheem",
        translationEn: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        translationUr: "اللہ کے نام سے شروع جو بڑا مہربان نہایت رحم والا ہے۔",
        translationHi: "अल्लाह के नाम से शुरू जो बड़ा मेहरबान, निहायत रहम वाला है।",
        translationAr: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        tafsirSummary: "The Basmalah establishes that every noble deed begins with seeking blessing in Allah's name, recognizing His infinite mercy.",
        audioUrl: "https://server8.mp3quran.net/afs/001001.mp3"
      },
      {
        numberInSurah: 2,
        globalNumber: 2,
        arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Alhamdu lillaahi Rabbil 'aalameen",
        translationEn: "[All] praise is [due] to Allah, Lord of the worlds -",
        translationUr: "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پرورش کرنے والا ہے۔",
        translationHi: "सब तारीफें अल्लाह ही के लिए हैं जो तमाम जहानों का पालने वाला है।",
        translationAr: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        tafsirSummary: "Alhamdulillah encompasses total gratitude, praise, and submission to the Sustainer of all creation.",
        audioUrl: "https://server8.mp3quran.net/afs/001002.mp3"
      },
      {
        numberInSurah: 3,
        globalNumber: 3,
        arabicText: "الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Ar-Rahmaanir-Raheem",
        translationEn: "The Entirely Merciful, the Especially Merciful,",
        translationUr: "نہایت مہربان، بہت رحم فرمانے والا۔",
        translationHi: "बहुत मेहरबान, निहायत रहम फरमाने वाला।",
        translationAr: "الرَّحْمَٰنِ الرَّحِيمِ",
        tafsirSummary: "Ar-Rahman emphasizes Allah's vast mercy for all creation; Ar-Rahim highlights His special mercy for the believers.",
        audioUrl: "https://server8.mp3quran.net/afs/001003.mp3"
      },
      {
        numberInSurah: 4,
        globalNumber: 4,
        arabicText: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Maaliki Yawmid-Deen",
        translationEn: "Sovereign of the Day of Recompense.",
        translationUr: "روزِ جزا کا مالک۔",
        translationHi: "बदले के दिन (क़ियामत) का मालिक।",
        translationAr: "مَالِكِ يَوْمِ الدِّينِ",
        tafsirSummary: "Reminds mankind of accountability on Judgment Day where ultimate justice belongs to Allah alone.",
        audioUrl: "https://server8.mp3quran.net/afs/001004.mp3"
      },
      {
        numberInSurah: 5,
        globalNumber: 5,
        arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyaaka na'budu wa iyyaaka nasta'een",
        translationEn: "It is You we worship and You we ask for help.",
        translationUr: "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد مانگتے ہیں۔",
        translationHi: "हम सिर्फ तेरी ही इबादत करते हैं और सिर्फ तुझ ही से मदद मांगते हैं।",
        translationAr: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        tafsirSummary: "The core of Tawhid (Islamic Monotheism): worship belongs exclusively to Allah, and true help comes solely from Him.",
        audioUrl: "https://server8.mp3quran.net/afs/001005.mp3"
      },
      {
        numberInSurah: 6,
        globalNumber: 6,
        arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinas-Siraatal-Mustaqeem",
        translationEn: "Guide us to the straight path -",
        translationUr: "ہمیں سیدھے راستے کی ہدایت فرما۔",
        translationHi: "हमें सीधे रास्ते की हिदायत दे।",
        translationAr: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        tafsirSummary: "The ultimate prayer of a believer: asking Allah for steadfast guidance upon Islam and righteousness.",
        audioUrl: "https://server8.mp3quran.net/afs/001006.mp3"
      },
      {
        numberInSurah: 7,
        globalNumber: 7,
        arabicText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Siraatal-lazeena an'amta 'alaihim ghairil-maghdoobi 'alaihim wa lad-daalleen",
        translationEn: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        translationUr: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔",
        translationHi: "उन लोगों का रास्ता जिन पर तूने इनाम फरमाया, न कि उनका जिन पर तेरा ग़ज़ब हुआ और न उनका जो गुमराह हुए।",
        translationAr: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        tafsirSummary: "Following the footsteps of Prophets, Truthful ones, Martyrs, and Righteous believers.",
        audioUrl: "https://server8.mp3quran.net/afs/001007.mp3"
      }
    ]
  },
  {
    number: 2,
    nameArabic: "البقرة (آية الكرسي)",
    nameEnglish: "Al-Baqarah (Ayat al-Kursi)",
    nameTranslation: "The Cow (Verse of the Throne)",
    revelationType: "Medinan",
    totalAyahs: 286,
    ayahs: [
      {
        numberInSurah: 255,
        globalNumber: 262,
        arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
        transliteration: "Allaahu laaa ilaaha illaa Huwal-Hayyul-Qayyoem; laa ta'khuzuhoe sinatunw-wa laa nawm; lahoe maa fis-samaawaati wa maa fil-ard",
        translationEn: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
        translationUr: "اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ اور سب کو قائم رکھنے والا ہے۔ نہ اسے اونگھ آتی ہے نہ نیند۔ جو کچھ آسمانوں میں اور زمین میں ہے اسی کا ہے۔",
        translationHi: "अल्लाह - उसके सिवा कोई मअबूद नहीं, वह ज़िंदा और सब को क़ाइम रखने वाला है। उसे न ऊंघ आती है न नींद। जो कुछ आसमानों में और ज़मीन में है सब उसी का है।",
        translationAr: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
        tafsirSummary: "Ayat al-Kursi is the greatest verse in the Quran, detailing Allah's majesty, self-subsistence, absolute ownership, and omnipotent protection.",
        audioUrl: "https://server8.mp3quran.net/afs/002255.mp3"
      }
    ]
  },
  {
    number: 36,
    nameArabic: "يس",
    nameEnglish: "Ya-Sin",
    nameTranslation: "Ya-Sin",
    revelationType: "Meccan",
    totalAyahs: 83,
    ayahs: [
      {
        numberInSurah: 58,
        globalNumber: 3763,
        arabicText: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ",
        transliteration: "Salaamun qawlam mir Rabbir Raheem",
        translationEn: "'Peace!' - a word from a Merciful Lord.",
        translationUr: "سلام ہو، مہربان رب کی طرف سے فرمایا ہوا قول۔",
        translationHi: "सलामी का पैग़ाम होगा रहम फरमाने वाले रब की तरफ से।",
        translationAr: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ",
        tafsirSummary: "The ultimate greeting of peace given by Allah directly to the dwellers of Paradise.",
        audioUrl: "https://server8.mp3quran.net/afs/036058.mp3"
      }
    ]
  },
  {
    number: 67,
    nameArabic: "الملك",
    nameEnglish: "Al-Mulk",
    nameTranslation: "The Sovereignty",
    revelationType: "Meccan",
    totalAyahs: 30,
    ayahs: [
      {
        numberInSurah: 1,
        globalNumber: 5242,
        arabicText: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Tabaarakal-laze bee yadihil-mulku wa Huwa 'alaa kulli shai-in Qadeer",
        translationEn: "Blessed is He in whose hand is dominion, and He is over all things competent -",
        translationUr: "بڑا بابرکت ہے وہ جس کے ہاتھ میں بادشاہی ہے، اور وہ ہر چیز پر قادر ہے۔",
        translationHi: "बड़ा बा-बरकत है वह जिसके हाथ में बादशाही है, और वह हर चीज़ पर क़ादिर है।",
        translationAr: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        tafsirSummary: "Surah Al-Mulk intercedes for its reader until they are forgiven and protects against the torment of the grave.",
        audioUrl: "https://server8.mp3quran.net/afs/067001.mp3"
      }
    ]
  },
  {
    number: 112,
    nameArabic: "الإخلاص",
    nameEnglish: "Al-Ikhlas",
    nameTranslation: "The Sincerity",
    revelationType: "Meccan",
    totalAyahs: 4,
    ayahs: [
      {
        numberInSurah: 1,
        globalNumber: 6222,
        arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        transliteration: "Qul Huwal-Laahu Ahad",
        translationEn: "Say, 'He is Allah, [who is] One,",
        translationUr: "آپ فرما دیجیے: وہ اللہ ایک ہے۔",
        translationHi: "कह दीजिए: वह अल्लाह एक है।",
        translationAr: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        tafsirSummary: "Affirms absolute oneness of God. Equivalent to one-third of the Quran in reward.",
        audioUrl: "https://server8.mp3quran.net/afs/112001.mp3"
      },
      {
        numberInSurah: 2,
        globalNumber: 6223,
        arabicText: "اللَّهُ الصَّمَدُ",
        transliteration: "Allaahus-Samad",
        translationEn: "Allah, the Eternal Refuge.",
        translationUr: "اللہ بے نیاز ہے۔",
        translationHi: "अल्लाह बे-नियाज़ है।",
        translationAr: "اللَّهُ الصَّمَدُ",
        tafsirSummary: "As-Samad: The Master on whom all creation depends while He depends on none.",
        audioUrl: "https://server8.mp3quran.net/afs/112002.mp3"
      },
      {
        numberInSurah: 3,
        globalNumber: 6224,
        arabicText: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid wa lam yoolad",
        translationEn: "He neither begets nor is born,",
        translationUr: "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔",
        translationHi: "न उसकी कोई औलाद है और न वह किसी की औलाद है।",
        translationAr: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        tafsirSummary: "Rejects any partners, offspring, or human characteristics attributed to the Divine Creator.",
        audioUrl: "https://server8.mp3quran.net/afs/112003.mp3"
      },
      {
        numberInSurah: 4,
        globalNumber: 6225,
        arabicText: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        transliteration: "Wa lam yakul-lahu kufuwan ahad",
        translationEn: "Nor is there to Him any equivalent.'",
        translationUr: "اور نہ ہی کوئی اس کا ہمسر ہے۔",
        translationHi: "और न कोई उसका हम-सर (बराबर) है।",
        translationAr: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        tafsirSummary: "Nothing in creation resembles Allah in His attributes, glory, or power.",
        audioUrl: "https://server8.mp3quran.net/afs/112004.mp3"
      }
    ]
  },
  {
    number: 113,
    nameArabic: "الفلق",
    nameEnglish: "Al-Falaq",
    nameTranslation: "The Daybreak",
    revelationType: "Meccan",
    totalAyahs: 5,
    ayahs: [
      {
        numberInSurah: 1,
        globalNumber: 6226,
        arabicText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        transliteration: "Qul a'oozu birabbil-falaq",
        translationEn: "Say, 'I seek refuge in the Lord of daybreak",
        translationUr: "آپ فرمائیے: میں صبح کے رب کی پناہ مانگتا ہوں۔",
        translationHi: "कह दीजिए: मैं सुबह के रब की पनाह मांगता हूं।",
        translationAr: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        tafsirSummary: "Seeking divine refuge from external harms, dark nights, envy, and evil practices.",
        audioUrl: "https://server8.mp3quran.net/afs/113001.mp3"
      }
    ]
  },
  {
    number: 114,
    nameArabic: "الناس",
    nameEnglish: "An-Nas",
    nameTranslation: "Mankind",
    revelationType: "Meccan",
    totalAyahs: 6,
    ayahs: [
      {
        numberInSurah: 1,
        globalNumber: 6231,
        arabicText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        transliteration: "Qul a'oozu birabbin-naas",
        translationEn: "Say, 'I seek refuge in the Lord of mankind,",
        translationUr: "آپ فرمائیے: میں انسانوں کے رب کی پناہ مانگتا ہوں۔",
        translationHi: "कह दीजिए: मैं इंसानों के रब की पनाह मांगتا हूं।",
        translationAr: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        tafsirSummary: "Seeking Allah's protection from spiritual whispers (waswas) of shaytan that affect hearts.",
        audioUrl: "https://server8.mp3quran.net/afs/114001.mp3"
      }
    ]
  }
];
