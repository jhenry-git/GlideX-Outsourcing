// LOCATION: glidex-outsourcing/app/components/AboutSection.jsx

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from './Reveal';

export default function AboutSection() {
  return (
    <section className="about section-padding py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* === Left Column: Text & CTA === */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.1}>
              <h6 className="text-lg sub-title text-medium-blue font-semibold mb-2">About Us</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-teal mb-6">About GlideX Outsourcing</h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg mb-6 text-gray-dark">
                We are a team of trained Virtual Assistants, tech support specialists, and operations professionals powering organizations across industries. We build efficient workflows, streamline operations, and provide skilled virtual talent so companies can scale without slowing down.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-8 text-gray-dark">
                <li>Virtual Administrative Support</li>
                <li>Tech Virtual Assistance & IT Support</li>
                <li>Medical Virtual Assistants</li>
                <li>Automation & Workflow Optimization</li>
              </ul>
              <Link
                href="/about"
                className="btn-curve bg-medium-blue hover:bg-dark-teal text-white font-semibold py-3 px-8 text-lg rounded-full transition duration-300 self-start"
              >
                Read More
              </Link>
            </Reveal>
          </div>

          {/* === Right Column: Asymmetrical Image Grid (ab-exp equivalent) === */}
          <div className="relative grid grid-cols-12 grid-rows-6 gap-4 h-[500px] md:h-[600px] lg:h-[700px]">

            {/* Image Placeholder 1 (Top Right) */}
            <Reveal delay={0.2} className="col-span-7 row-span-4 rounded-xl shadow-xl overflow-hidden" >
              <div className="relative w-full h-full">
                {/* Image: Collaboration (ab1.jpg) */}
                <Image
                  src="/img/ab1.jpg"
                  alt="Remote Collaboration and Service Delivery"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Reveal>

            {/* Pattern/Spacing Column (md-4 equivalent) */}
            <Reveal delay={0.4} className="hidden md:block col-span-5 row-span-2 md:row-span-4">
              <div className="h-full bg-gray-light rounded-xl">
                {/* Pattern Placeholder */}
              </div>
            </Reveal>

            {/* Image Placeholder 2 (Bottom Left) */}
            <Reveal delay={0.6} className="col-span-7 row-span-3 rounded-xl shadow-xl overflow-hidden md:row-start-5 md:col-start-1" >
              <div className="relative w-full h-full">
                {/* Image: Data Dashboard (ab2.jpg) */}
                <Image
                  src="/img/ab2.jpg"
                  alt="Data Dashboard and Productivity Metrics"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Reveal>

            {/* Date/Callout Box (years-exp equivalent) */}
            <div className="col-span-5 row-span-3 rounded-xl bg-dark-teal text-white flex items-center justify-center p-6 text-center shadow-xl md:row-start-3 md:col-start-8">
              <div className="exp-text">
                <h2 className="custom-font text-5xl font-extrabold text-light-cyan">2025</h2>
                <h6 className="mt-2 text-lg">Year We Were Founded</h6>
                <Link href="/contact" className="text-sm mt-3 inline-block text-white hover:text-light-cyan underline transition">Contact Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
