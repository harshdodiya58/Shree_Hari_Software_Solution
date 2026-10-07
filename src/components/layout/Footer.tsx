'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site.config';
import { ArrowUp } from 'lucide-react';
import { Logo } from '@/components/ui';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

/* ─── Live Clock ──────────────────────────────────────────── */

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: siteConfig.contact.timezone,
        }).format(new Date())
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-xs text-ink-3">
      {time} IST
    </span>
  );
}

/* ─── Newsletter Form ─────────────────────────────────────── */

function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-ink mb-3">Newsletter</h3>
      <p className="text-sm text-ink-3 mb-3">
        Practical articles on QA, documentation and software quality.
      </p>
      {status === 'success' ? (
        <p className="text-sm text-accent font-medium">Thanks for subscribing.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          {/* Honeypot */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={cn(
              'flex-1 px-3 py-2 text-sm bg-surface border border-border-strong rounded-[8px]',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
              'placeholder:text-ink-3/50 min-w-0'
            )}
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={cn(
              'px-4 py-2 text-sm font-semibold text-white bg-primary rounded-[8px]',
              'hover:bg-primary-hover transition-colors',
              'disabled:opacity-50 min-h-[44px]'
            )}
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-sm text-danger mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}

/* ─── Footer ──────────────────────────────────────────────── */

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-soft border-t border-border overflow-hidden">
      {/* Subtle brand watermark that fits cleanly within container bounds */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[4vw] font-bold text-ink/[0.03] tracking-widest uppercase whitespace-nowrap pointer-events-none select-none leading-none max-w-full overflow-hidden"
        aria-hidden="true"
      >
        {siteConfig.shortName || 'SHREE HARI'} · SOFTWARE QUALITY
      </div>

      <div className="container relative py-16 lg:py-20">
        {/* Top: Logo + Description + Status */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm text-ink-3 mb-5 max-w-sm leading-relaxed">
              {siteConfig.footer.description}
            </p>
            {/* Status dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border">
              <span className="status-dot" />
              <span className="font-mono text-xs text-ink-2 font-medium">
                Accepting new projects · {siteConfig.year}
              </span>
            </div>
          </div>

          {/* Link columns */}
          {siteConfig.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-3 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {siteConfig.features.newsletterEnabled && (
          <div className="border-t border-border pt-8 mb-8">
            <div className="max-w-md">
              <FooterNewsletter />
            </div>
          </div>
        )}

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-ink-3">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <span className="text-border">·</span>
            <Link href="/legal/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <span className="text-border">·</span>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Socials */}
            <div className="flex items-center gap-1 mr-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-ink-3 hover:text-primary transition-colors rounded-lg hover:bg-surface"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-ink-3 hover:text-primary transition-colors rounded-lg hover:bg-surface"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-ink-3 hover:text-primary transition-colors rounded-lg hover:bg-surface"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            <span className="text-border">·</span>

            <span>
              &copy; {siteConfig.year} {siteConfig.companyName}.
            </span>

            <span className="text-border hidden sm:inline">·</span>

            <div className="hidden sm:inline-block">
              <LiveClock />
            </div>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 p-3 rounded-full bg-surface border border-border shadow-rest hover:shadow-hover hover:-translate-y-0.5 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-ink-3" />
        </button>
      </div>
    </footer>
  );
}
