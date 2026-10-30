'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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

function pathnameToPageRoute(pathname: string | null): PageRoute {
  if (!pathname || pathname === '/') return 'home';
  const clean = pathname.replace(/^\//, '').split('/')[0];
  if (['services', 'investor-services', 'about', 'contact'].includes(clean)) {
    return clean as PageRoute;
  }
  return 'home';
}

function pageRouteToHref(page: PageRoute): string {
  return page === 'home' ? '/' : `/${page}`;
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [prefilledContactCategory, setPrefilledContactCategory] = useState<string>('');

  const [siteConfig, setSiteConfig] = useState<SiteContactConfig>(DEFAULT_SITE_CONFIG);

  const [whatsappModalState, setWhatsappModalState] = useState<{
    isOpen: boolean;
    message: string;
  }>({
    isOpen: false,
    message: '',
  });

  // Client hydration of saved language & config
  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
      if (savedLang === 'en' || savedLang === 'ar' || savedLang === 'ur') {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore storage errors
    }

    try {
      const savedConfig = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (savedConfig) {
        setSiteConfig({ ...DEFAULT_SITE_CONFIG, ...JSON.parse(savedConfig) });
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Sync category param from URL query if present
  useEffect(() => {
    if (searchParams) {
      const catParam = searchParams.get('category');
      if (catParam) {
        if (pathname?.includes('contact')) {
          setPrefilledContactCategory(catParam);
        } else if (pathname?.includes('services')) {
          setSelectedCategoryId(catParam);
        }
      }

      // Legacy ?page= param support
      const pageParam = searchParams.get('page') as PageRoute | null;
      if (
        pageParam &&
        ['home', 'services', 'investor-services', 'about', 'contact'].includes(pageParam)
      ) {
        const targetHref = pageRouteToHref(pageParam);
        if (pathname !== targetHref) {
          router.replace(targetHref);
        }
      }
    }
  }, [searchParams, pathname, router]);

  const currentPage = pathnameToPageRoute(pathname);
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
    if (typeof document === 'undefined') return;

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

  const navigateTo = (
    page: PageRoute,
    options?: { categoryId?: string; contactCategory?: string }
  ) => {
    if (options?.categoryId !== undefined) {
      setSelectedCategoryId(options.categoryId);
    } else if (page !== 'services') {
      setSelectedCategoryId(null);
    }

    if (options?.contactCategory !== undefined) {
      setPrefilledContactCategory(options.contactCategory);
    }

    const baseHref = pageRouteToHref(page);
    let fullHref = baseHref;

    if (options?.categoryId) {
      fullHref = `${baseHref}?category=${encodeURIComponent(options.categoryId)}`;
    } else if (options?.contactCategory) {
      fullHref = `${baseHref}?category=${encodeURIComponent(options.contactCategory)}`;
    }

    startTransition(() => {
      router.push(fullHref);
    });

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
