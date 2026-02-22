import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/rt.jpg',
      title: 'Next Generation',
      subtitle: 'Ring Light Pro',
      description: 'Professional lighting for content creators. Adjustable brightness, color temperature control, and premium build quality.',
      badge: 'Coming Soon',
      price: 'From $299'
    },
    {
      id: 2,
      image: '/ups.jpg',
      title: 'Power Without Limits',
      subtitle: 'UPS Backup System',
      description: 'Uninterruptible power supply for mission-critical setups. Keep your devices running during outages with intelligent battery management.',
      badge: 'Pre-Order',
      price: 'From $449'
    },
    {
      id: 3,
      image: '/cd.jpg',
      title: 'Speed Meets Storage',
      subtitle: 'Premium USB-C Drive',
      description: 'Ultra-fast data transfer with USB 3.2 Gen 2. Compact design, massive capacity, uncompromising performance.',
      badge: 'Launching Soon',
      price: 'From $89'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[90vh] bg-background overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 scale-100'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full scale-95'
                : 'opacity-0 translate-x-full scale-95'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-muted">
              {/* Diagonal Split Design */}
              <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Dark overlay with content */}
                <div className="relative bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 lg:p-16">
                  <div className="max-w-xl space-y-6 animate-slide-in-left">
                    {/* Badge */}
                    <div className="inline-block">
                      <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <h2 className="text-white/70 text-lg lg:text-xl font-light tracking-wide">
                        {slide.title}
                      </h2>
                      <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        {slide.subtitle}
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Price */}
                    <div className="pt-4">
                      <p className="text-2xl lg:text-3xl font-bold text-white">
                        {slide.price}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                      <Button 
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                      >
                        Notify Me
                        <svg 
                          className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </Button>
                      
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-base font-semibold transition-all duration-300 backdrop-blur-sm"
                      >
                        Learn More
                      </Button>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90 text-sm font-medium">Premium Build</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90 text-sm font-medium">2-Year Warranty</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90 text-sm font-medium">Fast Shipping</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90 text-sm font-medium">Expert Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Product Image */}
                <div className="relative bg-linear-to-br from-muted to-background flex items-center justify-center p-8 lg:p-16">
                  <div className="relative animate-zoom-in">
                    {/* Decorative Elements */}
                    <div className="absolute -top-8 -left-8 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-black/5 rounded-full blur-3xl" />
                    
                    {/* Product Image Container */}
                    <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-500">
                      <img 
                        src={slide.image} 
                        alt={slide.subtitle}
                        className="w-full h-auto max-w-md object-contain"
                      />
                      
                      {/* Slide Number Badge */}
                      <div className="absolute top-4 right-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
                      <div className="w-48 h-1 bg-black/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-black rounded-full transition-all duration-300"
                          style={{ 
                            width: currentSlide === index ? '100%' : '0%',
                            transition: currentSlide === index ? 'width 5s linear' : 'width 0.3s'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6 transition-transform group-hover:-translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-black'
                : 'w-3 h-3 bg-black/30 hover:bg-black/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 text-sm font-medium flex items-center gap-2"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default HeroSlider;