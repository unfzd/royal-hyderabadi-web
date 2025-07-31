import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuSection = () => {
  const menuData = {
    entrees: [
      { name: "Samosa (2 pieces)", price: "$8.90", description: "Crispy pastry filled with spiced potatoes and peas" },
      { name: "Chicken Tikka", price: "$14.90", description: "Tender chicken marinated in yogurt and spices, grilled to perfection" },
      { name: "Seekh Kebab", price: "$13.90", description: "Minced meat seasoned with herbs and spices, cooked on skewers" },
      { name: "Paneer Tikka", price: "$12.90", description: "Marinated cottage cheese cubes grilled with capsicum and onions" },
    ],
    chicken: [
      { name: "Butter Chicken", price: "$18.90", description: "Creamy tomato-based curry with tender chicken pieces" },
      { name: "Chicken Curry", price: "$17.90", description: "Traditional home-style chicken curry with aromatic spices" },
      { name: "Chicken Korma", price: "$19.90", description: "Mild, creamy curry with cashews and aromatic spices" },
      { name: "Chicken Vindaloo", price: "$18.90", description: "Spicy and tangy curry from Goa with potatoes" },
    ],
    goat: [
      { name: "Goat Curry", price: "$22.90", description: "Tender goat meat in rich, traditional spices" },
      { name: "Goat Biryani", price: "$24.90", description: "Aromatic basmati rice with succulent goat pieces" },
      { name: "Goat Korma", price: "$23.90", description: "Mild, creamy goat curry with nuts and cream" },
    ],
    veg: [
      { name: "Dal Tadka", price: "$14.90", description: "Yellow lentils tempered with cumin and spices" },
      { name: "Palak Paneer", price: "$16.90", description: "Cottage cheese in creamy spinach gravy" },
      { name: "Aloo Gobi", price: "$15.90", description: "Potato and cauliflower curry with aromatic spices" },
      { name: "Chana Masala", price: "$15.90", description: "Chickpeas in spicy tomato-onion gravy" },
    ],
    biryani: [
      { name: "Hyderabadi Chicken Biryani", price: "$19.90", description: "Our signature dish - aromatic basmati rice with tender chicken" },
      { name: "Mutton Biryani", price: "$24.90", description: "Premium goat meat biryani cooked in traditional dum style" },
      { name: "Vegetable Biryani", price: "$17.90", description: "Fragrant rice with mixed vegetables and aromatic spices" },
      { name: "Prawn Biryani", price: "$22.90", description: "Succulent prawns layered with saffron rice" },
    ],
    tandoor: [
      { name: "Naan", price: "$4.50", description: "Soft, fluffy bread baked in tandoor" },
      { name: "Garlic Naan", price: "$5.50", description: "Naan topped with fresh garlic and herbs" },
      { name: "Butter Naan", price: "$5.00", description: "Naan brushed with melted butter" },
      { name: "Roti", price: "$3.50", description: "Whole wheat flatbread" },
      { name: "Paratha", price: "$4.90", description: "Layered flatbread cooked with ghee" },
    ],
    desserts: [
      { name: "Gulab Jamun", price: "$7.90", description: "Soft milk dumplings in sweet syrup" },
      { name: "Kheer", price: "$6.90", description: "Creamy rice pudding with cardamom and nuts" },
      { name: "Kulfi", price: "$5.90", description: "Traditional Indian ice cream with pistachios" },
    ],
    wraps: [
      { name: "Chicken Tikka Wrap", price: "$12.90", description: "Grilled chicken tikka wrapped in fresh naan" },
      { name: "Seekh Kebab Roll", price: "$11.90", description: "Spiced minced meat roll with fresh salad" },
      { name: "Paneer Wrap", price: "$10.90", description: "Marinated cottage cheese with vegetables in soft wrap" },
    ],
    beverages: [
      { name: "Mango Lassi", price: "$5.90", description: "Creamy yogurt drink with fresh mango" },
      { name: "Sweet Lassi", price: "$4.90", description: "Traditional sweet yogurt drink" },
      { name: "Masala Chai", price: "$3.90", description: "Spiced Indian tea with milk" },
      { name: "Fresh Lime Water", price: "$3.50", description: "Refreshing lime water with mint" },
    ],
  };

  const categories = [
    { id: "entrees", label: "Entrées", icon: "🥟" },
    { id: "chicken", label: "Chicken Curries", icon: "🍗" },
    { id: "goat", label: "Goat Curries", icon: "🍖" },
    { id: "veg", label: "Veg Curries", icon: "🥘" },
    { id: "biryani", label: "Biryani Specials", icon: "🍛" },
    { id: "tandoor", label: "Breads", icon: "🫓" },
    { id: "desserts", label: "Desserts", icon: "🍮" },
    { id: "wraps", label: "Wraps & Rolls", icon: "🌯" },
    { id: "beverages", label: "Beverages", icon: "🥤" },
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

        <Tabs defaultValue="biryani" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 mb-12 bg-card/30 backdrop-blur-sm p-2 rounded-lg h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col gap-1 p-3 text-xs font-poppins data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/20"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:block">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
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
            </TabsContent>
          ))}
        </Tabs>

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