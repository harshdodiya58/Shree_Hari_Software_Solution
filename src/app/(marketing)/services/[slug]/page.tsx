import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata, serviceSchema } from '@/lib/seo';
import { getServiceBySlug, services } from '@/content/services';
import { Section, Container, Button, FAQAccordion, Reveal, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { BugReportPreview, TestCasePreview, DashboardPreview, DocumentPreview, VersionHistoryPreview, ArchitecturePreview } from '@/components/previews';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = (Icons as any)[service.icon] || Icons.Circle;

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.title,
              description: service.description,
              url: `/services/${slug}`,
            })
          ),
        }}
      />

      {/* ─── Breadcrumbs & Header ────────────────────────────── */}
      <Section bg="soft" className="pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-border">
        <Container>
          <Reveal direction="down">
            <div className="flex items-center gap-2 text-sm text-ink-3 mb-8">
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink-2">{service.shortTitle}</span>
            </div>

            <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mb-8">
              <Icon className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-h1 text-ink mb-6 max-w-3xl">
              {service.title}
            </h1>
            <p className="text-body text-ink-2 mb-10 max-w-2xl">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get a Free Project Review
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── What We Do & Deliverables ───────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-h3 text-ink mb-8">What We Do</h2>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-[12px] bg-bg-soft border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-h3 text-ink mb-8">Deliverables</h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-[12px] bg-surface border border-border shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span className="text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Service Specific Previews ───────────────────────── */}
      {slug === 'qa-testing' && (
        <Section bg="tint" className="border-y border-border">
          <SectionHeader
            label="Inside the process"
            number="01"
            title="What QA Looks Like."
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <BugReportPreview />
            <TestCasePreview />
          </div>
          <div className="max-w-4xl mx-auto mt-8">
             <DashboardPreview className="mx-auto" />
          </div>
        </Section>
      )}

      {slug === 'documentation' && (
        <Section bg="tint" className="border-y border-border">
          <SectionHeader
            label="Inside the process"
            number="01"
            title="Clear, Versioned Documents."
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <DocumentPreview />
            <VersionHistoryPreview />
          </div>
        </Section>
      )}

      {slug === 'software-solutions' && (
        <Section bg="tint" className="border-y border-border">
          <SectionHeader
            label="Architecture"
            number="01"
            title="Built for Scale."
            align="center"
          />
          <div className="max-w-3xl mx-auto">
            <ArchitecturePreview />
          </div>
        </Section>
      )}

      {slug === 'automation' && (
        <Section bg="tint" className="border-y border-border">
          <SectionHeader
            label="Workflow"
            number="01"
            title="Before and After."
            align="center"
          />
          <div className="max-w-4xl mx-auto bg-surface rounded-[24px] border border-border p-8 lg:p-12 shadow-rest flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <h4 className="text-sm font-semibold text-danger mb-6 uppercase tracking-wider">Before (Manual)</h4>
              <div className="flex flex-col items-center gap-4 opacity-70">
                <div className="p-4 bg-bg-soft border border-border rounded-lg text-ink-3">Spreadsheet Data</div>
                <Icons.ArrowDown className="w-5 h-5 text-ink-3" />
                <div className="p-4 bg-bg-soft border border-border rounded-lg text-ink-3">Manual Copy/Paste</div>
                <Icons.ArrowDown className="w-5 h-5 text-ink-3" />
                <div className="p-4 bg-bg-soft border border-border rounded-lg text-ink-3">Email Report</div>
              </div>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-border-strong flex items-center justify-center shrink-0">
              <Icons.ArrowRight className="w-6 h-6 text-ink-2 hidden md:block" />
              <Icons.ArrowDown className="w-6 h-6 text-ink-2 md:hidden" />
            </div>

            <div className="flex-1 text-center">
              <h4 className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">After (Automated)</h4>
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-surface border border-primary/30 shadow-sm rounded-lg text-ink-2 font-medium">Database / API</div>
                <Icons.ArrowDown className="w-5 h-5 text-primary" />
                <div className="p-4 bg-primary-soft border border-primary rounded-lg text-primary font-medium">Automated Script</div>
                <Icons.ArrowDown className="w-5 h-5 text-primary" />
                <div className="p-4 bg-accent-soft border border-accent rounded-lg text-accent-700 font-medium">Live Dashboard</div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* ─── Use Cases ───────────────────────────────────────── */}
      <Section bg="white">
        <SectionHeader
          label="Applications"
          number="02"
          title="Typical Use Cases."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.useCases.map((useCase, i) => (
            <div key={i} className="bg-bg-soft rounded-[16px] p-6 border border-border">
              <Icons.CheckCircle2 className="w-5 h-5 text-primary mb-4" />
              <p className="text-ink-2">{useCase}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <Section bg="soft" className="border-t border-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="Questions"
            number="03"
            title="Common Questions."
            align="center"
          />
          <FAQAccordion items={service.faq} />
        </div>
      </Section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
