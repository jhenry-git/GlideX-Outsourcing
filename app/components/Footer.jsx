// LOCATION: glidex-outsourcing/app/components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-dark-teal text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Element (Futuristic Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-light-cyan to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRANDING */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-bold text-3xl mb-4 text-white tracking-tight">
                GlideX <span className="text-light-cyan">.</span>
              </h3>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering businesses with world-class Virtual Assistants. 
              Efficiency meets innovation.
            </p>
            {/* Social Placeholders (Futuristic Circles) */}
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-light-cyan hover:text-dark-teal transition-all duration-300 cursor-pointer">
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-light-cyan/30 inline-block pb-1">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Hire a VA', path: '/contact' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-gray-300 hover:text-light-cyan transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-light-cyan mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT (Improved UX) */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-light-cyan/30 inline-block pb-1">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+254768266255" className="text-gray-300 hover:text-white transition-colors">
                  +254 768 266 255
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@glidexoutsourcing.com" className="text-gray-300 hover:text-white transition-colors break-words">
                  info@glidexoutsourcing.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-gray-300">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER (New Feature) */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b-2 border-light-cyan/30 inline-block pb-1">Stay Ahead</h4>
            <p className="text-sm text-gray-400 mb-4">Join our network for the latest automation tips.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-light-cyan focus:bg-white/10 transition-all placeholder-gray-500"
              />
              <button className="bg-medium-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-light-cyan hover:text-dark-teal transition-all duration-300 shadow-lg shadow-medium-blue/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2025 GlideX Outsourcing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-light-cyan transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-light-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
