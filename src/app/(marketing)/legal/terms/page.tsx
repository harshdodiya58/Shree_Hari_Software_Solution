import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { Section, Container, Reveal } from '@/components/ui';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Terms and conditions for using our website and services.',
  path: '/legal/terms',
});

export default function TermsOfServicePage() {
  return (
    <Section bg="white" className="pt-16 pb-24 lg:pt-24 lg:pb-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal direction="down">
            <h1 className="text-h2 lg:text-h1 text-ink mb-4">Terms of Service</h1>
            <p className="text-ink-3 mb-12 text-sm">Last updated: October 2026</p>
          </Reveal>
          
          <div className="prose-container">
            <p className="text-ink-2 leading-relaxed mb-6">
              Please read these Terms of Service completely before using devcraft.com which is operated by DevCraft. This Agreement documents the legally binding terms and conditions attached to the use of the Site at devcraft.com.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              By using or accessing the Site in any way, viewing or browsing the Site, or adding your own content to the Site, you are agreeing to be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">2. Intellectual Property</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              The Site and all of its original content are the sole property of DevCraft and are, as such, fully protected by the appropriate international copyright and other intellectual property rights laws.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">3. Termination</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              DevCraft reserves the right to terminate your access to the Site, without any advance notice.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">4. Governing Law</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              This Agreement is governed in accordance with the laws of the applicable jurisdiction.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">5. Changes to This Agreement</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              DevCraft reserves the right to modify these Terms of Service at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">6. Contact Us</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              If you have any questions about this Agreement, please feel free to contact us at legal@devcraft.com.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
