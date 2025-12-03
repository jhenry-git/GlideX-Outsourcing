// LOCATION: glidex-outsourcing/app/components/ServicesList.jsx
'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesList() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    { title: 'Virtual Assistants', desc: 'Reliable general & admin VAs trained for day-to-day operations.' },
    { title: 'Tech Virtual Assistants', desc: 'Support for SaaS tools, CRM tech stacks, automation, and operational workflows.' },
    { title: 'Medical Virtual Assistants', desc: 'Support for clinics, healthcare teams, scheduling, billing, and insurance coordination.' },
    { title: 'Customer Support Teams', desc: '24/7 multi-channel customer support for chat, email, and phone.' },
    // --- HIDDEN INITIALLY ---
    { title: 'Executive Admin Assistants', desc: 'Inbox management, scheduling, travel planning, and full executive support.' },
    { title: 'Real Estate VAs', desc: 'Lead qualification, MLS listing updates, property inquiries, and investor support.' },
    { title: 'Social Media Assistants', desc: 'Content planning, short-form editing, captions, and post scheduling.' },
    { title: 'Lead Gen & Sales Assistants', desc: 'Prospecting, CRM management, outreach, pipeline updates, and reporting.' },
    { title: 'Bookkeeping Assistants', desc: 'Xero/QuickBooks bookkeeping, invoicing, reconciliation, payroll prep, and reporting.' },
    { title: 'HR & Recruitment Assistants', desc: 'CV screening, interview scheduling, ATS updates, onboarding and HR admin tasks.' },
    { title: 'Data Research Assistants', desc: 'Competitor research, data analysis, reporting, and survey management.' },
    { title: 'Automation & AI Assistants', desc: 'Chatbot setup, workflow automations, CRM automations, Zapier/Make integrations.' },
    { title: 'E-commerce Ops Assistants', desc: 'Amazon, Shopify, inventory, listing optimization, fulfillment support, and returns.' },
    { title: 'Property Management VAs', desc: 'Tenant communication, maintenance coordination, rent tracking, and reservations.' },
    { title: 'Travel Concierge Assistants', desc: 'Travel booking, itinerary planning, reservations, and personal admin tasks.' },
  ];

  // Logic to slice the array
  const visibleServices = isExpanded ? services : services.slice(0, 4);

  return (
    <div className="flex flex-col gap-8">
      {/* GRID CONTAINER */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {visibleServices.map((s, i) => (
            <motion.a
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={s.title} // Use title as key for stability
              href={`/services/${encodeURIComponent(s.title.toLowerCase().replace(/ /g, '-'))}`}
              className="group block h-full"
            >
              <div className="h-full p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                
                {/* Subtle Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/5 transition-all duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                      {s.title}
                    </h3>
                    {/* Tech Decorator Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all mt-2" />
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors flex-grow">
                    {s.desc}
                  </p>

                  <div className="flex items-center text-xs font-mono font-medium text-slate-500 group-hover:text-cyan-400 transition-colors mt-auto pt-4 border-t border-slate-700/50">
                    ACCESS_PROTOCOL <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* EXPAND/COLLAPSE TOGGLE BUTTON */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all duration-300"
        >
          <span className="font-mono text-sm font-bold tracking-wider uppercase">
            {isExpanded ? 'Collapse Index' : `View All Services (${services.length})`}
          </span>
          {isExpanded ? (
            <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          ) : (
            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
          )}
          
          {/* Glow Effect behind button */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
        </button>
      </div>
    </div>
  );
}
