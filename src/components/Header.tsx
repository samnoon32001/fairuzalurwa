'use client';

import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { PageRoute, useApp } from '../context/AppContext';
import { COMPANY_LOGO_PATH } from '../lib/config';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const { t, currentPage, navigateTo, openWhatsAppEnquiry, isRtl } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'investor-services', label: t.nav.investorServices },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (page: PageRoute) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Company Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          aria-label={t.brand.name}
          className="flex items-center shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081E68] rounded-md"
        >
          {!logoError ? (
            <img
              src={COMPANY_LOGO_PATH}
              alt={t.brand.name}
              onError={() => setLogoError(true)}
              className="h-11 sm:h-13 w-auto object-contain"
            />
          ) : (
            <span
              className={`text-xl font-bold tracking-tight text-[#081E68] whitespace-nowrap ${
                !isRtl ? 'font-display-ltr text-2xl' : 'font-rtl'
              }`}
            >
              {t.brand.name}
            </span>
          )}
        </button>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#081E68] font-semibold'
                    : 'text-slate-600 hover:text-[#081E68]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E30613] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher & Primary WhatsApp Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageSwitcher variant="header" />
          <button
            type="button"
            onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#081E68] hover:bg-[#0D2C94] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t.nav.whatsappCta}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2.5">
          <LanguageSwitcher variant="header" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-lg text-[#081E68] hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-start px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EEF2F8] text-[#081E68] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#081E68]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <LanguageSwitcher variant="mobile" />
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#081E68] hover:bg-[#0D2C94] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{t.hero.whatsappCta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
