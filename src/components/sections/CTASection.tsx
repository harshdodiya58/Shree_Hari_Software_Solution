import React from 'react';
import { Section, Container, Reveal, Button } from '@/components/ui';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Have a project that needs more clarity?",
  description = "Get a realistic assessment of your requirements, timeline and budget without the sales pressure.",
  primaryCta = "Start a Conversation",
  primaryHref = "/contact",
  secondaryCta = "Get a Project Review",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <Section bg="tint" className="border-y border-border">
      <Container className="text-center max-w-3xl mx-auto py-8">
        <Reveal>
          <h2 className="text-h2 text-ink mb-4">{title}</h2>
          <p className="text-body text-ink-2 mb-8 mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} variant="primary" size="lg">
              {primaryCta}
            </Button>
            <Button href={secondaryHref} variant="outline" size="lg">
              {secondaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
