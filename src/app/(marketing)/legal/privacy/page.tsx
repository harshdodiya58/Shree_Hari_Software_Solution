import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { Section, Container, Reveal } from '@/components/ui';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your data.',
  path: '/legal/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <Section bg="white" className="pt-16 pb-24 lg:pt-24 lg:pb-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal direction="down">
            <h1 className="text-h2 lg:text-h1 text-ink mb-4">Privacy Policy</h1>
            <p className="text-ink-3 mb-12 text-sm">Last updated: October 2026</p>
          </Reveal>
          
          <div className="prose-container">
            <p className="text-ink-2 leading-relaxed mb-6">
              This Privacy Policy describes how we collect, use, and protect your information when you use our website and services. By accessing our site, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-ink-2 leading-relaxed mb-4">
              We collect information to provide better services to our users. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-ink-2">
              <li><strong>Information you provide to us:</strong> Such as your name, email address, company name, and project details when you fill out our contact forms.</li>
              <li><strong>Usage data:</strong> Information about how you interact with our website, such as pages visited and time spent, collected via standard analytics tools.</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              The information we collect is used in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-ink-2">
              <li>To provide, operate, and maintain our services.</li>
              <li>To communicate with you, including responding to inquiries and sending proposals.</li>
              <li>To understand and analyze how you use our website, allowing us to improve functionality and content.</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">3. Data Security</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">4. Sharing of Information</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              We do not sell or rent your personal information to third parties. We may share information with trusted third-party service providers (e.g., hosting, analytics) who assist us in operating our website, provided those parties agree to keep this information confidential.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">5. Your Rights</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the information we hold about you. If you wish to exercise these rights, please contact us.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 mb-4">6. Contact Us</h2>
            <p className="text-ink-2 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@devcraft.com.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
