import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (name: string, email: string, password: string, company?: string) => Promise<boolean>;
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
      const storedUser = localStorage.getItem('zetaflow_user');
      const storedToken = localStorage.getItem('zetaflow_token');
      
      if (storedUser && storedToken) {
        try {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          // Clear invalid data
          localStorage.removeItem('zetaflow_user');
          localStorage.removeItem('zetaflow_token');
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false
          });
        }
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo credentials - in real app, this would be an API call
      const validCredentials = [
        { email: 'demo@zetaflow.ai', password: 'demo123', name: 'Demo User', company: 'ZetaFlow Demo' },
        { email: 'admin@zetaflow.ai', password: 'admin123', name: 'Admin User', company: 'ZetaFlow AI' },
        { email: 'test@example.com', password: 'test123', name: 'Test User', company: 'Test Company' }
      ];

      const user = validCredentials.find(cred => cred.email === email && cred.password === password);
      
      if (user) {
        const userData: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: user.name,
          email: user.email,
          company: user.company,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0284c7&color=fff`
        };

        // Store in localStorage (in real app, use secure storage)
        localStorage.setItem('zetaflow_user', JSON.stringify(userData));
        localStorage.setItem('zetaflow_token', 'demo_token_' + Date.now());

        setAuthState({
          user: userData,
          isAuthenticated: true,
          isLoading: false
        });

        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string, company?: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const userData: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        company,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0284c7&color=fff`
      };

      // Store in localStorage (in real app, use secure storage)
      localStorage.setItem('zetaflow_user', JSON.stringify(userData));
      localStorage.setItem('zetaflow_token', 'demo_token_' + Date.now());

      setAuthState({
        user: userData,
        isAuthenticated: true,
        isLoading: false
      });

      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('zetaflow_user');
    localStorage.removeItem('zetaflow_token');
    
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