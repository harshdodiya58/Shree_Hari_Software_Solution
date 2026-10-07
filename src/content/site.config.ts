// ============================================================
// site.config.ts — Single source of truth for all site content
// Change brand name, contact info, or features here and the
// entire site updates automatically.
// ============================================================

export const siteConfig = {
  // Brand
  companyName: 'Shree Hari Software Solution',
  shortName: 'SHSS',
  tagline: 'Build Better Software. Ship With Confidence.',
  description:
    'One partner for software quality, documentation and digital solutions. We help startups, SMEs and agencies ship reliable software through structured QA, clear documentation and practical custom solutions.',
  domain: 'https://shreeharisoftware.com',
  logo: {
    full: '/logo-full.svg',
    icon: '/logo-icon.svg',
    singleColor: '/logo-mono.svg',
  },

  // Contact (placeholders until real data exists)
  contact: {
    email: 'hello@shreeharisoftware.com',
    phone: '+91 000 000 0000',
    address: '[City, State, India]',
    hours: 'Mon – Fri, 10:00 AM – 7:00 PM IST',
    timezone: 'Asia/Kolkata',
    responseTime: '2 business days',
  },

  // Social links
  social: {
    linkedin: 'https://linkedin.com/company/shreeharisoftware',
    twitter: 'https://twitter.com/shreehariss',
    github: 'https://github.com/shreeharisoftware',
  },

  // Legal
  legal: {
    jurisdiction: '[India]',
    registrationNote:
      'Review with a qualified lawyer before launch.',
  },

  // Feature flags
  features: {
    portalEnabled: false,
    blogEnabled: true,
    pricingVisible: true,
    newsletterEnabled: true,
    cookieBanner: true,
    pageLoader: false,
  },

  // Navigation
  nav: {
    primary: [
      {
        label: 'Services',
        href: '/services',
        children: [
          { label: 'QA & Testing', href: '/services/qa-testing' },
          { label: 'Documentation', href: '/services/documentation' },
          { label: 'Software Solutions', href: '/services/software-solutions' },
          { label: 'Automation', href: '/services/automation' },
        ],
      },
      {
        label: 'Solutions',
        href: '/solutions',
        children: [
          { label: 'Startups', href: '/solutions/startups' },
          { label: 'SMEs', href: '/solutions/smes' },
          { label: 'Software Companies', href: '/solutions/software-companies' },
          { label: 'Agencies', href: '/solutions/agencies' },
          { label: 'Internal Teams', href: '/solutions/internal-teams' },
        ],
      },
      { label: 'Process', href: '/process' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Resources', href: '/resources' },
    ],
    cta: { label: 'Get Started', href: '/contact' },
    login: { label: 'Client Login', href: '/login' },
  },

  // Footer columns
  footer: {
    description:
      'Structured QA, clear documentation and custom software solutions for teams that care about quality.',
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'QA & Testing', href: '/services/qa-testing' },
          { label: 'Documentation', href: '/services/documentation' },
          { label: 'Software Solutions', href: '/services/software-solutions' },
          { label: 'Automation', href: '/services/automation' },
        ],
      },
      {
        title: 'Solutions',
        links: [
          { label: 'Startups', href: '/solutions/startups' },
          { label: 'SMEs', href: '/solutions/smes' },
          { label: 'Software Companies', href: '/solutions/software-companies' },
          { label: 'Agencies', href: '/solutions/agencies' },
          { label: 'Internal Teams', href: '/solutions/internal-teams' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Process', href: '/process' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Articles', href: '/resources' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms & Conditions', href: '/terms' },
          { label: 'Cookie Policy', href: '/cookies' },
        ],
      },
    ],
  },

  // Year
  year: 2026,
} as const;

export type SiteConfig = typeof siteConfig;
