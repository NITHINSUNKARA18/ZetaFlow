import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            E-books & Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your knowledge with our comprehensive collection of AI and automation guides written by industry experts.
          </p>
        </div>

        {/* Featured E-book */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                  🔥 Featured E-book
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  The Automated Income Engine
                </h2>
                <p className="text-xl text-purple-100">
                  A Solopreneur's Guide to Building Repetitive Monthly Revenue with AI and No-Code
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold line-through text-purple-200">$599</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">90% OFF</span>
                  </div>
                  <span className="text-3xl font-bold">$59</span>
                </div>
                <Link
                  to="/ebook/automated-income-engine"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn More & Get Instant Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-6 w-6 text-white" />
                      <span className="text-white font-medium">285 pages of actionable content</span>
                    </div>
                    <div className="text-purple-100">
                      ✓ 50+ AI tool recommendations<br />
                      ✓ Step-by-step automation blueprints<br />
                      ✓ Real case studies & examples<br />
                      ✓ Bonus video tutorials<br />
                      ✓ Lifetime updates included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our E-books Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our E-books?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Our e-books are crafted by industry experts with years of practical experience in AI and automation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Authors</h3>
                  <p className="text-gray-600">Written by industry leaders with years of practical experience in AI and automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Insights</h3>
                  <p className="text-gray-600">Practical strategies and step-by-step guides you can implement immediately in your business</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">∞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifetime Access</h3>
                  <p className="text-gray-600">Download once, access forever with free updates and additional content as we expand</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;