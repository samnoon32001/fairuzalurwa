import React, { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_SITE_CONFIG, SiteContactConfig } from '../lib/config';
import { Language } from '../lib/services';
import { TRANSLATIONS, TranslationDictionary } from '../lib/translations';

export type PageRoute = 'home' | 'services' | 'investor-services' | 'about' | 'contact';

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: TranslationDictionary;
  currentPage: PageRoute;
  navigateTo: (page: PageRoute, options?: { categoryId?: string; contactCategory?: string }) => void;
  selectedCategoryId: string | null;
  setSelectedCategoryId: (id: string | null) => void;
  prefilledContactCategory: string;
  setPrefilledContactCategory: (cat: string) => void;
  siteConfig: SiteContactConfig;
  updateSiteConfig: (partial: Partial<SiteContactConfig>) => void;
  resetSiteConfig: () => void;
  whatsappModalState: {
    isOpen: boolean;
    message: string;
  };
  openWhatsAppEnquiry: (customMessage?: string) => void;
  closeWhatsAppModal: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const LANG_STORAGE_KEY = 'almamlaka_selected_language_v1';
const CONFIG_STORAGE_KEY = 'fairuz_alurwa_client_config_v2';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'ar' || saved === 'ur') {
        return saved;
      }
    } catch {
      // Ignore storage errors
    }
    return 'en';
  });

  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageRoute | null;
      if (
        pageParam &&
        ['home', 'services', 'investor-services', 'about', 'contact'].includes(pageParam)
      ) {
        return pageParam;
      }
    }
    return 'home';
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [prefilledContactCategory, setPrefilledContactCategory] = useState<string>('');

  const [siteConfig, setSiteConfig] = useState<SiteContactConfig>(() => {
    try {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SITE_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore storage errors
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [whatsappModalState, setWhatsappModalState] = useState<{
    isOpen: boolean;
    message: string;
  }>({
    isOpen: false,
    message: '',
  });

  const isRtl = language === 'ar' || language === 'ur';
  const t = TRANSLATIONS[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors
    }
  };

  // Sync HTML lang, dir, and page SEO title/description
  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = language;
    htmlEl.dir = isRtl ? 'rtl' : 'ltr';

    let pageTitle = t.meta.homeTitle;
    let pageDesc = t.meta.homeDescription;

    if (currentPage === 'services') {
      pageTitle = t.meta.servicesTitle;
      pageDesc = t.meta.servicesDescription;
    } else if (currentPage === 'investor-services') {
      pageTitle = t.meta.investorTitle;
      pageDesc = t.meta.investorDescription;
    } else if (currentPage === 'about') {
      pageTitle = t.meta.aboutTitle;
      pageDesc = t.meta.aboutDescription;
    } else if (currentPage === 'contact') {
      pageTitle = t.meta.contactTitle;
      pageDesc = t.meta.contactDescription;
    }

    document.title = pageTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', pageDesc);
    }
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', pageTitle);
    }
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) {
      ogDescMeta.setAttribute('content', pageDesc);
    }
  }, [language, isRtl, currentPage, t]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageRoute | null;
      if (
        pageParam &&
        ['home', 'services', 'investor-services', 'about', 'contact'].includes(pageParam)
      ) {
        setCurrentPage(pageParam);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (
    page: PageRoute,
    options?: { categoryId?: string; contactCategory?: string }
  ) => {
    setCurrentPage(page);
    if (options?.categoryId !== undefined) {
      setSelectedCategoryId(options.categoryId);
    } else if (page !== 'services') {
      setSelectedCategoryId(null);
    }

    if (options?.contactCategory !== undefined) {
      setPrefilledContactCategory(options.contactCategory);
    }

    try {
      const url = page === 'home' ? window.location.pathname : `?page=${page}`;
      window.history.pushState({ page }, '', url);
    } catch {
      // Ignore history API restrictions in sandboxed environments
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateSiteConfig = (partial: Partial<SiteContactConfig>) => {
    setSiteConfig((prev) => {
      const updated = { ...prev, ...partial };
      try {
        localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  };

  const resetSiteConfig = () => {
    setSiteConfig(DEFAULT_SITE_CONFIG);
    try {
      localStorage.removeItem(CONFIG_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const openWhatsAppEnquiry = (customMessage?: string) => {
    const messageToUse = customMessage || t.whatsapp.defaultGeneralMessage;
    setWhatsappModalState({
      isOpen: true,
      message: messageToUse,
    });
  };

  const closeWhatsAppModal = () => {
    setWhatsappModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isRtl,
        t,
        currentPage,
        navigateTo,
        selectedCategoryId,
        setSelectedCategoryId,
        prefilledContactCategory,
        setPrefilledContactCategory,
        siteConfig,
        updateSiteConfig,
        resetSiteConfig,
        whatsappModalState,
        openWhatsAppEnquiry,
        closeWhatsAppModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
