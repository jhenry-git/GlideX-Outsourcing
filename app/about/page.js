// LOCATION: glidex-outsourcing/app/about/page.js

// Import the Image component from Next.js
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-dark-teal mb-8">About GlideX Outsourcing</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Main Description */}
          <div>
            <p className="text-xl mb-6 text-gray-dark">
              We are a team of highly trained Virtual Assistants, tech support specialists, and operations professionals powering organizations across industries.
            </p>
            <p className="mb-6">
              Our mission is to deliver **virtual assistance powered by tech**, ensuring speed, accuracy, and operational excellence. We build efficient workflows, streamline operations, and provide skilled virtual talent so companies can scale without slowing down.
            </p>

            <h2 className="text-3xl font-semibold text-medium-blue mt-8 mb-4">Our Expertise</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Virtual Administrative Support</li>
              <li>Customer Support Outsourcing (24/7)</li>
              <li>Tech Support & IT Virtual Assistance</li>
              <li>Medical Virtual Assistants (HIPAA-aware)</li>
              <li>E-commerce & Operations Support</li>
              <li>Automation & Workflow Optimization</li>
            </ul>
          </div>

          {/* Right Column: Image/CTA */}
          <div className="p-8 bg-gray-light rounded-lg shadow-inner flex flex-col justify-center items-center text-center">
            <h3 className="text-dark-teal text-2xl font-bold mb-4">Ready to Scale?</h3>
            <p className="mb-6">See how seamless scaling can be with expert remote talent.</p>
            
            {/* FIX: Replaced placeholder with Next.js Image component */}
            <div className="h-64 w-full relative rounded mb-6 overflow-hidden">
                <Image
                    src="/img/team-of-4.jpg"
                    alt="GlideX Team of 4 Professionals"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <Link href="/contact" className="bg-medium-blue hover:bg-dark-teal text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Get a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
