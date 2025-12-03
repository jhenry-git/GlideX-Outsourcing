// LOCATION: glidex-outsourcing/app/page.js
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// IMPORT YOUR UPGRADED COMPONENTS
import ServicePortfolio from './components/ServicePortfolio';
import ProcessSection from './components/ProcessSection';

// --- SLIDER DATA ---
const HERO_SLIDES = [
  {
    id: 1,
    badge: 'SYSTEM ARCHITECTURE: V2.0 LIVE',
    title: 'Empowering Businesses',
    highlight: 'With Worldclass VAs',
    desc: 'GlideX isn\'t just outsourcing. It\'s remote operational architecture. We build dedicated, tech-enabled support units that integrate directly into your stack.',
    color: 'from-cyan-400 via-blue-500 to-purple-600'
  },
  {
    id: 2,
    badge: 'OPTIMIZATION_LEVEL: MAX',
    title: 'Cut Overheads',
    highlight: 'Not Capability',
    desc: 'Reduce operational costs by up to 70% without sacrificing quality. Deploy elite talent from Kenya that operates in your timezone and speaks your language.',
    color: 'from-emerald-400 via-green-500 to-teal-600'
  },
  {
    id: 3,
    badge: 'TECH_INTEGRATION: ACTIVE',
    title: 'Plug & Play',
    highlight: 'Tech Integration',
    desc: 'Stop training form zero. Our VAs come pre-equipped with knowledge of modern SaaS tools (Slack, Jira, HubSpot) to hit the ground running.',
    color: 'from-orange-400 via-amber-500 to-red-600'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0B1120] min-h-screen text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* 1. GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div
           className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
        />
      </div>

      {/* 2. SLIDING HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 z-10 min-h-[90vh] flex flex-col justify-center items-center">
        {/* Background Glows (Static Base) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto text-center max-w-5xl h-[400px] flex flex-col justify-center relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {HERO_SLIDES[currentSlide].badge}
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white drop-shadow-2xl">
                {HERO_SLIDES[currentSlide].title} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${HERO_SLIDES[currentSlide].color}`}>
                  {HERO_SLIDES[currentSlide].highlight}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                {HERO_SLIDES[currentSlide].desc}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Static CTA Buttons (Always Visible) */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8 relative z-20">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-cyan-500 text-slate-900 font-bold text-lg rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]"
            >
              <span className="relative z-10 flex items-center">
                Deploy Your Team <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/services"
              className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-white font-semibold text-lg rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all backdrop-blur-md"
            >
              View Capabilities
            </Link>
          </div>

        </div>

        {/* Slider Indicators (Dots) */}
        <div className="flex gap-3 mt-16">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

      </section>

      {/* 3. TRUSTED PARTNERS */}
      <div className="relative z-10 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-slate-500 text-sm font-mono mb-6 uppercase tracking-widest">
            Powering Operations For
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold text-white">TECH_CORP</span>
             <span className="text-xl font-bold text-white">NEXUS_HEALTH</span>
             <span className="text-xl font-bold text-white">VELOCITY_RE</span>
             <span className="text-xl font-bold text-white">GLOBAL_LOGISTICS</span>
          </div>
        </div>
      </div>

      {/* 4. VALUE PROPOSITION */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose GlideX?</h2>
            <p className="text-slate-400">Standard outsourcing is broken. We engineered a better way.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Rapid Deployment"
              desc="Forget months of hiring. We deploy pre-vetted, trained specialist units in as little as 48 hours."
              color="text-yellow-400"
            />
            <FeatureCard
              icon={Cpu}
              title="Tech-Integrated"
              desc="Our VAs aren't just admins; they are trained on modern stacks (Slack, Notion, HubSpot, Jira) before they join you."
              color="text-cyan-400"
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              desc="Full data compliance, NDA protection, and secure VPN environments for every operational unit."
              color="text-purple-400"
            />
          </div>
        </div>
      </section>

      {/* 5. SERVICE PORTFOLIO */}
      <ServicePortfolio />

      {/* 6. MISSION DIRECTIVE */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
              <div className="text-cyan-400 font-mono text-sm mb-4">MISSION_DIRECTIVE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Bridging The Gap Between <br /> Talent & Technology
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                The world doesn't need more "cheap labor." It needs efficient, intelligent workflows. 
                GlideX operates at the intersection of human empathy and digital efficiency.
              </p>
              <ul className="space-y-4 mb-8">
                {['Top 1% Talent Scoping', 'AI-Augmented Workflows', '24/7 Operational Uptime'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <CheckCircle className="text-cyan-500 mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center group">
                Read Full Manifesto <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
           
           <div className="relative h-[400px] bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-1">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="h-full w-full rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden relative">
                 <Globe size={200} className="text-slate-800 animate-pulse" strokeWidth={0.5} />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
           </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <ProcessSection />

      {/* 8. FINAL CTA (FAQs REMOVED) */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#0B1120]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-cyan-900/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready To Scale?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Initiate your transformation today. Book a strategy session to define your operational requirements.
          </p>
          
          <div className="flex justify-center">
             <Link
               href="/contact"
               className="px-10 py-5 bg-white text-slate-900 font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]"
             >
               Start Assessment
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENT: Feature Card ---
const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors group">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-slate-900 border border-slate-700 group-hover:border-slate-500 transition-all ${color}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);
