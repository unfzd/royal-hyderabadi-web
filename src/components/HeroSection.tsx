import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card/50">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--saffron),0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(var(--royal-purple),0.1)_49%,rgba(var(--royal-purple),0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Elegant Food Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(/lovable-uploads/ab0c0fb8-9f44-4919-8a2f-1f7814aa6436.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Premium Logo */}
        <div className="mb-12 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-royal rounded-full blur-3xl opacity-20 scale-150"></div>
            <img 
              src="/lovable-uploads/79b5061e-fc8a-4ac9-bb2e-4f90dbb714fe.png" 
              alt="IBR - Indian Biryani Restaurant" 
              className="relative mx-auto max-w-80 w-full h-auto drop-shadow-2xl hover:scale-105 transition-all duration-700 filter brightness-110"
            />
          </div>
        </div>

        {/* Premium Title */}
        <div className="mb-16 space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-transparent bg-gradient-royal bg-clip-text leading-tight tracking-tight">
              Menu
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-[2px] bg-gradient-saffron flex-1 max-w-32 rounded-full"></div>
              <div className="text-3xl">✦</div>
              <div className="h-[2px] bg-gradient-saffron flex-1 max-w-32 rounded-full"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-foreground/80 font-poppins max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of <span className="text-saffron font-semibold">authentic Hyderabadi delicacies</span>
            <br />crafted with royal traditions and premium ingredients
          </p>
        </div>

        {/* Premium Features */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-6 rounded-2xl border border-saffron/20 hover:border-saffron/40 transition-all duration-300">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-playfair text-lg font-semibold text-saffron mb-2">Royal Heritage</h3>
            <p className="text-sm text-foreground/70">Authentic recipes passed down through generations</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-mint/20 hover:border-mint/40 transition-all duration-300">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-playfair text-lg font-semibold text-mint mb-2">100% Halal</h3>
            <p className="text-sm text-foreground/70">Certified halal ingredients and preparation</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-spice-orange/20 hover:border-spice-orange/40 transition-all duration-300">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-playfair text-lg font-semibold text-spice-orange mb-2">Newcastle</h3>
            <p className="text-sm text-foreground/70">Premium dining experience in Newcastle</p>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            variant="premium" 
            size="xl" 
            onClick={scrollToMenu}
            className="text-xl font-semibold shadow-2xl hover:shadow-[0_20px_50px_rgba(var(--saffron),0.3)] transition-all duration-500 px-12 py-6"
          >
            <span className="flex items-center gap-3">
              <span>Explore Our Menu</span>
              <span className="text-2xl">→</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;