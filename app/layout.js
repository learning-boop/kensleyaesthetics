import './globals.css';
import Providers from './Providers';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://kensleyaesthetics.com'),
  title: {
    default: 'Kensley Aesthetics | Doctor-Led Aesthetic Clinic, Jesmond, Newcastle',
    template: '%s',
  },
  description: 'Doctor-led aesthetic clinic in Jesmond, Newcastle. Dermal fillers, anti-wrinkle injections, Profhilo, polynucleotides, RF microneedling & HIFU by GMC-registered Dr Tiru Matla.',
  authors: [{ name: 'Kensley Aesthetics' }],
  verification: {
    google: 'uYQK0BUq5EyKq4h9vtpmFWdum_2l86QoIil3SygABf8',
  },
  openGraph: {
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['/logo512.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'GB-NET',
    'geo.placename': 'Newcastle upon Tyne',
    'color-scheme': 'light only',
  },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "MedicalClinic"],
      "@id": "https://kensleyaesthetics.com/#clinic",
      "name": "Kensley Aesthetics",
      "alternateName": ["Kensley Aesthetics by Dr.Matla", "Kensley Aesthetics Newcastle"],
      "url": "https://kensleyaesthetics.com/",
      "logo": "https://kensleyaesthetics.com/logo512.png",
      "image": "https://kensleyaesthetics.com/logo512.png",
      "description": "Doctor-led, GMC-registered aesthetic clinic in Jesmond, Newcastle upon Tyne offering dermal fillers, anti-wrinkle injections, skin boosters, polynucleotides, biostimulators, microneedling, RF microneedling and HIFU.",
      "telephone": "0333 444 2013",
      "email": "hello@kensleyaesthetics.com",
      "priceRange": "\u00a3\u00a3",
      "currenciesAccepted": "GBP",
      "paymentAccepted": "Cash, Credit Card, Debit Card",
      "medicalSpecialty": ["Dermatology", "PlasticSurgery"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old Brewery Court, 156 Sandyford Rd",
        "addressLocality": "Jesmond, Newcastle upon Tyne",
        "addressRegion": "Tyne and Wear",
        "postalCode": "NE2 1XG",
        "addressCountry": "GB"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "54.9787", "longitude": "-1.6116" },
      "hasMap": "https://maps.google.com/?q=Old+Brewery+Court,+156+Sandyford+Rd,+Jesmond,+Newcastle+upon+Tyne,+NE2+1XG",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
      ],
      "areaServed": ["Newcastle upon Tyne", "Jesmond", "Gosforth", "Gateshead", "North Tyneside", "Sunderland", "Durham", "Northumberland"],
      "founder": { "@id": "https://kensleyaesthetics.com/#dr-tiru-matla" },
      "employee": { "@id": "https://kensleyaesthetics.com/#dr-tiru-matla" },
      "sameAs": [
        "https://www.instagram.com/kensleyaesthetics/",
        "https://www.facebook.com/profile.php?id=61591977870031",
        "https://tiktok.com/@kensleyaesthetics",
        "https://linkedin.com/company/kensleyaesthetics",
        "https://www.youtube.com/channel/UCXApmZZivbQBNgQymp9dE6w"
      ]
    },
    {
      "@type": ["Person", "Physician"],
      "@id": "https://kensleyaesthetics.com/#dr-tiru-matla",
      "name": "Dr Tiru Matla",
      "honorificPrefix": "Dr",
      "jobTitle": "Founder & Clinical Director",
      "description": "GMC-registered medical doctor (MBBS, MRCGP, DFSRH) with over 20 years of clinical experience, specialising in non-surgical aesthetic medicine.",
      "url": "https://kensleyaesthetics.com/about",
      "worksFor": { "@id": "https://kensleyaesthetics.com/#clinic" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MBBS" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "membership", "name": "MRCGP" },
        { "@type": "EducationalOccupationalCredential", "credentialCategory": "diploma", "name": "DFSRH" }
      ],
      "memberOf": { "@type": "Organization", "name": "General Medical Council", "url": "https://www.gmc-uk.org/" }
    },
    {
      "@type": "WebSite",
      "@id": "https://kensleyaesthetics.com/#website",
      "url": "https://kensleyaesthetics.com/",
      "name": "Kensley Aesthetics",
      "publisher": { "@id": "https://kensleyaesthetics.com/#clinic" },
      "inLanguage": "en-GB"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="theme-color" content="#F8F4EF" />

        {/* Preconnects */}
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />

        {/* Hero image preload */}
        <link rel="preload" as="image" type="image/png" href="/assets/stay_youthful.png" fetchPriority="high" />

        {/* Organisation structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>

        {/* Elfsight */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N6G5K6B91P"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N6G5K6B91P');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xqeqvr3gai");
          `}
        </Script>

        {/* Lucid Focus */}
        <Script id="lucid-focus" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
              j.async=true; j.src='https://www.mylucidfocus.com/sdk/lucidfocus.js';
              j.onload=function(){ w[l].init({ apiKey: i }); };
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','LucidFocus','l_p4EWpYnFlPth9vAdHz_l3iP77U7mBSOS1ZmxdTjQ0');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            if(typeof fbq==='function'){fbq('init', '1412403677447698');
            fbq('track', 'PageView');}
          `}
        </Script>
      </body>
    </html>
  );
}
