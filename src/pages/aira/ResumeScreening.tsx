import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Brain, Target, Clock, CheckCircle, Star, TrendingUp, ExternalLink } from 'lucide-react';

const ResumeScreening: React.FC = () => {
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

  const templates = [
    {
      name: 'Tech Screening Template',
      price: 49,
      description: 'Pre-configured for software development roles'
    },
    {
      name: 'Healthcare Screening Template',
      price: 59,
      description: 'Specialized for medical and healthcare positions'
    },
    {
      name: 'Finance Screening Template',
      price: 54,
      description: 'Tailored for financial services and banking roles'
    }
  ];

  const handleLearnMore = () => {
    // Open the Netlify claim page in a new tab
    window.open('https://app.netlify.com/claim?utm_source=bolt#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiI1aDZmZEstVktNTXZuRjNiRlZUaktfU2JKVGgzNlNfMjJheTlpTHhVX0Q4Iiwic2Vzc2lvbl9pZCI6IjUxNTI2ODk4OjU4OTg1ODEiLCJpYXQiOjE3NTE1NDQ1Nzl9.-VD5qFJLUN9eAYwC3SaIF0G7LuREI0a5Da0SFML1fds', '_blank');
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
                  onClick={handleLearnMore}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More & Try Demo
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

      {/* Templates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-configured screening templates optimized for different industries and roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${template.price}</span>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Integration Section */}
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
              onClick={handleLearnMore}
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

      {/* CTA Section */}
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
              onClick={handleLearnMore}
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

export default ResumeScreening;