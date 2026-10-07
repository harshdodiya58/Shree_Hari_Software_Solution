import React from 'react';
import { Navbar, Footer, CookieBanner } from '@/components/layout';
import { ToastProvider } from '@/components/ui';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-1 pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ToastProvider>
  );
}
