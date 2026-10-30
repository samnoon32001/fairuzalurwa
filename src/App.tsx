/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AppProvider, useApp } from './context/AppContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { InvestorServicesPage } from './pages/InvestorServicesPage';
import { ServicesPage } from './pages/ServicesPage';

const MainRouter: React.FC = () => {
  const { currentPage, isRtl } = useApp();

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-[#F8FAFC] text-[#172033] ${
        isRtl ? 'font-rtl' : 'font-sans-ltr'
      }`}
    >
      <Header />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'investor-services' && <InvestorServicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
