// LOCATION: glidex-outsourcing/app/layout.js

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outfit } from 'next/font/google';
import Script from 'next/script';

// 1. FONT OPTIMIZATION
const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// 2. VIEWPORT SETTINGS
export const viewport = {
  themeColor: '#0F2D37', // Matches Dark Teal branding
  width: 'device-width',
  initialScale: 1,
};

// 3. SEO METADATA
export const metadata = {
  // --- USER REQUIREMENT: LOCKED SECTION ---
  metadataBase: new URL('https://www.glidexoutsourcing.com'),
  title: {
    default: 'GlideX Outsourcing | Virtual Assistants & AI Automations',
    template: '%s | GlideX Outsourcing',
  },
  // ----------------------------------------

  // DESCRIPTION: Kept the "Hybrid" sales pitch (AI + Human)
  description: 'Transform your business with autonomous AI Voice Agents and expert Virtual Assistants. We provide inbound/outbound voice automation and top-tier VAs for medical, tech, and admin roles.',
  
  // KEYWORDS: Targets both high-tech searchers and traditional outsourcing clients
  keywords: [
    'AI Voice Agents', 
    'Voice Automation', 
    'Virtual Assistants Kenya', 
    'Medical VA', 
    'Tech Support Outsourcing', 
    'GlideX'
  ],

  // CANONICAL TAG (Prevents duplicate content issues)
  alternates: {
    canonical: '/',
  },

  // ROBOTS CONTROL (Ensures full indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // VERIFICATION
  verification: {
    google: 'zMPfGe_H5PywegopHJHHfaMI4VNmkIajUn3F0noIKDc',
  },

  // SOCIAL MEDIA PREVIEWS (Open Graph) - Synced with your Title
  openGraph: {
    type: 'website',
    siteName: 'GlideX Outsourcing',
    url: 'https://www.glidexoutsourcing.com',
    title: 'GlideX Outsourcing | Virtual Assistants & AI Automations',
    description: 'Scale faster with AI Voice Automations and reliable Virtual Assistants. We handle your calls and your operations.',
    images: [
      {
        url: '/opengraph-image.png', // Don't forget to create this 1200x630px image!
        width: 1200,
        height: 630,
        alt: 'GlideX AI Voice and VA Services',
      },
      {
        url: '/android-chrome-512x512.png', 
        width: 512,
        height: 512,
        alt: 'GlideX Outsourcing Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GlideX Outsourcing | Virtual Assistants & AI Automations',
    description: 'Scale faster with AI Voice Automations and reliable Virtual Assistants.',
    creator: '@glidex', 
    images: ['/opengraph-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/manifest.json' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className="font-sans bg-gray-50 text-slate-800 antialiased selection:bg-light-cyan selection:text-dark-teal">
        
        {/* --- ANALYTICS & ADS --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17468844041"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17468844041');
          `}
        </Script>
        
        <Navbar />
        
        {/* MAIN CONTENT WRAPPER */}
        <main className="pt-20 min-h-screen flex flex-col">
          {children}
        </main>
        
        <Footer />

        {/* --- STRUCTURED DATA (JSON-LD) --- */}
        {/* This tells Google you offer services, even if the Title is brand-first */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GlideX Outsourcing",
              url: "https://www.glidexoutsourcing.com",
              logo: "https://www.glidexoutsourcing.com/android-chrome-512x512.png",
              description: "Empowering businesses with autonomous AI Voice Agents and world-class Virtual Assistants for medical, tech, and admin support.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254768266255",
                contactType: "customer service"
              },
              // Explicitly lists your services for Google Knowledge Graph
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Voice Automation"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Virtual Assistant Outsourcing"
                  }
                }
              ],
              sameAs: [
                "https://twitter.com/glidex",
                "https://www.linkedin.com/company/glidex-outsourcing"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
