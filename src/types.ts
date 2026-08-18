export type ServiceCategory = 'all' | 'hair' | 'skin' | 'nails' | 'waxing' | 'makeup';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'nails' | 'waxing' | 'makeup';
  description: string;
  price?: string;
  duration?: string;
  popular?: boolean;
  image: string;
  details?: string[];
}

export interface DealItem {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  originalPrice?: string;
  category: 'hair' | 'skin' | 'facial' | 'wax';
  features: string[];
  popular?: boolean;
  tag?: string;
}

export interface HairLengthPrice {
  length: string;
  thinPrice: string;
  thickPrice: string;
}

export interface HairDealMatrix {
  id: string;
  title: string;
  description: string;
  badge?: string;
  pricing: HairLengthPrice[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair' | 'makeup' | 'skin' | 'nails';
  imageUrl: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  service?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
