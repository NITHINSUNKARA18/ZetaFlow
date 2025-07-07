import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users, Clock, Zap, CheckCircle, Bot, Mail } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CandidateEngagement: React.FC = () => {
  const { dispatch } = useCart();

  const features = [
    {
      icon: MessageSquare,
      title: 'Automated Messaging',
      description: 'Personalized communication at scale with intelligent message templates'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: '24/7 candidate support with natural language processing'
    },
    {
      icon: Mail,
      title: 'Multi-Channel Outreach',
      description: 'Email, SMS, and social media integration for maximum reach'
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'Automated follow-ups and interview scheduling based on candidate preferences'
    }
  ];

  const benefits = [
    'Increase candidate response rates by 300%',
    'Reduce time-to-hire by 45%',
    'Improve candidate experience scores',
    'Automate 80% of routine communications',
    'Track engagement metrics in real-time',
    'Personalize at scale with AI'
  ];

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: 'candidate-engagement-agent',
        name: 'Candidate Engagement Tool',
        price: 249,
        type: 'agent',
        description: 'Automated communication and follow-ups'
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
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
                  Candidate
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Engagement</span>
                  <br />Tool
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform candidate relationships with AI-powered engagement tools. Automate personalized communications, nurture talent pipelines, and create exceptional candidate experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={addToCart}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Add to Cart - $249/month
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
                    <h3 className="text-lg font-semibold text-gray-900">Live Engagement</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Welcome Message Sent</div>
                        <div className="text-xs text-gray-600">To: john.smith@email.com</div>
                        <div className="text-xs text-blue-600 mt-1">Opened • 2 min ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <Bot className="h-5 w-5 text-green-600 mt-1" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">AI Follow-up Scheduled</div>
                        <div className="text-xs text-gray-600">Interview reminder in 24h</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600">
                    Engaged 156 candidates today
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
              Intelligent Engagement Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create meaningful connections with candidates through personalized, automated engagement strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Engagement Results
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Engagement Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Response Rate</span>
                    <span className="text-sm font-medium text-gray-900">78%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Engagement Score</span>
                    <span className="text-sm font-medium text-gray-900">92%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-sm font-medium text-gray-900">65%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Engage Candidates Like Never Before?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your candidate relationships with intelligent, personalized engagement tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={addToCart}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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

export default CandidateEngagement;