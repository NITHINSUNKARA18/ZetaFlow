import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  Users, 
  Clock, 
  TrendingUp, 
  Plus, 
  FileText, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Activity,
  Zap,
  Target,
  Calendar,
  HelpCircle,
  MessageCircle,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      // Simulate loading dashboard data
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Mock data for dashboard
  const metrics = [
    {
      title: 'Resumes Processed Today',
      value: '247',
      change: '+12%',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Active Workflows',
      value: '18',
      change: '+3',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'purple'
    },
    {
      title: 'Processing Time Reduction',
      value: '89%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Clock,
      color: 'orange'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'workflow',
      title: 'Resume screening completed',
      description: 'Processed 45 candidates for Software Engineer position',
      time: '2 minutes ago',
      status: 'completed',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'integration',
      title: 'ATS integration triggered',
      description: 'Synced candidate data with Greenhouse',
      time: '15 minutes ago',
      status: 'completed',
      icon: Zap
    },
    {
      id: 3,
      type: 'workflow',
      title: 'Candidate engagement started',
      description: 'Automated follow-up sequence initiated for 12 candidates',
      time: '1 hour ago',
      status: 'in-progress',
      icon: Users
    },
    {
      id: 4,
      type: 'alert',
      title: 'High-priority candidate identified',
      description: 'John Smith scored 98% match for Senior Developer role',
      time: '2 hours ago',
      status: 'attention',
      icon: Target
    }
  ];

  const quickActions = [
    {
      title: 'Start a New Workflow',
      description: 'Create and configure a new AI workflow',
      icon: Plus,
      color: 'blue',
      action: () => alert('New workflow creation would open here')
    },
    {
      title: 'View Reports',
      description: 'Access detailed analytics and insights',
      icon: BarChart,
      color: 'green',
      action: () => alert('Reports dashboard would open here')
    },
    {
      title: 'Manage Integrations',
      description: 'Configure third-party integrations',
      icon: Settings,
      color: 'purple',
      action: () => alert('Integrations management would open here')
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading your dashboard...</h2>
          <p className="text-gray-600">Please wait while we prepare your workspace</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <img 
                src="/new trasparent.png" 
                alt="ZetaFlow.AI" 
                className="h-10 w-auto"
              />
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-primary-600 font-medium">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Workflows</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Integrations</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Reports</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Settings</a>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                    <div className="text-xs text-gray-500">{user?.company}</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Users className="h-4 w-4 mr-3" />
                      Profile
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </a>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-primary-100 text-lg">
                Your AI workflows are running smoothly. Here's what's happening today.
              </p>
            </div>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Create New Workflow</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${metric.color}-100 rounded-xl flex items-center justify-center`}>
                  <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
                </div>
                <div className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.title}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <div className="flex items-center space-x-2">
                    <select
                      value={selectedTimeRange}
                      onChange={(e) => setSelectedTimeRange(e.target.value)}
                      className="text-sm border border-gray-300 rounded-lg px-3 py-1"
                    >
                      <option value="1d">Last 24 hours</option>
                      <option value="7d">Last 7 days</option>
                      <option value="30d">Last 30 days</option>
                    </select>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Filter className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.status === 'completed' ? 'bg-green-100' :
                        activity.status === 'in-progress' ? 'bg-blue-100' :
                        'bg-orange-100'
                      }`}>
                        <activity.icon className={`h-5 w-5 ${
                          activity.status === 'completed' ? 'text-green-600' :
                          activity.status === 'in-progress' ? 'text-blue-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Panel */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-${action.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className={`h-5 w-5 text-${action.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{action.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{action.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Need Help?</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get assistance with your AI workflows and integrations.
              </p>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <FileText className="h-4 w-4" />
                  <span>Documentation</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;