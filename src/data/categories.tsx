import { Category } from '../types';
import { Zap, Settings, Cog } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'lights-electricals',
    name: 'Lights & Electricals',
    description: 'Complete range of lighting systems, wiring harnesses, alternators, and electrical components for heavy machinery',
    icon: <Zap size={32} />,
    count: 150,
    image: 'https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true
  },
  {
    id: 'hydraulic-sealkits',
    name: 'Hydraulic Seal Kits',
    description: 'High-quality seals, gaskets, and O-rings for hydraulic systems, cylinders, and pumps',
    icon: <Settings size={32} />,
    count: 200,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true
  },
  {
    id: 'gear-parts',
    name: 'Gear Parts',
    description: 'Precision engineered gears, bearings, transmission components, and drive systems',
    icon: <Cog size={32} />,
    count: 175,
    image: 'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true
  }
];