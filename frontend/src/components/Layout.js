import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom hook to handle clicks outside of a component
function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Close menu when clicking outside
  useOutsideAlerter(mobileMenuRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header ref={mobileMenuRef} className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Arabian Link</span>
                <span className="text-sm text-blue-600 font-medium">Doors</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Quote
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 mt-4">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AL</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Arabian Link</span>
                  <span className="text-sm text-blue-400 font-medium">Doors</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of automatic door solutions across India and Middle East. 
                We specialize in sliding, swing, revolving, telescopic, and hermetic automatic doors 
                for commercial, residential, and industrial applications.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-sm text-gray-300">
                  <Phone size={16} className="mr-2 text-blue-400" />
                  +971 50 494 6149
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail size={16} className="mr-2 text-blue-400" />
                  arabianlinkdoors@gmail.com
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Sliding Doors</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Swing Doors</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Revolving Doors</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Telescopic Doors</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Hermetic Doors</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Installation</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Maintenance</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Repairs</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Custom Solutions</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Consultation</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Arabian Link Doors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;