// LOCATION: glidex-outsourcing/app/about/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Target, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      
      {/* 1. GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full -z-10" />

      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
               OPERATIONAL IDENTITY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">GlideX</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN: NARRATIVE & EXPERTISE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-cyan-400" /> Mission Directive
              </h2>
              
              <div className="prose prose-lg prose-invert text-slate-300 mb-10 leading-relaxed">
                <p className="mb-6">
                  We are not just a staffing agency; we are an operational infrastructure firm. GlideX assembles high-performance units of Virtual Assistants, technical support specialists, and operations professionals designed to integrate seamlessly into modern business architectures.
                </p>
                <p>
                  Our mandate is to deliver assistance powered by technology, ensuring speed, accuracy, and operational excellence. We engineer efficient workflows and deploy skilled virtual talent, allowing organizations to scale their output without increasing their managerial footprint.
                </p>
              </div>

              {/* EXPERTISE GRID */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-4">
                  Core Competencies
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Virtual Admin Protocols",
                    "24/7 Client Success Units",
                    "Technical Operations Support",
                    "HIPAA-Compliant Medical VAs",
                    "Digital Commerce Ops",
                    "Workflow Architecture"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500/70 group-hover:text-cyan-400 transition-colors mt-0.5" />
                      <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: VISUALS & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              
              {/* IMAGE CONTAINER (HOLOGRAPHIC FRAME) */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
                  {/* Grid Overlay on Image */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60 z-10"></div>
                  
                  <Image
                    src="/img/team-of-4.jpg"
                    alt="GlideX Operational Unit"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Tech Badge on Image */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg text-xs font-mono text-cyan-400">
                    <Shield size={12} />
                    <span>ELITE_UNIT_DEPLOYED</span>
                  </div>
                </div>
              </div>

              {/* CALL TO ACTION CARD */}
              <div className="bg-gradient-to-br from-slate-900 to-[#0f172a] border border-cyan-500/20 p-8 rounded-2xl text-center relative overflow-hidden group">
                {/* Background Animation */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                <div className="relative z-10">
                   <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <Zap size={24} fill="currentColor" className="opacity-80" />
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-2">Ready to Scale?</h3>
                   <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                     Experience seamless growth with expert remote talent. Initiate your consultation today.
                   </p>

                   <Link
                     href="/contact"
                     className="inline-flex items-center justify-center w-full px-6 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:-translate-y-1"
                   >
                     DEPLOY TEAM <ArrowRight className="ml-2" size={18} />
                   </Link>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
