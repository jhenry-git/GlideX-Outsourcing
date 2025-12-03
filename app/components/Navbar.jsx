'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // 1. Calculate Scroll Progress
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentScrollY / totalHeight) * 100;
    setScrollProgress(progress);

    // 2. Glass Effect Trigger
    if (currentScrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // 3. Smart Navbar Logic
    if (currentScrollY > 100) { 
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true);  // Show on scroll up
      }
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <nav
        role="navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
        ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-2' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        {/* === CHANGED: Removed 'container mx-auto' to allow full width === */}
        {/* Adjusted padding: px-4 for mobile, px-10 for desktop to sit nicely in corners */}
        <div className="w-full px-4 md:px-10 flex justify-between items-center">
          
          {/* === Logo Section === */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="relative w-10 h-10 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:scale-110">
              <div className="absolute inset-0 bg-teal-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image
                src="/logo.png"
                alt="GlideX Outsourcing Logo"
                width={40}
                height={40}
                className="object-contain relative z-10"
              />
            </div>
            <span className="text-xl font-bold tracking-wide text-dark-teal transition-colors duration-300">
              GlideX <span className="font-light text-medium-blue">Outsourcing</span>
            </span>
          </Link>

          {/* === Desktop Navigation === */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-sm tracking-wide transition-all duration-300 group flex items-center gap-1
                  ${isActive ? 'text-medium-blue font-semibold' : 'text-gray-600 hover:text-dark-teal hover:tracking-wider'}`}
                >
                  <ChevronRight size={14} className={`opacity-0 -ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-teal-500`} />
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-medium-blue rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  )}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 
                    ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}>
                  </span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-dark-teal to-medium-blue text-white font-semibold text-sm shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </Link>
          </div>

          {/* === Mobile Menu Toggle === */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-teal p-2 focus:outline-none transition-transform duration-300 active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* === Progress Bar === */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-400 to-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* === Mobile Menu Overlay === */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
        ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* === Mobile Menu Drawer === */}
      <div
        className={`fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white/95 backdrop-blur-2xl shadow-2xl z-50 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-24 px-6 border-l border-white/20
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => {
             const isActive = pathname === item.href;
             return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-medium transition-all duration-300 transform border-b border-gray-100 pb-2
                ${isActive ? 'text-medium-blue translate-x-2' : 'text-gray-600 hover:text-dark-teal hover:translate-x-2'}
                `}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                }}
              >
                {item.name}
              </Link>
            )
          })}
          
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-dark-teal to-medium-blue text-white text-center font-bold text-lg shadow-lg active:scale-95 transition-transform duration-200"
            style={{ transitionDelay: '300ms' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
