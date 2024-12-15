import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp, Users, Eye, Clock } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { StatsCard } from '../components/dashboard/StatsCard';

export function Analytics() {
  const downloadButton = (
    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
      Download Report
    </button>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" action={downloadButton} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Sessions"
          value="24,589"
          icon={Users}
          trend={8}
          trendLabel="vs last week"
        />
        <StatsCard
          title="Page Views"
          value="85,147"
          icon={Eye}
          trend={12}
          trendLabel="vs last week"
        />
        <StatsCard
          title="Bounce Rate"
          value="42.3%"
          icon={TrendingUp}
          trend={-3}
          trendLabel="vs last week"
        />
        <StatsCard
          title="Avg. Session"
          value="2m 45s"
          icon={Clock}
          trend={5}
          trendLabel="vs last week"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h2>
          <div className="h-80 flex items-center justify-center text-gray-400 dark:text-gray-500">
            <PieChart className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Engagement</h2>
          <div className="h-80 flex items-center justify-center text-gray-400 dark:text-gray-500">
            <LineChart className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Page Performance</h2>
        <div className="h-80 flex items-center justify-center text-gray-400 dark:text-gray-500">
          <BarChart className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}