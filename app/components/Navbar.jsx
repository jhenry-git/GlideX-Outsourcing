// LOCATION: glidex-outsourcing/app/components/Navbar.jsx

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    // FIX 1: Changed background from bg-dark-teal to bg-white.
    // FIX 2: Changed main text color from text-white to text-dark-teal.
    <nav className="bg-white text-dark-teal shadow-md w-full z-50 fixed top-0 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        
        {/* === Left Corner: Logo & Name Combination === */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            
            {/* 1. Logo Implementation */}
            <div className="relative w-10 h-10 pt-1">
                <Image
                  src="/logo.png"
                  alt="GlideX Outsourcing Logo"
                  width={40}
                  height={40}
                />
            </div>
            
            {/* 2. Website Name (Wordmark) */}
            <span className="text-xl font-semibold tracking-wide">
              GlideX Outsourcing
            </span>
            
          </Link>
        </div>
        {/* === End Logo & Name Combination === */}

        {/* Navigation Links (BLOG ADDED) */}
        <div className="space-x-6 flex items-center">
          <Link href="/about" className="text-dark-teal hover:text-medium-blue transition duration-200">About Us</Link>
          <Link href="/services" className="text-dark-teal hover:text-medium-blue transition duration-200">Services</Link>
          
          {/* NEW: Blog Link */}
          <Link href="/blog" className="text-dark-teal hover:text-medium-blue transition duration-200">Blog</Link>
          
          <Link href="/contact" className="text-dark-teal hover:text-medium-blue transition duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
