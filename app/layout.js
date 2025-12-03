// LOCATION: glidex-outsourcing/app/layout.js

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Define Viewport settings (Next.js 14+ standard)
export const viewport = {
  themeColor: '#ffffff',
};

export const metadata = {
  metadataBase: new URL('https://www.glidexoutsourcing.com'),
  title: {
    default: 'GlideX Outsourcing — AI Automation & Web Solutions',
    template: '%s | GlideX Outsourcing',
  },
  description: 'Empowering businesses with world-class Virtual Assistants, AI-powered automation, and custom app development.',
  
  // === OPEN GRAPH (Facebook, LinkedIn, Discord) ===
  openGraph: {
    type: 'website',
    siteName: 'GlideX Outsourcing',
    url: 'https://www.glidexoutsourcing.com',
    title: 'GlideX Outsourcing — AI Automation & Web Solutions',
    description: 'Empowering businesses with world-class Virtual Assistants and AI-powered automation.',
    images: [
      {
        // Points to public/android-chrome-512x512.png
        url: '/android-chrome-512x512.png', 
        width: 512,
        height: 512,
        alt: 'GlideX Outsourcing Logo',
      },
    ],
  },

  // === TWITTER CARDS ===
  twitter: {
    card: 'summary_large_image',
    title: 'GlideX Outsourcing',
    description: 'Empowering businesses with world-class Virtual Assistants.',
    creator: '@glidex', 
    // Points to public/android-chrome-512x512.png
    images: ['/android-chrome-512x512.png'],
  },

  // === ICONS & MANIFEST ===
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
        {
          rel: 'manifest',
          url: '/manifest.json',
        },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-light text-gray-dark">
        <Navbar />
        
        {/* Main Content with padding for fixed navbar */}
        <main className="pt-20">
          {children}
        </main>
        
        <Footer />

        {/* ORGANIZATION SCHEMA (JSON-LD) for Google Knowledge Graph */}
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
                addressCountry: "KE" // Kenya
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
