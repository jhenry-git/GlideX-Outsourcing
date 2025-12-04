// LOCATION: glidex-outsourcing/app/services/page.js
'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Stethoscope, ShoppingBag, ArrowRight, ShieldCheck, Cpu, Phone } from 'lucide-react';
import Link from 'next/link'; // IMPORT LINK FOR SEO NAVIGATION
import ServicesList from '../components/ServicesList';
import ProcessSection from '../components/ProcessSection';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-[#0B1120] min-h-screen text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* BACKGROUND GRID */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 1. HERO SECTION - SEO OPTIMIZED */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            
            {/* Pill Label: Signals Tech + Service */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              AVAILABLE FOR IMMEDIATE DEPLOYMENT
            </div>

            {/* H1: CRITICAL FOR SEO. Targets "AI", "Virtual Assistant", and "Outsourcing" */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              AI-Enhanced <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Virtual Assistant Services
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We provide the perfect hybrid workforce: <strong>Autonomous Voice AI Agents</strong> for instant scalability and <strong>Elite Human VAs</strong> for complex medical, technical, and admin tasks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES */}
      <div className="relative z-10 container mx-auto px-4 mb-24">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden"
         >
            <div className="p-8 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Full-Spectrum Capabilities</h3>
                <p className="text-sm text-slate-400 font-mono">INTEGRATION_LEVEL: 100%</p>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
            </div>

            <div className="p-4 md:p-8">
               <ServicesList />
            </div>
         </motion.div>
      </div>

      {/* 3. SPECIALIZED CAMPAIGNS (The "Meat" of the SEO) */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Outsourcing Solutions</h2>
            <p className="text-lg text-slate-400 max-w-xl">
              From Voice AI to HIPAA-compliant Medical VAs, select the module that fits your growth needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* 1. AI VOICE - WIDE CARD */}
            <div className="md:col-span-2">
              <Link href="/contact" className="h-full block">
                <SpotlightCard
                  title="Autonomous Voice AI"
                  description="Deploy AI agents that handle thousands of simultaneous calls. Perfect for inbound customer support, outbound lead qualification, and appointment setting. Costs 90% less than human agents."
                  Icon={Cpu}
                  accentColor="bg-cyan-500"
                  ctaText="DEPLOY AI AGENTS"
                />
              </Link>
            </div>

            {/* 2. MEDICAL VA */}
            <div className="md:col-span-1">
              <Link href="/contact" className="h-full block">
                <SpotlightCard
                  title="Medical VAs"
                  description="HIPAA-trained staff for patient scheduling, insurance verification, and billing. Reduce practice overheads immediately."
                  Icon={Stethoscope}
                  accentColor="bg-blue-500"
                  ctaText="HIRE MEDICAL STAFF"
                />
              </Link>
            </div>

            {/* 3. TECH SUPPORT */}
            <div className="md:col-span-1">
              <Link href="/contact" className="h-full block">
                <SpotlightCard
                  title="Technical Support"
                  description="Tier 1 & 2 helpdesk support for SaaS companies. Experienced in Zendesk, Jira, and basic system administration."
                  Icon={Server}
                  accentColor="bg-emerald-500"
                  ctaText="GET TECH SUPPORT"
                />
              </Link>
            </div>

             {/* 4. ADMIN & COMPLIANCE - WIDE CARD */}
             <div className="md:col-span-2">
               <Link href="/contact" className="h-full block">
                <SpotlightCard
                  title="Secure Admin Operations"
                  description="Executive assistants and back-office staff trained in data privacy (GDPR). We handle email, travel, and research within secure VPN environments."
                  Icon={ShieldCheck}
                  accentColor="bg-purple-500"
                  ctaText="SECURE YOUR OPS"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <ProcessSection />
      </div>

    </div>
  );
}

// --- SPOTLIGHT CARD COMPONENT ---
const SpotlightCard = ({ title, description, Icon, accentColor, ctaText = "LEARN MORE" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      variants={fadeInUp}
      className="relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 px-8 py-10 transition-colors duration-300 group hover:border-slate-600"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg ${accentColor}`}>
           <Icon size={24} strokeWidth={2} />
        </div>

        {/* H3 Tag for SEO Hierarchy */}
        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{title}</h3>
        <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex items-center text-sm font-mono font-bold text-slate-200 mt-auto">
          <span className="group-hover:text-cyan-400 transition-colors">{ctaText}</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};
