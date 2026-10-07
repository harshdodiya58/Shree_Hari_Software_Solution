import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { processStages } from '@/content/process';
import { Section, Container, Reveal, Button, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections';
import * as Icons from 'lucide-react';
import { ProcessScrollSpy } from './ProcessScrollSpy';

export const metadata = buildMetadata({
  title: 'Process',
  description: 'Our eight-stage process for software quality, from discovery to delivery.',
  path: '/process',
});

export default function ProcessPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              How We Work.
            </h1>
            <p className="text-body text-ink-2 mb-8 max-w-xl">
              Good software requires a deliberate approach. Our process ensures nothing gets missed, from the first discovery call to final delivery.
            </p>
          </Reveal>
        </Container>
      </Section>

      <div className="bg-white">
        <ProcessScrollSpy stages={processStages} />
      </div>

      <CTASection />
    </>
  );
}
