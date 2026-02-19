import bottleDarkSide from "@/assets/bottle-dark-side.jpg";
import bottleGodFather from "@/assets/bottle-god-father.jpg";
import bottleBlackMusk from "@/assets/bottle-black-musk.jpg";
import bottleMidnightMist from "@/assets/bottle-midnight-mist.jpg";

export interface Product {
  sku: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  collection: string;
  notes: { top: string; heart: string; base: string };
  tags: string[];
  description: string;
  variants: { size: string; label: string; price: number }[];
  stock: number;
  rating: number;
  reviews: number;
  olfactoryNotes: string[];
}

export interface CartItem {
  sku: string;
  name: string;
  image: string;
  size: string;
  price: number;
  qty: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const products: Product[] = [
  {
    sku: "BHOPA-DS-001",
    name: "Dark Side",
    tagline: "Deep, Mysterious, Nocturnal",
    price: 185,
    image: bottleDarkSide,
    collection: "Eau de Parfum",
    notes: { top: "Bergamot", heart: "Mystic Oud", base: "Black Musk" },
    tags: ["NEW"],
    description: "A complex olfactory architecture where mystical Amber meets the primal force of Oud. Designed for the individual who finds clarity in the darkness.",
    variants: [
      { size: "8ML", label: "Travel Vial", price: 45 },
      { size: "50ML", label: "Signature Daily", price: 185 },
      { size: "100ML", label: "Grand Flacon", price: 295 },
    ],
    stock: 42,
    rating: 5,
    reviews: 128,
    olfactoryNotes: ["Woody", "Musky", "Oriental"],
  },
  {
    sku: "BHOPA-GF-002",
    name: "God Father",
    tagline: "Power, Authority, Legacy",
    price: 210,
    image: bottleGodFather,
    collection: "Eau de Parfum",
    notes: { top: "Black Pepper", heart: "Saffron", base: "Sandalwood" },
    tags: [],
    description: "Spicy, bold, and authoritative. A commanding scent for leaders. Each note unfolds with the gravity of a timeless dynasty.",
    variants: [
      { size: "8ML", label: "Travel Vial", price: 55 },
      { size: "50ML", label: "Signature Daily", price: 210 },
      { size: "100ML", label: "Grand Flacon", price: 340 },
    ],
    stock: 28,
    rating: 5,
    reviews: 96,
    olfactoryNotes: ["Spicy", "Oriental", "Woody"],
  },
  {
    sku: "BHOPA-BM-003",
    name: "Black Musk",
    tagline: "Intense, Primal, Sensual",
    price: 165,
    image: bottleBlackMusk,
    collection: "Eau de Parfum",
    notes: { top: "Cardamom", heart: "Rose Absolute", base: "Black Musk" },
    tags: ["POPULAR"],
    description: "Deep, animalic, and raw. A primal expression of elegance. The fragrance that started the shadow trilogy.",
    variants: [
      { size: "8ML", label: "Travel Vial", price: 42 },
      { size: "50ML", label: "Signature Daily", price: 165 },
      { size: "100ML", label: "Grand Flacon", price: 265 },
    ],
    stock: 35,
    rating: 4.8,
    reviews: 204,
    olfactoryNotes: ["Musky", "Floral", "Spicy"],
  },
  {
    sku: "BHOPA-MM-004",
    name: "Whisky Smoke",
    tagline: "Warm, Bold, Refined",
    price: 195,
    image: bottleMidnightMist,
    collection: "Extrait de Parfum",
    notes: { top: "Violet Leaf", heart: "Iris", base: "Ambrette" },
    tags: [],
    description: "An ethereal whisper captured in glass. Notes of violet leaf and iris dance above a bed of ambrette, evoking moonlit gardens.",
    variants: [
      { size: "8ML", label: "Travel Vial", price: 50 },
      { size: "50ML", label: "Signature Daily", price: 195 },
      { size: "100ML", label: "Grand Flacon", price: 310 },
    ],
    stock: 0,
    rating: 4.9,
    reviews: 67,
    olfactoryNotes: ["Floral", "Woody", "Musky"],
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Seed of Inspiration",
    description: "BHOPA was conceptualized in the high-altitude fields of the Himalayas, where the first rare botanicals were ethically sourced.",
  },
  {
    year: "2020",
    title: "The First Alchemy",
    description: "Launch of our flagship scent, Godfather. A bold transition into the world of luxury fragrances that redefined intensity.",
  },
  {
    year: "2023",
    title: "The Global Horizon",
    description: "Expansion into international markets and the release of the 'Shadows' trilogy including Black Musk and Dark Side.",
  },
];

export const getProduct = (sku: string) => products.find((p) => p.sku === sku);
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug);
