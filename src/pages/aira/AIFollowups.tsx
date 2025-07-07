import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Clock, Bot, Zap, CheckCircle, Mail, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const AIFollowups: React.FC = () => {
  const { dispatch } = useCart();

  const features = [
    {
      icon: MessageCircle,
      title: 'Intelligent Messaging',
      description: 'AI-crafted personalized follow-up messages for candidates and clients'
    },
    {
      icon: Clock,
      title: 'Smart Timing',
      description: 'Optimal timing analysis for maximum engagement and response rates'
    },
    {
      icon: Bot,
      title: 'Automated Sequences',
      description: 'Multi-step follow-up campaigns with intelligent branching logic'
    },
    {
      icon: Zap,
      title: 'Real-time Triggers',
      description: 'Instant follow-ups based on candidate and client actions'
    }
  ];

  const benefits = [
    'Increase response rates by 250%',
    'Automate 90% of follow-up communications',
    'Personalize at scale with AI',
    'Reduce manual follow-up time',
    'Improve candidate experience',
    'Track engagement analytics'
  ];

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: 'ai-followups-agent',
        name: 'AI-powered Follow-ups',
        price: 229,
        type: 'agent',
        description: 'Intelligent candidate and client communication'
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50 py-20">
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
                  AI-powered
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> Follow-ups</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Never miss a follow-up again. Our AI intelligently crafts personalized messages and automates your entire follow-up process for maximum engagement.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={addToCart}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Add to Cart - $229/month
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
                    <h3 className="text-lg font-semibold text-gray-900">AI Follow-up Queue</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Processing</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-violet-50 rounded-lg">
                      <Mail className="h-5 w-5 text-violet-600 mt-1" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Interview Follow-up</div>
                        <div className="text-xs text-gray-600">To: sarah.johnson@email.com</div>
                        <div className="text-xs text-violet-600">Sending in 2 hours</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Client Check-in</div>
                        <div className="text-xs text-gray-600">TechCorp recruitment update</div>
                        <div className="text-xs text-purple-600">Scheduled for tomorrow</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600">
                    47 follow-ups automated today
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
              Intelligent Follow-up Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your follow-up process with AI that understands context, timing, and personalization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Follow-up Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-violet-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow-up Performance</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Response Rate</span>
                    <span className="text-sm font-medium text-gray-900">82%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-600 h-2 rounded-full w-[82%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Automation Rate</span>
                    <span className="text-sm font-medium text-gray-900">90%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Time Saved</span>
                    <span className="text-sm font-medium text-gray-900">15 hrs/week</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Follow-ups?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Never miss another follow-up opportunity with intelligent AI automation that engages at the perfect moment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={addToCart}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-violet-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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

export default AIFollowups;