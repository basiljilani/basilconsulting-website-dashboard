import React from 'react';
import { BarChart2 } from 'lucide-react';

export function TrafficOverview() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Overview</h2>
        <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500">
        <BarChart2 className="w-8 h-8" />
      </div>
    </div>
  );
}