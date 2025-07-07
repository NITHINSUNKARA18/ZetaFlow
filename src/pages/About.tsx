import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Zap, Shield, TrendingUp, CheckCircle, Star, Award, Target, Globe, Heart, X } from 'lucide-react';

const About: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [counters, setCounters] = useState({
    productivity: 0,
    timeSavings: 0,
    businesses: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      productivity: 10,
      timeSavings: 60,
      businesses: 500
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        productivity: Math.round(targets.productivity * easeOut),
        timeSavings: Math.round(targets.timeSavings * easeOut),
        businesses: Math.round(targets.businesses * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Implementation',
      description: 'Get up and running with our AI agents in minutes, not months. Our plug-and-play solutions integrate seamlessly with your existing workflows.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption and security protocols ensure your data is always protected. SOC 2 compliant with 99.9% uptime guarantee.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Human-Centric AI',
      description: 'Our AI enhances human capabilities rather than replacing them. Designed to augment your team\'s productivity and decision-making.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Measurable ROI',
      description: 'Track real-time performance metrics and see immediate impact on your bottom line. Average ROI of 300% within the first quarter.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Vision',
      description: 'Founded with the mission to democratize AI for businesses of all sizes'
    },
    {
      year: '2024',
      title: 'AIRA Launch',
      description: 'Launched our flagship AI Recruitment Agent, revolutionizing hiring processes'
    },
    {
      year: '2024',
      title: 'Rapid Growth',
      description: 'Reached 500+ satisfied customers across 25+ countries'
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Expanding our AI agent suite to transform every aspect of business operations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-purple-600/5"></div>
        
        {/* Background Decorations */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-100 to-purple-100 text-primary-800 mb-6">
              <Award className="h-4 w-4 mr-2" />
              Revolutionizing Business with AI
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Revolutionizing Workflows with
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Intelligent AI Agents</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 max-w-4xl mx-auto">
              The Future of Work is Here
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At ZetaFlow.AI, we're not just building AI tools – we're crafting the future of intelligent business automation. 
              Our mission is to empower every organization with AI agents that think, learn, and adapt.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We believe that artificial intelligence should amplify human potential, not replace it. 
                  Our mission is to democratize AI technology, making it accessible and beneficial for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded by a team of AI researchers and business automation experts, ZetaFlow.AI emerged from a simple observation: 
                  while AI technology was advancing rapidly, most businesses struggled to harness its power effectively.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-red-500 mr-3" />
                  Our Founding Story
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  It all started in a small garage in Silicon Valley, where our founders witnessed firsthand how manual, 
                  repetitive tasks were consuming valuable human creativity and innovation. They envisioned a world where 
                  AI agents could handle the mundane, freeing humans to focus on what they do best – create, innovate, and connect.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Impact</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary-50 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600">25+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">500+</div>
                      <div className="text-sm text-gray-600">Businesses</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">1M+</div>
                      <div className="text-sm text-gray-600">Tasks Automated</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZetaFlow.AI Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ZetaFlow.AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI company. We're your partners in transformation, 
              committed to delivering measurable results and exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforming Businesses Worldwide
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our AI agents are delivering measurable results across industries and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                {counters.productivity}x
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">Productivity Boost</div>
              <div className="text-primary-200">Average increase in team efficiency</div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                {counters.timeSavings}%
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">Time Savings</div>
              <div className="text-primary-200">Reduction in manual task completion time</div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                {counters.businesses}+
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">Satisfied Businesses</div>
              <div className="text-primary-200">Companies transformed with our AI agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bold vision to a global AI platform, here's how we're shaping the future of work.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-purple-600 rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies that are already leveraging AI to drive growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Primary CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your AI Journey Today</h3>
              <p className="text-lg text-gray-600 mb-8">
                Experience the power of AIRA with our 30-day free trial. No credit card required, 
                full access to all features, and dedicated support to get you started.
              </p>
              
              <div className="space-y-4">
                <Link
                  to="/products/aira"
                  className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Started Free</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>30-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary CTA - Video */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Watch Our Story</h3>
              <div className="relative group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="ZetaFlow.AI Story"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="h-8 w-8 text-primary-600 ml-1" />
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600">
                  Discover how we're revolutionizing business automation with AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl">Video Coming Soon</p>
                <p className="text-gray-400 mt-2">Our story video is currently in production</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;