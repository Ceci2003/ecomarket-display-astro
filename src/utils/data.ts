import type { Language } from './language';
import settingsData from '@data/settings.json';
import productsData from '@data/products.json';
import colorsData from '@data/colors.json';

export interface Settings {
  siteTitle: string;
  motto: string;
  contacts: {
    phone: string;
    email: string;
    address: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    googleMapsEmbed: string;
  };
  about: {
    story: string;
    mission: string;
    values: string[];
  };
  navigation: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  bg: {
    name: string;
    shortDescription: string;
    longDescription: string;
    ingredients: string;
    origin: string;
    usage: string;
    benefits: string[];
  };
  en: {
    name: string;
    shortDescription: string;
    longDescription: string;
    ingredients: string;
    origin: string;
    usage: string;
    benefits: string[];
  };
  price: number;
  category: string;
  images: string[];
  featured?: boolean;
}

export interface Colors {
  light: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    text: string;
    background: string;
    cardBackground: string;
    borderColor: string;
    hover: string;
    link: string;
    linkHover: string;
  };
  dark: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    text: string;
    background: string;
    cardBackground: string;
    borderColor: string;
    hover: string;
    link: string;
    linkHover: string;
  };
  enableDarkMode: boolean;
}

export function getSettings(lang: Language): Settings {
  return (settingsData as any)[lang];
}

export function getProducts(): Product[] {
  return productsData.products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productsData.products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.products.filter(p => p.category === category);
}

export function getColors(): Colors {
  return colorsData as Colors;
}

