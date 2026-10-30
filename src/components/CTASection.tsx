'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CTASection: React.FC = () => {
  const { t, navigateTo, openWhatsAppEnquiry, isRtl } = useApp();

  return (
    <section className="py-20 bg-[#081E68] relative overflow-hidden border-t border-blue-400/20">
      {/* Subtle Architectural Backdrop Accent in Brand Crimson & Royal Blue */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background:
            'radial-gradient(80% 90% at 85% 50%, rgba(227, 6, 19, 0.28) 0%, rgba(59, 130, 246, 0.2) 45%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-[#FF6B72] mb-3">
            {t.contactCta.kicker}
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance mb-4 ${
              !isRtl ? 'font-display-ltr sm:text-[2.65rem]' : 'font-rtl'
            }`}
          >
            {t.contactCta.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            {t.contactCta.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E30613] hover:bg-[#c20410] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>{t.contactCta.contactButton}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/25 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{t.contactCta.whatsappButton}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
