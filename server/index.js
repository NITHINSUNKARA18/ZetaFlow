const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Auth rate limiting (more restrictive)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 auth requests per windowMs
  message: 'Too many authentication attempts, please try again later.'
});

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// In-memory storage (replace with database in production)
const users = new Map();
const adminUsers = new Map();

// Initialize default admin user
const defaultAdminPassword = bcrypt.hashSync('admin123', 10);
adminUsers.set('admin@zetaflow.ai', {
  id: uuidv4(),
  email: 'admin@zetaflow.ai',
  password: defaultAdminPassword,
  name: 'Admin User',
  role: 'admin',
  createdAt: new Date().toISOString()
});

// Initialize demo users
const demoUsers = [
  {
    email: 'demo@zetaflow.ai',
    password: bcrypt.hashSync('demo123', 10),
    name: 'Demo User',
    company: 'ZetaFlow Demo'
  },
  {
    email: 'test@example.com',
    password: bcrypt.hashSync('test123', 10),
    name: 'Test User',
    company: 'Test Company'
  }
];

demoUsers.forEach(user => {
  users.set(user.email, {
    id: uuidv4(),
    ...user,
    role: 'user',
    createdAt: new Date().toISOString(),
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0284c7&color=fff`
  });
});

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Middleware to verify admin role
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// User Registration
app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { name, email, password, company } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Check if user already exists
    if (users.has(email)) {
      return res.status(409).json({ error: 'User already exists with this email' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
      company: company || '',
      role: 'user',
      createdAt: new Date().toISOString(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0284c7&color=fff`
    };

    users.set(email, user);

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(201).json({
      message: 'User created successfully',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User Login
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check appropriate user store
    const userStore = isAdmin ? adminUsers : users;
    const user = userStore.get(email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get current user profile
app.get('/api/auth/me', authenticateToken, (req, res) => {
  try {
    const userStore = req.user.role === 'admin' ? adminUsers : users;
    const user = userStore.get(req.user.email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });

  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user profile
app.put('/api/auth/profile', authenticateToken, async (req, res) => {
  try {
    const { name, company } = req.body;
    const userStore = req.user.role === 'admin' ? adminUsers : users;
    const user = userStore.get(req.user.email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user data
    if (name) user.name = name;
    if (company !== undefined) user.company = company;
    user.updatedAt = new Date().toISOString();

    // Update avatar if name changed
    if (name) {
      user.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0284c7&color=fff`;
    }

    userStore.set(req.user.email, user);

    const { password: _, ...userWithoutPassword } = user;
    res.json({
      message: 'Profile updated successfully',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Change password
app.put('/api/auth/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current password and new password are required' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'New password must be at least 6 characters long' });
    }

    const userStore = req.user.role === 'admin' ? adminUsers : users;
    const user = userStore.get(req.user.email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    user.updatedAt = new Date().toISOString();

    userStore.set(req.user.email, user);

    res.json({ message: 'Password changed successfully' });

  } catch (error) {
    console.error('Password change error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Get all users
app.get('/api/admin/users', authenticateToken, requireAdmin, (req, res) => {
  try {
    const allUsers = Array.from(users.values()).map(user => {
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    res.json({ users: allUsers });

  } catch (error) {
    console.error('Admin users fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Get system stats
app.get('/api/admin/stats', authenticateToken, requireAdmin, (req, res) => {
  try {
    const stats = {
      totalUsers: users.size,
      totalAdmins: adminUsers.size,
      recentSignups: Array.from(users.values())
        .filter(user => {
          const signupDate = new Date(user.createdAt);
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return signupDate > weekAgo;
        }).length,
      systemUptime: process.uptime(),
      timestamp: new Date().toISOString()
    };

    res.json({ stats });

  } catch (error) {
    console.error('Admin stats fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Logout (client-side token removal, but we can log it)
app.post('/api/auth/logout', authenticateToken, (req, res) => {
  // In a production app, you might want to blacklist the token
  console.log(`User ${req.user.email} logged out at ${new Date().toISOString()}`);
  res.json({ message: 'Logout successful' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 ZetaFlow Backend Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`👤 Demo credentials: demo@zetaflow.ai / demo123`);
  console.log(`🔐 Admin credentials: admin@zetaflow.ai / admin123`);
});