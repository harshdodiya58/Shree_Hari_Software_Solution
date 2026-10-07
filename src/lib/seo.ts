// ============================================================
// seo.ts — Central SEO helper: buildMetadata, JSON-LD generators
// ============================================================

import type { Metadata } from 'next';
import { siteConfig } from '@/content/site.config';

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

/** Build consistent metadata for every page */
export function buildMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    noIndex = false,
    ogImage,
    type = 'website',
    publishedTime,
    modifiedTime,
  } = options;

  const url = `${siteConfig.domain}${path}`;
  const fullTitle =
    path === '/'
      ? `${siteConfig.companyName} — ${title}`
      : `${title} — ${siteConfig.companyName}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.companyName,
      type: type === 'article' ? 'article' : 'website',
      locale: 'en_US',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }] }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// ─── JSON-LD Generators ──────────────────────────────────────

/** Organization schema (global) */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}${siteConfig.logo.full}`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
    },
    sameAs: Object.values(siteConfig.social),
  };
}

/** WebSite schema (global) */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.companyName,
    url: siteConfig.domain,
  };
}

/** Service schema */
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${siteConfig.domain}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.companyName,
    },
  };
}

/** FAQPage schema */
export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** BreadcrumbList schema */
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}

/** Article schema */
export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteConfig.domain}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author ?? siteConfig.companyName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}${siteConfig.logo.full}`,
      },
    },
  };
}

/** ContactPage schema */
export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact',
    url: `${siteConfig.domain}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
    },
  };
}
