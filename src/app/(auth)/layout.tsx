import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site.config';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '@/components/ui';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg flex flex-col font-sans">
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-10">
        <Logo size="sm" />
        
        <Link href="/" className="text-sm font-medium text-ink-3 hover:text-ink transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Site
        </Link>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6 mt-16 md:mt-0">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
      
      <footer className="py-6 text-center text-xs text-ink-3">
        &copy; {siteConfig.year} {siteConfig.companyName}. All rights reserved.
      </footer>
    </div>
  );
}
