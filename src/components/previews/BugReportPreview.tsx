'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge, StatusBadge } from '@/components/ui';

export function BugReportPreview({ className }: { className?: string }) {
  return (
    <div className={cn("bg-surface rounded-[16px] shadow-rest border border-border overflow-hidden", className)}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-start justify-between bg-bg-soft gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[11px] text-ink-3">BUG-412</span>
            <Badge variant="warning">High Severity</Badge>
          </div>
          <h4 className="text-sm font-semibold text-ink">Checkout button overlaps price on mobile view</h4>
        </div>
        <Badge variant="demo" className="shrink-0">Demo Data</Badge>
      </div>

      {/* Body */}
      <div className="p-5 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Main info */}
          <div className="space-y-4">
            <div>
              <div className="text-[10px] font-mono text-ink-3 uppercase mb-1.5">Steps to Reproduce</div>
              <ol className="list-decimal list-inside text-ink-2 space-y-1 text-[13px]">
                <li>Add any item to cart</li>
                <li>Navigate to checkout</li>
                <li>Resize window below 400px width</li>
                <li>Observe the bottom sticky bar</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-mono text-ink-3 uppercase mb-1.5">Expected</div>
                <div className="text-[13px] text-ink-2 p-2 bg-accent-soft text-accent-700 rounded-[8px] border border-accent/20">
                  Button is below price
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-ink-3 uppercase mb-1.5">Actual</div>
                <div className="text-[13px] text-ink-2 p-2 bg-danger-soft text-danger rounded-[8px] border border-danger/20">
                  Button covers price
                </div>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="bg-bg-soft p-4 rounded-[12px] border border-border/50 h-fit space-y-3">
            <div>
              <div className="text-[10px] font-mono text-ink-3 uppercase mb-1">Environment</div>
              <div className="text-[13px] text-ink-2">iOS 16.4, Safari, iPhone 13</div>
            </div>
            <div className="h-px bg-border w-full" />
            <div>
              <div className="text-[10px] font-mono text-ink-3 uppercase mb-1">Status</div>
              <StatusBadge status="active">In Progress</StatusBadge>
            </div>
            <div className="h-px bg-border w-full" />
            <div>
              <div className="text-[10px] font-mono text-ink-3 uppercase mb-1">Reporter</div>
              <div className="text-[13px] text-ink-2 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-soft flex items-center justify-center text-[10px] font-bold text-primary">QA</div>
                QA Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
