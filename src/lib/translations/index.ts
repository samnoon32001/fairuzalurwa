import { Language } from '../services';

export interface TranslationDictionary {
  meta: {
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    investorTitle: string;
    investorDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  brand: {
    name: string;
    locationLabel: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    investorServices: string;
    contact: string;
    whatsappCta: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    headline: string;
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
    whatsappCta: string;
    domainsLabel: string;
    domainsList: string[];
  };
  highlights: {
    sectionLabel: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  aboutPreview: {
    kicker: string;
    heading: string;
    description: string;
    secondaryParagraph: string;
    cta: string;
    pillars: {
      title: string;
      detail: string;
    }[];
  };
  mainServicesSection: {
    kicker: string;
    heading: string;
    description: string;
    exploreLink: string;
    enquireWhatsapp: string;
    viewAllServices: string;
    servicesCountSuffix: string;
  };
  investorHighlight: {
    kicker: string;
    heading: string;
    description: string;
    highlightsList: string[];
    cta: string;
    whatsappCta: string;
    complianceNote: string;
  };
  whyChooseUs: {
    kicker: string;
    heading: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contactCta: {
    kicker: string;
    heading: string;
    description: string;
    contactButton: string;
    whatsappButton: string;
  };
  servicesPage: {
    kicker: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    allCategoriesTab: string;
    expandAll: string;
    collapseAll: string;
    includedServicesLabel: string;
    enquireCategoryWhatsapp: string;
    enquireServiceWhatsapp: string;
    requestViaForm: string;
    noResults: string;
    resetFilter: string;
  };
  investorPage: {
    kicker: string;
    title: string;
    heroDescription: string;
    primaryCta: string;
    whatsappCta: string;
    servicesSectionKicker: string;
    servicesSectionHeading: string;
    servicesSectionIntro: string;
    processKicker: string;
    processHeading: string;
    processIntro: string;
    processSteps: {
      stepNumber: string;
      title: string;
      description: string;
    }[];
    regulatoryNoticeTitle: string;
    regulatoryNoticeBody: string;
    regulatoryNoticeDisclaimer: string;
    discussPlanCta: string;
  };
  aboutPage: {
    kicker: string;
    title: string;
    heroSubtitle: string;
    introHeading: string;
    introParagraph1: string;
    introParagraph2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    commitmentTitle: string;
    commitmentIntro: string;
    commitmentPoints: {
      title: string;
      description: string;
    }[];
    expertiseTitle: string;
    expertiseIntro: string;
  };
  contactPage: {
    kicker: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    investorCategoryOption: string;
    generalEnquiryOption: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successMessage: string;
    sendAnotherButton: string;
    continueOnWhatsapp: string;
    validation: {
      nameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      emailRequired: string;
      emailInvalid: string;
      categoryRequired: string;
      messageRequired: string;
    };
    infoSectionTitle: string;
    infoSectionNote: string;
    officeAddressLabel: string;
    phoneInfoLabel: string;
    whatsappInfoLabel: string;
    emailInfoLabel: string;
    businessHoursLabel: string;
    mapLocationLabel: string;
    socialMediaLabel: string;
    configurePlaceholdersBtn: string;
    saveConfigBtn: string;
    resetConfigBtn: string;
    configSavedNotice: string;
  };
  whatsapp: {
    floatingLabel: string;
    modalTitle: string;
    modalSubtitle: string;
    prefilledMessageLabel: string;
    recipientNumberLabel: string;
    editableNumberHint: string;
    copyMessageBtn: string;
    copiedLabel: string;
    openWhatsappBtn: string;
    closeBtn: string;
    defaultGeneralMessage: string;
    investorEnquiryMessage: string;
    categoryEnquiryPrefix: string;
    serviceEnquiryPrefix: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    mainServicesTitle: string;
    contactInfoTitle: string;
    placeholderNotice: string;
    rightsReserved: string;
    regulatoryNote: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    meta: {
      homeTitle: 'Fairuz Al Urwa Company | Travel, Government & Business Services in Saudi Arabia',
      homeDescription:
        'Fairuz Al Urwa Company provides professional assistance with travel bookings, government services, business registration, company formation and investor services in Saudi Arabia.',
      servicesTitle: 'Our Complete Services | Fairuz Al Urwa Company – Saudi Arabia',
      servicesDescription:
        'Explore all eight service categories covering travel and education, Absher and HR, commercial services, municipal licensing, traffic, legal, housing, and banking.',
      investorTitle: 'Investor Services & Company Formation in Saudi Arabia | Fairuz Al Urwa Company',
      investorDescription:
        'Start your business in Saudi Arabia with professional assistance in company formation, investment procedures and business registration.',
      aboutTitle: 'About Us | Fairuz Al Urwa Company – Travel & Business Services in Saudi Arabia',
      aboutDescription:
        'Learn about Fairuz Al Urwa Company’s mission, vision, and commitment to simplifying travel, government procedures, and business services across Saudi Arabia.',
      contactTitle: 'Contact Us | Fairuz Al Urwa Company – Saudi Arabia',
      contactDescription:
        'Get in touch with Fairuz Al Urwa Company via WhatsApp, phone, or our online enquiry form for assistance with travel, government transactions, or company formation.',
    },
    brand: {
      name: 'Fairuz Al Urwa Company',
      locationLabel: 'Kingdom of Saudi Arabia',
      tagline: 'Travel & Tourism · Government & Business Services',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      investorServices: 'Investor Services',
      contact: 'Contact Us',
      whatsappCta: 'WhatsApp',
      languageLabel: 'Language',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      kicker: 'Saudi Arabia · Travel, Government & Corporate Support',
      headline: 'Your Trusted Partner for Travel, Government & Business Services in Saudi Arabia.',
      supportingText:
        'From travel arrangements and government transactions to business establishment and investment assistance, we simplify your journey with professional and reliable support.',
      primaryCta: 'Explore Our Services',
      secondaryCta: 'Contact Us',
      whatsappCta: 'Chat on WhatsApp',
      domainsLabel: 'Key Service Areas',
      domainsList: [
        'Travel & Visas',
        'Absher, Qiwa & Muqeem',
        'Commercial Registration',
        'Foreign Investor Formation',
      ],
    },
    highlights: {
      sectionLabel: 'Core Commitments',
      items: [
        {
          title: 'Comprehensive Services',
          description:
            'Integrated assistance across eight specialized categories covering travel, electronic portals, commercial registries, and investor onboarding.',
        },
        {
          title: 'Professional Assistance',
          description:
            'Careful document preparation, platform registration, and procedural follow-up handled with accuracy and clarity.',
        },
        {
          title: 'Convenient Procedures',
          description:
            'Streamlined coordination designed to save your time and simplify complex administrative requirements.',
        },
        {
          title: 'Customer-Focused Support',
          description:
            'Direct, responsive communication in English, Arabic, and Urdu for individuals, establishments, and international investors.',
        },
      ],
    },
    aboutPreview: {
      kicker: 'About Our Office',
      heading: 'Your Reliable Partner in Saudi Arabia',
      description:
        'We provide comprehensive assistance across travel, education, government procedures, commercial services and investment-related matters. Our goal is to simplify complex processes and provide convenient, professional support for individuals, businesses and investors.',
      secondaryParagraph:
        'Whether you are an individual managing family and civil affairs, an establishment maintaining portal compliance across Qiwa and Muqeem, or an international entrepreneur establishing a company in the Kingdom, our office provides structured procedural guidance every step of the way.',
      cta: 'Learn More',
      pillars: [
        {
          title: 'Individuals & Families',
          detail: 'Travel bookings, visas, Absher, civil affairs, traffic, housing, and social support procedures.',
        },
        {
          title: 'Establishments & SMEs',
          detail: 'Commercial registration, Qiwa, Mudad, Muqeem, municipal licensing, Zakat and tax filings.',
        },
        {
          title: 'International Investors',
          detail: 'Foreign investor company formation, investment licenses, corporate bank accounts, and property procedures.',
        },
      ],
    },
    mainServicesSection: {
      kicker: 'Service Portfolio',
      heading: 'Our Main Services',
      description:
        'Explore our eight comprehensive service categories tailored for residents, citizens, commercial establishments, and foreign investors in Saudi Arabia.',
      exploreLink: 'Explore Services',
      enquireWhatsapp: 'WhatsApp Enquiry',
      viewAllServices: 'View All Service Details',
      servicesCountSuffix: 'Services',
    },
    investorHighlight: {
      kicker: 'Foreign Investment & Company Formation',
      heading: 'Start Your Business in Saudi Arabia',
      description:
        'Explore opportunities to establish your business in Saudi Arabia with professional assistance throughout the company formation and investment process.',
      highlightsList: [
        'Foreign investor company formation.',
        'Investment license application assistance.',
        'Commercial registration.',
        'Business activity registration.',
        'Corporate bank account assistance.',
        'Municipal licenses.',
        'Zakat and tax registration assistance.',
        'Property purchase procedural assistance.',
      ],
      cta: 'Explore Investor Services',
      whatsappCta: 'Enquire About Investor Services',
      complianceNote:
        'All company formation, ownership structures, licensing, and property procedures are subject to applicable Saudi laws, regulations, and approval by the relevant authorities.',
    },
    whyChooseUs: {
      kicker: 'Why Work With Us',
      heading: 'Why Choose Us?',
      description:
        'We combine structured procedural knowledge with accessible multilingual communication to help you complete your requirements smoothly.',
      items: [
        {
          title: 'Wide Range of Services',
          description:
            'From flight tickets and student admissions to commercial registrations and court documentation under one roof.',
        },
        {
          title: 'Professional Documentation Support',
          description:
            'Accurate drafting, translation, formatting, and electronic submission of applications, letters, and contracts.',
        },
        {
          title: 'Convenient Service Assistance',
          description:
            'Easy enquiry initiation via WhatsApp, phone, or online contact forms with clear step-by-step guidance.',
        },
        {
          title: 'Multiple Service Categories',
          description:
            'Eight dedicated departments covering travel, HR portals, commerce, municipalities, traffic, courts, housing, and insurance.',
        },
        {
          title: 'Individual & Business Support',
          description:
            'Tailored procedural solutions for private individuals, local companies, and foreign investors entering the Saudi market.',
        },
        {
          title: 'Dedicated Customer Assistance',
          description:
            'Attentive follow-up on applications, renewals, appointments, and objections in English, Arabic, and Urdu.',
        },
      ],
    },
    contactCta: {
      kicker: 'Ready to Begin?',
      heading: 'Let Us Make Your Process Easier',
      description:
        'Whether you need assistance with travel, government procedures or establishing your business in Saudi Arabia, we are ready to help.',
      contactButton: 'Contact Us',
      whatsappButton: 'Chat on WhatsApp',
    },
    servicesPage: {
      kicker: 'Complete Service Directory',
      title: 'Comprehensive Travel, Government & Business Services',
      description:
        'Browse all eight service categories below. Select any category or use the search bar to locate specific procedures and initiate an instant enquiry.',
      searchPlaceholder: 'Search services (e.g., Absher, Qiwa, Commercial Registration, Visa, Haramain)...',
      allCategoriesTab: 'All Categories',
      expandAll: 'Expand All Categories',
      collapseAll: 'Collapse All',
      includedServicesLabel: 'Available Services in This Category',
      enquireCategoryWhatsapp: 'Enquire on WhatsApp',
      enquireServiceWhatsapp: 'Enquire',
      requestViaForm: 'Request via Contact Form',
      noResults: 'No matching services found for your search query.',
      resetFilter: 'Show All Services',
    },
    investorPage: {
      kicker: 'Saudi Arabia Investment & Incorporation Support',
      title: 'Investor Services & Company Formation in Saudi Arabia',
      heroDescription:
        'Start your business in Saudi Arabia with professional assistance in company formation, investment procedures and business registration.',
      primaryCta: 'Discuss Your Business Plan',
      whatsappCta: 'Chat with Investor Support on WhatsApp',
      servicesSectionKicker: 'Complete Scope of Investor Assistance',
      servicesSectionHeading: 'Company Formation, Licensing & Procedural Services',
      servicesSectionIntro:
        'We provide structured procedural assistance for entrepreneurs and foreign investors establishing or expanding their presence in the Kingdom of Saudi Arabia.',
      processKicker: 'How We Work',
      processHeading: 'Our 5-Step Investor Assistance Process',
      processIntro:
        'A clear, methodical workflow designed to guide you from initial planning through official registration and post-formation procedures.',
      processSteps: [
        {
          stepNumber: '01',
          title: 'Initial Consultation',
          description:
            'Discuss your planned business activity, investor profile, and procedural objectives in Saudi Arabia.',
        },
        {
          stepNumber: '02',
          title: 'Understanding Your Business Requirements',
          description:
            'Identify the appropriate registration steps, required entity documents, and applicable regulatory pathways.',
        },
        {
          stepNumber: '03',
          title: 'Documentation Assistance',
          description:
            'Prepare, translate, format, and organize the necessary application files and supporting documentation.',
        },
        {
          stepNumber: '04',
          title: 'Application & Registration Support',
          description:
            'Assist with submitting investment license applications, commercial registrations, establishment files, and municipal permits.',
        },
        {
          stepNumber: '05',
          title: 'Follow-up on Procedures',
          description:
            'Coordinate follow-up across Zakat and tax registration, corporate bank account procedures, and property registration steps.',
        },
      ],
      regulatoryNoticeTitle: 'Important Regulatory & Compliance Notice',
      regulatoryNoticeBody:
        '100% foreign ownership, investment licensing, commercial activity registration, and property purchase in Saudi Arabia are strictly subject to applicable Saudi laws, regulations, activity classifications, and eligibility requirements.',
      regulatoryNoticeDisclaimer:
        'Our office provides private procedural and documentation assistance. We are not a government authority, and all licenses, registrations, and approvals remain subject to review and decision by the relevant ministries and official authorities in the Kingdom of Saudi Arabia.',
      discussPlanCta: 'Discuss Your Business Plan',
    },
    aboutPage: {
      kicker: 'Who We Are',
      title: 'About Our Travel, Government & Business Services Office',
      heroSubtitle:
        'Dedicated to simplifying administrative, travel, commercial, and investment procedures across the Kingdom of Saudi Arabia with clarity and professionalism.',
      introHeading: 'Your Reliable Partner in Saudi Arabia',
      introParagraph1:
        'Operating in the Kingdom of Saudi Arabia, our office provides comprehensive procedural assistance across travel arrangements, educational admissions, electronic government platforms, commercial registrations, legal documentation, municipal licensing, and investor company formation.',
      introParagraph2:
        'We recognize that navigating multiple electronic portals, preparing accurate official correspondence, and coordinating business establishment procedures requires attention to detail. Our role is to simplify these processes and provide convenient, organized support for individuals, families, businesses, and investors.',
      missionTitle: 'Our Mission',
      missionText:
        'To simplify complex travel, administrative, government, and business procedures in Saudi Arabia by delivering accurate documentation support, dependable follow-up, and accessible multilingual assistance.',
      visionTitle: 'Our Vision',
      visionText:
        'To be the trusted first point of contact for individuals, commercial establishments, and international investors seeking clear, reliable, and convenient procedural services in Saudi Arabia.',
      commitmentTitle: 'Our Commitment to Customers',
      commitmentIntro:
        'Every enquiry and transaction is guided by clear communication, procedural care, and respect for applicable regulations.',
      commitmentPoints: [
        {
          title: 'Clarity & Transparency',
          description:
            'We clearly explain required documents and procedural steps before initiating applications or filings.',
        },
        {
          title: 'Multilingual Accessibility',
          description:
            'Full service support in English, Arabic, and Urdu so clients can communicate comfortably in their preferred language.',
        },
        {
          title: 'Accurate Documentation',
          description:
            'Careful preparation of forms, official letters, contracts, translations, and portal submissions.',
        },
        {
          title: 'Consistent Follow-Up',
          description:
            'Dedicated tracking of renewals, appointments, objections, and establishment file updates.',
        },
      ],
      expertiseTitle: 'Our Areas of Expertise',
      expertiseIntro:
        'Our services span eight specialized areas plus dedicated support for foreign investors and company formation in Saudi Arabia.',
    },
    contactPage: {
      kicker: 'Get in Touch',
      title: 'Contact Our Office',
      subtitle:
        'Send us a message using the enquiry form below or reach out directly via WhatsApp or phone. Our team will assist you in English, Arabic, or Urdu.',
      formTitle: 'Send a Service Enquiry',
      formSubtitle:
        'Fill in your details and select the service category you require. All fields marked with * are required.',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone / WhatsApp Number *',
      phonePlaceholder: '+966 5X XXX XXXX',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'you@example.com',
      categoryLabel: 'Service Category *',
      categoryPlaceholder: 'Select a service category',
      investorCategoryOption: 'Investor Services & Company Formation',
      generalEnquiryOption: 'General Enquiry / Multiple Services',
      messageLabel: 'Your Message / Service Details *',
      messagePlaceholder: 'Please describe the service or procedure you need assistance with...',
      submitButton: 'Submit Enquiry',
      submittingButton: 'Submitting Enquiry...',
      successTitle: 'Enquiry Received Successfully',
      successMessage:
        'Thank you for contacting us. Your enquiry details have been recorded. For immediate assistance, you can also send this enquiry directly to our WhatsApp.',
      sendAnotherButton: 'Submit Another Enquiry',
      continueOnWhatsapp: 'Send This Enquiry on WhatsApp',
      validation: {
        nameRequired: 'Please enter your full name.',
        phoneRequired: 'Please enter your phone or WhatsApp number.',
        phoneInvalid: 'Please enter a valid phone number (at least 7 digits).',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        categoryRequired: 'Please select a service category.',
        messageRequired: 'Please provide details about the service you need.',
      },
      infoSectionTitle: 'Office Contact Details',
      infoSectionNote:
        'Reach out directly via phone, WhatsApp, or email. Additional office location and business hours fields remain editable.',
      officeAddressLabel: 'Office Address',
      phoneInfoLabel: 'Phone Number',
      whatsappInfoLabel: 'WhatsApp Number',
      emailInfoLabel: 'Email Address',
      businessHoursLabel: 'Business Hours',
      mapLocationLabel: 'Google Maps Location',
      socialMediaLabel: 'Social Media Accounts',
      configurePlaceholdersBtn: 'Edit Contact Details',
      saveConfigBtn: 'Save Contact Details',
      resetConfigBtn: 'Reset to Defaults',
      configSavedNotice: 'Contact details updated for this browser session.',
    },
    whatsapp: {
      floatingLabel: 'WhatsApp Enquiry',
      modalTitle: 'Start WhatsApp Conversation',
      modalSubtitle:
        'Review your prefilled message below and continue to WhatsApp.',
      prefilledMessageLabel: 'Prefilled Message (Auto-localized)',
      recipientNumberLabel: 'Official Office WhatsApp Number',
      editableNumberHint:
        'Connected to Fairuz Al Urwa Company WhatsApp (+966 53 182 2041). Click Continue to WhatsApp to send your enquiry.',
      copyMessageBtn: 'Copy Message',
      copiedLabel: 'Copied!',
      openWhatsappBtn: 'Continue to WhatsApp',
      closeBtn: 'Close',
      defaultGeneralMessage:
        'Hello, I would like to enquire about your travel, government and business services in Saudi Arabia.',
      investorEnquiryMessage:
        'Hello, I would like to enquire about Investor Services and Company Formation in Saudi Arabia.',
      categoryEnquiryPrefix: 'Hello, I would like to enquire about your',
      serviceEnquiryPrefix: 'Hello, I would like to request assistance with:',
    },
    footer: {
      description:
        'Professional office in Saudi Arabia providing comprehensive assistance across travel bookings, government electronic platforms, commercial registrations, legal documentation, and foreign investor company formation.',
      quickLinksTitle: 'Quick Links',
      mainServicesTitle: 'Main Service Categories',
      contactInfoTitle: 'Contact Information',
      placeholderNotice: 'Direct WhatsApp, phone & email support available.',
      rightsReserved: 'All rights reserved.',
      regulatoryNote:
        'Private business & travel services office. All government transactions, licenses, and approvals are subject to applicable Saudi laws and relevant authorities.',
    },
  },
  ar: {
    meta: {
      homeTitle: 'شركة فيروز العروة | خدمات السفر والمعاملات الحكومية والأعمال في السعودية',
      homeDescription:
        'تقدم شركة فيروز العروة مساندة احترافية في حجوزات السفر، المعاملات الحكومية، السجلات التجارية، تأسيس الشركات وخدمات المستثمرين في المملكة العربية السعودية.',
      servicesTitle: 'دليل الخدمات الشامل | شركة فيروز العروة – المملكة العربية السعودية',
      servicesDescription:
        'استعرض أقسام خدماتنا الثمانية التي تشمل السفر والتعليم، أبشر والجوازات والموارد البشرية، الخدمات التجارية، البلدية، المرور، المحاكم، الإسكان، والتأمين والبنوك.',
      investorTitle: 'خدمات المستثمرين وتأسيس الشركات في السعودية | شركة فيروز العروة',
      investorDescription:
        'ابدأ نشاطك التجاري في المملكة العربية السعودية بدعم احترافي من شركة فيروز العروة في تأسيس الشركات وإجراءات الاستثمار والتسجيل التجاري.',
      aboutTitle: 'من نحن | شركة فيروز العروة للسفر والسياحة وخدمات الأعمال',
      aboutDescription:
        'تعرف على رسالة ورؤية شركة فيروز العروة والتزامنا بتسهيل إجراءات السفر والمعاملات الحكومية والتجارية وخدمات الاستثمار في المملكة العربية السعودية.',
      contactTitle: 'اتصل بنا | شركة فيروز العروة – المملكة العربية السعودية',
      contactDescription:
        'تواصل مع شركة فيروز العروة عبر واتساب أو الهاتف أو نموذج الاستفسار الإلكتروني للحصول على المساعدة في خدمات السفر أو المعاملات الحكومية أو تأسيس الشركات.',
    },
    brand: {
      name: 'شركة فيروز العروة',
      locationLabel: 'المملكة العربية السعودية',
      tagline: 'للسفر والسياحة · المعاملات الحكومية وخدمات الأعمال',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      investorServices: 'خدمات المستثمرين',
      contact: 'اتصل بنا',
      whatsappCta: 'واتساب',
      languageLabel: 'اللغة',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل',
    },
    hero: {
      kicker: 'المملكة العربية السعودية · خدمات السفر والمعاملات الحكومية والأعمال',
      headline: 'شريكك الموثوق لخدمات السفر والمعاملات الحكومية وخدمات الأعمال في المملكة العربية السعودية.',
      supportingText:
        'من ترتيبات السفر والمعاملات الحكومية إلى تأسيس الشركات ومساندة المستثمرين، نُسهّل رحلتك وإجراءاتك بدعم احترافي وموثوق.',
      primaryCta: 'استكشف خدماتنا',
      secondaryCta: 'اتصل بنا',
      whatsappCta: 'تواصل عبر واتساب',
      domainsLabel: 'مجالات الخدمة الرئيسية',
      domainsList: [
        'السفر والتأشيرات',
        'أبشر وقوى ومقيم',
        'السجلات التجارية',
        'تأسيس شركات المستثمرين',
      ],
    },
    highlights: {
      sectionLabel: 'ركائز خدماتنا',
      items: [
        {
          title: 'خدمات شاملة ومتكاملة',
          description:
            'مساندة متكاملة عبر ثمانية أقسام رئيسية تغطي السفر، المنصات الحكومية الإلكترونية، السجلات التجارية، وخدمات المستثمرين.',
        },
        {
          title: 'مساندة احترافية دقيقة',
          description:
            'إعداد وتنسيق المستندات والتسجيل في المنصات ومتابعة الإجراءات بدقة ووضوح تام.',
        },
        {
          title: 'إجراءات ميسّرة ومريحة',
          description:
            'تنظيم متكامل للخطوات الإجرائية لتوفير وقتك وتبسيط المتطلبات الإدارية المتعددة.',
        },
        {
          title: 'اهتمام متواصل بالعميل',
          description:
            'تواصل مباشر وسريع باللغات العربية والإنجليزية والأردية لخدمة الأفراد والمنشآت والمستثمرين.',
        },
      ],
    },
    aboutPreview: {
      kicker: 'نبذة عن مكتبنا',
      heading: 'شريكك الموثوق في المملكة العربية السعودية',
      description:
        'نقدم مساندة شاملة في مجالات السفر، التعليم، الإجراءات الحكومية، الخدمات التجارية، والشؤون المتعلقة بالاستثمار. هدفنا هو تبسيط الإجراءات المعقدة وتقديم دعم مريح واحترافي للأفراد والشركات والمستثمرين.',
      secondaryParagraph:
        'سواء كنت فرداً يرغب في إنجاز معاملات السفر والأحوال المدنية والمرور، أو صاحب منشأة يتابع ملفات قوى ومقيم والسجل التجاري، أو مستثمراً يرغب في تأسيس شركة في المملكة، فإن مكتبنا يوفر لك المساندة الإجرائية خطوة بخطوة.',
      cta: 'اعرف المزيد عنا',
      pillars: [
        {
          title: 'خدمات الأفراد والأسر',
          detail: 'حجوزات السفر، التأشيرات، أبشر، الأحوال المدنية، المرور، الإسكان، والضمان الاجتماعي.',
        },
        {
          title: 'خدمات المؤسسات والشركات',
          detail: 'السجلات التجارية، قوى، مدد، مقيم، الرخص البلدية، وإقرارات الزكاة والضريبة.',
        },
        {
          title: 'خدمات المستثمرين الأجانب',
          detail: 'تأسيس الشركات، تراخيص الاستثمار، الحسابات البنكية للشركات، وإجراءات تملك العقار.',
        },
      ],
    },
    mainServicesSection: {
      kicker: 'دليل الخدمات',
      heading: 'خدماتنا الرئيسية',
      description:
        'استكشف أقسام خدماتنا الثمانية المصممة لتلبية احتياجات المواطنين والمقيمين وأصحاب الأعمال والمستثمرين في المملكة العربية السعودية.',
      exploreLink: 'استعرض الخدمات',
      enquireWhatsapp: 'استفسار عبر واتساب',
      viewAllServices: 'عرض كافة تفاصيل الخدمات',
      servicesCountSuffix: 'خدمات',
    },
    investorHighlight: {
      kicker: 'الاستثمار الأجنبي وتأسيس الشركات',
      heading: 'ابدأ نشاطك التجاري في المملكة العربية السعودية',
      description:
        'استكشف فرص تأسيس أعمالك في المملكة العربية السعودية مع مساندة احترافية متكاملة طوال مراحل تأسيس الشركة وإجراءات الاستثمار.',
      highlightsList: [
        'تأسيس الشركات للمستثمرين الأجانب.',
        'المساعدة في طلبات تراخيص الاستثمار.',
        'إصدار السجل التجاري.',
        'تسجيل الأنشطة التجارية.',
        'المساعدة في فتح الحسابات البنكية للشركات.',
        'إصدار الرخص البلدية.',
        'المساعدة في التسجيل لدى هيئة الزكاة والضريبة.',
        'المساندة الإجرائية في شراء العقارات.',
      ],
      cta: 'استكشف خدمات المستثمرين',
      whatsappCta: 'استفسر عن خدمات المستثمرين',
      complianceNote:
        'تخضع كافة إجراءات تأسيس الشركات ونسب التملك والتراخيص وشراء العقارات للأنظمة واللوائح المعمول بها في المملكة العربية السعودية وموافقة الجهات المختصة.',
    },
    whyChooseUs: {
      kicker: 'لماذا تختارنا؟',
      heading: 'لماذا تختار مكتبنا؟',
      description:
        'نجمع بين المعرفة الإجرائية المنظمة والتواصل السلس بلغات متعددة لمساعدتك على إتمام معاملاتك بكل يسر.',
      items: [
        {
          title: 'مجموعة واسعة من الخدمات',
          description:
            'من تذاكر الطيران والقبول الجامعي إلى السجلات التجارية وخدمات المحاكم في مكان واحد.',
        },
        {
          title: 'دعم احترافي في إعداد المستندات',
          description:
            'صياغة دقيقة وترجمة وتنسيق وتقديم إلكتروني للطلبات والخطابات الرسمية والعقود.',
        },
        {
          title: 'سهولة ومرونة في طلب الخدمة',
          description:
            'إمكانية بدء الاستفسار فوراً عبر واتساب أو الهاتف أو نموذج التواصل الإلكتروني مع إرشاد واضح.',
        },
        {
          title: 'أقسام خدمية متعددة ومتخصصة',
          description:
            'ثمانية أقسام متخصصة تشمل السفر، الموارد البشرية، التجارة، البلديات، المرور، العدلية، الإسكان، والتأمين.',
        },
        {
          title: 'مساندة للأفراد وقطاع الأعمال',
          description:
            'حلول إجرائية مخصصة للأفراد والشركات المحلية والمستثمرين الدوليين في السوق السعودي.',
        },
        {
          title: 'متابعة مستمرة وخدمة عملاء متميزة',
          description:
            'متابعة دقيقة لطلبات التجديد والمواعيد والاعتراضات وملفات المنشآت باللغات العربية والإنجليزية والأردية.',
        },
      ],
    },
    contactCta: {
      kicker: 'هل أنت مستعد للبدء؟',
      heading: 'دعنا نجعل إجراءاتك أكثر سهولة',
      description:
        'سواء كنت بحاجة إلى مساعدة في ترتيبات السفر أو الإجراءات الحكومية أو تأسيس شركتك في المملكة العربية السعودية، نحن على أتم الاستعداد لخدمتك.',
      contactButton: 'اتصل بنا',
      whatsappButton: 'تحدث معنا عبر واتساب',
    },
    servicesPage: {
      kicker: 'الدليل الكامل للخدمات',
      title: 'خدمات السفر والمعاملات الحكومية وخدمات الأعمال',
      description:
        'تصفح كافة الأقسام الثمانية أدناه. يمكنك اختيار القسم المطلوب أو استخدام شريط البحث للوصول السريع إلى الخدمة وطلبها مباشرة.',
      searchPlaceholder: 'ابحث عن خدمة (مثل: أبشر، قوى، السجل التجاري، تأشيرة، قطار الحرمين)...',
      allCategoriesTab: 'جميع الأقسام',
      expandAll: 'فتح كافة الأقسام',
      collapseAll: 'طي الكل',
      includedServicesLabel: 'الخدمات المتوفرة ضمن هذا القسم',
      enquireCategoryWhatsapp: 'استفسر عبر واتساب',
      enquireServiceWhatsapp: 'طلب الخدمة',
      requestViaForm: 'طلب عبر نموذج الاتصال',
      noResults: 'لم يتم العثور على خدمات مطابقة لبحثك.',
      resetFilter: 'عرض جميع الخدمات',
    },
    investorPage: {
      kicker: 'مساندة الاستثمار وتأسيس الشركات في السعودية',
      title: 'خدمات المستثمرين وتأسيس الشركات في المملكة العربية السعودية',
      heroDescription:
        'ابدأ نشاطك التجاري في المملكة العربية السعودية بمساندة احترافية في تأسيس الشركات وإجراءات الاستثمار والتسجيل التجاري.',
      primaryCta: 'ناقش خطة عملك معنا',
      whatsappCta: 'تواصل مع قسم المستثمرين عبر واتساب',
      servicesSectionKicker: 'نطاق خدمات المستثمرين',
      servicesSectionHeading: 'خدمات تأسيس الشركات والتراخيص والمساندة الإجرائية',
      servicesSectionIntro:
        'نوفر مساندة إجرائية منظمة لرواد الأعمال والمستثمرين الأجانب الراغبين في تأسيس أو توسيع أعمالهم في المملكة العربية السعودية.',
      processKicker: 'منهجية العمل',
      processHeading: 'خطوات مساندة المستثمرين وتأسيس الأعمال',
      processIntro:
        'خطوات واضحة ومنظمة لمرافقتك من الاستشارة الأولية وحتى استكمال التسجيل الرسمي وإجراءات ما بعد التأسيس.',
      processSteps: [
        {
          stepNumber: '01',
          title: 'الاستشارة الأولية',
          description:
            'مناقشة النشاط التجاري المستهدف ومتطلبات المستثمر والأهداف الإجرائية في المملكة العربية السعودية.',
        },
        {
          stepNumber: '02',
          title: 'فهم متطلبات النشاط التجاري',
          description:
            'تحديد خطوات التسجيل المناسبة والمستندات المطلوبة والمسارات النظامية ذات الصلة بالنشاط.',
        },
        {
          stepNumber: '03',
          title: 'المساعدة في تجهيز المستندات',
          description:
            'إعداد وترجمة وتنسيق وتجهيز ملفات الطلبات والوثائق الداعمة المطلوبة.',
        },
        {
          stepNumber: '04',
          title: 'دعم تقديم الطلبات والتسجيل',
          description:
            'المساعدة في تقديم طلبات تراخيص الاستثمار وإصدار السجل التجاري وفتح ملفات المنشأة والرخص البلدية.',
        },
        {
          stepNumber: '05',
          title: 'متابعة الإجراءات',
          description:
            'متابعة التسجيل في الزكاة والضريبة وإجراءات فتح الحساب البنكي للشركة وإجراءات تسجيل العقارات.',
        },
      ],
      regulatoryNoticeTitle: 'تنويه تنظيمي وقانوني هام',
      regulatoryNoticeBody:
        'إن التملك الأجنبي بنسبة 100%، وإصدار تراخيص الاستثمار، وتسجيل الأنشطة التجارية، وشراء العقارات في المملكة العربية السعودية تخضع جميعها للأنظمة واللوائح السعودية المعمول بها وتصنيفات الأنشطة وشروط الأهلية النظامية.',
      regulatoryNoticeDisclaimer:
        'يقدم مكتبنا خدمات مساندة إجرائية وتجهيز مستندات للقطاع الخاص والأفراد، ولا يُعد جهة حكومية؛ وتظل كافة التراخيص والسجلات والموافقات خاضعة للمراجعة والاعتماد من قِبل الوزارات والجهات الرسمية المختصة في المملكة العربية السعودية.',
      discussPlanCta: 'ناقش خطة عملك معنا',
    },
    aboutPage: {
      kicker: 'من نحن',
      title: 'عن مكتبنا لخدمات السفر والمعاملات الحكومية والأعمال',
      heroSubtitle:
        'نكرّس جهودنا لتبسيط إجراءات السفر والمعاملات الحكومية والخدمات التجارية وإجراءات الاستثمار في المملكة العربية السعودية بوضوح واحترافية.',
      introHeading: 'شريكك الموثوق في المملكة العربية السعودية',
      introParagraph1:
        'نقدم في مكتبنا بالمملكة العربية السعودية مساندة إجرائية شاملة تغطي حجوزات السفر، القبول التعليمي، المنصات الحكومية الإلكترونية، السجلات التجارية، الصياغة والخدمات العدلية، التراخيص البلدية، وتأسيس الشركات للمستثمرين.',
      introParagraph2:
        'ندرك أن التعامل مع المنصات الإلكترونية المتعددة وإعداد الخطابات الرسمية وتنسيق إجراءات تأسيس الأعمال يتطلب دقة ومتابعة مستمرة؛ لذا نسعى إلى تسهيل هذه العمليات وتقديم دعم منظم ومريح للأفراد والأسر والشركات والمستثمرين.',
      missionTitle: 'رسالتنا',
      missionText:
        'تبسيط إجراءات السفر والمعاملات الحكومية والتجارية في المملكة العربية السعودية من خلال تقديم دعم دقيق في تجهيز المستندات ومتابعة موثوقة وخدمة متاحة بعدة لغات.',
      visionTitle: 'رؤيتنا',
      visionText:
        'أن نكون الوجهة الموثوقة الأولى للأفراد والمنشآت التجارية والمستثمرين الباحثين عن خدمات إجرائية واضحة وموثوقة وميسّرة في المملكة العربية السعودية.',
      commitmentTitle: 'التزامنا تجاه عملائنا',
      commitmentIntro:
        'نلتزم في كل معاملة واستفسار بالوضوح التام والدقة الإجرائية والامتثال للأنظمة المعمول بها.',
      commitmentPoints: [
        {
          title: 'الوضوح والشفافية',
          description:
            'نوضح المتطلبات والمستندات والخطوات الإجرائية بشكل كامل قبل البدء بتقديم الطلبات.',
        },
        {
          title: 'التواصل بثلاث لغات',
          description:
            'تقديم الخدمة باللغات العربية والإنجليزية والأردية لضمان راحة العميل وسهولة التواصل.',
        },
        {
          title: 'دقة إعداد الوثائق',
          description:
            'عناية فائقة في إعداد النماذج والخطابات الرسمية والعقود والترجمة والتقديم عبر المنصات.',
        },
        {
          title: 'المتابعة المستمرة',
          description:
            'متابعة حثيثة لعمليات التجديد وحجوزات المواعيد والاعتراضات وتحديث ملفات المنشآت.',
        },
      ],
      expertiseTitle: 'مجالات خبرتنا وخدماتنا',
      expertiseIntro:
        'تشمل خدماتنا ثمانية قطاعات رئيسية بالإضافة إلى قسم مخصص لخدمات المستثمرين الأجانب وتأسيس الشركات في المملكة.',
    },
    contactPage: {
      kicker: 'تواصل معنا',
      title: 'اتصل بمكتبنا',
      subtitle:
        'أرسل استفسارك عبر النموذج أدناه أو تواصل معنا مباشرة عبر واتساب أو الهاتف. يسعدنا خدمتك باللغة العربية أو الإنجليزية أو الأردية.',
      formTitle: 'نموذج طلب خدمة أو استفسار',
      formSubtitle:
        'يرجى تعبئة بياناتك واختيار قسم الخدمة المطلوب. جميع الحقول المشار إليها بعلامة * مطلوبة.',
      fullNameLabel: 'الاسم الكامل *',
      fullNamePlaceholder: 'أدخل اسمك الكامل',
      phoneLabel: 'رقم الجوال / واتساب *',
      phonePlaceholder: '+966 5X XXX XXXX',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'you@example.com',
      categoryLabel: 'قسم الخدمة *',
      categoryPlaceholder: 'اختر قسم الخدمة المطلوب',
      investorCategoryOption: 'خدمات المستثمرين وتأسيس الشركات',
      generalEnquiryOption: 'استفسار عام / خدمات متعددة',
      messageLabel: 'تفاصيل الرسالة أو الخدمة المطلوبة *',
      messagePlaceholder: 'يرجى كتابة تفاصيل الخدمة أو الإجراء الذي ترغب في الحصول على المساعدة بشأنه...',
      submitButton: 'إرسال الطلب',
      submittingButton: 'جارٍ إرسال الطلب...',
      successTitle: 'تم استلام طلبك بنجاح',
      successMessage:
        'شكراً لتواصلك معنا. تم تسجيل بيانات استفسارك بنجاح، وللحصول على مساندة فورية يمكنك أيضاً إرسال هذا الطلب مباشرة عبر واتساب.',
      sendAnotherButton: 'إرسال طلب آخر',
      continueOnWhatsapp: 'إرسال هذا الطلب عبر واتساب',
      validation: {
        nameRequired: 'يرجى إدخال الاسم الكامل.',
        phoneRequired: 'يرجى إدخال رقم الجوال أو واتساب.',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح (7 أرقام على الأقل).',
        emailRequired: 'يرجى إدخال البريد الإلكتروني.',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
        categoryRequired: 'يرجى اختيار قسم الخدمة.',
        messageRequired: 'يرجى كتابة تفاصيل الخدمة المطلوبة.',
      },
      infoSectionTitle: 'بيانات التواصل مع المكتب',
      infoSectionNote:
        'تواصل معنا مباشرة عبر الهاتف أو واتساب أو البريد الإلكتروني الرسمي لشركة فيروز العروة.',
      officeAddressLabel: 'عنوان المكتب',
      phoneInfoLabel: 'رقم الهاتف',
      whatsappInfoLabel: 'رقم واتساب',
      emailInfoLabel: 'البريد الإلكتروني',
      businessHoursLabel: 'ساعات العمل',
      mapLocationLabel: 'الموقع على خرائط جوجل',
      socialMediaLabel: 'حسابات التواصل الاجتماعي',
      configurePlaceholdersBtn: 'تعديل بيانات التواصل',
      saveConfigBtn: 'حفظ بيانات التواصل',
      resetConfigBtn: 'إعادة الضبط للقيم الافتراضية',
      configSavedNotice: 'تم تحديث بيانات التواصل في جلستك الحالية.',
    },
    whatsapp: {
      floatingLabel: 'تواصل عبر واتساب',
      modalTitle: 'بدء محادثة واتساب',
      modalSubtitle: 'راجع رسالتك الجاهزة أدناه وانتقل مباشرة إلى تطبيق واتساب.',
      prefilledMessageLabel: 'الرسالة المجهزة تلقائياً',
      recipientNumberLabel: 'رقم واتساب الشركة الرسمي',
      editableNumberHint:
        'متصل برقم واتساب شركة فيروز العروة الرسمي (+966 53 182 2041). انقر على المتابعة إلى واتساب لإرسال رسالتك.',
      copyMessageBtn: 'نسخ الرسالة',
      copiedLabel: 'تم النسخ!',
      openWhatsappBtn: 'المتابعة إلى واتساب',
      closeBtn: 'إغلاق',
      defaultGeneralMessage:
        'السلام عليكم، أود الاستفسار عن خدمات السفر والمعاملات الحكومية وخدمات الأعمال لديكم في المملكة العربية السعودية.',
      investorEnquiryMessage:
        'السلام عليكم، أود الاستفسار عن خدمات المستثمرين وتأسيس الشركات في المملكة العربية السعودية.',
      categoryEnquiryPrefix: 'السلام عليكم، أود الاستفسار عن',
      serviceEnquiryPrefix: 'السلام عليكم، أود طلب المساعدة في خدمة:',
    },
    footer: {
      description:
        'مكتب خدمات متكامل في المملكة العربية السعودية يقدم المساندة الاحترافية في حجوزات السفر، المنصات الحكومية الإلكترونية، السجلات التجارية، الخدمات العدلية، وتأسيس الشركات للمستثمرين.',
      quickLinksTitle: 'روابط سريعة',
      mainServicesTitle: 'أقسام الخدمات الرئيسية',
      contactInfoTitle: 'معلومات التواصل',
      placeholderNotice: 'تواصل مباشر عبر واتساب والهاتف والبريد الإلكتروني.',
      rightsReserved: 'جميع الحقوق محفوظة.',
      regulatoryNote:
        'مكتب خاص لخدمات السفر والأعمال. تخضع كافة الإجراءات والتراخيص والموافقات للأنظمة السعودية والجهات الحكومية المختصة.',
    },
  },
  ur: {
    meta: {
      homeTitle: 'فیروز العروہ کمپنی | سعودی عرب میں سفر، سرکاری معاملات اور کاروباری خدمات',
      homeDescription:
        'فیروز العروہ کمپنی سعودی عرب میں سفری بکنگ، سرکاری خدمات، کاروباری رجسٹریشن، کمپنی کی تشکیل اور سرمایہ کاروں کی خدمات میں پیشہ ورانہ معاونت فراہم کرتی ہے۔',
      servicesTitle: 'ہماری مکمل خدمات | فیروز العروہ کمپنی – سعودی عرب',
      servicesDescription:
        'سفر اور تعلیم، ابشر و جوازات، تجارتی خدمات، بلدیہ، ٹریفک، عدالتی خدمات، سماجی معاونت اور انشورنس و بینکنگ کے آٹھ شعبوں کی مکمل تفصیلات۔',
      investorTitle: 'سعودی عرب میں سرمایہ کاروں کی خدمات اور کمپنی کی تشکیل | فیروز العروہ کمپنی',
      investorDescription:
        'کمپنی کی تشکیل، سرمایہ کاری کے مراحل اور کاروباری رجسٹریشن میں پیشہ ورانہ معاونت کے ساتھ سعودی عرب میں اپنا کاروبار شروع کریں۔',
      aboutTitle: 'ہمارے بارے میں | فیروز العروہ کمپنی برائے سفر و سیاحت اور کاروباری خدمات',
      aboutDescription:
        'سعودی عرب میں سفر، سرکاری کارروائیوں اور کاروباری و سرمایہ کاری خدمات کو آسان بنانے کے فیروز العروہ کمپنی کے مشن، وژن اور عزم کے بارے میں جانیے۔',
      contactTitle: 'رابطہ کریں | فیروز العروہ کمپنی – سعودی عرب',
      contactDescription:
        'سعودی عرب میں سفر، سرکاری معاملات یا کمپنی کی تشکیل میں معاونت کے لیے واٹس ایپ، فون یا آن لائن فارم کے ذریعے فیروز العروہ کمپنی سے رابطہ کریں۔',
    },
    brand: {
      name: 'فیروز العروہ کمپنی',
      locationLabel: 'مملکتِ سعودی عرب',
      tagline: 'ٹریول اینڈ ٹورازم · سرکاری معاملات اور کاروباری خدمات',
    },
    nav: {
      home: 'صفحہ اول',
      about: 'ہمارے بارے میں',
      services: 'ہماری خدمات',
      investorServices: 'سرمایہ کار خدمات',
      contact: 'رابطہ کریں',
      whatsappCta: 'واٹس ایپ',
      languageLabel: 'زبان',
      openMenu: 'نیویگیشن مینو کھولیں',
      closeMenu: 'نیویگیشن مینو بند کریں',
    },
    hero: {
      kicker: 'مملکتِ سعودی عرب · سفر، سرکاری معاملات اور کاروباری معاونت',
      headline: 'سعودی عرب میں سفر، سرکاری معاملات اور کاروباری خدمات کے لیے آپ کا قابلِ اعتماد ساتھی۔',
      supportingText:
        'سفر کے انتظامات اور سرکاری کارروائیوں سے لے کر کاروبار کے قیام اور سرمایہ کاری میں معاونت تک، ہم پیشہ ورانہ اور قابلِ بھروسہ تعاون کے ساتھ آپ کے مراحل کو آسان بناتے ہیں۔',
      primaryCta: 'ہماری خدمات دیکھیے',
      secondaryCta: 'رابطہ کریں',
      whatsappCta: 'واٹس ایپ پر بات کریں',
      domainsLabel: 'اہم شعبہ جات',
      domainsList: [
        'سفر اور ویزا سروسز',
        'ابشر، قویٰ اور مقیم',
        'تجارتی رجسٹریشن (سجلِ تجارتی)',
        'غیر ملکی سرمایہ کار کمپنی تشکیل',
      ],
    },
    highlights: {
      sectionLabel: 'ہماری خصوصیات',
      items: [
        {
          title: 'جامع اور مکمل خدمات',
          description:
            'سفر، الیکٹرانک سرکاری پورٹلز، کمرشل رجسٹریشن اور سرمایہ کاری سمیت آٹھ خصوصی شعبوں میں مربوط معاونت۔',
        },
        {
          title: 'پیشہ ورانہ رہنمائی اور تعاون',
          description:
            'کاغذات کی درست تیاری، پورٹل رجسٹریشن اور سرکاری ضوابط کے مطابق مراحل کی مکمل پیروی۔',
        },
        {
          title: 'آسان اور سہل طریقہ کار',
          description:
            'آپ کا قیمتی وقت بچانے اور پیچیدہ دفتری تقاضوں کو سادہ بنانے کے لیے منظم خدمات۔',
        },
        {
          title: 'صارفین کی سہولت پر خصوصی توجہ',
          description:
            'افراد، کاروباری اداروں اور سرمایہ کاروں کے لیے انگریزی، عربی اور اردو زبان میں براہِ راست اور فوری رابطہ۔',
        },
      ],
    },
    aboutPreview: {
      kicker: 'ہمارے دفتر کا تعارف',
      heading: 'سعودی عرب میں آپ کا قابلِ بھروسہ ساتھی',
      description:
        'ہم سفر، تعلیم، سرکاری ضوابط، تجارتی خدمات اور سرمایہ کاری سے متعلق امور میں جامع معاونت فراہم کرتے ہیں۔ ہمارا مقصد پیچیدہ مراحل کو آسان بنانا اور افراد، کاروباری اداروں اور سرمایہ کاروں کو سہل اور پیشہ ورانہ تعاون فراہم کرنا ہے۔',
      secondaryParagraph:
        'چاہے آپ کو اپنے خاندان اور ذاتی معاملات کے لیے سفری و سرکاری خدمات درکار ہوں، یا آپ اپنے ادارے کے لیے قویٰ، مقیم اور سجلِ تجارتی کے امور چلا رہے ہوں، یا سعودی عرب میں نئی کمپنی قائم کرنا چاہتے ہوں، ہمارا دفتر ہر قدم پر آپ کی رہنمائی کرتا ہے۔',
      cta: 'مزید جانیے',
      pillars: [
        {
          title: 'افراد اور خاندانوں کے لیے',
          detail: 'فلائٹ بکنگ، ویزا، ابشر، احوالِ مدنیہ، ٹریفک (مرور)، ہاؤسنگ اور سوشل سپورٹ کی خدمات۔',
        },
        {
          title: 'کاروباری اداروں اور کمپنیوں کے لیے',
          detail: 'کمرشل رجسٹریشن، قویٰ، مدد، مقیم، بلدیہ لائسنس اور زکوٰۃ و ٹیکس کے گوشوارے۔',
        },
        {
          title: 'غیر ملکی سرمایہ کاروں کے لیے',
          detail: 'کمپنی کی تشکیل، انویسٹمنٹ لائسنس، کارپوریٹ بینک اکاؤنٹ اور جائیداد کی خریداری کے مراحل۔',
        },
      ],
    },
    mainServicesSection: {
      kicker: 'خدمات کی فہرست',
      heading: 'ہماری بنیادی خدمات',
      description:
        'سعودی عرب میں مقیم افراد، شہریوں، تجارتی اداروں اور غیر ملکی سرمایہ کاروں کی ضروریات کے مطابق ہمارے آٹھ مرکزی شعبہ جات کا جائزہ لیں۔',
      exploreLink: 'تفصیلات دیکھیے',
      enquireWhatsapp: 'واٹس ایپ پر معلومات لیں',
      viewAllServices: 'تمام خدمات کی مکمل فہرست دیکھیں',
      servicesCountSuffix: 'خدمات',
    },
    investorHighlight: {
      kicker: 'غیر ملکی سرمایہ کاری اور کمپنی کی تشکیل',
      heading: 'سعودی عرب میں اپنا کاروبار شروع کریں',
      description:
        'کمپنی کی تشکیل اور سرمایہ کاری کے تمام مراحل میں پیشہ ورانہ معاونت کے ساتھ سعودی عرب میں اپنا کاروبار قائم کرنے کے مواقع سے فائدہ اٹھائیں۔',
      highlightsList: [
        'غیر ملکی سرمایہ کاروں کے لیے کمپنی کی تشکیل۔',
        'سرمایہ کاری لائسنس کی درخواست میں معاونت۔',
        'کمرشل رجسٹریشن (سجلِ تجارتی) کا اجراء۔',
        'کاروباری سرگرمیوں (بزنس ایکٹیویٹی) کی رجسٹریشن۔',
        'کارپوریٹ بینک اکاؤنٹ کھولنے میں معاونت۔',
        'بلدیہ لائسنسوں کا حصول۔',
        'زکوٰۃ اور ٹیکس رجسٹریشن میں معاونت۔',
        'جائیداد کی خریداری کے قانونی مراحل میں معاونت۔',
      ],
      cta: 'سرمایہ کار خدمات دیکھیے',
      whatsappCta: 'سرمایہ کاری کے بارے میں رابطہ کریں',
      complianceNote:
        'کمپنی کی تشکیل، ملکیت کا تناسب، لائسنسنگ اور جائیداد کی خریداری کے تمام مراحل سعودی عرب کے نافذ العمل قوانین، ضوابط اور متعلقہ سرکاری اداروں کی منظوری سے مشروط ہیں۔',
    },
    whyChooseUs: {
      kicker: 'ہماری انفرادیت',
      heading: 'ہمارا انتخاب کیوں کریں؟',
      description:
        'ہم منظم طریقہ کار اور تین زبانوں میں آسان رابطے کے ذریعے آپ کے سفری، سرکاری اور کاروباری معاملات کو بروقت مکمل کرنے میں مدد دیتے ہیں۔',
      items: [
        {
          title: 'خدمات کا وسیع دائرہ کار',
          description:
            'فضائی ٹکٹوں اور یونیورسٹی داخلوں سے لے کر کمرشل رجسٹریشن اور عدالتی دستاویزات تک تمام خدمات ایک ہی جگہ پر۔',
        },
        {
          title: 'دستاویزات کی تیاری میں پیشہ ورانہ معاونت',
          description:
            'درخواستوں، سرکاری خطوط، معاہدوں کی درست تحریر، ترجمہ، فارمیٹنگ اور آن لائن جمع کرانے کی سہولت۔',
        },
        {
          title: 'آسان اور فوری سروس اسسٹنس',
          description:
            'واٹس ایپ، فون یا آن لائن فارم کے ذریعے فوری رابطہ اور ہر مرحلے پر واضح رہنمائی۔',
        },
        {
          title: 'متعدد خصوصی شعبہ جات',
          description:
            'سفر، ایچ آر پورٹلز، تجارت، بلدیہ، ٹریفک، عدالت، ہاؤسنگ اور انشورنس و بینکنگ کے آٹھ مربوط شعبے۔',
        },
        {
          title: 'انفرادی اور کاروباری معاونت',
          description:
            'عام افراد، مقامی کمپنیوں اور سعودی مارکیٹ میں آنے والے غیر ملکی سرمایہ کاروں کے لیے موزوں حل۔',
        },
        {
          title: 'مسلسل پیروی اور کسٹمر سپورٹ',
          description:
            'انگریزی، عربی اور اردو میں تجدید، اپائنٹمنٹس، اعتراضات اور کمپنی فائلز کی باقاعدہ پیروی۔',
        },
      ],
    },
    contactCta: {
      kicker: 'آغاز کرنے کے لیے تیار ہیں؟',
      heading: 'آئیے آپ کے مراحل کو آسان بنائیں',
      description:
        'چاہے آپ کو سفر، سرکاری کارروائیوں یا سعودی عرب میں اپنا کاروبار قائم کرنے میں مدد درکار ہو، ہم آپ کی معاونت کے لیے تیار ہیں۔',
      contactButton: 'رابطہ کریں',
      whatsappButton: 'واٹس ایپ پر بات کریں',
    },
    servicesPage: {
      kicker: 'خدمات کی مکمل ڈائریکٹری',
      title: 'جامع سفری، سرکاری اور کاروباری خدمات',
      description:
        'ذیل میں ہمارے تمام آٹھ شعبہ جات کی تفصیلات موجود ہیں۔ کسی بھی شعبے کا انتخاب کریں یا سرچ بار کے ذریعے اپنی مطلوبہ خدمت تلاش کر کے فوری رابطہ کریں۔',
      searchPlaceholder: 'خدمت تلاش کریں (مثلاً: ابشر، قویٰ، سجل تجارتی، ویزا، حرمین ٹرین)...',
      allCategoriesTab: 'تمام شعبہ جات',
      expandAll: 'تمام شعبے کھولیں',
      collapseAll: 'تمام بند کریں',
      includedServicesLabel: 'اس شعبے میں شامل خدمات',
      enquireCategoryWhatsapp: 'واٹس ایپ پر معلومات لیں',
      enquireServiceWhatsapp: 'معلومات لیں',
      requestViaForm: 'فارم کے ذریعے درخواست دیں',
      noResults: 'آپ کی تلاش کے مطابق کوئی خدمت نہیں ملی۔',
      resetFilter: 'تمام خدمات دکھائیں',
    },
    investorPage: {
      kicker: 'سعودی عرب میں سرمایہ کاری اور کمپنی رجسٹریشن',
      title: 'سعودی عرب میں سرمایہ کاروں کی خدمات اور کمپنی کی تشکیل',
      heroDescription:
        'کمپنی کی تشکیل، سرمایہ کاری کے مراحل اور کاروباری رجسٹریشن میں پیشہ ورانہ معاونت کے ساتھ سعودی عرب میں اپنا کاروبار شروع کریں۔',
      primaryCta: 'اپنے کاروباری منصوبے پر بات کریں',
      whatsappCta: 'واٹس ایپ پر انویسٹر سپورٹ سے رابطہ کریں',
      servicesSectionKicker: 'سرمایہ کاروں کے لیے مکمل معاونت',
      servicesSectionHeading: 'کمپنی کی تشکیل، لائسنسنگ اور قانونی مراحل کی خدمات',
      servicesSectionIntro:
        'ہم مملکتِ سعودی عرب میں اپنا کاروبار قائم کرنے یا وسعت دینے کے خواہشمند کاروباری افراد اور غیر ملکی سرمایہ کاروں کو منظم طریقہ کار کی معاونت فراہم کرتے ہیں۔',
      processKicker: 'طریقہ کار',
      processHeading: 'سرمایہ کاروں کی معاونت کے 5 مراحل',
      processIntro:
        'ابتدائی مشاورت سے لے کر باضابطہ رجسٹریشن اور کمپنی فائلز کی تکمیل تک ایک واضح اور منظم طریقہ کار۔',
      processSteps: [
        {
          stepNumber: '01',
          title: 'ابتدائی مشاورت',
          description:
            'سعودی عرب میں آپ کی مجوزہ کاروباری سرگرمی، سرمایہ کاری کے مقاصد اور بنیادی تقاضوں پر تفصیلی گفتگو۔',
        },
        {
          stepNumber: '02',
          title: 'کاروباری ضروریات کا جائزہ',
          description:
            'موزوں رجسٹریشن کے مراحل، درکار دستاویزات اور متعلقہ قانونی ضوابط کا تعین کرنا۔',
        },
        {
          stepNumber: '03',
          title: 'دستاویزات کی تیاری میں معاونت',
          description:
            'درخواست کی فائلز اور معاون کاغذات کی تیاری، ترجمہ، فارمیٹنگ اور ترتیب۔',
        },
        {
          stepNumber: '04',
          title: 'درخواست اور رجسٹریشن میں تعاون',
          description:
            'انویسٹمنٹ لائسنس کی درخواست، سجلِ تجارتی، منشآت فائلز اور بلدیہ پرمٹس کے حصول میں معاونت۔',
        },
        {
          stepNumber: '05',
          title: 'مراحل کی مسلسل پیروی',
          description:
            'زکوٰۃ و ٹیکس رجسٹریشن، کارپوریٹ بینک اکاؤنٹ اور جائیداد کی رجسٹریشن کے مراحل کی مکمل پیروی۔',
        },
      ],
      regulatoryNoticeTitle: 'اہم قانونی اور ضابطہ جاتی وضاحت',
      regulatoryNoticeBody:
        'سعودی عرب میں 100% غیر ملکی ملکیت، سرمایہ کاری لائسنس کا اجراء، تجارتی سرگرمیوں کی رجسٹریشن اور اپنے نام پر جائیداد کی خریداری مکمل طور پر سعودی عرب کے قابلِ اطلاق قوانین، ضوابط اور اہلیت کی شرائط سے مشروط ہے۔',
      regulatoryNoticeDisclaimer:
        'ہمارا دفتر ایک نجی خدماتی ادارہ ہے جو دستاویزات اور طریقہ کار میں معاونت فراہم کرتا ہے۔ ہم کوئی سرکاری اتھارٹی نہیں ہیں اور تمام لائسنس، رجسٹریشن اور منظوریاں سعودی عرب کی متعلقہ وزارتوں اور سرکاری حکام کے فیصلے سے مشروط ہیں۔',
      discussPlanCta: 'اپنے کاروباری منصوبے پر بات کریں',
    },
    aboutPage: {
      kicker: 'ہمارے بارے میں',
      title: 'سفر، سرکاری معاملات اور کاروباری خدمات کے ہمارے دفتر کا تعارف',
      heroSubtitle:
        'مملکتِ سعودی عرب میں سفری، انتظامی، تجارتی اور سرمایہ کاری کے مراحل کو وضاحت اور پیشہ ورانہ مہارت کے ساتھ آسان بنانے کے لیے پُرعزم۔',
      introHeading: 'سعودی عرب میں آپ کا قابلِ اعتماد ساتھی',
      introParagraph1:
        'سعودی عرب میں قائم ہمارا دفتر سفری بکنگ، تعلیمی داخلوں، سرکاری الیکٹرانک پلیٹ فارمز، تجارتی رجسٹریشن، قانونی دستاویزات، بلدیہ لائسنسنگ اور غیر ملکی سرمایہ کاروں کی کمپنی تشکیل میں جامع معاونت فراہم کرتا ہے۔',
      introParagraph2:
        'ہم سمجھتے ہیں کہ متعدد سرکاری پورٹلز پر کام کرنا، درست سرکاری خطوط تیار کرنا اور کاروبار کے قیام کے مراحل کو مکمل کرنا خاص توجہ کا تقاضا کرتا ہے۔ ہمارا کردار ان مراحل کو سادہ بنانا اور افراد، خاندانوں، کاروباری اداروں اور سرمایہ کاروں کو منظم تعاون فراہم کرنا ہے۔',
      missionTitle: 'ہمارا مشن',
      missionText:
        'درست دستاویزی معاونت، قابلِ بھروسہ پیروی اور کثیر لسانی (انگریزی، عربی، اردو) رہنمائی کے ذریعے سعودی عرب میں سفر، سرکاری معاملات اور کاروباری مراحل کو آسان بنانا۔',
      visionTitle: 'ہمارا وژن',
      visionText:
        'سعودی عرب میں واضح، قابلِ اعتماد اور سہل خدماتی معاونت کے متلاشی افراد، تجارتی اداروں اور بین الاقوامی سرمایہ کاروں کے لیے سب سے قابلِ بھروسہ مرکز بننا۔',
      commitmentTitle: 'صارفین کے ساتھ ہمارا عہد',
      commitmentIntro:
        'ہم ہر معاملے اور استفسار میں واضح معلومات، پیشہ ورانہ احتیاط اور نافذ العمل قوانین کے احترام کو یقینی بناتے ہیں۔',
      commitmentPoints: [
        {
          title: 'وضاحت اور شفافیت',
          description:
            'درخواست جمع کرانے سے پہلے درکار کاغذات اور طریقہ کار کی مکمل اور واضح تفصیل فراہم کرنا۔',
        },
        {
          title: 'تین زبانوں میں سہولت',
          description:
            'انگریزی، عربی اور اردو میں مکمل معاونت تاکہ ہر صارف اپنیپسندیدہ زبان میں باآسانی بات کر سکے۔',
        },
        {
          title: 'دستاویزات کی درستگی',
          description:
            'فارمز، سرکاری خطوط، معاہدوں، ترجمے اور آن لائن درخواستوں کی تیاری میں خصوصی احتیاط۔',
        },
        {
          title: 'باقاعدہ پیروی (فالو اپ)',
          description:
            'تجدید، اپائنٹمنٹس، اعتراضات اور منشآت فائلز کی اپ ڈیٹس پر مسلسل نظر رکھنا۔',
        },
      ],
      expertiseTitle: 'ہماری مہارت کے شعبے',
      expertiseIntro:
        'ہماری خدمات آٹھ خصوصی شعبہ جات کے علاوہ غیر ملکی سرمایہ کاروں اور کمپنی کی تشکیل کے مکمل مراحل کا احاطہ کرتی ہیں۔',
    },
    contactPage: {
      kicker: 'ہم سے رابطہ کریں',
      title: 'ہمارے دفتر سے رابطہ کریں',
      subtitle:
        'ذیل میں دیے گئے فارم کے ذریعے اپنا پیغام بھیجیں یا واٹس ایپ اور فون پر براہِ راست رابطہ کریں۔ ہماری ٹیم انگریزی، عربی اور اردو میں آپ کی مدد کے لیے حاضر ہے۔',
      formTitle: 'خدمت کے حصول یا معلومات کا فارم',
      formSubtitle:
        'اپنی تفصیلات درج کریں اور مطلوبہ شعبہ منتخب کریں۔ * والے تمام خانے پُر کرنا ضروری ہیں۔',
      fullNameLabel: 'پورا نام *',
      fullNamePlaceholder: 'اپنا پورا نام درج کریں',
      phoneLabel: 'فون / واٹس ایپ نمبر *',
      phonePlaceholder: '+966 5X XXX XXXX',
      emailLabel: 'ای میل ایڈریس *',
      emailPlaceholder: 'you@example.com',
      categoryLabel: 'خدمت کا شعبہ *',
      categoryPlaceholder: 'مطلوبہ شعبہ منتخب کریں',
      investorCategoryOption: 'سرمایہ کاروں کی خدمات اور کمپنی کی تشکیل',
      generalEnquiryOption: 'عمومی استفسار / متعدد خدمات',
      messageLabel: 'آپ کا پیغام / مطلوبہ خدمت کی تفصیل *',
      messagePlaceholder: 'براہِ کرم اس خدمت یا کارروائی کی تفصیل لکھیں جس میں آپ کو معاونت درکار ہے...',
      submitButton: 'درخواست ارسال کریں',
      submittingButton: 'ارسال کیا جا رہا ہے...',
      successTitle: 'آپ کی درخواست موصول ہو گئی ہے',
      successMessage:
        'ہم سے رابطہ کرنے کا شکریہ۔ آپ کی تفصیلات محفوظ کر لی گئی ہیں۔ فوری معاونت کے لیے آپ اس درخواست کو براہِ راست ہمارے واٹس ایپ پر بھی بھیج سکتے ہیں۔',
      sendAnotherButton: 'ایک اور درخواست بھیجیں',
      continueOnWhatsapp: 'یہ درخواست واٹس ایپ پر بھیجیں',
      validation: {
        nameRequired: 'براہِ کرم اپنا پورا نام درج کریں۔',
        phoneRequired: 'براہِ کرم اپنا فون یا واٹس ایپ نمبر درج کریں۔',
        phoneInvalid: 'براہِ کرم درست فون نمبر درج کریں (کم از کم 7 ہندسے)۔',
        emailRequired: 'براہِ کرم اپنا ای میل ایڈریس درج کریں۔',
        emailInvalid: 'براہِ کرم درست ای میل ایڈریس درج کریں۔',
        categoryRequired: 'براہِ کرم خدمت کا شعبہ منتخب کریں۔',
        messageRequired: 'براہِ کرم مطلوبہ خدمت کی تفصیل درج کریں۔',
      },
      infoSectionTitle: 'دفتر کے رابطے کی تفصیلات',
      infoSectionNote:
        'فیروز العروہ کمپنی سے براہِ راست فون، واٹس ایپ یا ای میل کے ذریعے رابطہ کریں۔',
      officeAddressLabel: 'دفتر کا پتہ',
      phoneInfoLabel: 'فون نمبر',
      whatsappInfoLabel: 'واٹس ایپ نمبر',
      emailInfoLabel: 'ای میل ایڈریس',
      businessHoursLabel: 'دفتر کے اوقاتِ کار',
      mapLocationLabel: 'گوگل میپس لوکیشن',
      socialMediaLabel: 'سوشل میڈیا اکاؤنٹس',
      configurePlaceholdersBtn: 'رابطہ معلومات میں ترمیم کریں',
      saveConfigBtn: 'تفصیلات محفوظ کریں',
      resetConfigBtn: 'ڈیفالٹ بحال کریں',
      configSavedNotice: 'اس سیشن کے لیے رابطے کی تفصیلات اپ ڈیٹ کر دی گئی ہیں۔',
    },
    whatsapp: {
      floatingLabel: 'واٹس ایپ رابطہ',
      modalTitle: 'واٹس ایپ گفتگو شروع کریں',
      modalSubtitle: 'ذیل میں اپنا خودکار تیار شدہ پیغام دیکھیں اور واٹس ایپ پر جاری رکھیں۔',
      prefilledMessageLabel: 'تیار شدہ پیغام (آپ کی منتخب زبان میں)',
      recipientNumberLabel: 'کمپنی کا آفیشل واٹس ایپ نمبر',
      editableNumberHint:
        'فیروز العروہ کمپنی کے آفیشل واٹس ایپ نمبر (+966 53 182 2041) سے منسلک۔ پیغام بھیجنے کے لیے واٹس ایپ پر جاری رکھیں پر کلک کریں۔',
      copyMessageBtn: 'پیغام کاپی کریں',
      copiedLabel: 'کاپی ہو گیا!',
      openWhatsappBtn: 'واٹس ایپ پر جاری رکھیں',
      closeBtn: 'بند کریں',
      defaultGeneralMessage:
        'السلام علیکم، میں سعودی عرب میں آپ کی سفری، سرکاری اور کاروباری خدمات کے بارے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں۔',
      investorEnquiryMessage:
        'السلام علیکم، میں سعودی عرب میں سرمایہ کاروں کی خدمات اور کمپنی کی تشکیل کے بارے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں۔',
      categoryEnquiryPrefix: 'السلام علیکم، میں آپ کے اس شعبے کے بارے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں:',
      serviceEnquiryPrefix: 'السلام علیکم، مجھے اس خدمت میں معاونت درکار ہے:',
    },
    footer: {
      description:
        'سعودی عرب میں قائم پیشہ ورانہ خدماتی دفتر جو سفری بکنگ، سرکاری الیکٹرانک پورٹلز، کمرشل رجسٹریشن، قانونی دستاویزات اور غیر ملکی سرمایہ کاروں کی کمپنی تشکیل میں جامع معاونت فراہم کرتا ہے۔',
      quickLinksTitle: 'فوری لنکس',
      mainServicesTitle: 'خدمات کے بنیادی شعبے',
      contactInfoTitle: 'رابطے کی معلومات',
      placeholderNotice: 'واٹس ایپ، فون اور ای میل کے ذریعے براہِ راست رابطہ۔',
      rightsReserved: 'جملہ حقوق محفوظ ہیں۔',
      regulatoryNote:
        'نجی سفری و کاروباری خدمات کا دفتر۔ تمام سرکاری کارروائیاں، لائسنس اور منظوریاں سعودی عرب کے قوانین اور متعلقہ سرکاری اداروں سے مشروط ہیں۔',
    },
  },
};
