import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-background overflow-hidden flex items-center z-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-muted">
        {/* Geometric Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-20 h-20 lg:w-96 lg:h-96 bg-black/5 rounded-full blur-xl lg:3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-10 h-10 lg:w-96 lg:h-96 bg-black/5 rounded-full blur-xl lg:3xl animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-1 animate-slide-up">
            {/* Eyebrow Text */}
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-black/60 animate-fade-in">
                Premium Tech Accessories
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-up-delayed">
              <span className="block text-black">Power Your</span>
              <span className="block text-black mt-2">Digital Life</span>
              <span className="block text-black/40 text-2xl lg:text-4xl mt-2 font-light">
                with Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-black/70 max-w-xl leading-relaxed animate-fade-in-delayed">
              Discover premium laptop accessories, chargers, and tech essentials 
              designed for professionals who demand reliability and performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up-extra-delayed">
              <Button 
                size="sm"
                className="bg-black text-white hover:bg-black/90 px-4 py-2 lg:px-8 lg:py-6  text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Shop Now
                <svg 
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button 
                size="sm"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 lg:px-8 lg:py-6 text-base font-semibold transition-all duration-300"
              >
                View Collections
              </Button>
            </div>
            
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative lg:h-150 animate-fade-in-delayed">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Decorative Circle */}
              <div className="absolute w-96 h-96 border-2 border-black/10 rounded-full animate-pulse-slow" />
              <div className="absolute w-80 h-80 border border-black/5 rounded-full animate-pulse-slower" />
              
              {/* Main Product Image */}
              <div className="relative z-10 animate-float-gentle">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lct.jpg" 
                    alt="Premium Laptop Charger" 
                    className="w-full h-auto max-w-md object-contain"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-black text-white px-6 py-3 rounded-full opacity-65 shadow-lg animate-bounce-gentle">
                    <span className="text-sm font-bold ">Premium Quality</span>
                  </div>
                </div>
              </div>

              {/* Floating Product Cards */}
              <div className="absolute top-8 -left-8 bg-white rounded-xl hadow-xl p-4 animate-float-card hidden lg:block">
                <div className="flex items-center gap-3">
                  <img src="/rng.jpg" alt="ring-lights"  className="w-12 h-12 bg-muted rounded-lg" />
                  <div>
                    <p className="text-xs font-semibold text-black">Ring Lights</p>
                    <p className="text-xs text-black/60">From $120</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 -right-8 bg-white rounded-xl shadow-xl p-4 animate-float-card-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <img src="/usb.jpg" alt="drive" className="w-12 h-12 rounded-lg" />
                  <div>
                    <p className="text-xs font-semibold text-black">USB Drives</p>
                    <p className="text-xs text-black/60">From $90</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;