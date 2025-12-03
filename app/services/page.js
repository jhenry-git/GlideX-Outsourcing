// LOCATION: glidex-outsourcing/app/services/page.js
'use client'; // Required for framer-motion

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Stethoscope, ShoppingBag, ArrowRight } from 'lucide-react'; // Modern icons
import ServicesList from '../components/ServicesList';
import ProcessSection from '../components/ProcessSection';

// Animation variants for smooth entrances
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-light-cyan selection:text-slate-900">
      
      {/* 1. FUTURISTIC HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-medium-blue/30 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            <span className="text-light-cyan font-semibold tracking-widest text-sm uppercase mb-4 block">
              Next-Gen Outsourcing
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Scalable Solutions <br /> For The Digital Age
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Whether you need a single specialist or a full-scale operational unit, 
              we build the infrastructure that powers your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES (Wrapped to blend with dark theme) */}
      <div className="relative z-10 bg-slate-50/5 rounded-t-3xl border-t border-white/10 backdrop-blur-sm">
        <ServicesList />
      </div>

      {/* 3. SPECIALIZED CAMPAIGNS (The section you wanted improved) */}
      <section className="py-24 px-6 relative">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Specialized Campaigns</h2>
            <p className="text-slate-400">Tailored workflows designed for specific industry demands.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Tech VA Campaigns"
              description="Dedicated VAs for SaaS, IT support, technical documentation, and ticketing system management (Zendesk, Salesforce)."
              Icon={Server}
              accentColor="text-cyan-400"
              borderColor="border-cyan-500/30"
            />
            <ServiceCard
              title="Medical Admin Support"
              description="HIPAA/HITECH-aware VAs handling patient scheduling, billing support, insurance verification, and documentation."
              Icon={Stethoscope}
              accentColor="text-blue-400"
              borderColor="border-blue-500/30"
            />
            <ServiceCard
              title="E-commerce Operations"
              description="Inventory management, product listing optimization (Amazon, Shopify), customer service, and returns processing."
              Icon={ShoppingBag}
              accentColor="text-emerald-400"
              borderColor="border-emerald-500/30"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <ProcessSection />
    </div>
  );
}

// MODERNIZED CARD COMPONENT
const ServiceCard = ({ title, description, Icon, accentColor, borderColor }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className={`
      group relative p-8 rounded-2xl 
      bg-slate-800/40 backdrop-blur-md 
      border ${borderColor} hover:border-opacity-100 transition-all duration-300
      hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]
    `}
  >
    {/* Glowing icon container */}
    <div className={`
      w-14 h-14 rounded-xl mb-6 flex items-center justify-center 
      bg-slate-700/50 group-hover:bg-slate-700 transition-colors
      ${accentColor}
    `}>
      <Icon size={28} strokeWidth={1.5} />
    </div>

    <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-light-cyan transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed mb-6">
      {description}
    </p>

    {/* "Learn More" fake link for interactivity */}
    <div className="flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors cursor-pointer">
      Explore Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
    
    {/* Gradient Glow Effect on Hover */}
    <div className={`
      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
      bg-gradient-to-br from-white to-transparent pointer-events-none
    `} />
  </motion.div>
);
