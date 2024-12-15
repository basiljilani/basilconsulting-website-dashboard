import React from 'react';
import { Users } from 'lucide-react';

interface ActivityItem {
  id: number;
  message: string;
  timeAgo: string;
}

const activities: ActivityItem[] = [
  { id: 1, message: 'New user registered', timeAgo: '1 hour ago' },
  { id: 2, message: 'Blog post published', timeAgo: '2 hours ago' },
  { id: 3, message: 'Newsletter sent', timeAgo: '3 hours ago' },
  { id: 4, message: 'Settings updated', timeAgo: '4 hours ago' },
];

export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4 py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}