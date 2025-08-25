import { Card } from "@/components/ui/card";
import biryani1 from "@/assets/biryani-1.jpg";
import curries from "@/assets/curries.jpg";
import breads from "@/assets/breads.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/84640201-04a2-4a12-9756-90d081349ce3.png",
      title: "Authentic Indian Feast",
      description: "Variety of curries, tandoori items, and rice dishes"
    },
    {
      image: "/lovable-uploads/c725d769-106b-443c-bc38-e4a1a045a467.png",
      title: "Hyderabadi Chicken Biryani",
      description: "Fragrant basmati rice layered with tender marinated chicken"
    },
    {
      image: "/lovable-uploads/b4d9b760-c29e-4774-a1c1-66a0f5bab5d1.png",
      title: "Butter Chicken Special",
      description: "Creamy tomato-based curry with succulent chicken pieces"
    },
    {
      image: "/lovable-uploads/9a4b56e1-bd06-430d-84a2-8b01835d2352.png",
      title: "Chicken 65 Biryani",
      description: "Spicy Chicken 65 layered with aromatic saffron rice"
    },
    {
      image: "/lovable-uploads/138b062e-894a-48ee-bdcd-6137e0867d07.png",
      title: "Famous Chicken 65",
      description: "Deep-fried boneless chicken in tangy South Indian spices"
    },
    {
      image: "/lovable-uploads/791af72a-8185-4d43-b989-c2ccb55c83ed.png",
      title: "Tandoori Chicken",
      description: "Clay oven roasted chicken with smoky flavors and spices"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
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
              className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-card hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.06}s` }}>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in">
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