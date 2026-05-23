import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ApexBookings" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload critical above-fold images */}
        <link rel="preload" as="image" href="/images/analytics-illustration.png"/>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
        <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
        <meta name="robots" content="index, follow"/>
        <meta name="author" content="Apex Bookings"/>
        <meta name="theme-color" content="#1a4fc4"/>
        <meta property="og:site_name" content="Apex Bookings"/>
        <meta property="og:locale" content="en_IN"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@ApexBookings"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"Apex Bookings",
          "url":"https://apexbookings.in",
          "logo":"https://apexbookings.in/images/logo.png",
          "description":"India's leading hotel revenue management company — Channel Manager, Booking Engine, Cloud PMS, OTA Listing and Digital Marketing.",
          "telephone":"+918171871902",
          "email":"info@apexbookings.in",
          "address":{"@type":"PostalAddress","streetAddress":"Phartyal's Annexe, Anupam Vihar","addressLocality":"Haldwani","addressRegion":"Uttarakhand","postalCode":"263139","addressCountry":"IN"},
          "foundingDate":"2017",
          "areaServed":{"@type":"Country","name":"India"},
          "sameAs":["https://apexbookings.in"],
          "contactPoint":{"@type":"ContactPoint","telephone":"+918171871902","contactType":"customer service","areaServed":"IN","availableLanguage":["English","Hindi"]}
        })}}/>
      </Head>
      <body><Main/><NextScript/></body>
    </Html>
  )
}
