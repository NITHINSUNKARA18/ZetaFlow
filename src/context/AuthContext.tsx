import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiService, User } from '../services/api';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (name: string, email: string, password: string, company?: string) => Promise<boolean>;
  updateProfile: (name: string, company?: string) => Promise<boolean>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      if (!apiService.isAuthenticated()) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
        return;
      }
      
      try {
        // Verify token with backend
        const { user } = await apiService.getCurrentUser();
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error) {
        console.error('Auth check failed:', error);
        // Clear invalid session
        await apiService.logout();
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, isAdmin: boolean = false): Promise<boolean> => {
    try {
      const { user } = await apiService.login(email, password, isAdmin);
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string, company?: string): Promise<boolean> => {
    try {
      const { user } = await apiService.register(name, email, password, company);

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });

      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const updateProfile = async (name: string, company?: string): Promise<boolean> => {
    try {
      const { user } = await apiService.updateProfile(name, company);
      
      setAuthState(prev => ({
        ...prev,
        user
      }));
      
      return true;
    } catch (error) {
      console.error('Profile update error:', error);
      return false;
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      signup
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};