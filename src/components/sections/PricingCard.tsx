import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { Check, Minus } from 'lucide-react';
import type { PricingPackage } from '@/content/pricing';

export function PricingCard({ pkg, className }: { pkg: PricingPackage; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col bg-surface border rounded-[24px] overflow-hidden relative transition-all duration-300",
        pkg.highlighted 
          ? "border-primary shadow-hover md:-translate-y-2 z-10" 
          : "border-border shadow-rest hover:shadow-hover",
        className
      )}
    >
      {pkg.highlighted && (
        <div className="bg-primary text-white text-[10px] font-mono uppercase tracking-wider text-center py-1.5 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-ink mb-1">{pkg.title}</h3>
        <p className="text-sm text-ink-3 mb-6">{pkg.subtitle}</p>
        
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-h2 text-ink">{pkg.price}</span>
          </div>
          {pkg.period && <span className="text-sm text-ink-3 block mt-1">{pkg.period}</span>}
        </div>
        
        <p className="text-sm text-ink-2 mb-8 h-[60px] line-clamp-3">{pkg.description}</p>
        
        <Button 
          href={pkg.ctaHref} 
          variant={pkg.highlighted ? "primary" : "outline"} 
          className="w-full mb-8"
        >
          {pkg.cta}
        </Button>
        
        <div className="space-y-4 flex-1">
          <p className="text-[10px] font-mono uppercase text-ink-3 mb-2">What's included</p>
          {pkg.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              ) : (
                <Minus className="w-4 h-4 text-ink-3/30 shrink-0 mt-0.5" />
              )}
              <span className={cn("text-sm", feature.included ? "text-ink-2" : "text-ink-3/50")}>
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
