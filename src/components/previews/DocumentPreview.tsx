'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge, StatusBadge } from '@/components/ui';
import { FileText, ChevronRight, Check } from 'lucide-react';

export function DocumentPreview({ className }: { className?: string }) {
  return (
    <div className={cn("bg-surface rounded-[16px] shadow-rest border border-border overflow-hidden flex h-[400px]", className)}>
      {/* Sidebar TOC */}
      <div className="w-[180px] sm:w-[220px] bg-bg-soft border-r border-border shrink-0 hidden sm:flex flex-col">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-ink-3" />
            <span className="text-xs font-semibold text-ink">SRS-Core</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="text-[10px] font-mono text-ink-3 uppercase px-2 mb-2">Contents</div>
          {['1. Introduction', '2. Overall Description', '3. System Features', '4. External Interfaces', '5. Non-Functional Req'].map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "px-2 py-1.5 text-[13px] rounded-[6px] cursor-default flex items-center justify-between group",
                i === 2 ? "bg-primary-soft text-primary font-medium" : "text-ink-2 hover:bg-border/50"
              )}
            >
              <span className="truncate">{item}</span>
              {i === 2 && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Metadata */}
        <div className="p-4 sm:px-6 sm:py-5 border-b border-border bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-ink">3. System Features</h3>
            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              <span className="font-mono text-[10px] text-ink-3 uppercase tracking-wider">v1.2.0</span>
              <span className="w-1 h-1 rounded-full bg-border-strong" />
              <span className="text-xs text-ink-3">Last updated Oct 4, 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="demo">Demo Data</Badge>
            <StatusBadge status="pass">Approved</StatusBadge>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-surface text-sm text-ink-2">
          <div className="max-w-2xl">
            <h4 className="text-base font-semibold text-ink mb-3">3.1 Role-Based Access Control (RBAC)</h4>
            <p className="mb-4 leading-relaxed">
              The system MUST implement role-based access control to restrict administrative functions to authorized personnel only. Roles are defined at the tenant level.
            </p>
            
            <div className="bg-bg-soft border border-border rounded-[8px] overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead className="bg-bg-soft border-b border-border">
                  <tr>
                    <th className="py-2 px-3 text-[11px] font-mono text-ink-3 uppercase font-medium">Role</th>
                    <th className="py-2 px-3 text-[11px] font-mono text-ink-3 uppercase font-medium">Description</th>
                    <th className="py-2 px-3 text-[11px] font-mono text-ink-3 uppercase font-medium">Clearance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-[13px]">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-ink">Admin</td>
                    <td className="py-2.5 px-3">Full access to tenant settings and billing</td>
                    <td className="py-2.5 px-3 text-center"><Check className="w-4 h-4 text-accent inline-block" /></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-ink">Manager</td>
                    <td className="py-2.5 px-3">Can manage users and view reports</td>
                    <td className="py-2.5 px-3 text-center"><Check className="w-4 h-4 text-accent inline-block" /></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-ink">User</td>
                    <td className="py-2.5 px-3">Read-only access to assigned projects</td>
                    <td className="py-2.5 px-3 text-center text-border-strong">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-base font-semibold text-ink mb-3">3.2 Rate Limiting</h4>
            <p className="mb-4 leading-relaxed">
              API endpoints MUST be rate-limited to 1,000 requests per minute per tenant API key to prevent abuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
