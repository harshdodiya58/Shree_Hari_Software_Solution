import React from 'react';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/content/site.config';
import { caseStudies } from '@/content/case-studies';
import { 
  Section, 
  Container, 
  Reveal, 
  Button, 
  SectionHeader, 
  Badge,
  Marquee
} from '@/components/ui';
import { 
  CTASection, 
  CaseStudyRow, 
  ProcessTimeline, 
  CapabilityTile 
} from '@/components/sections';
import { 
  DashboardPreview, 
  BugReportPreview, 
  TestCasePreview, 
  DocumentPreview 
} from '@/components/previews';
import { 
  ShieldCheck, 
  FileText, 
  Code2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { QualitySystemClient } from './QualitySystemClient';

export const metadata = buildMetadata({
  title: 'Home',
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* ─── 1. Hero ────────────────────────────────────────── */}
      <Section bg="white" className="pt-8 lg:pt-14 pb-16 lg:pb-20 overflow-hidden relative">
        {/* Soft Corporate Background Gradients & Grid */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-[90px]" />

          {/* Clean Enterprise Grid Lines (like Kyndryl & Softfix) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_60%,transparent_100%)] opacity-35" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left: Copy & Value Proposition */}
          <div className="lg:col-span-6 relative z-10 flex flex-col items-start">
            <Reveal direction="down" duration={0.6}>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 text-xs font-semibold text-primary mb-5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Custom Software Solutions & QA Engineering</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-ink mb-4 tracking-tight leading-[1.2]">
                Build Better Software.<br/>
                <span className="text-primary">
                  Ship With Confidence.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-ink-2 mb-8 max-w-xl leading-relaxed">
                {siteConfig.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <Button href="/contact" variant="primary" size="lg" arrow className="w-full sm:w-auto shadow-sm hover:shadow-md transition-all">
                  Get a Free Project Review
                </Button>
                <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto bg-surface hover:border-primary/50 transition-all">
                  Explore Services
                </Button>
              </div>

              {/* Verified Quality Proof Points */}
              <div className="pt-6 border-t border-border/80 flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-ink-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-ink font-semibold">Structured QA</span>
                  <span>Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-ink font-semibold">Clear Docs</span>
                  <span>SRS & APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-ink font-semibold">24h Quote</span>
                  <span>Turnaround</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Next-Gen Interactive 3D Showcase Card */}
          <div className="lg:col-span-6 relative z-10 w-full flex items-center justify-center lg:justify-end">
            <DashboardPreview />
          </div>
        </div>
      </Section>

      {/* ─── 2. Trust Statement + Marquee ──────────────────────── */}
      <div className="bg-bg-soft pt-12 pb-8 border-t border-border">
        <Container>
          <p className="text-center text-lg lg:text-xl font-medium text-ink-2 mb-8 max-w-2xl mx-auto">
            One partner for software quality, documentation and digital solutions.
          </p>
        </Container>
        <Marquee items={['QA', 'Documentation', 'APIs', 'Automation', 'Dashboards', 'SRS', 'UAT']} />
      </div>

      {/* ─── 3. Services ───────────────────────────────────────── */}
      <Section bg="white" id="services">
        <SectionHeader
          label="Services"
          number="01"
          title="Everything You Need to Build Better Software"
          description="We provide the testing, documentation and custom solutions required to launch reliable products."
          align="center"
        />
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* QA Block (Wider) */}
          <div className="lg:col-span-2 bg-bg-soft rounded-[24px] border border-border p-8 sm:p-10 flex flex-col md:flex-row gap-8 justify-between group hover:border-primary-soft transition-colors">
            <div className="flex-1">
              <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h3 text-ink mb-4">QA & Testing</h3>
              <p className="text-body text-ink-2 mb-6">
                Structured testing that finds bugs before your users do. Clear reports, actionable defect tracking and full coverage.
              </p>
              <ul className="space-y-3 mb-8">
                {['Manual & Functional Testing', 'Regression & API Testing', 'Test Case Documentation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/services/qa-testing" variant="outline" size="sm" arrow>Explore QA Services</Button>
            </div>
            <div className="flex-1 relative min-h-[240px] md:min-h-0 bg-surface rounded-[16px] border border-border overflow-hidden">
               {/* Mini visual for QA */}
               <div className="absolute inset-4 overflow-hidden pointer-events-none scale-75 origin-top-left md:scale-90 lg:scale-100">
                  <TestCasePreview />
               </div>
            </div>
          </div>

          {/* Docs Block */}
          <div className="bg-bg-soft rounded-[24px] border border-border p-8 sm:p-10 flex flex-col group hover:border-primary-soft transition-colors">
            <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-h3 text-ink mb-4">Documentation</h3>
            <p className="text-body text-ink-2 mb-6">
              Clear, structured documentation that your team and clients can actually use.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {['BRD & SRS Documents', 'API References', 'User Manuals & SOPs'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-ink-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/services/documentation" variant="outline" size="sm" arrow className="w-fit">Explore Documentation</Button>
          </div>

          {/* Software Block */}
          <div className="lg:col-span-3 bg-bg-soft rounded-[24px] border border-border p-8 sm:p-10 flex flex-col md:flex-row-reverse gap-8 justify-between group hover:border-primary-soft transition-colors">
            <div className="flex-1">
              <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h3 text-ink mb-4">Custom Software Solutions</h3>
              <p className="text-body text-ink-2 mb-6">
                Practical software built around your actual workflow. Web apps, dashboards, and API integrations.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Business Dashboards', 'Internal Tools', 'API Integrations', 'Workflow Automation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/services/software-solutions" variant="outline" size="sm" arrow>Explore Software Solutions</Button>
            </div>
            
            {/* Mini visual for Software (Node Diagram) */}
            <div className="flex-1 relative min-h-[200px] md:min-h-0 flex items-center justify-center p-8 bg-surface rounded-[16px] border border-border">
              <div className="flex items-center justify-center gap-4 text-ink-3">
                 <div className="p-4 border border-border-strong rounded-xl bg-bg shadow-sm">Client</div>
                 <div className="h-px w-8 bg-primary"></div>
                 <div className="p-4 border-2 border-primary rounded-xl bg-primary-soft text-primary font-medium">API</div>
                 <div className="h-px w-8 bg-primary"></div>
                 <div className="p-4 border border-border-strong rounded-xl bg-bg shadow-sm">DB</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 4. Problem ────────────────────────────────────────── */}
      <Section bg="soft">
        <SectionHeader
          label="The real challenge"
          number="02"
          title="Software Problems Don't Always Look Like Software Problems."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {[
            { title: 'Bugs reaching production', desc: 'Users find issues before your team does, damaging trust and increasing churn.' },
            { title: 'Unclear requirements', desc: 'Developers build the wrong thing because expectations were never documented.' },
            { title: 'Missing documentation', desc: 'New hires, investors and partners cannot understand your product without asking questions.' },
            { title: 'Manual repetitive processes', desc: 'Staff spend hours on tasks that should take seconds, limiting your capacity to scale.' },
          ].map((prob, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-ink mb-2">{prob.title}</h4>
                <p className="text-body text-ink-2">{prob.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface border border-border rounded-[24px] p-8 md:p-12 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 -z-10" />
           <h3 className="text-xl md:text-2xl font-semibold text-ink mb-8 relative z-10">
             We solve the gaps between idea, development and delivery.
           </h3>
           
           {/* Illustration of Idea -> Development -> Delivery */}
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-2xl mx-auto relative z-10">
             <div className="px-6 py-3 bg-bg border border-border rounded-full text-sm font-medium text-ink-2">Idea</div>
             <div className="hidden md:block h-px w-16 bg-border" />
             <div className="md:hidden w-px h-8 bg-border" />
             
             <div className="px-6 py-3 bg-bg border border-border rounded-full text-sm font-medium text-ink-2 relative">
               Development
               {/* Check node bridging the gap */}
               <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-surface shadow-sm">
                 <CheckCircle2 className="w-3.5 h-3.5 text-white" />
               </div>
             </div>
             
             <div className="hidden md:block h-px w-16 bg-border" />
             <div className="md:hidden w-px h-8 bg-border" />
             <div className="px-6 py-3 bg-bg border border-border rounded-full text-sm font-medium text-ink-2">Delivery</div>
           </div>
        </div>
      </Section>

      {/* ─── 5. Quality System ─────────────────────────────────── */}
      <Section bg="white">
        <SectionHeader
          label="Quality system"
          number="03"
          title="A systematic approach to software."
        />
        <QualitySystemClient />
      </Section>

      {/* ─── 6. Why Us ─────────────────────────────────────────── */}
      <Section bg="tint">
        <SectionHeader
          label="Why us"
          number="04"
          title="Built Around Quality, Not Just Delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {[
            { title: 'Clear Communication', desc: 'We speak plain English, not just technical jargon.' },
            { title: 'Structured QA', desc: 'Testing is a deliberate process with evidence, not guesswork.' },
            { title: 'Reliable Documentation', desc: 'Documents that reflect reality and actually help your team.' },
            { title: 'Practical Solutions', desc: 'We build what you need to solve the problem, nothing more.' },
            { title: 'Transparent Process', desc: 'You always know what we are doing, why, and what it costs.' },
            { title: 'Long-Term Support', desc: 'We stand by our work and stay available after launch.' },
          ].map((benefit, i) => (
            <div key={i} className="pt-6 border-t border-primary/20 relative">
              <span className="absolute -top-3 left-0 bg-bg-tint px-2 font-mono text-sm text-primary">0{i + 1}</span>
              <h4 className="text-lg font-semibold text-ink mb-2">{benefit.title}</h4>
              <p className="text-body text-ink-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 7. Process ────────────────────────────────────────── */}
      <Section bg="white" className="pb-0 lg:pb-0 overflow-hidden">
        <SectionHeader
          label="Process"
          number="05"
          title="How We Work."
        />
        <div className="-mx-6 lg:mx-0">
          <ProcessTimeline />
        </div>
      </Section>

      {/* ─── 8. Case Studies ───────────────────────────────────── */}
      <Section bg="white" className="pt-16 lg:pt-24 border-t border-border mt-16 lg:mt-24">
        <SectionHeader
          label="Selected work"
          number="06"
          title="Proof of Process."
          description="Examples of how we apply structured quality, clear documentation and practical development."
        />
        
        <div className="border-t border-border mt-12">
          {caseStudies.map((cs, i) => {
            // Assign a preview based on the slug to demonstrate hover effects
            let preview = null;
            if (cs.slug === 'qa-workflow-demo') preview = <BugReportPreview />;
            if (cs.slug === 'documentation-system-demo') preview = <DocumentPreview />;
            
            return (
              <CaseStudyRow
                key={cs.slug}
                number={`0${i + 1}`}
                title={cs.title}
                category={cs.category}
                year={cs.year}
                slug={cs.slug}
                isDemo={cs.isDemo}
                previewNode={preview}
              />
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/case-studies" variant="outline" arrow>View All Case Studies</Button>
        </div>
      </Section>

      {/* ─── 9. Capabilities ───────────────────────────────────── */}
      <Section bg="soft">
        <SectionHeader
          label="Capabilities"
          number="07"
          title="Everything required to ship."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <CapabilityTile
            label="QA"
            title="Structured Testing"
            description="Manual, functional, regression and API testing with comprehensive defect tracking."
            href="/services/qa-testing"
          />
          <CapabilityTile
            label="DOCS"
            title="Clear Documentation"
            description="Business requirements, technical specifications and user manuals."
            href="/services/documentation"
          />
          <CapabilityTile
            label="SOFTWARE"
            title="Custom Solutions"
            description="Web applications, business dashboards and reliable API integrations."
            href="/services/software-solutions"
          />
          <CapabilityTile
            label="SUPPORT"
            title="Long-Term Partnership"
            description="Ongoing maintenance, process improvement and automation."
            href="/services/automation"
          />
        </div>
      </Section>

      {/* ─── 10. CTA Band ──────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
