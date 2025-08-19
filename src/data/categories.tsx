import { Category } from '../types';
import { Zap, Settings, Cog } from 'lucide-react';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Lights & Electricals',
    description: 'Complete range of lighting systems, wiring harnesses, alternators, and electrical components for heavy machinery',
    icon: <Zap size={32} />,
    count: 100,
    image: 'https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/asus_lights.jpg',
    featured: true
  },
  {
    id: '2',
    name: 'Hydraulic Seal Kits',
    description: 'High-quality seals, gaskets, and O-rings for hydraulic systems, cylinders, and pumps',
    icon: <Settings size={32} />,
    count: 100,
    image: 'https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/sealkit_cover.webp',
    featured: true
  },
  {
    id: '3',
    name: 'Gear Parts',
    description: 'Precision engineered gears, bearings, transmission components, and drive systems',
    icon: <Cog size={32} />,
    count: 150,
    image: 'https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/asus_gear_cover.jpeg',
    featured: true
  }
];