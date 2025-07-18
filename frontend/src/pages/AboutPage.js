import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Globe, 
  Clock, 
  Target, 
  Heart,
  CheckCircle,
  TrendingUp,
  Shield,
  Wrench
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Cities Served', icon: Globe },
    { number: '99.9%', label: 'Customer Satisfaction', icon: Heart }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use premium materials and cutting-edge technology to ensure every door meets the highest quality standards.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Our customers are at the center of everything we do. We build lasting relationships through exceptional service.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously invest in research and development to bring the latest automatic door technologies to market.'
    },
    {
      icon: Wrench,
      title: 'Reliability',
      description: 'From installation to maintenance, we provide dependable solutions that our clients can trust for years to come.'
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Arabian Link Doors established with a vision to revolutionize automatic door solutions in India'
    },
    {
      year: '2012',
      title: 'Middle East Expansion',
      description: 'Extended operations to UAE and other Middle Eastern countries'
    },
    {
      year: '2015',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management systems'
    },
    {
      year: '2018',
      title: 'Metro Projects',
      description: 'Became preferred partner for major metro rail projects across India'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched smart door systems with IoT integration and remote monitoring'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as the leading automatic door solutions provider in the region'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'CE Marking Compliance',
    'EN 16005 Safety Standards',
    'ANSI/BHMA Standards',
    'Green Building Certification',
    'Fire Safety Compliance'
  ];

  return (
    <div className="min-h-screen bg-white">
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
              About Arabian Link Doors
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-200 leading-relaxed">
              For over 15 years, we've been at the forefront of automatic door technology, 
              delivering innovative solutions that combine German engineering with local expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Arabian Link Doors began with a simple vision: to bring world-class automatic door 
                solutions to India and the Middle East. What started as a small enterprise has grown 
                into a leading provider of innovative entrance solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, 
                and a deep understanding of our customers' needs. From airports to shopping malls, 
                hospitals to luxury hotels, we've installed thousands of automatic doors that serve 
                millions of people every day.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand proud as a trusted partner to architects, contractors, and facility 
                managers across the region, delivering solutions that combine cutting-edge technology 
                with exceptional reliability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                alt="Modern office with automatic doors"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries behind Arabian Link Doors' success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1719050817004-c76eb7c75c99" 
                alt="Professional team"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Experienced Leadership
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our leadership team brings together decades of experience in automatic door technology, 
                engineering excellence, and customer service. Their vision and expertise have been 
                instrumental in establishing Arabian Link Doors as the industry leader.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Engineering Excellence with 25+ years combined experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">International certifications and technical expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Commitment to innovation and continuous improvement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Customer-first approach in all business decisions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by internationally recognized certifications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center"
              >
                <Award className="w-8 h-8 text-blue-600 mr-4" />
                <span className="text-gray-900 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust Arabian Link Doors for their 
              automatic door solutions. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-2xl hover:shadow-yellow-500/25"
              >
                Start Your Project
              </Link>
              <Link 
                to="/products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;