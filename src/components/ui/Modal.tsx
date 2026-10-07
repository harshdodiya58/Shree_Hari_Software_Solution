'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

/* ─── Modal ──────────────────────────────────────────────── */

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/30 backdrop-blur-sm"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={cn(
          'bg-surface rounded-[16px] shadow-hover w-full max-w-lg max-h-[85vh] overflow-auto',
          'border border-border',
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="text-h3 text-ink">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-[8px] hover:bg-bg-soft transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-ink-3" />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

/* ─── Toast System ───────────────────────────────────────── */

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

const toastIcons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="w-5 h-5 text-accent" />,
  error: <AlertCircle className="w-5 h-5 text-danger" />,
  info: <Info className="w-5 h-5 text-primary" />,
};

const toastStyles: Record<ToastType, string> = {
  success: 'border-accent/30 bg-accent-soft/50',
  error: 'border-danger/30 bg-danger-soft/50',
  info: 'border-primary/30 bg-primary-soft/50',
};

// Toast context and provider
interface ToastContextValue {
  showToast: (type: ToastType, message: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm" role="region" aria-label="Notifications">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              'flex items-start gap-3 px-4 py-3 rounded-[12px] border backdrop-blur-md',
              'shadow-hover animate-in slide-in-from-right',
              'bg-surface/95',
              toastStyles[toast.type]
            )}
            role="alert"
          >
            {toastIcons[toast.type]}
            <p className="text-sm text-ink-2 flex-1">{toast.message}</p>
            <button
              onClick={() => dismissToast(toast.id)}
              className="p-1 rounded hover:bg-bg-soft transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4 text-ink-3" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
