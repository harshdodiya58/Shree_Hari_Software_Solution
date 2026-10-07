import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { solutions } from '@/content/solutions';
import { Section, Container, Reveal, Button, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections';
import * as Icons from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Solutions by Audience',
  description: 'Tailored software quality and development solutions for startups, SMEs, agencies and internal teams.',
  path: '/solutions',
});

export default function SolutionsOverviewPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              Solutions Built for Your Stage.
            </h1>
            <p className="text-body text-ink-2 max-w-xl">
              Every business faces different challenges with software. We tailor our QA, documentation and development services to fit your specific needs.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          {solutions.map((solution, i) => {
            const Icon = (Icons as any)[solution.icon] || Icons.Circle;
            
            return (
              <div 
                key={solution.slug}
                className="group relative bg-surface border border-border rounded-[24px] p-8 sm:p-10 mb-8 shadow-rest hover:shadow-hover hover:border-primary-soft transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-h3 text-ink group-hover:text-primary transition-colors">{solution.title}</h2>
                    </div>
                    <p className="text-body text-ink-2 mb-6 max-w-xl">
                      {solution.subtitle}
                    </p>
                    <Button href={`/solutions/${solution.slug}`} variant="outline" size="sm" arrow>
                      View Solution
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
