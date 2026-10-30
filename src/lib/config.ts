export interface SiteContactConfig {
  companyName: {
    en: string;
    ar: string;
    ur: string;
  };
  whatsappNumberPlaceholder: string;
  phoneNumberPlaceholder: string;
  emailPlaceholder: string;
  officeAddressPlaceholder: {
    en: string;
    ar: string;
    ur: string;
  };
  businessHoursPlaceholder: {
    en: string;
    ar: string;
    ur: string;
  };
  googleMapsPlaceholder: {
    en: string;
    ar: string;
    ur: string;
  };
  socialLinks: {
    platform: string;
    placeholderLabel: string;
    href: string;
  }[];
}

/**
 * Centralized Configuration File
 * Replace the placeholders below with actual client contact details when provided.
 */
export const COMPANY_LOGO_PATH = '/assets/aistudio/Fairuz_Al_Urwa_Logo_Print_copy_954cd263.png';
export const HERO_BANNER_IMAGE_PATH = '/assets/aistudio/image_bd09ed41.png';

export const DEFAULT_SITE_CONFIG: SiteContactConfig = {
  companyName: {
    en: 'Fairuz Al Urwa Company',
    ar: 'شركة فيروز العروة',
    ur: 'فیروز العروہ کمپنی',
  },
  whatsappNumberPlaceholder: '+966 53 182 2041',
  phoneNumberPlaceholder: '+966 55 634 9848',
  emailPlaceholder: 'offairuzalurwa@gmail.com',
  officeAddressPlaceholder: {
    en: '[Editable Placeholder: Office Suite / Building Name, Street Name, District, City, Kingdom of Saudi Arabia]',
    ar: '[عنصر نائب قابل للتعديل: رقم المكتب / اسم المبنى، اسم الشارع، الحي، المدينة، المملكة العربية السعودية]',
    ur: '[قابلِ ترمیم پلیس ہولڈر: آفس نمبر / عمارت کا نام، سٹریٹ، ڈسٹرکٹ، شہر، مملکتِ سعودی عرب]',
  },
  businessHoursPlaceholder: {
    en: '[Editable Placeholder: Sunday – Thursday: 00:00 AM – 00:00 PM | Saturday: 00:00 AM – 00:00 PM]',
    ar: '[عنصر نائب قابل للتعديل: الأحد – الخميس: 00:00 صباحاً – 00:00 مساءً | السبت: 00:00 صباحاً – 00:00 مساءً]',
    ur: '[قابلِ ترمیم پلیس ہولڈر: اتوار تا جمعرات: صبح 00:00 تا شام 00:00 | ہفتہ: صبح 00:00 تا شام 00:00]',
  },
  googleMapsPlaceholder: {
    en: '[Editable Placeholder: Google Maps Coordinates / Embed Location — Kingdom of Saudi Arabia]',
    ar: '[عنصر نائب قابل للتعديل: موقع خرائط جوجل المضمن — المملكة العربية السعودية]',
    ur: '[قابلِ ترمیم پلیس ہولڈر: گوگل میپس لوکیشن — مملکتِ سعودی عرب]',
  },
  socialLinks: [
    { platform: 'X (Twitter)', placeholderLabel: '[@client_handle_placeholder]', href: '#contact' },
    { platform: 'LinkedIn', placeholderLabel: '[/company/client-placeholder]', href: '#contact' },
    { platform: 'Instagram', placeholderLabel: '[@client_instagram_placeholder]', href: '#contact' },
    { platform: 'Snapchat', placeholderLabel: '[@client_snapchat_placeholder]', href: '#contact' },
  ],
};

export function buildWhatsAppLink(rawNumberOrPlaceholder: string, message: string): string {
  const digitsOnly = rawNumberOrPlaceholder.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  if (digitsOnly.length >= 8) {
    return `https://wa.me/${digitsOnly}?text=${encodedMessage}`;
  }
  return `https://api.whatsapp.com/send?text=${encodedMessage}`;
}
