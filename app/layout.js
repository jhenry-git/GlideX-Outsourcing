// LOCATION: glidex-outsourcing/app/layout.js

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// 1. IMPORT MODERN FONT (Outfit is excellent for Tech/AI)
import { Outfit } from 'next/font/google';
// 2. IMPORT NEXT SCRIPT (Required for Google Ads/Analytics)
import Script from 'next/script';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// Define Viewport settings
export const viewport = {
  themeColor: '#0F2D37', // Matches your Dark Teal branding
};

export const metadata = {
  metadataBase: new URL('https://www.glidexoutsourcing.com'),
  title: {
    default: 'GlideX Outsourcing | AI Automation & Virtual Assistants',
    template: '%s | GlideX Outsourcing',
  },
  description: 'Empowering businesses with world-class Virtual Assistants, AI-powered automation, and custom app development.',
  
  // MOVED VERIFICATION HERE (Best Practice)
  verification: {
    google: 'zMPfGe_H5PywegopHJHHfaMI4VNmkIajUn3F0noIKDc',
  },

  openGraph: {
    type: 'website',
    siteName: 'GlideX Outsourcing',
    url: 'https://www.glidexoutsourcing.com',
    title: 'GlideX Outsourcing — AI Automation & Web Solutions',
    description: 'Empowering businesses with world-class Virtual Assistants and AI-powered automation.',
    images: [
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
    title: 'GlideX Outsourcing',
    description: 'Empowering businesses with world-class Virtual Assistants.',
    creator: '@glidex', 
    images: ['/android-chrome-512x512.png'],
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
    // SMOOTH SCROLLING ENABLED
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className="font-sans bg-gray-50 text-slate-800 antialiased selection:bg-light-cyan selection:text-dark-teal">
        
        {/* --- GOOGLE ADS / ANALYTICS TRACKING --- */}
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
        {/* --------------------------------------- */}

        {/* Navbar typically fixed, z-index high */}
        <Navbar />
        
        {/* Main Content */}
        {/* Added min-h-screen to ensure footer pushes down on short pages */}
        <main className="pt-20 min-h-screen flex flex-col">
          {children}
        </main>
        
        <Footer />

        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GlideX Outsourcing",
              url: "https://www.glidexoutsourcing.com",
              logo: "https://www.glidexoutsourcing.com/android-chrome-512x512.png",
              description: "Empowering businesses with world-class Virtual Assistants and AI-powered automation.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254768266255",
                contactType: "customer service"
              },
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
