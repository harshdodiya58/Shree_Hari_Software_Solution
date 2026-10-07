'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full divide-y divide-border border-y border-border", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink group-hover:text-primary transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-ink-3 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm text-ink-2 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
