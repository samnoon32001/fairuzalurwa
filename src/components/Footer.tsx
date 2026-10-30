import React, { useState } from 'react';
import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageRoute, useApp } from '../context/AppContext';
import { COMPANY_LOGO_PATH } from '../lib/config';
import { SERVICE_CATEGORIES } from '../lib/services';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t, language, navigateTo, openWhatsAppEnquiry, siteConfig, isRtl } = useApp();
  const [logoError, setLogoError] = useState(false);

  const quickLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'investor-services', label: t.nav.investorServices },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#051342] text-slate-300 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              aria-label={t.brand.name}
              className="inline-flex items-center bg-white px-4 py-2.5 rounded-xl shadow-xs cursor-pointer text-start"
            >
              {!logoError ? (
                <img
                  src={COMPANY_LOGO_PATH}
                  alt={t.brand.name}
                  onError={() => setLogoError(true)}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              ) : (
                <span
                  className={`text-xl font-bold text-[#081E68] tracking-tight ${
                    !isRtl ? 'font-display-ltr text-2xl' : 'font-rtl'
                  }`}
                >
                  {t.brand.name}
                </span>
              )}
            </button>
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">{t.brand.name}</p>
              <p className="text-xs text-[#FF6B72] font-medium">
                {t.brand.locationLabel} · {t.brand.tagline}
              </p>
            </div>
            <p className="text-sm text-slate-200/90 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#E30613] hover:bg-[#c20410] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.whatsappCta}</span>
              </button>
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => navigateTo(item.id)}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer text-start"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Service Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {t.footer.mainServicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => navigateTo('services', { categoryId: category.id })}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer text-start"
                  >
                    {category.shortTitle[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Placeholders & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {t.footer.contactInfoTitle}
            </h3>
            <p className="text-xs text-[#FF6B72]">{t.footer.placeholderNotice}</p>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B72] shrink-0 mt-0.5" />
                <span>{siteConfig.officeAddressPlaceholder[language]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B72] shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneNumberPlaceholder.replace(/\s+/g, '')}`}
                  dir="ltr"
                  className="font-mono-num hover:text-white transition-colors"
                >
                  {siteConfig.phoneNumberPlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <button
                  type="button"
                  onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
                  dir="ltr"
                  className="font-mono-num hover:text-white transition-colors text-start cursor-pointer"
                >
                  {siteConfig.whatsappNumberPlaceholder}
                </button>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B72] shrink-0" />
                <a
                  href={`mailto:${siteConfig.emailPlaceholder}`}
                  dir="ltr"
                  className="break-all hover:text-white transition-colors"
                >
                  {siteConfig.emailPlaceholder}
                </a>
              </li>
            </ul>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <Globe className="w-3.5 h-3.5 text-[#FF6B72]" />
                {siteConfig.socialLinks.map((soc, idx) => (
                  <React.Fragment key={soc.platform}>
                    <button
                      type="button"
                      onClick={() => navigateTo('contact')}
                      className="hover:text-white transition-colors cursor-pointer"
                      title={soc.placeholderLabel}
                    >
                      {soc.platform}
                    </button>
                    {idx < siteConfig.socialLinks.length - 1 && (
                      <span aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rightsReserved}
          </p>
          <p className="max-w-2xl text-slate-300/90">{t.footer.regulatoryNote}</p>
        </div>
      </div>
    </footer>
  );
};
