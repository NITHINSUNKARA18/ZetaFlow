import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Calendar, Clock, Star, Bell, CheckCircle, Sparkles, BarChart, Shield, DollarSign } from 'lucide-react';

const StockMarketAgent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Main Coming Soon Content */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 sm:p-12 mb-8">
            {/* Icon and Badge */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
                <TrendingUp className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                Coming Soon!
              </div>
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Stock Market Agent
              <span className="block text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text mt-2">
                Intelligent Trading Decisions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your trading strategy! Our AI Stock Market Agent will provide advanced market analysis, 
              risk assessment, and portfolio optimization. Make informed trading decisions with cutting-edge artificial intelligence.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm">AI-powered technical and fundamental analysis</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                <p className="text-gray-600 text-sm">Intelligent risk evaluation and portfolio protection</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Optimization</h3>
                <p className="text-gray-600 text-sm">Automated portfolio rebalancing and optimization</p>
              </div>
            </div>

            {/* Launch Timeline */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 border border-yellow-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-900">Expected Launch</h3>
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text mb-2">
                Q4 2025
              </div>
              <p className="text-gray-700">
                We're building the most sophisticated AI trading solution to enhance your investment strategy. 
                Join our exclusive waitlist for early access and premium features!
              </p>
            </div>

            {/* Notification Signup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                <Bell className="h-5 w-5 mr-2 text-yellow-600" />
                Get Early Access
              </h3>
              <p className="text-gray-600 mb-6">
                Be among the first to experience our AI Stock Market Agent. Get exclusive early access and special pricing!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Join Waitlist
                </button>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span>Early access pricing</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span>Exclusive features</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span>Priority support</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/aira"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore AIRA (Available Now)</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-600 text-base font-medium rounded-xl text-yellow-600 bg-white hover:bg-yellow-50 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Us for Updates</span>
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 p-6">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span>Advanced AI Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span>24/7 Market Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Professional Trading Tools</span>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarketAgent;