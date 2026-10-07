'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge, StatusBadge } from '@/components/ui';
import { Search, Filter, MoreVertical } from 'lucide-react';

const testCases = [
  { id: 'TC-042', scenario: 'User registers with valid email', priority: 'High', status: 'pass' as const },
  { id: 'TC-043', scenario: 'User registers with existing email', priority: 'High', status: 'pass' as const },
  { id: 'TC-044', scenario: 'Password reset link expires after 1h', priority: 'Medium', status: 'fail' as const },
  { id: 'TC-045', scenario: 'Checkout with expired credit card', priority: 'High', status: 'blocked' as const },
  { id: 'TC-046', scenario: 'Profile picture upload (JPG)', priority: 'Low', status: 'pending' as const },
];

export function TestCasePreview({ className }: { className?: string }) {
  return (
    <div className={cn("bg-surface rounded-[16px] shadow-rest border border-border overflow-hidden flex flex-col", className)}>
      {/* Header bar */}
      <div className="px-4 py-3 border-b border-border bg-bg-soft flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="demo">Demo Data</Badge>
          <span className="text-sm font-semibold text-ink">Auth Flow Suite</span>
        </div>
        <div className="flex items-center gap-2 text-ink-3">
          <Search className="w-4 h-4 cursor-pointer hover:text-ink transition-colors" />
          <Filter className="w-4 h-4 cursor-pointer hover:text-ink transition-colors" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-border bg-surface text-[10px] font-mono text-ink-3 uppercase tracking-wider">
              <th className="py-2.5 px-4 font-medium">ID</th>
              <th className="py-2.5 px-4 font-medium">Scenario</th>
              <th className="py-2.5 px-4 font-medium">Priority</th>
              <th className="py-2.5 px-4 font-medium">Status</th>
              <th className="py-2.5 px-4 font-medium text-right"></th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-border">
            {testCases.map((tc) => (
              <tr key={tc.id} className="hover:bg-bg-soft transition-colors group">
                <td className="py-3 px-4 font-mono text-[11px] text-ink-3 whitespace-nowrap">{tc.id}</td>
                <td className="py-3 px-4 text-ink-2 max-w-[200px] sm:max-w-xs truncate">{tc.scenario}</td>
                <td className="py-3 px-4">
                  <span className={cn(
                    "text-[12px] px-2 py-0.5 rounded-full border",
                    tc.priority === 'High' ? "bg-warn-soft text-ink-2 border-border" : "bg-bg text-ink-3 border-border"
                  )}>
                    {tc.priority}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <StatusBadge status={tc.status}>
                    {tc.status}
                  </StatusBadge>
                </td>
                <td className="py-3 px-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4 text-ink-3 inline-block cursor-pointer hover:text-ink" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
