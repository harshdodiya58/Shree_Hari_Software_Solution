// ============================================================
// services.ts — Service definitions
// ============================================================

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // Lucide icon name
  items: string[];
  deliverables: string[];
  useCases: string[];
  faq: { question: string; answer: string }[];
}

export const services: ServiceItem[] = [
  {
    slug: 'qa-testing',
    title: 'QA & Software Testing',
    shortTitle: 'QA & Testing',
    description:
      'Structured testing that finds bugs before your users do. We cover manual, functional, regression, API, cross-browser and UAT testing with clear reports and actionable defect tracking.',
    icon: 'ShieldCheck',
    items: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'UI Testing',
      'Cross-Browser Testing',
      'API Testing',
      'User Acceptance Testing',
      'Test Case Creation',
      'Bug Tracking',
      'Test Documentation',
    ],
    deliverables: [
      'Test Plan',
      'Test Case Document',
      'Bug Reports with severity and steps',
      'Test Execution Summary',
      'QA Dashboard',
      'Regression Test Suite',
      'Final QA Sign-off Report',
    ],
    useCases: [
      'Pre-launch testing for a new web application',
      'Regression testing after a major feature release',
      'QA audit of an existing product before handoff',
      'Building a structured QA process from scratch',
      'Cross-browser compatibility verification',
    ],
    faq: [
      {
        question: 'What types of testing do you cover?',
        answer:
          'We cover manual, functional, regression, smoke, sanity, UI, cross-browser, API and user acceptance testing. We also create test documentation and set up bug tracking workflows.',
      },
      {
        question: 'Do you work with our existing tools?',
        answer:
          'Yes. We adapt to your project management and bug tracking tools. If you do not have a setup yet, we can recommend and configure one for you.',
      },
      {
        question: 'How do you report bugs?',
        answer:
          'Every bug report includes a unique ID, severity level, steps to reproduce, expected vs actual results, environment details and screenshots or recordings where helpful.',
      },
      {
        question: 'Can you test mobile applications?',
        answer:
          'Yes. We test responsive web applications across devices and browsers. For native mobile apps, we focus on functional and UI testing on specified devices.',
      },
    ],
  },
  {
    slug: 'documentation',
    title: 'Technical & Business Documentation',
    shortTitle: 'Documentation',
    description:
      'Clear, structured documentation that your team and clients can actually use. From business requirements to API references, we write documents that reduce confusion and save time.',
    icon: 'FileText',
    items: [
      'Business Requirements Document (BRD)',
      'Software Requirements Specification (SRS)',
      'API Documentation',
      'User Manuals',
      'Technical Documentation',
      'Standard Operating Procedures (SOPs)',
      'Test Documentation',
      'Process Documentation',
      'Knowledge Base',
    ],
    deliverables: [
      'Versioned documents with change tracking',
      'Table of Contents and cross-references',
      'Diagrams and flowcharts',
      'Review and approval workflows',
      'Searchable knowledge base',
      'Templates for future documents',
    ],
    useCases: [
      'Documenting an existing application for new developers',
      'Creating investor-ready product specifications',
      'Writing user manuals for a SaaS platform',
      'Building SOPs for internal processes',
      'API documentation for third-party integrations',
    ],
    faq: [
      {
        question: 'What document formats do you deliver?',
        answer:
          'We typically deliver in Markdown, Google Docs or PDF. For knowledge bases, we can set up tools like Notion, GitBook or Confluence. Format is always discussed during the discovery phase.',
      },
      {
        question: 'How do you handle document updates?',
        answer:
          'Every document includes version numbers and a change log. We can set up a review and approval process so updates are tracked and controlled.',
      },
      {
        question: 'Can you document an existing system without specifications?',
        answer:
          'Yes. We start with a discovery phase: reviewing the codebase, interviewing team members and mapping the system. The output is a structured document set that captures how the system actually works.',
      },
    ],
  },
  {
    slug: 'software-solutions',
    title: 'Custom Software Solutions',
    shortTitle: 'Software Solutions',
    description:
      'Practical software built around your actual workflow. We design and develop web applications, dashboards, admin panels, internal tools and API integrations that solve real problems.',
    icon: 'Code2',
    items: [
      'Custom Web Applications',
      'Business Dashboards',
      'Internal Tools',
      'Workflow Automation',
      'Admin Panels',
      'Data Management Systems',
      'API Integrations',
      'Business Process Digitization',
    ],
    deliverables: [
      'Working web application',
      'Source code with documentation',
      'Admin panel / dashboard',
      'API documentation',
      'Deployment setup',
      'Training and handover',
      'Post-launch support period',
    ],
    useCases: [
      'Replacing a spreadsheet-based process with a custom tool',
      'Building an internal dashboard for business metrics',
      'Creating an admin panel for content management',
      'Automating a manual reporting process',
      'Developing an API to connect two existing systems',
    ],
    faq: [
      {
        question: 'What technologies do you use?',
        answer:
          'We typically work with React, Next.js, Node.js, Python and modern cloud services. The specific stack depends on your project requirements and existing infrastructure.',
      },
      {
        question: 'Do you provide hosting and deployment?',
        answer:
          'Yes. We can deploy to cloud platforms like Google Cloud, AWS or Vercel and set up CI/CD pipelines for automated deployments.',
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'Small internal tools can take 2–4 weeks. Larger applications typically take 2–4 months. We provide a realistic timeline after the discovery and planning phase.',
      },
    ],
  },
  {
    slug: 'automation',
    title: 'Automation & Digital Process Improvement',
    shortTitle: 'Automation',
    description:
      'Turn manual, repetitive tasks into reliable automated workflows. We audit your processes, identify automation opportunities and build solutions that save your team time every week.',
    icon: 'Workflow',
    items: [
      'Process Audit & Analysis',
      'Workflow Automation',
      'Report Automation',
      'System Integrations',
      'Data Pipeline Automation',
      'Notification Systems',
      'Scheduled Task Automation',
    ],
    deliverables: [
      'Process audit report',
      'Automation recommendations',
      'Automated workflow implementation',
      'Integration setup and testing',
      'Documentation and training',
      'Monitoring and alerting setup',
    ],
    useCases: [
      'Automating weekly report generation from multiple data sources',
      'Connecting CRM, email and project management tools',
      'Setting up automated client onboarding workflows',
      'Reducing manual data entry between systems',
      'Creating automated quality check processes',
    ],
    faq: [
      {
        question: 'What kind of processes can you automate?',
        answer:
          'Any repetitive, rule-based task: report generation, data transfers between systems, notifications, onboarding workflows, scheduled tasks and quality checks.',
      },
      {
        question: 'Do you work with existing tools or build custom solutions?',
        answer:
          'Both. We can connect your existing tools through APIs and integrations, or build custom automation when off-the-shelf solutions do not fit your specific workflow.',
      },
    ],
  },
];

/** Get a service by slug */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
