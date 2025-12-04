// LOCATION: glidex-outsourcing/app/page.js
import React from 'react';
import { ArrowRight, Users, TrendingUp, Cpu, CheckCircle, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import ServicePortfolio from './components/ServicePortfolio';
import ProcessSection from './components/ProcessSection';

export default function HomePage() {
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

      {/* 2. HERO SECTION - BPO FOCUSED (Trust & Talent First) */}
      <section className="relative pt-40 pb-24 px-6 z-10 text-center flex flex-col items-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-5xl relative">
          
          {/* Badge: "BPO 2.0" positioning */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            NEXT-GEN OUTSOURCING: TALENT + AI
          </div>

          {/* H1: Leads with VAs (The Core), followed by the AI (The Sauce) */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white drop-shadow-2xl leading-tight">
            Elite Virtual Assistants. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Supercharged by AI.
            </span>
          </h1>
          
          {/* Subtext: Focuses on "Human Reliability" first, then "AI Speed" */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We are a premium BPO providing top 1% <strong>Medical, Legal, & Admin VAs</strong>.
            Unlike traditional agencies, our teams come integrated with <strong>Autonomous Voice AI</strong> to handle calls and automate workflows instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-20">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-cyan-500 text-slate-900 font-bold text-lg rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]"
            >
              <span className="relative z-10 flex items-center">
                Hire Your Team <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/services"
              className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-white font-semibold text-lg rounded-full hover:bg-slate-800 hover:border-slate-500 transition-all backdrop-blur-md"
            >
              See Our Talent
            </Link>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED PARTNERS */}
      <div className="relative z-10 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-slate-500 text-sm font-mono tracking-widest uppercase">
            Scalable Workforce Solutions For Modern Business
          </p>
        </div>
      </div>

      {/* 4. VALUE PROPOSITION - "Why Us?" (The BPO + AI Argument) */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why GlideX is Different</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We offer the reliability of a traditional BPO with the speed of modern AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1: The Human Element (Primary BPO Need) */}
            <FeatureCard
              icon={Users}
              title="Top 1% Human Talent"
              desc="We don't just hire anyone. Our rigorous vetting process ensures you get fluent, degree-qualified professionals for specialized roles."
              color="text-cyan-400"
            />
            
            {/* CARD 2: The Business Value (Cost) */}
            <FeatureCard
              icon={TrendingUp}
              title="70% Cost Reduction"
              desc="Scale your operations without the overhead. Get senior-level output for a fraction of the cost of local hiring."
              color="text-green-400"
            />

            {/* CARD 3: The 'Secret Sauce' (AI) */}
            <FeatureCard
              icon={Cpu}
              title="AI-Integrated Workflow"
              desc="Your VAs come equipped with autonomous Voice Agents and automation tools to handle repetitive tasks 10x faster."
              color="text-purple-400"
            />
          </div>
        </div>
      </section>

      {/* 5. SERVICE PORTFOLIO */}
      <ServicePortfolio />

      {/* 6. MISSION DIRECTIVE - Balancing Empathy (VA) & Efficiency (AI) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
              <div className="text-cyan-400 font-mono text-sm mb-4">THE GLIDEX STANDARD</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Remote Team, <br /> Built for the Future.
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Traditional outsourcing is slow. Pure AI is impersonal. <br/><br/>
                <strong>We combine both.</strong> Our Virtual Assistants provide the critical human touch and complex problem solving, while our AI agents handle the high-volume grunt work.
              </p>
              <ul className="space-y-4 mb-8">
                {['Dedicated Medical & Tech VAs', '24/7 Inbound/Outbound AI Agents', 'Seamless CRM Integration'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <CheckCircle className="text-cyan-500 mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center group">
                How We Vet Talent <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
           
           {/* IMAGE SECTION */}
           <div className="relative h-[400px] w-full rounded-2xl border border-slate-700 p-1 overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900/30 z-10 mix-blend-multiply" />
              
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                 <Image
                    src="/slid/03.jpg"
                    alt="Professional GlideX Virtual Assistant"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <ProcessSection />

      {/* 8. FINAL CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-[#0B1120]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-cyan-900/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Scale Your Business Today
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Hire dedicated <strong>Virtual Assistants</strong> backed by the power of <strong>Autonomous AI</strong>.
          </p>
          
          <div className="flex justify-center">
             <Link
               href="/contact"
               className="px-10 py-5 bg-white text-slate-900 font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]"
             >
               Book Strategy Call
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
