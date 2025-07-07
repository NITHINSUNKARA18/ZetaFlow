import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2, AlertCircle, Chrome, Zap, Shield, Settings, Bot, Brain, Cpu, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Check for admin credentials
      if (isAdminLogin) {
        if (formData.email === 'admin@zetaflow.ai' && formData.password === 'admin123') {
          // Simulate admin login
          localStorage.setItem('zetaflow_admin', 'true');
          navigate('/admin/dashboard');
          return;
        } else {
          setError('Invalid admin credentials.');
          setIsLoading(false);
          return;
        }
      }

      const success = await login(formData.email, formData.password);
      
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would redirect to OAuth provider
    alert(`${provider} login would redirect to OAuth provider in a real application`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 relative overflow-hidden">
      {/* Enhanced AI Automation Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-purple-50/20 to-accent-100/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-50/10 to-purple-100/20"></div>
        
        {/* Animated Neural Network Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="neural-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-primary-600">
                  <animate attributeName="r" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
                </circle>
                <path d="M 0 5 L 10 5 M 5 0 L 5 10" stroke="currentColor" strokeWidth="0.1" className="text-primary-400" opacity="0.5">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                </path>
              </pattern>
              
              <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#c026d3" stopOpacity="0.4">
                  <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#neural-grid)" />
          </svg>
        </div>

        {/* Floating AI Processing Nodes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-15 animate-float">
          <div className="w-full h-full rounded-full border-2 border-primary-300 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
            <Bot className="h-8 w-8 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full rounded-full border-2 border-blue-300 animate-pulse"></div>
          <div className="absolute inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <Brain className="h-6 w-6 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full rounded-full border-2 border-green-300 animate-pulse"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <Cpu className="h-5 w-5 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full rounded-full border-2 border-yellow-300 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
            <Zap className="h-7 w-7 text-white animate-pulse" />
          </div>
        </div>

        {/* Animated Data Flow Streams */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-30">
          <div className="h-full bg-gradient-to-r from-primary-500 to-purple-500 animate-data-stream"></div>
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30" style={{ animationDelay: '1s' }}>
          <div className="h-full bg-gradient-to-r from-purple-500 to-accent-500 animate-data-stream"></div>
        </div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" style={{ animationDelay: '2s' }}>
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-data-stream"></div>
        </div>

        {/* Vertical Data Streams */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-20">
          <div className="w-full bg-gradient-to-b from-primary-500 to-purple-500 animate-data-stream" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-400 to-transparent opacity-20">
          <div className="w-full bg-gradient-to-b from-accent-500 to-primary-500 animate-data-stream" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* AI Circuit Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-8" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#c026d3" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="circuitGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c026d3" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#c026d3" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          {/* Animated Neural Pathways */}
          <path d="M 100 200 Q 300 100 500 300 T 900 200" stroke="url(#circuitGradient1)" strokeWidth="2" fill="none" className="animate-pulse">
            <animate attributeName="stroke-dasharray" values="0 1000;50 950;0 1000" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 200 100 Q 400 300 600 150 T 800 400" stroke="url(#circuitGradient2)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }}>
            <animate attributeName="stroke-dasharray" values="0 1000;50 950;0 1000" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 50 300 Q 250 200 450 400 T 750 300" stroke="url(#circuitGradient1)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}>
            <animate attributeName="stroke-dasharray" values="0 800;40 760;0 800" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Floating AI Processing Indicators */}
        <div className="absolute top-1/3 left-1/4 opacity-12 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center shadow-ai-glow">
            <div className="w-8 h-8 border-2 border-white rounded-full animate-spin">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-2/3 right-1/4 opacity-12 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-ai-glow">
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-white rounded animate-pulse"></div>
              <div className="w-1 h-4 bg-white rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-8 bg-white rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/5 right-1/5 w-64 h-64 bg-gradient-radial from-primary-400/20 via-purple-400/10 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-48 h-48 bg-gradient-radial from-accent-400/20 via-blue-400/10 to-transparent rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        
        {/* AI Processing Waves */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent transform -skew-y-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Back to Home Button - Fixed Position Left Middle */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        <Link
          to="/"
          className="group flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-white/30 hover:bg-white transition-all duration-300 transform hover:scale-110 hover:shadow-3xl"
          title="Back to Home"
        >
          <Home className="h-7 w-7 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
          
          {/* Tooltip */}
          <div className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
              Back to Home
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
            </div>
          </div>
          
          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
        </Link>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="inline-block mb-8">
              <img 
                src="/new trasparent.png" 
                alt="ZetaFlow.AI" 
                className="h-24 w-auto mx-auto drop-shadow-lg"
              />
            </Link>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {isAdminLogin ? 'Admin Portal' : 'Welcome Back to ZetaFlow.AI'}
            </h2>
            <p className="text-lg text-gray-600">
              {isAdminLogin ? 'Secure admin access to system controls.' : 'Automate your workflows seamlessly with AI agents.'}
            </p>
          </div>

          {/* Admin/User Toggle */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 p-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsAdminLogin(false)}
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  !isAdminLogin
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>User Login</span>
                </div>
              </button>
              <button
                onClick={() => setIsAdminLogin(true)}
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  isAdminLogin
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </div>
              </button>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3 animate-slide-up">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">Login Failed</h4>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {isAdminLogin ? 'Admin Email Address' : 'Email Address'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className={`h-5 w-5 transition-colors duration-200 ${
                      focusedField === 'email' ? 'text-primary-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                      focusedField === 'email'
                        ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg bg-white/90'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder={isAdminLogin ? "Enter admin email" : "Enter your email"}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className={`h-5 w-5 transition-colors duration-200 ${
                      focusedField === 'password' ? 'text-primary-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                      focusedField === 'password'
                        ? 'border-primary-500 ring-4 ring-primary-100 shadow-lg bg-white/90'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                  {focusedField === 'password' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group ${
                  isAdminLogin
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                    : 'bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white'
                }`}
              >
                {/* Button Background Animation */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isAdminLogin
                    ? 'bg-gradient-to-r from-red-600 to-orange-600'
                    : 'bg-gradient-to-r from-purple-600 to-primary-600'
                }`}></div>
                
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>{isAdminLogin ? 'Access Admin Portal' : 'Log In'}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </div>
              </button>

              {/* Forgot Password */}
              {!isAdminLogin && (
                <div className="text-center">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              {/* Divider */}
              {!isAdminLogin && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-medium">or</span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => handleSocialLogin('Google')}
                      className="w-full flex items-center justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group bg-white/80 backdrop-blur-sm"
                    >
                      <Chrome className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-gray-700">Log in with Google</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleSocialLogin('Microsoft')}
                      className="w-full flex items-center justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group bg-white/80 backdrop-blur-sm"
                    >
                      <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                        M
                      </div>
                      <span className="font-medium text-gray-700">Log in with Microsoft</span>
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* Sign Up Link */}
            {!isAdminLogin && (
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-gray-700 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-gray-700 transition-colors duration-200">
                Terms of Service
              </Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-gray-700 transition-colors duration-200">
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;