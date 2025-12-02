// LOCATION: glidex-outsourcing/app/components/Hero.jsx

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="text-white min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      style={{
        // Using the .png extension and best practices for background styling
        backgroundImage: 'url(/hero-bg.png)', // <-- Check file extension here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-dark-teal opacity-30"></div>

      {/* Content Container */}
      <div className="container mx-auto text-center relative z-10 py-24 md:py-0">
        
        {/* Main Headline */}
        <h1
          className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }}
        >
          Empowering Businesses With World-Class Virtual Assistants
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          We provide highly trained Virtual Assistants to help businesses scale operations, reduce costs, and increase efficiency.
        </p>
        
        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-light-cyan hover:bg-white text-dark-teal font-bold py-4 px-10 text-lg rounded-full shadow-2xl transition duration-500 transform hover:scale-105 inline-block"
        >
          Hire a VA Today
        </Link>
      </div>
    </section>
  );
}
