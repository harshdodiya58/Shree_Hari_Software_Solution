import React from 'react';
import { cn } from '@/lib/utils';

/** Numbered section label: ( Services — 01 ) */
interface SectionHeaderProps {
  label: string;
  number: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  label,
  number,
  title,
  description,
  className,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <span className="section-label mb-4 block">
        {label} — {number}
      </span>
      <h2 className="text-h2 text-ink mt-3">{title}</h2>
      {description && (
        <p
          className={cn(
            'text-body text-ink-2 mt-4 max-w-[65ch]',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Container wrapper */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('container', className)}>
      {children}
    </Component>
  );
}

/** Section wrapper with alternating backgrounds */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'soft' | 'tint';
  id?: string;
  as?: React.ElementType;
}

const bgStyles = {
  white: 'bg-bg',
  soft: 'bg-bg-soft',
  tint: 'bg-bg-tint',
};

export function Section({ children, className, bg = 'white', id, as: Component = 'section' }: SectionProps) {
  return (
    <Component
      id={id}
      className={cn('section', bgStyles[bg], className)}
    >
      <Container>{children}</Container>
    </Component>
  );
}
