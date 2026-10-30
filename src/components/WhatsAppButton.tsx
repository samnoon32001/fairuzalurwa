import React, { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { buildWhatsAppLink } from '../lib/config';

export const WhatsAppButton: React.FC = () => {
  const {
    t,
    siteConfig,
    updateSiteConfig,
    whatsappModalState,
    openWhatsAppEnquiry,
    closeWhatsAppModal,
  } = useApp();

  const [draftMessage, setDraftMessage] = useState('');
  const [draftNumber, setDraftNumber] = useState(siteConfig.whatsappNumberPlaceholder);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setDraftMessage(whatsappModalState.message || t.whatsapp.defaultGeneralMessage);
  }, [whatsappModalState.message, t.whatsapp.defaultGeneralMessage]);

  useEffect(() => {
    setDraftNumber(siteConfig.whatsappNumberPlaceholder);
  }, [siteConfig.whatsappNumberPlaceholder]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(draftMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const whatsappHref = buildWhatsAppLink(draftNumber, draftMessage);

  return (
    <>
      {/* Floating WhatsApp Button (respects RTL/LTR via end-5) */}
      <div className="fixed bottom-5 end-5 z-40">
        <button
          type="button"
          onClick={() => openWhatsAppEnquiry(t.whatsapp.defaultGeneralMessage)}
          aria-label={t.whatsapp.floatingLabel}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#081E68] hover:bg-[#0D2C94] text-white border border-blue-400/30 shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-white shrink-0">
            <MessageCircle className="w-4 h-4 fill-current" />
          </span>
          <span className="text-xs sm:text-sm font-semibold pe-1 whitespace-nowrap">
            {t.whatsapp.floatingLabel}
          </span>
        </button>
      </div>

      {/* Interactive WhatsApp Enquiry Dispatch Modal */}
      {whatsappModalState.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
        >
          <div className="w-full max-w-lg bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#081E68] px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#25D366]/20 text-[#25D366] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <h3 id="whatsapp-modal-title" className="text-base font-semibold text-white">
                    {t.whatsapp.modalTitle}
                  </h3>
                  <p className="text-xs text-slate-200">{t.whatsapp.modalSubtitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeWhatsAppModal}
                aria-label={t.whatsapp.closeBtn}
                className="p-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="wa-prefilled-msg"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  {t.whatsapp.prefilledMessageLabel}
                </label>
                <textarea
                  id="wa-prefilled-msg"
                  rows={3}
                  value={draftMessage}
                  onChange={(e) => setDraftMessage(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#081E68] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="wa-recipient-number"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  {t.whatsapp.recipientNumberLabel}
                </label>
                <input
                  id="wa-recipient-number"
                  type="text"
                  dir="ltr"
                  value={draftNumber}
                  onChange={(e) => {
                    setDraftNumber(e.target.value);
                    updateSiteConfig({ whatsappNumberPlaceholder: e.target.value });
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-mono-num text-slate-800 focus:bg-white focus:border-[#081E68] focus:outline-none"
                />
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  {t.whatsapp.editableNumberHint}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{t.whatsapp.copiedLabel}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t.whatsapp.copyMessageBtn}</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => closeWhatsAppModal()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#081E68] hover:bg-[#0D2C94] text-white text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{t.whatsapp.openWhatsappBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
