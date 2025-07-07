import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Activity, 
  TrendingUp, 
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
  Zap,
  Target,
  Calendar,
  HelpCircle,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  DollarSign,
  Server,
  Shield,
  Clock,
  Globe,
  Cpu,
  Database,
  Wifi,
  RefreshCw,
  Play,
  Pause,
  Trash2,
  Edit,
  Plus,
  User
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);
  const [realTimeData, setRealTimeData] = useState({
    totalUsers: 1247,
    activeWorkflows: 89,
    revenue: 45678,
    systemStatus: 99.9
  });

  // Check admin authentication
  useEffect(() => {
    const isAdmin = localStorage.getItem('zetaflow_admin');
    if (!isAdmin) {
      navigate('/login');
    } else {
      // Simulate loading dashboard data
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  // Real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3),
        activeWorkflows: prev.activeWorkflows + Math.floor(Math.random() * 2) - 1,
        revenue: prev.revenue + Math.floor(Math.random() * 100),
        systemStatus: 99.5 + Math.random() * 0.5
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const handleLogout = () => {
    localStorage.removeItem('zetaflow_admin');
    navigate('/login');
  };

  // Mock data for dashboard
  const metrics = [
    {
      title: 'Total Users',
      value: realTimeData.totalUsers.toLocaleString(),
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Workflows',
      value: realTimeData.activeWorkflows.toString(),
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Monthly Revenue',
      value: `$${realTimeData.revenue.toLocaleString()}`,
      change: '+23.1%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'System Uptime',
      value: `${realTimeData.systemStatus.toFixed(1)}%`,
      change: '+0.1%',
      changeType: 'positive' as const,
      icon: Server,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const workflows = [
    {
      id: 1,
      name: 'Resume Screening AI',
      status: 'active',
      usage: '1,247 runs',
      lastModified: '2 hours ago',
      performance: 94
    },
    {
      id: 2,
      name: 'Candidate Engagement',
      status: 'active',
      usage: '856 runs',
      lastModified: '5 hours ago',
      performance: 87
    },
    {
      id: 3,
      name: 'Interview Scheduling',
      status: 'paused',
      usage: '432 runs',
      lastModified: '1 day ago',
      performance: 91
    },
    {
      id: 4,
      name: 'Bench Sales Automation',
      status: 'active',
      usage: '678 runs',
      lastModified: '3 hours ago',
      performance: 89
    }
  ];

  const systemHealth = [
    { name: 'API Response Time', value: '145ms', status: 'good', icon: Zap },
    { name: 'Database Performance', value: '99.2%', status: 'good', icon: Database },
    { name: 'Network Latency', value: '23ms', status: 'excellent', icon: Wifi },
    { name: 'CPU Usage', value: '34%', status: 'good', icon: Cpu },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center">
          {/* ZetaFlow Logo */}
          <div className="mb-8">
            <img 
              src="/new trasparent.png" 
              alt="ZetaFlow.AI" 
              className="h-20 w-auto mx-auto animate-pulse filter brightness-0 invert"
            />
          </div>

          {/* Spinner */}
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>

          {/* Loading Text */}
          <h2 className="text-2xl font-bold text-white mb-2">Loading Admin Dashboard...</h2>
          <p className="text-blue-200 animate-pulse">Initializing system controls and analytics...</p>

          {/* Progress Dots */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Top Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-lg shadow-lg border-b border-gray-700 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <img 
                src="/new trasparent.png" 
                alt="ZetaFlow.AI Admin" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-400" />
                <span className="text-white font-semibold">Admin Portal</span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* User Menu - Fixed z-index and positioning */}
              <div className="relative user-menu-container">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-white">Admin User</div>
                    <div className="text-xs text-gray-400">System Administrator</div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                    showUserMenu ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Enhanced Dropdown Menu with Fixed Z-Index */}
                {showUserMenu && (
                  <>
                    {/* Backdrop overlay */}
                    <div 
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
                      onClick={() => setShowUserMenu(false)}
                    ></div>
                    
                    {/* Dropdown menu */}
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-[9999] animate-slide-up">
                      {/* User Info Header */}
                      <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-red-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-lg font-bold text-gray-900">Admin User</div>
                            <div className="text-sm text-gray-600">admin@zetaflow.ai</div>
                            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mt-1">
                              <Shield className="h-3 w-3 mr-1" />
                              System Administrator
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <a 
                          href="#" 
                          className="flex items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">Admin Profile</div>
                            <div className="text-xs text-gray-500">Manage your admin account settings</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                        
                        <a 
                          href="#" 
                          className="flex items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                            <Settings className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">System Settings</div>
                            <div className="text-xs text-gray-500">Configure system parameters and preferences</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                        
                        <a 
                          href="#" 
                          className="flex items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                            <Users className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">User Management</div>
                            <div className="text-xs text-gray-500">Manage user accounts and permissions</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                        
                        <a 
                          href="#" 
                          className="flex items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                            <BarChart3 className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">Analytics Dashboard</div>
                            <div className="text-xs text-gray-500">View detailed system analytics and reports</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                        
                        <a 
                          href="#" 
                          className="flex items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                            <HelpCircle className="h-5 w-5 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">Help & Support</div>
                            <div className="text-xs text-gray-500">Get admin assistance and documentation</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
                        </a>
                      </div>

                      {/* Logout Section */}
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-6 py-4 text-sm text-red-600 hover:bg-red-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                            <LogOut className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-red-700">Sign Out</div>
                            <div className="text-xs text-red-500">Exit admin portal securely</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-red-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-200" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  Admin Dashboard
                </h1>
                <p className="text-blue-100 text-lg">
                  System overview and management controls at your fingertips.
                </p>
              </div>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Create Alert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${metric.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                } flex items-center space-x-1`}>
                  <TrendingUp className="h-4 w-4" />
                  <span>{metric.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.title}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Workflow Management */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-400" />
                    Workflow Management
                  </h2>
                  <div className="flex items-center space-x-2">
                    <select
                      value={selectedTimeRange}
                      onChange={(e) => setSelectedTimeRange(e.target.value)}
                      className="text-sm bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white"
                    >
                      <option value="1d">Last 24 hours</option>
                      <option value="7d">Last 7 days</option>
                      <option value="30d">Last 30 days</option>
                    </select>
                    <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {workflows.map((workflow) => (
                    <div key={workflow.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          workflow.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
                        }`}></div>
                        <div>
                          <h3 className="text-sm font-medium text-white">{workflow.name}</h3>
                          <p className="text-xs text-gray-400">{workflow.usage} • {workflow.lastModified}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm font-medium text-white">{workflow.performance}%</div>
                          <div className="w-16 bg-gray-600 rounded-full h-1">
                            <div 
                              className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full"
                              style={{ width: `${workflow.performance}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button className="p-1 text-gray-400 hover:text-green-400 rounded">
                            <Play className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-yellow-400 rounded">
                            <Pause className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-blue-400 rounded">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-400 rounded">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Health & Quick Actions */}
          <div className="space-y-6">
            {/* System Health */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Server className="h-5 w-5 mr-2 text-green-400" />
                System Health
              </h2>
              <div className="space-y-4">
                {systemHealth.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.status === 'excellent' ? 'bg-green-500/20' :
                        item.status === 'good' ? 'bg-blue-500/20' : 'bg-yellow-500/20'
                      }`}>
                        <item.icon className={`h-4 w-4 ${
                          item.status === 'excellent' ? 'text-green-400' :
                          item.status === 'good' ? 'text-blue-400' : 'text-yellow-400'
                        }`} />
                      </div>
                      <span className="text-sm text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors group">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-medium text-white">User Management</div>
                      <div className="text-xs text-gray-400">Manage user accounts and permissions</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors group">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-medium text-white">Analytics</div>
                      <div className="text-xs text-gray-400">View detailed system analytics</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-colors group">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-medium text-white">System Settings</div>
                      <div className="text-xs text-gray-400">Configure system parameters</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-orange-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Admin Support</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Need assistance with system administration? Our support team is here to help.
              </p>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors text-sm text-white">
                  <Globe className="h-4 w-4" />
                  <span>Admin Documentation</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>Contact Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;