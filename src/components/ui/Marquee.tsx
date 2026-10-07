'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap bg-bg-soft border-y border-border py-4", className)}>
      <div className="inline-flex w-max marquee-track">
        {/* Repeat twice for seamless looping */}
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center">
            {items.map((item, index) => (
              <React.Fragment key={`${groupIndex}-${index}`}>
                <span className="text-xl md:text-2xl font-semibold text-ink-2 px-8 uppercase tracking-wide">
                  {item}
                </span>
                <Sparkles className="w-5 h-5 text-primary-soft shrink-0" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
