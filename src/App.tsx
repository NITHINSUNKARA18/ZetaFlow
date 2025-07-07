import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AIRAPage from './pages/products/AIRAPage';
import ResumeScreening from './pages/aira/ResumeScreening';
import AutomatedResumeScreeningDetail from './pages/aira/AutomatedResumeScreeningDetail';
import CropToCrop from './pages/aira/CropToCrop';
import CandidateEngagement from './pages/aira/CandidateEngagement';
import SchedulingAutomation from './pages/aira/SchedulingAutomation';
import BenchSales from './pages/aira/BenchSales';
import HiringDashboards from './pages/aira/HiringDashboards';
import BusinessDevelopment from './pages/aira/BusinessDevelopment';
import AIFollowups from './pages/aira/AIFollowups';
import RealEstateAgent from './pages/products/RealEstateAgent';
import MarketingAgent from './pages/products/MarketingAgent';
import StockMarketAgent from './pages/products/StockMarketAgent';
import Resources from './pages/Resources';
import EbookDetail from './pages/EbookDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          
          <Routes>
            {/* Public routes with header/footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Admin Dashboard route (no header/footer) */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* Protected dashboard route (no header/footer) */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Public routes with header/footer */}
            <Route path="/*" element={
              <>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/aira" element={<AIRAPage />} />
                    <Route path="/aira/resume-screening" element={<ResumeScreening />} />
                    <Route path="/aira/automated-resume-screening" element={<AutomatedResumeScreeningDetail />} />
                    <Route path="/aira/crop-to-crop" element={<CropToCrop />} />
                    <Route path="/aira/candidate-engagement" element={<CandidateEngagement />} />
                    <Route path="/aira/scheduling-automation" element={<SchedulingAutomation />} />
                    <Route path="/aira/bench-sales" element={<BenchSales />} />
                    <Route path="/aira/hiring-dashboards" element={<HiringDashboards />} />
                    <Route path="/aira/business-development" element={<BusinessDevelopment />} />
                    <Route path="/aira/ai-followups" element={<AIFollowups />} />
                    <Route path="/products/real-estate" element={<RealEstateAgent />} />
                    <Route path="/products/marketing" element={<MarketingAgent />} />
                    <Route path="/products/stock-market" element={<StockMarketAgent />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/ebook/automated-income-engine" element={<EbookDetail />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CartPage />} />
                  </Routes>
                </main>
                <Footer />
                <BackToTop />
                <Chatbot />
              </>
            } />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;