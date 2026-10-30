'use client';

import React from 'react';
import { AppProvider, useApp } from '../context/AppContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

const InnerShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isRtl } = useApp();

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-[#F8FAFC] text-[#172033] ${
        isRtl ? 'font-rtl' : 'font-sans-ltr'
      }`}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export const ClientAppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <InnerShell>{children}</InnerShell>
    </AppProvider>
  );
};

