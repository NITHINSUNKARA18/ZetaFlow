import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Clock, Target, TrendingUp, CheckCircle, Bot, Loader2 } from 'lucide-react';

const AIRAPage: React.FC = () => {
  const navigate = useNavigate();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const features = [
    {
      icon: Users,
      title: 'Automated Resume Screening',
      description: 'AI-powered candidate evaluation and ranking',
      link: '/aira/automated-resume-screening'
    },
    {
      icon: Target,
      title: 'Crop-to-crop Recruitment',
      description: 'Specialized recruitment for agricultural sector',
      link: '/aira/crop-to-crop'
    },
    {
      icon: Bot,
      title: 'Candidate Engagement Tool',
      description: 'Automated communication and follow-ups',
      link: '/aira/candidate-engagement'
    },
    {
      icon: Clock,
      title: 'Scheduling Automation',
      description: 'Smart interview scheduling and coordination',
      link: '/aira/scheduling-automation'
    },
    {
      icon: TrendingUp,
      title: 'Automated Bench Sales',
      description: 'Optimize consultant placement and sales',
      link: '/aira/bench-sales'
    },
    {
      icon: Target,
      title: 'Hiring Dashboards',
      description: 'Real-time analytics and insights',
      link: '/aira/hiring-dashboards'
    },
    {
      icon: Users,
      title: 'Business Development Module',
      description: 'Lead generation and client management',
      link: '/aira/business-development'
    },
    {
      icon: Bot,
      title: 'AI-powered Follow-ups',
      description: 'Intelligent candidate and client communication',
      link: '/aira/ai-followups'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 299,
      description: 'Perfect for small recruitment teams',
      features: [
        'Up to 100 candidate profiles/month',
        'Basic resume screening',
        'Email automation',
        'Standard support',
        '30-day free trial'
      ]
    },
    {
      name: 'Professional',
      price: 599,
      description: 'Ideal for growing recruitment agencies',
      features: [
        'Up to 500 candidate profiles/month',
        'Advanced AI screening',
        'Multi-channel communication',
        'Analytics dashboard',
        'Priority support',
        '30-day free trial'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1299,
      description: 'For large-scale recruitment operations',
      features: [
        'Unlimited candidate profiles',
        'Custom AI models',
        'Advanced integrations',
        'Dedicated account manager',
        '24/7 premium support',
        '30-day free trial'
      ]
    }
  ];

  const handleContactSales = async (plan: typeof pricingPlans[0]) => {
    setLoadingPlan(plan.name);
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate to contact page with plan details in URL params
    navigate('/contact?plan=' + plan.name.toLowerCase() + '&price=' + plan.price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  <Bot className="h-4 w-4 mr-2" />
                  AI Recruitment Agent
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  AIRA - Revolutionize Your
                  <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Hiring Process</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your recruitment workflow with AI-powered candidate screening, engagement, and placement automation. Reduce hiring time by 60% while improving candidate quality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleContactSales(pricingPlans[1])}
                  disabled={loadingPlan === pricingPlans[1].name}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loadingPlan === pricingPlans[1].name ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      Contact Sales Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Schedule Demo
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">60%</div>
                  <div className="text-sm text-gray-600">Faster Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Better Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Live AIRA Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">247</div>
                      <div className="text-sm text-gray-600">Candidates Screened</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">89</div>
                      <div className="text-sm text-gray-600">Qualified Matches</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Processing Speed</span>
                      <span className="font-medium">2.3s per resume</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Recruitment Automation Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AIRA provides end-to-end recruitment automation with specialized modules for every aspect of the hiring process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your AIRA Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your recruitment needs. Contact our sales team to get started with the perfect plan for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => handleContactSales(plan)}
                      disabled={loadingPlan === plan.name}
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700 transform hover:scale-105'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                    >
                      {loadingPlan === plan.name ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Connecting...
                        </div>
                      ) : (
                        'Contact Sales Team'
                      )}
                    </button>
                    
                    <Link
                      to="/contact"
                      className="w-full py-2 px-6 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300 text-center block"
                    >
                      Schedule Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using AIRA to streamline their hiring process and find the best talent faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContactSales(pricingPlans[1])}
              disabled={loadingPlan === pricingPlans[1].name}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loadingPlan === pricingPlans[1].name ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
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

export default AIRAPage;