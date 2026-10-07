'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validators';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      projectType: 'Not Sure Yet',
      privacyConsent: true,
    },
  });

  // Pre-fill based on URL params (e.g. ?package=QA+Starter)
  useEffect(() => {
    const pkg = searchParams.get('package');
    if (pkg) {
      setValue('projectType', 'QA & Testing'); // Simplification for now
      setValue('projectDescription', `I am interested in the ${pkg} package. Please provide more details.`);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    
    // Simulate API call since backend isn't ready
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      trackEvent({ name: 'form_submit', properties: { formId: 'contact' } });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-surface border border-primary/20 rounded-[16px] p-8 md:p-12 text-center shadow-rest">
        <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-ink mb-4">Message Received</h3>
        <p className="text-ink-2">
          Thank you for reaching out. We usually review new inquiries within 24 hours and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface border border-border rounded-[24px] p-6 md:p-10 shadow-rest">
      {/* Honeypot */}
      <input type="text" {...register('_honey')} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-ink">Full Name <span className="text-danger">*</span></label>
          <input
            {...register('name')}
            id="name"
            className={cn(
              "w-full px-4 py-3 bg-bg-soft border rounded-[12px] text-ink text-sm outline-none transition-colors",
              errors.name ? "border-danger focus:border-danger" : "border-border focus:border-primary"
            )}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-xs text-danger flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-ink">Work Email <span className="text-danger">*</span></label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className={cn(
              "w-full px-4 py-3 bg-bg-soft border rounded-[12px] text-ink text-sm outline-none transition-colors",
              errors.email ? "border-danger focus:border-danger" : "border-border focus:border-primary"
            )}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-xs text-danger flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-ink">Company (Optional)</label>
          <input
            {...register('company')}
            id="company"
            className="w-full px-4 py-3 bg-bg-soft border border-border focus:border-primary rounded-[12px] text-ink text-sm outline-none transition-colors"
            placeholder="Acme Corp"
          />
        </div>

        {/* Inquiry Type */}
        <div className="space-y-2">
          <label htmlFor="projectType" className="block text-sm font-medium text-ink">What is this regarding?</label>
          <select
            {...register('projectType')}
            id="projectType"
            className="w-full px-4 py-3 bg-bg-soft border border-border focus:border-primary rounded-[12px] text-ink text-sm outline-none transition-colors appearance-none"
          >
            <option value="QA & Testing">QA & Testing</option>
            <option value="Documentation">Documentation</option>
            <option value="Software Solutions">Software Solutions</option>
            <option value="Automation">Automation</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="projectDescription" className="block text-sm font-medium text-ink">Message <span className="text-danger">*</span></label>
        <textarea
          {...register('projectDescription')}
          id="projectDescription"
          rows={5}
          className={cn(
            "w-full px-4 py-3 bg-bg-soft border rounded-[12px] text-ink text-sm outline-none transition-colors resize-none",
            errors.projectDescription ? "border-danger focus:border-danger" : "border-border focus:border-primary"
          )}
          placeholder="Tell us about your project..."
        />
        {errors.projectDescription && <p className="text-xs text-danger flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.projectDescription.message}</p>}
      </div>

      {status === 'error' && (
        <div className="p-4 bg-danger-soft border border-danger/20 rounded-[12px] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-danger mb-1">Submission Failed</h4>
            <p className="text-xs text-danger-700">Something went wrong. Please try again or email us directly.</p>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          "w-full px-6 py-4 bg-primary text-white font-semibold rounded-[12px] transition-all",
          "hover:bg-primary-hover active:scale-[0.98]",
          "disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
        )}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
      
      <p className="text-center text-xs text-ink-3">
        By submitting this form, you agree to our Privacy Policy.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="w-full h-[500px] bg-surface border border-border rounded-[24px] animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  );
}
