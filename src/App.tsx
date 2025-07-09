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

// Admin Pages
import AdminProfile from './pages/admin/AdminProfile';
import SystemSettings from './pages/admin/SystemSettings';
import UserManagement from './pages/admin/UserManagement';
import Analytics from './pages/admin/Analytics';
import SupportTickets from './pages/admin/SupportTickets';
import AdminManagement from './pages/admin/AdminManagement';
import HelpSupport from './pages/admin/HelpSupport';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          
          <Routes>
            {/* Public routes with header/footer */}
            {/* Admin routes (no header/footer) */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/system-settings" element={<SystemSettings />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/support" element={<SupportTickets />} />
            <Route path="/admin/admins" element={<AdminManagement />} />
            <Route path="/admin/help" element={<HelpSupport />} />
            
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
              </>
            } />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;