/// <reference types="vite/client" />

interface EcomItem {
  id: number;
  images: string[];
  price: number;
  category: string;
  description: string;
  title: string;
  rating: { rate: number; count: number };
}
