// ============================================================
// pricing.ts — Pricing packages (configurable)
// ============================================================

import { siteConfig } from './site.config';

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string; // e.g. "From ₹25,000" or "Request quote"
  period?: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'qa-starter',
    title: 'QA Starter',
    subtitle: 'Small websites and MVPs',
    price: siteConfig.features.pricingVisible ? 'From [price]' : 'Request Quote',
    period: 'per project',
    description:
      'Essential QA testing for small projects. Covers functional testing, bug reporting and a final QA summary.',
    features: [
      { name: 'Functional Testing', included: true },
      { name: 'Bug Reports with Steps', included: true },
      { name: 'Test Case Document', included: true },
      { name: 'QA Summary Report', included: true },
      { name: 'Cross-Browser Testing', included: true },
      { name: 'Regression Testing', included: false },
      { name: 'API Testing', included: false },
      { name: 'Dedicated QA Dashboard', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact?package=qa-starter',
  },
  {
    id: 'qa-professional',
    title: 'QA Professional',
    subtitle: 'Production applications',
    price: siteConfig.features.pricingVisible ? 'From [price]' : 'Request Quote',
    period: 'per project',
    description:
      'Comprehensive QA for production applications. Includes regression testing, API testing, a QA dashboard and structured test documentation.',
    features: [
      { name: 'Everything in QA Starter', included: true },
      { name: 'Regression Testing', included: true },
      { name: 'API Testing', included: true },
      { name: 'Cross-Browser & Device Testing', included: true },
      { name: 'Dedicated QA Dashboard', included: true },
      { name: 'Test Documentation', included: true },
      { name: 'UAT Support', included: true },
      { name: 'Priority Bug Fixes Support', included: true },
    ],
    cta: 'Get Started',
    ctaHref: '/contact?package=qa-professional',
    highlighted: true,
  },
  {
    id: 'docs-starter',
    title: 'Documentation Starter',
    subtitle: 'Small software projects',
    price: siteConfig.features.pricingVisible ? 'From [price]' : 'Request Quote',
    period: 'per project',
    description:
      'Essential documentation for small projects. Covers requirements, basic technical docs and a user guide.',
    features: [
      { name: 'Requirements Document', included: true },
      { name: 'Technical Documentation', included: true },
      { name: 'User Guide', included: true },
      { name: 'Version Control Setup', included: true },
      { name: 'API Documentation', included: false },
      { name: 'SOP Templates', included: false },
      { name: 'Knowledge Base Setup', included: false },
      { name: 'Ongoing Updates', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact?package=docs-starter',
  },
  {
    id: 'docs-professional',
    title: 'Documentation Professional',
    subtitle: 'Complete systems',
    price: siteConfig.features.pricingVisible ? 'From [price]' : 'Request Quote',
    period: 'per project',
    description:
      'Full documentation suite for complex systems. Includes BRD, SRS, API docs, user manuals, SOPs and a searchable knowledge base.',
    features: [
      { name: 'Everything in Docs Starter', included: true },
      { name: 'BRD & SRS Documents', included: true },
      { name: 'API Documentation', included: true },
      { name: 'SOP Templates', included: true },
      { name: 'Knowledge Base Setup', included: true },
      { name: 'Review & Approval Workflow', included: true },
      { name: 'Diagram & Flowcharts', included: true },
      { name: 'Ongoing Update Support', included: true },
    ],
    cta: 'Get Started',
    ctaHref: '/contact?package=docs-professional',
    highlighted: true,
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    subtitle: 'Custom pricing',
    price: 'Custom Quote',
    description:
      'Tailored software development for your specific needs. Pricing depends on scope, complexity and timeline. We provide a detailed quote after the discovery phase.',
    features: [
      { name: 'Custom Web Application', included: true },
      { name: 'Business Dashboard', included: true },
      { name: 'Admin Panel', included: true },
      { name: 'API Integrations', included: true },
      { name: 'Deployment & CI/CD', included: true },
      { name: 'Documentation', included: true },
      { name: 'QA Testing', included: true },
      { name: 'Post-Launch Support', included: true },
    ],
    cta: 'Request Custom Quote',
    ctaHref: '/contact?package=software-solutions',
  },
];

export const pricingFaq = [
  {
    question: 'What affects the price of a project?',
    answer:
      'Project scope, complexity, number of features, integrations required, timeline urgency and ongoing support needs. We provide a detailed breakdown after the discovery phase.',
  },
  {
    question: 'Do you offer ongoing retainers?',
    answer:
      'Yes. For clients who need regular QA, documentation updates or development support, we offer monthly retainer agreements with prioritized response times.',
  },
  {
    question: 'Can I start small and scale up?',
    answer:
      'Absolutely. Many clients start with a single service like QA testing and expand to documentation and software solutions as their needs grow.',
  },
  {
    question: 'Is there a free consultation?',
    answer:
      'Yes. We offer a free project review where we discuss your needs, assess the scope and provide recommendations. No commitment required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers and digital payments. Payment terms are discussed and agreed upon before project kickoff.',
  },
];
