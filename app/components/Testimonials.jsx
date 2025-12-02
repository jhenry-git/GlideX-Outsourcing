// LOCATION: glidex-outsourcing/app/components/Testimonials.jsx

export default function Testimonials() {
  const testimonials = [
    { text: 'GlideX has been a game-changer for our operations. The VA assigned to us is fast, proactive, and incredibly reliable.', author: 'CEO, SaaS Startup' },
    { text: 'Our medical VA from GlideX handles scheduling, patient follow-ups, and documentation flawlessly. Highly recommended.', author: 'Clinic Manager' },
  ];

  // Placeholder for the background image
  const bgImage = '/img/testimonials-bg.jpg';

  return (
    <section
      className="testimonials grid section-padding py-32 relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect equivalent
      }}
    >
      {/* Dark Overlay (data-overlay-dark="9" equivalent) */}
      <div className="absolute inset-0 bg-gray-dark opacity-90"></div>

      <div className="container mx-auto relative z-10">
        <div className="section-head text-center mb-16">
          <h6 className="custom-font text-lg font-semibold text-light-cyan wow fadeInDown" data-wow-delay=".3s">Testimonials</h6>
          <h4 className="text-5xl font-bold text-white mt-2 wow flipInX" data-wow-delay=".5s">What People Say?</h4>
        </div>
        
        <div className="row grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="item wow fadeInUp p-8 bg-white/10 rounded-xl shadow-2xl border-l-4 border-light-cyan" data-wow-delay={`${0.3 + i * 0.2}s`}>
              
              {/* Quote Icon Placeholder (quote-icon equivalent) */}
              <span className="quote-icon text-6xl text-light-cyan opacity-70 block mb-4">“</span>
              
              <div className="cont">
                <p className="text-xl italic mb-6 leading-relaxed playfont">{t.text}</p>
              </div>
              
              <div className="info border-t border-white/20 pt-4">
                <h6 className="text-lg font-semibold">{t.author.split(' ')[0]} <span className="text-light-cyan font-normal">{t.author.substring(t.author.indexOf(' '))}</span></h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
