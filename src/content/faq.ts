// ============================================================
// faq.ts — FAQ groups with accessible deep-linkable items
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQGroup {
  title: string;
  slug: string;
  items: FAQItem[];
}

export const faqGroups: FAQGroup[] = [
  {
    title: 'QA & Testing',
    slug: 'qa',
    items: [
      {
        id: 'qa-1',
        question: 'What types of testing do you offer?',
        answer:
          'We offer manual, functional, regression, smoke, sanity, UI, cross-browser, API and user acceptance testing. We also create test cases, manage bug tracking and produce structured QA reports.',
      },
      {
        id: 'qa-2',
        question: 'How do you integrate with our existing development workflow?',
        answer:
          'We adapt to your tools and processes. Whether you use Jira, GitHub Issues, Linear or another tool, we fit into your existing setup. If you do not have a QA workflow yet, we help you set one up.',
      },
      {
        id: 'qa-3',
        question: 'What does a typical bug report include?',
        answer:
          'Every bug report includes: unique ID, title, severity level, steps to reproduce, expected result, actual result, environment details (browser, OS, device) and screenshots or recordings when helpful.',
      },
    ],
  },
  {
    title: 'Documentation',
    slug: 'documentation',
    items: [
      {
        id: 'docs-1',
        question: 'What types of documents do you create?',
        answer:
          'We create BRDs, SRS documents, API documentation, user manuals, technical documentation, SOPs, test documentation, process documentation and knowledge bases.',
      },
      {
        id: 'docs-2',
        question: 'Can you document an existing system that has no specifications?',
        answer:
          'Yes. We start with a discovery phase where we review the codebase, interview team members and map the system. The result is a structured document set that captures how the system actually works today.',
      },
      {
        id: 'docs-3',
        question: 'How do you handle document versions and updates?',
        answer:
          'Every document includes version numbers and a change log. We track changes between versions and can set up review and approval workflows for your team.',
      },
    ],
  },
  {
    title: 'Software Development',
    slug: 'software',
    items: [
      {
        id: 'sw-1',
        question: 'What technologies do you use?',
        answer:
          'We typically work with React, Next.js, Node.js, Python, PostgreSQL and modern cloud platforms. The specific stack depends on your project requirements and existing infrastructure.',
      },
      {
        id: 'sw-2',
        question: 'Do you build mobile applications?',
        answer:
          'We focus on web applications, progressive web apps and responsive interfaces. For native mobile development, we can recommend trusted partners or discuss cross-platform options.',
      },
      {
        id: 'sw-3',
        question: 'How long does a custom project typically take?',
        answer:
          'Small internal tools and dashboards can take 2–4 weeks. Larger applications typically take 2–4 months. We provide a realistic timeline after the discovery and planning phases.',
      },
    ],
  },
  {
    title: 'Pricing & Billing',
    slug: 'pricing',
    items: [
      {
        id: 'price-1',
        question: 'How do you determine project pricing?',
        answer:
          'Pricing depends on project scope, complexity, timeline and support needs. After a free consultation, we provide a detailed quote with a clear breakdown of costs.',
      },
      {
        id: 'price-2',
        question: 'Do you offer payment plans?',
        answer:
          'For larger projects, we typically structure payments in milestones: an initial payment to begin, progress payments at key milestones and a final payment on delivery.',
      },
      {
        id: 'price-3',
        question: 'Is there a minimum project size?',
        answer:
          'We work on projects of all sizes, from small QA audits to large software builds. Our starter packages are designed specifically for smaller projects.',
      },
    ],
  },
  {
    title: 'Process & Workflow',
    slug: 'process',
    items: [
      {
        id: 'proc-1',
        question: 'What does your typical project process look like?',
        answer:
          'Our process has eight stages: Discovery, Requirements, Planning, Build, Test, Review, Deliver and Support. Each stage has clear deliverables and check-ins so you always know where things stand.',
      },
      {
        id: 'proc-2',
        question: 'How often will we communicate during a project?',
        answer:
          'We set up a communication schedule during planning. Typically this includes weekly progress updates, milestone reviews and an open channel for questions. Frequency adjusts based on project needs.',
      },
      {
        id: 'proc-3',
        question: 'What do you need from us to get started?',
        answer:
          'A brief description of your project, access to relevant team members for a discovery call and any existing documentation, designs or specifications you have. We guide you through the rest.',
      },
    ],
  },
  {
    title: 'Support & Maintenance',
    slug: 'support',
    items: [
      {
        id: 'sup-1',
        question: 'What kind of post-delivery support do you offer?',
        answer:
          'Every project includes a support period after delivery for bug fixes and minor adjustments. We also offer ongoing retainer agreements for teams that need regular support.',
      },
      {
        id: 'sup-2',
        question: 'Can you maintain software built by another team?',
        answer:
          'Yes, if the codebase is reasonably structured. We start with a review phase to understand the system, then take over maintenance, testing and documentation.',
      },
      {
        id: 'sup-3',
        question: 'How do you handle urgent bug fixes?',
        answer:
          'Clients on a support agreement get priority response for urgent issues. We triage based on severity: critical production issues are addressed within hours, lower severity items within the agreed timeframe.',
      },
    ],
  },
];

/** Get all FAQ items flattened for schema generation */
export function getAllFaqItems(): { question: string; answer: string }[] {
  return faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );
}
