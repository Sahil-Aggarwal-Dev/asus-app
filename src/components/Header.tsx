import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+1-234-567-8900</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>info@asussparparts.com</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Quality Spare Parts for Heavy Machinery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-xl">
              ASUS
            </div> */}
            <div className="Logo">
              <img
                decoding="async"
                src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
                alt="Backhoe Loader"
                className="h-16 w-auto mx-auto object-contain"
              />
            </div>
            <div className="ml-3">
              <div className="font-bold text-slate-900 text-lg">SPARE PARTS</div>
              <div className="text-orange-600 text-sm font-medium">Heavy Machinery Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Home</Link>
            <Link to="/products" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Products</Link>
            <Link to="/about" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Contact</Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </form>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-slate-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block py-2 text-slate-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/about" className="block py-2 text-slate-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 text-slate-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;