export type MenuItem = { 
  name: string; 
  price: string; 
  description: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  subcategories?: { label: string; items: MenuItem[] }[];
  items?: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées",
    icon: "🥗",
    subcategories: [
      {
        label: "Vegetarian",
        items: [
          { name: "Paneer 65", price: "$17", description: "Soft cottage cheese cubes deep-fried, tossed in tangy-spicy South Indian masala with curry leaves and chillies." },
          { name: "Samosa with Chutney (4 pcs)", price: "$12", description: "Crispy fried pastry filled with spiced potato-pea mix, served hot with fresh green chutney." },
          { name: "Chilli Paneer", price: "$17", description: "Paneer cubes sautéed in Indo-Chinese gravy with onion, capsicum, garlic, and green chilli." },
          { name: "Samosa with Chutney (2 pcs)", price: "$7", description: "A smaller portion of samosas with green chutney." },
        ]
      },
      {
        label: "Non-Vegetarian",
        items: [
          { name: "Chicken 65", price: "$17", description: "Boneless juicy chicken chunks deep-fried and tossed in spicy, tangy masala with curry leaves." },
          { name: "Chicken Tikka (6 pcs)", price: "$17", description: "Boneless chicken marinated in yogurt-spice mix, roasted till smoky and tender." },
          { name: "Tandoori Chicken (Half)", price: "$14", description: "Half chicken marinated in rich spices, roasted in smoky tandoor." },
          { name: "Chicken Lollipop (6 pcs)", price: "$18", description: "Frenched chicken drumsticks marinated in spices, roasted to perfection." },
          { name: "Maryland Tandoori Chicken (Full)", price: "$26", description: "Large chicken legs in spiced yogurt marinade, roasted in clay oven." },
          { name: "Tandoori Chicken (Full)", price: "$26", description: "Whole chicken marinated in yogurt and spices, slow-roasted in clay tandoor." },
          { name: "Chilli Chicken", price: "$17", description: "Boneless chicken stir-fried with capsicum, onion, and a hot garlic-soy chilli sauce." },
          { name: "Chicken Maryland (1 pc)", price: "$8", description: "Single piece of Maryland chicken." },
          { name: "Chicken Maryland (Half)", price: "$14", description: "Half portion of Maryland chicken." },
          { name: "Butter Garlic Chicken", price: "$20", description: "Boneless tender chicken cooked in butter, garlic, and aromatic Indian spices." },
        ]
      }
    ]
  },
  {
    id: "biryanis",
    label: "Biryanis",
    icon: "🍛",
    items: [
      { name: "Chicken 65 Biryani (Boneless)", price: "$21", description: "Pieces of Chicken 65 marinated in spices, layered with long grain basmati rice." },
      { name: "Paneer Vegetable Biryani", price: "$20", description: "Paneer and vegetables cooked with aromatic spices and basmati rice." },
      { name: "Chicken Biryani", price: "$18", description: "Authentic Hyderabadi biryani with long grain basmati rice and exotic spices." },
      { name: "Vegetarian Biryani", price: "$18", description: "Hyderabadi style vegetable biryani made with spices and basmati rice." },
      { name: "Mutton (Goat) Biryani", price: "$20", description: "Tender mutton marinated in tangy, exotic spices with long grain basmati rice." },
    ]
  },
  {
    id: "chickenCurries",
    label: "Chicken Curries",
    icon: "🍗",
    items: [
      { name: "Butter Chicken", price: "$22", description: "Tandoori chicken in rich, creamy tomato-cashew gravy with mild spices." },
      { name: "Chicken Tikka Masala", price: "$20", description: "Tandoori chicken cubes in onion-capsicum gravy with aromatic spices." },
      { name: "Dum Ka Chicken", price: "$18", description: "Slow-cooked Hyderabadi chicken in spiced yogurt-cashew gravy." },
      { name: "Chicken Korma White", price: "$18", description: "Mughlai-style chicken in creamy white cashew gravy." },
      { name: "Mango Chicken Curry", price: "$18", description: "Boneless chicken in sweet-spicy mango-infused curry." },
      { name: "Chicken Curry", price: "$18", description: "Classic chicken in onion-tomato base with Indian spices." },
      { name: "Chicken Mughlai", price: "$18", description: "Hyderabadi-style chicken in royal rich gravy." },
      { name: "Chicken Afghani", price: "$18", description: "Tender chicken in creamy pepper-based gravy." },
      { name: "White Chicken Masala", price: "$18", description: "Chicken cooked in chef's masala gravy with cashews." },
      { name: "Palak Chicken", price: "$18", description: "Chicken in spinach and tomato-based gravy." },
      { name: "Chicken Madras (Boneless)", price: "$18", description: "Boneless chicken in onion-tomato gravy with coconut cream." },
      { name: "Methi Malai Chicken", price: "$18", description: "Chicken in onion gravy with fenugreek leaves and cream." },
      { name: "Chicken Handi", price: "$20", description: "Chicken in almond-flavoured onion-tomato gravy." },
      { name: "Achari Chicken", price: "$18", description: "Chicken cooked in tangy pickling spices." },
      { name: "Spicy Green Chicken", price: "$18", description: "Chicken curry with green masala and fresh spices." },
      { name: "Chicken Jalfrezi", price: "$18", description: "Stir-fried chicken with onion, tomato, and bell peppers." },
      { name: "Chicken Kadhai", price: "$18", description: "Chicken cooked with capsicum, onion, and tomatoes in bold masala." },
      { name: "Chicken Rogan Josh", price: "$20", description: "Chicken slow-cooked in Kashmiri-style onion-tomato gravy." },
    ]
  },
  {
    id: "muttonCurries",
    label: "Mutton (Goat) Curries",
    icon: "🐐",
    items: [
      { name: "Mutton Curry", price: "$19", description: "Goat cooked in onion-tomato gravy with Indian spices." },
      { name: "Mutton Jalfrezi", price: "$19", description: "Stir-fried mutton in onion and capsicum masala." },
      { name: "Mutton Rogan Josh", price: "$19", description: "Goat slow-cooked in Kashmiri-style onion-tomato gravy." },
      { name: "Mutton Masala", price: "$20", description: "Tender goat in chef's special spiced gravy." },
      { name: "Palak Ghost", price: "$19", description: "Mutton in spinach-tomato gravy with mild spices." },
      { name: "Achari Mutton", price: "$19", description: "Tangy, spiced mutton cooked in traditional achari masala." },
      { name: "Spicy Green Mutton", price: "$20", description: "Goat cooked in green masala with yogurt and spices." },
      { name: "Afghani Mutton", price: "$20", description: "Creamy mutton cooked with yogurt, cream, and mild spices." },
      { name: "Mutton Mughlai", price: "$20", description: "Royal-style mutton curry in rich chef's gravy." },
      { name: "Mutton Makhni", price: "$19", description: "Marinated goat in buttery, mildly spiced creamy gravy." },
      { name: "Mutton Vindaloo", price: "$20", description: "Goat cooked in spicy, tangy Goan vindaloo gravy." },
      { name: "Mutton Korma", price: "$20", description: "Mughlai-style goat in creamy cashew gravy." },
      { name: "Mutton Handi", price: "$20", description: "Clay pot–cooked mutton in rich onion-yogurt gravy." },
      { name: "Methi Malai Mutton", price: "$20", description: "Creamy mutton with fenugreek leaves and mild spices." },
      { name: "Mutton Kadhai", price: "$18", description: "Goat cooked with onion, tomato, and kadhai masala." },
    ]
  },
  {
    id: "vegetarianCurries",
    label: "Vegetarian Curries",
    icon: "🥦",
    items: [
      { name: "Dal Makhani", price: "$18", description: "Creamy black lentils slow-cooked with butter, cream, and spices." },
      { name: "Shahi Paneer", price: "$19", description: "Paneer cubes in rich, creamy tomato-cashew gravy." },
      { name: "Methi Malai Paneer", price: "$19", description: "Paneer in onion-tomato gravy with fenugreek and cream." },
      { name: "Malai Paneer", price: "$19", description: "Paneer in creamy, mildly spiced gravy with cashews." },
      { name: "Shahi Kaju Paneer Masala", price: "$20", description: "Paneer and cashews in creamy shahi masala." },
      { name: "Paneer Bhuna Masala", price: "$18", description: "Paneer with onion-capsicum in spiced gravy." },
      { name: "Matar Paneer", price: "$16", description: "Paneer and peas in tomato-onion gravy with cream." },
      { name: "Bhuna Masala", price: "$18", description: "Onion and capsicum stir-fried with spices." },
      { name: "Mixed Veggie Curry", price: "$19", description: "Seasonal vegetables in yogurt-based nutty curry." },
      { name: "Paneer Tikka Masala", price: "$15", description: "Grilled paneer in onion-capsicum masala." },
      { name: "Hyderabadi Dal", price: "$19", description: "Yellow lentils with tamarind, onion, and coriander." },
      { name: "Butter Paneer", price: "$19", description: "Paneer in buttery tomato-cashew gravy (mild & sweet)." },
      { name: "Bhindi Masala", price: "$19", description: "Okra in tangy tomato-onion masala." },
      { name: "Vegetable Korma", price: "$18", description: "Mixed vegetables in creamy coconut-cashew curry." },
      { name: "Kaju Paneer Masala", price: "$20", description: "Paneer and cashews in spiced tomato-onion gravy." },
      { name: "Dal Tadka", price: "$17", description: "Yellow lentils tempered with ghee, garlic, and spices." },
    ]
  },
  {
    id: "breadRice",
    label: "Bread & Rice",
    icon: "🫓",
    subcategories: [
      {
        label: "Tandoor Breads",
        items: [
          { name: "Plain Naan", price: "$4", description: "Soft, fluffy Indian flatbread baked in a tandoor." },
          { name: "Garlic Naan", price: "$4.50", description: "Naan topped with garlic and baked in the tandoor." },
          { name: "Butter Naan", price: "$5", description: "Tandoor-baked naan brushed with butter." },
          { name: "Butter Roti", price: "$5", description: "Wholemeal roti brushed with butter." },
          { name: "Garlic Butter Roti", price: "$5", description: "Wholemeal roti with garlic and butter." },
          { name: "Rumali Roti", price: "$4", description: "Thin, soft flatbread cooked on an inverted griddle." },
          { name: "Herb & Garlic Naan", price: "$4.50", description: "Naan topped with garlic and herbs." },
          { name: "Chilli & Garlic Naan", price: "$4.50", description: "Naan topped with garlic and crushed red chilli." },
          { name: "Lachha Paratha", price: "$5", description: "Layered, flaky wholemeal flatbread." },
          { name: "Garlic Roti", price: "$4", description: "Wholemeal roti topped with garlic." },
          { name: "Plain Roti", price: "$4", description: "Wholemeal flatbread cooked in a tandoor." },
        ]
      },
      {
        label: "Stuffed Naans",
        items: [
          { name: "Keema Naan", price: "$5", description: "Naan stuffed with spiced tandoori chicken mince." },
          { name: "Cheese Keema Naan", price: "$5", description: "Naan stuffed with chicken mince and cheese." },
          { name: "Cheese Naan", price: "$5", description: "Naan stuffed with cheese and baked in tandoor." },
          { name: "Sweet Peshwari Naan", price: "$6", description: "Naan stuffed with coconut, sugar, and dry fruits." },
          { name: "Cheese & Garlic Naan", price: "$5", description: "Naan stuffed with cheese and garlic." },
          { name: "Cheese & Chilli Naan", price: "$4.50", description: "Naan stuffed with cheese and green chilli." },
        ]
      },
      {
        label: "Rice",
        items: [
          { name: "Plain Rice", price: "$6", description: "Simple steamed long grain rice." },
          { name: "Zeera Rice", price: "$8", description: "Rice tempered with cumin seeds." },
          { name: "Saffron Biryani Rice", price: "$10", description: "Fragrant rice flavoured with saffron." },
          { name: "Biryani Masala Rice", price: "$12", description: "Spiced rice flavoured with biryani masala." },
          { name: "Cashew Rice", price: "$9", description: "Flavoured rice cooked with crunchy cashews." },
        ]
      }
    ]
  },
  {
    id: "indoChinese",
    label: "Indo-Chinese",
    icon: "🍜",
    items: [
      { name: "Vegetable Manchurian Dry", price: "$17", description: "Fried vegetable balls tossed in tangy, savoury Indo-Chinese sauce." },
      { name: "Vegetable Manchurian Gravy", price: "$18", description: "Veggie balls in rich Manchurian gravy with Indian-Chinese spices." },
      { name: "Chicken Manchurian Dry", price: "$18", description: "Crispy chicken pieces coated in sweet, spicy, tangy Manchurian sauce." },
      { name: "Chicken Manchurian Gravy", price: "$19", description: "Chicken pieces simmered in spicy Manchurian gravy." },
    ]
  },
  {
    id: "biryaniБuckets",
    label: "Biryani Buckets",
    icon: "🪣",
    items: [
      { name: "Vegetable Biryani Bucket", price: "$95", description: "5 Litre bucket, serves 6–7. Wholesome vegetarian biryani with seasonal vegetables. Includes Salan & Raita." },
      { name: "Paneer Veg Biryani Bucket", price: "$110", description: "5 Litre bucket, serves 6–7. Flavourful paneer & vegetable biryani. Includes Salan & Raita." },
      { name: "Chicken 65 Biryani Bucket", price: "$125", description: "5 Litre bucket, serves 6–7. Aromatic biryani layered with spicy crispy Chicken 65. Includes Salan & Raita." },
      { name: "Chicken Biryani Bucket", price: "$110", description: "5 Litre bucket, serves 6–7. Classic chicken biryani with aromatic spices. Includes Salan & Raita." },
      { name: "Mutton Biryani Bucket", price: "$115", description: "5 Litre bucket, serves 6–7. Rich, flavourful mutton biryani cooked with special spices. Includes Salan & Raita." },
    ]
  },
  {
    id: "drinks",
    label: "Drinks",
    icon: "🥤",
    items: [
      { name: "Mango Lassi", price: "$5", description: "Yogurt-based sweet mango drink." },
      { name: "Plain Lassi", price: "$5", description: "Traditional yogurt-based drink." },
      { name: "Salty Mint Lassi", price: "$5", description: "Yogurt-based drink with mint & salt." },
      { name: "Tea (Small)", price: "$2", description: "Traditional Indian tea." },
      { name: "Tea (Medium)", price: "$4", description: "Traditional Indian tea." },
      { name: "Tea (Large)", price: "$5", description: "Traditional Indian tea." },
      { name: "All Can Drink (375ml)", price: "$3", description: "Choice of canned soft drinks." },
      { name: "All Bottle Drink (1.2 Ltr)", price: "$6", description: "Choice of bottled soft drinks." },
      { name: "Water Bottle", price: "$2", description: "Bottled water." },
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    icon: "🍨",
    items: [
      { name: "Shahi Tukda", price: "$6", description: "Hyderabadi dessert of bread, saffron, nuts, and dairy." },
      { name: "Gajar Ka Halwa", price: "$6", description: "Slow-cooked carrot halwa with dry fruits & milk." },
      { name: "IBR Special Pineapple Dessert", price: "$6", description: "Pineapple pudding topped with strawberry jelly." },
      { name: "Badam Kheer", price: "$6", description: "Almond-based Indian pudding with saffron & cardamom." },
      { name: "Gulab Jamun (3 pcs)", price: "$6", description: "Soft milk-solid dumplings in sugar syrup." },
      { name: "Qubani Ka Mittha", price: "$6", description: "Dessert made from dried apricots, sugar, and nuts." },
      { name: "Mango Malai", price: "$6", description: "Milk-solid dumplings infused with mango flavour, in creamy syrup." },
    ]
  },
  {
    id: "sideDishes",
    label: "Side Dishes",
    icon: "🍳",
    items: [
      { name: "Pappadams (4 pcs)", price: "$3", description: "Thin fried crispy wafers." },
      { name: "Boiled Egg", price: "$3", description: "Simple boiled eggs." },
      { name: "Egg Fry Omelette", price: "$4", description: "Golden crisp fluffy omelette." },
      { name: "Salad", price: "$5", description: "Fresh seasonal vegetables with lemon & salt." },
    ]
  },
  {
    id: "wraps",
    label: "Wraps",
    icon: "🌯",
    items: [
      { name: "Chicken 65 Wrap", price: "$13", description: "Tandoori naan/rumali bread filled with Chicken 65, cucumber, onion, capsicum, mayo, and chilli. Available in Naan or Rumali Roti." },
      { name: "Garlic Chicken Wrap", price: "$13", description: "Garlic-spiced chicken with veggies and mayo in naan/rumali wrap. Available in Naan or Rumali Roti." },
      { name: "Chicken Tikka Wrap", price: "$13", description: "Tandoori chicken tikka with cucumber, onion, capsicum, mayo, and chilli. Available in Naan or Rumali Roti." },
      { name: "Butter Chicken Wrap", price: "$13", description: "Butter chicken with creamy sauce, veggies, and mayo in soft naan/rumali. Available in Naan or Rumali Roti." },
      { name: "Kafta Wrap", price: "$13", description: "Spiced kafta with crisp veggies, mayo, chilli, and tangy sauce in naan/rumali. Available in Naan or Rumali Roti." },
    ]
  },
  {
    id: "seafood",
    label: "Seafood",
    icon: "🐟",
    items: [
      { name: "Fish Fry (4 pcs)", price: "$16", description: "Boneless basa fish fillets marinated in spices, fried golden." },
    ]
  },
  {
    id: "deals",
    label: "Deals",
    icon: "🍱",
    items: [
      { name: "Chicken Biryani Deal 1", price: "$23", description: "Chicken Biryani + Dessert + Can Drink. All curries in 400ml, rice in 500ml." },
      { name: "Mutton Biryani Deal 2", price: "$25", description: "Mutton Biryani + Dessert + Can Drink. All curries in 400ml, rice in 500ml." },
      { name: "Chicken 65 Biryani Deal 3", price: "$27", description: "Chicken 65 Biryani + Dessert + Can Drink. All curries in 400ml, rice in 500ml." },
      { name: "Vegetable Biryani Deal 4", price: "$23", description: "Vegetable Biryani + Dessert + Can Drink. All curries in 400ml, rice in 500ml." },
      { name: "Paneer Biryani Deal 5", price: "$25", description: "Paneer Biryani + Dessert + Can Drink. All curries in 400ml, rice in 500ml." },
      { name: "Dal Makhani with Rice or Naan", price: "$21", description: "Creamy Dal Makhani served with your choice of rice or naan. All curries in 400ml, rice in 500ml." },
      { name: "Butter Chicken with Rice or Naan", price: "$25", description: "Butter Chicken served with your choice of rice or naan. All curries in 400ml, rice in 500ml." },
      { name: "Chicken with Rice or Naan", price: "$23", description: "Chicken Curry served with your choice of rice or naan. All curries in 400ml, rice in 500ml." },
      { name: "Chicken Rogan Josh with Rice or Naan", price: "$23", description: "Chicken Rogan Josh served with your choice of rice or naan. All curries in 400ml, rice in 500ml." },
      { name: "Chicken Vindaloo with Rice or Naan", price: "$23", description: "Chicken Vindaloo served with your choice of rice or naan. All curries in 400ml, rice in 500ml." },
      { name: "Mutton Vindaloo with Rice or Naan", price: "$23", description: "Mutton Vindaloo served with your choice of rice or naan. All curries in 400ml, rice in 500ml." },
    ]
  },
  {
    id: "weekendSpecials",
    label: "Weekend Specials",
    icon: "🍴",
    items: [
      { name: "Chicken Mandi", price: "$20", description: "Traditional Arabian style rice with roasted chicken." },
      { name: "Haleem", price: "$20", description: "Royal delicacy of wheat, lentils, and meat slow-cooked to a paste." },
      { name: "Mutton Mandi", price: "$20", description: "Arabian rice with slow-cooked succulent mutton." },
    ]
  },
];