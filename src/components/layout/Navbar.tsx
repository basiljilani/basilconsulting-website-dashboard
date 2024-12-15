import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  BarChart,
  Mail,
  Image,
  LogOut,
  Menu,
  Circle,
} from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import type { MenuItem } from '../../types';

const menuItems: MenuItem[] = [
  { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { title: 'Content', path: '/content', icon: FileText },
  { title: 'Users', path: '/users', icon: Users },
  { title: 'Analytics', path: '/analytics', icon: BarChart },
  { title: 'Newsletter', path: '/newsletter', icon: Mail },
  { title: 'Media', path: '/media', icon: Image },
  { title: 'Settings', path: '/settings', icon: Settings },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-10 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between w-full px-8">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl text-gray-900 dark:text-white font-bold tracking-tight">Basil Consulting</span>
              <Circle className="w-2.5 h-2.5 fill-current text-emerald-500 transform translate-y-[0.35em] ml-1" />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center justify-end flex-1 ml-16">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-purple-400 transition-colors ml-8"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200 dark:border-gray-700">
                <ThemeToggle />
                <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-purple-400 transition-colors">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between w-full px-4">
            <div className="flex items-center">
              <span className="text-xl text-gray-900 dark:text-white font-bold tracking-tight">Basil Consulting</span>
              <Circle className="w-2 h-2 fill-current text-emerald-500 transform translate-y-[0.35em] ml-1" />
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-purple-400"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.title}
              </Link>
            ))}
            <button 
              className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}