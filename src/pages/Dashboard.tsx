import React from 'react';
import { Users, Eye, Mail, FileText } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { TrafficOverview } from '../components/dashboard/TrafficOverview';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { PageHeader } from '../components/common/PageHeader';

export function Dashboard() {
  const generateReportButton = (
    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
      Generate Report
    </button>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard Overview" action={generateReportButton} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Visitors"
          value="12,345"
          icon={Users}
          trend={12}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Page Views"
          value="48,768"
          icon={Eye}
          trend={8}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Newsletter Subscribers"
          value="2,845"
          icon={Mail}
          trend={15}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Blog Posts"
          value="156"
          icon={FileText}
          trend={5}
          trendLabel="vs last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficOverview />
        <RecentActivity />
      </div>
    </div>
  );
}