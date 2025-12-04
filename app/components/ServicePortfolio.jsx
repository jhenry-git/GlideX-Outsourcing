// LOCATION: glidex-outsourcing/app/components/ServicePortfolio.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicePortfolio() {
  const serviceItems = [
    {
      id: 'tab-1',
      tag: 'AI Automation',
      title: 'Voice AI Agents',
      description: 'Autonomous AI agents for 24/7 inbound customer support, outbound sales qualification, and appointment setting. Zero wait times.',
      link: '/services#ai-voice', // Ensure this ID exists on your services page
      bgImage: '/portfolio/tech-support.jpg' // Use a tech/AI specific image
    },
    {
      id: 'tab-2',
      tag: 'Healthcare',
      title: 'Medical VAs',
      description: 'HIPAA-compliant professionals for insurance verification, patient intake, medical billing, and EHR management.',
      link: '/services#medical',
      bgImage: '/portfolio/medical-va.jpg'
    },
    {
      id: 'tab-3',
      tag: 'Tech Support',
      title: 'IT & Helpdesk',
      description: 'Tier 1 & 2 technical support specialists to handle ticket resolution, troubleshooting, and system administration.',
      link: '/services#tech',
      bgImage: '/portfolio/tech-support.jpg'
    },
    {
      id: 'tab-4',
      tag: 'Administrative',
      title: 'Executive Assistants',
      description: 'Elite admin support for calendar management, email handling, and operational coordination to free up your executive time.',
      link: '/services#admin',
      bgImage: '/portfolio/admin-va.jpg'
    },
  ];

  // Initialize state with the first item's background image
  const [currentBackground, setCurrentBackground] = useState(serviceItems[0].bgImage);

  return (
    <section className="portfolio full-bg min-h-[85vh] relative overflow-hidden flex items-center">
      
      {/* 1. Dynamic Background Layer */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out bg-cover bg-center transform scale-105"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        {/* Dark overlay: Stronger contrast for readability */}
        <div className="absolute inset-0 bg-[#0B1120]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/50"></div>
      </div>

      <div className="container mx-auto relative z-10 px-6 py-12">
        <div className="text-white">
          
          {/* 2. SEO OPTIMIZED HEADING STRUCTURE */}
          <div className="mb-12 max-w-2xl">
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Operational Excellence <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Delivered.
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              From autonomous AI agents to elite human talent, we provide the specific workforce solutions you need to scale.
            </p>
          </div>

          {/* 3. SERVICE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-slate-700">
            {serviceItems.map((item) => (
              <div
                key={item.id}
                className="group relative p-8 flex flex-col justify-between items-start bg-slate-900/40 hover:bg-cyan-900/20 backdrop-blur-sm transition-all duration-500 cursor-pointer border-r border-b border-slate-700 md:border-b-0 last:border-r-0 min-h-[350px] hover:-translate-y-2"
                onMouseEnter={() => setCurrentBackground(item.bgImage)}
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-xs font-mono text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    {item.tag}
                  </span>
                  
                  {/* H3 for SEO Hierarchy (Important!) */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  aria-label={`Learn more about ${item.title}`}
                  className="mt-auto text-cyan-400 font-bold flex items-center text-sm tracking-wide group-hover:text-white transition-colors"
                >
                  EXPLORE SERVICE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* Active Indicator Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
