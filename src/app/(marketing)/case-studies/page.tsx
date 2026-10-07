import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { caseStudies } from '@/content/case-studies';
import { Section, Container, Reveal, SectionHeader } from '@/components/ui';
import { CaseStudyRow, CTASection } from '@/components/sections';
import { BugReportPreview, DocumentPreview, ArchitecturePreview } from '@/components/previews';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Real examples of how we improve software quality, documentation and processes.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              Proof of Process.
            </h1>
            <p className="text-body text-ink-2 max-w-xl">
              See how our structured approach to QA, documentation and development solves real problems for our clients.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white" className="pt-8">
        <div className="border-t border-border">
          {caseStudies.map((cs, i) => {
            let preview = null;
            if (cs.slug === 'qa-workflow-demo') preview = <BugReportPreview />;
            if (cs.slug === 'documentation-system-demo') preview = <DocumentPreview />;
            if (cs.slug === 'api-integration-demo') preview = <ArchitecturePreview />;

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
      </Section>

      <CTASection />
    </>
  );
}
