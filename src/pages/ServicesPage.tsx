import React, { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  MessageCircle,
  Search,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CTASection } from '../components/CTASection';
import { ServiceIcon } from '../components/ServiceIcon';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES, ServiceCategoryData } from '../lib/services';

export const ServicesPage: React.FC = () => {
  const {
    language,
    t,
    selectedCategoryId,
    setSelectedCategoryId,
    navigateTo,
    openWhatsAppEnquiry,
    isRtl,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>(selectedCategoryId || 'all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    SERVICE_CATEGORIES.forEach((cat) => {
      initial[cat.id] = true;
    });
    return initial;
  });

  // Sync when navigating from a specific service card
  useEffect(() => {
    if (selectedCategoryId) {
      setActiveTab(selectedCategoryId);
      setExpandedIds((prev) => ({ ...prev, [selectedCategoryId]: true }));
    }
  }, [selectedCategoryId]);

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    SERVICE_CATEGORIES.forEach((c) => {
      all[c.id] = true;
    });
    setExpandedIds(all);
  };

  const collapseAll = () => {
    const none: Record<string, boolean> = {};
    SERVICE_CATEGORIES.forEach((c) => {
      none[c.id] = false;
    });
    setExpandedIds(none);
  };

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SERVICE_CATEGORIES.filter((cat) => {
      if (activeTab !== 'all' && cat.id !== activeTab) {
        return false;
      }
      if (!query) return true;

      const titleMatch =
        cat.title.en.toLowerCase().includes(query) ||
        cat.title.ar.toLowerCase().includes(query) ||
        cat.title.ur.toLowerCase().includes(query);

      const introMatch = cat.introduction[language].toLowerCase().includes(query);
      const platformMatch = cat.keyPlatforms.some((p) => p.toLowerCase().includes(query));
      const serviceMatch = cat.services.some(
        (s) =>
          s.en.toLowerCase().includes(query) ||
          s.ar.toLowerCase().includes(query) ||
          s.ur.toLowerCase().includes(query)
      );

      return titleMatch || introMatch || platformMatch || serviceMatch;
    });
  }, [activeTab, searchQuery, language]);

  const handleCategoryWhatsApp = (category: ServiceCategoryData) => {
    const msg = `${t.whatsapp.categoryEnquiryPrefix} ${category.title[language]}.`;
    openWhatsAppEnquiry(msg);
  };

  const handleServiceWhatsApp = (serviceText: string) => {
    const msg = `${t.whatsapp.serviceEnquiryPrefix} ${serviceText}`;
    openWhatsAppEnquiry(msg);
  };

  const handleRequestViaForm = (category: ServiceCategoryData) => {
    navigateTo('contact', { contactCategory: category.id });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Page Hero Banner */}
      <section className="bg-[#051342] text-white py-16 lg:py-20 border-b border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-[#FF6B72] tracking-wider mb-3">
              {t.servicesPage.kicker}
            </p>
            <h1
              className={`text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance mb-4 ${
                !isRtl ? 'font-display-ltr' : 'font-rtl leading-[1.3]'
              }`}
            >
              {t.servicesPage.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {t.servicesPage.description}
            </p>
          </div>

          {/* Search & Interactive Filter Controls */}
          <div className="mt-10 space-y-4">
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.servicesPage.searchPlaceholder}
                className="w-full ps-12 pe-10 py-3.5 rounded-lg bg-white text-[#0F172A] placeholder:text-slate-400 text-sm border border-slate-300 focus:border-[#E30613] focus:outline-none shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute top-1/2 -translate-y-1/2 end-3 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  setSelectedCategoryId(null);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#E30613] text-white'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {t.servicesPage.allCategoriesTab} (8)
              </button>

              {SERVICE_CATEGORIES.map((cat) => {
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(cat.id);
                      setSelectedCategoryId(cat.id);
                      setExpandedIds((prev) => ({ ...prev, [cat.id]: true }));
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#E30613] text-white font-semibold'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {cat.indexNumber}. {cat.shortTitle[language]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Directory */}
      <section className="py-14 lg:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Utility Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="text-xs sm:text-sm text-slate-600">
              <span className="font-semibold text-[#081E68] font-mono-num">
                {filteredCategories.length}
              </span>{' '}
              / 8 {t.servicesPage.allCategoriesTab}
            </div>

            <div className="flex items-center gap-3 text-xs font-medium">
              <button
                type="button"
                onClick={expandAll}
                className="text-[#081E68] hover:text-[#E30613] hover:underline cursor-pointer"
              >
                {t.servicesPage.expandAll}
              </button>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <button
                type="button"
                onClick={collapseAll}
                className="text-slate-600 hover:text-[#081E68] hover:underline cursor-pointer"
              >
                {t.servicesPage.collapseAll}
              </button>
            </div>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-xl mx-auto my-8">
              <p className="text-base font-medium text-slate-700 mb-4">
                {t.servicesPage.noResults}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                  setSelectedCategoryId(null);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#081E68] text-white text-xs font-semibold hover:bg-[#0D2C94] transition-colors cursor-pointer"
              >
                {t.servicesPage.resetFilter}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => {
                const isExpanded = expandedIds[category.id] ?? true;
                const query = searchQuery.trim().toLowerCase();

                return (
                  <div
                    key={category.id}
                    id={`category-${category.id}`}
                    className="bg-white rounded-xl border border-slate-200/95 shadow-xs overflow-hidden transition-colors"
                  >
                    {/* Accordion Category Header */}
                    <div
                      onClick={() => toggleAccordion(category.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleAccordion(category.id);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#081E68] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <ServiceIcon name={category.iconName} className="w-6 h-6" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1.5">
                            <span className="font-mono-num font-semibold text-[#E30613]">
                              {category.indexNumber}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>
                              {category.services.length} {t.mainServicesSection.servicesCountSuffix}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{category.keyPlatforms.join(' / ')}</span>
                          </div>

                          <h2 className="text-xl sm:text-2xl font-bold text-[#081E68] mb-2">
                            {category.title[language]}
                          </h2>

                          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                            {category.introduction[language]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryWhatsApp(category);
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#081E68] hover:bg-[#0D2C94] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <MessageCircle className="w-4 h-4 text-[#25D366]" />
                          <span>{t.servicesPage.enquireCategoryWhatsapp}</span>
                        </button>

                        <div
                          className={`w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 bg-slate-100' : ''
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Accordion Expandable Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="border-t border-slate-200/80 bg-[#F8FAFC]/60 p-6 sm:p-8"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                            <h3 className="text-xs font-semibold tracking-wider text-slate-500">
                              {t.servicesPage.includedServicesLabel} ({category.services.length})
                            </h3>

                            <button
                              type="button"
                              onClick={() => handleRequestViaForm(category)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081E68] hover:text-[#E30613] transition-colors cursor-pointer"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>{t.servicesPage.requestViaForm}</span>
                            </button>
                          </div>

                          {/* Complete List of Individual Services */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {category.services.map((serviceItem, sIdx) => {
                              const serviceText = serviceItem[language];
                              const isHighlighted =
                                query.length > 0 &&
                                (serviceItem.en.toLowerCase().includes(query) ||
                                  serviceItem.ar.toLowerCase().includes(query) ||
                                  serviceItem.ur.toLowerCase().includes(query));

                              return (
                                <div
                                  key={`${category.id}-service-${sIdx}`}
                                  className={`group flex items-center justify-between gap-4 p-4 rounded-lg bg-white border transition-colors ${
                                    isHighlighted
                                      ? 'border-[#E30613] ring-1 ring-[#E30613]/20'
                                      : 'border-slate-200/90 hover:border-slate-300'
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0 mt-1" />
                                    <span className="text-sm font-medium text-[#0F172A] leading-relaxed">
                                      {serviceText}
                                    </span>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => handleServiceWhatsApp(serviceText)}
                                    title={`${t.servicesPage.enquireServiceWhatsapp}: ${serviceText}`}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#EEF2F8] hover:bg-[#081E68] text-slate-700 hover:text-white text-xs font-medium transition-colors shrink-0 cursor-pointer whitespace-nowrap"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                                    <span className="hidden sm:inline">
                                      {t.servicesPage.enquireServiceWhatsapp}
                                    </span>
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
};
