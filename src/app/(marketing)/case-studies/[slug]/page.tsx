import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata, articleSchema } from '@/lib/seo';
import { siteConfig } from '@/content/site.config';
import { getCaseStudyBySlug, caseStudies } from '@/content/case-studies';
import { Section, Container, Reveal, Badge, Button } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  
  if (!cs) return {};

  return buildMetadata({
    title: `${cs.title} | Case Study`,
    description: cs.objective,
    path: `/case-studies/${slug}`,
    type: 'article',
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: cs.title,
              description: cs.objective,
              url: `/case-studies/${slug}`,
              author: siteConfig.companyName,
              datePublished: '2026-10-07T00:00:00.000Z',
            })
          ),
        }}
      />

      {/* Hero */}
      <Section bg="soft" className="pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-border">
        <Container>
          <Reveal direction="down">
            <div className="flex items-center gap-2 text-sm text-ink-3 mb-8">
              <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink-2 truncate max-w-[200px]">{cs.title}</span>
            </div>

            {cs.isDemo && (
              <Badge variant="demo" className="mb-6">Demo Case Study</Badge>
            )}

            <h1 className="text-h2 lg:text-h1 text-ink mb-6 max-w-4xl">
              {cs.title}
            </h1>
            <p className="text-body text-ink-2 max-w-2xl">
              {cs.objective}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Metadata Bar */}
      <div className="bg-surface border-b border-border py-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-3 mb-1">Client</div>
              <div className="text-sm font-medium text-ink">Acme Corp</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-3 mb-1">Industry</div>
              <div className="text-sm font-medium text-ink">{cs.industry}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-3 mb-1">Category</div>
              <div className="text-sm font-medium text-ink">{cs.category}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-3 mb-1">Year</div>
              <div className="text-sm font-medium text-ink">{cs.year}</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Quick Results */}
            <div className="bg-bg-soft rounded-[16px] p-8 border border-border mb-16">
              <h3 className="text-sm font-mono uppercase text-ink-3 mb-4">Key Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-ink-2">
                  <span className="text-primary mt-1">✔</span>
                  {cs.outcome}
                </li>
              </ul>
            </div>

            {/* Custom Content based on interface */}
            <div className="prose-container">
              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6">The Challenge</h2>
              <p className="text-ink-2 leading-relaxed mb-6">{cs.challenge}</p>

              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6">Our Approach</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-ink-2">
                {cs.approach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6">The Solution</h2>
              <p className="text-ink-2 leading-relaxed mb-6">{cs.solution}</p>

              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6">Lessons Learned</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-ink-2">
                {cs.lessonsLearned.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
