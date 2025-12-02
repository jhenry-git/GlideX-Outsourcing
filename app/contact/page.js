// LOCATION: glidex-outsourcing/app/contact/page.js

"use client";

import { useState } from 'react';

// NOTE: These constants need to be manually updated if they point to an email service.
// The form will still send the email, but the displayed information here needs updating.
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const CALENDLY_LINK = "https://calendly.com/glide-xpp/30min";
const ACCESS_KEY = "a752636a-7ef3-4583-8bb1-c589fc023c90";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            setSubmitted(true);
            e.target.reset();
        } else {
            setError('Submission failed. Please try again.');
        }

    } catch (err) {
        setError('An unexpected error occurred. Check your network.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-light">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-dark-teal mb-4 text-center">Get in Touch with GlideX</h1>
        <p className="text-xl text-center mb-12">Let's discuss your outsourcing needs and find the perfect VA solution.</p>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-2xl">
          
          {/* Left Column: Contact Form (No changes needed here, only the right column) */}
          <div>
            <h2 className="text-3xl font-semibold text-medium-blue mb-6">Send Us a Message</h2>
            
            {/* Status messages here... */}

            {!submitted && (
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value={ACCESS_KEY} />
                    <input type="text" name="name" placeholder="Your Full Name" className="w-full p-3 border border-gray-300 rounded focus:border-dark-teal focus:ring-1 focus:ring-dark-teal" required />
                    <input type="email" name="email" placeholder="Work Email" className="w-full p-3 border border-gray-300 rounded focus:border-dark-teal focus:ring-1 focus:ring-dark-teal" required />
                    <input type="tel" name="phone" placeholder="Phone Number (Optional)" className="w-full p-3 border border-gray-300 rounded focus:border-dark-teal focus:ring-1 focus:ring-dark-teal" />
                    <textarea name="message" placeholder="Tell us about your VA needs or project details" rows="4" className="w-full p-3 border border-gray-300 rounded focus:border-dark-teal focus:ring-1 focus:ring-dark-teal" required></textarea>
                    
                    <button
                        type="submit"
                        className="w-full bg-dark-teal hover:bg-medium-blue text-white font-semibold py-3 rounded-lg transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                </form>
            )}
          </div>

          {/* Right Column: Direct Information (UPDATED) */}
          <div className="flex flex-col justify-center p-6 bg-light-cyan/20 rounded-lg">
            <h2 className="text-3xl font-semibold text-medium-blue mb-6">Direct Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">📞</span>
                {/* UPDATED PHONE NUMBER */}
                <div><p className="font-bold text-dark-teal">Call Us</p><p>+254768266255</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">📧</span>
                {/* UPDATED EMAIL ADDRESS */}
                <div><p className="font-bold text-dark-teal">Email Us</p><p>info@glidexoutsourcing.com</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">📍</span>
                <div><p className="font-bold text-dark-teal">Location</p><p>Nairobi, Kenya</p></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-medium-blue mt-8 mb-3">Connect</h3>
            <div className="space-x-4">
              <a href="#" className="text-dark-teal hover:text-light-cyan font-semibold">LinkedIn</a>
              <a href="#" className="text-dark-teal hover:text-light-cyan font-semibold">Instagram</a>
              <a href="#" className="text-dark-teal hover:text-light-cyan font-semibold">Facebook</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
