import { Card } from "@/components/ui/card";

type MenuItem = { name: string; price?: string; description?: string };

const MenuSection = () => {
  const menuData: Record<string, MenuItem[]> = {
    biryanis: [
      { name: "Chicken 65 Biryani" },
      { name: "Paneer Vegetable Biryani" },
      { name: "Chicken Biryani" },
      { name: "Vegetarian Biryani" },
      { name: "Mutton (Goat) Biryani" },
    ],
    chickenCurries: [
      { name: "Butter Chicken" },
      { name: "Chicken Tikka Masala" },
      { name: "Dum Ka Chicken" },
      { name: "Chicken Korma White" },
      { name: "Mango Chicken Curry" },
      { name: "Dum Ka Chicken (Whole)" },
      { name: "Chicken Curry" },
      { name: "Chicken Mughlai" },
      { name: "Chicken Afghani" },
      { name: "Chicken Masala" },
      { name: "Palak Chicken (Saag)" },
      { name: "Chicken Madras (Boneless)" },
      { name: "Methi Malai Chicken" },
      { name: "Chicken Handi" },
      { name: "Achari Chicken" },
      { name: "Spicy Green Chicken" },
      { name: "Chicken Jalfrezi" },
    ],
    muttonCurries: [
      { name: "Mutton Curry" },
      { name: "Mutton Jalfrezi" },
      { name: "Mutton Rogan Josh" },
      { name: "Mutton Masala" },
      { name: "Palak Ghost (Goat)" },
      { name: "Achari Mutton" },
      { name: "Spicy Green Mutton (Goat)" },
      { name: "Afghani Mutton" },
      { name: "Mutton (Goat) Mughlai" },
      { name: "Mutton Makhni" },
      { name: "Mutton Vindaloo" },
      { name: "Mutton Korma" },
      { name: "Boneless Mutton Fry (Dry)" },
      { name: "Mutton Handi" },
      { name: "Methi Malai Mutton" },
    ],
    vegetarianCurries: [
      { name: "Dal Makhani" },
      { name: "Shahi Paneer" },
      { name: "Palak Paneer" },
      { name: "Paneer Masala" },
      { name: "Shahi Kaju Paneer Masala" },
      { name: "Paneer Bhuna Masala" },
      { name: "Matar Paneer" },
      { name: "Aloo Bhuna Masala" },
      { name: "Mixed Veggie Curry" },
      { name: "Paneer Tikka Masala" },
      { name: "Hyderabadi Dal" },
      { name: "Butter Paneer" },
      { name: "Aloo Bhindi Masala" },
      { name: "Vegetable Korma" },
      { name: "Dal Makhni with Rice" },
      { name: "Kaju Paneer Masala" },
      { name: "Dal Tadka" },
    ],
    entreesVeg: [
      { name: "Paneer 65" },
      { name: "Samosa with Chutney (4 pcs)" },
      { name: "Chilli Paneer" },
      { name: "Paneer 65 (Tadka)" },
      { name: "Samosa with Chutney (2 pcs)" },
    ],
    entreesNonVeg: [
      { name: "Maryland Tandoori Chicken – Half" },
      { name: "Chicken 65" },
      { name: "Chicken Tikka" },
      { name: "Tandoori Chicken – Half" },
      { name: "Chicken Lollipop (6 pcs)" },
      { name: "Maryland Tandoori Chicken – Full" },
      { name: "Tandoori Chicken – Full" },
      { name: "Chilli Chicken" },
      { name: "Chicken Maryland (1 piece)" },
      { name: "Chicken Malai Tikka" },
      { name: "Chicken Maryland Half" },
      { name: "Chicken Wings Fry" },
    ],
    sideDishes: [
      { name: "Chicken 65 Roll" },
      { name: "Chicken Tikka Roll" },
      { name: "Samosa with Chutney (4 pcs)" },
      { name: "Samosa with Chutney (2 pcs)" },
      { name: "Bucket Vegetable’s Biryani" },
      { name: "Bucket Paneer Veg Biryani" },
      { name: "Chicken 65 Bucket Biryani" },
      { name: "Bucket Chicken Biryani" },
      { name: "Pappadams (3 pcs)" },
      { name: "Hyderabadi Dal with Rice" },
      { name: "Hyderabadi Dal with Zeera Rice" },
      { name: "Rumali Chicken 65 Roll" },
      { name: "Rumali Shawarma Roll" },
    ],
    breads: [
      { name: "Garlic Naan" },
      { name: "Butter Naan" },
      { name: "Plain Naan" },
      { name: "Keema Naan" },
      { name: "Cheese Keema Naan" },
      { name: "Cheese Naan" },
      { name: "Butter Roti (Tandoor)" },
      { name: "Sweet Peshwari Naan" },
      { name: "Cheese & Garlic Naan" },
      { name: "Garlic Butter Roti (Tandoor)" },
      { name: "Rumali Roti" },
    ],
    rice: [
      { name: "Zeera Rice" },
      { name: "Plain Rice" },
      { name: "Cashew Rice" },
    ],
    indoChinese: [
      { name: "Vegetable Manchurian Dry" },
      { name: "Vegetable Manchurian – Gravy" },
      { name: "Chicken Manchurian Dry" },
      { name: "Chicken Manchurian – Gravy" },
    ],
    desserts: [
      { name: "Shahi Tukda" },
      { name: "Gajar Ka Halwa (Carrot)" },
      { name: "IBR Special Pineapple Dessert" },
      { name: "Badam (Almond) Kheer" },
      { name: "Gulab Jamun" },
      { name: "Meetha (Sweet) Paan" },
    ],
  };

  const categories = [
    { id: "biryanis", label: "Biryanis", icon: "🍛" },
    { id: "chickenCurries", label: "Chicken Curries", icon: "🍗" },
    { id: "muttonCurries", label: "Mutton Curries", icon: "🍖" },
    { id: "vegetarianCurries", label: "Vegetarian Curries", icon: "🥗" },
    { id: "entreesVeg", label: "Entrees – Vegetarian", icon: "🥟" },
    { id: "entreesNonVeg", label: "Entrees – Non-Vegetarian", icon: "🍢" },
    { id: "sideDishes", label: "Side Dishes", icon: "🍽️" },
    { id: "breads", label: "Breads", icon: "🫓" },
    { id: "rice", label: "Rice", icon: "🍚" },
    { id: "indoChinese", label: "Indo-Chinese", icon: "🥡" },
    { id: "desserts", label: "Desserts", icon: "🍮" },
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
                    className="relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-[1.02] group"
                  >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 via-transparent to-spice-orange/10 opacity-50"></div>
                    
                    {/* Content */}
                    <div className="relative p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-poppins font-semibold text-foreground text-lg leading-tight">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="bg-gradient-saffron text-background font-bold text-lg px-3 py-1 rounded-full shadow-lg ml-2 flex-shrink-0">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-foreground/70 text-sm font-poppins leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
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