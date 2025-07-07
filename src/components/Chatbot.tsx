import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Bot, Settings, ArrowRight, Users, ShoppingCart, Sparkles } from 'lucide-react';

type ChatbotPosition = 'right-middle' | 'right-bottom' | 'bottom-middle' | 'left-middle';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [position, setPosition] = useState<ChatbotPosition>('right-bottom');
  const [showPositionSettings, setShowPositionSettings] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const greetingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const initialMessages: Message[] = [
    {
      id: '1',
      text: "👋 Hey there! I'm AIRA, your AI assistant from Zetaflow! I'm here to help you discover how our AI Recruitment Agent can transform your hiring process. What would you like to learn about?",
      isBot: true,
      timestamp: new Date(),
      options: [
        "🤖 Tell me about AIRA",
        "📄 Resume Screening Demo",
        "👥 Candidate Engagement",
        "📅 Interview Scheduling",
        "📊 Hiring Analytics",
        "💰 Pricing & Plans",
        "🛒 How to Get Started"
      ]
    }
  ];

  // Show greeting message after component mounts
  useEffect(() => {
    greetingTimeoutRef.current = setTimeout(() => {
      setShowGreeting(true);
    }, 2000);

    // Hide greeting after 8 seconds
    const hideGreetingTimeout = setTimeout(() => {
      setShowGreeting(false);
    }, 10000);

    return () => {
      if (greetingTimeoutRef.current) {
        clearTimeout(greetingTimeoutRef.current);
      }
      clearTimeout(hideGreetingTimeout);
    };
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getPositionClasses = () => {
    switch (position) {
      case 'right-middle':
        return 'right-4 top-1/2 transform -translate-y-1/2';
      case 'right-bottom':
        return 'right-4 bottom-4';
      case 'bottom-middle':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      case 'left-middle':
        return 'left-4 top-1/2 transform -translate-y-1/2';
      default:
        return 'right-4 bottom-4';
    }
  };

  const chatFlows = {
    "🤖 Tell me about AIRA": [
      {
        text: "AIRA is our flagship AI Recruitment Agent that revolutionizes hiring! 🚀\n\nIt's a complete recruitment automation suite that includes:\n\n• AI-powered resume screening\n• Automated candidate engagement\n• Smart interview scheduling\n• Real-time hiring analytics\n• Business development tools\n• Intelligent follow-ups\n\nAIRA can reduce your hiring time by 60% while improving candidate quality by 85%!",
        options: [
          "📄 Resume Screening Demo",
          "👥 Candidate Engagement", 
          "📅 Interview Scheduling",
          "📊 Hiring Analytics",
          "💰 View Pricing",
          "🔙 Back to Main Menu"
        ]
      }
    ],
    "💰 Pricing & Plans": [
      {
        text: "Here are our AIRA pricing plans: 💼\n\n🚀 **Starter Plan: $299/month**\n• Up to 100 candidates/month\n• Basic resume screening\n• Email automation\n• Standard support\n\n💼 **Professional Plan: $599/month** ⭐ Most Popular\n• Up to 500 candidates/month\n• Advanced AI screening\n• Multi-channel communication\n• Analytics dashboard\n• Priority support\n\n🏢 **Enterprise Plan: $1299/month**\n• Unlimited candidates\n• Custom AI models\n• Advanced integrations\n• Dedicated account manager\n• 24/7 premium support\n\n✨ All plans include a 30-day free trial!",
        options: [
          "🆓 Start Free Trial",
          "🛒 Contact Sales Team",
          "📞 Schedule Demo",
          "📋 Compare Plans",
          "🔙 Back to Main Menu"
        ]
      }
    ],
    "🛒 How to Get Started": [
      {
        text: "Getting started with AIRA is super easy! 🎉\n\nHere's how:\n\n1️⃣ **Choose Your Plan** - Select the plan that fits your needs\n2️⃣ **Start Free Trial** - Get 30 days of full access\n3️⃣ **Quick Setup** - Our team helps you get configured\n4️⃣ **Start Hiring** - Begin transforming your recruitment!\n\nNo credit card required for the trial, and you can cancel anytime. Our success team will guide you through every step!",
        options: [
          "🆓 Start Free Trial",
          "🛒 Contact Sales Team",
          "📞 Schedule Demo",
          "💬 Get Custom Quote",
          "🔙 Back to Main Menu"
        ]
      }
    ]
  };

  const detailedResponses = {
    "📄 Resume Screening Demo": "🎯 AIRA's resume screening is incredible! It uses advanced AI to analyze resumes in seconds, scoring candidates based on job requirements and eliminating bias.\n\n✨ **Key Features:**\n• Process 100+ resumes in under 30 seconds\n• 94% accuracy in candidate matching\n• Bias-free evaluation\n• Detailed candidate reports\n• Integration with major ATS platforms\n\n📈 **Results:** 90% time reduction, 75% improvement in candidate quality!\n\nWant to see it in action?",
    "👥 Candidate Engagement": "💬 Transform how you connect with candidates! AIRA automates personalized communication through multiple channels.\n\n🌟 **Features:**\n• Multi-channel outreach (email, SMS, social)\n• Personalized messaging at scale\n• 24/7 AI chatbot support\n• Smart follow-up sequences\n• Candidate experience tracking\n\n📊 **Impact:** 300% increase in response rates, 85% better candidate satisfaction!",
    "📅 Interview Scheduling": "⏰ Say goodbye to scheduling nightmares! AIRA's smart scheduling coordinates everything automatically.\n\n🎯 **Capabilities:**\n• Cross-timezone coordination\n• Calendar integration (Google, Outlook)\n• Automatic meeting links & reminders\n• Panel interview coordination\n• Rescheduling automation\n\n⚡ **Results:** 85% reduction in scheduling time, 96% success rate!",
    "📊 Hiring Analytics": "📈 Get complete visibility into your hiring process with real-time dashboards!\n\n🔍 **Analytics Include:**\n• Pipeline conversion rates\n• Time-to-hire metrics\n• Source effectiveness\n• Recruiter performance\n• Cost-per-hire tracking\n• Predictive insights\n\n💡 **Benefit:** Make data-driven decisions to optimize your entire recruitment funnel!"
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Add bot response after typing delay
    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message;

      if (detailedResponses[option as keyof typeof detailedResponses]) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: detailedResponses[option as keyof typeof detailedResponses],
          isBot: true,
          timestamp: new Date(),
          options: [
            "🔙 Back to Main Menu",
            "💰 View Pricing",
            "📞 Schedule Demo",
            "🛒 Contact Sales Team"
          ]
        };
      } else if (chatFlows[option as keyof typeof chatFlows]) {
        const flow = chatFlows[option as keyof typeof chatFlows][0];
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: flow.text,
          isBot: true,
          timestamp: new Date(),
          options: flow.options
        };
      } else if (option === "🔙 Back to Main Menu") {
        botResponse = initialMessages[0];
      } else if (option === "💰 View Pricing") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: chatFlows["💰 Pricing & Plans"][0].text,
          isBot: true,
          timestamp: new Date(),
          options: chatFlows["💰 Pricing & Plans"][0].options
        };
      } else if (option === "🆓 Start Free Trial") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "🎉 Awesome choice! Ready to start your free trial?\n\nClick the button below to visit our AIRA page where you can start your 30-day free trial. You'll have full access to all features with no credit card required!\n\n✨ Our onboarding team will help you get set up in minutes!",
          isBot: true,
          timestamp: new Date(),
          options: [
            "🚀 Go to AIRA Page",
            "📞 Schedule Onboarding Call",
            "🔙 Back to Main Menu"
          ]
        };
      } else if (option === "📞 Schedule Demo") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "📅 Perfect! I'd love to help you schedule a personalized demo!\n\nOur AIRA specialists will show you exactly how our AI can transform your hiring process. The demo includes:\n\n• Live resume screening demonstration\n• Candidate engagement walkthrough\n• Custom setup for your needs\n• Q&A session\n\nClick below to book your demo!",
          isBot: true,
          timestamp: new Date(),
          options: [
            "📞 Book Demo Now",
            "🤖 Go to AIRA Page",
            "🔙 Back to Main Menu"
          ]
        };
      } else if (option === "🛒 Contact Sales Team" || option === "💬 Get Custom Quote") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "🤝 Excellent! Our sales team is excited to help you!\n\nThey'll help you:\n• Choose the perfect AIRA plan\n• Get a custom quote\n• Set up your free trial\n• Answer any questions\n• Provide implementation support\n\n📞 Average response time: Under 2 hours!\n\nReady to connect?",
          isBot: true,
          timestamp: new Date(),
          options: [
            "📞 Contact Sales Now",
            "🚀 Go to AIRA Page",
            "💰 View Pricing",
            "🔙 Back to Main Menu"
          ]
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "🤔 I'm here to help you learn about AIRA! Is there anything specific you'd like to know about our AI Recruitment Agent?\n\nI can tell you about features, pricing, demos, or help you get started!",
          isBot: true,
          timestamp: new Date(),
          options: initialMessages[0].options
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleNavigation = (option: string) => {
    if (option === "🚀 Go to AIRA Page") {
      window.location.href = "/products/aira";
    } else if (option === "📞 Book Demo Now" || option === "📞 Contact Sales Now" || option === "📞 Schedule Onboarding Call") {
      window.location.href = "/contact";
    } else {
      handleOptionClick(option);
    }
  };

  const openChatbot = () => {
    setIsOpen(true);
    setShowGreeting(false);
    if (messages.length === 0) {
      setMessages(initialMessages);
    }
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Minimized Bot Icon with Greeting */}
      {!isOpen && (
        <div className={`fixed z-50 ${getPositionClasses()}`}>
          <div className="relative">
            {/* Greeting Message */}
            {showGreeting && (
              <div className="absolute bottom-16 right-0 mb-2 animate-slide-up">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-xs relative">
                  {/* Speech bubble arrow */}
                  <div className="absolute bottom-0 right-6 transform translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">
                        👋 Hey there! I'm AIRA
                      </p>
                    </div>
                    <button
                      onClick={() => setShowGreeting(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bot Button */}
            <button
              onClick={openChatbot}
              className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-primary-400 animate-pulse opacity-30"></div>
              
              {/* Bot icon */}
              <Bot className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Online indicator */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
                <Sparkles className="h-2 w-2 text-white" />
              </div>
            </button>
            
            {/* Position Settings */}
            <button
              onClick={() => setShowPositionSettings(!showPositionSettings)}
              className="absolute -top-2 -left-2 w-6 h-6 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
            >
              <Settings className="h-3 w-3" />
            </button>

            {showPositionSettings && (
              <div className="absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[200px] animate-fade-in">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                  <Settings className="h-4 w-4 mr-2 text-primary-600" />
                  Bot Position
                </h4>
                <div className="space-y-2">
                  {[
                    { key: 'right-middle', label: 'Right Middle', icon: '↗️' },
                    { key: 'right-bottom', label: 'Right Bottom', icon: '↘️' },
                    { key: 'bottom-middle', label: 'Bottom Middle', icon: '⬇️' },
                    { key: 'left-middle', label: 'Left Middle', icon: '↖️' }
                  ].map((pos) => (
                    <button
                      key={pos.key}
                      onClick={() => {
                        setPosition(pos.key as ChatbotPosition);
                        setShowPositionSettings(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center space-x-2 ${
                        position === pos.key
                          ? 'bg-primary-100 text-primary-700 shadow-md'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span>{pos.icon}</span>
                      <span>{pos.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full Chatbot */}
      {isOpen && (
        <div className={`fixed z-50 ${getPositionClasses()}`}>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-96 h-[500px] flex flex-col animate-slide-up overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AIRA Assistant</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-xs text-primary-100">AI Recruitment Expert • Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowPositionSettings(!showPositionSettings)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                    title="Position Settings"
                  >
                    <Settings className="h-4 w-4" />
                  </button>
                  <button
                    onClick={closeChatbot}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                    title="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Position Settings Dropdown */}
            {showPositionSettings && (
              <div className="absolute top-20 right-4 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[200px] z-10 animate-fade-in">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                  <Settings className="h-4 w-4 mr-2 text-primary-600" />
                  Bot Position
                </h4>
                <div className="space-y-2">
                  {[
                    { key: 'right-middle', label: 'Right Middle', icon: '↗️' },
                    { key: 'right-bottom', label: 'Right Bottom', icon: '↘️' },
                    { key: 'bottom-middle', label: 'Bottom Middle', icon: '⬇️' },
                    { key: 'left-middle', label: 'Left Middle', icon: '↖️' }
                  ].map((pos) => (
                    <button
                      key={pos.key}
                      onClick={() => {
                        setPosition(pos.key as ChatbotPosition);
                        setShowPositionSettings(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center space-x-2 ${
                        position === pos.key
                          ? 'bg-primary-100 text-primary-700 shadow-md'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span>{pos.icon}</span>
                      <span>{pos.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-md border border-gray-100'
                        : 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    {message.options && (
                      <div className="mt-4 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleNavigation(option)}
                            className="w-full text-left p-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-primary-50 hover:border-primary-200 transition-all duration-200 text-sm text-gray-700 flex items-center justify-between group shadow-sm hover:shadow-md"
                          >
                            <span className="font-medium">{option}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-primary-600" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">AIRA is typing...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleNavigation("🚀 Go to AIRA Page")}
                  className="flex items-center justify-center space-x-2 p-3 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md group"
                >
                  <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>Explore AIRA</span>
                </button>
                <button
                  onClick={() => handleNavigation("📞 Contact Sales Now")}
                  className="flex items-center justify-center space-x-2 p-3 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md group"
                >
                  <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>Contact Sales</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;