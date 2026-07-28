import { CommonSalahMistake, SalahStep, WuduStep } from '../types';

export const WUDU_STEPS: WuduStep[] = [
  {
    stepNumber: 1,
    titleEn: "Make Niyyah (Intention) & Say Bismillah",
    titleAr: "النية والتسمية",
    descriptionEn: "Intend in your heart to purify yourself for Allah, then say 'Bismillah' (In the name of Allah).",
    arabicDua: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translationEn: "In the name of Allah"
  },
  {
    stepNumber: 2,
    titleEn: "Wash Hands Thrice",
    titleAr: "غسل اليدين ثلاثاً",
    descriptionEn: "Wash both hands up to the wrists three times, making sure water reaches between the fingers."
  },
  {
    stepNumber: 3,
    titleEn: "Rinse Mouth Thrice (Madmadah)",
    titleAr: "المضمضة ثلاثاً",
    descriptionEn: "Take water into your mouth with your right hand and swirl it around, then spit it out, 3 times."
  },
  {
    stepNumber: 4,
    titleEn: "Sniff Water into Nose Thrice (Istinshaq)",
    titleAr: "الاستنشاق والاستنثار ثلاثاً",
    descriptionEn: "Sniff water gently into your nostrils using your right hand and blow it out using your left hand, 3 times."
  },
  {
    stepNumber: 5,
    titleEn: "Wash Face Thrice",
    titleAr: "غسل الوجه ثلاثاً",
    descriptionEn: "Wash your face three times from hairline to chin and earlobe to earlobe."
  },
  {
    stepNumber: 6,
    titleEn: "Wash Arms up to the Elbows Thrice",
    titleAr: "غسل اليدين إلى المرفقين ثلاثاً",
    descriptionEn: "Wash your right arm from fingertips to elbow 3 times, then repeat for the left arm 3 times."
  },
  {
    stepNumber: 7,
    titleEn: "Wipe Head & Ears Once (Masah)",
    titleAr: "مسح الرأس والأذنين مرة",
    descriptionEn: "Pass wet hands over hair from front hairline to back of head and return, then wipe inside and back of ears once."
  },
  {
    stepNumber: 8,
    titleEn: "Wash Feet up to Ankle Thrice",
    titleAr: "غسل الرجلين إلى الكعبين ثلاثاً",
    descriptionEn: "Wash right foot up to the ankle 3 times, washing between toes with pinky finger, then repeat for left foot."
  },
  {
    stepNumber: 9,
    titleEn: "Recite Post-Wudu Dua",
    titleAr: "دعاء ما بعد الوضوء",
    descriptionEn: "Stand facing Qibla and recite the Shahada.",
    arabicDua: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ash-hadu an laa ilaaha illallaahu wahdahu laa shareeka lahu wa ash-hadu anna Muhammadan 'abduhu wa rasooluh",
    translationEn: "I testify that there is no deity worthy of worship except Allah alone, and Muhammad is His slave and Messenger. All 8 gates of Jannah are opened for the reciter."
  }
];

