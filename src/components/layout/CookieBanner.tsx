'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site.config';

import { Cookie, X } from 'lucide-react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!siteConfig.features.cookieBanner) return;
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for polite entrance
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-5 left-5 z-50',
        'w-[calc(100%-2.5rem)] sm:w-[420px] max-w-[420px]',
        'bg-surface/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl',
        'p-5 transition-all animate-in fade-in slide-in-from-bottom-5 duration-300'
      )}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-primary-soft text-primary shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink leading-tight">Cookie Preferences</h4>
            <span className="text-[11px] text-ink-3">We respect your privacy</span>
          </div>
        </div>
        <button
          onClick={reject}
          aria-label="Close cookie banner"
          className="p-1 text-ink-3 hover:text-ink rounded-lg hover:bg-bg-soft transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-ink-2 leading-relaxed mb-4">
        We use essential cookies to maintain security and analytics cookies to improve your browsing experience. Learn more in our{' '}
        <Link href="/cookies" className="text-primary font-medium hover:underline">
          Cookie Policy
        </Link>.
      </p>

      <div className="flex items-center gap-2.5 pt-1">
        <button
          onClick={accept}
          className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-primary rounded-xl hover:bg-primary-hover shadow-sm transition-colors min-h-[38px]"
        >
          Accept All
        </button>
        <button
          onClick={reject}
          className="px-4 py-2 text-xs font-medium text-ink-2 bg-bg-soft border border-border rounded-xl hover:bg-border/30 hover:border-border-strong transition-colors min-h-[38px]"
        >
          Decline
        </button>
        <Link
          href="/cookies"
          className="px-3 py-2 text-xs font-medium text-ink-3 hover:text-primary transition-colors text-center"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}
