
// LOCATION: glidex-outsourcing/app/components/ServicesList.jsx

export default function ServicesList() {
  const services = [
    { title: 'Virtual Assistants', desc: 'Reliable general & admin VAs trained for day-to-day operations.' },
    { title: 'Tech Virtual Assistants', desc: 'Support for SaaS tools, CRM, ticketing systems, and technical operations.' },
    { title: 'Medical Virtual Assistants', desc: 'Support for clinics, private practices, and healthcare teams.' },
    { title: 'Customer Support Teams', desc: '24/7 multi-channel customer support for your business.' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-dark-teal mb-4">Our VA Service Packages</h2>
        <p className="text-gray-dark text-lg">Choose the right Virtual Assistance solution for your business needs.</p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-light-cyan/10 border-t-4 border-medium-blue rounded-lg shadow hover:shadow-lg transition duration-500">
            <h3 className="text-dark-teal font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-dark">{s.desc}</p>
            <a href="/services" className="mt-4 inline-block text-medium-blue font-semibold hover:text-dark-teal transition">View Details →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
