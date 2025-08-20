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
    <header className="sticky top-0 z-50 font-roboto">
      {/* Unique Top Bar */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gray-400 py-1 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6 font-medium">
            <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors cursor-pointer">
              <Phone size={14} className="text-amber-400" />
              <span>+91-8295659245</span>
              <span>+91-8750108980</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors cursor-pointer">
              <Mail size={14} className="text-amber-400" />
              <span>info@asussparparts.com</span>
            </div>
          </div>
          <div className="hidden sm:block italic text-white-500">
            Premium Heavy Machinery Parts
          </div>
        </div>
      </div>

      {/* Unique Main Header */}
      <div className="bg-gradient-to-r from-black via-amber-1000 to-amber-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
                alt="Asus Logo"
                className="h-14 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <div className="text-2xl font-bebas font-bold text-white tracking-wider drop-shadow-md">
                  ASUS SPARE PARTS
                </div>
                <div className="text-amber-300 font-medium text-xs uppercase tracking-widest">
                  Heavy Machinery Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-gray-200 font-roboto font-medium text-sm">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="relative hover:text-amber-300 transition-colors group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden lg:flex relative">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-1.5 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-900 w-56 text-sm"
              />
              <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-500" />
            </form>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 text-gray-200 hover:text-amber-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="lg:hidden pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-1.5 border border-gray-700 rounded-full focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-gray-800 text-gray-200 text-sm"
              />
              <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
            </div>
          </form>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-gradient-to-b from-black via-amber-900 to-amber-700 transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-2' : 'max-h-0 overflow-hidden'
            }`}
        >
          <nav className="px-4 flex flex-col space-y-2 text-gray-200 font-roboto font-medium text-sm">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="hover:text-amber-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
