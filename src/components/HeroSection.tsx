import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(/lovable-uploads/ab0c0fb8-9f44-4919-8a2f-1f7814aa6436.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/79b5061e-fc8a-4ac9-bb2e-4f90dbb714fe.png" 
            alt="IBR - Indian Biryani Restaurant Logo" 
            className="mx-auto max-w-64 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Tagline */}
        <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-transparent bg-gradient-royal bg-clip-text leading-tight">
            Authentic Hyderabadi Cuisine
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gradient-saffron flex-1 max-w-24"></div>
            <span className="text-2xl">👑</span>
            <div className="h-px bg-gradient-saffron flex-1 max-w-24"></div>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 font-poppins max-w-2xl mx-auto">
            Experience the royal flavors of Hyderabad with our 100% Halal certified dishes, 
            served with tradition and passion since 2019
          </p>
        </div>

        {/* Locations */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl font-poppins font-medium text-saffron">
            📍 Newcastle
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            variant="premium" 
            size="xl" 
            onClick={scrollToMenu}
            className="text-xl font-semibold shadow-2xl"
          >
            View Our Menu
          </Button>
        </div>

        {/* Halal Badge */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-mint/30 rounded-full px-6 py-3 shadow-card">
            <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-sm">✓</span>
            </div>
            <span className="text-mint font-poppins font-semibold">100% Halal Certified</span>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-saffron rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-mint rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-spice-orange rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;