import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getSolutionBySlug, solutions } from '@/content/solutions';
import { Section, Container, Reveal, Button, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { ChevronRight, XCircle, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  
  if (!solution) return {};

  return buildMetadata({
    title: solution.title,
    description: solution.description,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  const Icon = (Icons as any)[solution.icon] || Icons.Circle;

  return (
    <>
      <Section bg="soft" className="pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-border">
        <Container>
          <Reveal direction="down">
            <div className="flex items-center gap-2 text-sm text-ink-3 mb-8">
              <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink-2">{solution.title}</span>
            </div>

            <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mb-8">
              <Icon className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-h1 text-ink mb-6 max-w-3xl">
              {solution.subtitle}
            </h1>
            <p className="text-body text-ink-2 mb-10 max-w-2xl">
              {solution.description}
            </p>

            <Button href={`/contact?package=${solution.suggestedPackage}`} variant="primary" size="lg" arrow>
              Discuss Your Project
            </Button>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Problems */}
            <div>
              <SectionHeader
                label="The Challenge"
                number="01"
                title="Common Problems."
              />
              <div className="space-y-6">
                {solution.problems.map((prob, i) => (
                  <div key={i} className="bg-bg-soft rounded-[16px] p-6 border border-border">
                    <div className="flex gap-3">
                      <XCircle className="w-5 h-5 text-danger shrink-0" />
                      <div>
                        <h4 className="font-semibold text-ink mb-1">{prob.title}</h4>
                        <p className="text-sm text-ink-2">{prob.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <SectionHeader
                label="The Approach"
                number="02"
                title="Recommended Solutions."
              />
              <div className="space-y-6">
                {solution.recommendations.map((rec, i) => (
                  <div key={i} className="bg-surface rounded-[16px] p-6 border border-primary/20 shadow-rest relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <CheckCircle2 className="w-16 h-16 text-primary" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <h4 className="font-semibold text-ink mb-1">{rec.service}</h4>
                          <p className="text-sm text-ink-2 mb-4 max-w-sm">{rec.description}</p>
                          <Link href={rec.serviceSlug} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                            Explore Service <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="tint" className="border-t border-border">
        <Container className="text-center max-w-3xl mx-auto">
          <SectionHeader
            label="Getting Started"
            number="03"
            title="Suggested Package."
            align="center"
          />
          <div className="bg-surface border border-border rounded-[24px] p-8 md:p-12 shadow-hover inline-block mt-4">
            <h3 className="text-xl font-semibold text-ink mb-2">{solution.suggestedPackage}</h3>
            <p className="text-ink-2 mb-8">
              We have found this combination works best for {solution.title.replace('For ', '')}.
            </p>
            <Button href={`/contact?package=${solution.suggestedPackage}`} variant="primary" size="lg">
              Get a Quote for this Package
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
