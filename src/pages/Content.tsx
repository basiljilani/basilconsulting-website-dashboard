import React, { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { DataTable } from '../components/common/DataTable';
import { Modal } from '../components/common/Modal';

const posts = [
  { id: 1, title: 'Getting Started with React', status: 'Published', author: 'John Doe', date: '2024-03-10' },
  { id: 2, title: 'Advanced TypeScript Tips', status: 'Draft', author: 'Jane Smith', date: '2024-03-09' },
];

export function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'title', header: 'Title' },
    { key: 'status', header: 'Status', render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Published' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
      }`}>
        {value}
      </span>
    )},
    { key: 'author', header: 'Author' },
    { key: 'date', header: 'Date' },
    { 
      key: 'actions',
      header: 'Actions',
      render: () => (
        <div className="flex space-x-2">
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
            <Trash className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  const newPostButton = (
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
    >
      <Plus className="w-5 h-5 mr-2" />
      New Post
    </button>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Content Management" action={newPostButton} />
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        
        <DataTable
          columns={columns}
          data={posts}
          onRowClick={(row) => console.log('Row clicked:', row)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Post"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
            <textarea
              rows={4}
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
              Create
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}