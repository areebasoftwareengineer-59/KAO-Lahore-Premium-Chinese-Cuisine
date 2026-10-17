// KAO Lahore - Brand & Restaurant Data
// 45 CCA C, Sector C, Phase 5, DHA, Lahore, Pakistan

import storefrontImg from '../assets/images/kao_storefront_1792255446078.jpg';
import heroDishImg from '../assets/images/kao_hero_dish_1792255464478.jpg';
import dynamitePrawnsImg from '../assets/images/kao_dynamite_prawns_1792255487582.jpg';
import kungPaoImg from '../assets/images/kao_kung_pao_1792255526303.jpg';
import interiorImg from '../assets/images/kao_interior_1792255547661.jpg';
import friedRiceImg from '../assets/images/kao_fried_rice_1792255567127.jpg';
import noodlesImg from '../assets/images/kao_noodles_1792255587329.jpg';
import sushiImg from '../assets/images/kao_sushi_rolls_1792255607468.jpg';
import firecrackerShrimpImg from '../assets/images/kao_firecracker_shrimp_1792255627001.jpg';
import dimsumImg from '../assets/images/kao_dimsum_1792255649568.jpg';
import drinksImg from '../assets/images/kao_drinks_1792255674926.jpg';
import dessertImg from '../assets/images/kao_dessert_1792255694781.jpg';

export const RESTAURANT_INFO = {
  name: "KAO",
  chineseName: "龍王",
  fullName: "KAO 龍王 – Premium Chinese Cuisine",
  tagline: "An Exquisite Journey Through Chinese Cuisine",
  subtitle: "Discover authentic flavors, refined dining and exceptional hospitality at KAO Lahore.",
  address: "45 CCA C, Sector C, Phase 5, DHA, Lahore, Pakistan",
  shortAddress: "Sector C, DHA Phase 5, Lahore",
  phoneFormatted: "+92 308 0999901",
  phoneRaw: "923080999901",
  googleMapsUrl: "https://maps.app.goo.gl/PKnTnvMCMSBrAhB38",
  googleRating: "4.9",
  reviewCount: 51,
  hours: [
    { days: "Monday – Sunday", lunch: "1:00 PM – 4:30 PM", dinner: "7:00 PM – 12:00 AM" }
  ],
  services: [
    "Dine-in Fine Dining",
    "Private Dining Rooms",
    "Valet Parking",
    "Advance Table Reservations"
  ]
};

export const IMAGES = {
  storefront: storefrontImg,
  heroDish: heroDishImg,
  dynamitePrawns: dynamitePrawnsImg,
  kungPao: kungPaoImg,
  interior: interiorImg,
  friedRice: friedRiceImg,
  noodles: noodlesImg,
  sushi: sushiImg,
  firecrackerShrimp: firecrackerShrimpImg,
  dimsum: dimsumImg,
  drinks: drinksImg,
  dessert: dessertImg,
};

export interface MenuItem {
  id: string;
  name: string;
  chineseName?: string;
  category: 'Appetizers' | 'Seafood' | 'Chicken' | 'Beef' | 'Rice & Noodles' | 'Sushi' | 'Desserts' | 'Beverages';
  description: string;
  price: string;
  image: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  tags?: string[];
}

