import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  render?: (value: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onRowClick?: (row: any) => void;
}

export function DataTable({ columns, data, onRowClick }: DataTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50">
              {columns.map((column) => (
                <th key={column.key} className="px-8 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((row, index) => (
              <tr
                key={index}
                onClick={() => onRowClick?.(row)}
                className={`${onRowClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50' : ''}`}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-8 py-5 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    {column.render ? column.render(row[column.key]) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-8 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <select className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1.5 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <option>10 per page</option>
            <option>25 per page</option>
            <option>50 per page</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">Page 1 of 10</span>
          <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}