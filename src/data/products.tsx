import { Product } from '../types';

export const products: Product[] = [
  // Lights & Electricals
  {
    id: '1',
    name: 'LED Work Light 24V - Heavy Duty',
    partNumber: 'ASU-LED-001',
    category: 'lights-electricals',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/162568/backhoe-machine-excavator-digging-162568.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-intensity LED work light for backhoe loaders with superior brightness',
    detailedDescription: 'Professional-grade LED work light designed specifically for heavy machinery. Features weatherproof construction, shock-resistant housing, and ultra-bright LED technology for maximum visibility in all working conditions.',
    availability: 'In Stock',
    specifications: {
      'Voltage': '24V DC',
      'Power': '36W',
      'Lumens': '3600 LM',
      'Beam Pattern': 'Flood',
      'Housing': 'Die-cast aluminum',
      'IP Rating': 'IP67',
      'Operating Temperature': '-40°C to +85°C'
    },
    compatibility: ['Backhoe Loader 580', 'Backhoe Loader 590', 'Excavator Series'],
    warranty: '2 Years',
    featured: true,
    tags: ['LED', 'Work Light', '24V', 'Heavy Duty', 'Waterproof']
  },
  {
    id: '2',
    name: 'Complete Wiring Harness Kit',
    partNumber: 'ASU-WH-002',
    category: 'lights-electricals',
    price: 159.99,
    image: 'https://images.pexels.com/photos/162568/backhoe-machine-excavator-digging-162568.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/162568/backhoe-machine-excavator-digging-162568.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete wiring harness for electrical systems with premium connectors',
    detailedDescription: 'Comprehensive wiring harness kit including all necessary connectors, terminals, and protective sheathing. Manufactured to OEM specifications with high-grade copper conductors.',
    availability: 'In Stock',
    specifications: {
      'Wire Gauge': '12-18 AWG',
      'Connector Type': 'Deutsch DT Series',
      'Length': '15 meters',
      'Temperature Rating': '-40°C to +125°C',
      'Voltage Rating': '600V'
    },
    compatibility: ['All Backhoe Models', 'Excavator Series'],
    warranty: '1 Year',
    featured: false,
    tags: ['Wiring', 'Harness', 'Electrical', 'OEM']
  },
  {
    id: '3',
    name: 'Heavy Duty Alternator 12V/24V',
    partNumber: 'ASU-ALT-003',
    category: 'lights-electricals',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-output alternator for reliable charging system performance',
    detailedDescription: 'Premium alternator designed for heavy-duty applications. Features enhanced cooling, robust construction, and superior electrical output for demanding work environments.',
    availability: 'Low Stock',
    specifications: {
      'Output': '120A',
      'Voltage': '12V/24V',
      'Mounting': 'Standard SAE',
      'Cooling': 'Internal Fan',
      'Regulator': 'Internal'
    },
    compatibility: ['Backhoe Loader 580', 'Backhoe Loader 590'],
    warranty: '2 Years',
    featured: true,
    tags: ['Alternator', 'Charging', '12V', '24V', 'Heavy Duty']
  },

  // Hydraulic Seal Kits
  {
    id: '4',
    name: 'Hydraulic Cylinder Seal Kit - Complete',
    partNumber: 'ASU-HSK-001',
    category: 'hydraulic-sealkits',
    price: 79.99,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete seal kit for hydraulic cylinders with premium materials',
    detailedDescription: 'Professional-grade hydraulic seal kit containing all necessary seals, O-rings, and gaskets for complete cylinder rebuild. Made from high-quality polyurethane and NBR materials.',
    availability: 'In Stock',
    specifications: {
      'Material': 'Polyurethane/NBR',
      'Pressure Rating': '350 Bar',
      'Temperature Range': '-30°C to +100°C',
      'Cylinder Bore': '80-120mm',
      'Rod Diameter': '45-70mm'
    },
    compatibility: ['Boom Cylinder', 'Arm Cylinder', 'Bucket Cylinder'],
    warranty: '1 Year',
    featured: true,
    tags: ['Hydraulic', 'Seals', 'Cylinder', 'Complete Kit']
  },
  {
    id: '5',
    name: 'Boom Cylinder Seal Set',
    partNumber: 'ASU-BCS-002',
    category: 'hydraulic-sealkits',
    price: 129.99,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Specialized seals for boom cylinders with extended durability',
    detailedDescription: 'High-performance seal set specifically designed for boom cylinder applications. Features enhanced wear resistance and superior sealing performance under extreme conditions.',
    availability: 'In Stock',
    specifications: {
      'Material': 'Polyurethane',
      'Hardness': '90 Shore A',
      'Pressure Rating': '400 Bar',
      'Cylinder Type': 'Boom Cylinder',
      'Service Life': '2000+ hours'
    },
    compatibility: ['Backhoe Loader 580', 'Backhoe Loader 590'],
    warranty: '18 Months',
    featured: false,
    tags: ['Boom', 'Cylinder', 'Seals', 'Heavy Duty']
  },
  {
    id: '6',
    name: 'Hydraulic Pump Seal Kit',
    partNumber: 'ASU-HPS-003',
    category: 'hydraulic-sealkits',
    price: 199.99,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-pressure pump seals and gaskets for optimal performance',
    detailedDescription: 'Premium hydraulic pump seal kit designed for high-pressure applications. Includes all necessary seals, gaskets, and O-rings for complete pump maintenance.',
    availability: 'In Stock',
    specifications: {
      'Pressure Rating': '450 Bar',
      'Material': 'FKM/NBR',
      'Temperature Range': '-20°C to +150°C',
      'Pump Type': 'Variable Displacement',
      'Flow Rate': '120 L/min'
    },
    compatibility: ['Main Hydraulic Pump', 'Pilot Pump'],
    warranty: '2 Years',
    featured: true,
    tags: ['Pump', 'Seals', 'High Pressure', 'Variable Displacement']
  },

  // Gear Parts
  {
    id: '7',
    name: 'Transmission Gear Set - Complete',
    partNumber: 'ASU-TGS-001',
    category: 'gear-parts',
    price: 499.99,
    originalPrice: 599.99,
    image: 'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete transmission gear assembly with precision engineering',
    detailedDescription: 'Professional-grade transmission gear set manufactured to exact OEM specifications. Features hardened steel construction, precision machining, and comprehensive quality testing.',
    availability: 'In Stock',
    specifications: {
      'Material': 'Hardened Steel',
      'Gear Ratio': '4.5:1',
      'Torque Rating': '2500 Nm',
      'Heat Treatment': 'Case Hardened',
      'Precision Grade': 'DIN 6'
    },
    compatibility: ['Powershift Transmission', '4WD Models'],
    warranty: '3 Years',
    featured: true,
    tags: ['Transmission', 'Gears', 'Complete Set', 'Hardened Steel']
  },
  {
    id: '8',
    name: 'Differential Gear Assembly',
    partNumber: 'ASU-DG-002',
    category: 'gear-parts',
    price: 349.99,
    image: 'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Heavy-duty differential gear components for reliable power transfer',
    detailedDescription: 'Robust differential gear assembly designed for heavy-duty applications. Provides smooth power distribution and enhanced traction control in challenging terrain.',
    availability: 'Low Stock',
    specifications: {
      'Gear Ratio': '3.73:1',
      'Material': 'Alloy Steel',
      'Load Capacity': '15 Tons',
      'Lubrication': 'Oil Bath',
      'Service Life': '5000+ hours'
    },
    compatibility: ['Rear Axle', 'Front Axle (4WD)'],
    warranty: '2 Years',
    featured: false,
    tags: ['Differential', 'Gears', 'Power Transfer', 'Heavy Duty']
  },
  {
    id: '9',
    name: 'Final Drive Gear System',
    partNumber: 'ASU-FDG-003',
    category: 'gear-parts',
    price: 289.99,
    image: 'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/159275/macro-gear-gear-wheel-cogs-159275.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Final drive gear system components for optimal ground speed control',
    detailedDescription: 'Precision-engineered final drive gear system providing optimal speed reduction and torque multiplication for ground drive applications.',
    availability: 'In Stock',
    specifications: {
      'Reduction Ratio': '25:1',
      'Input Speed': '2000 RPM',
      'Output Torque': '8000 Nm',
      'Efficiency': '95%',
      'Mounting': 'Flange Mount'
    },
    compatibility: ['Track Drive', 'Wheel Drive'],
    warranty: '2 Years',
    featured: false,
    tags: ['Final Drive', 'Speed Reduction', 'Torque', 'Ground Drive']
  }
];