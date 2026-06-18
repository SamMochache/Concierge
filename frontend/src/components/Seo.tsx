import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';
type SeoProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};
export function Seo({
  title,
  description,
  path,
  keywords,
  image = SITE.ogImage,
  type = 'website',
  jsonLd
}: SeoProps) {
  const canonical = `${SITE.url}${path}`;
  const schemas = [
    websiteSchema,
    breadcrumbSchema(path, title),
    ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])
  ];
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>);

}
const pageName = (segment: string) =>
segment
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

const breadcrumbSchema = (path: string, title: string) => {
  const cleanPath = path === '/' ? '' : path.replace(/^\/|\/$/g, '');
  const segments = cleanPath ? cleanPath.split('/') : [];
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE.url
    },
    ...segments.map((segment, index) => {
      const itemPath = segments.slice(0, index + 1).join('/');
      const isLast = index === segments.length - 1;
      return {
        '@type': 'ListItem',
        position: index + 2,
        name: isLast ? title.replace(` | ${SITE.name}`, '') : pageName(segment),
        item: `${SITE.url}/${itemPath}`
      };
    })
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  alternateName: ['Kenya Welcome', 'KWC'],
  url: SITE.url,
  inLanguage: 'en',
  publisher: {
    '@id': `${SITE.url}/#travelagency`
  }
};

export const travelAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE.url}/#travelagency`,
  name: SITE.name,
  alternateName: ['Kenya Welcome', 'KWC'],
  url: SITE.url,
  image: SITE.ogImage,
  description:
  'Personalized Kenya travel concierge offering airport transfers, safari bookings, accommodation, SIM card assistance and M-PESA onboarding for international tourists.',
  email: SITE.email,
  telephone: SITE.emergencyPhone,
  founder: {
    '@type': 'Person',
    name: 'Sam Mochache'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: SITE.emergencyPhone,
      availableLanguage: ['English'],
      areaServed: ['KE', 'US', 'GB', 'CA', 'AU', 'EU']
    },
    {
      '@type': 'ContactPoint',
      contactType: 'WhatsApp travel concierge',
      url: `https://wa.me/${SITE.whatsappNumber}`,
      availableLanguage: ['English']
    }
  ],
  areaServed: 'Kenya',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE'
  }
};
