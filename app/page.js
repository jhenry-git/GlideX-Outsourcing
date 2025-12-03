// LOCATION: glidex-outsourcing/app/page.js

import HeroSlider from './components/HeroSlider';
import ValueProps from './components/ValueProps';
import AboutSection from './components/AboutSection';
import ServicePortfolio from './components/ServicePortfolio'; 
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import Link from 'next/link'; // Needed for the new CTA section

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      
      {/* DESIGN TIP: Alternating backgrounds (White -> Gray -> White) 
         helps break up the content and makes it digestible.
      */}
      
      <ValueProps />
      
      <AboutSection />

      {/* PORTFOLIO: The Visual Core of the site */}
      <ServicePortfolio />

      {/* REMOVED: ServicesList 
         (Redundant because ServicePortfolio covers this visually) 
      */}

      <ProcessSection />
      
      <Testimonials />

      {/* NEW: CTA SECTION (Critical for UX/Conversion) */}
      <section className="bg-gradient-to-br from-dark-teal to-medium-blue py-20 px-6 text-center text-white relative overflow-hidden">
        {/* Abstract shapes for futuristic feel */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-light-cyan opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Join the forward-thinking companies using GlideX to automate workflows and scale efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-light-cyan text-dark-teal font-bold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
