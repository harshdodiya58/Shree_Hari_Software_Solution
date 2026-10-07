'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function ArchitecturePreview({ className }: { className?: string }) {
  return (
    <div className={cn("bg-surface rounded-[16px] shadow-rest border border-border overflow-hidden p-6 sm:p-8 flex items-center justify-center min-h-[300px]", className)}>
      <svg
        viewBox="0 0 600 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-lg h-auto"
        aria-label="Software Architecture Diagram"
      >
        <defs>
          <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-border-strong)" />
            <stop offset="50%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-border-strong)" />
          </linearGradient>
          
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#202124" floodOpacity="0.04" />
          </filter>
        </defs>

        {/* Lines */}
        {/* Client to API */}
        <path d="M 120 160 L 220 160" stroke="var(--color-border-strong)" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="170" cy="160" r="3" fill="var(--color-primary)" />
        
        {/* API to Services */}
        <path d="M 340 160 L 440 160" stroke="var(--color-primary)" strokeWidth="2" />
        <path d="M 430 155 L 440 160 L 430 165" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* API to Integrations (Top) */}
        <path d="M 280 120 L 280 70 L 440 70" stroke="var(--color-border-strong)" strokeWidth="2" />
        <path d="M 430 65 L 440 70 L 430 75" stroke="var(--color-border-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Services to DB (Bottom) */}
        <path d="M 500 200 L 500 250 L 400 250" stroke="var(--color-border-strong)" strokeWidth="2" />
        <path d="M 410 245 L 400 250 L 410 255" stroke="var(--color-border-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Boxes */}
        
        {/* Client App */}
        <g filter="url(#shadow)">
          <rect x="20" y="120" width="100" height="80" rx="12" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <rect x="35" y="140" width="70" height="6" rx="3" fill="var(--color-bg-soft)" stroke="var(--color-border)" strokeWidth="1" />
          <rect x="35" y="155" width="50" height="6" rx="3" fill="var(--color-bg-soft)" stroke="var(--color-border)" strokeWidth="1" />
          <rect x="35" y="170" width="60" height="6" rx="3" fill="var(--color-bg-soft)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="70" y="195" textAnchor="middle" fill="var(--color-ink-2)" fontSize="12" fontWeight="500" fontFamily="var(--font-sans)">Client Apps</text>
        </g>

        {/* API Gateway */}
        <g filter="url(#shadow)">
          <rect x="220" y="120" width="120" height="80" rx="12" fill="var(--color-primary-soft)" stroke="var(--color-primary)" strokeWidth="1.5" />
          <circle cx="280" cy="150" r="12" fill="var(--color-surface)" stroke="var(--color-primary)" strokeWidth="1.5" />
          <path d="M 276 150 L 284 150 M 280 146 L 280 154" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="280" y="185" textAnchor="middle" fill="var(--color-primary)" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">API Gateway</text>
        </g>

        {/* Custom Services */}
        <g filter="url(#shadow)">
          <rect x="440" y="120" width="120" height="80" rx="12" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <rect x="460" y="140" width="20" height="20" rx="4" fill="var(--color-accent-soft)" />
          <rect x="490" y="140" width="20" height="20" rx="4" fill="var(--color-accent-soft)" />
          <rect x="520" y="140" width="20" height="20" rx="4" fill="var(--color-accent-soft)" />
          <text x="500" y="185" textAnchor="middle" fill="var(--color-ink-2)" fontSize="12" fontWeight="500" fontFamily="var(--font-sans)">Microservices</text>
        </g>

        {/* Integrations (Top) */}
        <g filter="url(#shadow)">
          <rect x="440" y="30" width="120" height="80" rx="12" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="500" y="70" textAnchor="middle" fill="var(--color-ink-3)" fontSize="12" fontWeight="500" fontFamily="var(--font-sans)">3rd Party</text>
          <text x="500" y="85" textAnchor="middle" fill="var(--color-ink-3)" fontSize="12" fontWeight="500" fontFamily="var(--font-sans)">Integrations</text>
        </g>

        {/* Database (Bottom) */}
        <g filter="url(#shadow)">
          <path d="M 280 230 C 280 230 320 230 340 230 C 340 220 380 220 380 230 L 380 270 C 380 280 340 280 340 270 C 320 270 280 270 280 270 Z" fill="none" />
          <ellipse cx="340" cy="230" rx="40" ry="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <path d="M 300 230 L 300 270 C 300 280 380 280 380 270 L 380 230" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <path d="M 300 245 C 300 255 380 255 380 245" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <path d="M 300 260 C 300 270 380 270 380 260" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          <text x="340" y="300" textAnchor="middle" fill="var(--color-ink-2)" fontSize="12" fontWeight="500" fontFamily="var(--font-sans)">Cloud Database</text>
        </g>

      </svg>
    </div>
  );
}
