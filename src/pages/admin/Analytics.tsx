import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Activity, Clock, AlertTriangle, Calendar } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [timezone] = useState('America/New_York');

  const stats = [
    {
      name: 'Total Workflows',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: Activity
    },
    {
      name: 'Successful Workflows',
      value: '2,691',
      change: '+8.2%',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      name: 'Failed Workflows',
      value: '156',
      change: '-3.1%',
      changeType: 'negative',
      icon: AlertTriangle
    },
    {
      name: 'Active Users',
      value: '1,247',
      change: '+15.3%',
      changeType: 'positive',
      icon: Users
    }
  ];

  const performanceMetrics = [
    {
      name: 'Average Execution Time',
      value: '2.3s',
      description: 'Average time to complete workflows'
    },
    {
      name: 'Storage Used',
      value: '847 GB',
      description: 'Total storage consumption'
    },
    {
      name: 'Active Alerts',
      value: '12',
      description: 'Current system alerts'
    },
    {
      name: 'System Uptime',
      value: '99.9%',
      description: 'Last 30 days availability'
    }
  ];

  const workflowData = [
    { name: 'Mon', total: 245, success: 230, failed: 15 },
    { name: 'Tue', total: 312, success: 298, failed: 14 },
    { name: 'Wed', total: 189, success: 175, failed: 14 },
    { name: 'Thu', total: 278, success: 265, failed: 13 },
    { name: 'Fri', total: 356, success: 340, failed: 16 },
    { name: 'Sat', total: 198, success: 185, failed: 13 },
    { name: 'Sun', total: 167, success: 158, failed: 9 }
  ];

  const topWorkflows = [
    { name: 'Resume Screening AI', executions: 1247, successRate: 94.2 },
    { name: 'Candidate Engagement', executions: 856, successRate: 87.3 },
    { name: 'Interview Scheduling', executions: 432, successRate: 91.8 },
    { name: 'Bench Sales Automation', executions: 312, successRate: 89.1 }
  ];

  const dateRanges = [
    { value: '1d', label: 'Last 24 hours' },
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' }
  ];

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Analytics Dashboard
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {dateRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Workflow Trends Chart */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Workflow Trends</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Timezone: {timezone}</span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {workflowData.map((day, index) => (
                  <div key={day.name} className="flex flex-col items-center flex-1">
                    <div className="w-full flex flex-col space-y-1">
                      <div 
                        className="bg-green-500 rounded-t"
                        style={{ height: `${(day.success / 400) * 200}px` }}
                        title={`Success: ${day.success}`}
                      ></div>
                      <div 
                        className="bg-red-500 rounded-b"
                        style={{ height: `${(day.failed / 400) * 200}px` }}
                        title={`Failed: ${day.failed}`}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">{day.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                  <span>Successful</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                  <span>Failed</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{metric.name}</p>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Workflows Table */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Workflows</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Workflow Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Executions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Success Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topWorkflows.map((workflow, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{workflow.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{workflow.executions.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{workflow.successRate}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${workflow.successRate}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Health */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">System Health</h3>
                  <p className="text-sm text-gray-500">All systems operational</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Response Time</h3>
                  <p className="text-sm text-gray-500">Average: 145ms</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Active Alerts</h3>
                  <p className="text-sm text-gray-500">12 alerts require attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;