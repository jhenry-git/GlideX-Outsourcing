// LOCATION: glidex-outsourcing/app/components/Footer.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1120] border-t border-slate-800 pt-20 pb-10 overflow-hidden text-slate-400 font-sans">
      
      {/* Background Ambience (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                  <span className="font-mono font-bold">G</span>
                </div>
                GlideX Outsourcing
              </span>
            </Link>
            <p className="text-lg text-slate-400 mb-8 max-w-sm leading-relaxed">
              Empowering forward-thinking businesses with operational infrastructure and world-class virtual units.
            </p>
            
            {/* Social / Tech Links */}
            <div className="flex gap-4">
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Github} href="#" />
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div>
            <h3 className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-widest mb-6">
              Navigation_Module
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services" label="Capabilities" />
              <FooterLink href="/contact" label="Initiate Protocol" />
              <FooterLink href="/blog" label="Intel" />
            </ul>
          </div>

          {/* COLUMN 3: CONTACT DATA */}
          <div>
            <h3 className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-widest mb-6">
              Comms_Channel
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1" />
                <div>
                  <span className="block text-xs text-slate-600 font-mono mb-1">PHONE_LINE</span>
                  <a href="tel:+254768266255" className="text-slate-300 hover:text-white transition-colors font-mono">
                    +254 768 266 255
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1" />
                <div>
                  <span className="block text-xs text-slate-600 font-mono mb-1">SECURE_MAIL</span>
                  <a href="mailto:info@glidexoutsourcing.com" className="text-slate-300 hover:text-white transition-colors font-mono">
                    info@glidexoutsourcing.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1" />
                <div>
                  <span className="block text-xs text-slate-600 font-mono mb-1">HQ_COORDINATES</span>
                  <span className="text-slate-300">Nairobi, Kenya</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © {currentYear} GlideX Outsourcing. All Systems Operational.
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs font-mono text-slate-600 hover:text-cyan-400 transition-colors">
              PRIVACY_POLICY
            </Link>
            <Link href="/terms" className="text-xs font-mono text-slate-600 hover:text-cyan-400 transition-colors">
              TERMS_OF_SERVICE
            </Link>
            
            {/* System Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-500 tracking-wider">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

const FooterLink = ({ href, label }) => (
  <li>
    <Link href={href} className="group flex items-center text-slate-400 hover:text-white transition-colors">
      <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
      <span>{label}</span>
    </Link>
  </li>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);
