'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  arrow?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-rest hover:shadow-hover',
  outline:
    'bg-transparent text-ink border border-border-strong hover:border-primary hover:text-primary',
  ghost:
    'bg-transparent text-ink-2 hover:text-primary hover:bg-primary-soft',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-body gap-2',
  lg: 'px-8 py-4 text-body gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  arrow = false,
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-[12px]',
    'transition-all duration-150 ease-out',
    'hover:-translate-y-[1px] active:translate-y-0',
    'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
    'min-h-[44px] cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {icon && !loading && icon}
      <span>{children}</span>
      {arrow && !loading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cn(classes, 'group no-underline')}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(classes, 'group')}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
