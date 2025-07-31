import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-gradient-saffron bg-clip-text mb-6">
            About IBR
          </h2>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-card">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-poppins">
                At <span className="text-saffron font-semibold">IBR</span>, we bring you the rich, royal flavors of Hyderabad right to Sydney and Newcastle. With <span className="text-mint font-semibold">100% Halal-certified</span> dishes, our chefs combine tradition, authenticity, and premium taste.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-mint/20 hover:border-mint/40 transition-all duration-300 hover:shadow-glow">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-poppins font-semibold text-saffron mb-2">Premium Quality</h3>
                  <p className="text-sm text-foreground/70">Finest ingredients and authentic recipes</p>
                </div>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border-mint/20 hover:border-mint/40 transition-all duration-300 hover:shadow-glow">
                <div className="text-center">
                  <div className="text-3xl mb-2">🕌</div>
                  <h3 className="font-poppins font-semibold text-saffron mb-2">Halal Certified</h3>
                  <p className="text-sm text-foreground/70">100% Halal ingredients and preparation</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats & Features */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-royal text-foreground shadow-card">
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold mb-4">Serving Since</h3>
                <div className="text-6xl font-bold text-saffron mb-2">2019</div>
                <p className="text-foreground/80 font-poppins">Years of authentic flavors</p>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-saffron/20 hover:border-saffron/40 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">🍛</div>
                  <h4 className="font-poppins font-semibold text-saffron text-sm">Signature Biryani</h4>
                </div>
              </Card>

              <Card className="p-6 bg-card/30 backdrop-blur-sm border-saffron/20 hover:border-saffron/40 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">👨‍🍳</div>
                  <h4 className="font-poppins font-semibold text-saffron text-sm">Expert Chefs</h4>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-mint/20">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center">
                  <span className="text-background font-bold text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-mint">Fresh Daily</h4>
                  <p className="text-sm text-foreground/70">Made fresh every day with love</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;