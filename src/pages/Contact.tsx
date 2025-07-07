import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, Users, Zap, MessageCircle, ArrowRight, Globe, Star, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    interestedIn: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'contact@zetaflow.ai',
      secondary: 'support@zetaflow.ai',
      description: 'Get in touch via email',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 987-6543',
      description: 'Speak with our team',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: '123 AI Street',
      secondary: 'Tech Valley, CA 94000',
      description: 'Come see us in person',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Mon-Fri: 9AM-6PM PST',
      secondary: 'Sat: 10AM-4PM PST',
      description: 'When we\'re available',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: '2-Hour Response',
      description: 'Lightning-fast replies to your inquiries'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'AI specialists ready to help'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 assistance worldwide'
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Dedicated account management'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
            </div>

            {/* Thank You Message */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-full opacity-50 transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                    Thank You!
                  </h1>
                  <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                </div>
                
                <p className="text-2xl text-gray-700 mb-8 font-medium">
                  Your message has been received successfully
                </p>
                
                <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
                    <Users className="h-6 w-6 mr-2 text-primary-600" />
                    What happens next?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
                      <p className="text-sm text-gray-600">Our AIRA specialists will review your requirements within 2 hours</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                      <p className="text-sm text-gray-600">We'll reach out within 24 hours to discuss your needs</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Demo</h3>
                      <p className="text-sm text-gray-600">Schedule a personalized AIRA demo tailored to your business</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Need immediate assistance?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700 font-medium">contact@zetaflow.ai</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center justify-center space-x-2 text-green-600 mb-8">
                  <Zap className="h-5 w-5" />
                  <span className="font-medium">Average response time: 2 hours</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/products/aira'}
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Explore AIRA Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-purple-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-100 to-purple-100 text-primary-800 mb-6 animate-fade-in">
              <MessageCircle className="h-4 w-4 mr-2" />
              Let's Transform Your Business Together
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Get in
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ready to revolutionize your recruitment with AIRA? Our AI specialists are here to help you transform your hiring process and achieve unprecedented efficiency.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`group p-6 bg-gradient-to-r ${method.bgGradient} rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                          <p className="text-gray-700 font-medium">{method.primary}</p>
                          <p className="text-gray-600 text-sm">{method.secondary}</p>
                          <p className="text-gray-500 text-xs mt-1">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Support Card */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Need Immediate Help?</h3>
                </div>
                <p className="text-primary-100 mb-6 leading-relaxed">
                  Our support team is available 24/7 for existing customers. Get instant access to our knowledge base and live chat support.
                </p>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                  Access Support Portal
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                            focusedField === 'name'
                              ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                        {focusedField === 'name' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                            focusedField === 'email'
                              ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="your.email@company.com"
                        />
                        {focusedField === 'email' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                            focusedField === 'company'
                              ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Your company name"
                        />
                        {focusedField === 'company' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                            focusedField === 'phone'
                              ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {focusedField === 'phone' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                            focusedField === 'subject'
                              ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <option value="">Select a subject</option>
                          <option value="aira-demo">🤖 AIRA Demo Request</option>
                          <option value="aira-pricing">💰 AIRA Pricing Inquiry</option>
                          <option value="aira-trial">🆓 Free Trial Request</option>
                          <option value="support">🛠️ Technical Support</option>
                          <option value="partnership">🤝 Partnership</option>
                          <option value="other">📋 Other</option>
                        </select>
                        {focusedField === 'subject' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-2">
                        Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="interestedIn"
                          name="interestedIn"
                          value={formData.interestedIn}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('interestedIn')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                            focusedField === 'interestedIn'
                              ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <option value="">Select AIRA plan</option>
                          <option value="starter">🚀 AIRA Starter ($299/month)</option>
                          <option value="professional">💼 AIRA Professional ($599/month)</option>
                          <option value="enterprise">🏢 AIRA Enterprise ($1299/month)</option>
                          <option value="custom">⚙️ Custom Solution</option>
                        </select>
                        {focusedField === 'interestedIn' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                          focusedField === 'message'
                            ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Tell us about your recruitment needs and how AIRA can help transform your hiring process..."
                      />
                      {focusedField === 'message' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-colors duration-200"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700 flex items-center">
                      <Heart className="h-4 w-4 text-red-500 mr-2" />
                      I'd like to receive updates about AIRA and Zetaflow products
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;