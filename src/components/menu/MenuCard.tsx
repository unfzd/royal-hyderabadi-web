import { Card } from "@/components/ui/card";
import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  return (
    <Card 
      className="relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-[1.02] group animate-fade-in"
      style={{ animationDelay: `${index * 0.04}s` }}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 via-transparent to-spice-orange/10 opacity-50"></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-poppins font-semibold text-foreground text-lg leading-tight pr-2">
            {item.name}
          </h3>
          <span className="bg-gradient-saffron text-background font-bold text-lg px-3 py-1 rounded-full shadow-lg ml-2 flex-shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-foreground/70 text-sm font-poppins leading-relaxed">
          {item.description}
        </p>
      </div>
    </Card>
  );
};

export default MenuCard;