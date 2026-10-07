'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { processStages } from '@/content/process';
import * as Icons from 'lucide-react';

export function ProcessTimeline({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {processStages.map((stage, i) => {
          const IconComponent = (Icons as any)[stage.icon] || Icons.Circle;

          return (
            <div
              key={stage.number}
              className={cn(
                "bg-surface rounded-2xl border border-border p-6 sm:p-7 flex flex-col justify-between",
                "shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group relative"
              )}
            >
              {/* Top row: Stage number & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-full bg-primary-soft">
                  Step {stage.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-bg-soft group-hover:bg-primary-soft text-ink-2 group-hover:text-primary flex items-center justify-center transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-primary transition-colors">
                  {stage.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-ink-3">
                <span>Phase 0{i + 1} of 0{processStages.length}</span>
                <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Quality Guaranteed &rarr;
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
