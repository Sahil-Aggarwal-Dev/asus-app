export interface Product {
  id: string;
  name: string;
  partNumber: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  detailedDescription: string;
  availability: "In Stock" | "Low Stock" | "Out of Stock";
  specifications: Record<string, string>;
  compatibility?: string[];
  warranty?: string;
  featured: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  image: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  partNumber: string;
  message: string;
  inquiryType: string;
  urgency: string;
}

export interface Team {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}
