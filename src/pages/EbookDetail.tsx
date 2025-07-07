import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Download, Star, CheckCircle, Clock, Users, Award, Shield } from 'lucide-react';

const EbookDetail: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const ebookPrice = 59;

  const handlePurchase = () => {
    // Redirect to contact page for purchase assistance
    window.location.href = '/contact?product=ebook&price=' + ebookPrice;
  };

  const features = [
    'Step-by-step automation blueprints',
    'AI tool recommendations and setup guides',
    'No-code platform tutorials',
    'Revenue optimization strategies',
    'Case studies and real examples',
    'Templates and worksheets',
    'Bonus: Video tutorials',
    'Lifetime updates included'
  ];

  const chapters = [
    {
      title: 'Chapter 1: The Solopreneur\'s Dilemma',
      description: 'Understanding the challenges of scaling as a one-person business'
    },
    {
      title: 'Chapter 2: The AI Revolution for Solo Entrepreneurs',
      description: 'How artificial intelligence is changing the game for individual creators'
    },
    {
      title: 'Chapter 3: No-Code Tools That Scale',
      description: 'Essential platforms and tools for automation without programming'
    },
    {
      title: 'Chapter 4: Building Your First Income Stream',
      description: 'Step-by-step guide to creating your first automated revenue source'
    },
    {
      title: 'Chapter 5: Scaling Multiple Revenue Streams',
      description: 'Strategies for managing and growing multiple income sources'
    },
    {
      title: 'Chapter 6: Advanced Automation Techniques',
      description: 'Pro-level strategies for maximum efficiency and profit'
    },
    {
      title: 'Chapter 7: Monitoring and Optimization',
      description: 'How to track performance and continuously improve your systems'
    },
    {
      title: 'Chapter 8: Future-Proofing Your Business',
      description: 'Staying ahead of trends and adapting to market changes'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Digital Entrepreneur',
      content: 'This book completely transformed my approach to building passive income. I implemented the strategies and saw a 300% increase in monthly revenue within 3 months.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Freelance Consultant',
      content: 'The no-code automation techniques in this book saved me 20+ hours per week. Now I can focus on high-value activities while my systems work for me.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Online Course Creator',
      content: 'Incredibly practical and actionable. The AI tools recommended in this book have become essential parts of my business infrastructure.',
      rating: 5
    }
  ];

  if (showSuccessMessage) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Our sales team will contact you shortly to complete your purchase and provide download instructions.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens next?</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Sales team will contact you within 2 hours</li>
                <li>✓ Secure payment processing</li>
                <li>✓ Instant download link provided</li>
                <li>✓ Access to bonus materials</li>
                <li>✓ Lifetime updates included</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Link
                to="/resources"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 mr-4"
              >
                Browse More Resources
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link
                  to="/resources"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← Back to Resources
                </Link>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  Bestselling E-book
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  The Automated Income Engine
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                  A Solopreneur's Guide to Building Repetitive Monthly Revenue with AI and No-Code
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover how to build multiple streams of automated income using cutting-edge AI tools and no-code platforms. Perfect for entrepreneurs who want to scale without hiring a team.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">(247 reviews)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <BookOpen className="h-5 w-5" />
                  <span>285 pages</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-gray-400 line-through">$599</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">90% OFF</span>
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                      $59
                    </div>
                    <div className="text-sm text-gray-600">One-time purchase • Lifetime access</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-600 font-medium mb-2">Limited Time Offer</div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Offer ends soon</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Contact Sales - $59</span>
                    </div>
                  </button>
                  
                  <Link
                    to="/contact"
                    className="w-full border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 text-center block"
                  >
                    Get More Information
                  </Link>
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mt-4">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">What You'll Get</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">285-page comprehensive guide</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-700">50+ AI tool recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Step-by-step tutorials</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-700">Bonus video content</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Inside This Game-Changing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8 comprehensive chapters packed with actionable strategies, real-world examples, and proven frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{chapter.title}</h3>
                <p className="text-gray-600">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This isn't just another business book. It's a complete system for building automated income streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Readers Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of entrepreneurs who have transformed their businesses with these strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Building Your Automated Income Engine Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Don't let this limited-time offer slip away. Transform your business and create the freedom you've always wanted.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-gray-400 line-through">$599</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">90% OFF</span>
              </div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text mb-2">
                $59
              </div>
              <div className="text-sm text-gray-600 mb-6">One-time purchase • Lifetime access</div>
              
              <button
                onClick={handlePurchase}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Contact Sales Now</span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-purple-100">
              <Shield className="h-5 w-5" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-100">
              <Users className="h-5 w-5" />
              <span>Join 10,000+ successful entrepreneurs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EbookDetail;