export const MENU_CATEGORIES = [
  'All',
  'Appetizers',
  'Seafood',
  'Chicken',
  'Beef',
  'Rice & Noodles',
  'Sushi',
  'Desserts',
  'Beverages'
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Dynamite Prawns',
    chineseName: '炸蝦球',
    category: 'Appetizers',
    description: 'Crispy jumbo tiger prawns enveloped in our signature creamy spicy sriracha glaze, crowned with toasted black sesame and scallions.',
    price: '₨ 2,450',
    image: dynamitePrawnsImg,
    isPopular: true,
    isChefSpecial: true,
    spicyLevel: 2,
    tags: ['Signature', 'Crispy']
  },
  {
    id: 'm2',
    name: 'Artisanal Steamed Dim Sum',
    chineseName: '水晶蝦餃',
    category: 'Appetizers',
    description: 'Delicate translucent crystal shrimp har gow, crowned with salmon pearls and micro herb garnish in traditional bamboo steamers.',
    price: '₨ 1,950',
    image: dimsumImg,
    isChefSpecial: true,
    spicyLevel: 0,
    tags: ['Handcrafted', 'Steamed']
  },
  {
    id: 'm3',
    name: 'Spicy Firecracker Shrimp',
    chineseName: '爆竹大蝦',
    category: 'Seafood',
    description: 'Wok-charred jumbo prawns tossed with roasted Sichuan chili pods, crisp garlic wafers, aromatic peppercorns, and cilantro essence.',
    price: '₨ 2,950',
    image: firecrackerShrimpImg,
    isPopular: true,
    spicyLevel: 3,
    tags: ['Fiery', 'Wok-Charred']
  },
  {
    id: 'm4',
    name: 'Glazed Black Pepper Wagyu & Tiger Prawn',
    chineseName: '黑椒牛柳鮮蝦',
    category: 'Beef',
    description: 'Tenderloin beef cubes glazed in crushed Sarawak black pepper jus, paired with flame-kissed king prawn, micro greens, and gold leaf.',
    price: '₨ 4,200',
    image: heroDishImg,
    isChefSpecial: true,
    spicyLevel: 1,
    tags: ['Chef Signature', 'Wagyu']
  },
  {
    id: 'm5',
    name: 'Authentic Kung Pao Chicken',
    chineseName: '宮保雞丁',
    category: 'Chicken',
    description: 'Succulent chicken morsels flash-fried with dried Sichuan red chilies, golden roasted peanuts, and spring leeks in savory dark soy glaze.',
    price: '₨ 2,150',
    image: kungPaoImg,
    isPopular: true,
    spicyLevel: 2,
    tags: ['Classic', 'Nutty & Savory']
  },
  {
    id: 'm6',
    name: 'Sweet & Sour Crispy Chicken',
    chineseName: '糖醋脆皮雞',
    category: 'Chicken',
    description: 'Lightly battered tender chicken tossed with fresh bell peppers, caramelized pineapple chunks, and balanced Cantonese sweet tangy glaze.',
    price: '₨ 1,980',
    image: kungPaoImg,
    spicyLevel: 0,
    tags: ['Cantonese Classic']
  },
  {
    id: 'm7',
    name: 'Yangchow Golden Fried Rice',
    chineseName: '揚州炒飯',
    category: 'Rice & Noodles',
    description: 'Wok-tossed jasmine rice infused with succulent whole prawns, diced sweet glazed char siu, farm egg ribbons, and crisp spring scallions.',
    price: '₨ 1,650',
    image: friedRiceImg,
    isPopular: true,
    spicyLevel: 0,
    tags: ['Wok Heirloom']
  },
  {
    id: 'm8',
    name: 'Wok-Charred Beef Chow Mein',
    chineseName: '乾炒牛河',
    category: 'Rice & Noodles',
    description: 'Springy egg noodles tossed at intense wok heat with marinated beef tenderloin slices, fresh bok choy, bean sprouts, and dark soy.',
    price: '₨ 1,890',
    image: noodlesImg,
    isPopular: true,
    spicyLevel: 1,
    tags: ['High Heat Wok']
  },
  {
    id: 'm9',
    name: 'Flame-Torched Salmon Aburi Roll',
    chineseName: '炙燒鮭魚卷',
    category: 'Sushi',
    description: 'Torched Norwegian salmon draped over fresh avocado and snow crab roll, finished with white truffle emulsion, gold flake, and wasabi rosette.',
    price: '₨ 2,750',
    image: sushiImg,
    isChefSpecial: true,
    spicyLevel: 1,
    tags: ['Flame Torched', 'Truffle']
  },
  {
    id: 'm10',
    name: 'Molten Black Sesame Lava Fondant',
    chineseName: '黑芝麻流沙熔岩',
    category: 'Desserts',
    description: 'Warm cocoa fondant concealing a decadent flowing black sesame center, served with artisanal jasmine tea gelato, gold leaf, and raspberry coulis.',
    price: '₨ 1,550',
    image: dessertImg,
    isChefSpecial: true,
    spicyLevel: 0,
    tags: ['House Dessert', 'Artisanal']
  },
  {
    id: 'm11',
    name: 'Smoked Yuzu & Lychee Elixir',
    chineseName: '煙燻柚子荔枝特調',
    category: 'Beverages',
    description: 'Crafted citrus yuzu with sweet lychee nectar, edible fresh orchid blossom, sparkling botanical infusion, and 24k gold leaf rim.',
    price: '₨ 1,150',
    image: drinksImg,
    isPopular: true,
    spicyLevel: 0,
    tags: ['Signature Mocktail', 'Handcrafted']
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Illuminated Gold Exterior & Dragon Portal',
    category: 'Architecture',
    caption: 'KAO Lahore exterior facade at night in DHA Phase 5, featuring illuminated gold signage and modern black architecture.',
    image: storefrontImg,
  },
  {
    id: 'g2',
    title: 'Imperial Plated Glazed Wagyu & King Prawn',
    category: 'Culinary',
    caption: 'Masterfully plated signature beef tenderloin with king prawn, edible gold leaf, and savory reduction.',
    image: heroDishImg,
  },
  {
    id: 'g3',
    title: 'Signature Dynamite Prawns',
    category: 'Culinary',
    caption: 'Crisp golden prawns tossed in spicy cream glaze with fresh chives and black sesame in handcrafted ceramic.',
    image: dynamitePrawnsImg,
  },
  {
    id: 'g4',
    title: 'Traditional Sichuan Kung Pao Chicken',
    category: 'Culinary',
    caption: 'Glossy wok-fried chicken with toasted peanuts and dried Sichuan chilies.',
    image: kungPaoImg,
  },
  {
    id: 'g5',
    title: 'Intimate Dining Ambience & Dragon Woodwork',
    category: 'Ambience',
    caption: 'Warm ambient lighting, carved gold dragon screens, and elegant table settings designed for an unforgettable evening.',
    image: interiorImg,
  },
  {
    id: 'g6',
    title: 'Yangchow Wok Fried Rice',
    category: 'Culinary',
    caption: 'Steaming gourmet fried rice tossed with whole prawns, egg ribbons, and scallions.',
    image: friedRiceImg,
  },
  {
    id: 'g7',
    title: 'Wok-Charred Beef Noodles',
    category: 'Culinary',
    caption: 'Tender beef strips with fresh bok choy and savory noodles captured mid-lift.',
    image: noodlesImg,
  },
  {
    id: 'g8',
    title: 'Artisanal Salmon Aburi Sushi Platter',
    category: 'Culinary',
    caption: 'Handcrafted sushi roll with flame-seared salmon, truffle glaze, and edible gold leaf on natural slate.',
    image: sushiImg,
  },
  {
    id: 'g9',
    title: 'Spicy Firecracker Tiger Prawns',
    category: 'Culinary',
    caption: 'Crispy garlic chips and charred red chili pods paired with succulent wok-roasted shrimp.',
    image: firecrackerShrimpImg,
  },
  {
    id: 'g10',
    title: 'Artisan Dim Sum Bamboo Steamer',
    category: 'Culinary',
    caption: 'Handcrafted translucent shrimp dumplings with salmon roe and fragrant steam.',
    image: dimsumImg,
  },
  {
    id: 'g11',
    title: 'Smoked Yuzu & Lychee Cocktail Glass',
    category: 'Beverages',
    caption: 'Signature botanical refreshment in fine crystal glassware with orchid petal and gold rim.',
    image: drinksImg,
  },
  {
    id: 'g12',
    title: 'Molten Black Sesame Fondant',
    category: 'Desserts',
    caption: 'Warm chocolate cake with flowing roasted black sesame, served with jasmine gelato.',
    image: dessertImg,
  }
];

export const GOOGLE_REVIEWS_INFO = {
  rating: 4.9,
  totalReviews: 51,
  platform: "Google Maps",
  highlights: [
    {
      title: "Attentive & Gracious Hospitality",
      description: "Guests consistently commend the warm, polished service and attentive floor staff ensuring seamless dining.",
    },
    {
      title: "Authentic Chinese Flavor Profile",
      description: "Celebrated for masterful wok-hei, balanced Szechuan spice, and authentic fine-dining Chinese preparations.",
    },
    {
      title: "Calm, Cozy & Luxurious Ambience",
      description: "The dark mood, golden dragon details, and comfortable acoustic balance provide a serene escape in DHA Phase 5.",
    },
    {
      title: "Signature Seafood & Wok Excellence",
      description: "High praise for the crispy dynamite prawns, fresh seafood execution, and wok-tossed specialty noodles.",
    }
  ]
};
