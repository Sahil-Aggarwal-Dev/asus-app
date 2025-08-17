import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { products } from '../data/products';
import { categories } from '../data/categories';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchFromUrl = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState(searchFromUrl);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Disable body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesAvailability = availability.length === 0 || availability.includes(product.availability);

      return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        case 'newest': return b.id.localeCompare(a.id);
        default: return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, priceRange, availability, sortBy]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-4">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 sticky top-20 h-fit">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            availability={availability}
            onAvailabilityChange={setAvailability}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Mobile Filters + Products */}
        <div className="flex-1 flex gap-2">

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setMobileOpen(true)}
              className="px-3 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
            >
              Filters
            </button>
          </div>

          {/* Products Grid */}
          {/* <div className="flex-1">
            <div className="mb-6 flex justify-between items-center w-full">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            <ProductGrid products={filteredProducts} />
          </div> */}

          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center w-full">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {/* Center the product grid */}
            <div className="flex justify-center">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <div
              className="fixed left-0 top-16 w-64 bg-white shadow-lg z-50 h-[calc(100%-64px)] transform transition-transform duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-lg font-bold">Filters</h2>
                <button onClick={() => setMobileOpen(false)} className="text-black text-xl">×</button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[70vh]">
                <ProductFilters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  availability={availability}
                  onAvailabilityChange={setAvailability}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>

  );
};

export default ProductsPage;
