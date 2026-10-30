'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServiceCategoryData } from '../lib/services';
import { ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  category: ServiceCategoryData;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ category }) => {
  const { language, t, navigateTo, openWhatsAppEnquiry, isRtl } = useApp();

  const handleOpenCategory = () => {
    navigateTo('services', { categoryId: category.id });
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const localizedMessage = `${t.whatsapp.categoryEnquiryPrefix} ${category.title[language]}.`;
    openWhatsAppEnquiry(localizedMessage);
  };

  return (
    <article
      onClick={handleOpenCategory}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpenCategory();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${category.title[language]} — ${t.mainServicesSection.exploreLink}`}
      className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 hover:border-[#081E68]/45 hover:shadow-md transition-all duration-200 cursor-pointer text-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081E68]"
    >
      <div>
        {/* Top Row: Icon + Editorial Index */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-11 h-11 rounded-lg bg-[#081E68] text-white flex items-center justify-center group-hover:bg-[#E30613] transition-colors duration-200 shrink-0">
            <ServiceIcon name={category.iconName} className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono-num text-slate-400 font-medium">
            {category.indexNumber} · {category.services.length} {t.mainServicesSection.servicesCountSuffix}
          </span>
        </div>

        {/* Category Title */}
        <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#081E68] transition-colors mb-2.5 leading-snug">
          {category.title[language]}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {category.shortDescription[language]}
        </p>

        {/* Unboxed Platform Metadata */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-6">
          {category.keyPlatforms.map((platform, idx) => (
            <React.Fragment key={platform}>
              <span>{platform}</span>
              {idx < category.keyPlatforms.length - 1 && (
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081E68] group-hover:text-[#E30613] transition-colors whitespace-nowrap">
          <span>{t.mainServicesSection.exploreLink}</span>
          <ArrowRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
            }`}
          />
        </span>

        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#EEF2F8] hover:bg-[#081E68] text-slate-700 hover:text-white text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>{t.nav.whatsappCta}</span>
        </button>
      </div>
    </article>
  );
};
