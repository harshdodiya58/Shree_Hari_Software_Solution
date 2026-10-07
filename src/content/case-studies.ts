// ============================================================
// case-studies.ts — Demo case studies (clearly labelled)
// ============================================================

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  isDemo: true; // Always true until real case studies exist
  industry: string;
  challenge: string;
  objective: string;
  approach: string[];
  solution: string;
  qaStrategy: string;
  documentation: string;
  technology: string[];
  outcome: string;
  lessonsLearned: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'qa-workflow-demo',
    title: 'QA Workflow Demo',
    category: 'QA & Testing',
    tags: ['Demo Case Study', 'QA', 'Testing'],
    year: '2026',
    isDemo: true,
    industry: 'Software / SaaS',
    challenge:
      'A growing web application had no structured QA process. Bugs were reported by users in production, and the team had no visibility into test coverage or defect trends.',
    objective:
      'Establish a repeatable QA workflow with clear test cases, structured bug reporting and a dashboard to track quality metrics across releases.',
    approach: [
      'Reviewed the existing application and identified critical user flows.',
      'Created a test case document covering functional, regression and cross-browser scenarios.',
      'Set up a bug tracking workflow with severity levels and resolution tracking.',
      'Built a QA dashboard showing pass rates, defect counts and test execution trends.',
      'Ran two full test cycles and documented results.',
    ],
    solution:
      'A structured QA process with documented test cases, a bug tracking workflow and a visual dashboard. The team now has a clear process for every release.',
    qaStrategy:
      'Functional testing of all user flows, regression testing for core features, cross-browser testing across Chrome, Firefox, Safari and Edge.',
    documentation:
      'Test Plan, Test Case Document (47 test cases), Bug Report Template, QA Process Guide.',
    technology: ['Structured test cases', 'Bug tracking workflow', 'QA dashboard', 'Cross-browser testing'],
    outcome:
      'The team now has a structured process for testing every release. Bugs are tracked with severity levels and clear steps to reproduce. Test coverage is visible through the dashboard.',
    lessonsLearned: [
      'Starting with critical user flows gives the most value quickly.',
      'Consistent bug report formatting saves time during triage.',
      'A visible dashboard creates accountability around quality.',
    ],
  },
  {
    slug: 'documentation-system-demo',
    title: 'Documentation System Demo',
    category: 'Documentation',
    tags: ['Demo Case Study', 'Documentation', 'BRD'],
    year: '2026',
    isDemo: true,
    industry: 'Business Services',
    challenge:
      'An application had no requirements document, no technical documentation and no user guide. New developers needed weeks to understand the system, and client onboarding was informal.',
    objective:
      'Create a complete documentation set covering business requirements, technical architecture, API references and a user guide, with version control and a review process.',
    approach: [
      'Conducted discovery interviews with the founder, lead developer and two clients.',
      'Mapped the application architecture by reviewing the codebase.',
      'Wrote a BRD capturing business goals, user personas and feature requirements.',
      'Created technical documentation with architecture diagrams and data flow charts.',
      'Built a user guide with step-by-step instructions and screenshots.',
      'Set up version control with a change log and review workflow.',
    ],
    solution:
      'A versioned documentation system including BRD, Technical Architecture Doc, API Reference and User Guide. All documents follow a consistent template with table of contents, metadata and review status.',
    qaStrategy:
      'Documents reviewed for accuracy against the live application. Technical details verified with the development team.',
    documentation:
      'Business Requirements Document, Technical Architecture Document, API Reference, User Guide, Document Templates.',
    technology: ['Structured documents', 'Version control', 'Review workflow', 'Architecture diagrams'],
    outcome:
      'Developer onboarding time was reduced through clear documentation. The client now has a professional document set that supports investor conversations and new hire training.',
    lessonsLearned: [
      'Discovery interviews reveal information that the codebase alone does not.',
      'Consistent templates make future documentation faster to produce.',
      'Version control prevents confusion about which document is current.',
    ],
  },
  {
    slug: 'business-dashboard-demo',
    title: 'Business Dashboard Demo',
    category: 'Software Solutions',
    tags: ['Demo Case Study', 'Dashboard', 'Custom Software'],
    year: '2026',
    isDemo: true,
    industry: 'Operations / Management',
    challenge:
      'A team managed project metrics across multiple spreadsheets. Generating a weekly status report took several hours of manual work every Friday.',
    objective:
      'Build a centralized dashboard that aggregates project data and generates status reports automatically.',
    approach: [
      'Mapped the existing spreadsheet workflows and identified data sources.',
      'Designed a dashboard interface showing project status, team workload and key metrics.',
      'Built a web application with role-based access and data filtering.',
      'Implemented automated report generation with configurable templates.',
      'Created documentation for the dashboard and trained the team.',
    ],
    solution:
      'A custom web dashboard that pulls data from existing sources and displays project metrics in real time. Weekly reports are generated automatically with one click.',
    qaStrategy:
      'Functional testing of all dashboard views, data accuracy verification, cross-browser testing, role-based access testing.',
    documentation:
      'Requirements Document, User Guide, Admin Manual, Data Dictionary.',
    technology: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Role-based access'],
    outcome:
      'Weekly report generation now takes minutes instead of hours. The team has a single source of truth for project metrics, and stakeholders can access dashboards directly.',
    lessonsLearned: [
      'Understanding the existing spreadsheet workflow prevents building features nobody needs.',
      'Automated reports need flexible templates to handle different audiences.',
      'Training is essential — a good tool is only useful if people know how to use it.',
    ],
  },
];

/** Get a case study by slug */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
