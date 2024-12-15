import React, { useState } from 'react';
import { Send, Users, Mail } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { DataTable } from '../components/common/DataTable';
import { Modal } from '../components/common/Modal';

const subscribers = [
  { id: 1, email: 'john@example.com', status: 'Subscribed', date: '2024-03-10' },
  { id: 2, email: 'jane@example.com', status: 'Unsubscribed', date: '2024-03-09' },
];

export function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'email', header: 'Email' },
    { 
      key: 'status',
      header: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'Subscribed' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'date', header: 'Date' }
  ];

  const composeButton = (
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
    >
      <Send className="w-5 h-5 mr-2" />
      Compose Newsletter
    </button>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Newsletter Management" action={composeButton} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Subscribers</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">2,845</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sent This Month</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscribers List</h2>
        <DataTable
          columns={columns}
          data={subscribers}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Compose Newsletter"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
            <textarea
              rows={6}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500"
            />
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
              Send Newsletter
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}