import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { resources } from '@/content/resources';
import { Section, Container, Reveal, Badge } from '@/components/ui';
import { CTASection } from '@/components/sections';
import Link from 'next/link';
import { ArrowRight, FileText, Download } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Resources',
  description: 'Practical guides, templates and checklists for software quality.',
  path: '/resources',
});

export default function ResourcesPage() {
  return (
    <>
      <Section bg="soft" className="pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <Container>
          <Reveal direction="down">
            <h1 className="text-h1 text-ink mb-6 max-w-2xl">
              Practical Resources.
            </h1>
            <p className="text-body text-ink-2 max-w-xl">
              No marketing fluff. Just the templates, checklists and guides we use internally to build better software.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group flex flex-col bg-surface border border-border rounded-[24px] overflow-hidden hover:border-primary-soft hover:shadow-hover transition-all"
              >
                <div className="h-48 bg-bg-soft flex items-center justify-center border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {resource.category === 'Documentation' ? (
                    <FileText className="w-12 h-12 text-ink-3 group-hover:text-primary transition-colors relative z-10" />
                  ) : (
                    <Download className="w-12 h-12 text-ink-3 group-hover:text-primary transition-colors relative z-10" />
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={resource.category === 'Documentation' ? 'primary' : 'default'} className="uppercase">
                      {resource.category}
                    </Badge>
                    <span className="text-[10px] font-mono text-ink-3">{resource.readingTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-ink-2 mb-6 line-clamp-2 flex-1">
                    {resource.summary}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-primary mt-auto">
                    Read Resource <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
