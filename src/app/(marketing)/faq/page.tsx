import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { faqGroups } from '@/content/faq';
import { Section, Container, Reveal, SectionHeader, FAQAccordion, Button } from '@/components/ui';
import { CTASection } from '@/components/sections';

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about our QA, documentation and development services.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              Frequently Asked Questions.
            </h1>
            <p className="text-body text-ink-2 max-w-xl mb-8">
              Straight answers to the most common questions we get about our process, pricing, and services.
            </p>
            <Button href="/contact" variant="primary" arrow>
              Ask a Specific Question
            </Button>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-24">
            {faqGroups.map((category, i) => (
              <div key={category.title}>
                <SectionHeader
                  label="Category"
                  number={`0${i + 1}`}
                  title={category.title}
                />
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
