import React, { useState } from 'react';
import { Ticket, Search, Filter, Plus, Eye, MessageSquare, Clock, User, AlertCircle } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const SupportTickets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);

  const [tickets] = useState([
    {
      id: 'TKT-001',
      subject: 'Unable to access dashboard',
      status: 'open',
      priority: 'high',
      user: {
        name: 'John Smith',
        email: 'john.smith@company.com',
        avatar: 'JS'
      },
      assignedTo: 'Sarah Wilson',
      createdAt: '2025-01-15 10:30 AM',
      updatedAt: '2025-01-15 11:45 AM',
      sla: 'Within SLA',
      description: 'User reports being unable to access the main dashboard after login. Getting a blank screen.',
      responses: [
        {
          id: 1,
          author: 'John Smith',
          message: 'I cannot access my dashboard after logging in. The page loads but shows a blank screen.',
          timestamp: '2025-01-15 10:30 AM',
          isStaff: false
        },
        {
          id: 2,
          author: 'Sarah Wilson',
          message: 'Hi John, thank you for reporting this issue. Can you please try clearing your browser cache and cookies?',
          timestamp: '2025-01-15 11:45 AM',
          isStaff: true
        }
      ]
    },
    {
      id: 'TKT-002',
      subject: 'Feature request: Export functionality',
      status: 'in-progress',
      priority: 'medium',
      user: {
        name: 'Emily Davis',
        email: 'emily.davis@enterprise.com',
        avatar: 'ED'
      },
      assignedTo: 'Mike Johnson',
      createdAt: '2025-01-14 02:15 PM',
      updatedAt: '2025-01-15 09:20 AM',
      sla: 'Within SLA',
      description: 'Request to add export functionality for reports in CSV and PDF formats.',
      responses: [
        {
          id: 1,
          author: 'Emily Davis',
          message: 'Would it be possible to add export functionality for the reports? We need CSV and PDF formats.',
          timestamp: '2025-01-14 02:15 PM',
          isStaff: false
        },
        {
          id: 2,
          author: 'Mike Johnson',
          message: 'Thanks for the suggestion! This is a great feature request. I\'ve forwarded it to our development team for evaluation.',
          timestamp: '2025-01-15 09:20 AM',
          isStaff: true
        }
      ]
    },
    {
      id: 'TKT-003',
      subject: 'Billing inquiry',
      status: 'closed',
      priority: 'low',
      user: {
        name: 'Robert Chen',
        email: 'robert.chen@startup.io',
        avatar: 'RC'
      },
      assignedTo: 'Lisa Anderson',
      createdAt: '2025-01-13 04:45 PM',
      updatedAt: '2025-01-14 10:30 AM',
      sla: 'Resolved',
      description: 'Question about billing cycle and payment methods.',
      responses: [
        {
          id: 1,
          author: 'Robert Chen',
          message: 'I have a question about when my billing cycle starts and what payment methods are accepted.',
          timestamp: '2025-01-13 04:45 PM',
          isStaff: false
        },
        {
          id: 2,
          author: 'Lisa Anderson',
          message: 'Your billing cycle starts on the day you subscribe. We accept all major credit cards and PayPal.',
          timestamp: '2025-01-14 10:30 AM',
          isStaff: true
        }
      ]
    },
    {
      id: 'TKT-004',
      subject: 'System performance issues',
      status: 'open',
      priority: 'critical',
      user: {
        name: 'Maria Rodriguez',
        email: 'maria.r@techcorp.com',
        avatar: 'MR'
      },
      assignedTo: 'David Kim',
      createdAt: '2025-01-15 08:20 AM',
      updatedAt: '2025-01-15 08:20 AM',
      sla: 'Overdue',
      description: 'Experiencing severe performance issues with workflow execution.',
      responses: [
        {
          id: 1,
          author: 'Maria Rodriguez',
          message: 'Our workflows are running extremely slowly today. Some are timing out completely.',
          timestamp: '2025-01-15 08:20 AM',
          isStaff: false
        }
      ]
    }
  ]);

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'open', label: 'Open' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'closed', label: 'Closed' }
  ];

  const priorities = [
    { value: 'all', label: 'All Priority' },
    { value: 'critical', label: 'Critical' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSLABadgeColor = (sla: string) => {
    switch (sla) {
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Within SLA': return 'bg-green-100 text-green-800';
      case 'Resolved': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewTicket = (ticket: any) => {
    setSelectedTicket(ticket);
    setShowTicketModal(true);
  };

  const handleUpdateTicket = (ticketId: string, updates: any) => {
    console.log('Update ticket:', ticketId, updates);
    // Update ticket logic here
  };

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Support Tickets
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Ticket
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
                      placeholder="Search tickets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {statuses.map(status => (
                      <option key={status.value} value={status.value}>{status.label}</option>
                    ))}
                  </select>
                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {priorities.map(priority => (
                      <option key={priority.value} value={priority.value}>{priority.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Tickets Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ticket
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SLA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assigned To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{ticket.id}</div>
                          <div className="text-sm text-gray-500">{ticket.subject}</div>
                          <div className="text-xs text-gray-400 flex items-center mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {ticket.createdAt}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-700">
                                {ticket.user.avatar}
                              </span>
                            </div>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{ticket.user.name}</div>
                            <div className="text-sm text-gray-500">{ticket.user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(ticket.status)}`}>
                          {ticket.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadgeColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSLABadgeColor(ticket.sla)}`}>
                          {ticket.sla}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ticket.assignedTo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleViewTicket(ticket)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <MessageSquare className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Detail Modal */}
      {showTicketModal && selectedTicket && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{selectedTicket.id}: {selectedTicket.subject}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(selectedTicket.status)}`}>
                      {selectedTicket.status.replace('-', ' ')}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadgeColor(selectedTicket.priority)}`}>
                      {selectedTicket.priority}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSLABadgeColor(selectedTicket.sla)}`}>
                      {selectedTicket.sla}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700">{selectedTicket.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Conversation</h4>
                    {selectedTicket.responses.map((response: any) => (
                      <div key={response.id} className={`p-4 rounded-lg ${response.isStaff ? 'bg-blue-50 ml-8' : 'bg-gray-50 mr-8'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{response.author}</span>
                          <span className="text-xs text-gray-500">{response.timestamp}</span>
                        </div>
                        <p className="text-gray-700">{response.message}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Add Response</label>
                    <textarea
                      rows={4}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your response..."
                    ></textarea>
                    <div className="mt-3 flex justify-end space-x-3">
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
                        Save Draft
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                        Send Response
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Ticket Details</h4>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-xs font-medium text-gray-500">Created</dt>
                        <dd className="text-sm text-gray-900">{selectedTicket.createdAt}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-gray-500">Last Updated</dt>
                        <dd className="text-sm text-gray-900">{selectedTicket.updatedAt}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-gray-500">Assigned To</dt>
                        <dd className="text-sm text-gray-900">{selectedTicket.assignedTo}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">User Information</h4>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">
                          {selectedTicket.user.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{selectedTicket.user.name}</div>
                        <div className="text-sm text-gray-500">{selectedTicket.user.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Actions</h4>
                    <div className="space-y-2">
                      <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm">
                        <option>Change Status</option>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                      </select>
                      <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm">
                        <option>Change Priority</option>
                        <option>Critical</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                      <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm">
                        <option>Assign To</option>
                        <option>Sarah Wilson</option>
                        <option>Mike Johnson</option>
                        <option>Lisa Anderson</option>
                        <option>David Kim</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default SupportTickets;