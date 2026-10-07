import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/content/site.config';
import { pricingPackages, pricingFaq } from '@/content/pricing';
import { Section, Container, Reveal, SectionHeader, FAQAccordion, Button } from '@/components/ui';
import { PricingCard, CTASection } from '@/components/sections';
import { CheckCircle2 } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Pricing',
  description: 'Transparent pricing for QA, documentation and software development services.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              Clear, Transparent Pricing.
            </h1>
            <p className="text-body text-ink-2 max-w-xl">
              We don't hide our costs. Choose a fixed-price starter package to validate our work, or request a custom quote for larger projects.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-border grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                label="Variables"
                number="01"
                title="What affects custom pricing?"
              />
              <p className="text-ink-2 mb-8">
                For Custom Software and larger QA/Docs projects, our quotes are based on these factors:
              </p>
              <ul className="space-y-4">
                {[
                  'System complexity and number of integrations',
                  'Urgency and timeline requirements',
                  'Volume of existing undocumented features',
                  'Security and compliance requirements (e.g. HIPAA, SOC2)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <SectionHeader
                label="Next Steps"
                number="02"
                title="Need something different?"
              />
              <div className="bg-bg-soft rounded-[24px] p-8 border border-border">
                <p className="text-ink-2 mb-6">
                  If your project doesn't fit into one of these buckets, we can create a custom proposal. We start with a free review of your current state.
                </p>
                <Button href="/contact" variant="primary">
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="tint" className="border-t border-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="Questions"
            number="03"
            title="Pricing FAQ."
            align="center"
          />
          <FAQAccordion items={pricingFaq} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
