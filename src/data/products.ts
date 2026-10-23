import assets from "../assets";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  priceDisplay?: string;
  description?: string;
  badge?: string;
  isPopular?: boolean;
}

export type Product = MenuItem;

export interface CategoryCardData {
  id: string;
  categoryKey: string;
  title: string;
  tagline?: string;
  image: string;
  wheatFlourBadge?: boolean;
  note?: string;
  items: MenuItem[];
}

export const CATEGORY_TABS = [
  { id: "ALL", label: "All Treats" },
  { id: "BROWNIES", label: "Brownies" },
  { id: "SPECIAL_BOX", label: "Special Box" },
  { id: "CHOCO_LAVA", label: "Choco Lava" },
  { id: "BOMBOLONI", label: "Bomboloni" },
  { id: "MINI_CHOCOLATES", label: "Mini Chocolates" },
  { id: "HOT_CHOCOLATE", label: "Hot Chocolate" },
] as const;

export type CategoryTabId = (typeof CATEGORY_TABS)[number]["id"];

export const categoryCards: CategoryCardData[] = [
  {
    id: "brownies",
    categoryKey: "BROWNIES",
    title: "Brownies",
    tagline: "Small bites. Big happiness.",
    image: assets.brownies,
    wheatFlourBadge: true,
    note: "Made with Wheat Flour option available for a healthier choice.",
    items: [
      {
        id: "classic-brownie",
        name: "Classic Brownie",
        price: 49,
        description: "Rich, fudgy homemade chocolate brownie baked fresh with real cocoa.",
        badge: "Bestseller",
        isPopular: true,
      },
      {
        id: "nutella-brownie",
        name: "Nutella Brownie",
        price: 49,
        description: "Fudgy brownie swirled generously with creamy hazelnut Nutella.",
        badge: "Popular",
        isPopular: true,
      },
      {
        id: "nuts-brownie",
        name: "Nuts Brownie",
        price: 59,
        description: "Packed with premium crunchy toasted nuts in every chocolate bite.",
      },
      {
        id: "oreo-brownie",
        name: "Oreo Brownie",
        price: 59,
        description: "Layered with whole crunchy Oreo cookies inside rich chocolate fudge.",
      },
      {
        id: "white-chocolate-brownie",
        name: "White Chocolate Brownie",
        price: 69,
        description: "Deep cocoa brownie topped with creamy melted white chocolate decadence.",
      },
      {
        id: "rose-milk-brownie",
        name: "Rose Milk Brownie",
        price: 69,
        description: "Signature fusion bake infused with fragrant authentic rose milk essence.",
        badge: "Chef's Special",
      },
    ],
  },
  {
    id: "special-box",
    categoryKey: "SPECIAL_BOX",
    title: "Special Box",
    tagline: "Loaded with Love",
    image: assets.specialBox,
    wheatFlourBadge: true,
    note: "Decorated with Nutella, dark chocolate, Schokobons & Kit Kat pieces.",
    items: [
      {
        id: "250g-brownie-bites",
        name: "250g Brownie Bites Box",
        price: 199,
        description: "Bite-sized fudgy brownie cubes loaded with Nutella drizzle, Schokobons, and Kit Kat pieces in a gift box.",
        badge: "Signature Box",
        isPopular: true,
      },
    ],
  },
  {
    id: "choco-lava",
    categoryKey: "CHOCO_LAVA",
    title: "Choco Lava",
    tagline: "Warm, Rich & Irresistible",
    image: assets.chocoLava,
    note: "Served in a golden bake cup with an oozing molten chocolate core.",
    items: [
      {
        id: "choco-lava-cup",
        name: "Choco Lava",
        price: 59,
        description: "Warm chocolate cake with an irresistible flowing molten chocolate center.",
        badge: "Warm & Gooey",
        isPopular: true,
      },
    ],
  },
  {
    id: "bomboloni",
    categoryKey: "BOMBOLONI",
    title: "Bomboloni",
    tagline: "Italian Pillow Doughnuts",
    image: assets.bomboloni,
    note: "Golden fluffy doughnuts dusted in fine sugar and packed with silky filling.",
    items: [
      {
        id: "nutella-bomboloni",
        name: "Nutella Filled Bomboloni",
        price: 69,
        description: "Fluffy Italian doughnut bursting with smooth hazelnut Nutella filling.",
        badge: "Favorite",
        isPopular: true,
      },
      {
        id: "dark-chocolate-bomboloni",
        name: "Dark Chocolate Bomboloni",
        price: 59,
        description: "Fluffy doughnut filled with luscious dark chocolate ganache cream.",
      },
    ],
  },
  {
    id: "mini-chocolates",
    categoryKey: "MINI_CHOCOLATES",
    title: "Mini Chocolates",
    tagline: "Little Hearts, Big Joy",
    image: assets.miniChocolates,
    note: "Artisanal handcrafted chocolate treats for party favors and gifts.",
    items: [
      {
        id: "mini-chocolates-single",
        name: "Mini Chocolates",
        price: 5,
        priceDisplay: "₹5 / piece",
        description: "Bite-sized festive artisan chocolates made in delicate floral & heart motifs.",
        badge: "Sweet Favor",
      },
    ],
  },
  {
    id: "hot-chocolate",
    categoryKey: "HOT_CHOCOLATE",
    title: "Hot Chocolate",
    tagline: "Rich • Creamy • Comforting",
    image: assets.hotChocolate,
    note: "Served warm in the SS Home Bakes branded cup.",
    items: [
      {
        id: "hot-chocolate-cup",
        name: "Hot Chocolate",
        price: 49,
        description: "Steaming rich, creamy Belgian-style cocoa made fresh to order.",
        badge: "Comfort Drink",
      },
      {
        id: "hot-chocolate-combo",
        name: "Hot Chocolate + Classic Brownie",
        price: 89,
        description: "The heartwarming signature combo: Hot creamy chocolate paired with a fresh classic brownie.",
        badge: "Combo Deal",
        isPopular: true,
      },
    ],
  },
];
