import React, { useState } from 'react';
import { HelpCircle, Book, MessageCircle, Video, Download, ExternalLink, Search, ChevronRight } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const HelpSupport: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', count: 24 },
    { id: 'getting-started', name: 'Getting Started', count: 6 },
    { id: 'user-management', name: 'User Management', count: 5 },
    { id: 'system-settings', name: 'System Settings', count: 4 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 5 },
    { id: 'api', name: 'API Documentation', count: 4 }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'Getting Started with Admin Portal',
      category: 'getting-started',
      description: 'Learn the basics of navigating and using the admin portal',
      readTime: '5 min read',
      type: 'article',
      popular: true
    },
    {
      id: 2,
      title: 'Managing User Accounts',
      category: 'user-management',
      description: 'How to create, edit, and manage user accounts effectively',
      readTime: '8 min read',
      type: 'article',
      popular: true
    },
    {
      id: 3,
      title: 'System Configuration Guide',
      category: 'system-settings',
      description: 'Complete guide to configuring system settings and preferences',
      readTime: '12 min read',
      type: 'article',
      popular: false
    },
    {
      id: 4,
      title: 'Troubleshooting Common Issues',
      category: 'troubleshooting',
      description: 'Solutions to frequently encountered problems',
      readTime: '6 min read',
      type: 'article',
      popular: true
    },
    {
      id: 5,
      title: 'API Authentication Setup',
      category: 'api',
      description: 'How to set up and manage API authentication',
      readTime: '10 min read',
      type: 'article',
      popular: false
    },
    {
      id: 6,
      title: 'Admin Portal Overview Video',
      category: 'getting-started',
      description: 'Video walkthrough of the admin portal features',
      readTime: '15 min watch',
      type: 'video',
      popular: true
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: MessageCircle,
      action: 'contact',
      color: 'blue'
    },
    {
      title: 'Download User Manual',
      description: 'Complete admin portal documentation',
      icon: Download,
      action: 'download',
      color: 'green'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      action: 'videos',
      color: 'purple'
    },
    {
      title: 'API Documentation',
      description: 'Technical API reference',
      icon: ExternalLink,
      action: 'api-docs',
      color: 'orange'
    }
  ];

  const faqs = [
    {
      question: 'How do I reset a user\'s password?',
      answer: 'Navigate to User Management, find the user, click the edit button, and select "Force Password Reset" option.'
    },
    {
      question: 'How can I backup system data?',
      answer: 'Go to System Settings > System tab and click "Create Backup". Backups are automatically created daily at 3 AM.'
    },
    {
      question: 'What are the system requirements?',
      answer: 'The admin portal works on all modern browsers. For optimal performance, we recommend Chrome, Firefox, or Safari with JavaScript enabled.'
    },
    {
      question: 'How do I configure SMTP settings?',
      answer: 'In System Settings > Email tab, enter your SMTP host, port, username, and password. Use the "Test Email Configuration" button to verify settings.'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'contact':
        alert('Contact support form would open here');
        break;
      case 'download':
        alert('User manual download would start here');
        break;
      case 'videos':
        alert('Video tutorials page would open here');
        break;
      case 'api-docs':
        window.open('https://docs.zetaflow.ai', '_blank');
        break;
    }
  };

  const getActionColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Help & Support
              </h2>
            </div>
          </div>

          {/* Search */}
          <div className="mt-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action.action)}
                className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${getActionColor(action.color)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
                <ChevronRight className="absolute top-4 right-4 h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-between ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Help Articles */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Help Articles</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {article.title}
                              </h4>
                              {article.popular && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Popular
                                </span>
                              )}
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                article.type === 'video' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {article.type === 'video' ? 'Video' : 'Article'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                            <p className="text-xs text-gray-500">{article.readTime}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="text-base font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Still Need Help?</h3>
                    <p className="text-blue-100 mb-4">
                      Can't find what you're looking for? Our support team is here to help you 24/7.
                    </p>
                    <button
                      onClick={() => handleQuickAction('contact')}
                      className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 border border-white/20"
                    >
                      Contact Support Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default HelpSupport;