import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Users, Target, TrendingUp, CheckCircle, Clock, Globe } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CropToCrop: React.FC = () => {
  const { dispatch } = useCart();

  const features = [
    {
      icon: Sprout,
      title: 'Agricultural Expertise',
      description: 'Specialized knowledge of farming, crop management, and agricultural technologies'
    },
    {
      icon: Users,
      title: 'Seasonal Workforce',
      description: 'Connect with experienced seasonal workers and agricultural specialists'
    },
    {
      icon: Target,
      title: 'Skills Matching',
      description: 'Match candidates based on specific crop experience and farming techniques'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to international agricultural talent and migrant worker programs'
    }
  ];

  const benefits = [
    'Access to specialized agricultural talent',
    'Seasonal workforce planning',
    'Crop-specific skill matching',
    'Compliance with agricultural labor laws',
    'Multi-language candidate support',
    'Weather-dependent scheduling'
  ];

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: 'crop-to-crop-agent',
        name: 'Crop-to-Crop Recruitment Agent',
        price: 399,
        type: 'agent',
        description: 'Specialized recruitment for agricultural sector'
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link
                  to="/products/aira"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← Back to AIRA
                </Link>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Crop-to-Crop
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Recruitment</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Specialized recruitment solutions for the agricultural sector. Connect farms with experienced workers, seasonal staff, and agricultural specialists across different crop cycles.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={addToCart}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Add to Cart - $399/month
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Agricultural Matching</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Sprout className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Corn Harvest Specialist</div>
                        <div className="text-xs text-gray-600">5 years experience • Available Sept-Nov</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <Users className="h-5 w-5 text-emerald-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Seasonal Crew Leader</div>
                        <div className="text-xs text-gray-600">Team of 12 • Multi-crop experience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600">
                    Matched 89 agricultural workers this season
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Agricultural Recruitment Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized platform understands the unique challenges of agricultural recruitment and seasonal workforce management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Crop-to-Crop?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Seasonal Insights</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Spring Planting</span>
                    <span className="text-sm font-medium text-gray-900">Mar-May</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Summer Maintenance</span>
                    <span className="text-sm font-medium text-gray-900">Jun-Aug</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full w-[60%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Harvest Season</span>
                    <span className="text-sm font-medium text-gray-900">Sep-Nov</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Agricultural Recruitment?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Connect with experienced agricultural workers and build your seasonal workforce with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={addToCart}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-green-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CropToCrop;