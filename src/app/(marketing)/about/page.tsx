import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/content/site.config';
import { Section, Container, Reveal, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { CheckCircle2 } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'About Us',
  description: `Why ${siteConfig.companyName} exists and what we believe about software.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-3xl">
              Software is too important to be built on guesswork.
            </h1>
            <p className="text-body text-ink-2 max-w-xl">
              We started {siteConfig.companyName} because we saw too many good ideas fail due to poor execution, missing documentation and a lack of structured testing.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* The Problem */}
            <div>
              <SectionHeader label="Origin" number="01" title="Why we started." />
              <div className="prose prose-ink max-w-none text-ink-2">
                <p>
                  In the rush to ship features, quality is often the first thing sacrificed. Startups and SMEs frequently build applications without formal requirements, test them by clicking around for five minutes, and launch hoping for the best.
                </p>
                <p>
                  The result? Buggy software, frustrated users, and a codebase that no one besides the original developer understands. When it's time to scale or hand over the project, everything grinds to a halt.
                </p>
                <p>
                  We believe there is a better way. Software development doesn't have to be chaotic. By introducing structured Quality Assurance, clear Documentation, and deliberate Engineering practices early on, teams can move fast without breaking things.
                </p>
              </div>
            </div>

            {/* Core Beliefs */}
            <div>
              <SectionHeader label="Principles" number="02" title="What we believe." />
              <div className="space-y-6">
                {[
                  {
                    title: 'Documentation is a feature.',
                    desc: 'Code tells a machine what to do. Documentation tells a human why it does it. Both are essential for long-term success.'
                  },
                  {
                    title: 'Testing must be structured.',
                    desc: 'Random clicking is not QA. Real quality comes from systematic test cases, edge-case analysis, and reproducible environments.'
                  },
                  {
                    title: 'Boring technology is better.',
                    desc: 'We prefer proven, reliable tools over the latest hype. Your business needs a stable foundation, not an experimental one.'
                  },
                  {
                    title: 'Transparency over promises.',
                    desc: 'If something will take four weeks, we say four weeks. If a feature is unnecessary, we will tell you. Honesty builds better software.'
                  }
                ].map((belief, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-bg-soft border border-border rounded-[16px]">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-ink mb-2">{belief.title}</h4>
                      <p className="text-ink-2">{belief.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Team / Approach */}
            <div>
              <SectionHeader label="Approach" number="03" title="How we operate." />
              <div className="prose prose-ink max-w-none text-ink-2">
                <p>
                  We are a focused team of QA engineers, technical writers, and software developers. We don't try to be a massive agency. We act as an extension of your existing team, stepping in where you have gaps.
                </p>
                <p>
                  Whether you need someone to thoroughly test an upcoming release, write the technical specifications for a new product, or build a custom internal tool—we bring structure, clarity, and reliability to the process.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      <CTASection 
        title="Ready to build better software?"
        description="Let's discuss how our QA, Documentation or Development services can help your team."
      />
    </>
  );
}