export const SALAH_STEPS: SalahStep[] = [
  {
    stepNumber: 1,
    titleEn: "Niyyah & Takbirat al-Ihram",
    titleUr: "نیت اور تکبیرِ تحریمہ",
    titleHi: "नियत और तकबीर-ए-तहरीमा",
    titleAr: "النية وتكبيرة الإحرام",
    arabicRecitation: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translationEn: "Allah is the Greatest",
    descriptionEn: "Stand upright facing Qibla. Raise hands to earlobes (men) or shoulder level (women) and say 'Allahu Akbar'.",
    descriptionUr: "قبلہ رخ کھڑے ہو کر نیت کریں۔ ہاتھ کانوں (یا عورتوں کے لیے کندھوں) تک اٹھا کر 'اللہ اکبر' کہیں۔",
    descriptionHi: "क़िबला की तरफ खड़े होकर नियत करें। हाथ कानों (या औरतों के लिए कंधों) तक उठाकर 'अल्लाह अकबर' कहें।",
    descriptionAr: "استقبل القبلة مع النية، وارفع يديك إلى حذو المنكبين أو الأذنين مع تكبيرة الإحرام.",
    guidanceFor: "all",
    posture: "standing"
  },
  {
    stepNumber: 2,
    titleEn: "Qiyam & Recitation (Subhanaka & Surah Al-Fatiha)",
    titleUr: "قیام اور ثناء، سورۃ الفاتحہ",
    titleHi: "क़ियाम और सना, सूरह फ़ातिहा",
    titleAr: "القيام وقراءة دعاء الاستفتاح والفاتحة",
    arabicRecitation: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلاَ إِلَهَ غَيْرُكَ",
    transliteration: "Subhaanakal-laahumma wa bihamdika wa tabaarakasmuka wa ta'aalaa jadduka wa laa ilaaha ghairuk",
    translationEn: "Glory be to You O Allah, and praise. Blessed is Your name and exalted is Your majesty, and there is no deity besides You.",
    descriptionEn: "Place right hand over left over stomach/chest. Recite Sana, Surah Al-Fatiha, and another short Surah (like Al-Ikhlas).",
    descriptionUr: "سینہ/ناف پر دایاں ہاتھ بائیں پر رکھیں۔ ثناء پڑھیں، پھر سورہ فاتحہ اور کوئی سورت پڑھیں۔",
    descriptionHi: "सीना/नाफ़ पर दायां हाथ बाएं पर रखें। सना पढ़ें, फिर सूरह फ़ातिहा और कोई सूरह पढ़ें।",
    descriptionAr: "ضع اليد اليمنى على اليسرى فوق الصدر أو البطن، واقرأ دعاء الاستفتاح ثم الفاتحة وسورة قصيرة.",
    guidanceFor: "all",
    posture: "standing"
  },
  {
    stepNumber: 3,
    titleEn: "Ruku (Bowing)",
    titleUr: "رکوع",
    titleHi: "रुकू",
    titleAr: "الركوع",
    arabicRecitation: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhaana Rabbiyal-'Azeem (3 times)",
    translationEn: "Glory be to my Lord, the Almighty.",
    descriptionEn: "Say 'Allahu Akbar' and bow down with back straight horizontal and hands grasping knees. Repeat 3 times.",
    descriptionUr: "'اللہ اکبر' کہتے ہوئے رکوع میں جائیں، پیٹھ سیدھی رکھیں اور ہاتھوں سے گھٹنے پکڑیں۔ 3 بار پڑھیں۔",
    descriptionHi: "'अल्लाह अकबर' कहते हुए रुकू में जाएं, पीठ सीधी रखें और हाथों से घुटने पकड़ें। 3 बार पढ़ें।",
    descriptionAr: "كبر وانحنِ للركوع مع استواء الظهر وقبض الركبتين باليدين، وسبّح ثلاثاً.",
    guidanceFor: "all",
    posture: "ruku"
  },
  {
    stepNumber: 4,
    titleEn: "Qauma (Rising from Bowing)",
    titleUr: "قومہ (رکوع سے اٹھنا)",
    titleHi: "क़ौमा (रुकू से उठना)",
    titleAr: "الاعتدال من الركوع",
    arabicRecitation: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ... رَبَّنَا وَلَكَ الْحَمْدُ",
    transliteration: "Sami'allaahu liman hamidah ... Rabbanaa wa lakal-hamd",
    translationEn: "Allah hears whoever praises Him ... Our Lord, to You belongs all praise.",
    descriptionEn: "Stand up straight from Ruku reciting the praises.",
    descriptionUr: "رکوع سے سیدھے کھڑے ہوتے ہوئے یہ کلمات کہیں۔",
    descriptionHi: "रुकू से सीधे खड़े होते हुए ये कलिमात कहें।",
    descriptionAr: "ارفع راسك قائلاً 'سمع الله لمن حمده' ثم قل 'ربنا ولك الحمد'.",
    guidanceFor: "all",
    posture: "standing"
  },
  {
    stepNumber: 5,
    titleEn: "Sujud (Prostration)",
    titleUr: "سجدہ",
    titleHi: "सजदा",
    titleAr: "السجود",
    arabicRecitation: "سُبْحَانَ رَبِّيَ الأَعْلَى",
    transliteration: "Subhaana Rabbiyal-A'laa (3 times)",
    translationEn: "Glory be to my Lord, the Most High.",
    descriptionEn: "Place forehead, nose, palms, knees, and toes firmly on the ground. Repeat 3 times in Sujud.",
    descriptionUr: "پیشانی، ناک، دونوں ہتھیلیاں، گھٹنے اور پاؤں کی انگلیاں زمین پر رکھ کر 3 بار پڑھیں۔",
    descriptionHi: "पेशानी, नाक, दोनों हथेलियां, घुटने और पांव की उंगलियां ज़मीन पर रखकर 3 बार पढ़ें।",
    descriptionAr: "اسجد على سبعة أعظم: الجبهة مع الأنف، اليدين، الركبتين، وأطراف القدمين، وسبح ثلاثاً.",
    guidanceFor: "all",
    posture: "sujud"
  },
  {
    stepNumber: 6,
    titleEn: "Jalsa (Sitting between Sujuds)",
    titleUr: "جلسہ (دو سجدوں کے درمیان بیٹھنا)",
    titleHi: "जलसा (दो सजदों के बीच बैठना)",
    titleAr: "الجلوس بين السجدتين",
    arabicRecitation: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbigh-fir lee, Rabbigh-fir lee",
    translationEn: "My Lord forgive me, My Lord forgive me.",
    descriptionEn: "Sit up on left foot with right foot upright. Recite for forgiveness, then perform 2nd Sujud.",
    descriptionUr: "سجدے سے اٹھ کر اطمینان سے بیٹھیں اور دعا پڑھیں، پھر دوسرا سجدہ کریں۔",
    descriptionHi: "सजदे से उठकर इत्मीनान से बैठें और दुआ पढ़ें, फिर दूसरा सजदा करें।",
    descriptionAr: "اجلس مطمئناً بين السجدتين وادعُ بالغفران، ثم اسجد السجدة الثانية.",
    guidanceFor: "all",
    posture: "sitting"
  },
  {
    stepNumber: 7,
    titleEn: "Tashahhud & Durood (Sitting)",
    titleUr: "تشہد اور درودِ ابراہیمی",
    titleHi: "तशहहुद और दुरुद-ए-इब्राहीमी",
    titleAr: "التشهد والصلاة على النبي",
    arabicRecitation: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ... اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
    transliteration: "At-tahiyaatu lillaahi was-salawaatu wat-tayyibaat...",
    translationEn: "All compliments, prayers, and pure things are due to Allah...",
    descriptionEn: "Sit after 2nd or final Raka'ah. Raise index finger during Ash-hadu...",
    descriptionUr: "دوسری اور آخری رکعت کے بعد بیٹھ کر التحیات، درود ابراہیمی اور دعا پڑھیں۔",
    descriptionHi: "दूसरी और आखरी रकत के बाद बैठकर अत्तहियात, दुरुद इब्राहीमी और दुआ पढ़ें।",
    descriptionAr: "اجلس للتشهد واقرأ التحيات والصلاة الإبراهيمية.",
    guidanceFor: "all",
    posture: "sitting"
  },
  {
    stepNumber: 8,
    titleEn: "Tasleem (Concluding Prayer)",
    titleUr: "سلام (نماز کا اختتام)",
    titleHi: "सलाम (नमाज़ का अंत)",
    titleAr: "التسليم",
    arabicRecitation: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "Assalaamu 'alaikum wa rahmatullaah",
    translationEn: "Peace and mercy of Allah be upon you.",
    descriptionEn: "Turn face to right shoulder and recite, then to left shoulder.",
    descriptionUr: "دائیں اور پھر بائیں کندھے کی طرف منہ پھیر کر سلام کہیں۔",
    descriptionHi: "दाएं और फिर बाएं कंधे की तरफ मुंह फेर कर सलाम कहें।",
    descriptionAr: "سلم عن يمينك وعن يسارك قائلاً 'السلام عليكم ورحمة الله'.",
    guidanceFor: "all",
    posture: "sitting"
  }
];

export const SALAH_MISTAKES: CommonSalahMistake[] = [
  {
    titleEn: "Rushing through movements (Lack of Tuma'neenah)",
    descriptionEn: "Moving between Ruku, Sujud, and standing too fast without coming to a complete restful pause.",
    correctionEn: "Pause fully at each position for at least the time it takes to say 'Subhanallah' comfortably."
  },
  {
    titleEn: "Looking around or up at the ceiling",
    descriptionEn: "Distracting eyes during Salah instead of keeping focus on the spot of prostration.",
    correctionEn: "Keep eyes humbly fixed on the ground where your forehead will touch during Sujud."
  },
  {
    titleEn: "Preceding the Imam in Congregational Prayer",
    descriptionEn: "Bowing or prostrating before the Imam leads the movement.",
    correctionEn: "Wait until the Imam finishes saying 'Allahu Akbar' before starting your movement."
  },
  {
    titleEn: "Not placing all 7 body parts on ground in Sujud",
    descriptionEn: "Lifting feet, nose, or toes off the floor during prostration.",
    correctionEn: "Ensure forehead & nose, both palms, both knees, and toes of both feet touch the floor firmly."
  }
];
