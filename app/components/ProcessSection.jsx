// LOCATION: glidex-outsourcing/app/components/ProcessSection.jsx

import { Reveal } from './Reveal';

export default function ProcessSection() {
  const steps = [
    { number: '01', title: 'Assessment', desc: 'We analyze your workflow, needs, and VA role requirements.' },
    { number: '02', title: 'Match & Design', desc: 'We match you with qualified VAs and design a working plan for onboarding.' },
    { number: '03', title: 'Deliver', desc: 'Your VA begins work with continuous support, monitoring, and optimization.' },
  ];

  return (
    <section className="process section-padding py-32 bg-gray-light px-6">
      <div className="container mx-auto text-center mb-16">
        {/* Animate Headings */}
        <Reveal variants="fadeIn">
          <h6 className="custom-font text-lg text-medium-blue font-semibold mb-2">How We Do It</h6>
        </Reveal>
        <Reveal delay={0.3}>
          <h4 className="text-5xl font-bold text-dark-teal mt-2">Our Outsourcing Process</h4>
        </Reveal>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 gap-12">
        {steps.map((s, i) => (
          // Animate Step Cards
          <Reveal key={i} delay={0.1 + i * 0.2}>
            <div className="item bg-white p-10 rounded-xl shadow-xl border-b-8 border-medium-blue hover:border-dark-teal transition duration-500 text-center">
              <div className="numb custom-font text-6xl font-extrabold text-light-cyan mb-6">{s.number}</div>
              <div className="cont">
                <h6 className="mb-4 text-2xl font-bold text-dark-teal">{s.title}</h6>
                <p className="text-gray-dark">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
