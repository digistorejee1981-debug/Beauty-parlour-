export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'makeup' | 'skincare' | 'spa' | 'bridal';
  description: string;
  startingPrice: number;
  duration: string;
  popular?: boolean;
  image: string;
  benefits: string[];
}

export interface BeautyPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'makeup' | 'hair' | 'bridal' | 'interior' | 'skincare' | 'products';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tips: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  service: string;
  avatar: string;
  date: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
