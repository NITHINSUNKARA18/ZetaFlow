import React, { useState } from 'react';
import { Settings, Globe, Clock, Mail, Database, Shield, Save } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const SystemSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    systemName: 'ZetaFlow AI Admin Portal',
    timezone: 'America/New_York',
    language: 'en',
    maxWorkflows: 1000,
    retentionDays: 90,
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUsername: '',
    smtpPassword: '',
    fromEmail: 'noreply@zetaflow.ai',
    auditLogs: true,
    logRetention: 365,
    maintenanceMode: false,
    apiRateLimit: 1000,
    sessionTimeout: 30
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings updated:', settings);
    // Show success message
  };

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'email', name: 'Email', icon: Mail },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'system', name: 'System', icon: Database },
  ];

  const timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney'
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' }
  ];

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                System Settings
              </h2>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-white shadow rounded-lg">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                    >
                      <tab.icon className="h-5 w-5 mr-2" />
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <form onSubmit={handleSubmit} className="p-6">
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="systemName" className="block text-sm font-medium text-gray-700">
                            System Name
                          </label>
                          <input
                            type="text"
                            name="systemName"
                            id="systemName"
                            value={settings.systemName}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                            Timezone
                          </label>
                          <select
                            name="timezone"
                            id="timezone"
                            value={settings.timezone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          >
                            {timezones.map((tz) => (
                              <option key={tz} value={tz}>{tz}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                            Default Language
                          </label>
                          <select
                            name="language"
                            id="language"
                            value={settings.language}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          >
                            {languages.map((lang) => (
                              <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
                            Session Timeout (minutes)
                          </label>
                          <input
                            type="number"
                            name="sessionTimeout"
                            id="sessionTimeout"
                            value={settings.sessionTimeout}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">System Limits</h3>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="maxWorkflows" className="block text-sm font-medium text-gray-700">
                            Maximum Workflows
                          </label>
                          <input
                            type="number"
                            name="maxWorkflows"
                            id="maxWorkflows"
                            value={settings.maxWorkflows}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="retentionDays" className="block text-sm font-medium text-gray-700">
                            Data Retention (days)
                          </label>
                          <input
                            type="number"
                            name="retentionDays"
                            id="retentionDays"
                            value={settings.retentionDays}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="apiRateLimit" className="block text-sm font-medium text-gray-700">
                            API Rate Limit (requests/hour)
                          </label>
                          <input
                            type="number"
                            name="apiRateLimit"
                            id="apiRateLimit"
                            value={settings.apiRateLimit}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'email' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">SMTP Configuration</h3>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="smtpHost" className="block text-sm font-medium text-gray-700">
                            SMTP Host
                          </label>
                          <input
                            type="text"
                            name="smtpHost"
                            id="smtpHost"
                            value={settings.smtpHost}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700">
                            SMTP Port
                          </label>
                          <input
                            type="number"
                            name="smtpPort"
                            id="smtpPort"
                            value={settings.smtpPort}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="smtpUsername" className="block text-sm font-medium text-gray-700">
                            SMTP Username
                          </label>
                          <input
                            type="text"
                            name="smtpUsername"
                            id="smtpUsername"
                            value={settings.smtpUsername}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700">
                            SMTP Password
                          </label>
                          <input
                            type="password"
                            name="smtpPassword"
                            id="smtpPassword"
                            value={settings.smtpPassword}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="fromEmail" className="block text-sm font-medium text-gray-700">
                            From Email Address
                          </label>
                          <input
                            type="email"
                            name="fromEmail"
                            id="fromEmail"
                            value={settings.fromEmail}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <button
                        type="button"
                        className="bg-gray-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-700"
                      >
                        Test Email Configuration
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Enable Audit Logs</h4>
                            <p className="text-sm text-gray-500">Track all administrative actions</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              name="auditLogs"
                              checked={settings.auditLogs}
                              onChange={handleInputChange}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Maintenance Mode</h4>
                            <p className="text-sm text-gray-500">Temporarily disable user access</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              name="maintenanceMode"
                              checked={settings.maintenanceMode}
                              onChange={handleInputChange}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Log Retention</h3>
                      <div>
                        <label htmlFor="logRetention" className="block text-sm font-medium text-gray-700">
                          Log Retention Period (days)
                        </label>
                        <input
                          type="number"
                          name="logRetention"
                          id="logRetention"
                          value={settings.logRetention}
                          onChange={handleInputChange}
                          className="mt-1 block w-full sm:w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Logs older than this period will be automatically deleted
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">System Information</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">System Version</dt>
                            <dd className="mt-1 text-sm text-gray-900">v2.1.0</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Database Version</dt>
                            <dd className="mt-1 text-sm text-gray-900">PostgreSQL 14.2</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Last Backup</dt>
                            <dd className="mt-1 text-sm text-gray-900">2025-01-15 03:00 AM</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Uptime</dt>
                            <dd className="mt-1 text-sm text-gray-900">15 days, 4 hours</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">System Actions</h3>
                      <div className="space-y-3">
                        <button
                          type="button"
                          className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 mr-3"
                        >
                          Create Backup
                        </button>
                        <button
                          type="button"
                          className="bg-yellow-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-yellow-700 mr-3"
                        >
                          Clear Cache
                        </button>
                        <button
                          type="button"
                          className="bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700"
                        >
                          Restart System
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SystemSettings;