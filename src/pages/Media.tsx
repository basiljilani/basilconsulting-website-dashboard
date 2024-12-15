import React, { useState } from 'react';
import { Upload, Image, File, Trash2 } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

const mediaItems = [
  { id: 1, name: 'hero-image.jpg', type: 'image', size: '2.4 MB', url: 'https://source.unsplash.com/random/800x600' },
  { id: 2, name: 'document.pdf', type: 'document', size: '1.2 MB' },
];

export function Media() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const uploadButton = (
    <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
      <Upload className="w-5 h-5 mr-2" />
      Upload Files
    </button>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Media Library" action={uploadButton} />

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded ${view === 'grid' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <Image className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded ${view === 'list' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <File className="w-5 h-5" />
            </button>
          </div>
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option>All Files</option>
            <option>Images</option>
            <option>Documents</option>
          </select>
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mediaItems.map((item) => (
              <div key={item.id} className="group relative">
                {item.type === 'image' ? (
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <File className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  </div>
                )}
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.size}</p>
                </div>
                <button className="absolute top-2 right-2 p-1.5 bg-red-100 dark:bg-red-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Name</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Type</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Size</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mediaItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">{item.name}</td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white">{item.type}</td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white">{item.size}</td>
                  <td className="py-3 px-4">
                    <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}