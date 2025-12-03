// LOCATION: glidex-outsourcing/app/page.js

import HeroSlider from './components/HeroSlider';
import ValueProps from './components/ValueProps';
import AboutSection from './components/AboutSection';
import ServicePortfolio from './components/ServicePortfolio'; 
import ServicesList from './components/ServicesList';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';

// --- ADD THIS BLOCK FOR GOOGLE SEARCH CONSOLE VERIFICATION ---
// This uses the Next.js App Router Metadata API to inject the <meta> tag into the <head>
export const metadata = {
  verification: {
    google: 'zMPfGe_H5PywegopHJHHfaMI4VNmkIajUn3F0noIKDc', // YOUR UNIQUE VERIFICATION CODE
  },
};
// -----------------------------------------------------------

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
