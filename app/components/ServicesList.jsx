// LOCATION: glidex-outsourcing/app/components/ServicesList.jsx

export default function ServicesList() {
  const services = [
    { title: 'Virtual Assistants', desc: 'Reliable general & admin VAs trained for day-to-day operations.' },
    { title: 'Tech Virtual Assistants', desc: 'Support for SaaS tools, CRM tech stacks, automation, and operational workflows.' },
    { title: 'Medical Virtual Assistants', desc: 'Support for clinics, healthcare teams, scheduling, billing, and insurance coordination.' },
    { title: 'Customer Support Teams', desc: '24/7 multi-channel customer support for chat, email, and phone.' },

    // NEW SERVICES ADDED
    { title: 'Executive Administrative Assistants', desc: 'Inbox management, scheduling, travel planning, and full executive support.' },
    { title: 'Real Estate Virtual Assistants', desc: 'Lead qualification, MLS listing updates, property inquiries, and investor support.' },
    { title: 'Social Media & Content Assistants', desc: 'Content planning, short-form editing, captions, and post scheduling.' },
    { title: 'Lead Generation & Sales Assistants', desc: 'Prospecting, CRM management, outreach, pipeline updates, and reporting.' },
    { title: 'Bookkeeping & Finance Assistants', desc: 'Xero/QuickBooks bookkeeping, invoicing, reconciliation, payroll prep, and reporting.' },
    { title: 'HR & Recruitment Assistants', desc: 'CV screening, interview scheduling, ATS updates, onboarding and HR admin tasks.' },
    { title: 'Data & Market Research Assistants', desc: 'Competitor research, data analysis, reporting, and survey management.' },
    { title: 'Automation & AI Assistants', desc: 'Chatbot setup, workflow automations, CRM automations, Zapier/Make integrations.' },
    { title: 'E-commerce Operations Assistants', desc: 'Amazon, Shopify, inventory, listing optimization, fulfillment support, and returns.' },
    { title: 'Property Management Assistants', desc: 'Tenant communication, maintenance coordination, rent tracking, and reservations.' },
    { title: 'Travel & Personal Concierge Assistants', desc: 'Travel booking, itinerary planning, reservations, and personal admin tasks.' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-dark-teal mb-4">
          Our VA Service Packages
        </h2>
        <p className="text-gray-dark text-lg">
          Choose the right Virtual Assistance solution for your business needs.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-light-cyan/10 border-t-4 border-medium-blue
                       rounded-lg shadow hover:shadow-lg transition duration-500"
          >
            <h3 className="text-dark-teal font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-dark">{s.desc}</p>
            <a
              href={`/services/${encodeURIComponent(s.title.toLowerCase().replace(/ /g, '-'))}`}
              className="mt-4 inline-block text-medium-blue font-semibold hover:text-dark-teal transition"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
