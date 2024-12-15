import React, { useState } from 'react';
import { Plus, UserPlus, Mail, Shield } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { DataTable } from '../components/common/DataTable';
import { Modal } from '../components/common/Modal';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Viewer', status: 'Inactive' },
];

export function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { 
      key: 'name',
      header: 'Name',
      render: (value: string) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">{value.charAt(0)}</span>
          </div>
          <span className="text-gray-900 dark:text-white">{value}</span>
        </div>
      )
    },
    { 
      key: 'email',
      header: 'Email',
      render: (value: string) => (
        <span className="text-gray-900 dark:text-white">{value}</span>
      )
    },
    { 
      key: 'role',
      header: 'Role',
      render: (value: string) => (
        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
          {value}
        </span>
      )
    },
    { 
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Active' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
        }`}>
          {value}
        </span>
      )
    }
  ];

  const addUserButton = (
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
    >
      <UserPlus className="w-5 h-5 mr-2" />
      Add User
    </button>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="User Management" action={addUserButton} />
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        
        <DataTable
          columns={columns}
          data={users}
          onRowClick={(row) => console.log('Row clicked:', row)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New User"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <select className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500">
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Add User
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}