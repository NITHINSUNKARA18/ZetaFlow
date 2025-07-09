import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Bot, 
  Home, 
  TrendingUp, 
  Target,
  BookOpen,
  Briefcase,
  Users,
  LogIn
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  // Refs for timeout management
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (dropdown: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Set a delay before closing the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
  };

  // Handle navigation with scroll to top
  const handleNavigation = (to: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    // The ScrollToTop component will handle scrolling to top
  };

  const productDropdownItems = [
    { 
      name: 'AI Recruitment Agent (AIRA)', 
      path: '/products/aira',
      icon: Bot,
      gradient: 'from-brand-500 to-accent-600',
      description: 'Intelligent hiring automation'
    },
    { 
      name: 'AI Real Estate Agent', 
      path: '/products/real-estate',
      icon: Home,
      gradient: 'from-success-500 to-brand-600',
      description: 'Property management & insights'
    },
    { 
      name: 'AI Marketing Agent', 
      path: '/products/marketing',
      icon: Target,
      gradient: 'from-accent-500 to-error-600',
      description: 'Campaign optimization & ROI'
    },
    { 
      name: 'AI Stock Market Agent', 
      path: '/products/stock-market',
      icon: TrendingUp,
      gradient: 'from-warning-500 to-brand-600',
      description: 'Trading insights & analysis'
    },
  ];

  const resourcesDropdownItems = [
    { 
      name: 'E-books', 
      path: '/resources#ebooks',
      icon: BookOpen,
      gradient: 'from-purple-500 to-pink-600',
      description: 'In-depth guides & strategies'
    }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Made bigger */}
          <Link to="/" onClick={() => handleNavigation('/')} className="flex items-center space-x-2 -ml-8">
            <img 
              src="/new trasparent.png" 
              alt="Zetaflow" 
              className="h-[200px] w-[200px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => handleNavigation('/')}
              className={`relative text-base lg:text-lg font-semibold transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text ${
                isActive('/') 
                  ? 'text-transparent bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text' 
                  : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => handleNavigation('/about')}
              className={`relative text-base lg:text-lg font-semibold transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text ${
                isActive('/about') 
                  ? 'text-transparent bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text' 
                  : 'text-gray-700'
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-base lg:text-lg font-semibold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text transition-all duration-300">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'products' && (
                <div 
                  className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 py-4 z-50 animate-fade-in"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">AI Agent Suite</h3>
                  </div>
                  {productDropdownItems.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="group block px-4 py-3 hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-accent-600 group-hover:bg-clip-text transition-all duration-300">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-base lg:text-lg font-semibold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text transition-all duration-300">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div 
                  className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 py-4 z-50 animate-fade-in"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Learning Center</h3>
                  </div>
                  {resourcesDropdownItems.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="group block px-4 py-3 hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm lg:text-base font-medium text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-accent-600 group-hover:bg-clip-text transition-all duration-300">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/services"
              onClick={() => handleNavigation('/services')}
              className={`relative text-base lg:text-lg font-semibold transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text ${
                isActive('/services') 
                  ? 'text-transparent bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text' 
                  : 'text-gray-700'
              }`}
            >
              Services
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              onClick={() => handleNavigation('/contact')}
              className="hidden md:inline-flex items-center px-6 py-3 border border-transparent text-base lg:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-base font-semibold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text transition-all duration-300 py-2"
                onClick={() => handleNavigation('/')}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-base font-semibold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text transition-all duration-300 py-2"
                onClick={() => handleNavigation('/about')}
              >
                About Us
              </Link>
              
              <div className="space-y-2">
                <div className="text-base font-semibold text-transparent bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text py-2">Products</div>
                {productDropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center space-x-3 pl-4 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors py-2"
                    onClick={() => handleNavigation(item.path)}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-md flex items-center justify-center`}>
                      <item.icon className="h-3 w-3 text-white" />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold text-transparent bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text py-2">Resources</div>
                {resourcesDropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center space-x-3 pl-4 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors py-2"
                    onClick={() => handleNavigation(item.path)}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-md flex items-center justify-center`}>
                      <item.icon className="h-3 w-3 text-white" />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              <Link
                to="/services"
                className="block text-base font-semibold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-accent-600 hover:bg-clip-text transition-all duration-300 py-2"
                onClick={() => handleNavigation('/services')}
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 w-full text-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 transition-all duration-300 mt-4"
                onClick={() => handleNavigation('/contact')}
              >
                <Briefcase className="h-4 w-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;