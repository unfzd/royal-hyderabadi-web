import { MenuCategory as MenuCategoryType } from "@/data/menuData";
import MenuCard from "./MenuCard";

interface MenuCategoryProps {
  category: MenuCategoryType;
  idx: number;
}

const MenuCategory = ({ category, idx }: MenuCategoryProps) => {
  return (
    <div className="space-y-8 animate-fade-in" style={{ animationDelay: `${idx * 0.08}s` }}>
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-transparent bg-gradient-saffron bg-clip-text mb-2 flex items-center justify-center gap-3">
          <span className="text-4xl">{category.icon}</span>
          {category.label}
        </h3>
        <div className="w-16 h-0.5 bg-gradient-saffron mx-auto rounded-full"></div>
      </div>
      
      {/* For categories with subcategories */}
      {category.subcategories ? (
        <div className="space-y-12">
          {category.subcategories.map((subcategory, subIdx) => (
            <div key={subIdx} className="space-y-6">
              <h4 className="text-xl md:text-2xl font-playfair font-semibold text-foreground/90 text-center">
                {subcategory.label}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subcategory.items.map((item, index) => (
                  <MenuCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* For categories with direct items */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items?.map((item, index) => (
            <MenuCard key={index} item={item} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;