// ============================================================
// process.ts — Eight-stage process definition
// ============================================================

export interface ProcessStage {
  number: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  goal: string;
  activities: string[];
  deliverables: string[];
  clientNeeds: string;
}

export const processStages: ProcessStage[] = [
  {
    number: '01',
    title: 'Discovery',
    icon: 'Search',
    description: 'We learn about your business, goals and the problem you need solved.',
    goal: 'Understand the project context and define what success looks like.',
    activities: [
      'Initial consultation call',
      'Business context review',
      'Stakeholder interviews',
      'Current system assessment',
      'Goal and constraint identification',
    ],
    deliverables: ['Discovery summary', 'Project brief'],
    clientNeeds: 'Time for a 30–60 minute call and access to relevant team members.',
  },
  {
    number: '02',
    title: 'Requirements',
    icon: 'ClipboardList',
    description: 'We document exactly what needs to be built, tested or improved.',
    goal: 'Create a clear, shared understanding of scope and expectations.',
    activities: [
      'Requirements gathering sessions',
      'User story mapping',
      'Acceptance criteria definition',
      'Technical feasibility analysis',
      'Requirement prioritization',
    ],
    deliverables: ['Requirements document (BRD/SRS)', 'User stories', 'Acceptance criteria'],
    clientNeeds: 'Feedback on requirements drafts within agreed review cycles.',
  },
  {
    number: '03',
    title: 'Planning',
    icon: 'LayoutDashboard',
    description: 'We create a realistic plan with timelines, milestones and responsibilities.',
    goal: 'Define the roadmap so everyone knows what happens when.',
    activities: [
      'Task breakdown and estimation',
      'Milestone definition',
      'Resource planning',
      'Risk identification',
      'Communication plan setup',
    ],
    deliverables: ['Project plan', 'Timeline with milestones', 'Communication schedule'],
    clientNeeds: 'Approval of the plan and designated point of contact.',
  },
  {
    number: '04',
    title: 'Build',
    icon: 'Hammer',
    description: 'We develop the solution, write the documentation or configure the automation.',
    goal: 'Deliver working output in iterative cycles with regular check-ins.',
    activities: [
      'Iterative development sprints',
      'Regular progress updates',
      'Code reviews and quality checks',
      'Intermediate demonstrations',
      'Documentation in parallel',
    ],
    deliverables: ['Working software / documents / automated workflows', 'Progress reports'],
    clientNeeds: 'Availability for weekly check-ins and timely feedback on demos.',
  },
  {
    number: '05',
    title: 'Test',
    icon: 'FlaskConical',
    description: 'We test every deliverable against requirements and quality standards.',
    goal: 'Identify and fix issues before anything reaches production.',
    activities: [
      'Test case execution',
      'Bug reporting and tracking',
      'Regression testing',
      'Cross-browser / cross-device checks',
      'Document review and accuracy checks',
    ],
    deliverables: ['Test results report', 'Bug report summaries', 'QA sign-off'],
    clientNeeds: 'Access to staging environments and time for user acceptance testing.',
  },
  {
    number: '06',
    title: 'Review',
    icon: 'Eye',
    description: 'We walk through everything together and incorporate your feedback.',
    goal: 'Ensure the output meets your expectations before we finalize.',
    activities: [
      'Client review sessions',
      'Feedback collection and triage',
      'Revision implementation',
      'Final quality check',
      'Stakeholder approval',
    ],
    deliverables: ['Revised deliverables', 'Feedback log', 'Approval confirmation'],
    clientNeeds: 'Consolidated feedback from your team within the review window.',
  },
  {
    number: '07',
    title: 'Deliver',
    icon: 'Rocket',
    description: 'We deploy, hand over and make sure everything is running smoothly.',
    goal: 'Get the solution live and your team confident in using it.',
    activities: [
      'Production deployment',
      'Final documentation handover',
      'Team training and walkthrough',
      'Post-launch verification',
      'Knowledge transfer',
    ],
    deliverables: ['Deployed solution', 'Complete documentation', 'Training materials'],
    clientNeeds: 'Access to production environment and team members for training.',
  },
  {
    number: '08',
    title: 'Support',
    icon: 'HeartHandshake',
    description: 'We stay available for fixes, updates and ongoing improvements.',
    goal: 'Provide reliable post-delivery support and plan for future iterations.',
    activities: [
      'Bug fixes and patches',
      'Performance monitoring',
      'Feature enhancement discussions',
      'Regular check-ins',
      'Documentation updates',
    ],
    deliverables: ['Support agreement', 'Issue tracking access', 'Improvement roadmap'],
    clientNeeds: 'Clear communication of any issues or change requests.',
  },
];
