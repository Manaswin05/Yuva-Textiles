export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  material: string;
  colors: string[];
  sizes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Handspun Khadi Cotton",
    price: 850,
    category: "Khadi",
    image: "https://picsum.photos/seed/khadi/800/1000",
    description: "Authentic handspun and hand-woven cotton from the heart of rural India. Breathable, eco-friendly, and culturally rich.",
    material: "100% Handspun Cotton",
    colors: ["#F5F5DC", "#EADDCA", "#D2B48C"],
    sizes: ["1m x 1.1m", "2.5m x 1.1m", "5m x 1.1m"]
  },
  {
    id: "2",
    name: "Banarasi Brocade Silk",
    price: 4500,
    category: "Silk",
    image: "https://picsum.photos/seed/banarasi/800/1000",
    description: "Exquisite silk from Varanasi featuring intricate gold and silver zari work. A masterpiece of Indian textile heritage.",
    material: "Pure Mulberry Silk with Zari",
    colors: ["#800020", "#FFD700", "#4B0082"],
    sizes: ["1m x 1.1m", "5.5m x 1.1m (Saree Length)"]
  },
  {
    id: "3",
    name: "Chanderi Sico Weave",
    price: 1200,
    category: "Chanderi",
    image: "https://picsum.photos/seed/chanderi/800/1000",
    description: "A traditional blend of silk and cotton from Madhya Pradesh. Known for its lightweight feel and sheer texture.",
    material: "Silk-Cotton Blend",
    colors: ["#E6E6FA", "#FFB6C1", "#98FB98"],
    sizes: ["1m x 1.1m", "2.5m x 1.1m"]
  },
  {
    id: "4",
    name: "Kanjeevaram Pure Silk",
    price: 8500,
    category: "Silk",
    image: "https://picsum.photos/seed/kanjeevaram/800/1000",
    description: "The pride of Tamil Nadu. Heavyweight silk with temple-inspired motifs and rich contrasting borders.",
    material: "100% Kanchipuram Silk",
    colors: ["#FF0000", "#008000", "#FFFF00"],
    sizes: ["1m x 1.2m", "6.2m x 1.2m"]
  },
  {
    id: "5",
    name: "Pochampally Ikat",
    price: 1800,
    category: "Ikat",
    image: "https://picsum.photos/seed/ikat/800/1000",
    description: "Geometric tie-and-dye patterns from Telangana. Bold, vibrant, and meticulously crafted by master weavers.",
    material: "Mercerized Cotton",
    colors: ["#000000", "#FFFFFF", "#FF4500"],
    sizes: ["1m x 1.1m", "2.5m x 1.1m"]
  },
  {
    id: "6",
    name: "Pashmina Hand-Embroidered",
    price: 15000,
    category: "Wool",
    image: "https://picsum.photos/seed/pashmina/800/1000",
    description: "Authentic Ladakhi Pashmina wool with delicate Sozni embroidery from Kashmir. The pinnacle of warmth and luxury.",
    material: "100% Pure Pashmina",
    colors: ["#F0EAD6", "#C19A6B", "#36454F"],
    sizes: ["1m x 2m (Shawl Size)"]
  }
];
