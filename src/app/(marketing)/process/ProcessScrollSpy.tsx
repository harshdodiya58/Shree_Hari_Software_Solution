'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';
import type { ProcessStage } from '@/content/process';

export function ProcessScrollSpy({ stages }: { stages: ProcessStage[] }) {
  const [activeStage, setActiveStage] = useState<string>(stages[0].number);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = stages.map((s) => document.getElementById(`stage-${s.number}`));
      
      let currentActive = stages[0].number;
      
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentActive = el.id.replace('stage-', '');
          }
        }
      }
      
      setActiveStage(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stages]);

  return (
    <div className="container relative py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sticky Rail (Desktop) */}
        <div className="hidden lg:block w-[240px] shrink-0 relative">
          <div className="sticky top-[120px]">
            <h3 className="text-[10px] font-mono text-ink-3 uppercase mb-6">Process Stages</h3>
            <div className="relative border-l border-border pl-6 space-y-8">
              {stages.map((stage) => {
                const isActive = activeStage === stage.number;
                return (
                  <div key={stage.number} className="relative">
                    {/* Dot */}
                    <div className={cn(
                      "absolute -left-[29px] top-1.5 w-2 h-2 rounded-full border border-surface transition-colors",
                      isActive ? "bg-primary scale-125" : "bg-border-strong"
                    )} />
                    <span className={cn(
                      "font-mono text-xs block mb-1 transition-colors",
                      isActive ? "text-primary" : "text-ink-3"
                    )}>
                      {stage.number}
                    </span>
                    <a
                      href={`#stage-${stage.number}`}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-ink",
                        isActive ? "text-ink" : "text-ink-2"
                      )}
                    >
                      {stage.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-20 lg:space-y-32">
          {stages.map((stage) => {
            const Icon = (Icons as any)[stage.icon] || Icons.Circle;
            
            return (
              <div key={stage.number} id={`stage-${stage.number}`} className="scroll-mt-[120px]">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-surface border border-border shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-primary">{stage.number}</span>
                      <h2 className="text-h2 text-ink">{stage.title}</h2>
                    </div>
                    <p className="text-body text-ink-2 max-w-2xl">{stage.description}</p>
                  </div>
                </div>

                <div className="bg-bg-soft rounded-[24px] border border-border p-6 sm:p-8 lg:p-10 mb-8">
                  <h4 className="text-[10px] font-mono text-ink-3 uppercase mb-2">Goal</h4>
                  <p className="text-lg font-medium text-ink">{stage.goal}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] font-mono text-ink-3 uppercase mb-6 flex items-center gap-2">
                      <Icons.ListChecks className="w-4 h-4" />
                      Key Activities
                    </h4>
                    <ul className="space-y-4">
                      {stage.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-border-strong mt-1.5 shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] font-mono text-ink-3 uppercase mb-6 flex items-center gap-2">
                        <Icons.Package className="w-4 h-4" />
                        Deliverables
                      </h4>
                      <ul className="space-y-4">
                        {stage.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-ink-2 p-3 bg-surface border border-border rounded-lg shadow-sm">
                            <Icons.CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            {del}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono text-ink-3 uppercase mb-6 flex items-center gap-2">
                        <Icons.Users className="w-4 h-4" />
                        What We Need From You
                      </h4>
                      <p className="text-sm text-ink-2 p-4 bg-primary-soft/50 border border-primary/20 rounded-lg">
                        {stage.clientNeeds}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
