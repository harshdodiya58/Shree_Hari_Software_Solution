// ============================================================
// solutions.ts — Audience-specific solution pages
// ============================================================

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  problems: { title: string; description: string }[];
  recommendations: {
    service: string;
    serviceSlug: string;
    description: string;
  }[];
  suggestedPackage: string;
}

export const solutions: Solution[] = [
  {
    slug: 'startups',
    title: 'For Startups',
    subtitle: 'Ship your MVP without bugs and impress investors with clear documentation.',
    description:
      'Startups move fast, but shipping broken software or missing documentation slows everything down. We help you build a quality foundation from day one.',
    icon: 'Rocket',
    problems: [
      {
        title: 'Bugs in production',
        description: 'Users find issues before your team does, damaging trust and increasing churn.',
      },
      {
        title: 'No documentation',
        description: 'New hires, investors and partners cannot understand your product without clear docs.',
      },
      {
        title: 'No QA process',
        description: 'Testing happens informally or not at all, leading to unpredictable releases.',
      },
      {
        title: 'Technical debt',
        description: 'Moving fast without structure creates problems that compound over time.',
      },
    ],
    recommendations: [
      {
        service: 'QA & Testing',
        serviceSlug: '/services/qa-testing',
        description: 'Structured testing before every release to catch bugs early.',
      },
      {
        service: 'Documentation',
        serviceSlug: '/services/documentation',
        description: 'Clear product docs for investors, new hires and your own team.',
      },
      {
        service: 'Software Solutions',
        serviceSlug: '/services/software-solutions',
        description: 'Well-built internal tools and dashboards when you need custom software.',
      },
    ],
    suggestedPackage: 'QA Starter + Documentation Starter',
  },
  {
    slug: 'smes',
    title: 'For SMEs',
    subtitle: 'Replace manual processes with practical, reliable digital tools.',
    description:
      'Small and medium enterprises often rely on spreadsheets, emails and manual processes. We help you digitize operations without disrupting your workflow.',
    icon: 'Building2',
    problems: [
      {
        title: 'Manual data entry',
        description: 'Staff spend hours on repetitive tasks that could be automated.',
      },
      {
        title: 'Scattered information',
        description: 'Important data lives in spreadsheets, emails and notebooks instead of a central system.',
      },
      {
        title: 'No visibility',
        description: 'Business metrics require manual collection and assembly.',
      },
      {
        title: 'Process inconsistency',
        description: 'Different team members follow different steps for the same process.',
      },
    ],
    recommendations: [
      {
        service: 'Automation',
        serviceSlug: '/services/automation',
        description: 'Automate repetitive tasks and connect your existing tools.',
      },
      {
        service: 'Software Solutions',
        serviceSlug: '/services/software-solutions',
        description: 'Custom dashboards and tools built around your actual workflow.',
      },
      {
        service: 'Documentation',
        serviceSlug: '/services/documentation',
        description: 'SOPs and process docs to standardize operations.',
      },
    ],
    suggestedPackage: 'Software Solutions (Custom)',
  },
  {
    slug: 'software-companies',
    title: 'For Software Companies',
    subtitle: 'Outsource QA and documentation so your team can focus on building.',
    description:
      'Software companies and development teams often lack dedicated QA or documentation resources. We fill that gap with structured, reliable services.',
    icon: 'Code2',
    problems: [
      {
        title: 'Developer time on testing',
        description: 'Your engineers spend time testing instead of building new features.',
      },
      {
        title: 'Outdated documentation',
        description: 'Docs fall behind because nobody has time to keep them current.',
      },
      {
        title: 'Release anxiety',
        description: 'Every deployment feels risky without thorough testing.',
      },
      {
        title: 'Client-facing quality issues',
        description: 'Bugs in production affect client relationships and SLAs.',
      },
    ],
    recommendations: [
      {
        service: 'QA & Testing',
        serviceSlug: '/services/qa-testing',
        description: 'Dedicated QA resources integrated with your development workflow.',
      },
      {
        service: 'Documentation',
        serviceSlug: '/services/documentation',
        description: 'API docs, technical references and user guides kept up to date.',
      },
    ],
    suggestedPackage: 'QA Professional + Documentation Professional',
  },
  {
    slug: 'agencies',
    title: 'For Agencies',
    subtitle: 'Deliver higher-quality projects to your clients without expanding your team.',
    description:
      'Agencies manage multiple client projects simultaneously. We provide QA, documentation and development support that scales with your workload.',
    icon: 'Users',
    problems: [
      {
        title: 'Inconsistent quality',
        description: 'Quality varies between projects depending on team availability.',
      },
      {
        title: 'No documentation handoff',
        description: 'Clients receive working software but no documentation for maintenance.',
      },
      {
        title: 'Scaling bottleneck',
        description: 'Taking on more projects means stretching your team thinner.',
      },
      {
        title: 'Post-launch issues',
        description: 'Bugs surface after handoff because testing was rushed.',
      },
    ],
    recommendations: [
      {
        service: 'QA & Testing',
        serviceSlug: '/services/qa-testing',
        description: 'White-label QA services for your client projects.',
      },
      {
        service: 'Documentation',
        serviceSlug: '/services/documentation',
        description: 'Professional documentation delivered with every project.',
      },
      {
        service: 'Software Solutions',
        serviceSlug: '/services/software-solutions',
        description: 'Additional development capacity when you need it.',
      },
    ],
    suggestedPackage: 'QA Professional + Documentation Starter',
  },
  {
    slug: 'internal-teams',
    title: 'For Internal Business Teams',
    subtitle: 'Document your processes and automate your reports.',
    description:
      'Internal teams in larger organizations often handle complex processes without proper documentation or tools. We help you create clarity and efficiency.',
    icon: 'Building',
    problems: [
      {
        title: 'Tribal knowledge',
        description: 'Critical processes exist only in people\'s heads.',
      },
      {
        title: 'Manual reporting',
        description: 'Weekly reports require hours of manual data collection.',
      },
      {
        title: 'Onboarding difficulty',
        description: 'New team members take months to get up to speed.',
      },
      {
        title: 'No process standards',
        description: 'Each team or department has its own way of doing things.',
      },
    ],
    recommendations: [
      {
        service: 'Documentation',
        serviceSlug: '/services/documentation',
        description: 'SOPs, process docs and knowledge bases for your team.',
      },
      {
        service: 'Automation',
        serviceSlug: '/services/automation',
        description: 'Automated reports and streamlined workflows.',
      },
    ],
    suggestedPackage: 'Documentation Professional',
  },
];

/** Get a solution by slug */
export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
