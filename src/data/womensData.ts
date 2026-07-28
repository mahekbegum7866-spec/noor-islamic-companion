export interface WomenArticle {
  id: string;
  titleEn: string;
  titleUr: string;
  titleHi: string;
  titleAr: string;
  contentEn: string;
  contentUr: string;
  contentHi: string;
  contentAr: string;
  sources: string;
}

export const WOMENS_ARTICLES: WomenArticle[] = [
  {
    id: 'w1',
    titleEn: 'Worship During Menstruation: Mercy & Full Reward',
    titleUr: 'ایامِ مخصوصہ میں عبادت: رحمت اور پورا ثواب',
    titleHi: 'माहवारी में इबादत: रहमत और पूरा सवाब',
    titleAr: 'العبادة أثناء الحيض: رحمة وأجر كامل',
    contentEn: 'Islam is a religion of ease and divine mercy. During menstruation, women are exempted from performing Salah and fasting as a physical relief granted by Allah. According to authentic Hadiths (Sahih Bukhari), when a believer is prevented from a routine good deed due to a natural condition, Allah writes down the FULL reward for them based on their sincere intention! You can freely engage in Dhikr, Istighfar, Duas, listening to Quran recitations, reading Tafsir, and doing charity.',
    contentUr: 'اسلام آسان اور رحمت کا دین ہے۔ ایام مخصوصہ میں اللہ تعالیٰ کی طرف سے جسمانی راحت کے لیے عورتوں کو نماز اور روزے کی معافی دی گئی ہے۔ صحیح بخاری کے مطابق جب انسان کسی عذر کی وجہ سے نیکی سے رکتا ہے تو اللہ تعالیٰ اس کی نیت پر پورا ثواب لکھتا ہے! اس دوران آپ ذکر، استغفار، دعائیں، تلاوت سننا اور صدقہ و خیرات کر سکتی ہیں۔',
    contentHi: 'इस्लाम आसानी और रहमत का दीन है। माहवारी के दौरान अल्लाह की तरफ से नमाज़ और रोज़े से छूट दी गई है। सही बुख़ारी के मुताबिक जब कोई इंसान किसी वजह से नेक काम नहीं कर पाता तो अल्लाह उसकी नियत पर पूरा सवाब लिखता है! इस दौरान आप ज़िक्र, अस्तग़फ़ार, दुआएं, कुर्आन सुनना और सदक़ा कर सकती हैं।',
    contentAr: 'الإسلام دين يسر ورخاء. أثناء فترة الحيض، تُعفى المرأة من الصلاة والصوم كرحمة وتخفيف من الله تعالى. وبحسب الأحاديث الصحيحة، فإن العبد إذا منعه مانع شرعي أو مرض عن عمله الصالح، كُتب له الأجر كاملاً بنيته! ويشرع لك الذكر، والاستغفار، والدعاء، وسماع القرآن الكريم، وقراءة التفسير، والصدقة.',
    sources: 'Sahih al-Bukhari 2996, Fatawa Ibn Baz'
  },
  {
    id: 'w2',
    titleEn: 'Recommended Dhikr & Adhkar During Period Days',
    titleUr: 'ایامِ مخصوصہ میں مسنون اذکار',
    titleHi: 'माहवारी के दिनों में मसनून ज़िक्र',
    titleAr: 'الأذكار المستحبة في أيام الحيض',
    contentEn: '1. SubhanAllah, Alhamdulillah, Allahu Akbar (33x each)\n2. Astaghfirullahal-Azeem (100x)\n3. Salawat/Durood upon Prophet Muhammad PBUH (100x)\n4. Hasbunallahu wa ni\'mal-wakeel (100x)\n5. Laa ilaaha illallaahu wahdahu laa shareeka lah (10x)',
    contentUr: '1. سبحان اللہ، الحمد للہ، اللہ اکبر (33 بار)\n2. استغفر اللہ العظیم (100 بار)\n3. درود شریف (100 بار)\n4. حسبنا اللہ ونعم الوکیل (100 بار)\n5. لا الہ الا اللہ وحدہ لا شریک لہ (10 بار)',
    contentHi: '1. सुभानअल्लाह, अलहमदुलिल्लाह, अल्लाह अकबर (33 बार)\n2. अस्तग़फ़िरुल्लाह अल-अज़ीम (100 बार)\n3. दुरुद शरीफ (100 बार)\n4. हस्बुनल्लाहु व निअमल-वकील (100 बार)\n5. ला इलाहा इल्लल्लाहु वहदहू ला शरीका लहू (10 बार)',
    contentAr: '١. التسبيح والتحميد والتكبير (٣٣ مرة)\n٢. أستغفر الله العظيم وأتوب إليه (١٠٠ مرة)\n٣. الصلاة على النبي صلى الله عليه وسلم (١٠٠ مرة)\n٤. حسبنا الله ونعم الوكيل (١٠٠ مرة)\n٥. لا إله إلا الله وحده لا شريك له (١٠ مرات)',
    sources: 'Hisn al-Muslim'
  },
  {
    id: 'w3',
    titleEn: 'Status of Women & Mothers in Islam',
    titleUr: 'اسلام میں عورت اور ماں کا اعلیٰ مقام',
    titleHi: 'इस्लाम में औरत और मां का दर्जा',
    titleAr: 'مكانة المرأة والأم في الإسلام',
    contentEn: 'When a man asked Prophet Muhammad (PBUH): "Who is most deserving of my close companionship?" The Prophet replied: "Your mother." The man asked: "Then who?" The Prophet replied: "Your mother." The man asked: "Then who?" The Prophet replied: "Your mother." The man asked again: "Then who?" The Prophet replied: "Then your father."',
    contentUr: 'ایک شخص نے نبی کریم ﷺ سے پوچھا: لوگوں میں میری حسنِ صحبت کا سب سے زیادہ حقدار کون ہے؟ آپ ﷺ نے فرمایا: تمہاری ماں۔ اس نے پوچھا: پھر کون؟ فرمایا: تمہاری ماں۔ اس نے پوچھا: پھر کون؟ فرمایا: تمہاری ماں۔ اس نے پھر پوچھا: پھر کون؟ فرمایا: پھر تمہارا باپ۔',
    contentHi: 'एक शख्स ने नबी करीम (स.अ.व.) से पूछा: लोगों में मेरी खिदमत का सबसे ज़्यादा हकदार कौन है? आपने फरमाया: तुम्हारी मां। उसने पूछा: फिर कौन? फरमाया: तुम्हारी मां। उसने पूछा: फिर कौन? फरमाया: तुम्हारी मां। उसने पूछा: फिर कौन? फरमाया: फिर तुम्हारा बाप।',
    contentAr: 'جاء رجل إلى رسول الله صلى الله عليه وسلم فقال: من أحق الناس بحسن صحابتي؟ قال: أمك. قال: ثم من؟ قال: أمك. قال: ثم من؟ قال: أمك. قال: ثم من؟ قال: ثم أبوك.',
    sources: 'Sahih al-Bukhari 5971, Sahih Muslim 2548'
  }
];
