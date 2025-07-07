import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Users, Shield, CheckCircle, Settings, TrendingUp, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'Custom AI Agent Development',
      description: 'We create bespoke AI agents tailored to your specific industry needs and business processes.',
      features: [
        'Industry-specific customization',
        'Integration with existing systems',
        'Scalable architecture',
        'Ongoing support and maintenance'
      ],
      buttonText: 'Get Started',
      buttonGradient: 'from-purple-600 to-indigo-600',
      iconBg: 'bg-purple-600'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent workflow automation solutions.',
      features: [
        'Process optimization',
        'Real-time monitoring',
        'Performance analytics',
        'Custom integrations'
      ],
      buttonText: 'Get Started',
      buttonGradient: 'from-green-600 to-emerald-600',
      iconBg: 'bg-green-600'
    },
    {
      icon: Users,
      title: 'Team Training & Onboarding',
      description: 'Comprehensive training programs to get your team up to speed with AI tools and best practices.',
      features: [
        'Hands-on workshops',
        'Best practices training',
        'Certification programs',
        '24/7 learning support'
      ],
      buttonText: 'Get Started',
      buttonGradient: 'from-blue-600 to-cyan-600',
      iconBg: 'bg-blue-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Support',
      description: 'Dedicated enterprise-grade support with priority assistance and custom SLA agreements.',
      features: [
        '24/7 priority support',
        'Dedicated account manager',
        'Custom SLA agreements',
        'Regular health checks'
      ],
      buttonText: 'Get Started',
      buttonGradient: 'from-orange-600 to-red-600',
      iconBg: 'bg-orange-600'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamlessly integrate AI solutions with your existing technology stack and business systems.',
      features: [
        'API development',
        'Legacy system integration',
        'Data migration',
        'Performance optimization'
      ],
      buttonText: 'Get Started',
      buttonGradient: 'from-indigo-600 to-purple-600',
      iconBg: 'bg-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting to measure the impact and ROI of your AI implementations.',
      features: [
        'Real-time dashboards',
        'Custom reporting',
        'ROI analysis',
        'Performance insights'
      ],
      buttonText: 'Get Started',
      buttonGradient: 'from-pink-600 to-rose-600',
      iconBg: 'bg-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'CTO, InnovateTech',
      content: 'Zetaflow\'s custom implementation service transformed our entire recruitment process. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Operations Director, GlobalCorp',
      content: 'The training program was exceptional. Our team was productive with the AI tools within just two weeks.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, StartupXYZ',
      content: 'Process automation service helped us scale our operations without increasing headcount. Incredible value.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert services to help you implement, optimize, and scale your AI solutions for maximum business impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Enhanced CTA Button */}
              <Link
                to="/contact"
                className={`group/btn inline-flex items-center justify-center w-full px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r ${service.buttonGradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.buttonGradient.split(' ').reverse().join(' ')} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                <span className="relative z-10">{service.buttonText}</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology to ensure successful AI implementation and maximum value delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">We analyze your current processes and identify optimization opportunities</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">Custom strategy development aligned with your business objectives</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Seamless deployment and integration with your existing systems</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600">Continuous monitoring and optimization for maximum performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Why Choose Zetaflow Services?
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  We bring deep expertise and proven methodologies to ensure your AI implementation success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
                  <p className="text-primary-100">Get up and running quickly with our proven implementation process</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-primary-100">Work with certified AI specialists and industry experts</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                  <p className="text-primary-100">We stand behind our work with performance guarantees</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our professional services have helped businesses transform their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how our professional services can help you achieve your AI transformation goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/products/aira"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50 hover:border-primary-300 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore Products</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;