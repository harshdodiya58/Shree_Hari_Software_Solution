import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata, articleSchema } from '@/lib/seo';
import { siteConfig } from '@/content/site.config';
import { getResourceBySlug, resources } from '@/content/resources';
import { Section, Container, Reveal, Badge, Button } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';
import { SimpleMarkdown } from '@/components/ui/SimpleMarkdown';

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  
  if (!resource) return {};

  return buildMetadata({
    title: resource.title,
    description: resource.summary,
    path: `/resources/${slug}`,
    type: 'article',
  });
}

// mdx components removed

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: resource.title,
              description: resource.summary,
              url: `/resources/${slug}`,
              author: siteConfig.companyName,
              datePublished: '2026-10-07T00:00:00.000Z',
            })
          ),
        }}
      />

      <Section bg="soft" className="pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-border">
        <Container>
          <Reveal direction="down">
            <div className="flex items-center gap-2 text-sm text-ink-3 mb-8">
              <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink-2 truncate max-w-[200px]">{resource.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Badge variant={resource.category === 'Documentation' ? 'primary' : 'default'} className="uppercase">
                {resource.category}
              </Badge>
              <span className="text-[10px] font-mono text-ink-3">{resource.readingTime}</span>
            </div>

            <h1 className="text-h2 lg:text-h1 text-ink mb-6 max-w-3xl">
              {resource.title}
            </h1>
            <p className="text-body text-ink-2 max-w-2xl mb-8">
              {resource.summary}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto prose-container">
            <SimpleMarkdown content={resource.content} />
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
