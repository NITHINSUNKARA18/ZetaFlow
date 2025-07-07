import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Calendar, Clock, Star, Bell, CheckCircle, Sparkles, Users, TrendingUp, MapPin } from 'lucide-react';

const RealEstateAgent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Main Coming Soon Content */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 sm:p-12 mb-8">
            {/* Icon and Badge */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
                <Home className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                Coming Soon!
              </div>
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Real Estate Agent
              <span className="block text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mt-2">
                Revolutionizing Property Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get ready for the future of real estate! Our AI Real Estate Agent will transform how you manage properties, 
              analyze markets, and connect with clients. Advanced AI-powered insights coming to revolutionize your real estate business.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm">AI-powered property valuation and market trend analysis</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Matching</h3>
                <p className="text-gray-600 text-sm">Intelligent property-client matching algorithms</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Intelligence</h3>
                <p className="text-gray-600 text-sm">Comprehensive neighborhood and location analytics</p>
              </div>
            </div>

            {/* Launch Timeline */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8 border border-green-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Expected Launch</h3>
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-2">
                Q2 2025
              </div>
              <p className="text-gray-700">
                We're working hard to bring you the most advanced AI real estate solution. 
                Join our waitlist to be the first to know when it's ready!
              </p>
            </div>

            {/* Notification Signup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                <Bell className="h-5 w-5 mr-2 text-green-600" />
                Get Early Access
              </h3>
              <p className="text-gray-600 mb-6">
                Be among the first to experience our AI Real Estate Agent. Get exclusive early access and special pricing!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Join Waitlist
                </button>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Early access pricing</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Exclusive features</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/aira"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore AIRA (Available Now)</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-base font-medium rounded-xl text-green-600 bg-white hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Us for Updates</span>
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 p-6">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-green-500" />
                <span>AI-Powered Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Real-Time Market Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-green-500" />
                <span>Premium Features</span>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAgent;