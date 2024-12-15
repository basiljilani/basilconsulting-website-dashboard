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
  LogOut
} from 'lucide-react';
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

export function Sidebar() {
  return (
    <aside className="bg-white h-screen w-64 border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-emerald-600">Basil Admin</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      
      <div className="absolute bottom-0 w-full p-6">
        <button className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}