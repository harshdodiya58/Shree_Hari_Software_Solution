'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site.config';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  isLink?: boolean;
}

export function Logo({
  className,
  size = 'md',
  showWordmark = true,
  isLink = true,
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 30, text: 'text-[15px]', sub: 'text-[8.5px]' },
    md: { icon: 38, text: 'text-[17px]', sub: 'text-[9.5px]' },
    lg: { icon: 48, text: 'text-[21px]', sub: 'text-[11px]' },
  };

  const { icon: iconSize, text: textSize, sub: subSize } = sizeMap[size];

  const content = (
    <div className={cn('inline-flex items-center gap-3 select-none group', className)}>
      {/* ─── Modern Tech Emblem / Monogram ─── */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
          aria-hidden="true"
        >
          <defs>
            {/* Rich Gradient Fill */}
            <linearGradient id="shss-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A73E8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0B57D0" />
            </linearGradient>

            {/* Subtle Sheen Gradient */}
            <linearGradient id="shss-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Accent Cyan Glow */}
            <linearGradient id="shss-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          {/* Squircle Background Base */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="12"
            fill="url(#shss-grad)"
          />

          {/* Top Sheen */}
          <rect
            x="2"
            y="2"
            width="44"
            height="22"
            rx="12"
            fill="url(#shss-sheen)"
          />

          {/* Fine Outer Border */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="12"
            stroke="#FFFFFF"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Monogram Graphic: Stylized 'S' + 'H' merging with Code Bracket & QA Check */}
          {/* Left bracket / S upper stroke */}
          <path
            d="M 18 15 C 14 15 12 18 12 21 C 12 25 18 25 21 27 C 24 29 24 33 20 33 C 16 33 14 30.5 13 29"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Pillar / H structure */}
          <path
            d="M 28 15 L 28 33"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Connecting Crossbar / Software Quality Vector */}
          <path
            d="M 21 24 L 35 24"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Quality Assurance Verified Node / Sparkle Dot (Accent) */}
          <circle
            cx="35"
            cy="15"
            r="3.5"
            fill="url(#shss-accent)"
            stroke="#FFFFFF"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* ─── Professional Corporate Wordmark ─── */}
      {showWordmark && (
        <div className="flex flex-col justify-center text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={cn('font-bold tracking-tight text-ink group-hover:text-primary transition-colors', textSize)}>
              Shree Hari
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          </div>
          <span className={cn('font-mono font-semibold uppercase tracking-[0.18em] text-ink-3 group-hover:text-ink-2 transition-colors', subSize)}>
            Software Solution
          </span>
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link
        href="/"
        className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        aria-label={`${siteConfig.companyName} — Home`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
