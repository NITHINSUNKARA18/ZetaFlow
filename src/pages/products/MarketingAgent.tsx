import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Calendar, Clock, Star, Bell, CheckCircle, Sparkles, TrendingUp, BarChart, Users } from 'lucide-react';

const MarketingAgent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-rose-400 to-red-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Main Coming Soon Content */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 sm:p-12 mb-8">
            {/* Icon and Badge */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
                <Target className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                Coming Soon!
              </div>
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Marketing Agent
              <span className="block text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mt-2">
                Supercharge Your Campaigns
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The future of marketing automation is here! Our AI Marketing Agent will revolutionize your campaigns with 
              intelligent optimization, audience targeting, and performance analytics. Get ready for unprecedented marketing ROI.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Optimization</h3>
                <p className="text-gray-600 text-sm">AI-powered campaign optimization for maximum ROI</p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-6 border border-rose-200">
                <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Audience Targeting</h3>
                <p className="text-gray-600 text-sm">Intelligent audience segmentation and targeting</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                <p className="text-gray-600 text-sm">Real-time campaign performance and insights</p>
              </div>
            </div>

            {/* Launch Timeline */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 mb-8 border border-pink-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-pink-600" />
                <h3 className="text-xl font-bold text-gray-900">Expected Launch</h3>
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-2">
                Q3 2025
              </div>
              <p className="text-gray-700">
                We're developing the most advanced AI marketing solution to transform your campaigns. 
                Join our waitlist for exclusive early access and special launch pricing!
              </p>
            </div>

            {/* Notification Signup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                <Bell className="h-5 w-5 mr-2 text-pink-600" />
                Get Early Access
              </h3>
              <p className="text-gray-600 mb-6">
                Be among the first to experience our AI Marketing Agent. Get exclusive early access and special pricing!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Join Waitlist
                </button>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-pink-500" />
                  <span>Early access pricing</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-pink-500" />
                  <span>Exclusive features</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-pink-500" />
                  <span>Priority support</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/aira"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore AIRA (Available Now)</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-pink-600 text-base font-medium rounded-xl text-pink-600 bg-white hover:bg-pink-50 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Us for Updates</span>
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 p-6">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-pink-500" />
                <span>AI-Powered Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-pink-500" />
                <span>Real-Time Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-pink-500" />
                <span>Advanced Targeting</span>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAgent;