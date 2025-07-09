import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Shield, Users, TrendingUp, CheckCircle, Star, Play, Calendar, Clock } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const Home: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Agents',
      description: 'Intelligent agents that learn and adapt to your business processes'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline complex processes with smart automation'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless integration with your existing team workflows'
    }
  ];

  const products = [
    {
      name: 'AIRA - AI Recruitment Agent',
      description: 'Revolutionize your hiring process with intelligent candidate screening and engagement',
      features: ['Automated Resume Screening', 'Candidate Engagement', 'Interview Scheduling'],
      link: '/products/aira',
      gradient: 'from-brand-500 to-accent-600'
    },
    {
      name: 'AI Real Estate Agent',
      description: 'Transform property management and client interactions',
      features: ['Property Analysis', 'Client Matching', 'Market Insights'],
      link: '/products/real-estate',
      gradient: 'from-success-500 to-brand-600'
    },
    {
      name: 'AI Marketing Agent',
      description: 'Optimize campaigns and boost conversions with AI-driven insights',
      features: ['Campaign Optimization', 'Audience Targeting', 'Performance Analytics'],
      link: '/products/marketing',
      gradient: 'from-accent-500 to-error-600'
    },
    {
      name: 'AI Stock Market Agent',
      description: 'Make informed trading decisions with advanced market analysis',
      features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization'],
      link: '/products/stock-market',
      gradient: 'from-warning-500 to-brand-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director, TechCorp',
      content: 'AIRA has transformed our recruitment process. We\'ve reduced hiring time by 60% while improving candidate quality.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'TechCorp'
    },
    {
      name: 'Michael Chen',
      role: 'Real Estate Broker',
      content: 'The AI Real Estate Agent has helped me close 40% more deals by identifying the perfect matches between properties and clients.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'Elite Properties'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      content: 'Our campaign ROI increased by 150% after implementing Zetaflow\'s AI Marketing Agent. It\'s a game-changer.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'Digital Dynamics'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Recruitment: Transforming Hiring Processes',
      description: 'Discover how artificial intelligence is revolutionizing the recruitment industry and what it means for the future of hiring.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI & Recruitment'
    },
    {
      id: 2,
      title: 'Automating Workflows: A Complete Guide for Modern Businesses',
      description: 'Learn how to implement workflow automation in your organization to boost productivity and reduce manual tasks.',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'Automation'
    },
    {
      id: 3,
      title: 'Building Scalable AI Agents: Best Practices and Implementation',
      description: 'Explore the key principles and strategies for developing AI agents that can scale with your business needs.',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Development'
    }
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section - Reduced top padding and improved alignment */}
        <section className="relative bg-gradient-to-br from-brand-50 via-white to-accent-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-accent-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    AI Agents That
                    <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent"> Transform</span>
                    <br />Your Business
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Revolutionize your workflows with intelligent AI agents designed for recruitment, real estate, marketing, and trading. Automate complex processes and boost productivity by up to 10x.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/products/aira"
                    className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-brand-50 hover:border-brand-300 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Play className="mr-2 h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative z-10">Watch Demo</span>
                  </button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">10x</div>
                    <div className="text-sm text-gray-600">Productivity Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">60%</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Enlarged AI Agent Active Section */}
              <div className="relative animate-float lg:justify-self-center">
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 w-full max-w-lg mx-auto">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-success-500 rounded-full animate-pulse"></div>
                      <span className="text-lg font-semibold text-gray-700">AI Agent Active</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-brand-50 to-accent-50 rounded-xl p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Bot className="h-7 w-7 text-brand-600" />
                          <span className="text-lg font-semibold text-gray-900">AIRA Processing</span>
                        </div>
                        <div className="text-base text-gray-600 mb-4">Screening 47 candidates...</div>
                        <div className="bg-white rounded-full h-3">
                          <div className="bg-gradient-to-r from-brand-500 to-accent-500 h-3 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-gray-50 to-brand-50 rounded-xl p-5 text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">94%</div>
                          <div className="text-sm text-gray-600">Match Score</div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-accent-50 rounded-xl p-5 text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">2.3s</div>
                          <div className="text-sm text-gray-600">Process Time</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-success-50 to-brand-50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-base font-medium text-gray-700">Real-time Analytics</span>
                          <span className="text-sm text-success-600 font-semibold">Live</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Candidates Processed</span>
                            <span className="text-sm font-semibold text-gray-900">247</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Quality Matches</span>
                            <span className="text-sm font-semibold text-success-600">89</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Time Saved Today</span>
                            <span className="text-sm font-semibold text-brand-600">4.2 hrs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-brand-400 to-accent-400 rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-accent-400 to-error-400 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zetaflow?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI agents are designed to seamlessly integrate with your existing workflows while providing unprecedented automation capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-brand transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our AI Agent Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI agents tailored for different industries and use cases, each designed to maximize efficiency and results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={product.link}
                      className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold rounded-xl hover:from-brand-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-brand-600 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Latest Blog Posts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and best practices in AI automation and workflow optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-brand-200 overflow-hidden"
                >
                  {/* Category Badge */}
                  <div className="p-6 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-600 bg-brand-100 rounded-full mb-4">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold rounded-xl hover:from-brand-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-brand-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Read More</span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              ))}
            </div>
            
            {/* View All Posts Button */}
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="group inline-flex items-center px-8 py-4 border-2 border-brand-600 text-base font-medium rounded-xl text-brand-600 bg-white hover:bg-brand-50 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View All Posts</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with Zetaflow AI agents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-brand-50 rounded-2xl p-8 hover:shadow-brand transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-brand-200 relative overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-100 to-accent-100 rounded-full opacity-50 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-warning-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info with Image */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg group-hover:text-brand-700 transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-brand-600 font-medium text-sm mb-1">
                          {testimonial.role}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-600 to-accent-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-brand-100 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already using Zetaflow AI agents to automate their workflows and boost productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/aira"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-brand-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Schedule Demo</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </>
  );
};

export default Home;