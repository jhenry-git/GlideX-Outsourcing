// LOCATION: glidex-outsourcing/app/contact/page.js

"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Zap, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

// API CONFIGURATION
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "a752636a-7ef3-4583-8bb1-c589fc023c90";
// ADDED: The specific Calendly link for your strategy calls
const CALENDLY_LINK = "https://calendly.com/glide-xpp/30min";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            setSubmitted(true);
            // Optional: Scroll to top of form area if needed
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setError('Transmission failed. Please retry protocol.');
        }

    } catch (err) {
        setError('Network error detected. Check connection.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0B1120] text-slate-300 py-24 px-6 relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* GLOBAL BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
             CHANNEL_OPEN
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connection</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discuss your operational requirements. Our architecture team is standing by to configure your solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT FORM / SUCCESS STATE */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-500">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            
            {/* --- SUCCESS STATE (CALENDLY PROMPT) --- */}
            {submitted ? (
                <div className="text-center animate-fadeIn py-8">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                        <CheckCircle size={40} />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-2">Transmission Received</h2>
                    <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                        Your operational data has been logged. Our engineers are reviewing your requirements.
                    </p>

                    {/* SEPARATOR LINE */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] bg-slate-800 flex-grow" />
                        <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Phase 2: Synchronization</span>
                        <div className="h-[1px] bg-slate-800 flex-grow" />
                    </div>

                    {/* CALENDLY CTA */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold text-white mb-2">Fast-Track Your Deployment</h3>
                            <p className="text-sm text-slate-400 mb-6">
                                Skip the email queue. Synchronize your calendar with our lead architect immediately.
                            </p>
                            
                            <a
                                href={CALENDLY_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full px-6 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] hover:-translate-y-1"
                            >
                                <Calendar className="mr-2" size={20} />
                                BOOK STRATEGY CALL
                            </a>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
                    </div>

                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-xs font-mono text-slate-500 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors"
                    >
                        Send Another Transmission
                    </button>
                </div>
            ) : (
                /* --- FORM STATE --- */
                <>
                    <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <MessageSquare className="text-cyan-400" size={24} />
                    Send Transmission
                    </h2>
                    
                    {/* PRIORITY BADGE */}
                    <div className="mb-8 mt-4 flex items-center gap-3 bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-lg">
                        <div className="p-1.5 bg-emerald-500/20 rounded-full animate-pulse">
                            <Zap size={16} className="text-emerald-400" fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Priority Response Active</p>
                            <p className="text-emerald-500/80 text-xs font-mono">Estimated Reply Time: &lt; 60 Minutes</p>
                        </div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <input type="hidden" name="access_key" value={ACCESS_KEY} />
                        
                        {error && (
                            <div className="p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm flex items-center gap-2">
                                <AlertCircle size={16} /> {error}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">Identity</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">Comms Link</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Work Email"
                                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">Frequency (Optional)</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">Mission Details</label>
                            <textarea
                                name="message"
                                placeholder="Describe your operational needs..."
                                rows="4"
                                className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600 resize-none"
                                required
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full group relative overflow-hidden bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.02]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? 'UPLOADING...' : 'INITIATE TRANSMISSION'}
                                {!loading && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </span>
                            
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </button>
                    </form>
                </>
            )}
          </div>

          {/* RIGHT COLUMN: DIRECT INFO PANEL */}
          <div className="space-y-6">
            
            {/* Info Card */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl relative">
                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">
                    Direct_Uplink_Data
                </h3>
                
                <div className="space-y-8">
                    {/* Phone */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs font-mono mb-1">VOICE_CHANNEL</p>
                            <p className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">+254 768 266 255</p>
                            <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available Now
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs font-mono mb-1">SECURE_MAIL</p>
                            <p className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">info@glidexoutsourcing.com</p>
                            <p className="text-slate-500 text-sm mt-1">24/7 Monitoring</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs font-mono mb-1">HQ_COORDINATES</p>
                            <p className="text-white font-bold text-lg">Nairobi, Kenya</p>
                            <p className="text-slate-500 text-sm mt-1">GMT+3 Timezone</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links Panel */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6">Network Nodes</h3>
                    <div className="flex gap-4">
                        {['LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="px-5 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/30 text-cyan-400 font-mono text-sm hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all duration-300"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Decorative background blur */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
