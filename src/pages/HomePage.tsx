import React from 'react';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;