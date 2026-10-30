export type Language = 'en' | 'ar' | 'ur';

export interface LocalizedText {
  en: string;
  ar: string;
  ur: string;
}

export interface ServiceCategoryData {
  id: string;
  indexNumber: string;
  iconName:
    | 'Plane'
    | 'ShieldCheck'
    | 'Briefcase'
    | 'Building2'
    | 'Car'
    | 'Scale'
    | 'Home'
    | 'Landmark';
  title: LocalizedText;
  shortTitle: LocalizedText;
  shortDescription: LocalizedText;
  introduction: LocalizedText;
  keyPlatforms: string[];
  services: LocalizedText[];
}

export interface InvestorServiceItem {
  id: string;
  indexNumber: string;
  text: LocalizedText;
  tag: LocalizedText;
}

export const SERVICE_CATEGORIES: ServiceCategoryData[] = [
  {
    id: 'travel-education',
    indexNumber: '01',
    iconName: 'Plane',
    title: {
      en: 'Travel & Education Services',
      ar: 'خدمات السفر والتعليم',
      ur: 'سفر اور تعلیم کی خدمات',
    },
    shortTitle: {
      en: 'Travel & Education',
      ar: 'السفر والتعليم',
      ur: 'سفر اور تعلیم',
    },
    shortDescription: {
      en: 'Flight and hotel reservations, tourist and student visa support, university admission documentation, translation, and Haramain Railway bookings.',
      ar: 'حجوزات الطيران والفنادق، والمساعدة في تأشيرات السياحة والدراسة، وتجهيز ملفات المنح والقبول الجامعي، والترجمة، وحجز قطار الحرمين السريع.',
      ur: 'فضائی ٹکٹوں اور ہوٹل کی بکنگ، سیاحتی اور تعلیمی ویزا کے حصول میں معاونت، اسکالرشپ اور یونیورسٹی داخلے کے کاغذات، ترجمہ اور حرمین ہائی اسپیڈ ریلوے کی بکنگ۔',
    },
    introduction: {
      en: 'Comprehensive coordination for domestic and international travel, academic admissions, visa documentation, certified formatting, and high-speed rail reservations across the Kingdom.',
      ar: 'دعم متكامل لترتيبات السفر وحجوزات الفنادق وتأشيرات الزيارة والدراسة، بالإضافة إلى تجهيز وثائق القبول الجامعي والترجمة وحجوزات قطار الحرمين السريع.',
      ur: 'فضائی سفر، ہوٹل بکنگ، سیاحتی و تعلیمی ویزا کی درخواستوں، اسکالرشپ و یونیورسٹی داخلہ دستاویزات، ترجمہ اور حرمین ہائی اسپیڈ ٹرین کی ٹکٹ بکنگ کے لیے مکمل پیشہ ورانہ معاونت۔',
    },
    keyPlatforms: ['Haramain Railway', 'Tourist Visa', 'Student Admissions'],
    services: [
      {
        en: 'Flight and hotel bookings.',
        ar: 'حجوزات الطيران والفنادق.',
        ur: 'پروازوں (فلائٹس) اور ہوٹلوں کی بکنگ۔',
      },
      {
        en: 'Assistance with tourist and student visa applications.',
        ar: 'المساعدة في تقديم طلبات التأشيرات السياحية والدراسية.',
        ur: 'سیاحتی اور اسٹوڈنٹ ویزا کی درخواستوں میں معاونت۔',
      },
      {
        en: 'Preparation of scholarship and university admission documents.',
        ar: 'تجهيز وإعداد مستندات المنح الدراسية والقبول الجامعي.',
        ur: 'اسکالرشپ اور یونیورسٹی میں داخلے کے کاغذات کی تیاری۔',
      },
      {
        en: 'Document translation and formatting.',
        ar: 'ترجمة المستندات وتنسيقها.',
        ur: 'دستاویزات کا ترجمہ اور فارمیٹنگ۔',
      },
      {
        en: 'Haramain High-Speed Railway ticket bookings.',
        ar: 'حجز تذاكر قطار الحرمين السريع.',
        ur: 'حرمین ہائی اسپیڈ ریلوے کے ٹکٹوں کی بکنگ۔',
      },
    ],
  },
  {
    id: 'absher-passport-hr',
    indexNumber: '02',
    iconName: 'ShieldCheck',
    title: {
      en: 'Absher, Passport & Human Resources Services',
      ar: 'خدمات أبشر والجوازات والموارد البشرية',
      ur: 'ابشر، جوازات (پاسپورٹ) اور ہیومن ریسورسز کی خدمات',
    },
    shortTitle: {
      en: 'Absher, Passport & HR Services',
      ar: 'أبشر والجوازات والموارد البشرية',
      ur: 'ابشر، پاسپورٹ اور ایچ آر سروسز',
    },
    shortDescription: {
      en: 'Complete support for Absher, Muqeem, Qiwa, and Mudad platforms, work permits, sponsorship transfers, passport renewals, and Nitaqat follow-up.',
      ar: 'التسجيل والمتابعة في منصات أبشر ومقيم وقوى ومدد، ورخص العمل، ونقل الكفالات، وتجديد الجوازات، والتأمينات الاجتماعية.',
      ur: 'ابشر، مقیم، قویٰ اور مدد پلیٹ فارمز پر رجسٹریشن، ورک پرمٹ، نقلِ کفالت، پاسپورٹ کی تجدید، نطاقات اور سوشل انشورنس کے معاملات میں مکمل معاونت۔',
    },
    introduction: {
      en: 'End-to-end electronic portal registration and workforce administration across Absher, Muqeem, Qiwa, Mudad, and GOSI, alongside civil affairs appointments and passport renewals.',
      ar: 'تقديم كافة خدمات التسجيل والتوثيق والمتابعة عبر المنصات الحكومية للموارد البشرية والجوازات والأحوال المدنية والتأمينات الاجتماعية للأفراد والمنشآت.',
      ur: 'ابشر، مقیم، قویٰ، مدد اور سوشل انشورنس سمیت تمام سرکاری پورٹلز پر رجسٹریشن، اقامہ و ورک پرمٹ، نقلِ کفالت، پیشے کی تبدیلی اور سعودی، پاکستانی و یمنی پاسپورٹ کی تجدید۔',
    },
    keyPlatforms: ['Absher', 'Muqeem', 'Qiwa', 'Mudad', 'Nitaqat', 'GOSI'],
    services: [
      {
        en: 'Registration on the Absher platform.',
        ar: 'التسجيل في منصة أبشر.',
        ur: 'ابشر (Absher) پلیٹ فارم پر رجسٹریشن۔',
      },
      {
        en: 'Registration on the Muqeem platform.',
        ar: 'التسجيل في منصة مقيم.',
        ur: 'مقیم (Muqeem) پلیٹ فارم پر رجسٹریشن۔',
      },
      {
        en: 'Registration on the Qiwa platform and employment contract documentation.',
        ar: 'التسجيل في منصة قوى وتوثيق عقود العمل.',
        ur: 'قویٰ (Qiwa) پلیٹ فارم پر رجسٹریشن اور ملازمت کے معاہدوں (کنٹریکٹس) کی توثیق۔',
      },
      {
        en: 'Registration on the Mudad platform.',
        ar: 'التسجيل في منصة مدد.',
        ur: 'مدد (Mudad) پلیٹ فارم پر رجسٹریشن۔',
      },
      {
        en: 'Medical insurance for workers.',
        ar: 'التأمين الطبي للعمالة.',
        ur: 'کارکنوں (ورکرز) کے لیے طبی انشورنس (میڈیکل انشورنس)۔',
      },
      {
        en: 'Appointment booking for Traffic, Passports, Courts and Civil Affairs.',
        ar: 'حجز مواعيد المرور والجوازات والمحاكم والأحوال المدنية.',
        ur: 'مرور (ٹریفک)، جوازات (پاسپورٹ)، عدالتوں اور احوالِ مدنیہ کے لیے اپائنٹمنٹ بکنگ۔',
      },
      {
        en: 'Birth registration.',
        ar: 'تسجيل المواليد.',
        ur: 'نومولود (پیدائش) کی رجسٹریشن۔',
      },
      {
        en: 'Transfer of sponsorship and change of profession.',
        ar: 'نقل الكفالة وتعديل المهنة.',
        ur: 'نقلِ کفالت (اسپانسرشپ کی منتقلی) اور پیشے (مہنہ) کی تبدیلی۔',
      },
      {
        en: 'Issuance and renewal of work permits.',
        ar: 'إصدار وتجديد رخص العمل.',
        ur: 'ورک پرمٹ (رخصتِ عمل) کا اجراء اور تجدید۔',
      },
      {
        en: 'Renewal of Saudi passports.',
        ar: 'تجديد جوازات السفر السعودية.',
        ur: 'سعودی پاسپورٹ کی تجدید۔',
      },
      {
        en: 'Renewal of Pakistani passports.',
        ar: 'تجديد جوازات السفر الباكستانية.',
        ur: 'پاکستانی پاسپورٹ کی تجدید۔',
      },
      {
        en: 'Renewal of Yemeni passports.',
        ar: 'تجديد جوازات السفر اليمنية.',
        ur: 'یمنی پاسپورٹ کی تجدید۔',
      },
      {
        en: 'Follow-up on establishment files and Nitaqat status.',
        ar: 'متابعة ملفات المنشآت وحالة نطاقات.',
        ur: 'منشآت (کمپنی فائلز) اور نطاقات (Nitaqat) اسٹیٹس کی پیروی۔',
      },
      {
        en: 'Filing objections to Labor Office violations.',
        ar: 'تقديم الاعتراضات على مخالفات مكتب العمل.',
        ur: 'مکتب العمل (لیبر آفس) کی خلاف ورزیوں (مخالفات) پر اعتراضات جمع کرانا۔',
      },
      {
        en: 'Social insurance services and subscriber data updates.',
        ar: 'خدمات التأمينات الاجتماعية وتحديث بيانات المشتركين.',
        ur: 'سوشل انشورنس (تامیناتِ اجتماعیہ) کی خدمات اور صارفین کے ڈیٹا کی تجدید۔',
      },
    ],
  },
  {
    id: 'business-commercial',
    indexNumber: '03',
    iconName: 'Briefcase',
    title: {
      en: 'Business & Commercial Services',
      ar: 'الخدمات التجارية وخدمات الأعمال',
      ur: 'کاروباری اور تجارتی خدمات',
    },
    shortTitle: {
      en: 'Business & Commercial Services',
      ar: 'الخدمات التجارية والأعمال',
      ur: 'کاروباری اور تجارتی خدمات',
    },
    shortDescription: {
      en: 'Commercial registration renewal and amendments, trade name reservation, trademark registration, National Address, utility payments, and Zakat & tax filings.',
      ar: 'تجديد وتعديل السجلات التجارية، وحجز الأسماء التجارية، وتسجيل العلامات التجارية، والعنوان الوطني، وتقديم الإقرارات الزكوية والضريبية.',
      ur: 'تجارتی رجسٹریشن (سجلِ تجارتی) کی تجدید و ترمیم، تجارتی نام کی بکنگ، ٹریڈ مارک رجسٹریشن، نیشنل ایڈریس، بلوں کی ادائیگی اور زکوٰۃ و ٹیکس گوشوارے جمع کرانا۔',
    },
    introduction: {
      en: 'Structured commercial administration supporting establishments with Ministry of Commerce procedures, trademark protection, national address compliance, and Zakat and tax returns.',
      ar: 'دعم شامل للمؤسسات والشركات في إجراءات السجلات التجارية والعلامات التجارية والعنوان الوطني وسداد الفواتير والإقرارات الزكوية والضريبية.',
      ur: 'تجارتی اداروں اور کاروباری افراد کے لیے سجلِ تجارتی، ٹریڈ مارک، نیشنل ایڈریس، یوٹیلیٹی بلز اور زکوٰۃ و ٹیکس کے گوشوارے جمع کرانے کی پیشہ ورانہ خدمات۔',
    },
    keyPlatforms: ['Saudi Business Center', 'ZATCA', 'National Address', 'SAIP'],
    services: [
      {
        en: 'Commercial registration renewal.',
        ar: 'تجديد السجل التجاري.',
        ur: 'سجلِ تجارتی (کمرشل رجسٹریشن) کی تجدید۔',
      },
      {
        en: 'Amendment of commercial registration details and business activities.',
        ar: 'تعديل بيانات السجل التجاري والأنشطة التجارية.',
        ur: 'کمرشل رجسٹریشن کی تفصیلات اور کاروباری سرگرمیوں میں ترمیم۔',
      },
      {
        en: 'Obtaining commercial extracts and certificates.',
        ar: 'استخراج المستخرجات والشهادات التجارية.',
        ur: 'تجارتی مستخرجات (ایکسٹریکٹس) اور سرٹیفکیٹس کا حصول۔',
      },
      {
        en: 'Trade name reservation.',
        ar: 'حجز الاسم التجاري.',
        ur: 'تجارتی نام (ٹریڈ نیم) کی بکنگ۔',
      },
      {
        en: 'Trademark registration.',
        ar: 'تسجيل العلامات التجارية.',
        ur: 'ٹریڈ مارک (علامہ تجاریہ) کی رجسٹریشن۔',
      },
      {
        en: 'National Address registration for individuals and businesses.',
        ar: 'تسجيل العنوان الوطني للأفراد والمؤسسات.',
        ur: 'افراد اور کاروباری اداروں کے لیے نیشنل ایڈریس (العنوان الوطنی) کی رجسٹریشن۔',
      },
      {
        en: 'Payment of electricity, telecommunications and other bills.',
        ar: 'سداد فواتير الكهرباء والاتصالات وغيرها من الفواتير.',
        ur: 'بجلی، ٹیلی کمیونیکیشن اور دیگر بلوں کی ادائیگی۔',
      },
      {
        en: 'Submission of Zakat and tax returns.',
        ar: 'تقديم الإقرارات الزكوية والضريبية.',
        ur: 'زکوٰۃ اور ٹیکس کے گوشوارے (ریٹرنز) جمع کرانا۔',
      },
    ],
  },
  {
    id: 'municipal-safety',
    indexNumber: '04',
    iconName: 'Building2',
    title: {
      en: 'Municipal & Safety Services',
      ar: 'الخدمات البلدية وخدمات السلامة',
      ur: 'بلدیہ اور سیفٹی (حفاظتی) خدمات',
    },
    shortTitle: {
      en: 'Municipal & Safety Services',
      ar: 'الخدمات البلدية والسلامة',
      ur: 'بلدیہ اور سیفٹی خدمات',
    },
    shortDescription: {
      en: 'Municipal license renewal and amendments, commercial license ownership transfer, Lawhati signage registration, violation objections, and Civil Defense safety reports.',
      ar: 'تجديد وتعديل الرخص البلدية، ونقل ملكيتها، والتسجيل في منصة لوحتي، والاعتراض على المخالفات البلدية، وتقارير السلامة للدفاع المدني.',
      ur: 'بلدیہ لائسنس کی تجدید و ترمیم، ملکیت کی منتقلی، لوحتی پلیٹ فارم پر رجسٹریشن، بلدیہ مخالفات پر اعتراض اور سول ڈیفنس کے مطابق سیفٹی و تکنیکی رپورٹس۔',
    },
    introduction: {
      en: 'Full municipal licensing support, commercial signage registration via Lawhati, municipal violation objections, and technical safety documentation compliant with Civil Defense standards.',
      ar: 'إنجاز المعاملات البلدية وتجديد الرخص التجارية ونقل ملكيتها والتسجيل في منصة لوحتي وإعداد تقارير السلامة الفنية وفق متطلبات الدفاع المدني.',
      ur: 'بلدیہ لائسنسوں کی تجدید و ترمیم، قوانین کے مطابق لائسنس کی ملکیت کی منتقلی، لوحتی پلیٹ فارم پر رجسٹریشن اور سول ڈیفنس (دفاع مدنی) کی شرائط کے مطابق سیفٹی رپورٹس کی تیاری۔',
    },
    keyPlatforms: ['Balady', 'Lawhati', 'Civil Defense / Salamah'],
    services: [
      {
        en: 'Renewal and amendment of municipal licenses.',
        ar: 'تجديد وتعديل الرخص البلدية.',
        ur: 'بلدیہ کے لائسنسوں کی تجدید اور ترمیم۔',
      },
      {
        en: 'Transfer of commercial license ownership, subject to applicable regulations.',
        ar: 'نقل ملكية الرخص التجارية وفق الأنظمة المعمول بها.',
        ur: 'قابلِ اطلاق قوانین و ضوابط کے مطابق تجارتی لائسنس کی ملکیت کی منتقلی۔',
      },
      {
        en: 'Registration on the Lawhati platform.',
        ar: 'التسجيل في منصة لوحتي.',
        ur: 'لوحتی (Lawhati) پلیٹ فارم پر رجسٹریشن۔',
      },
      {
        en: 'Filing objections to municipal violations.',
        ar: 'تقديم الاعتراضات على المخالفات البلدية.',
        ur: 'بلدیہ کی خلاف ورزیوں (مخالفات) پر اعتراضات جمع کرانا۔',
      },
      {
        en: 'Safety reports and technical reports in accordance with Civil Defense requirements.',
        ar: 'تقارير السلامة والتقارير الفنية وفق متطلبات الدفاع المدني.',
        ur: 'سول ڈیفنس (دفاع مدنی) کے تقاضوں کے مطابق سیفٹی رپورٹس اور تکنیکی رپورٹس۔',
      },
    ],
  },
  {
    id: 'traffic-vehicle',
    indexNumber: '05',
    iconName: 'Car',
    title: {
      en: 'Traffic & Vehicle Services',
      ar: 'خدمات المرور والمركبات',
      ur: 'ٹریفک (مرور) اور گاڑیوں کی خدمات',
    },
    shortTitle: {
      en: 'Traffic & Vehicle Services',
      ar: 'خدمات المرور والمركبات',
      ur: 'ٹریفک اور گاڑیوں کی خدمات',
    },
    shortDescription: {
      en: 'Vehicle registration (Istimara) renewal, replacement of lost or damaged cards and plates, traffic appointments, ownership transfer, and violation objections.',
      ar: 'تجديد استمارة المركبة، وطلب بدل فاقد أو تالف للاستمارة واللوحات، وحجز مواعيد المرور، ونقل ملكية المركبات، والاعتراض على المخالفات المرورية.',
      ur: 'گاڑی کے استمارہ (رجسٹریشن) کی تجدید، گمشدہ یا خراب کارڈ اور نمبر پلیٹ کے متبادل کی درخواست، مرور اپائنٹمنٹ، ملکیت کی منتقلی اور ٹریفک چالان پر اعتراضات۔',
    },
    introduction: {
      en: 'Streamlined assistance for vehicle owners and commercial fleets covering registration renewals, plate replacements, ownership transfers, and traffic violation inquiries.',
      ar: 'خدمات متكاملة لأصحاب المركبات تشمل تجديد الاستمارة، واستخراج بدل فاقد أو تالف، ونقل الملكية، وحجز المواعيد، والاستعلام والاعتراض على المخالفات المرورية.',
      ur: 'گاڑیوں کی رجسٹریشن (استمارہ) کی تجدید، گمشدہ یا خراب رجسٹریشن کارڈ اور نمبر پلیٹس کا حصول، مرور اپائنٹمنٹ، گاڑی کی ملکیت کی منتقلی اور ٹریفک خلاف ورزیوں پر اعتراض۔',
    },
    keyPlatforms: ['Muroor / Absher Vehicles', 'Vehicle Inspection'],
    services: [
      {
        en: 'Vehicle registration renewal.',
        ar: 'تجديد رخصة سير المركبة (الاستمارة).',
        ur: 'گاڑی کی رجسٹریشن (استمارہ) کی تجدید۔',
      },
      {
        en: 'Replacement requests for lost or damaged vehicle registration cards and license plates.',
        ar: 'طلبات بدل فاقد أو تالف لرخص سير المركبات (الاستمارة) واللوحات.',
        ur: 'گمشدہ یا خراب ہونے والے گاڑی کے رجسٹریشن کارڈ (استمارہ) اور نمبر پلیٹس کے متبادل کی درخواستیں۔',
      },
      {
        en: 'Traffic appointment booking.',
        ar: 'حجز مواعيد المرور.',
        ur: 'ٹریفک (مرور) کے لیے اپائنٹمنٹ کی بکنگ۔',
      },
      {
        en: 'Vehicle ownership transfer.',
        ar: 'نقل ملكية المركبات.',
        ur: 'گاڑی کی ملکیت کی منتقلی (نقلِ ملکیت)۔',
      },
      {
        en: 'Traffic violation inquiries and objection submissions.',
        ar: 'الاستعلام عن المخالفات المرورية وتقديم الاعتراضات عليها.',
        ur: 'ٹریفک خلاف ورزیوں (مخالفات) کی معلومات اور ان پر اعتراضات جمع کرانا۔',
      },
    ],
  },
  {
    id: 'court-legal',
    indexNumber: '06',
    iconName: 'Scale',
    title: {
      en: 'Court & Legal Services',
      ar: 'خدمات المحاكم والخدمات العدلية',
      ur: 'عدالتی اور قانونی خدمات',
    },
    shortTitle: {
      en: 'Court & Legal Services',
      ar: 'خدمات المحاكم والعدلية',
      ur: 'عدالتی اور قانونی خدمات',
    },
    shortDescription: {
      en: 'Drafting official letters and appeals, preparing statements of claim, enforcement requests, powers of attorney registration, and electronic promissory notes.',
      ar: 'صياغة الخطابات الرسمية والشكاوى واللوائح الاعتراضية، وإعداد صحائف الدعوى، وطلبات التنفيذ، وتسجيل الوكالات، وإصدار السندات لأمر الإلكترونية.',
      ur: 'سرکاری خطوط، شکایات اور اپیلوں کی تیاری، دعویٰ جات (صحیفہ دعویٰ) کی تیاری، عملدرآمد (تنفیذ) کی درخواستیں، وکالت ناموں کی رجسٹریشن اور الیکٹرانک سند لامر کا اجراء۔',
    },
    introduction: {
      en: 'Procedural documentation and electronic filing support for judicial platforms, including statements of claim, enforcement follow-up, powers of attorney, and Nafith promissory notes.',
      ar: 'تقديم المساندة الإجرائية في صياغة الخطابات الرسمية وإعداد صحائف الدعوى ومتابعة طلبات التنفيذ وتوثيق الوكالات وإصدار السندات لأمر الإلكترونية.',
      ur: 'سرکاری خطوط، شکایات اور اپیلوں کی تحریر، دعویٰ کی درخواستوں کی تیاری، تنفیذ (عملدرآمد) کی درخواستوں کی پیروی، وکالت ناموں کی رجسٹریشن اور الیکٹرانک پرومسری نوٹس (سند لامر) کا اجراء۔',
    },
    keyPlatforms: ['Najiz', 'Nafith'],
    services: [
      {
        en: 'Drafting official letters, complaints and appeals.',
        ar: 'صياغة الخطابات الرسمية والشكاوى واللوائح الاعتراضية.',
        ur: 'سرکاری خطوط، شکایات اور اپیلوں (اعتراضی درخواستوں) کی تیاری۔',
      },
      {
        en: 'Preparing and submitting statements of claim and applications.',
        ar: 'إعداد وتقديم صحائف الدعوى والطلبات القضائية.',
        ur: 'دعویٰ کے بیانات (صحیفہ دعویٰ) اور درخواستوں کی تیاری اور جمع کرانا۔',
      },
      {
        en: 'Filing and following up on enforcement requests.',
        ar: 'تقديم ومتابعة طلبات التنفيذ.',
        ur: 'عملدرآمد (تنفیذ) کی درخواستیں جمع کرانا اور ان کی پیروی کرنا۔',
      },
      {
        en: 'Registration of powers of attorney and authorizations, and follow-up on related procedures.',
        ar: 'تسجيل الوكالات والتفاويض ومتابعة الإجراءات المتعلقة بها.',
        ur: 'وکالت ناموں (پاور آف اٹارنی) اور اجازت ناموں کی رجسٹریشن اور متعلقہ کارروائی کی پیروی۔',
      },
      {
        en: 'Issuance of electronic promissory notes.',
        ar: 'إصدار السندات لأمر الإلكترونية.',
        ur: 'الیکٹرانک پرومسری نوٹس (سند لامر) کا اجراء۔',
      },
    ],
  },
  {
    id: 'social-housing',
    indexNumber: '07',
    iconName: 'Home',
    title: {
      en: 'Social Support & Housing Services',
      ar: 'خدمات الدعم الاجتماعي والإسكان',
      ur: 'سماجی معاونت اور ہاؤسنگ (رہائش) کی خدمات',
    },
    shortTitle: {
      en: 'Social Support & Housing Services',
      ar: 'الدعم الاجتماعي والإسكان',
      ur: 'سماجی معاونت اور ہاؤسنگ',
    },
    shortDescription: {
      en: 'Social Security data updates, Citizen Account and Social Security objections, Sakani housing follow-up, charity applications, and exemption request letters.',
      ar: 'تحديث بيانات الضمان الاجتماعي، وتقديم اعتراضات الضمان وحساب المواطن، ومتابعة طلبات سكني، والتقديم على الجمعيات الخيرية، وصياغة خطابات الإعفاء.',
      ur: 'سوشل سیکیورٹی (ضمان اجتماعی) میں معلومات کی تجدید، حساب المواطن پر اعتراضات، سکنی ہاؤسنگ کی درخواستوں کی پیروی، فلاحی اداروں میں درخواستیں اور مالی امداد و استثنیٰ کے خطوط۔',
    },
    introduction: {
      en: 'Dedicated procedural assistance for individuals and families navigating Social Security updates, Citizen Account inquiries, Sakani housing programs, and formal assistance letters.',
      ar: 'مساندة الأفراد والأسر في تحديث بيانات الضمان الاجتماعي وحساب المواطن ومتابعة طلبات الدعم السكني (سكني) والتقديم على الجمعيات الخيرية وصياغة خطابات طلب المساعدة.',
      ur: 'سوشل سیکیورٹی سسٹم میں مستفیدین کی معلومات اپ ڈیٹ کرنے، سوشل سیکیورٹی اور حساب المواطن سے متعلق اعتراضات، سکنی (Sakani) ہاؤسنگ سپورٹ اور خیراتی اداروں میں درخواستیں جمع کرانے میں معاونت۔',
    },
    keyPlatforms: ['Social Security', 'Citizen Account', 'Sakani'],
    services: [
      {
        en: 'Updating beneficiary information in the Social Security system.',
        ar: 'تحديث بيانات المستفيدين في نظام الضمان الاجتماعي.',
        ur: 'سوشل سیکیورٹی (الضمان الاجتماعی) سسٹم میں مستفیدین کی معلومات کی تجدید۔',
      },
      {
        en: 'Filing objections related to Social Security and the Citizen Account Program.',
        ar: 'تقديم الاعتراضات المتعلقة بالضمان الاجتماعي وبرنامج حساب المواطن.',
        ur: 'سوشل سیکیورٹی اور سٹیزن اکاؤنٹ پروگرام (حساب المواطن) سے متعلق اعتراضات جمع کرانا۔',
      },
      {
        en: 'Following up on Sakani and housing support applications.',
        ar: 'متابعة طلبات برنامج سكني والدعم السكني.',
        ur: 'سکنی (Sakani) اور ہاؤسنگ سپورٹ کی درخواستوں کی پیروی۔',
      },
      {
        en: 'Submitting applications to charitable organizations.',
        ar: 'تقديم الطلبات إلى الجمعيات والمؤسسات الخيرية.',
        ur: 'فلاحی اور خیراتی اداروں میں درخواستیں جمع کرانا۔',
      },
      {
        en: 'Drafting financial assistance and exemption request letters.',
        ar: 'صياغة خطابات طلب المساعدة المالية وطلبات الإعفاء.',
        ur: 'مالی امداد اور استثنیٰ (چھوٹ) کی درخواست کے خطوط تیار کرنا۔',
      },
    ],
  },
  {
    id: 'insurance-banking',
    indexNumber: '08',
    iconName: 'Landmark',
    title: {
      en: 'Insurance & Banking Services',
      ar: 'خدمات التأمين والبنوك',
      ur: 'انشورنس اور بینکنگ کی خدمات',
    },
    shortTitle: {
      en: 'Insurance & Banking Services',
      ar: 'خدمات التأمين والبنوك',
      ur: 'انشورنس اور بینکنگ خدمات',
    },
    shortDescription: {
      en: 'Car and truck insurance, personal and business bank account opening assistance, banking and insurance complaints, and motor accident compensation claims.',
      ar: 'تأمين السيارات والشاحنات، والمساعدة في فتح الحسابات البنكية، وتقديم الشكاوى لدى البنوك وشركات التأمين، ومتابعة مطالبات تعويضات الحوادث المرورية.',
      ur: 'کاروں اور ٹرکوں کی انشورنس، بینک اکاؤنٹ کھولنے میں معاونت، بینکوں اور انشورنس کمپنیوں کے خلاف شکایات اور ٹریفک حادثات کے معاوضے کے کلیمز کی پیروی۔',
    },
    introduction: {
      en: 'Practical guidance for vehicle and commercial truck insurance, bank account opening procedures, formal banking or insurance complaints, and motor accident claim follow-ups.',
      ar: 'تقديم المساعدة في إجراءات تأمين المركبات والشاحنات، وفتح الحسابات البنكية، وتقديم الشكاوى الرسمية لدى البنوك وشركات التأمين، ومتابعة مطالبات تعويضات الحوادث.',
      ur: 'گاڑیوں اور ٹرکوں کی انشورنس، بینک اکاؤنٹ کھولنے میں مدد، بینکوں اور انشورنس کمپنیوں میں شکایات کے اندراج اور ٹریفک حادثات کے معاوضے کے کلیمز جمع کرانے اور ان کی پیروی کی خدمات۔',
    },
    keyPlatforms: ['Motor Insurance', 'Saudi Banks', 'Accident Claims'],
    services: [
      {
        en: 'Car and truck insurance.',
        ar: 'تأمين السيارات والشاحنات.',
        ur: 'کاروں اور ٹرکوں کی انشورنس۔',
      },
      {
        en: 'Bank account opening assistance.',
        ar: 'المساعدة في فتح الحسابات البنكية.',
        ur: 'بینک اکاؤنٹ کھولنے میں معاونت۔',
      },
      {
        en: 'Filing complaints with banks and insurance companies.',
        ar: 'تقديم الشكاوى لدى البنوك وشركات التأمين.',
        ur: 'بینکوں اور انشورنس کمپنیوں کے ساتھ شکایات درج کرانا۔',
      },
      {
        en: 'Submitting and following up on motor accident compensation claims.',
        ar: 'تقديم ومتابعة مطالبات تعويضات الحوادث المرورية.',
        ur: 'گاڑیوں کے حادثات کے معاوضے کے کلیمز جمع کرانا اور ان کی پیروی کرنا۔',
      },
    ],
  },
];

