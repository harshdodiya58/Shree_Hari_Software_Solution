import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/content/site.config';
import { services } from '@/content/services';
import { Section, Container, Reveal, Button, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections';
import * as Icons from 'lucide-react';
import { ServiceSectionClient } from './ServiceSectionClient';

export const metadata = buildMetadata({
  title: 'Services',
  description: 'QA testing, documentation, custom software and automation services for businesses that care about quality.',
  path: '/services',
});

export default function ServicesOverviewPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              Specialized Services for Software Quality.
            </h1>
            <p className="text-body text-ink-2 mb-8 max-w-xl">
              We provide the testing, documentation and custom solutions required to launch reliable products. Work with us on a single service or combine them for full coverage.
            </p>
          </Reveal>
        </Container>
      </Section>

      <ServiceSectionClient services={services} />

      <CTASection />
    </>
  );
}
