import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  Settings, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Building,
  Wrench
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'German engineering with superior materials for long-lasting performance'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock support and emergency maintenance services'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored automatic door systems for your specific requirements'
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Certified with proven track record across India and Middle East'
    }
  ];

  const products = [
    {
      name: 'Sliding Doors',
      image: 'https://images.pexels.com/photos/8478401/pexels-photo-8478401.jpeg',
      description: 'Smooth, silent operation for high-traffic areas'
    },
    {
      name: 'Revolving Doors',
      image: 'https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg',
      description: 'Energy-efficient entrance solutions for premium buildings'
    },
    {
      name: 'Hermetic Doors',
      image: 'https://images.unsplash.com/photo-1628374558008-566cb197e189',
      description: 'Airtight sealing for hospitals and cleanroom applications'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Metro Rail Corporation',
      rating: 5,
      text: 'Exceptional quality and reliability. Arabian Link Doors has been our trusted partner for all metro station installations.'
    },
    {
      name: 'Sarah Al-Mansouri',
      company: 'Dubai Shopping Centre',
      rating: 5,
      text: 'Professional service and premium products. The automatic doors have been functioning flawlessly for over 3 years.'
    },
    {
      name: 'Dr. Priya Sharma',
      company: 'Aster Hospitals',
      rating: 5,
      text: 'Perfect hermetic door solutions for our operation theaters. Outstanding quality and prompt service.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Cities Served' },
    { number: '99.9%', label: 'Uptime Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/26763722/pexels-photo-26763722.jpeg" 
            alt="Modern automatic sliding doors" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Automatic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-300">
                Door Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Trust, Quality, and Reliability - Serving airports, malls, hospitals, and homes 
              across India and the Middle East with cutting-edge automatic door technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link 
                to="/products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 backdrop-blur-sm"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Arabian Link Doors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence through innovation, quality, and unmatched customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete automatic door solutions for every application
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-blue-200">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">{stat.number}</div>
                <div className="text-lg text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading organizations across India and Middle East
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Entrance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert consultation and competitive quotes for your automatic door project. 
              Our team is ready to deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-2xl hover:shadow-yellow-500/25"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;