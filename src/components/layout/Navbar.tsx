'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site.config';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { ChevronDown, Menu, X } from 'lucide-react';

/* ─── Desktop Dropdown ────────────────────────────────────── */

interface NavDropdownProps {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  isActive: boolean;
}

function NavDropdown({ label, href, items, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
          'hover:text-primary',
          isActive ? 'text-primary' : 'text-ink-2'
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div
          className={cn(
            'absolute top-full left-0 mt-1 py-2 w-56',
            'bg-surface border border-border rounded-[12px] shadow-hover',
            'z-50'
          )}
          role="menu"
        >
          <Link
            href={href}
            className="block px-4 py-2 text-sm text-ink-2 hover:text-primary hover:bg-primary-soft/50 transition-colors"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            View All {label}
          </Link>
          <div className="mx-3 my-1 h-px bg-border" />
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-ink-2 hover:text-primary hover:bg-primary-soft/50 transition-colors"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Menu ─────────────────────────────────────────── */

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const prevPathname = useRef(pathname);

  // Close only when pathname actually changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-ink/40 backdrop-blur-xs transition-opacity duration-300" 
        onClick={onClose} 
        aria-hidden="true"
      />
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-[300px] sm:w-[360px] max-w-[85vw] bg-surface shadow-2xl flex flex-col z-10 border-l border-border animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-bg-soft/40">
          <Logo size="sm" isLink={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-ink-3 hover:text-ink hover:bg-bg-soft transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile navigation">
          {siteConfig.nav.primary.map((item) => (
            <div key={item.href} className="border-b border-border last:border-0">
              {(item as any).children ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-4 text-lg font-medium text-ink"
                    onClick={() =>
                      setExpandedItem(expandedItem === item.label ? null : item.label)
                    }
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-ink-3 transition-transform duration-200',
                        expandedItem === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                  {expandedItem === item.label && (
                    <div className="pl-4 pb-3 space-y-1">
                      <Link
                        href={item.href}
                        className="block py-2 text-base text-ink-2 hover:text-primary transition-colors"
                        onClick={onClose}
                      >
                        View All
                      </Link>
                      {(item as any).children.map((child: any) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-base text-ink-2 hover:text-primary transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-medium text-ink hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        {/* Bottom CTA */}
        <div className="px-6 py-6 border-t border-border space-y-3">
          <Button href={siteConfig.nav.cta.href} variant="primary" size="lg" className="w-full">
            {siteConfig.nav.cta.label}
          </Button>
          {siteConfig.features.portalEnabled && (
            <Button href={siteConfig.nav.login.href} variant="ghost" size="md" className="w-full">
              {siteConfig.nav.login.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Scroll Progress ─────────────────────────────────────── */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}

/* ─── Navbar ──────────────────────────────────────────────── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-surface/95 backdrop-blur-2xl border-b border-border shadow-sm'
            : 'bg-surface/80 backdrop-blur-xl border-b border-border/50'
        )}
      >
        <div className="container flex items-center justify-between h-16 lg:h-[72px]">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {siteConfig.nav.primary.map((item) =>
              (item as any).children ? (
                <NavDropdown
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  items={(item as any).children}
                  isActive={isActive(item.href)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors relative',
                    'hover:text-primary',
                    isActive(item.href)
                      ? 'text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full'
                      : 'text-ink-2'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {siteConfig.features.portalEnabled && (
              <Button href={siteConfig.nav.login.href} variant="ghost" size="sm" className="hidden lg:inline-flex">
                {siteConfig.nav.login.label}
              </Button>
            )}
            <Button href={siteConfig.nav.cta.href} variant="primary" size="sm" className="hidden lg:inline-flex">
              {siteConfig.nav.cta.label}
            </Button>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl bg-bg-soft border border-border/80 flex items-center justify-center text-ink hover:text-primary transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-5 h-5 text-ink" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={handleCloseMobile} />
    </>
  );
}
