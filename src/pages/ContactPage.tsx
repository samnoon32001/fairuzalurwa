import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Edit3,
  Globe,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../lib/services';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  category?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const {
    language,
    t,
    prefilledContactCategory,
    siteConfig,
    updateSiteConfig,
    resetSiteConfig,
    openWhatsAppEnquiry,
    isRtl,
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(prefilledContactCategory || '');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Client Placeholder Editor State
  const [isEditingConfig, setIsEditingConfig] = useState(false);
  const [editWhatsapp, setEditWhatsapp] = useState(siteConfig.whatsappNumberPlaceholder);
  const [editPhone, setEditPhone] = useState(siteConfig.phoneNumberPlaceholder);
  const [editEmail, setEditEmail] = useState(siteConfig.emailPlaceholder);
  const [editAddress, setEditAddress] = useState(siteConfig.officeAddressPlaceholder[language]);
  const [editHours, setEditHours] = useState(siteConfig.businessHoursPlaceholder[language]);
  const [configSavedBanner, setConfigSavedBanner] = useState(false);

  useEffect(() => {
    if (prefilledContactCategory) {
      setCategory(prefilledContactCategory);
    }
  }, [prefilledContactCategory]);

  useEffect(() => {
    setEditWhatsapp(siteConfig.whatsappNumberPlaceholder);
    setEditPhone(siteConfig.phoneNumberPlaceholder);
    setEditEmail(siteConfig.emailPlaceholder);
    setEditAddress(siteConfig.officeAddressPlaceholder[language]);
    setEditHours(siteConfig.businessHoursPlaceholder[language]);
  }, [siteConfig, language]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = t.contactPage.validation.nameRequired;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      newErrors.phone = t.contactPage.validation.phoneRequired;
    } else if (digitsOnly.length < 7) {
      newErrors.phone = t.contactPage.validation.phoneInvalid;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = t.contactPage.validation.emailRequired;
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = t.contactPage.validation.emailInvalid;
    }

    if (!category) {
      newErrors.category = t.contactPage.validation.categoryRequired;
    }

    if (!message.trim()) {
      newErrors.message = t.contactPage.validation.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 550);
  };

  const getCategoryDisplayName = (catId: string): string => {
    if (catId === 'investor-services') return t.contactPage.investorCategoryOption;
    if (catId === 'general') return t.contactPage.generalEnquiryOption;
    const found = SERVICE_CATEGORIES.find((c) => c.id === catId);
    return found ? found.title[language] : catId;
  };

  const handleSendFormToWhatsApp = () => {
    const catName = getCategoryDisplayName(category);
    const composed = `${t.whatsapp.serviceEnquiryPrefix} ${catName}\n\n${fullName} (${phone} | ${email}):\n${message}`;
    openWhatsAppEnquiry(composed);
  };

  const handleSavePlaceholders = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteConfig({
      whatsappNumberPlaceholder: editWhatsapp,
      phoneNumberPlaceholder: editPhone,
      emailPlaceholder: editEmail,
      officeAddressPlaceholder: {
        ...siteConfig.officeAddressPlaceholder,
        [language]: editAddress,
      },
      businessHoursPlaceholder: {
        ...siteConfig.businessHoursPlaceholder,
        [language]: editHours,
      },
    });
    setIsEditingConfig(false);
    setConfigSavedBanner(true);
    setTimeout(() => setConfigSavedBanner(false), 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Page Hero */}
      <section className="bg-[#051342] text-white py-16 lg:py-20 border-b border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-[#FF6B72] tracking-wider mb-3">
              {t.contactPage.kicker}
            </p>
            <h1
              className={`text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance mb-4 ${
                !isRtl ? 'font-display-ltr' : 'font-rtl leading-[1.3]'
              }`}
            >
              {t.contactPage.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {t.contactPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 lg:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Functional Validated Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/95 p-6 sm:p-10 shadow-xs">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#081E68] mb-2">
                  {t.contactPage.formTitle}
                </h2>
                <p className="text-sm text-slate-600">{t.contactPage.formSubtitle}</p>
              </div>

              {isSubmitted ? (
                <div className="rounded-xl bg-[#F8FAFC] border border-emerald-200 p-8 text-center space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 max-w-lg mx-auto">
                    <h3 className="text-xl font-bold text-[#081E68]">
                      {t.contactPage.successTitle}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t.contactPage.successMessage}
                    </p>
                  </div>

                  {/* Summary of Submitted Enquiry */}
                  <div className="text-start bg-white rounded-lg border border-slate-200 p-4 text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                    <p>
                      <span className="font-semibold text-[#081E68]">
                        {t.contactPage.fullNameLabel.replace('*', '')}:
                      </span>{' '}
                      {fullName}
                    </p>
                    <p>
                      <span className="font-semibold text-[#081E68]">
                        {t.contactPage.phoneLabel.replace('*', '')}:
                      </span>{' '}
                      <span dir="ltr" className="font-mono-num">
                        {phone}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-[#081E68]">
                        {t.contactPage.categoryLabel.replace('*', '')}:
                      </span>{' '}
                      {getCategoryDisplayName(category)}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendFormToWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#081E68] hover:bg-[#0D2C94] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>{t.contactPage.continueOnWhatsapp}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                        setErrors({});
                      }}
                      className="px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      {t.contactPage.sendAnotherButton}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                    >
                      {t.contactPage.fullNameLabel}
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder={t.contactPage.fullNamePlaceholder}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-slate-300 focus:border-[#081E68]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                      >
                        {t.contactPage.phoneLabel}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder={t.contactPage.phonePlaceholder}
                        className={`w-full rounded-lg border px-4 py-3 text-sm font-mono-num text-[#0F172A] placeholder:text-slate-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/30'
                            : 'border-slate-300 focus:border-[#081E68]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                      >
                        {t.contactPage.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        dir="ltr"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder={t.contactPage.emailPlaceholder}
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 bg-red-50/30'
                            : 'border-slate-300 focus:border-[#081E68]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Category Selection */}
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                    >
                      {t.contactPage.categoryLabel}
                    </label>
                    <select
                      id="contact-category"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        if (errors.category) setErrors({ ...errors, category: undefined });
                      }}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-[#0F172A] bg-white focus:outline-none transition-colors ${
                        errors.category
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-slate-300 focus:border-[#081E68]'
                      }`}
                    >
                      <option value="">{t.contactPage.categoryPlaceholder}</option>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.indexNumber}. {cat.title[language]}
                        </option>
                      ))}
                      <option value="investor-services">
                        09. {t.contactPage.investorCategoryOption}
                      </option>
                      <option value="general">{t.contactPage.generalEnquiryOption}</option>
                    </select>
                    {errors.category && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.category}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                    >
                      {t.contactPage.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder={t.contactPage.messagePlaceholder}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-slate-300 focus:border-[#081E68]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit & Direct WhatsApp Option */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#E30613] hover:bg-[#c20410] disabled:opacity-60 text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>{t.contactPage.submittingButton}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>{t.contactPage.submitButton}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#081E68] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>{t.hero.whatsappCta}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Clearly Identifiable Editable Client Contact Placeholders */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200/95 p-6 sm:p-8 shadow-xs">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#081E68] mb-1">
                      {t.contactPage.infoSectionTitle}
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {t.contactPage.infoSectionNote}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEditingConfig((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EEF2F8] hover:bg-[#081E68] text-[#081E68] hover:text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.contactPage.configurePlaceholdersBtn}</span>
                  </button>
                </div>

                {configSavedBanner && (
                  <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{t.contactPage.configSavedNotice}</span>
                  </div>
                )}

                {isEditingConfig ? (
                  <form onSubmit={handleSavePlaceholders} className="space-y-3.5 pt-2 border-t border-slate-100">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contactPage.whatsappInfoLabel}
                      </label>
                      <input
                        type="text"
                        dir="ltr"
                        value={editWhatsapp}
                        onChange={(e) => setEditWhatsapp(e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs font-mono-num"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contactPage.phoneInfoLabel}
                      </label>
                      <input
                        type="text"
                        dir="ltr"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs font-mono-num"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contactPage.emailInfoLabel}
                      </label>
                      <input
                        type="text"
                        dir="ltr"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contactPage.officeAddressLabel}
                      </label>
                      <input
                        type="text"
                        value={editAddress}
                        onChange={(e) => setEditAddress(e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contactPage.businessHoursLabel}
                      </label>
                      <input
                        type="text"
                        value={editHours}
                        onChange={(e) => setEditHours(e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          resetSiteConfig();
                          setIsEditingConfig(false);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{t.contactPage.resetConfigBtn}</span>
                      </button>

                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-[#081E68] text-white text-xs font-semibold hover:bg-[#0D2C94] cursor-pointer"
                      >
                        {t.contactPage.saveConfigBtn}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    {/* Office Address Placeholder */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#E30613]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-0.5">
                          {t.contactPage.officeAddressLabel}
                        </h3>
                        <p className="text-sm text-[#0F172A] font-medium leading-relaxed">
                          {siteConfig.officeAddressPlaceholder[language]}
                        </p>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-[#E30613]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-0.5">
                          {t.contactPage.phoneInfoLabel}
                        </h3>
                        <a
                          href={`tel:${siteConfig.phoneNumberPlaceholder.replace(/\s+/g, '')}`}
                          dir="ltr"
                          className="text-sm font-mono-num text-[#081E68] hover:text-[#E30613] hover:underline font-medium"
                        >
                          {siteConfig.phoneNumberPlaceholder}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp Number */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-0.5">
                          {t.contactPage.whatsappInfoLabel}
                        </h3>
                        <button
                          type="button"
                          onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
                          dir="ltr"
                          className="text-sm font-mono-num text-[#081E68] hover:text-[#E30613] hover:underline font-medium text-start cursor-pointer"
                        >
                          {siteConfig.whatsappNumberPlaceholder}
                        </button>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[#E30613]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-0.5">
                          {t.contactPage.emailInfoLabel}
                        </h3>
                        <a
                          href={`mailto:${siteConfig.emailPlaceholder}`}
                          dir="ltr"
                          className="text-sm text-[#081E68] hover:text-[#E30613] hover:underline font-medium break-all"
                        >
                          {siteConfig.emailPlaceholder}
                        </a>
                      </div>
                    </div>

                    {/* Business Hours Placeholder */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-[#081E68]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-0.5">
                          {t.contactPage.businessHoursLabel}
                        </h3>
                        <p className="text-sm text-[#0F172A] font-medium leading-relaxed">
                          {siteConfig.businessHoursPlaceholder[language]}
                        </p>
                      </div>
                    </div>

                    {/* Social Media Placeholders */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#EEF2F8] text-[#081E68] flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-4 h-4 text-[#081E68]" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-xs font-semibold text-slate-500 mb-2">
                          {t.contactPage.socialMediaLabel}
                        </h3>
                        <div className="space-y-1.5">
                          {siteConfig.socialLinks.map((soc) => (
                            <div
                              key={soc.platform}
                              className="flex items-center justify-between text-xs bg-[#F8FAFC] px-3 py-2 rounded-md border border-slate-200/80"
                            >
                              <span className="font-semibold text-[#081E68]">{soc.platform}</span>
                              <span dir="ltr" className="font-mono-num text-slate-500">
                                {soc.placeholderLabel}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Google Maps Location Placeholder Card */}
              <div className="bg-white rounded-xl border border-slate-200/95 p-6 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-sm font-bold text-[#081E68]">
                    {t.contactPage.mapLocationLabel}
                  </h3>
                  <MapPin className="w-4 h-4 text-[#E30613]" />
                </div>

                {/* Styled Architectural Map Placeholder Frame */}
                <div className="relative h-52 rounded-lg overflow-hidden bg-[#051342] border border-slate-200 flex items-center justify-center p-6 text-center">
                  <svg
                    className="absolute inset-0 w-full h-full opacity-25"
                    viewBox="0 0 600 300"
                    fill="none"
                  >
                    <path
                      d="M0 60H600M0 120H600M0 180H600M0 240H600M100 0V300M200 0V300M300 0V300M400 0V300M500 0V300"
                      stroke="#60A5FA"
                      strokeWidth="1"
                    />
                    <path
                      d="M40 260L220 110L390 190L560 50"
                      stroke="#E30613"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="relative z-10 max-w-sm space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#E30613] text-white flex items-center justify-center mx-auto shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-medium text-white leading-relaxed">
                      {siteConfig.googleMapsPlaceholder[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
