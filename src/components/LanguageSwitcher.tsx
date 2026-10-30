'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import { Language } from '../lib/services';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'ur', label: 'اردو' },
];

export const LanguageSwitcher: React.FC<{ variant?: 'header' | 'footer' | 'mobile' }> = ({
  variant = 'header',
}) => {
  const { language, setLanguage, t } = useApp();

  if (variant === 'mobile') {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-slate-500">{t.nav.languageLabel}</span>
        <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200/80">
          {LANGUAGES.map((item) => {
            const active = language === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`py-2 px-3 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#081E68] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#081E68] hover:bg-white/60'
                } ${item.code !== 'en' ? 'font-rtl' : 'font-sans-ltr'}`}
                aria-pressed={active}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={`inline-flex items-center p-0.5 rounded-lg border transition-colors ${
        variant === 'footer'
          ? 'bg-[#081E68] border-blue-800/80'
          : 'bg-[#EEF2F8] border-slate-200/90'
      }`}
    >
      {LANGUAGES.map((item) => {
        const active = language === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              active
                ? variant === 'footer'
                  ? 'bg-[#E30613] text-white font-semibold shadow-xs'
                  : 'bg-[#081E68] text-white shadow-xs'
                : variant === 'footer'
                  ? 'text-slate-200 hover:text-white'
                  : 'text-slate-600 hover:text-[#081E68]'
            } ${item.code !== 'en' ? 'font-rtl' : 'font-sans-ltr'}`}
            aria-pressed={active}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
