export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Profusion",
    "description": "Enterprise-grade design, development, and operations by ex-UBS, HSBC, and Shell leads.",
    "url": "https://profusion.io",
    "logo": "https://profusion.io/logo.png",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "£2,500 - £25,000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 