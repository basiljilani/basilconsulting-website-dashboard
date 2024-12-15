import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  trendLabel?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, trendLabel }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</h3>
          {trend && (
            <div className="flex items-center mt-2">
              <span className={`text-sm ${trend > 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {trend > 0 ? '+' : ''}{trend}%
              </span>
              {trendLabel && <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">{trendLabel}</span>}
            </div>
          )}
        </div>
        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>
    </div>
  );
}