// LOCATION: glidex-outsourcing/app/layout.js

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'GlideX Outsourcing',
  description: 'Empowering businesses with world-class Virtual Assistants',
  
  // === FAVICON IMPLEMENTATION START ===
  icons: {
    // Primary/Default Favicons (Standard and modern desktop browsers)
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '96x96', type: 'image/png' },
    ],
    // iOS/Apple Home Screen Icon
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    // Android/PWA Icons (Explicitly adding 192x192 and 512x512)
    other: [
        {
            rel: 'icon',
            url: '/web-app-manifest-192x192.png',
            sizes: '192x192',
        },
        {
            rel: 'icon',
            url: '/web-app-manifest-512x512.png',
            sizes: '512x512',
        },
    ]
  },
  // If you want full PWA support, create a site.webmanifest file and reference it here:
  // manifest: '/site.webmanifest',
  // === FAVICON IMPLEMENTATION END ===
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-light text-gray-dark">
        <Navbar />
        {/* FIX: Added pt-20 (e.g., 80px) to main to offset the fixed Navbar height */}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
