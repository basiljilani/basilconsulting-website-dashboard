import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 h-16 fixed top-0 right-0 left-64 border-b border-gray-200 dark:border-gray-700 z-10 transition-colors">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <ThemeToggle />
          <button className="relative p-2 text-gray-400 hover:text-emerald-600 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
              <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}