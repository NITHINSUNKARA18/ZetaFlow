import React from 'react';
import { X, ArrowRight, Calendar, Clock, Star } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl border border-gray-200 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 bg-white/95 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-xl border border-gray-200 group"
        >
          <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
        
        {/* Content */}
        <div className="p-8 sm:p-12 text-center bg-gradient-to-br from-primary-50 to-purple-50">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Demo Video Coming Soon!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
            We're creating an amazing demo video that showcases AIRA's powerful AI recruitment capabilities. 
            Stay tuned for an immersive experience!
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary-500" />
              <span>Coming Q2 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Exclusive Preview</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                onClose();
                window.location.href = '/products/aira';
              }}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore AIRA Now</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => {
                onClose();
                window.location.href = '/contact';
              }}
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 bg-white rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold shadow-md hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Schedule Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;