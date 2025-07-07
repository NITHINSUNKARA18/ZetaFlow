import React, { useState } from 'react';
import { UserCog, Search, Plus, Edit, Trash2, Shield, Activity, Clock, MoreVertical } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedAdmins, setSelectedAdmins] = useState<number[]>([]);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<any>(null);

  const [admins] = useState([
    {
      id: 1,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@zetaflow.ai',
      role: 'super-admin',
      isActive: true,
      twoFactorAuth: true,
      forceReset: false,
      lastLogin: '2025-01-15 11:45 AM',
      createdAt: '2024-01-15',
      loginHistory: [
        { ip: '192.168.1.100', location: 'San Francisco, CA', time: '2025-01-15 11:45 AM' },
        { ip: '192.168.1.100', location: 'San Francisco, CA', time: '2025-01-14 09:30 AM' }
      ],
      activityLogs: [
        { action: 'Updated user permissions', time: '2025-01-15 11:30 AM' },
        { action: 'Created new workflow', time: '2025-01-15 10:15 AM' }
      ]
    },
    {
      id: 2,
      name: 'Mike Johnson',
      email: 'mike.johnson@zetaflow.ai',
      role: 'admin',
      isActive: true,
      twoFactorAuth: false,
      forceReset: false,
      lastLogin: '2025-01-15 09:20 AM',
      createdAt: '2024-03-10',
      loginHistory: [
        { ip: '10.0.0.50', location: 'New York, NY', time: '2025-01-15 09:20 AM' },
        { ip: '10.0.0.50', location: 'New York, NY', time: '2025-01-14 08:45 AM' }
      ],
      activityLogs: [
        { action: 'Responded to support ticket', time: '2025-01-15 09:15 AM' },
        { action: 'Updated system settings', time: '2025-01-14 04:30 PM' }
      ]
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@zetaflow.ai',
      role: 'moderator',
      isActive: true,
      twoFactorAuth: true,
      forceReset: false,
      lastLogin: '2025-01-14 10:30 AM',
      createdAt: '2024-06-20',
      loginHistory: [
        { ip: '172.16.0.25', location: 'Chicago, IL', time: '2025-01-14 10:30 AM' },
        { ip: '172.16.0.25', location: 'Chicago, IL', time: '2025-01-13 02:15 PM' }
      ],
      activityLogs: [
        { action: 'Closed support ticket', time: '2025-01-14 10:25 AM' },
        { action: 'Updated user profile', time: '2025-01-13 03:45 PM' }
      ]
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.kim@zetaflow.ai',
      role: 'admin',
      isActive: false,
      twoFactorAuth: false,
      forceReset: true,
      lastLogin: '2025-01-10 03:22 PM',
      createdAt: '2024-08-05',
      loginHistory: [
        { ip: '203.0.113.45', location: 'Seattle, WA', time: '2025-01-10 03:22 PM' },
        { ip: '203.0.113.45', location: 'Seattle, WA', time: '2025-01-09 11:30 AM' }
      ],
      activityLogs: [
        { action: 'Failed login attempt', time: '2025-01-10 03:25 PM' },
        { action: 'Updated workflow settings', time: '2025-01-09 11:25 AM' }
      ]
    }
  ]);

  const roles = [
    { value: 'all', label: 'All Roles' },
    { value: 'super-admin', label: 'Super Admin' },
    { value: 'admin', label: 'Admin' },
    { value: 'moderator', label: 'Moderator' }
  ];

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || admin.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  const handleSelectAdmin = (adminId: number) => {
    setSelectedAdmins(prev => 
      prev.includes(adminId) 
        ? prev.filter(id => id !== adminId)
        : [...prev, adminId]
    );
  };

  const handleSelectAll = () => {
    setSelectedAdmins(
      selectedAdmins.length === filteredAdmins.length 
        ? [] 
        : filteredAdmins.map(admin => admin.id)
    );
  };

  const handleEditAdmin = (admin: any) => {
    setEditingAdmin(admin);
    setShowAdminModal(true);
  };

  const handleDeleteAdmin = (adminId: number) => {
    if (confirm('Are you sure you want to delete this admin?')) {
      console.log('Delete admin:', adminId);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super-admin': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-red-100 text-red-800';
      case 'moderator': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Admin Management
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                onClick={() => setShowAdminModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Admin
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 min-w-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search admins..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {roles.map(role => (
                      <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Admins Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        checked={selectedAdmins.length === filteredAdmins.length && filteredAdmins.length > 0}
                        onChange={handleSelectAll}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Admin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      2FA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAdmins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedAdmins.includes(admin.id)}
                          onChange={() => handleSelectAdmin(admin.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                              <Shield className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                            <div className="text-sm text-gray-500">{admin.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(admin.role)}`}>
                          {admin.role.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col space-y-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            admin.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {admin.isActive ? 'Active' : 'Inactive'}
                          </span>
                          {admin.forceReset && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Reset Required
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          admin.twoFactorAuth ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {admin.twoFactorAuth ? 'Enabled' : 'Disabled'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {admin.lastLogin}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEditAdmin(admin)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteAdmin(admin.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admin Details Cards */}
          {editingAdmin && (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Activity Logs */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Recent Activity
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {editingAdmin.activityLogs.map((log: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{log.action}</p>
                          <p className="text-xs text-gray-500">{log.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Login History */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Login History
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {editingAdmin.loginHistory.map((login: any, index: number) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{login.location}</p>
                          <p className="text-xs text-gray-500">{login.ip}</p>
                        </div>
                        <div className="text-xs text-gray-500">{login.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Admin Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingAdmin ? 'Edit Admin' : 'Add New Admin'}
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    defaultValue={editingAdmin?.name || ''}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    defaultValue={editingAdmin?.email || ''}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    defaultValue={editingAdmin?.role || 'admin'}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                    <option value="super-admin">Super Admin</option>
                  </select>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked={editingAdmin?.isActive ?? true}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Active</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked={editingAdmin?.twoFactorAuth ?? false}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">2FA Required</span>
                  </label>
                </div>
              </form>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => {
                    setShowAdminModal(false);
                    setEditingAdmin(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowAdminModal(false);
                    setEditingAdmin(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  {editingAdmin ? 'Update' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminManagement;