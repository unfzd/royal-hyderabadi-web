import { Card } from "@/components/ui/card";

type MenuItem = { name: string; price?: string; description?: string };

const MenuSection = () => {
  const menuData: Record<string, MenuItem[]> = {
    biryanis: [
      { name: "Chicken 65 Biryani", price: "$24.99" },
      { name: "Paneer Vegetable Biryani", price: "$16.50" },
      { name: "Chicken Biryani", price: "$19.50" },
      { name: "Vegetarian Biryani", price: "$17.50" },
      { name: "Mutton (Goat) Biryani", price: "$17.99" },
    ],
    chickenCurries: [
      { name: "Butter Chicken", price: "$21.99" },
      { name: "Chicken Tikka Masala", price: "$19.99" },
      { name: "Dum Ka Chicken", price: "$17.99" },
      { name: "Chicken Korma White", price: "$17.99" },
      { name: "Mango Chicken Curry", price: "$17.99" },
      { name: "Dum Ka Chicken (Whole)", price: "$17.99" },
      { name: "Chicken Curry", price: "$16.99" },
      { name: "Chicken Mughlai", price: "$17.99" },
      { name: "Chicken Afghani", price: "$18.99" },
      { name: "Chicken Masala", price: "$17.99" },
      { name: "Palak Chicken (Saag)", price: "$16.99" },
      { name: "Chicken Madras (Boneless)", price: "$16.99" },
      { name: "Methi Malai Chicken", price: "$15.99" },
      { name: "Chicken Handi", price: "$19.99" },
      { name: "Achari Chicken", price: "$17.99" },
      { name: "Spicy Green Chicken", price: "$17.99" },
      { name: "Chicken Jalfrezi", price: "$17.99" },
    ],
    muttonCurries: [
      { name: "Mutton Curry", price: "$18.99" },
      { name: "Mutton Jalfrezi", price: "$18.99" },
      { name: "Mutton Rogan Josh", price: "$18.99" },
      { name: "Mutton Masala", price: "$19.99" },
      { name: "Palak Ghost (Goat)", price: "$18.99" },
      { name: "Achari Mutton", price: "$18.99" },
      { name: "Spicy Green Mutton (Goat)", price: "$19.99" },
      { name: "Afghani Mutton", price: "$19.99" },
      { name: "Mutton (Goat) Mughlai", price: "$19.99" },
      { name: "Mutton Makhni", price: "$18.99" },
      { name: "Mutton Vindaloo", price: "$19.99" },
      { name: "Mutton Korma", price: "$19.99" },
      { name: "Boneless Mutton Fry (Dry)", price: "$19.99" },
      { name: "Mutton Handi", price: "$19.99" },
      { name: "Methi Malai Mutton", price: "$19.99" },
    ],
    vegetarianCurries: [
      { name: "Dal Makhani", price: "$16.99" },
      { name: "Shahi Paneer", price: "$17.99" },
      { name: "Palak Paneer", price: "$18.99" },
      { name: "Paneer Masala", price: "$18.99" },
      { name: "Shahi Kaju Paneer Masala", price: "$17.99" },
      { name: "Paneer Bhuna Masala", price: "$17.99" },
      { name: "Matar Paneer", price: "$18.99" },
      { name: "Aloo Bhuna Masala", price: "$15.99" },
      { name: "Mixed Veggie Curry", price: "$17.99" },
      { name: "Paneer Tikka Masala", price: "$18.99" },
      { name: "Hyderabadi Dal", price: "$10.99" },
      { name: "Butter Paneer", price: "$18.99" },
      { name: "Aloo Bhindi Masala", price: "$18.99" },
      { name: "Vegetable Korma", price: "$17.99" },
      { name: "Dal Makhni with Rice", price: "$19.99" },
      { name: "Kaju Paneer Masala", price: "$19.99" },
      { name: "Dal Tadka", price: "$15.99" },
    ],
    entreesVeg: [
      { name: "Paneer 65", price: "$15.99" },
      { name: "Samosa with Chutney (4 pcs)", price: "$11.99" },
      { name: "Chilli Paneer", price: "$15.99" },
      { name: "Paneer 65 (Tadka)", price: "$17.99" },
      { name: "Samosa with Chutney (2 pcs)", price: "$6.99" },
    ],
    entreesNonVeg: [
      { name: "Maryland Tandoori Chicken – Half", price: "$14.99" },
      { name: "Chicken 65", price: "$15.99" },
      { name: "Chicken Tikka", price: "$17.99" },
      { name: "Tandoori Chicken – Half", price: "$15.99" },
      { name: "Chicken Lollipop (6 pcs)", price: "$17.99" },
      { name: "Maryland Tandoori Chicken – Full", price: "$27.99" },
      { name: "Tandoori Chicken – Full", price: "$27.99" },
      { name: "Chilli Chicken", price: "$15.99" },
      { name: "Chicken Maryland (1 piece)", price: "$6.99" },
      { name: "Chicken Malai Tikka", price: "$17.99" },
      { name: "Chicken Maryland Half", price: "$15.99" },
      { name: "Chicken Wings Fry", price: "$17.99" },
    ],
    sideDishes: [
      { name: "Chicken 65 Roll", price: "$12.99" },
      { name: "Chicken Tikka Roll", price: "$13.99" },
      { name: "Samosa with Chutney (4 pcs)", price: "$11.99" },
      { name: "Samosa with Chutney (2 pcs)", price: "$6.99" },
      { name: "Bucket Vegetable’s Biryani", price: "$95.00" },
      { name: "Bucket Paneer Veg Biryani", price: "$110.00" },
      { name: "Chicken 65 Bucket Biryani", price: "$118.00" },
      { name: "Bucket Chicken Biryani", price: "$105.00" },
      { name: "Pappadams (3 pcs)", price: "$1.99" },
      { name: "Hyderabadi Dal with Rice", price: "$15.99" },
      { name: "Hyderabadi Dal with Zeera Rice", price: "$17.99" },
      { name: "Rumali Chicken 65 Roll", price: "$12.99" },
      { name: "Rumali Shawarma Roll", price: "$12.99" },
    ],
    breads: [
      { name: "Garlic Naan", price: "$4.50" },
      { name: "Butter Naan", price: "$3.99" },
      { name: "Plain Naan", price: "$3.50" },
      { name: "Keema Naan", price: "$5.49" },
      { name: "Cheese Keema Naan", price: "$5.99" },
      { name: "Cheese Naan", price: "$5.50" },
      { name: "Butter Roti (Tandoor)", price: "$3.99" },
      { name: "Sweet Peshwari Naan", price: "$4.99" },
      { name: "Cheese & Garlic Naan", price: "$5.99" },
      { name: "Garlic Butter Roti (Tandoor)", price: "$4.49" },
      { name: "Rumali Roti", price: "$2.99" },
    ],
    rice: [
      { name: "Zeera Rice", price: "$6.99" },
      { name: "Plain Rice", price: "$5.99" },
      { name: "Cashew Rice", price: "$9.99" },
    ],
    indoChinese: [
      { name: "Vegetable Manchurian Dry", price: "$18.99" },
      { name: "Vegetable Manchurian – Gravy", price: "$19.99" },
      { name: "Chicken Manchurian Dry", price: "$18.99" },
      { name: "Chicken Manchurian – Gravy", price: "$19.99" },
    ],
    desserts: [
      { name: "Shahi Tukda", price: "$5.99" },
      { name: "Gajar Ka Halwa (Carrot)", price: "$5.99" },
      { name: "IBR Special Pineapple Dessert", price: "$5.99" },
      { name: "Badam (Almond) Kheer", price: "$5.99" },
      { name: "Gulab Jamun", price: "$5.99" },
      { name: "Meetha (Sweet) Paan", price: "$5.99" },
    ],
  };

  const categories = [
    { id: "biryanis", label: "Biryanis", icon: "🍛" },
    { id: "chickenCurries", label: "Chicken Curries", icon: "🍗" },
    { id: "muttonCurries", label: "Mutton Curries", icon: "🍖" },
    { id: "vegetarianCurries", label: "Vegetarian Curries", icon: "🥗" },
    { id: "entreesVeg", label: "Entrees – Vegetarian", icon: "🥟" },
    { id: "entreesNonVeg", label: "Entrees – Non-Vegetarian", icon: "🍢" },
    { id: "sideDishes", label: "Side Dishes & Buckets", icon: "🍽️" },
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