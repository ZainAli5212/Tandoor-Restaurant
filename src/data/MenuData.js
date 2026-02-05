export const categories = [
  { id: "all", label: "All Items" },
  { id: "bbq", label: "BBQ" },
  { id: "chinese", label: "Chinese" },
  { id: "desi", label: "Desi" },
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" },
];

export const menuItems = [
  // BBQ Items
  { id: 1, name: "Seekh Kebab", description: "Minced lamb skewers with aromatic spices", price: "Rs. 850", category: "bbq", isPopular: true, isSpicy: true, isNew: false, image: "./menu-images/SeekhKebab.png" },
  { id: 2, name: "Chicken Tikka", description: "Boneless chicken marinated in yogurt and spices", price: "Rs. 750", category: "bbq", isPopular: true, isNew: false, image: "./menu-images/ChickenTikka.png" },
  { id: 3, name: "Lamb Chops", description: "Premium lamb chops with special tandoori marinade", price: "Rs. 1,450", category: "bbq", isNew: true, image: "./menu-images/LambChops.png" },
  { id: 4, name: "Malai Boti", description: "Creamy marinated chicken, mild and flavorful", price: "Rs. 800", category: "bbq", isNew: false, image: "./menu-images/MalaiBoti.png" },
  { id: 13, name: "Reshmi Kebab", description: "Silky textured minced chicken kebabs", price: "Rs. 900", category: "bbq", isNew: false, image: "./menu-images/ReshmiKebab.png" },
  
  // Chinese Items
  { id: 5, name: "Chicken Manchurian", description: "Crispy chicken in tangy, spicy sauce", price: "Rs. 650", category: "chinese", isSpicy: true, isNew: false, image: "./menu-images/ChickenManchurian.png" },
  { id: 6, name: "Egg Fried Rice", description: "Wok-tossed rice with eggs and vegetables", price: "Rs. 450", category: "chinese", isNew: false, image: "./menu-images/EggFriedRice.png" },
  { id: 7, name: "Chow Mein", description: "Stir-fried noodles with vegetables", price: "Rs. 550", category: "chinese", isPopular: true, isNew: false, image: "./menu-images/ChowMein.png" },
  { id: 8, name: "Dragon Chicken", description: "Spicy crispy chicken with bell peppers", price: "Rs. 750", category: "chinese", isSpicy: true, isNew: true, image: "./menu-images/DragonChicken.png" },
  
  // Desi Items
  { id: 9, name: "Butter Chicken", description: "Creamy tomato-based curry", price: "Rs. 850", category: "desi", isPopular: true, isNew: false, image: "./menu-images/ButterChicken.png" },
  { id: 10, name: "Mutton Karahi", description: "Traditional wok-cooked mutton", price: "Rs. 1,650", category: "desi", isSpicy: true, isPopular: true, isNew: false, image: "./menu-images/MuttonKarahi.png" },
  { id: 11, name: "Chicken Biryani", description: "Fragrant basmati rice with spiced chicken", price: "Rs. 750", category: "desi", isPopular: true, isNew: false, image: "./menu-images/ChickenBiryani.png" },
  { id: 15, name: "Palak Paneer", description: "Fresh spinach with cubes of cottage cheese", price: "Rs. 600", category: "desi", isNew: true, image: "./menu-images/PalakPaneer.png" },
  { id: 20, name: "Beef Nihari", description: "Slow-cooked beef stew with rich bone marrow", price: "Rs. 1,100", category: "desi", isSpicy: true, isNew: true, image: "./menu-images/BeefNihari.png" },

  // Desserts
  { id: 16, name: "Gulab Jamun", description: "Warm milk dumplings in sugar syrup", price: "Rs. 350", category: "desserts", isPopular: true, isNew: false, image: "./menu-images/GulabJamun.png" },
  { id: 21, name: "Shahi Tukray", description: "Royal bread pudding with saffron and nuts", price: "Rs. 450", category: "desserts", isNew: true, image: "./menu-images/ShahiTukray.png" },

  // Beverages
  { id: 18, name: "Mint Margarita", description: "Refreshing mint and lime cooler", price: "Rs. 250", category: "beverages", isNew: false, image: "./menu-images/MintMargarita.png" },
  { id: 22, name: "Pina Colada", description: "Creamy pineapple and coconut mocktail", price: "Rs. 400", category: "beverages", isNew: true, image: "./menu-images/PinaColada.png" },
];