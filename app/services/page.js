
// LOCATION: glidex-outsourcing/app/services/page.js

import ServicesList from '../components/ServicesList';
import ProcessSection from '../components/ProcessSection';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-12 px-6 bg-medium-blue text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Our Full Range of Outsourcing Services</h1>
        <p className="text-xl">Hire one specialist or build an entire team tailored to your operational needs.</p>
      </section>

      {/* Reusing ServicesList component for the core offerings */}
      <ServicesList />

      <section className="py-16 px-6 bg-gray-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-dark-teal mb-8 text-center">Specialized Campaigns</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Tech VA Campaigns"
              description="Dedicated VAs for SaaS, IT support, technical documentation, and ticketing system management (Zendesk, Salesforce)."
              iconColor="text-dark-teal"
            />
            <ServiceCard
              title="Medical Admin Support"
              description="HIPAA/HITECH-aware VAs handling patient scheduling, billing support, insurance verification, and documentation for clinics."
              iconColor="text-medium-blue"
            />
            <ServiceCard
              title="E-commerce Operations"
              description="VAs specializing in inventory management, product listing optimization (Amazon, Shopify), customer service, and returns processing."
              iconColor="text-light-cyan"
            />
          </div>
        </div>
      </section>

      {/* Reusing ProcessSection component */}
      <ProcessSection />
    </>
  );
}

// Simple internal component to maintain modularity
const ServiceCard = ({ title, description, iconColor }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-light-cyan hover:shadow-xl transition duration-500">
    <div className={`text-4xl mb-4 ${iconColor}`}>[Icon Placeholder]</div>
    <h3 className="text-dark-teal font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-dark">{description}</p>
  </div>
);
