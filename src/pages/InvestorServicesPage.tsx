import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  Scale,
} from 'lucide-react';
import { InvestorKafdVisual, RiyadhSkylineHeroVisual } from '../components/ArchitecturalVisuals';
import { useApp } from '../context/AppContext';
import { INVESTOR_SERVICES_LIST } from '../lib/services';

export const InvestorServicesPage: React.FC = () => {
  const { language, t, navigateTo, openWhatsAppEnquiry, isRtl } = useApp();

  const handleDiscussPlanForm = () => {
    navigateTo('contact', { contactCategory: 'investor-services' });
  };

  const handleInvestorWhatsApp = (specificItem?: string) => {
    if (specificItem) {
      openWhatsAppEnquiry(`${t.whatsapp.serviceEnquiryPrefix} ${specificItem}`);
    } else {
      openWhatsAppEnquiry(t.whatsapp.investorEnquiryMessage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. INVESTOR HERO SECTION */}
      <section className="relative bg-[#051342] text-white py-20 lg:py-28 overflow-hidden border-b border-blue-400/25">
        <RiyadhSkylineHeroVisual className="absolute inset-0 w-full h-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#FF6B72] tracking-wider mb-3">
              {t.investorPage.kicker}
            </p>
            <h1
              className={`text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] text-balance mb-6 ${
                !isRtl ? 'font-display-ltr' : 'font-rtl leading-[1.3]'
              }`}
            >
              {t.investorPage.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-9 max-w-2xl">
              {t.investorPage.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleDiscussPlanForm}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E30613] hover:bg-[#c20410] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>{t.investorPage.discussPlanCta}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => handleInvestorWhatsApp()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.investorPage.whatsappCta}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL 12 INVESTOR & PROPERTY SERVICES */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-[#E30613] tracking-wide mb-2">
                {t.investorPage.servicesSectionKicker}
              </p>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-4 ${
                  !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
                }`}
              >
                {t.investorPage.servicesSectionHeading}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.investorPage.servicesSectionIntro}
              </p>
            </div>

            <div className="lg:col-span-5">
              <InvestorKafdVisual
                className="w-full h-64 sm:h-72"
                subcaption={t.brand.locationLabel}
                caption={t.investorPage.servicesSectionKicker}
              />
            </div>
          </div>

          {/* 12 Investor Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INVESTOR_SERVICES_LIST.map((item) => {
              const serviceText = item.text[language];
              const tagText = item.tag[language];

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200/95 p-6 sm:p-7 flex flex-col justify-between hover:border-[#081E68]/40 transition-colors shadow-2xs"
                >
                  <div>
                    {/* Unboxed Index & Category Kicker */}
                    <div className="flex items-center justify-between gap-3 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                      <span className="font-mono-num font-semibold text-[#081E68]">
                        {item.indexNumber}
                      </span>
                      <span className="text-[#E30613] font-medium">{tagText}</span>
                    </div>

                    <div className="flex items-start gap-3 mb-6">
                      <CheckCircle2 className="w-5 h-5 text-[#081E68] shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base font-medium text-[#0F172A] leading-relaxed">
                        {serviceText}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleInvestorWhatsApp(serviceText)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081E68] hover:text-[#E30613] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>{t.mainServicesSection.enquireWhatsapp}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDiscussPlanForm}
                      className="text-xs font-medium text-slate-500 hover:text-[#081E68] transition-colors cursor-pointer"
                    >
                      {t.investorPage.discussPlanCta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 5-STEP INVESTOR PROCESS SECTION */}
      <section className="py-20 lg:py-24 bg-[#EEF2F8] border-y border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-[#E30613] tracking-wide mb-2">
              {t.investorPage.processKicker}
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-3 ${
                !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
              }`}
            >
              {t.investorPage.processHeading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.investorPage.processIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.investorPage.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-xl border border-slate-200/95 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#081E68] text-white text-xs font-mono-num font-bold">
                      {step.stepNumber}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-[#E30613]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#081E68] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEGAL & REGULATORY COMPLIANCE NOTICE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5 text-[#081E68]">
                  <Scale className="w-5 h-5 text-[#E30613] shrink-0" />
                  <h2 className="text-lg font-bold">{t.investorPage.regulatoryNoticeTitle}</h2>
                </div>
                <p className="text-sm text-[#0F172A] leading-relaxed">
                  {t.investorPage.regulatoryNoticeBody}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.investorPage.regulatoryNoticeDisclaimer}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleDiscussPlanForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E30613] hover:bg-[#c20410] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Building2 className="w-4 h-4 text-white" />
                  <span>{t.investorPage.discussPlanCta}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInvestorWhatsApp()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#081E68] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{t.investorPage.whatsappCta}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
