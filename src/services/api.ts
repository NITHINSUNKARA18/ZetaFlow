const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: string;
  avatar?: string;
  createdAt: string;
  updatedAt?: string;
}

interface LoginResponse {
  user: User;
  token: string;
  message: string;
}

interface RegisterResponse {
  user: User;
  token: string;
  message: string;
}

class ApiService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('zetaflow_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }
    
    return data;
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string; version: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    return this.handleResponse(response);
  }

  // Authentication
  async login(email: string, password: string, isAdmin: boolean = false): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ email, password, isAdmin })
    });
    
    const data = await this.handleResponse<LoginResponse>(response);
    
    // Store token and user data
    localStorage.setItem('zetaflow_token', data.token);
    localStorage.setItem('zetaflow_user', JSON.stringify(data.user));
    
    return data;
  }

  async register(name: string, email: string, password: string, company?: string): Promise<RegisterResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ name, email, password, company })
    });
    
    const data = await this.handleResponse<RegisterResponse>(response);
    
    // Store token and user data
    localStorage.setItem('zetaflow_token', data.token);
    localStorage.setItem('zetaflow_user', JSON.stringify(data.user));
    
    return data;
  }

  async logout(): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });
    } catch (error) {
      console.warn('Logout request failed:', error);
    } finally {
      // Always clear local storage
      localStorage.removeItem('zetaflow_token');
      localStorage.removeItem('zetaflow_user');
      localStorage.removeItem('zetaflow_admin');
    }
  }

  async getCurrentUser(): Promise<{ user: User }> {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: this.getAuthHeaders()
    });
    
    return this.handleResponse(response);
  }

  async updateProfile(name: string, company?: string): Promise<{ user: User; message: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ name, company })
    });
    
    const data = await this.handleResponse<{ user: User; message: string }>(response);
    
    // Update stored user data
    localStorage.setItem('zetaflow_user', JSON.stringify(data.user));
    
    return data;
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ currentPassword, newPassword })
    });
    
    return this.handleResponse(response);
  }

  // Admin endpoints
  async getUsers(): Promise<{ users: User[] }> {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      headers: this.getAuthHeaders()
    });
    
    return this.handleResponse(response);
  }

  async getAdminStats(): Promise<{ stats: any }> {
    const response = await fetch(`${API_BASE_URL}/admin/stats`, {
      headers: this.getAuthHeaders()
    });
    
    return this.handleResponse(response);
  }

  // Utility methods
  isAuthenticated(): boolean {
    const token = localStorage.getItem('zetaflow_token');
    const user = localStorage.getItem('zetaflow_user');
    return !!(token && user);
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('zetaflow_user');
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('zetaflow_token');
  }
}

export const apiService = new ApiService();
export type { User, LoginResponse, RegisterResponse };