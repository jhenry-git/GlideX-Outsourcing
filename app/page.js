// LOCATION: glidex-outsourcing/app/page.js

import HeroSlider from './components/HeroSlider';
import ValueProps from './components/ValueProps';
import AboutSection from './components/AboutSection';
import ServicePortfolio from './components/ServicePortfolio'; // ADD THIS LINE
import ServicesList from './components/ServicesList';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueProps />
      <AboutSection />

      {/* ADD THE INTERACTIVE PORTFOLIO SECTION HERE */}
      <ServicePortfolio />

      <ServicesList /> {/* You might remove this later as the portfolio covers services */}
      <ProcessSection />
      <Testimonials />
    </>
  );
}
