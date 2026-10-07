'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui';

interface CaseStudyRowProps {
  number: string;
  title: string;
  category: string;
  year: string;
  slug: string;
  isDemo?: boolean;
  previewNode?: React.ReactNode;
}

export function CaseStudyRow({
  number,
  title,
  category,
  year,
  slug,
  isDemo,
  previewNode,
}: CaseStudyRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block relative border-b border-border hover:bg-bg-soft transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Number + Title + Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-12 flex-1">
          <span className="font-mono text-sm text-ink-3 w-8 shrink-0">{number}</span>
          <h3 className="text-h3 text-ink group-hover:text-primary transition-colors">{title}</h3>
          {isDemo && (
            <Badge variant="demo" className="w-fit">Demo Case Study</Badge>
          )}
        </div>

        {/* Right: Category + Year + Arrow */}
        <div className="flex items-center gap-8 lg:gap-16 justify-between sm:justify-start lg:w-1/3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 flex-1">
            <span className="text-sm text-ink-2 whitespace-nowrap">{category}</span>
            <span className="font-mono text-xs text-ink-3 hidden sm:inline-block">{year}</span>
          </div>
          <ArrowRight className="w-6 h-6 text-ink-3 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
        </div>
      </div>

      {/* Hover Preview (Desktop only) */}
      {previewNode && (
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
            "w-[600px] pointer-events-none hidden xl:block",
            "transition-all duration-300 ease-out",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {previewNode}
        </div>
      )}
    </Link>
  );
}
