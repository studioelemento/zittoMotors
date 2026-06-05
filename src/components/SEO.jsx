import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, path }) {
  const siteUrl = 'https://zittomotors.com';
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/Logo/logoWithText.png`} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/Logo/logoWithText.png`} />
    </Helmet>
  );
}
