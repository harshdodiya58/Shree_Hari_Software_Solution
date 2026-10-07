'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import * as Icons from 'lucide-react';
import type { ServiceItem } from '@/content/services';

export function ServiceSectionClient({ services }: { services: ServiceItem[] }) {
  const [activeSection, setActiveSection] = useState<string>(services[0].slug);

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = services.map((s) => document.getElementById(s.slug));
      
      let currentActive = services[0].slug;
      
      // Find the last section whose top is above the middle of the screen
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentActive = el.id;
          }
        }
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="container relative py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sticky Index (Desktop) */}
        <div className="hidden lg:block w-[240px] shrink-0 relative">
          <div className="sticky top-[120px] space-y-2">
            <h3 className="text-[10px] font-mono text-ink-3 uppercase mb-4">Contents</h3>
            <ul className="space-y-2 border-l border-border pl-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`#${service.slug}`}
                    onClick={(e) => scrollToSection(e, service.slug)}
                    className={cn(
                      "block text-sm py-1 transition-colors relative",
                      activeSection === service.slug 
                        ? "text-primary font-medium" 
                        : "text-ink-3 hover:text-ink-2"
                    )}
                  >
                    {activeSection === service.slug && (
                      <span className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[2px] h-4 bg-primary" />
                    )}
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex-1 space-y-24 lg:space-y-32">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.Circle;
            
            return (
              <div key={service.slug} id={service.slug} className="scroll-mt-[100px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-h2 text-ink">{service.title}</h2>
                </div>
                
                <p className="text-body text-ink-2 mb-10 max-w-3xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-10">
                  <div>
                    <h4 className="text-[10px] font-mono text-ink-3 uppercase mb-4">What We Do</h4>
                    <ul className="space-y-3">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-ink-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-ink-3 uppercase mb-4">Deliverables</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-ink-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button href={`/services/${service.slug}`} variant="outline" size="md" arrow>
                  Explore {service.shortTitle} Details
                </Button>
                
                {i !== services.length - 1 && (
                  <div className="w-full h-px bg-border mt-24 lg:mt-32" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
