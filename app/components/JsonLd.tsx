export default function JsonLd() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Profusion",
      "description": "Design, Development, and Operations by ex-UBS, HSBC, and Shell leads",
      "image": "https://profusion.io/logo.jpg",
      "priceRange": "££££",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UK",
        "addressRegion": "London",
      },
      "telephone": "+447412758651",
      "email": "hello@profusion.io",
      "url": "https://profusion.io",
      "sameAs": [
        "https://cal.com/profusion/30min"
      ],
      "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "51.5074",
          "longitude": "-0.1278"
        },
        "geoRadius": "5000"
      },
      "serviceType": [
        "Software Development",
        "Digital Transformation",
        "Technical Consulting",
        "Security Audits",
        "Enterprise Architecture"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose Profusion over a traditional agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Direct access to ex-HSBC, UBS, and Shell design and technical leads—no juniors, no account managers, no bureaucracy. You get enterprise-grade solutions at 30-40% lower cost, delivered at startup speed."
          }
        },
        {
          "@type": "Question",
          "name": "How does your fixed pricing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We've eliminated the uncertainty of hourly billing. After a thorough scoping session, you get a fixed price that won't change unless you change the requirements. Pay only when you're satisfied, with flexible payment plans available."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you deliver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most projects launch within 2-4 weeks. We achieve this through battle-tested frameworks from UBS and Shell, automated testing, and parallel execution."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Technical Consulting",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Profusion"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Security Audit",
              "description": "Using HSBC's risk assessment framework",
              "price": "5000",
              "priceCurrency": "GBP"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Redesign",
              "description": "Mobile-first website with conversion-focused UX",
              "price": "10000",
              "priceCurrency": "GBP"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Development",
              "description": "Custom web or mobile app development",
              "price": "15000",
              "priceCurrency": "GBP"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Profusion",
      "url": "https://profusion.io",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://profusion.io/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Profusion",
      "url": "https://profusion.io",
      "logo": "https://profusion.io/logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447412758651",
        "contactType": "sales",
        "email": "hello@profusion.io",
        "areaServed": "GB",
        "availableLanguage": "English"
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 