'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { StatusBadge } from '@/components/ui';
import { Clock, History, FilePlus, FileMinus } from 'lucide-react';

export function VersionHistoryPreview({ className }: { className?: string }) {
  return (
    <div className={cn("bg-surface rounded-[16px] shadow-rest border border-border overflow-hidden", className)}>
      <div className="px-5 py-4 border-b border-border bg-bg-soft flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-ink-3" />
          <h4 className="text-sm font-semibold text-ink">Document History</h4>
        </div>
        <span className="font-mono text-[10px] text-ink-3 uppercase tracking-wider bg-surface px-2 py-1 rounded border border-border">Demo Data</span>
      </div>

      <div className="p-5 flex flex-col gap-6 relative">
        {/* Vertical line connecting versions */}
        <div className="absolute left-[31px] top-6 bottom-6 w-px bg-border-strong z-0" />

        {/* Version 1.2 */}
        <div className="relative z-10 flex gap-4">
          <div className="w-6 h-6 rounded-full bg-surface border border-border-strong flex items-center justify-center shrink-0 mt-0.5">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm font-semibold text-ink">v1.2.0</span>
                  <StatusBadge status="pass">Approved</StatusBadge>
                </div>
                <p className="text-sm text-ink-2">Updated rate limiting rules and RBAC definitions.</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[11px] font-mono text-ink-3">Oct 4, 2026</div>
                <div className="text-[11px] font-mono text-ink-3">by Sarah J.</div>
              </div>
            </div>
            
            {/* Diff UI */}
            <div className="bg-bg-soft border border-border rounded-[8px] overflow-hidden mt-3 text-[12px] font-mono">
              <div className="flex items-start gap-3 p-2 bg-danger-soft border-b border-danger/10 text-danger-700">
                <FileMinus className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="line-through opacity-70">API endpoints MUST be rate-limited to 500 requests per minute.</span>
              </div>
              <div className="flex items-start gap-3 p-2 bg-accent-soft text-accent-700">
                <FilePlus className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>API endpoints MUST be rate-limited to 1,000 requests per minute per tenant API key to prevent abuse.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Version 1.1 */}
        <div className="relative z-10 flex gap-4 opacity-70">
          <div className="w-6 h-6 rounded-full bg-surface border border-border-strong flex items-center justify-center shrink-0 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-ink-3" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm font-semibold text-ink">v1.1.0</span>
                  <StatusBadge status="pass">Approved</StatusBadge>
                </div>
                <p className="text-sm text-ink-2">Added Webhook payload specifications.</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[11px] font-mono text-ink-3">Sep 18, 2026</div>
                <div className="text-[11px] font-mono text-ink-3">by David K.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Version 1.0 */}
        <div className="relative z-10 flex gap-4 opacity-50">
          <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 mt-0.5">
            <Clock className="w-3 h-3 text-ink-3" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm font-semibold text-ink">v1.0.0</span>
                  <StatusBadge status="pass">Approved</StatusBadge>
                </div>
                <p className="text-sm text-ink-2">Initial baseline release.</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[11px] font-mono text-ink-3">Aug 02, 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
