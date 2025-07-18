import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  Globe,
  Award
} from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'maintenance', name: 'Maintenance', count: 6 },
    { id: 'industry', name: 'Industry News', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 3 },
    { id: 'tips', name: 'Tips & Guides', count: 2 }
  ];

  const featuredArticle = {
    id: 1,
    title: 'The Future of Smart Automatic Doors: IoT Integration and Beyond',
    excerpt: 'Discover how Internet of Things (IoT) technology is revolutionizing automatic door systems, bringing predictive maintenance, energy efficiency, and enhanced security to modern buildings.',
    content: 'The integration of IoT technology in automatic door systems represents a significant leap forward in building automation and security. Modern smart doors can now collect and analyze usage data, predict maintenance needs, and integrate seamlessly with building management systems.',
    image: 'https://images.unsplash.com/photo-1594116558606-7713cada7c07',
    category: 'technology',
    author: 'Dr. Rajesh Kumar',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['IoT', 'Smart Technology', 'Future Trends'],
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: 'Essential Maintenance Tips for Automatic Sliding Doors',
      excerpt: 'Keep your automatic doors operating smoothly with these professional maintenance guidelines and troubleshooting tips.',
      image: 'https://images.pexels.com/photos/9050934/pexels-photo-9050934.jpeg',
      category: 'maintenance',
      author: 'Sarah Al-Mansouri',
      date: '2025-01-12',
      readTime: '5 min read',
      tags: ['Maintenance', 'Sliding Doors', 'Best Practices']
    },
    {
      id: 3,
      title: 'Airport Security: How Automatic Doors Enhance Safety Protocols',
      excerpt: 'Explore how modern automatic door systems contribute to airport security while maintaining passenger flow efficiency.',
      image: 'https://images.pexels.com/photos/1730814/pexels-photo-1730814.jpeg',
      category: 'industry',
      author: 'Ahmed Hassan',
      date: '2025-01-10',
      readTime: '6 min read',
      tags: ['Airport Security', 'Safety', 'Commercial']
    },
    {
      id: 4,
      title: 'Case Study: Delhi Metro - Telescopic Door Installation Success',
      excerpt: 'A detailed look at our successful installation of telescopic automatic doors across 50+ Delhi Metro stations.',
      image: 'https://images.unsplash.com/photo-1594116558606-7713cada7c07',
      category: 'case-studies',
      author: 'Priya Sharma',
      date: '2025-01-08',
      readTime: '7 min read',
      tags: ['Case Study', 'Metro', 'Telescopic Doors']
    },
    {
      id: 5,
      title: 'Energy Efficiency in Revolving Doors: Green Building Benefits',
      excerpt: 'How revolving doors contribute to LEED certification and energy savings in commercial buildings.',
      image: 'https://images.unsplash.com/photo-1709911782675-4e7f30f483f2',
      category: 'technology',
      author: 'Michael Thompson',
      date: '2025-01-05',
      readTime: '4 min read',
      tags: ['Energy Efficiency', 'Green Building', 'Revolving Doors']
    },
    {
      id: 6,
      title: 'Hermetic Doors in Healthcare: Maintaining Sterile Environments',
      excerpt: 'Understanding the critical role of hermetic automatic doors in hospitals and cleanroom applications.',
      image: 'https://images.unsplash.com/photo-1628374558008-566cb197e189',
      category: 'industry',
      author: 'Dr. Fatima Al-Zahra',
      date: '2025-01-03',
      readTime: '6 min read',
      tags: ['Healthcare', 'Hermetic Doors', 'Sterile Environment']
    },
    {
      id: 7,
      title: 'Choosing the Right Automatic Door for Your Business',
      excerpt: 'A comprehensive guide to selecting the perfect automatic door solution based on your specific needs.',
      image: 'https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg',
      category: 'tips',
      author: 'Jennifer Lee',
      date: '2025-01-01',
      readTime: '5 min read',
      tags: ['Buying Guide', 'Business', 'Selection Tips']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const industryInsights = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      description: 'Automatic door market expected to grow 7.2% annually through 2028'
    },
    {
      icon: Shield,
      title: 'Safety Standards',
      description: 'New EN 16005 safety standards enhance pedestrian protection'
    },
    {
      icon: Zap,
      title: 'Energy Savings',
      description: 'Smart doors can reduce building energy costs by up to 30%'
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
              Industry Insights & News
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-200">
              Stay updated with the latest trends, technologies, and best practices 
              in automatic door solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
              >
                <insight.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Featured Article
            </h2>
          </motion.div>
          
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300"
          >
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Featured
                  </span>
                  <span className="text-blue-600 text-sm font-medium">
                    {categories.find(cat => cat.id === featuredArticle.category)?.name}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredArticle.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(featuredArticle.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredArticle.readTime}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === article.category)?.name}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-3">{new Date(article.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-blue-600 text-xs">+{article.tags.length - 2} more</span>
                    )}
                  </div>
                  
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest industry insights, product updates, 
              and exclusive content delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More Resources
            </h2>
            <p className="text-lg text-gray-600">
              Discover additional resources to help with your automatic door projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Catalog</h3>
              <p className="text-gray-600 mb-4">Browse our complete range of automatic door solutions</p>
              <Link to="/products" className="text-blue-600 font-medium hover:text-blue-800">
                View Products →
              </Link>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600 mb-4">Get expert assistance for your automatic door needs</p>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                Contact Support →
              </Link>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600 mb-4">Learn about our company, values, and expertise</p>
              <Link to="/about" className="text-blue-600 font-medium hover:text-blue-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;