export const INVESTOR_SERVICES_LIST: InvestorServiceItem[] = [
  {
    id: 'inv-1',
    indexNumber: '01',
    tag: {
      en: 'Ownership & Legal Structure',
      ar: 'الملكية والكيان القانوني',
      ur: 'ملکیت اور قانونی ڈھانچہ',
    },
    text: {
      en: 'Start your business in Saudi Arabia under your own name with 100% ownership, subject to applicable laws and regulations.',
      ar: 'ابدأ نشاطك التجاري في المملكة العربية السعودية باسمك الشخصي وبملكية تصل إلى 100%، وذلك وفق الأنظمة واللوائح المعمول بها.',
      ur: 'قابلِ اطلاق قوانین اور ضوابط کے تحت سعودی عرب میں اپنے نام سے 100% ملکیت کے ساتھ اپنا کاروبار شروع کریں۔',
    },
  },
  {
    id: 'inv-2',
    indexNumber: '02',
    tag: {
      en: 'Foreign Incorporation',
      ar: 'تأسيس شركات المستثمرين',
      ur: 'غیر ملکی سرمایہ کار رجسٹریشن',
    },
    text: {
      en: 'Company formation and registration for foreign investors.',
      ar: 'تأسيس وتسجيل الشركات للمستثمرين الأجانب.',
      ur: 'غیر ملکی سرمایہ کاروں کے لیے کمپنی کی تشکیل اور رجسٹریشن۔',
    },
  },
  {
    id: 'inv-3',
    indexNumber: '03',
    tag: {
      en: 'Investment Licensing',
      ar: 'تراخيص الاستثمار',
      ur: 'سرمایہ کاری لائسنس',
    },
    text: {
      en: 'Assistance with investment license applications and follow-up procedures.',
      ar: 'المساعدة في تقديم طلبات تراخيص الاستثمار ومتابعة إجراءاتها.',
      ur: 'سرمایہ کاری لائسنس (انویسٹمنٹ لائسنس) کی درخواستوں اور متعلقہ کارروائی کی پیروی میں معاونت۔',
    },
  },
  {
    id: 'inv-4',
    indexNumber: '04',
    tag: {
      en: 'Foreign Ownership',
      ar: 'شركات أجنبية بالكامل',
      ur: 'مکمل غیر ملکی ملکیت',
    },
    text: {
      en: 'Establishment of fully foreign-owned companies where legally permitted.',
      ar: 'تأسيس شركات مملوكة بالكامل للأجانب في الأنشطة المسموح بها نظاماً.',
      ur: 'جہاں قانونی طور پر اجازت ہو وہاں مکمل طور پر غیر ملکی ملکیت والی کمپنیوں کا قیام۔',
    },
  },
  {
    id: 'inv-5',
    indexNumber: '05',
    tag: {
      en: 'Commercial Registration',
      ar: 'السجل والنشاط التجاري',
      ur: 'کمرشل رجسٹریشن',
    },
    text: {
      en: 'Commercial registration and business activity registration.',
      ar: 'إصدار السجل التجاري وتسجيل الأنشطة التجارية.',
      ur: 'کمرشل رجسٹریشن (سجلِ تجارتی) اور کاروباری سرگرمیوں کی رجسٹریشن۔',
    },
  },
  {
    id: 'inv-6',
    indexNumber: '06',
    tag: {
      en: 'Establishment Files',
      ar: 'ملفات المنشأة',
      ur: 'کمپنی فائلز کا اجراء',
    },
    text: {
      en: 'Assistance with company formation procedures and opening establishment files.',
      ar: 'المساعدة في إجراءات تأسيس الشركات وفتح ملفات المنشأة لدى الجهات المعنية.',
      ur: 'کمپنی کی تشکیل کے مراحل اور متعلقہ اداروں میں منشآت (اسٹیبلشمنٹ) فائلز کھولنے میں معاونت۔',
    },
  },
  {
    id: 'inv-7',
    indexNumber: '07',
    tag: {
      en: 'Corporate Banking',
      ar: 'الحسابات البنكية للشركات',
      ur: 'کارپوریٹ بینک اکاؤنٹ',
    },
    text: {
      en: 'Assistance with opening corporate bank accounts.',
      ar: 'المساعدة في إجراءات فتح الحسابات البنكية للشركات والمنشآت.',
      ur: 'کارپوریٹ (کمپنی) بینک اکاؤنٹس کھولنے میں پیشہ ورانہ معاونت۔',
    },
  },
  {
    id: 'inv-8',
    indexNumber: '08',
    tag: {
      en: 'Municipal & Operational Permits',
      ar: 'الرخص البلدية والتصاريح',
      ur: 'بلدیہ لائسنس اور پرمٹ',
    },
    text: {
      en: 'Municipal licenses and other required business permits.',
      ar: 'استخراج الرخص البلدية والتصاريح التجارية الأخرى المطلوبة.',
      ur: 'بلدیہ کے لائسنس اور دیگر ضروری کاروباری اجازت نامے (پرمٹس)۔',
    },
  },
  {
    id: 'inv-9',
    indexNumber: '09',
    tag: {
      en: 'Zakat & Tax Authorities',
      ar: 'الزكاة والضريبة',
      ur: 'زکوٰۃ اور ٹیکس رجسٹریشن',
    },
    text: {
      en: 'Zakat, tax and registration services with the relevant authorities.',
      ar: 'خدمات التسجيل في الزكاة والضريبة ولدى الجهات المختصة ذات العلاقة.',
      ur: 'متعلقہ حکام کے پاس زکوٰۃ، ٹیکس اور رجسٹریشن کی خدمات۔',
    },
  },
  {
    id: 'inv-10',
    indexNumber: '10',
    tag: {
      en: 'Real Estate Eligibility',
      ar: 'تملك العقارات وفق النظام',
      ur: 'جائیداد کی خریداری میں معاونت',
    },
    text: {
      en: 'Assistance with purchasing property in Saudi Arabia in your own name, subject to applicable laws and eligibility requirements.',
      ar: 'المساعدة في إجراءات شراء العقارات في المملكة العربية السعودية باسمك الشخصي، وفق الأنظمة المعمول بها وشروط الأهلية النظامية.',
      ur: 'قابلِ اطلاق قوانین اور اہلیت کی شرائط کے تحت سعودی عرب میں اپنے نام پر جائیداد خریدنے میں معاونت۔',
    },
  },
  {
    id: 'inv-11',
    indexNumber: '11',
    tag: {
      en: 'Title & Registration Follow-Up',
      ar: 'متابعة تسجيل الملكية',
      ur: 'ملکیت کی رجسٹریشن کی پیروی',
    },
    text: {
      en: 'Follow-up on property purchase and ownership registration procedures.',
      ar: 'متابعة إجراءات شراء العقار وتسجيل ونقل الملكية العقارية.',
      ur: 'جائیداد کی خریداری اور ملکیت کی رجسٹریشن کے مراحل کی مکمل پیروی۔',
    },
  },
  {
    id: 'inv-12',
    indexNumber: '12',
    tag: {
      en: 'End-to-End Advisory',
      ar: 'المساندة الإجرائية للمستثمرين',
      ur: 'سرمایہ کاروں کے لیے مکمل رہنمائی',
    },
    text: {
      en: 'Procedural support for investors planning to establish a business in Saudi Arabia.',
      ar: 'تقديم الدعم الإجرائي المتكامل للمستثمرين الراغبين في تأسيس أعمالهم في المملكة العربية السعودية.',
      ur: 'سعودی عرب میں کاروبار قائم کرنے کی منصوبہ بندی کرنے والے سرمایہ کاروں کے لیے مکمل طریقہ کار کی معاونت۔',
    },
  },
];
