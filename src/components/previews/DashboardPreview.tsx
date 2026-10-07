'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles,
  Server,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-full max-w-[540px] mx-auto select-none', className)}>
      {/* ─── Ambient Glow Behind Artwork ─── */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 via-sky-400/10 to-indigo-500/10 rounded-3xl blur-2xl -z-10" />

      {/* ─── Main Showcase Card (Light Corporate Theme) ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface/95 backdrop-blur-xl rounded-2xl border border-border shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/40 group"
      >
        {/* Top Header Bar */}
        <div className="px-4 py-3 border-b border-border/70 flex items-center justify-between bg-bg-soft/70">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-rose-400 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-ink-3">
              <span className="font-semibold text-ink">Shree Hari</span>
              <span>•</span>
              <span className="text-primary font-medium">Digital Engineering</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-[10px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>ENTERPRISE READY</span>
          </div>
        </div>

        {/* ─── 3D Software Architecture Illustration Container ─── */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-bg-tint/40 to-white">
          <Image
            src="/hero-software-showcase.jpg"
            alt="Shree Hari Software Solution Architecture & Quality Engineering"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Ethereal Gradient Overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40 pointer-events-none" />

          {/* ─── Floating Feature Pill 1: Custom Web & Mobile ─── */}
          <motion.div 
            initial={{ opacity: 0, x: -15, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-border flex items-center gap-2.5 max-w-[210px]"
          >
            <div className="p-1.5 rounded-lg bg-primary-soft text-primary shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-ink leading-tight truncate">Custom Applications</div>
              <div className="text-[10px] text-ink-3 truncate">Web, Cloud & Mobile</div>
            </div>
          </motion.div>

          {/* ─── Floating Feature Pill 2: QA & Verification ─── */}
          <motion.div 
            initial={{ opacity: 0, x: 15, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-border flex items-center gap-2.5 max-w-[210px]"
          >
            <div className="p-1.5 rounded-lg bg-accent-soft text-accent shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-ink leading-tight truncate">Structured QA & SRS</div>
              <div className="text-[10px] text-ink-3 truncate">Zero Critical Defects</div>
            </div>
          </motion.div>

          {/* ─── Floating Feature Pill 3: Automation & DevOps ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-border flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="text-xs font-semibold text-ink">Reliable Delivery & Architecture</div>
                <div className="text-[11px] text-ink-3">End-to-end planning, testing, and cloud deployment</div>
              </div>
            </div>
            <span className="hidden sm:inline-block font-mono text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary-soft">
              100% QUALITY
            </span>
          </motion.div>
        </div>

        {/* ─── Card Footer: Technology Badges ─── */}
        <div className="px-4 py-3 bg-bg-soft/50 border-t border-border/70 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-ink font-semibold">Stack:</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-[11px]">Next.js</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-[11px]">Python</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-[11px]">AWS</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-[11px]">Automated QA</span>
          </div>
          <span className="text-[11px] text-accent font-semibold hidden sm:inline">
            ✔ Verified Delivery
          </span>
        </div>
      </motion.div>
    </div>
  );
}
