import { Card } from "@/components/ui/card";

const MenuSection = () => {
  const menuData = {
    biryani: [
      { name: "Chicken 65 Biryani", price: "$19.99", description: "Marinated chicken pieces in spices, served with raita and curry. Rating: 84% (1097 reviews)" },
      { name: "Chicken Biryani", price: "$15.60", description: "Hyderabadi-style basmati rice with saffron, layered with chicken and gravy. Comes with raita and curry. Rating: 85% (149 reviews)" },
      { name: "Bucket Chicken Biryani", price: "$105.00", description: "5L bucket (serves 6-7) with biryani salan, raita, and salad" },
      { name: "Chicken 65 Bucket Biryani", price: "$118.00", description: "5L bucket (serves 6-7) with raita, salad, and salan. Rating: 85% (7 reviews)" },
      { name: "Mutton Biryani", price: "$17.20", description: "Authentic Hyderabadi goat biryani with basmati rice, saffron, and spices. Comes with raita and curry" },
      { name: "Goat Biryani Bucket", price: "$115.00", description: "5L bucket (serves 6-7) with salan and raita. Rating: 100% (5 reviews)" },
      { name: "Paneer Vegetable Biryani", price: "$16.50", description: "Layered biryani with paneer, vegetables, and basmati rice" },
      { name: "Vegetarian Biryani", price: "$14.00", description: "Spiced vegetable biryani with basmati rice. Rating: 83% (224 reviews)" },
      { name: "Bucket Paneer Veg Biryani", price: "$110.00", description: "5L bucket (serves 6-7) with salan and raita" },
    ],
    chicken: [
      { name: "Butter Chicken", price: "$21.99", description: "Tandoori chicken in creamy tomato-cashew gravy. Rating: 86% (454 reviews)" },
      { name: "Chilli Chicken", price: "$16.99", description: "Boneless chicken in pepper, capsicum, and soy sauce. Rating: 68% (156 reviews)" },
      { name: "Chicken Tikka Masala", price: "$19.99", description: "Tandoori chicken in onion-capsicum gravy" },
      { name: "Dum Ka Chicken", price: "$17.99", description: "Slow-cooked Hyderabadi chicken with yogurt and cashews. Rating: 77% (113 reviews)" },
    ],
    goat: [
      { name: "Mutton Curry", price: "$18.99", description: "Goat cooked in tomato-onion gravy. Rating: 67% (100 reviews)" },
      { name: "Mutton Rogan Josh", price: "$18.99", description: "Goat in aromatic tomato-onion gravy. Rating: 76% (17 reviews)" },
      { name: "Mutton Korma", price: "$18.99", description: "Mughlai-style goat curry with nuts and spices" },
    ],
    veg: [
      { name: "Shahi Paneer", price: "$17.99", description: "Paneer in creamy tomato-onion gravy. Rating: 66% (106 reviews)" },
      { name: "Dal Makhani", price: "$15.99", description: "Black lentils cooked with cream. Rating: 78% (132 reviews)" },
      { name: "Palak Paneer", price: "$17.99", description: "Paneer in spinach gravy. Rating: 71% (32 reviews)" },
    ],
    entrees: [
      { name: "Chicken 65", price: "$16.99", description: "Deep-fried spicy chicken with curry leaves. Rating: 83% (220 reviews)" },
      { name: "Tandoori Chicken (Half)", price: "$13.99", description: "Yogurt-marinated roasted chicken. Rating: 60% (20 reviews)" },
      { name: "Chicken Lollipop (6pcs)", price: "$14.39", description: "Spiced tandoori chicken drumsticks. Rating: 67% (102 reviews)" },
      { name: "Paneer 65", price: "$17.99", description: "Spicy fried cottage cheese. Rating: 77% (31 reviews)" },
      { name: "Samosa (4pcs)", price: "$11.99", description: "Spiced potato-filled pastry. Rating: 90% (30 reviews)" },
    ],
    tandoor: [
      { name: "Garlic Naan", price: "$4.50", description: "Tandoor-baked flatbread with garlic. Rating: 89% (480 reviews)" },
      { name: "Butter Naan", price: "$3.99", description: "Classic naan with butter. Rating: 81% (260 reviews)" },
      { name: "Zeera Rice", price: "$6.99", description: "Cumin-flavored basmati rice. Rating: 92% (96 reviews)" },
      { name: "Biryani Masala Rice", price: "$10.99", description: "Spiced biryani rice. Rating: 83% (53 reviews)" },
    ],
    desserts: [
      { name: "Gulab Jamun", price: "$5.99", description: "Milk-solid balls in sugar syrup. Rating: 67% (59 reviews)" },
      { name: "Gajar ka Halwa", price: "$5.99", description: "Carrot pudding with dry fruits" },
      { name: "Badam Kheer", price: "$5.99", description: "Almond milk pudding. Rating: 73% (56 reviews)" },
    ],
    beverages: [
      { name: "Mango Lassi", price: "$4.79", description: "Yogurt-based mango drink" },
      { name: "Coke Classic (375ml)", price: "$2.99", description: "Rating: 96% (50 reviews)" },
      { name: "Bottled Water", price: "$2.50", description: "Pure drinking water" },
    ],
    deals: [
      { name: "Chicken Biryani Deal", price: "$23.50", description: "Includes biryani, dessert, and drink. Rating: 80% (63 reviews)" },
      { name: "Mutton Biryani Deal", price: "$24.50", description: "Includes biryani, dessert, and drink. Rating: 84% (46 reviews)" },
    ],
  };

  const categories = [
    { id: "biryani", label: "Biryani Specials", icon: "🍛" },
    { id: "chicken", label: "Chicken Curries", icon: "🍗" },
    { id: "goat", label: "Mutton Curries", icon: "🍖" },
    { id: "veg", label: "Veg Curries", icon: "🥘" },
    { id: "entrees", label: "Tandoori & Entrées", icon: "🥟" },
    { id: "tandoor", label: "Breads & Rice", icon: "🫓" },
    { id: "desserts", label: "Desserts", icon: "🍮" },
    { id: "beverages", label: "Beverages", icon: "🥤" },
    { id: "deals", label: "Special Deals", icon: "🎯" },
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-gradient-saffron bg-clip-text mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-foreground/70 font-poppins mb-6">
            Discover the authentic flavors of Hyderabad
          </p>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-transparent bg-gradient-saffron bg-clip-text mb-2 flex items-center justify-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  {category.label}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-saffron mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData[category.id as keyof typeof menuData]?.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-poppins font-semibold text-foreground text-lg leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-saffron font-bold text-lg ml-2 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-4 bg-card/20 backdrop-blur-sm border-mint/30">
            <p className="text-mint font-poppins font-semibold">
              🕌 All our dishes are 100% Halal Certified
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;