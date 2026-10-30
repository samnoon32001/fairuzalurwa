'use client';

import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  Headphones,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  ConsultancyInteriorVisual,
  InvestorKafdVisual,
} from '../components/ArchitecturalVisuals';
import { CTASection } from '../components/CTASection';
import { ServiceCard } from '../components/ServiceCard';
import { useApp } from '../context/AppContext';
import { HERO_BANNER_IMAGE_PATH } from '../lib/config';
import { SERVICE_CATEGORIES } from '../lib/services';

export const HomePage: React.FC = () => {
  const { t, navigateTo, openWhatsAppEnquiry, isRtl } = useApp();

  const highlightIcons = [Layers, ShieldCheck, Compass, Headphones];
  const whyChooseIcons = [Layers, FileCheck2, Sparkles, Building2, Users, Headphones];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. HERO SECTION — Full-Bleed 50/50 Split Banner */}
      <section
        dir="ltr"
        className="relative min-h-[580px] lg:min-h-[640px] bg-[#051342] text-white overflow-hidden flex flex-col lg:flex-row items-stretch"
      >
        {/* Left Half (50%): Full-Bleed Banner Image */}
        <div className="relative w-full lg:w-1/2 min-h-[320px] sm:min-h-[420px] lg:min-h-full shrink-0 overflow-hidden">
          <img
            src={HERO_BANNER_IMAGE_PATH}
            alt={t.hero.headline}
            className="w-full h-full object-cover object-center block lg:absolute lg:inset-0"
          />
          {/* Smooth edge transition into the right half on desktop & bottom on mobile */}
          <div
            className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-r from-transparent to-[#051342] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#051342] to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Right Half (50%): Hero Content */}
        <div className="relative w-full lg:w-1/2 flex items-center bg-[#051342] px-6 sm:px-10 lg:px-14 xl:px-16 py-12 lg:py-20">
          <motion.div
            dir={isRtl ? 'rtl' : 'ltr'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl text-start"
          >
            {/* Unboxed Kicker */}
            <p className="text-xs sm:text-sm font-semibold text-[#FF6B72] tracking-wide mb-4">
              {t.hero.kicker}
            </p>

            {/* Primary Headline */}
            <h1
              className={`text-3xl sm:text-4xl xl:text-[3.15rem] font-bold text-white tracking-tight leading-[1.15] text-balance mb-6 ${
                !isRtl ? 'font-display-ltr' : 'font-rtl leading-[1.3]'
              }`}
            >
              {t.hero.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed mb-8">
              {t.hero.supportingText}
            </p>

            {/* Primary, Secondary & WhatsApp CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E30613] hover:bg-[#c20410] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>

              <button
                type="button"
                onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#081E68]/90 hover:bg-[#081E68] text-slate-100 border border-blue-400/35 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.hero.whatsappCta}</span>
              </button>
            </div>

            {/* Clean Unboxed Domain Focus Bar */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-200">
              <span className="text-[#FF6B72] font-semibold">{t.hero.domainsLabel}:</span>
              {t.hero.domainsList.map((domain, idx) => (
                <React.Fragment key={domain}>
                  <span>{domain}</span>
                  {idx < t.hero.domainsList.length - 1 && (
                    <span aria-hidden="true" className="text-slate-400">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / HIGHLIGHTS SECTION */}
      <section className="bg-white border-b border-slate-200/80 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.highlights.items.map((item, idx) => {
              const IconComponent = highlightIcons[idx % highlightIcons.length];
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5 text-[#E30613]" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-[#0F172A] mb-1.5">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US PREVIEW */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#E30613] tracking-wide mb-2.5">
                  {t.aboutPreview.kicker}
                </p>
                <h2
                  className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-5 ${
                    !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
                  }`}
                >
                  {t.aboutPreview.heading}
                </h2>
                <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed mb-4">
                  {t.aboutPreview.description}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  {t.aboutPreview.secondaryParagraph}
                </p>
              </div>

              {/* Three Client Segments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-200/90 mb-8">
                {t.aboutPreview.pillars.map((pillar, idx) => (
                  <div key={pillar.title}>
                    <span className="text-xs font-mono-num text-[#E30613] font-semibold block mb-1">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-sm font-semibold text-[#081E68] mb-1">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.detail}</p>
                  </div>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#081E68] hover:bg-[#0D2C94] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{t.aboutPreview.cta}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 flex">
              <ConsultancyInteriorVisual
                className="w-full h-full"
                subtitle={t.brand.locationLabel}
                title={t.brand.tagline}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR MAIN SERVICES (8 CATEGORIES) */}
      <section className="py-20 lg:py-24 bg-[#EEF2F8]/80 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#E30613] tracking-wide mb-2">
                {t.mainServicesSection.kicker}
              </p>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-3 ${
                  !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
                }`}
              >
                {t.mainServicesSection.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.mainServicesSection.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#081E68]/25 bg-white hover:bg-[#081E68] text-[#081E68] hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{t.mainServicesSection.viewAllServices}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* 8 Main Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTOR SERVICES HIGHLIGHT */}
      <section className="py-20 lg:py-24 bg-[#081E68] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Investor Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#FF6B72] tracking-wider mb-3">
                  {t.investorHighlight.kicker}
                </p>
                <h2
                  className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight text-balance mb-4 ${
                    !isRtl ? 'font-display-ltr' : 'font-rtl'
                  }`}
                >
                  {t.investorHighlight.heading}
                </h2>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
                  {t.investorHighlight.description}
                </p>

                {/* 8 Key Investor Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {t.investorHighlight.highlightsList.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-white/8 border border-white/15"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B72] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-100 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => navigateTo('investor-services')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E30613] hover:bg-[#c20410] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{t.investorHighlight.cta}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsAppEnquiry(t.whatsapp.investorEnquiryMessage)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/25 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>{t.investorHighlight.whatsappCta}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.investorHighlight.complianceNote}
                </p>
              </div>
            </div>

            {/* Investor Skyline Visual */}
            <div className="lg:col-span-5 flex">
              <InvestorKafdVisual
                className="w-full h-full"
                subcaption={t.investorHighlight.kicker}
                caption={t.investorPage.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US? */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-[#E30613] tracking-wide mb-2">
              {t.whyChooseUs.kicker}
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-3 ${
                !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
              }`}
            >
              {t.whyChooseUs.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyChooseUs.items.map((feature, idx) => {
              const FeatureIcon = whyChooseIcons[idx % whyChooseIcons.length];
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0">
                        <FeatureIcon className="w-5 h-5 text-[#E30613]" />
                      </div>
                      <span className="text-xs font-mono-num text-slate-400 font-medium">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#0F172A] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA */}
      <CTASection />
    </div>
  );
};
