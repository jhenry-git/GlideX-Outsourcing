// LOCATION: glidex-outsourcing/app/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-dark-teal text-white py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 border-b border-light-cyan/30 pb-8">
        <div>
          <h3 className="font-bold text-2xl mb-2 text-light-cyan">GlideX Outsourcing</h3>
          <p>Empowering Businesses With World-Class Virtual Assistants</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-3">Useful Links</h3>
          <ul>
            <li><a href="/about" className="hover:text-light-cyan">About Us</a></li>
            <li><a href="/services" className="hover:text-light-cyan">Services</a></li>
            <li><a href="/contact" className="hover:text-light-cyan">Hire a VA</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-3">Contact</h3>
          {/* UPDATED PHONE NUMBER */}
          <p>+254768266255</p>
          {/* UPDATED EMAIL ADDRESS */}
          <p>info@glidexoutsourcing.com</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-light-cyan/70">
        © GlideX Outsourcing, 2025. All rights reserved.
      </div>
    </footer>
  );
}
