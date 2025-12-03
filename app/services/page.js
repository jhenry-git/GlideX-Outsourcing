// LOCATION: glidex-outsourcing/app/services/page.js
'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Stethoscope, ShoppingBag, ArrowRight } from 'lucide-react'; 
import ServicesList from '../components/ServicesList';
import ProcessSection from '../components/ProcessSection';

// Animation variants
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
    <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-light-cyan selection:text-slate-900">
      
      {/* 1. FUTURISTIC HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Glow - Made Brighter */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            <span className="text-cyan-300 font-bold tracking-widest text-sm uppercase mb-4 block drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Next-Gen Outsourcing
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-lg">
              Scalable Solutions <br /> For The Digital Age
            </h1>
            <p className="text-2xl text-slate-100 max-w-2xl mx-auto mb-8 font-medium">
              Whether you need a single specialist or a full-scale operational unit, 
              we build the infrastructure that powers your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES "LIGHT DECK" 
          This white panel ensures your existing dark-text component is readable.
      */}
      <div className="relative z-10 mx-4 md:mx-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl overflow-hidden">
         <div className="py-12">
            <ServicesList />
         </div>
         {/* Decorative bottom fade to blend back to dark */}
         <div className="h-4 bg-gradient-to-b from-slate-50 to-slate-200"></div>
      </div>

      {/* 3. SPECIALIZED CAMPAIGNS (Dark Theme Returns) */}
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
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">Specialized Campaigns</h2>
            <p className="text-xl text-slate-200">Tailored workflows designed for specific industry demands.</p>
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
              accentColor="text-cyan-300"
              borderColor="border-cyan-400/50"
            />
            <ServiceCard
              title="Medical Admin Support"
              description="HIPAA/HITECH-aware VAs handling patient scheduling, billing support, insurance verification, and documentation."
              Icon={Stethoscope}
              accentColor="text-blue-300"
              borderColor="border-blue-400/50"
            />
            <ServiceCard
              title="E-commerce Operations"
              description="Inventory management, product listing optimization (Amazon, Shopify), customer service, and returns processing."
              Icon={ShoppingBag}
              accentColor="text-emerald-300"
              borderColor="border-emerald-400/50"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <ProcessSection />
    </div>
  );
}

// MODERNIZED CARD COMPONENT (High Contrast Version)
const ServiceCard = ({ title, description, Icon, accentColor, borderColor }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className={`
      group relative p-8 rounded-2xl 
      bg-slate-800/80 backdrop-blur-xl 
      border ${borderColor} hover:border-opacity-100 transition-all duration-300
      shadow-[0_4px_20px_rgba(0,0,0,0.4)]
    `}
  >
    {/* Glowing icon container */}
    <div className={`
      w-14 h-14 rounded-xl mb-6 flex items-center justify-center 
      bg-slate-700/80 group-hover:bg-slate-700 transition-colors
      ${accentColor} ring-1 ring-white/10
    `}>
      <Icon size={28} strokeWidth={2} />
    </div>

    <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-cyan-200 transition-colors tracking-wide">
      {title}
    </h3>
    <p className="text-slate-100 text-lg leading-relaxed mb-6 font-light">
      {description}
    </p>

    {/* "Learn More" fake link */}
    <div className="flex items-center text-sm font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors cursor-pointer uppercase tracking-wider">
      Explore Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
    
    {/* Gradient Glow Effect on Hover */}
    <div className={`
      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
      bg-gradient-to-br from-white to-transparent pointer-events-none
    `} />
  </motion.div>
);
