import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Grid, 
  List, 
  Search, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Settings
} from 'lucide-react';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'sliding', name: 'Sliding Doors' },
    { id: 'swing', name: 'Swing Doors' },
    { id: 'revolving', name: 'Revolving Doors' },
    { id: 'telescopic', name: 'Telescopic Doors' },
    { id: 'hermetic', name: 'Hermetic Doors' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Sliding Door System',
      category: 'sliding',
      image: 'https://images.pexels.com/photos/8478401/pexels-photo-8478401.jpeg',
      price: 'Contact for Quote',
      description: 'High-performance sliding doors for commercial and residential applications',
      features: ['Smooth Operation', 'Energy Efficient', 'Safety Sensors', 'Remote Control'],
      applications: ['Shopping Malls', 'Offices', 'Airports', 'Hotels']
    },
    {
      id: 2,
      name: 'Automatic Swing Door',
      category: 'swing',
      image: 'https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg',
      price: 'Contact for Quote',
      description: 'Reliable swing door systems with advanced safety features',
      features: ['Bi-directional', 'Emergency Break-out', 'Hold-Open Function', 'Manual Override'],
      applications: ['Hospitals', 'Retail Stores', 'Restaurants', 'Corporate Offices']
    },
    {
      id: 3,
      name: 'Revolving Door Entrance',
      category: 'revolving',
      image: 'https://images.unsplash.com/photo-1709911782675-4e7f30f483f2',
      price: 'Contact for Quote',
      description: 'Energy-efficient revolving doors for premium building entrances',
      features: ['Climate Control', 'Security Integration', 'Speed Control', 'Emergency Stops'],
      applications: ['Corporate Buildings', 'Hotels', 'Banks', 'Government Buildings']
    },
    {
      id: 4,
      name: 'Telescopic Sliding System',
      category: 'telescopic',
      image: 'https://images.pexels.com/photos/1730814/pexels-photo-1730814.jpeg',
      price: 'Contact for Quote',
      description: 'Space-saving telescopic doors for wide openings',
      features: ['Multi-leaf Design', 'Smooth Operation', 'Compact Installation', 'High Traffic'],
      applications: ['Airports', 'Metro Stations', 'Shopping Centers', 'Exhibition Halls']
    },
    {
      id: 5,
      name: 'Hermetic Door System',
      category: 'hermetic',
      image: 'https://images.unsplash.com/photo-1628374558008-566cb197e189',
      price: 'Contact for Quote',
      description: 'Airtight sealing doors for sterile environments',
      features: ['Airtight Seal', 'Cleanroom Compatible', 'Easy Maintenance', 'Durable Design'],
      applications: ['Hospitals', 'Laboratories', 'Pharmaceuticals', 'Food Processing']
    },
    {
      id: 6,
      name: 'Heavy Duty Sliding Door',
      category: 'sliding',
      image: 'https://images.pexels.com/photos/4254891/pexels-photo-4254891.jpeg',
      price: 'Contact for Quote',
      description: 'Industrial-grade sliding doors for demanding environments',
      features: ['Heavy Load Capacity', 'Weather Resistant', 'Security Features', '24/7 Operation'],
      applications: ['Warehouses', 'Manufacturing', 'Loading Docks', 'Industrial Facilities']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const productFeatures = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Advanced safety sensors and emergency features'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Low power consumption with intelligent controls'
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Tailored solutions for specific requirements'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-200">
              Comprehensive range of automatic doors for every application - 
              from commercial complexes to residential buildings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-gray-500" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-blue-600 text-sm">+{product.features.length - 2} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                      <Link 
                        to="/contact" 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center"
                      >
                        Get Quote
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {categories.find(cat => cat.id === product.category)?.name}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <CheckCircle size={16} className="text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                          <ul className="space-y-1">
                            {product.applications.map((app, i) => (
                              <li key={i} className="text-gray-600">• {app}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-blue-600">{product.price}</span>
                        <Link 
                          to="/contact" 
                          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center"
                        >
                          Get Detailed Quote
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Our expert team can design and manufacture automatic doors tailored to your specific requirements. 
              Contact us for a personalized consultation.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-2xl hover:shadow-yellow-500/25"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;