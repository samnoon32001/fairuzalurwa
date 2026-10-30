import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { ClientAppShell } from '../components/ClientAppShell';
import './globals.css';

function getMetadataBase(): URL {
  const envUrl = process.env.APP_URL;
  if (envUrl && envUrl !== 'MY_APP_URL') {
    try {
      const formatted =
        envUrl.startsWith('http://') || envUrl.startsWith('https://')
          ? envUrl
          : `https://${envUrl}`;
      return new URL(formatted);
    } catch {
      // Fallback if URL is invalid
    }
  }
  return new URL('https://fairuzalurwa.com');
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: 'Travel, Government & Business Services in Saudi Arabia | Fairuz Al Urwa Company',
  description:
    'Professional assistance with travel bookings, government services, business registration, company formation and investor services in Saudi Arabia by Fairuz Al Urwa Company.',
  icons: {
    icon: '/assets/aistudio/Fairuz_Al_Urwa_Logo_Print_copy_954cd263.png',
  },
  openGraph: {
    title: 'Travel, Government & Business Services in Saudi Arabia | Fairuz Al Urwa Company',
    description:
      'Professional assistance with travel bookings, government services, business registration, company formation and investor services in Saudi Arabia by Fairuz Al Urwa Company.',
    type: 'website',
    siteName: 'Fairuz Al Urwa Company',
    images: ['/assets/aistudio/Fairuz_Al_Urwa_Logo_Print_copy_954cd263.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel, Government & Business Services in Saudi Arabia | Fairuz Al Urwa Company',
    description:
      'Professional assistance with travel bookings, government services, business registration, company formation and investor services in Saudi Arabia by Fairuz Al Urwa Company.',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Fairuz Al Urwa Company (شركة فيروز العروة)',
  logo: '/assets/aistudio/Fairuz_Al_Urwa_Logo_Print_copy_954cd263.png',
  telephone: '+966 55 634 9848',
  email: 'offairuzalurwa@gmail.com',
  description:
    'Professional assistance with travel bookings, government services, business registration, company formation and investor services in Saudi Arabia.',
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  availableLanguage: [
    {
      '@type': 'Language',
      name: 'English',
      alternateName: 'en',
    },
    {
      '@type': 'Language',
      name: 'Arabic',
      alternateName: 'ar',
    },
    {
      '@type': 'Language',
      name: 'Urdu',
      alternateName: 'ur',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Travel, Government, Commercial & Investor Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Travel & Education Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Absher, Passport & Human Resources Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business & Commercial Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Investor Services & Company Formation in Saudi Arabia',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#081E68] selection:text-white">
        <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
          <ClientAppShell>{children}</ClientAppShell>
        </Suspense>
      </body>
    </html>
  );
}

