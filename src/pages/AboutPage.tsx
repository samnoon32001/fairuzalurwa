import React from 'react';
import { ArrowRight, Compass, Eye, ShieldCheck, Target } from 'lucide-react';
import { ConsultancyInteriorVisual } from '../components/ArchitecturalVisuals';
import { CTASection } from '../components/CTASection';
import { ServiceIcon } from '../components/ServiceIcon';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../lib/services';

export const AboutPage: React.FC = () => {
  const { language, t, navigateTo, isRtl } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#051342] text-white py-18 lg:py-24 border-b border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-[#FF6B72] tracking-wider mb-3">
              {t.aboutPage.kicker}
            </p>
            <h1
              className={`text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance mb-5 ${
                !isRtl ? 'font-display-ltr' : 'font-rtl leading-[1.3]'
              }`}
            >
              {t.aboutPage.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {t.aboutPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <h2
                className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance ${
                  !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
                }`}
              >
                {t.aboutPage.introHeading}
              </h2>
              <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed">
                {t.aboutPage.introParagraph1}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.aboutPage.introParagraph2}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigateTo('services')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#E30613] hover:bg-[#c20410] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('investor-services')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#081E68] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>{t.investorHighlight.cta}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <ConsultancyInteriorVisual
                className="w-full h-full"
                subtitle={t.brand.locationLabel}
                title={t.brand.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-16 lg:py-20 bg-[#EEF2F8] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl border border-slate-200/95 p-8 sm:p-10">
              <div className="w-11 h-11 rounded-lg bg-[#081E68] text-white flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h2
                className={`text-2xl font-bold text-[#081E68] mb-3 ${
                  !isRtl ? 'font-display-ltr text-3xl' : 'font-rtl'
                }`}
              >
                {t.aboutPage.missionTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.aboutPage.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl border border-slate-200/95 p-8 sm:p-10">
              <div className="w-11 h-11 rounded-lg bg-[#E30613] text-white flex items-center justify-center mb-5">
                <Eye className="w-5 h-5" />
              </div>
              <h2
                className={`text-2xl font-bold text-[#081E68] mb-3 ${
                  !isRtl ? 'font-display-ltr text-3xl' : 'font-rtl'
                }`}
              >
                {t.aboutPage.visionTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.aboutPage.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COMMITMENT TO CUSTOMERS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-3 ${
                !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
              }`}
            >
              {t.aboutPage.commitmentTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.aboutPage.commitmentIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aboutPage.commitmentPoints.map((point, idx) => (
              <div
                key={point.title}
                className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#E30613]" />
                  <span className="text-xs font-mono-num text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-[#081E68] mb-2">{point.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR AREAS OF EXPERTISE */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-[#081E68] tracking-tight text-balance mb-3 ${
                !isRtl ? 'font-display-ltr sm:text-[2.6rem]' : 'font-rtl'
              }`}
            >
              {t.aboutPage.expertiseTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.aboutPage.expertiseIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => navigateTo('services', { categoryId: category.id })}
                className="group bg-white rounded-xl border border-slate-200/90 p-6 text-start hover:border-[#081E68]/45 transition-colors cursor-pointer flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#081E68] text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E30613] transition-colors">
                  <ServiceIcon name={category.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-num text-slate-400 block mb-0.5">
                    {category.indexNumber}
                  </span>
                  <h3 className="text-base font-semibold text-[#081E68] group-hover:text-[#E30613] transition-colors mb-1.5">
                    {category.title[language]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {category.shortDescription[language]}
                  </p>
                </div>
              </button>
            ))}

            {/* 9th Card: Dedicated Foreign Investor Formation */}
            <button
              type="button"
              onClick={() => navigateTo('investor-services')}
              className="group bg-[#081E68] rounded-xl border border-blue-400/30 p-6 text-start hover:bg-[#0D2C94] transition-colors cursor-pointer flex items-start gap-4 text-white"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E30613] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-num text-[#FF6B72] block mb-0.5">09</span>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {t.investorPage.title}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {t.investorPage.heroDescription}
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA */}
      <CTASection />
    </div>
  );
};
