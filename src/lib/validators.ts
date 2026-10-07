// ============================================================
// validators.ts — Shared Zod schemas for client + server
// ============================================================

import { z } from 'zod/v4';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your name (at least 2 characters).')
    .max(100),
  company: z.string().max(100).optional(),
  email: z
    .string()
    .email('Please enter a valid email, for example name@company.com.'),
  phone: z.string().max(20).optional(),
  projectType: z
    .enum([
      'QA & Testing',
      'Documentation',
      'Software Solutions',
      'Automation',
      'Multiple Services',
      'Not Sure Yet',
    ])
    .optional(),
  websiteUrl: z.url('Please enter a valid URL.').optional().or(z.literal('')),
  servicesRequired: z.array(z.string()).optional(),
  projectDescription: z
    .string()
    .min(20, 'Please describe your project in at least 20 characters.')
    .max(5000),
  timeline: z
    .enum(['ASAP', '1-2 weeks', '1 month', '2-3 months', '3+ months', 'Flexible'])
    .optional(),
  budgetRange: z
    .enum([
      'Under ₹50,000',
      '₹50,000 – ₹2,00,000',
      '₹2,00,000 – ₹5,00,000',
      '₹5,00,000+',
      'Not Sure',
    ])
    .optional(),
  privacyConsent: z.literal(true, {
    error: 'You must agree to the Privacy Policy.',
  }),
  // Honeypot — must remain empty
  _honey: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address.'),
  _honey: z.string().max(0).optional(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  rememberMe: z.boolean().optional(),
});

export type LoginData = z.infer<typeof loginSchema>;
