import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Brain, Target, Clock, CheckCircle, Star, TrendingUp, ExternalLink, Crown, Zap, Users, Shield, Sparkles, Award, CloudLightning as Lightning } from 'lucide-react';

const AutomatedResumeScreeningDetail: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced NLP algorithms analyze resumes for skills, experience, and cultural fit'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'Intelligent matching algorithm scores candidates against job requirements'
    },
    {
      icon: Clock,
      title: 'Instant Processing',
      description: 'Process hundreds of resumes in seconds, not hours'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'AI improves accuracy based on your hiring decisions and feedback'
    }
  ];

  const benefits = [
    'Reduce screening time by 90%',
    'Eliminate unconscious bias',
    'Improve candidate quality by 75%',
    'Scale recruitment operations',
    'Standardize evaluation process',
    'Generate detailed candidate reports'
  ];

  const useCases = [
    {
      title: 'High-Volume Recruitment',
      description: 'Perfect for companies receiving hundreds of applications daily',
      example: 'Tech companies during hiring seasons'
    },
    {
      title: 'Specialized Roles',
      description: 'Identify candidates with specific technical skills and certifications',
      example: 'Software engineers, data scientists, healthcare professionals'
    },
    {
      title: 'Remote Hiring',
      description: 'Efficiently screen global talent pools for remote positions',
      example: 'Distributed teams, freelance platforms'
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
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
    },
    {
      name: 'Professional',
      price: 599,
      originalPrice: 899,
      description: 'Most popular choice for growing teams',
      features: [
        'Up to 500 candidate profiles/month',
        'Advanced AI screening with 94% accuracy',
        'Multi-channel communication (Email, SMS, Social)',
        'Real-time analytics dashboard',
        'Priority support with 2-hour response',
        '30-day free trial + 30-day money-back guarantee',
        'Custom integrations (ATS, HRIS)',
        'Dedicated account manager',
        'Advanced reporting & insights',
        'Bias detection & elimination tools'
      ],
      popular: true,
      savings: 'Save $300/month',
      badge: 'Best Value',
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700 transform hover:scale-105 shadow-xl hover:shadow-2xl'
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
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
    }
  ];

  const handleInteractiveDemo = () => {
    // Redirect to contact page with demo parameter
    window.location.href = '/contact?demo=resume-screening&source=interactive-button';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
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
                  Automated Resume
                  <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"> Screening</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your hiring process with AI-powered resume analysis that identifies the best candidates in seconds, not hours. Eliminate bias and improve hiring quality with intelligent automation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleInteractiveDemo}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Try Interactive Demo
                  <ExternalLink className="ml-2 h-5 w-5" />
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
                    <h3 className="text-lg font-semibold text-gray-900">Resume Analysis</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Processing</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <FileText className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">John_Smith_Resume.pdf</div>
                        <div className="text-xs text-gray-600">Match Score: 94%</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Sarah_Johnson_CV.pdf</div>
                        <div className="text-xs text-gray-600">Match Score: 87%</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600">
                    Processed 247 resumes in 2.3 seconds
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered resume screening uses advanced natural language processing to analyze and rank candidates automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Key Benefits
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
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Time Reduction</span>
                    <span className="text-sm font-medium text-gray-900">90%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Accuracy Improvement</span>
                    <span className="text-sm font-medium text-gray-900">75%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Cost Savings</span>
                    <span className="text-sm font-medium text-gray-900">60%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our resume screening solution adapts to various industries and hiring scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="text-sm text-primary-600 font-medium">
                  Example: {useCase.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our free trial and scale as your recruitment needs grow. All plans include full access to our AI-powered features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-primary-500 ring-opacity-50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <>
                    {/* Enhanced Popular Badge */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2 border-4 border-white">
                        <Crown className="h-5 w-5" />
                        <span>{plan.badge}</span>
                        <Sparkles className="h-4 w-4" />
                      </div>
                    </div>
                    
                    {/* Savings Badge */}
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                        <Lightning className="h-3 w-3" />
                        <span>{plan.savings}</span>
                      </div>
                    </div>
                    
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
                  </>
                )}
                
                <div className={`relative p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-primary-600' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                          <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">
                            33% OFF
                          </div>
                        </div>
                      )}
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-primary-600' : 'text-gray-900'}`}>
                        ${plan.price}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Features List for Professional Plan */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.popular ? 'bg-primary-100' : 'bg-green-100'
                        }`}>
                          <CheckCircle className={`h-3 w-3 ${
                            plan.popular ? 'text-primary-600' : 'text-green-600'
                          }`} />
                        </div>
                        <span className={`text-sm leading-relaxed ${
                          plan.popular ? 'text-gray-800 font-medium' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center block transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                  
                  {plan.popular && (
                    <div className="mt-6">
                      {/* Enhanced Popular Plan Features */}
                      <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-4 mb-4">
                        <h4 className="text-sm font-bold text-primary-700 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Why Teams Choose Professional
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs text-primary-600">
                          <div className="flex items-center space-x-1">
                            <Zap className="h-3 w-3" />
                            <span>94% accuracy</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>500 profiles/mo</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Shield className="h-3 w-3" />
                            <span>Priority support</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Lightning className="h-3 w-3" />
                            <span>2hr response</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Money Back Guarantee */}
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-full">
                          <Shield className="h-4 w-4" />
                          <span className="font-medium">60-day money-back guarantee</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include a 30-day free trial with full access to features
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Experience Resume Screening in Action
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            See how our AI-powered resume screening works with real examples and live demonstrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleInteractiveDemo}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try Interactive Demo
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule Personal Demo
            </Link>
          </div>
          
          <div className="mt-8 text-primary-100 text-sm">
            <p>✓ No signup required • ✓ Real-time processing • ✓ Instant results</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Resume Screening?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their hiring process with AI-powered resume screening.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={handleInteractiveDemo}
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Try Demo Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomatedResumeScreeningDetail;