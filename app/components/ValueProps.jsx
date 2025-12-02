// LOCATION: glidex-outsourcing/app/components/ValueProps.jsx

import { Reveal } from './Reveal';

export default function ValueProps() {
  const features = [
    { number: '01', title: 'Instant Scalability', desc: 'Expand your team quickly with reliable VAs trained in the tools your business already uses.' },
    { number: '02', title: 'Cost-Efficient Workforce', desc: 'Reduce hiring and operational expenses while gaining access to specialized skills.' },
    { number: '03', title: 'Enhanced Operations', desc: 'Let our team handle repetitive tasks, customer support, admin work, tech support, and back-office processes.' },
  ];

  return (
    <section className="bg-gray-light py-24 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center">
        {features.map((f, i) => (
          // Wrap each card with Reveal, adding a delay for staggered effect
          <Reveal key={i} delay={0.1 + i * 0.2}>
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-500">
              <span className="text-medium-blue font-extrabold text-4xl mb-4 block">{f.number}</span>
              <h3 className="text-dark-teal font-bold text-xl mb-4">{f.title}</h3>
              <p className="text-gray-dark">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
