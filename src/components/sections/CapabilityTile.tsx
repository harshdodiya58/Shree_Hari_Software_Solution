import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface CapabilityTileProps {
  label: string; // e.g. "QA"
  title: string; // e.g. "Structured Testing"
  description?: string;
  href?: string;
  className?: string;
}

export function CapabilityTile({
  label,
  title,
  description,
  href,
  className,
}: CapabilityTileProps) {
  const content = (
    <div className={cn(
      "group relative bg-surface border border-border rounded-[24px] p-8 sm:p-10",
      "shadow-rest hover:shadow-hover hover:-translate-y-1 hover:border-primary-soft transition-all duration-300",
      "flex flex-col justify-between h-full min-h-[280px] lg:min-h-[320px] overflow-hidden",
      className
    )}>
      {/* Decorative background circle */}
      <div className="absolute -right-8 -top-8 w-48 h-48 bg-bg-soft rounded-full opacity-50 group-hover:scale-110 group-hover:bg-primary/5 transition-transform duration-700 ease-out" />
      
      <div className="relative z-10 flex justify-between items-start">
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-3 px-3 py-1 bg-bg-soft rounded-full border border-border group-hover:border-primary/20 group-hover:text-primary transition-colors">
          {label}
        </span>
        {href && (
          <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
            <ArrowUpRight className="w-5 h-5 text-ink-3 group-hover:text-white transition-colors duration-300" />
          </div>
        )}
      </div>

      <div className="relative z-10 mt-16">
        <h3 className="text-h3 text-ink mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
        {description && (
          <p className="text-body text-ink-2 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block no-underline h-full">{content}</Link>;
  }

  return content;
}
