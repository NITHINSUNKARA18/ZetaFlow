import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <img 
                src="/new trasparent.png" 
                alt="Zetaflow" 
                className="h-[150px] w-[250px] object-contain filter brightness-0 invert"
                style={{
                  imageRendering: 'crisp-edges',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing business processes with AI-powered agents and intelligent workflow automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/aira" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  AI Recruitment Agent
                </Link>
              </li>
              <li>
                <Link to="/products/real-estate" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  AI Real Estate Agent
                </Link>
              </li>
              <li>
                <Link to="/products/marketing" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  AI Marketing Agent
                </Link>
              </li>
              <li>
                <Link to="/products/stock-market" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  AI Stock Market Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources#docs" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/resources#cases" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources#ebooks" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  E-books
                </Link>
              </li>
              <li>
                <Link to="/resources#templates" className="text-gray-300 hover:text-brand-400 transition-colors text-sm">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@zetaflow.ai</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 AI Street<br />
                  Tech Valley, CA 94000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zetaflow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;