'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stages = ['PLAN', 'BUILD', 'TEST', 'DOCUMENT', 'IMPROVE', 'DELIVER'];

export function QualitySystemClient() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative py-12 px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Desktop horizontal view */}
      <div className="hidden md:flex items-center justify-between relative z-10">
        {stages.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-2.5 bg-surface px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-border shadow-sm z-10 relative hover:border-primary/50 hover:shadow-md transition-all group"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
            <span className="font-mono text-xs sm:text-sm font-semibold text-ink tracking-wider">{stage}</span>
          </motion.div>
        ))}
        
        {/* SVG Drawing Line (Desktop) */}
        <svg className="absolute top-[22px] left-[40px] right-[40px] w-[calc(100%-80px)] h-[10px] z-0" preserveAspectRatio="none">
           <motion.line 
             x1="0" y1="5" x2="100%" y2="5" 
             stroke="var(--color-primary-soft)" 
             strokeWidth="2" 
             strokeDasharray="4 4"
           />
           <motion.line 
             x1="0" y1="5" x2="100%" y2="5" 
             stroke="var(--color-primary)" 
             strokeWidth="2" 
             initial={{ pathLength: 0 }}
             animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           />
        </svg>
      </div>

      {/* Mobile vertical view */}
      <div className="flex md:hidden flex-col items-center gap-8 relative z-10">
        {stages.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex items-center gap-4 bg-surface px-6 py-4 rounded-xl border border-border shadow-sm z-10 w-[200px] justify-center"
          >
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="font-mono text-sm font-semibold text-ink tracking-wider">{stage}</span>
          </motion.div>
        ))}
        
        {/* SVG Drawing Line (Mobile) */}
        <svg className="absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-[2px] h-[calc(100%-60px)] z-0">
           <motion.line 
             x1="1" y1="0" x2="1" y2="100%" 
             stroke="var(--color-primary-soft)" 
             strokeWidth="2" 
             strokeDasharray="4 4"
           />
           <motion.line 
             x1="1" y1="0" x2="1" y2="100%" 
             stroke="var(--color-primary)" 
             strokeWidth="2" 
             initial={{ pathLength: 0 }}
             animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           />
        </svg>
      </div>
    </div>
  );
}
