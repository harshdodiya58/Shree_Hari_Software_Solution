import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'demo';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-bg-soft text-ink-3 border-border',
  primary: 'bg-primary-soft text-primary border-primary/20',
  success: 'bg-accent-soft text-accent border-accent/20',
  warning: 'bg-warn-soft text-ink-2 border-warn-soft',
  danger: 'bg-danger-soft text-danger border-danger-soft',
  demo: 'bg-bg-soft text-ink-3 border-border',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5',
        'font-mono text-[11px] tracking-[0.08em] uppercase',
        'rounded-full border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Status badge with dot indicator */
interface StatusBadgeProps {
  status: 'pass' | 'fail' | 'blocked' | 'pending' | 'active';
  children: React.ReactNode;
  className?: string;
}

const statusColors: Record<StatusBadgeProps['status'], string> = {
  pass: 'bg-accent',
  fail: 'bg-danger',
  blocked: 'bg-warn-soft border border-border',
  pending: 'bg-border-strong',
  active: 'bg-primary',
};

const statusBadgeVariants: Record<StatusBadgeProps['status'], string> = {
  pass: 'bg-accent-soft text-accent border-accent/20',
  fail: 'bg-danger-soft text-danger border-danger/20',
  blocked: 'bg-warn-soft text-ink-2 border-border',
  pending: 'bg-bg-soft text-ink-3 border-border',
  active: 'bg-primary-soft text-primary border-primary/20',
};

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5',
        'font-mono text-[11px] tracking-[0.08em] uppercase',
        'rounded-full border',
        statusBadgeVariants[status],
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', statusColors[status])} />
      {children}
    </span>
  );
}
