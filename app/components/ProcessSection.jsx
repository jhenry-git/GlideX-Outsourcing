// LOCATION: glidex-outsourcing/app/components/ProcessSection.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Users, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Assessment Protocol',
    subtitle: 'Requirements Analysis',
    desc: 'We analyze your current workflow architecture, identify bottlenecks, and define the exact technical specs for your VA unit.',
    icon: FileSearch,
  },
  {
    id: '02',
    title: 'Match & Configure',
    subtitle: 'Talent Allocation',
    desc: 'We source candidates from our pre-vetted pool and configure their onboarding plan to align with your software stack.',
    icon: Users,
  },
  {
    id: '03',
    title: 'Deploy & Optimize',
    subtitle: 'Live Operations',
    desc: 'Your unit goes live. We maintain a continuous feedback loop to optimize performance and scale support as needed.',
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-cyan-900/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="py-1 px-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              Workflow_Sequence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Execution Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From analysis to active deployment in three synchronized stages.
          </motion.p>
        </div>

        {/* CONNECTING LINE (Desktop Only) */}
        <div className="hidden md:block absolute top-[55%] left-0 w-full h-[2px] bg-slate-800 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-full h-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

const ProcessCard = ({ step, index }) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      {/* Card Body */}
      <div className="h-full p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-500">
        
        {/* Floating Number Background */}
        <div className="absolute top-4 right-6 text-6xl font-black text-slate-800/50 select-none pointer-events-none group-hover:text-cyan-900/20 transition-colors">
          {step.id}
        </div>

        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
          <Icon className="text-cyan-400" size={28} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <span className="block text-xs font-mono text-cyan-500 mb-2 tracking-wider uppercase">
            {step.subtitle}
          </span>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
            {step.title}
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            {step.desc}
          </p>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Mobile Connector (Arrow Down) */}
      <div className="md:hidden flex justify-center py-4">
        {index < 2 && <ChevronRight className="rotate-90 text-slate-700" />}
      </div>
    </motion.div>
  );
};
