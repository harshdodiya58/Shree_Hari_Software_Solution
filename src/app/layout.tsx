import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/content/site.config';
import { organizationSchema, webSiteSchema } from '@/lib/seo';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.companyName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema(),
              webSiteSchema(),
            ]),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Skip Link — Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
