// LOCATION: glidex-outsourcing/app/components/HeroSlider.jsx

"use client"; // Required for Swiper compatibility

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  const slides = [
    {
      subtitle: 'Reliable',
      headline: 'Empowering Businesses With World-Class Virtual Assistants',
      description: 'We provide highly trained Virtual Assistants to help businesses scale operations, reduce costs, and increase efficiency.',
      ctaText: 'Hire a VA Today',
      bgImg: '/slid/01.jpg',
    },
    {
      subtitle: 'Tech-Driven',
      headline: 'Next-Generation Outsourcing for the Modern Business',
      description: 'We combine human talent with tech-powered workflows to help you work smarter, faster, and more efficiently.',
      ctaText: 'Explore Our Services',
      bgImg: '/slid/02.jpg',
    },
    {
      subtitle: 'Strategic',
      headline: 'Your Partner in Scaling Teams, Systems & Productivity',
      description: 'From administrative VAs to tech support, customer care, and medical assistance — we’ve got you covered.',
      ctaText: 'Start Today',
      bgImg: '/slid/03.jpg',
    },
  ];

  return (
    <header className="min-h-screen relative overflow-hidden">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '#js-cta-slider-next',
          prevEl: '#js-cta-slider-previous',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative min-h-screen flex items-center justify-center">
            {/* Background Image & Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            >
              {/* FIX: Overlay opacity drastically reduced to opacity-0 for maximum image clarity */}
              <div className="absolute inset-0 bg-dark-teal opacity-0"></div>
            </div>

            {/* Slide Content */}
            <div className="container mx-auto text-center relative z-10 py-24 md:py-0 text-white">
              <div className="max-w-4xl mx-auto">
                
                {/* Subtitle - Added mb-2 for spacing */}
                <h5 className="text-xl custom-font mb-2 uppercase tracking-widest text-light-cyan drop-shadow-md">
                  {slide.subtitle}
                </h5>
                
                {/* Main Headline - Added mb-4 for vertical separation */}
                <h1
                  className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
                  style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
                >
                  {slide.headline}
                </h1>
                
                {/* Description - Added mb-10 for separation from CTA */}
                <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="bg-light-cyan hover:bg-white text-dark-teal font-bold py-3 px-8 text-lg rounded-full shadow-2xl transition duration-500 transform hover:scale-105 inline-block"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="cta__slider-arrows absolute bottom-12 right-12 z-20 hidden lg:block">
          <i id="js-cta-slider-next" className="cta__slider-arrow cta__slider-arrow--next block w-10 h-10 flex items-center justify-center bg-dark-teal hover:bg-light-cyan text-white text-xl cursor-pointer transition mb-2">
            <i className="fas fa-chevron-up"></i>
          </i>
          <i id="js-cta-slider-previous" className="cta__slider-arrow cta__slider-arrow--previous block w-10 h-10 flex items-center justify-center bg-dark-teal hover:bg-light-cyan text-white text-xl cursor-pointer transition">
            <i className="fas fa-chevron-down"></i>
          </i>
        </div>

      </Swiper>
      
      {/* Custom Pagination (Dots) */}
      <div className="swiper-pagination absolute top-1/2 left-4 z-20 flex flex-col space-y-2"></div>
      
    </header>
  );
}
