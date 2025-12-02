
// LOCATION: glidex-outsourcing/app/components/ServicePortfolio.jsx

"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ServicePortfolio() {
  const serviceItems = [
    {
      id: 'tab-1',
      tag: 'VA Services',
      title: 'General Administrative Support',
      link: '/services#admin',
      bgImage: '/portfolio/admin-va.jpg' // Placeholder 1
    },
    {
      id: 'tab-2',
      tag: 'Tech Outsourcing',
      title: 'Technical & IT Virtual Assistance',
      link: '/services#tech',
      bgImage: '/portfolio/tech-support.jpg' // Placeholder 2
    },
    {
      id: 'tab-3',
      tag: 'Specialized Campaigns',
      title: 'Medical VA / E-commerce Operations',
      link: '/services#special',
      bgImage: '/portfolio/medical-va.jpg' // Placeholder 3
    },
  ];

  // Initialize state with the first item's background image
  const [currentBackground, setCurrentBackground] = useState(serviceItems[0].bgImage);

  return (
    <section className="portfolio full-bg min-h-[80vh] relative overflow-hidden">
      
      {/* Dynamic Background Image Layer (glry-img equivalent) */}
      <div
        className="glry-img absolute inset-0 transition-opacity duration-700 ease-in-out bg-cover bg-center"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gray-dark opacity-50"></div>
      </div>

      <div className="container-fluid relative z-10 h-full">
        <div className="row flex flex-col md:flex-row h-full">
          
          {serviceItems.map((item) => (
            // Service Item Column (cluom equivalent)
            <div
              key={item.id}
              className="w-full md:w-1/3 p-6 flex flex-col justify-center items-start text-white bg-dark-teal/70 md:bg-transparent md:hover:bg-dark-teal/10 transition-colors duration-300 cursor-pointer border-b border-light-cyan/30 last:border-b-0"
              onMouseEnter={() => setCurrentBackground(item.bgImage)}
              // Optional: On desktop, reset to the first image when mouse leaves the list area
              // onMouseLeave={() => setCurrentBackground(serviceItems[0].bgImage)}
            >
              <div className="info p-4">
                <h6 className="custom-font text-light-cyan mb-1">{item.tag}</h6>
                <h5 className="text-3xl font-bold">{item.title}</h5>
              </div>
              <div className="more mt-4 p-4">
                <Link href={item.link} className="text-medium-blue hover:text-light-cyan font-semibold flex items-center transition">
                  View Details
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
