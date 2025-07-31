import { Card } from "@/components/ui/card";
import biryani1 from "@/assets/biryani-1.jpg";
import curries from "@/assets/curries.jpg";
import breads from "@/assets/breads.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: biryani1,
      title: "Signature Hyderabadi Biryani",
      description: "Aromatic basmati rice with tender chicken, cooked to perfection"
    },
    {
      image: curries,
      title: "Premium Curry Collection",
      description: "Rich, flavorful curries made with authentic spices"
    },
    {
      image: breads,
      title: "Fresh Tandoor Breads",
      description: "Soft naan and rotis baked fresh in our tandoor"
    },
    {
      image: biryani1,
      title: "Royal Feast",
      description: "Experience the royal dining tradition of Hyderabad"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-gradient-saffron bg-clip-text mb-6">
            Food Gallery
          </h2>
          <p className="text-lg text-foreground/70 font-poppins mb-6">
            A visual feast of our authentic dishes
          </p>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-card hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-playfair font-bold text-saffron mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/90 font-poppins text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Dishes Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-saffron/20">
            <div className="text-3xl mb-2">🍛</div>
            <h3 className="font-poppins font-bold text-saffron text-2xl">15+</h3>
            <p className="text-foreground/70 text-sm">Biryani Varieties</p>
          </Card>
          
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-mint/20">
            <div className="text-3xl mb-2">🥘</div>
            <h3 className="font-poppins font-bold text-mint text-2xl">25+</h3>
            <p className="text-foreground/70 text-sm">Curry Dishes</p>
          </Card>
          
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-spice-orange/20">
            <div className="text-3xl mb-2">🫓</div>
            <h3 className="font-poppins font-bold text-spice-orange text-2xl">8+</h3>
            <p className="text-foreground/70 text-sm">Fresh Breads</p>
          </Card>
          
          <Card className="p-6 text-center bg-card/20 backdrop-blur-sm border-royal/20">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-poppins font-bold text-royal text-2xl">100%</h3>
            <p className="text-foreground/70 text-sm">Halal Certified</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;